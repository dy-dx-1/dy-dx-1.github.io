import { getCollection, type CollectionEntry } from 'astro:content';

// Videos aren't optimized like images, but importing them through Vite still
// copies them into the build with a cache-friendly hashed URL. Keys look like
// '/src/assets/projects/<project>/<file>.mp4'.
const videoUrls = import.meta.glob<string>('/src/assets/**/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Gallery videos are written relative to the Markdown file, like images.
// Paths starting with '/' are left alone and served from public/.
function resolveVideo(project: CollectionEntry<'projects'>, path: string) {
  if (path.startsWith('/')) return path;

  // filePath is always set by the glob loader, e.g. 'src/content/projects/x.md'
  const key = new URL(path, `file:///${project.filePath!}`).pathname;
  const url = videoUrls[key];
  if (!url) {
    throw new Error(`Video "${path}" not found (referenced in ${project.filePath})`);
  }
  return url;
}

// Drafts are visible in `npm run dev` but excluded from production builds.
export async function getPublishedProjects() {
  const projects = await getCollection(
    'projects',
    (project) => import.meta.env.DEV || !project.data.draft,
  );

  for (const project of projects) {
    for (const item of project.data.gallery) {
      if (typeof item === 'object' && 'video' in item) {
        item.video = resolveVideo(project, item.video);
      }
    }
  }

  // Projects without an `order` go last.
  return projects.sort(
    (a, b) =>
      (a.data.order ?? Number.MAX_SAFE_INTEGER) -
      (b.data.order ?? Number.MAX_SAFE_INTEGER),
  );
}

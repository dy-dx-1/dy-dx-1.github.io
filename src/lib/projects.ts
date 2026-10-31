import { getCollection } from 'astro:content';

// Drafts are visible in `npm run dev` but excluded from production builds.
export async function getPublishedProjects() {
  const projects = await getCollection(
    'projects',
    (project) => import.meta.env.DEV || !project.data.draft,
  );

  // Projects without an `order` go last.
  return projects.sort(
    (a, b) =>
      (a.data.order ?? Number.MAX_SAFE_INTEGER) -
      (b.data.order ?? Number.MAX_SAFE_INTEGER),
  );
}

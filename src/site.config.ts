// Site-wide switches.

// While true, the published site only shows the Projects section:
// the homepage and About page redirect to /projects and the About link is
// hidden from the header. `npm run dev` still shows the full site so those
// pages can be worked on. Set to false once they are ready to publish.
export const PROJECTS_ONLY = true;

// The full site is shown in development, or once PROJECTS_ONLY is turned off.
// To preview the projects-only version locally: `npm run build`, then
// `npm run preview`.
export const SHOW_FULL_SITE = import.meta.env.DEV || !PROJECTS_ONLY;

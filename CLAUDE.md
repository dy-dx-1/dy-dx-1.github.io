## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

### HANDOFF INSTRUCTIONS 
# PROJECT HANDOFF — PERSONAL ENGINEERING PORTFOLIO

## 1. Project Overview

I'm building a personal engineering portfolio website to support future job applications and serve as an archive of my projects.

My background:
- Bachelor's degree in Mechanical Engineering from Polytechnique Montréal.
- Currently pursuing a research master's in Computer Engineering.
- Experience in robotics, embedded systems, mechanical design, software development, and engineering leadership.
- Career interests include space systems, robotics, defence, intelligence, and public safety technology.

The portfolio should communicate my interdisciplinary engineering abilities, technical ownership, practical problem-solving, and leadership experience.

I prefer a minimalist, professional design. The website should be visually compelling but not flashy.

IMPORTANT: The website is already partially implemented. Inspect the existing code before making changes. Preserve the established design and architecture unless there is a good reason to modify them.

## 2. Development Environment

Technology stack:
- Astro
- TypeScript
- Markdown content collections
- CSS (no UI framework)
- Git
- Static hosting planned (GitHub Pages or Cloudflare Pages)

Development:
npm run dev

Local URL:
http://localhost:4321

The Astro development server is working.

## 3. Existing Architecture

Key files:

src/styles/global.css
- Global styling, theme variables, typography, and resets.
- Light and dark theme support.
- Content width approximately 1280px.
- Original reading width variable: 720px.
- Project detail pages have been widened to approximately 900px.

src/layouts/Layout.astro
- Shared HTML layout.
- Imports global CSS.
- Handles page metadata.

src/pages/index.astro
- Homepage with personal introduction.
- Minimalist design.
- Navigation to Projects and About.

src/pages/projects.astro
- Project grid.
- Two columns on desktop, one on mobile.
- Each card displays image, category, title, description, and tags.
- Cards link to individual project pages.
- Subtle image enlargement on hover.
- Projects are loaded dynamically from the content collection.

src/pages/projects/[slug].astro
- Reusable project detail page.
- Generates a page for each Markdown project.
- Displays title, category, description, tags, image gallery, and Markdown content.
- Currently contains carousel implementation that needs refinement.

src/content.config.ts
- Astro content collection schema.
- Uses glob loader for src/content/projects/*.md.
- Fields include:
  title, description, category, tags,
  draft, featured, order, cover, gallery.
- Verify actual schema before modifying.

src/content/projects/
- Individual Markdown project files.
- Each file defines metadata and project content.

PROJECT_TEMPLATE.md
- Reference template for writing project descriptions.
- Not used programmatically by Astro.

## 4. Content Organization

Current projects include:
- Collaborative Localization (master's research)
- TDOA Localization for Bitcraze
- Turbofan Vibration Analysis
- Motorized Standing Desk
- Custom Rover Wheels
- PowerUp Plane Reverse Engineering
- Turbojet Modal Analysis
- Telescope Cooling System

Most project descriptions are currently placeholders or drafts.

IMPORTANT:
PolyOrbite should eventually have its own dedicated overview page rather than being treated as a standard project card.

That page should present the multidisciplinary rover team, my technical contributions, leadership responsibilities, and event organization.

It should link to relevant individual technical project pages, such as Custom Rover Wheels.

## 5. Content Philosophy

Project pages should be MINIMALISTIC.

The target audience is recruiters, engineering managers, and technical interviewers who will likely scan rather than read extensively.

Preferred project structure:

1. Overview
   - 2–3 sentences explaining the project and my role.

2. Engineering Highlights
   - Approximately 3–5 concise bullet points.
   - Focus on specific engineering contributions, technical decisions, and problem-solving.

3. Outcome
   - 1–2 sentences describing results, validation, or current status.

Typical length: 100–200 words.

Visuals are important:
- Photographs
- CAD renders
- Architecture diagrams
- Screenshots
- Experimental results
- Short GIFs

Avoid unnecessarily long technical explanations.

The objective is to demonstrate engineering competence and ownership, not reproduce technical notebooks or research reports.

Never invent technical accomplishments or quantitative results.

## 6. Design Direction

Overall aesthetic:
- Minimalist
- Professional
- Engineering-oriented
- Spacious layout
- Restrained typography and colors
- Subtle animations
- Clean project cards
- Strong visual hierarchy

Existing theme:
- Warm off-white background in light mode.
- Dark green/charcoal text.
- Muted olive accent.
- Dark mode with charcoal background and warm accent.

Preserve the existing color palette.

Layout:
- Project grid: 2 columns desktop, 1 mobile.
- Project images enlarge subtly on hover.
- Project detail pages have a relatively wide reading column (~900px).
- Images should receive more visual emphasis than long paragraphs.
- Responsive design is required.

Avoid:
- Excessive animations
- Decorative effects without purpose
- Generic corporate website aesthetics
- Overly dense text
- Unnecessary dependencies
- Rewriting working components without justification

## 7. Current Work — Project Image Carousel

We recently implemented an image carousel on individual project pages.

The carousel appears ABOVE the project Overview section.

Current implementation:
- Gallery images are specified in Markdown frontmatter using a gallery array.
- The template renders a horizontally scrolling flex container.
- CSS scroll snapping is used.
- JavaScript handles arrow navigation.

KNOWN ISSUES:
- Initial implementation didn't properly center the images.
- Adjacent images were not visibly previewed.
- Portrait images appeared isolated in excessive empty space.
- Navigation arrows were positioned too far from the displayed image.
- The gallery lacked visual framing.
- Arrow navigation may become unsynchronized after manual scrolling.

As follow up: consider a centered main image with smaller side previews. Do not introduce a large dependency for this.

## 8. Remaining Website Development

After fixing the carousel:

A. Refine the project detail page
- Review gallery dimensions, spacing, typography, and visual hierarchy.
- Ensure project pages look good with different amounts of text and images.

B. Improve image handling
- Establish a consistent image directory structure.
- Support photographs, CAD renders, diagrams, and GIFs.
- Consider optional captions or descriptive alt text.
- Optimize image sizes and loading performance.
- Consider full-size image viewing if useful.

C. Refine project discovery
- Review project ordering and featured projects.
- Ensure project cards use appropriate cover images.
- Improve category and tag presentation if needed.
- Keep navigation simple.

D. Build the PolyOrbite overview page
- Dedicated page for team involvement and leadership.
- Present responsibilities and achievements.
- Link to relevant technical project pages.
- Keep the same design language as the rest of the site.

E. Build the About page
- Concise professional background.
- Education and interdisciplinary engineering experience.
- Research and technical interests.
- Leadership experience.
- Avoid duplicating an entire CV.

F. Refine the homepage
- Review introductory text and visual hierarchy.
- Improve navigation and project discovery.
- Consider featuring a few selected projects.
- Preserve the minimalist approach.

G. Add professional links
- GitHub
- LinkedIn
- Email/contact
- Optional downloadable résumé/CV

H. Accessibility and responsive design
- Test desktop, tablet, and mobile.
- Keyboard navigation.
- Accessible carousel controls.
- Reduced-motion support.
- Image alt text.
- Color contrast.
- Focus states.
- No horizontal page overflow.

I. SEO and metadata
- Page titles and descriptions.
- Favicon.
- Open Graph/social sharing metadata.
- Canonical URL.
- Basic sitemap if appropriate.

J. Production readiness
- Review draft/published project filtering.
- Ensure unpublished projects aren't generated in production.
- Check broken links and missing images.
- Run npm run build.
- Resolve errors and warnings.
- Review content for confidential or sensitive information.

K. Git and deployment
- Choose GitHub Pages or Cloudflare Pages.
- Configure Astro for the selected hosting platform.
- Deploy the static website.
- Verify live routes, images, and navigation.
- Optionally configure a custom domain.

L. Maintenance workflow
- Establish a simple process for adding projects.
- Document Markdown frontmatter requirements.
- Keep project updates easy.
- Ensure Git pushes trigger deployments.

## 9. How I Want to Work
I am learning Astro and web development while building this portfolio.

Please:
- Work incrementally.
- Explain important architectural decisions.
- Prefer small, understandable changes.
- Inspect existing files before editing.
- Preserve working functionality.
- Avoid unnecessary abstractions and dependencies.
- Keep the site easy to maintain.
- Test changes when possible.
- Be direct about problems and trade-offs.

When making changes autonomously, explain what changed and why.

The priority is a polished, maintainable engineering portfolio, not an unnecessarily sophisticated web application.

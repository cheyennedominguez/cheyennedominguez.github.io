# TODO

## Done — Public portfolio layout, identity, and access
- Create a public-ready, responsive, accessible portfolio for Cheyenne Dominguez, using the brewed-ops portfolio template as a visual and structural reference while replacing its developer-focused content with an honest administrative-support narrative.
- Follow the brewed-ops reference strictly for visual style and motion patterns, adapting its desktop rail, bento cards, mobile navigation, and restrained spring/reveal transitions to Cheyenne’s content. Change the color accents to brown while retaining warm neutral backgrounds and a simple “CD” initials mark. Keep contract/project-based work, hospitality training, and self-directed practice projects clearly distinct.
- Include a hero section with the headline “Remote Administrative Assistant,” a concise honest introduction, a simple CD initials mark, and prominent email and LinkedIn contact links.
- Present skills and focus areas prioritizing data entry, administrative support, and blog/content support without inventing credentials, outcomes, dates, or availability.
- Implement responsive, accessible front-end behavior with semantic structure, keyboard-friendly navigation, readable contrast, and layouts optimized from mobile through desktop. The site needs no backend or database.

## Done — Remote experience and education
- Include the seven-month contract/project-based Data Entry & Vehicle Description Specialist role, including custom GPT-assisted drafting, proofreading, style-guide compliance, discrepancy checking, progress and issue tracking, daily targets, and the qualified typical output of around 20 descriptions per day depending on workload.
- Include a separate remote/project-based Blog Uploading & Website Content Support entry with dates omitted, describing WordPress and DealerOn uploads, file organization, material checks, and inconsistency flagging without linking or identifying client material.
- Include education and hospitality training, keeping the 600-hour Front Office hotel internship within the Bachelor’s degree in Hospitality Management separate from paid work. Include support during a high-volume checkout period of approximately 300 guests, check-ins, and guest concerns.

## Done — Practice portfolio projects and images
- Include a portfolio projects section clearly labeled as self-directed practice rather than paid client work, featuring Gmail inbox organization, calendar management for a property manager, and spreadsheet follow-up tracking.
- Present the supplied email-management project figures—2,677 unread emails and 2,738 inbox emails reduced to zero, with 19 color-coded labels—and explicitly identify the work as self-directed practice.
- Use the four real screenshots from the supplied Drive archive for the email-management and calendar-management self-directed projects, with clear before/after labels and a way to view each full-size image.
- Redact sender, subject, and snippet text in the email-before screenshot; redact the account-activity/location footer in the email-after screenshot; and redact event details, both calendar time axes, and time-zone sidebar information in the calendar screenshots. Keep the application interface, inbox counts, event blocks, and before/after structure visible. These redactions were made with the user’s approval.

## Done — Contact and external profiles
- Provide an accessible contact section with direct links to cheyennemaegan@gmail.com, LinkedIn (https://www.linkedin.com/in/yen-dominguez), and GitHub (https://github.com/cheyennedominguez); make email and LinkedIn especially easy to reach. Do not add a contact form.

## Open — GitHub Pages publication and visibility approval
- The private `cheyennedominguez/cheyennedominguez.github.io` repository now exists, and the `github` remote is separate from Manus `origin`. Transfer the current site source and four redacted image files there.
- Keep the repository private until Cheyenne approves a visibility change. GitHub Free requires a public repository for Pages. Do not switch visibility or publish the public site without that approval.
- The site source uses repo-local paths in `/images/`; the four screenshot PNGs are under `client/public/images/` and build unchanged into `dist/public/images/`.
- The README documents the pnpm build and the repository’s Pages setup. `.github/workflows/pages.yml` is a manual-only workflow that builds `dist/public/` and deploys it after Pages is enabled in repository settings.
- After public-repository approval, enable GitHub Pages using GitHub Actions and make future main-branch updates deploy automatically. Confirm the live URL `https://cheyennedominguez.github.io` only after a successful workflow run.
- The current visual identity uses the “CD” initials mark; a portrait is optional. Tell Cheyenne which screenshots are already included and list any optional portrait asset.

## Verification evidence
- `pnpm check` and `pnpm build:static` passed after switching screenshots to local repository files. All four PNGs were served over the preview, copied unchanged to `dist/public/images/`, and referenced through `/images/` paths rather than `/manus-storage/`.
- Desktop (1280×900) and phone (390×844) full-page screenshots were reviewed; both image pairs render in the correct project sections, use clear before/after captions, and stack cleanly on mobile.
- The live preview and built route manifest match the declared `/` route. The project working tree was clean after the previous checkpoint before the latest README/workflow transfer edits.
- The brown palette and brown monogram/share metadata were retained. The Manus-hosted site remains unpublished. The GitHub source repository is private, and the user has not yet approved public visibility or deployment.

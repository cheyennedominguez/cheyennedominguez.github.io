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

## Open — GitHub transfer and user-site setup
- Create the personal-site repository `cheyennedominguez.github.io` and transfer the current site source to it without replacing the Manus `origin` remote.
- Include the four user-approved redacted project screenshots in the repository and use repository-local asset paths instead of Manus-only `/manus-storage/` paths, so both the Manus Preview and GitHub Pages can load them.
- Replace the generic starter README with concise local build and GitHub Pages instructions. Prepare a GitHub Actions static build/deploy workflow for `https://cheyennedominguez.github.io` using `pnpm build:static` and `dist/public`.
- Keep the GitHub repository private unless/until the user confirms a public-repository visibility change if required by their GitHub plan. Do not expose the repository source or publish the Pages site before that confirmation.
- Tell the user which image assets are already included and list any optional file they may add, such as a profile portrait; the current design uses initials and does not require a profile photo.

## Verification evidence
- `pnpm check` and `pnpm build:static` passed after adding the image galleries.
- Desktop (1280×900) and phone (390×844) full-page screenshots were reviewed; both image pairs render in the correct project sections, use clear before/after captions, and stack cleanly on mobile.
- The live preview and built route manifest match the declared `/` route. The four image elements currently use stable project-storage paths; these remain to be switched to local repository paths for GitHub Pages.
- The brown palette and brown monogram/share metadata were retained. The Manus-hosted site remains unpublished; the user has now requested a GitHub Pages user site, subject to the repository-visibility gate above.

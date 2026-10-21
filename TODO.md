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

## Done — Private GitHub repository transfer
- Create the personal-site repository `cheyennedominguez.github.io` and transfer the current source to it without replacing Manus `origin`. The private repository is at https://github.com/cheyennedominguez/cheyennedominguez.github.io; `github` is a separate remote and `main` has the portfolio source.
- Include the four user-approved redacted project screenshots under `client/public/images/` and use repository-local `/images/` paths instead of Manus-only `/manus-storage/` paths.
- Replace the generic starter README with concise build, image-handling, and GitHub Pages instructions. Add a GitHub Actions workflow at `.github/workflows/pages.yml` that builds `dist/public/` and can be manually run after GitHub Pages is enabled.
- Tell Cheyenne which image assets are already included and note that a portrait is optional; the current design uses initials.

## Open — Publish the GitHub Pages user site
- The target address is `https://cheyennedominguez.github.io`. The repository is currently private and the deploy workflow has not been run. Confirm whether the account’s GitHub plan permits Pages from a private source repository. If it does not, ask Cheyenne before changing source repository visibility to public; do not expose the source without approval.
- Once eligible, enable GitHub Pages with GitHub Actions in repository settings, test the workflow, and only report the live URL after GitHub confirms successful publication.

## Verification evidence
- `pnpm check` and `pnpm build:static` passed after the repo-local screenshot migration and again before the final push. Each screenshot PNG is copied unchanged into `dist/public/images/`; the page uses `/images/` paths.
- All four PNGs returned HTTP 200 from the preview. The live preview and built route manifest match the declared `/` route.
- Desktop (1280×900) and phone (390×844) full-page screenshots were reviewed; both before/after pairs appear in their matching projects and stack cleanly on mobile.
- Commit `dba079b` was pushed to Manus `origin/main` and GitHub `main`; the working tree was clean after the push. The GitHub source repository remains private, and no public Pages deployment has been triggered.

# TODO

## Done — Portfolio content and visual system
- Create a responsive, accessible portfolio for Cheyenne Dominguez, using the brewed-ops portfolio template as the style and motion reference while replacing developer-focused content with an honest administrative-support narrative.
- Adapt the template’s desktop rail, bento layout, mobile navigation, and restrained spring/reveal transitions to Cheyenne’s profile. Use warm neutrals and brown accents with a “CD” initials mark; keep contract/project-based work, hospitality training, and self-directed practice distinct.
- Include the “Remote Administrative Assistant” headline, an honest introduction, data-entry and admin support, blog/content support, and accessible email/LinkedIn contact links.
- Include GitHub and education links; do not invent credentials, dates, outcomes, or availability. Keep location/time zone and academic distinction off the page. The site needs no contact form, backend, or database.

## Done — Experience, training, and project evidence
- Include the seven-month contract/project-based Data Entry & Vehicle Description Specialist role, including custom GPT-assisted drafting, proofreading, style-guide compliance, discrepancy checking, progress/issues/daily-target tracking, and a qualified typical output of around 20 descriptions per day depending on workload.
- Include the separate remote/project-based Blog Uploading & Website Content Support role with dates omitted, describing WordPress and DealerOn uploads, file organization, checks, and inconsistency flagging without client-identifying details.
- Include the Bachelor’s degree in Hospitality Management and the 600-hour Front Office hotel internship as training, separate from paid work. Mention the high-volume period of approximately 300 guests, check-ins, and guest concerns.
- Feature self-directed Gmail organization, calendar management for a property manager, and spreadsheet follow-up tracking; do not present these as paid client projects. Keep the inbox result precise: 2,677 unread and 2,738 inbox emails reduced to zero, with 19 color-coded labels.
- Use the four real Drive screenshots as before/after samples with clear labels and full-size links. Keep them redacted: hide email sender/subject/snippet text, the email-after account-activity/location footer, calendar event details, both time axes, and calendar time-zone sidebar details. Preserve the interface, inbox counts, event blocks, and before/after structure. The user approved these redactions.

## Done — GitHub transfer and live site
- Create the user-site repository `cheyennedominguez.github.io`, transfer the current source without replacing Manus `origin`, and keep the four redacted screenshots under `client/public/images/` with repository-local paths.
- Replace the starter README with build and Pages instructions. Use the GitHub Actions workflow to build `dist/public/` and deploy the user site.
- The user approved making the repository public and publishing the site. The source is at https://github.com/cheyennedominguez/cheyennedominguez.github.io and the site is live at https://cheyennedominguez.github.io.
- A profile photo is optional; the current design uses initials.

## Open — Project-card thumbnails
- Create one matching thumbnail for each self-directed project card: email inbox organization, calendar management, and spreadsheet follow-up, using the portfolio’s warm-brown/neutral style.
- Make the artwork illustrative rather than depicting fake app screenshots or replacing real work evidence. Keep the redacted before/after images as the authentic samples. Add each thumbnail to its matching card with responsive sizing and meaningful accessibility text.
- Build, check, push the updated source to both Manus `origin/main` and GitHub `main`, and run the GitHub Pages workflow so the published site includes the new thumbnails.

## Verification evidence
- `pnpm check` and `pnpm build:static` passed after the repository-local screenshot migration. All four screenshots are copied unchanged into `dist/public/images/` and referenced through `/images/` paths.
- The public site returned HTTP 200 for `/`, `/manus-routes.json`, and all four screenshot images. The route manifest declares `/`.
- Desktop and mobile full-page screenshots were reviewed; before/after samples are in their matching project sections and stack on mobile.
- Commit `c988ba4` is on Manus `origin/main` and GitHub `main`. GitHub Actions run `39563640574` completed successfully; the public site is live.

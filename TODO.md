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

## Done — Standalone LinkedIn project preview image
- Do not add the preview or generated illustrative card artwork to the website. The user wanted a PNG preview image to upload separately to the LinkedIn Project, not new project-card images on the portfolio.
- Create a separate 1200×627 PNG screenshot of the actual website homepage, outside the website source. The screenshot is of the real page, not generated artwork, and is delivered separately rather than added to the public repository.
- Remove the three illustrative project-card images from the website source, retain the authentic redacted email/calendar screenshots, and redeploy the restored version.

## Verification evidence
- `pnpm check` and `pnpm build:static` passed after restoring the prior portfolio source. The GitHub Pages restoration run `39573631644` completed successfully for commit `e48e261`.
- The live homepage returned HTTP 200 and no longer references the generated card artwork. The route manifest and all four authentic redacted screenshots returned HTTP 200.
- The standalone file is a valid PNG at 1200×627 pixels and 179 KB, ready to upload to LinkedIn.

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

## Open — Standalone LinkedIn project preview image
- Do not add thumbnail artwork to the website. Remove the three newly generated illustrative project-card images from the site, restore the preceding portfolio design, and keep the authentic redacted email/calendar screenshot pairs.
- Create a separate PNG preview image of the actual website for the user to upload as the thumbnail on their LinkedIn Project. Use a landscape 1200×627 canvas, capture the real portfolio rather than inventing a mockup, save the file outside the website source, and provide it to the user.
- After restoring the source, build and verify it, push the correction to Manus `origin/main` and GitHub `main`, and run the existing GitHub Pages workflow so the live site no longer contains the illustrative artwork.

## Verification evidence
- The project passed `pnpm check` and `pnpm build:static` after the thumbnail-art update; the three WebP images loaded in the preview and the desktop/mobile layouts were reviewed.
- The GitHub Pages workflow run for commit `3efa723` completed successfully, so the illustrative artwork may currently be on the public site until the restoration deploy completes.

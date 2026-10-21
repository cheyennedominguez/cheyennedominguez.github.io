# TODO

## Done — Public portfolio layout, identity, and access
- Create a public, responsive, accessible portfolio for Cheyenne Dominguez, using the brewed-ops portfolio template as a visual and structural reference while replacing its developer-focused content with an honest administrative-support narrative.
- Follow the brewed-ops reference strictly for visual style and motion patterns, adapting its desktop rail, bento cards, mobile navigation, and restrained spring/reveal transitions to Cheyenne’s content. Change the color accents to brown while retaining warm neutral backgrounds and a simple “CD” initials mark. Keep contract/project-based work, hospitality training, and self-directed practice projects clearly distinct.
- Include a hero section with the headline “Remote Administrative Assistant,” a concise honest introduction, a simple CD initials mark, and prominent email and LinkedIn contact links.
- Present skills and focus areas prioritizing data entry, administrative support, and blog/content support without inventing credentials, outcomes, dates, or availability.
- Implement responsive, accessible front-end behavior with semantic structure, keyboard-friendly navigation, readable contrast, and layouts optimized from mobile through desktop. The site needs no backend or database.

## Done — Remote experience and education
- Include the seven-month contract/project-based Data Entry & Vehicle Description Specialist role, including custom GPT-assisted drafting, proofreading, style-guide compliance, discrepancy checking, progress and issue tracking, daily targets, and the qualified typical output of around 20 descriptions per day depending on workload.
- Include a separate remote/project-based Blog Uploading & Website Content Support entry with dates omitted, describing WordPress and DealerOn uploads, file organization, material checks, and inconsistency flagging without linking or identifying client material.
- Include education and hospitality training, keeping the 600-hour Front Office hotel internship within the Bachelor’s degree in Hospitality Management separate from paid work. Include support during a high-volume checkout period of approximately 300 guests, check-ins, and guest concerns.

## Done — Practice portfolio projects
- Include a portfolio projects section clearly labeled as self-directed practice rather than paid client work, featuring Gmail inbox organization, calendar management for a property manager, and spreadsheet follow-up tracking.
- Present the supplied email-management project figures—2,677 unread emails and 2,738 inbox emails reduced to zero, with 19 color-coded labels—and explicitly identify the work as self-directed practice.

## Done — Contact and external profiles
- Provide an accessible contact section with direct links to cheyennemaegan@gmail.com, LinkedIn (https://www.linkedin.com/in/yen-dominguez), and GitHub (https://github.com/cheyennedominguez); make email and LinkedIn especially easy to reach. Do not add a contact form.

## Open — Add the shared before-and-after images
- Use the four real screenshots in the supplied Drive archive for the email-management and calendar-management self-directed projects, with clear before/after labels.
- The archive has been retrieved and the image mapping confirmed, but before displaying it on the public portfolio, resolve whether visible email sender/subject excerpts, calendar event labels, and Philippines/Los Angeles time-zone labels should be redacted or removed. Do not make these details public without the user’s choice.

## Verification evidence
- The current brown-theme source passed `pnpm check` and `pnpm build:static`.
- Desktop (1280×720) and mobile (390×844) screenshots were reviewed; the reference-inspired rail, bento cards, brown accents, stacked mobile cards, and floating mobile navigation render as intended.
- The live preview returned HTTP 200 for `/` and `/manus-routes.json`; the manifest is valid JSON and declares `/`.
- CSS contains no remaining blue token names or color references, and no invalid RGB/RGBA argument counts. Browser theme-color and OG/Twitter images use the warm neutral/brown mark.

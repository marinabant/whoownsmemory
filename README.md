# Who Owns Memory? — Complete New GitHub Repository Build

This ZIP is a **complete standalone website** for **Who Owns Memory? Democratic Participation in Digital Public History**.

## What is included

- Home, About, Programme, Methods, Corfu Case, News, Contact, Privacy and 404 pages.
- Complete Digital Exhibition index and all participant project pages.
- Embedded Google Drive viewers on all 28 project pages, with fallback external links.
- Dr Marina Bantiou and Dr Kirti Sharma profiles with local photographs.
- **Miljenko Hajdarović — Digital Exhibition Advisor** with biography and photograph.
- Updated “Stay connected” form: https://forms.gle/oLcpYuRhzS5U6wbq8
- Archived Call for Participants news item.
- Orientation & Community Building news item and programme material.
- C²DH lecture news item for 19 October 2026.
- Corfu event photographs supplied for the 27 October 2026 event.
- `.nojekyll`, `robots.txt`, `sitemap.xml` and responsive CSS/JS.

## Start from zero on GitHub

1. On GitHub, click **New repository**.
2. Give it any name, for example `who-owns-memory-site`.
3. Choose **Public**.
4. **Do not** add a README, `.gitignore`, or licence during creation.
5. Create the repository.
6. Extract this ZIP on your computer.
7. Open the extracted folder. **Upload the contents inside it**, not the outer folder itself.
8. At repository root you should see `index.html`, `assets/`, `projects/`, `about.html`, etc.
9. Commit the upload.
10. Go to **Settings → Pages**.
11. Under Build and deployment choose **Deploy from a branch**.
12. Select branch **main** and folder **/(root)**, then Save.
13. GitHub will publish the site at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

## Important about the embedded exhibition projects

The participant files are embedded with Google Drive preview viewers. They will display inside the project page **only when the creator’s Drive sharing permissions allow public viewing**. Each project page also includes a fallback “open in a new tab” link.

## Custom domain

This build does **not** include a `CNAME` file, intentionally. Test the new repository first. Add `www.whoownsmemory.org` as the custom domain only after the new GitHub Pages site is working correctly.

## Pinegrow

There is deliberately **no `pinegrow.json` file** in this build, because the old file contained the old repository publishing target. You can open this new folder in Pinegrow as a new project and connect it to the new repository later.

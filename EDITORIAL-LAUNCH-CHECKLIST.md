# BretGuice.com Editorial Launch Checklist

Use this before publishing or materially revising a page. The site model is:

- **About** → Who I am
- **Work** → How I think
- **Notes** → What I am learning or considering

## Required for every page

### 1. Editorial purpose

- [ ] The page has one clear job within the About, Work, or Notes model.
- [ ] The central idea is evident without relying on a résumé-style list.
- [ ] The page reveals useful thinking while respecting personal boundaries.

### 2. Writing and proofreading

- [ ] The voice is thoughtful, direct, understated, and human.
- [ ] Concrete examples carry claims that would otherwise feel abstract.
- [ ] Corporate jargon, inflated claims, repetition, and unnecessary adjectives are removed.
- [ ] Names, dates, captions, punctuation, and facts have been proofread.

### 3. Page structure

- [ ] There is exactly one descriptive H1.
- [ ] H2–H6 headings follow a logical order and describe the sections beneath them.
- [ ] The opening establishes the question or idea; the ending feels intentional.
- [ ] The page can be understood when headings and link text are read on their own.

### 4. Search metadata

- [ ] The HTML title is unique, specific, and led by the page’s real subject.
- [ ] The meta description is unique, accurate, and written in the site’s voice.
- [ ] The canonical URL uses `https://bretguice.com` and the preferred no-trailing-slash path.
- [ ] The robots directive is intentional (`index,follow` for published pages).
- [ ] Metadata describes Bret’s thinking and work without reducing the site to ticketing alone.

### 5. Social sharing

- [ ] Open Graph title, description, URL, type, and image are present.
- [ ] Twitter/X title, description, card type, and image are present.
- [ ] The social image has meaningful alt text.
- [ ] The preview makes sense in LinkedIn, Slack, messaging apps, Facebook, and X.

### 6. Images and alt text

- [ ] Every meaningful image has concise alt text describing its relevant content.
- [ ] Decorative images use empty alt text and do not duplicate nearby copy.
- [ ] Captions add context instead of restating the image.
- [ ] Images are appropriately sized, compressed, and responsive.

### 7. Links and navigation

- [ ] Every internal and external link works.
- [ ] Link text describes the destination without relying on “click here.”
- [ ] The page is reachable through intentional navigation or contextual links.
- [ ] No link points to a draft, duplicate URL, or redirect when a canonical URL is available.

### 8. Accessibility

- [ ] The page is usable by keyboard and has a visible focus indicator.
- [ ] Landmarks, labels, lists, figures, quotations, and buttons use semantic HTML.
- [ ] Color contrast is sufficient and meaning is not communicated by color alone.
- [ ] Motion respects reduced-motion preferences.

### 9. Mobile and responsive review

- [ ] The page has been read at narrow phone, large phone, tablet, and desktop widths.
- [ ] Text remains readable without horizontal scrolling or clipped headings.
- [ ] Images retain their intended focal point and captions remain connected.
- [ ] Navigation, tap targets, and in-page links remain easy to use.

### 10. Performance

- [ ] The production build completes without errors.
- [ ] Above-the-fold imagery is prioritized only when necessary.
- [ ] No unnecessary dependency, script, font, animation, or oversized asset was added.

### 11. Structured data

- [ ] The page uses the appropriate schema type and canonical URL.
- [ ] Structured data contains only facts confirmed by the page or repository.
- [ ] JSON-LD parses successfully and its title/description match visible metadata.

### 12. Sitemap and indexing

- [ ] A new canonical, indexable page is added to `public/sitemap.xml`.
- [ ] Drafts, redirects, 404 pages, and duplicates are excluded from the sitemap.
- [ ] `public/robots.txt` does not block the page.

### 13. Analytics, if implemented

- [ ] Analytics loads only after its purpose and privacy impact are understood.
- [ ] New events measure a real editorial or navigation question—not activity for its own sake.
- [ ] Tracking is tested without recording sensitive personal information.

### 14. Pre-deployment verification

- [ ] Build, lint, link, metadata, and structured-data checks pass.
- [ ] The final diff contains only the intended page and supporting assets.
- [ ] Canonical production URLs—not preview or local URLs—appear in metadata.

### 15. Post-publication verification

- [ ] The production URL returns `200` and the canonical URL resolves without a redirect.
- [ ] Page source contains the expected title, description, canonical, social tags, and JSON-LD.
- [ ] Images, navigation, favicon, manifest, robots, and sitemap load correctly.
- [ ] The URL is inspected in Google Search Console when discovery or recrawling matters.
- [ ] Social previews are checked with a sharing debugger or a fresh uncached share.

## Required only when applicable

- [ ] **Notes:** Article schema includes an accurate headline, canonical URL, author, and publication date.
- [ ] **Notes:** The piece clearly represents what Bret is learning or considering—not a generic blog update.
- [ ] **Work:** Claims are supported by an artifact, example, decision, or observable result when available.
- [ ] **About:** Personal detail supports understanding without exposing private history unnecessarily.
- [ ] A page-specific 1200×630 social image replaces `public/og-default.jpg` when it materially improves the preview.
- [ ] External links use appropriate security and relationship attributes.
- [ ] Analytics events are tested when the page introduces a new measurable action.
- [ ] Redirects are added when an established URL changes.

## Periodic site-wide checks

- [ ] Review Google Search Console coverage, submitted sitemap status, and indexing warnings.
- [ ] Check whether Google snippets still represent the current editorial direction; remember Google may rewrite them.
- [ ] Crawl the full site for broken links, duplicate titles, duplicate descriptions, and orphaned pages.
- [ ] Review Core Web Vitals, Lighthouse trends, accessibility, and real-device behavior.
- [ ] Confirm `http` redirects to `https` and `www` redirects to the canonical non-`www` domain with valid TLS.
- [ ] Confirm the default social image at `public/og-default.jpg` remains 1200×630 and matches the site identity.
- [ ] Review structured data when page types, employment facts, or the site architecture change.
- [ ] Review analytics privacy, retention, and usefulness if analytics is implemented.

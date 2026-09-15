# Dark editorial Variant C

Working design reference for Trung Ha's professional website. Changes are confined to this variant. The production website and supplied PDF CV are unchanged.

## Design refinements

- Home leads from the star-trails introduction to selected research, followed by the color portrait and brief bio. The repeated research strip is removed.
- Research figures appear separately from descriptions. Full figures remain visible on the Research page. The page includes project jump links and omits the future-project placeholder.
- Page titles and method labels use a consistent hierarchy. Body text, links, and spacing are more readable on narrow screens.
- The full CV download appears near the title. Experience cards use descriptive headings, and publications run in descending year order.
- Contact uses a direct title and responsive email/profile rows.
- Navigation identifies Trung by name, underlines the current page, and provides visible keyboard focus. The mobile menu closes with Escape and restores focus, closes after navigation or an outside click, and resets at the desktop breakpoint. Reduced-motion settings disable smooth scrolling.

## Latest implementation pass

- The home hero restores the subdued "Computational astrophysicist" role line while preserving the existing introduction.
- Home now labels the project section "Featured research." Project images use zoom-to-fit framing, and both images and titles link to their Research anchors.
- Research figures link to their full-size source images. The three flagship projects include visible access labels.
- CV highlights use an open editorial treatment with top rules instead of filled cards. Publication underlines are quieter.
- Image dimensions, dark browser theming, font preconnects, favicon metadata, decorative-arrow handling, and mobile Menu/Close feedback are included.
- Optimized WebP display assets reduce the combined loaded size of the hero, portrait, and four large research images while preserving the original files as full-resolution links.

## Browser verification

All four pages were captured in Chrome at 1440, 768, 390, and 320 pixels wide. Screenshots and the results are in `screenshots/after/`. The original desktop/mobile captures are in `screenshots/before/`.

Checks passed for horizontal overflow, loaded images and alt attributes, browser errors, local file links and anchor targets, mobile menu state and Escape/focus restoration, sticky-header clearance at project anchors, JavaScript syntax, and the PDF download. Computed text contrast passed on solid backgrounds. Hero text was inspected visually; the automated contrast calculation excludes photographic backgrounds. External destination availability was not checked.

The frontend skill's shared capture and visual-lint scripts were not installed. Equivalent checks used the bundled Playwright runtime with local Chrome. There is no application build step for these static HTML pages.

The original research assets and PDF files are preserved. Figure text is small on phones, so source papers and presentation links remain available beside each project. Web fonts still load from Google Fonts with local font fallbacks.

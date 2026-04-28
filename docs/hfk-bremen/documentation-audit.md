# HfK Documentation Audit

Working audit for aligning the HfK documentation layer with the thesis PDF and the Digital Media Bremen documentation requirements.

Checked against:

- `romanov_in_the_digital_shadow.pdf`
- `Handreichung--Notes_on_Thesis_Documentations.md`
- `Handreichung--Assistance_for_Bachelor+Master_Theses.md`
- `Directions_for_Preparing_Material_to_Document_Projects_on_Our_Website.md`

## Current Local Package

- `extended-documentation.md`: second-part / final documentation layer for HfK.
- `website-short.md`: compressed Digital Media website version.
- `assets/README.md`: placeholder for future documentation assets.
- `../assets/thesis_figures/`: image set used by the thesis PDF and available for reuse in documentation.
- `../assets/video_small/`: compressed teaser/video documentation.
- `../assets/installation_plan/`: draft installation plan and render snapshots.
- `../assets/perfocards/`: perforated-card source images.
- `../assets/posters/`: poster material by Nilya Musaeva.
- `../assets/qr_codes/`: repository and `umbra` QR codes.

## HfK Thesis Documentation Requirements

Status:

- OK: The repository separates the written thesis PDF from a shorter final documentation layer.
- OK: The package includes an extended documentation draft and a compressed website-facing draft.
- OK: Digital/open formats are already used: Markdown, PDF, PNG/SVG figures, CSV datasets.
- OK: The project has repository and project-page links.
- Needs confirmation: HfK documents differ on the post-colloquium delivery window. `Notes_on_Thesis_Documentations` says the second part is usually submitted about three weeks after the colloquium, to be determined with supervisors. `Assistance_for_Bachelor+Master_Theses` says one week after the final colloquium.
- Needs work: The extended documentation still contains planning language around figures and media instead of actual figure references and captions.
- Needs work: Offline website-package export is not present yet. If a website version is submitted as website material, HfK asks for an offline version.
- OK / needs packaging: A compressed local video exists in `docs/assets/video_small/`. For HfK delivery this is preferable to an expiring external transfer link. If the larger Ali Muhametov entrance-group video is included, it should be supplied through HfK OneDrive or another non-expiring link.

## Comparison With Thesis PDF

Strong alignment:

- The documentation correctly follows the thesis frame: `Embodied Debrief`, `Collect`, `Allocate`, `Delegate`, `Overload`.
- The relation to `umbra: In the Digital Shadow` is clear.
- The installation section covers the main spatial components found in the PDF: Collection Chamber, Allocate Station, light-sound objects, system states, overload and flush.
- Credits mostly match the thesis in substance: supervisors, collaborators, and acknowledgements.
- Needs correction: Jimi Liu should be credited for both `umbra` performance photographs and `in the digital shadow` presentation/colloquium photographs, once the latter are recovered.

Issues to resolve:

- Repository URL mismatch: the correct public repository URL is `github.com/davinel000/inthedigitalshadow`; the local HfK documentation currently uses `github.com/slavaromanov/inthedigitalshadow`.
- The thesis PDF uses older embedded phone images for some installation views. Fresher alternatives should be selected from the asset folder when available.
- The PDF contains a specific installation-state logic figure; the extended documentation only describes it verbally.
- The PDF includes performance figures from `umbra`; reusable local candidates are already present as `docs/assets/thesis_figures/figure_1_jimilu.jpg` and `docs/assets/thesis_figures/figure_2_jimiliu.jpg`.
- The HfK documentation currently reads as a clean summary, but it does not yet document the actual colloquium/exhibition with concrete date, image captions, or final media list.
- Colloquium date to add: 2 April 2026, 17:00.

## Digital Media Website Requirements

Status of `website-short.md`:

- OK: English version exists.
- OK: First paragraph is 285 characters, under the 500-character abstract limit.
- OK: Markdown format is used.
- Needs work: It does not yet use the expected website information block with title, category, student, supervisors/lecturers, year, links, and optional awards.
- Needs work: No key visual is referenced.
- Needs work: No 3-5 image selection is embedded.
- Needs work: No video link/still structure is included.
- Needs work: File naming convention for web images is not prepared yet.

## Necessary Illustration Set

Minimum set for the extended HfK documentation:

1. Key visual: installation overview or strongest first-view image of `in the digital shadow`.
2. Collection Chamber: cube / capture environment, preferably with visitor or visible projection.
3. Allocate Station: red-line interaction, paper, marker, camera/light setup.
4. System state / spatial logic: `logic_states.svg` or an installation diagram if visually clearer.
5. One analytical figure from process research: prefer `collect.svg` or `allocate.svg`.
6. One overload/delegation figure: prefer `overload_phase_comparison.svg` for embodied aftereffects, or `delegate_request.png` if the documentation should foreground distributed agency.
7. Red Marks image: needed because the text gives Red Marks conceptual weight.
8. One `umbra` performance still by Jimi Liu: needed to establish the source project and inherited material.
9. Optional video still: only if a teaser/video documentation link is submitted.
10. Perforated cards / labels: needed as an installation component, because they were the main textual layer inside the installation contour.

Minimum set for the Digital Media website version:

1. Key visual, JPG, at least 1024 px wide.
2. 3-5 total images with a consistent aspect ratio where possible.
3. 2-3 stills if the video is included.
4. Suggested web-safe filename pattern: `sr-in-the-digital-shadow-01.jpg`, `sr-in-the-digital-shadow-02.jpg`, etc.

Already available locally:

- `docs/assets/thesis-cover.png`: usable as a cover reference, but only 896 px wide, below the website image minimum.
- `docs/assets/thesis_figures/figure_1_jimilu.jpg`: `umbra` performance still by Jimi Liu, high-resolution.
- `docs/assets/thesis_figures/figure_2_jimiliu.jpg`: `umbra` performance still by Jimi Liu, high-resolution.
- `docs/assets/thesis_figures/figure_3_collect.jpg`: Collect analytical figure, website-size OK.
- `docs/assets/thesis_figures/figure_4_allocate.jpg`: Allocate analytical figure, website-size OK.
- `docs/assets/thesis_figures/figure_6_delegate_request_fixed.jpg`: Delegate request figure, website-size OK.
- `docs/assets/thesis_figures/figure_8_overload_timeline.jpg`: Overload timeline figure, website-size OK.
- `docs/assets/thesis_figures/figure_9_overload_phase_comparison.jpg`: Overload phase comparison figure, website-size OK.
- `docs/assets/thesis_figures/figure_12_logic_states.jpg`: installation/system-state logic figure, website-size OK.
- `docs/assets/installation_plan/Draft installation.png`: very high-resolution draft plan.
- `docs/assets/installation_plan/snapshot.1.jpg` through `snapshot.4.jpg`: render snapshots, 1280 x 720, website-size OK.
- `docs/assets/perfocards/perfocard.*.tif`: eight perforated-card source images, 2970 x 2100.
- `docs/assets/posters/2.1.jpg` and `docs/assets/posters/2.2.jpeg`: poster material by Nilya Musaeva.
- `docs/assets/video_small/slavaromanov_in_the_digital_shadow_teaser.mp4`: compressed video documentation / teaser.
- `data/derived/figures/delegate_request.png`: 3200 x 3200, website-size OK.
- `data/derived/figures/delegate_uptake.png`: 3200 x 3200, website-size OK.
- SVG analytical figures: useful in documentation/PDF, but website package should probably receive JPG exports as final delivery assets.

Missing locally:

- final installation photographs
- Red Marks documentary image
- presentation/colloquium still
- video stills, if the video is embedded or submitted as a highlighted media item
- final key visual exported as JPG

## Perforated Cards

The installation included eight laser-cut perforated cards made from Finnish black paper and mounted on vertical stands. They were the main textual layer inside the installation contour and should be described as a real installation component, not only as graphic support.

Card sequence:

1. `RESIDUE BECOMES STRUCTURE`
2. `COLLECT PRODUCES MASS`
3. `ALLOCATE DISTRIBUTES SCARCITY`
4. `ENTER AND BECOME A TRACE`
5. `DELEGATE SHARES AGENCY`
6. `OVERLOAD REVEALS THE LIMIT`
7. `FLUSH MAKES SPACE TO CONTINUE`
8. `RED MARK FILLS A SLOT`

Recommended use:

- extended HfK documentation: include one photo/render/detail of the physical cards or one spread showing all eight texts.
- website version: include only if there is a strong installation photo where the cards are visible; otherwise mention them in text and leave the source files in the archive.
- repository/archive: keep the TIFF/source/traced files as part of the installation-production material.

## Suggested Distribution Of Materials

Send to HfK final/second documentation package:

- thesis PDF
- `extended-documentation.md` exported as PDF or HTML, with images embedded
- compressed video from `docs/assets/video_small/`
- selected images from `thesis_figures`, installation photos when recovered, and a small card/label set
- optional: installation plan as appendix/supporting image, not as a main visual unless no final installation overview is available

Send to Digital Media website:

- `website-short.md` after conversion to the expected DM structure
- one key visual JPG
- 3-5 selected JPG images
- one video link or uploaded compressed video, depending on website workflow
- concise credits, including Jimi Liu for performance and presentation photos, Nilya Musaeva for posters if posters are shown, Ali Muhametov if the entrance-group video is used

Keep in repository / archive, not necessarily in HfK public documentation:

- QR codes
- all poster variants
- all perfocard source TIFFs
- full analytical figure set
- large external entrance-group video unless it becomes part of the documented exhibition package

## Recommended Next Edit Pass

1. Correct the public repository URL to `github.com/davinel000/inthedigitalshadow`.
2. Replace the planning section `Figures And Media` in `extended-documentation.md` with actual figure slots, captions, and source/credit notes.
3. Add concrete presentation/colloquium facts: 2 April 2026, 17:00, format, and what was shown.
4. Convert `website-short.md` into the DM website markdown structure with an information block and embedded image placeholders.
5. Build `docs/hfk-bremen/assets/` as the final HfK delivery folder with web-safe names and a manifest.

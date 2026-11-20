# Reverse-Engineering Emblematica & Complete Website Design and Implementation Blueprint for 3DRequests

**Document Classification:** Executive Creative Direction, Motion Reverse-Engineering, Technical Architecture & Master AI Implementation Blueprint  
**Reference Benchmark:** [Emblematica Agency](https://emblematica.agency/) ([Branding Division](https://emblematica.agency/branding) | [Digital Division](https://emblematica.agency/digital) | [Awwwards Profile](https://www.awwwards.com/emblematica/))  
**Target Venture:** **3DRequests** (Pre-Launch Custom 3D Design, Engineering & Visual Production Studio)  

---

## Executive Overview & Strategic Mandate

Building a flagship digital presence for **3DRequests** requires transcending the two failure modes that plague contemporary 3D studio websites: the **generic freelancer gallery** (a passive grid of untextured renders with no narrative cohesion or commercial framing) and the **over-engineered WebGL tech demo** (a heavy, GPU-throttling shader experiment that alienates B2B product managers, industrial designers, and creative directors trying to commission work).

Our reference benchmark, Barcelona-based [Emblematica Agency](https://emblematica.agency/), demonstrates a masterclass in **stagecraft, tactile art direction, and deterministic choreography**. Rather than relying on bloated client-side 3D engines that stall mobile browsers, [Emblematica Agency](https://emblematica.agency/) achieves an Awwwards-recognized ([Awwwards Design Agencies Showcase](https://www.awwwards.com/websites/design-agencies/)), tactile 3D aesthetic through **pre-rendered high-DPI visual assets (`.webp` / `.png` / `.mp4`), mathematical fluid viewport scaling (`--u`), custom vanilla JavaScript scroll-scrubbing, SVG path morphing, and precision FLIP state transitions**.

This blueprint provides a complete, forensic six-phase deconstruction of [Emblematica Agency](https://emblematica.agency/) (Deliverables A, B, and C) and translates those architectural and creative principles into a bespoke, conversion-engineered website design and implementation system for **3DRequests** (Deliverables D, E, and F)—culminating in a copy-ready **Google AI Studio Master Implementation Prompt**.

---

## DELIVERABLE A (PHASE 1) — Complete Reference Website Investigation (`emblematica.agency`)

### 1.1 Holistic Experience Architecture & Page Structure
An end-to-end inspection of the live DOM and runtime behavior on [Emblematica Agency](https://emblematica.agency/), alongside its primary vertical landing pages ([Emblematica Branding](https://emblematica.agency/branding) and [Emblematica Digital](https://emblematica.agency/digital)), reveals a tightly paced, high-contrast narrative arc. Unlike traditional multi-page corporate sites that bury visitors in nested sub-menus, [Emblematica Agency](https://emblematica.agency/) structures its homepage as a **seven-stage choreographed scroll journey** hosted inside custom HTML blocks (`div#rec5163217401`, class `.t123`) on the Tilda publishing infrastructure.

| Sequence | Section Name / DOM Scope | Primary Visual Surface | Core Narrative & Functional Role |
| :--- | :--- | :--- | :--- |
| **Stage 0** | **Preloader & Curved Unmasking** (`body.is-booting`) | Deep Carbon (`#000000` / `--ink: #0e0c0d`) with central circular spotlight | Establishes immediate 3D craft authority via a vertical spinning reel of tactile 3D objects before unmasking the viewport via an upward convex curve. |
| **Stage 1** | **Interactive 3D Hero Stage** (`#scene` + `.topbar` + bottom bar) | Matte Architectural Grey (`--paper: #dadada` / `#E5E5E5`) | Showcases 8 floating, interactive 3D characters and props (including a retro hot-pink TV with live form inputs) anchored by a 3-column architectural footer bar. |
| **Stage 2** | **Manifesto Section** (`MANIFESTO`) | Deep Carbon Black (`--ink: #0e0c0d` / `#000000`) | Contrasts human conceptual thinking against commoditized AI imagery through a scroll-scrubbed word-by-word opacity reveal. |
| **Stage 3** | **What We Do Best** (Pinned 5-Card Horizontal Stack) | High-Chroma Card Surfaces (`#D4FF00`, `#FF3B8D`, `#6B66FF`, `#F090FF`, `#F4F4F4`) | Converts vertical scroll distance into a pinned horizontal/stacked card progression detailing 5 distinct service packages. |
| **Stage 4** | **Creative Method** (`CREATIVE METHOD`) | Deep Carbon Black (`--ink: #0e0c0d`) with `#FF3B8D` accents | Articulates the agency's "3 project visions" methodology using scroll-scrubbed typography and animated magenta SVG underline strokes. |
| **Stage 5** | **Who's On Back** (Founders & Pedigree) | Convex curved transition back to Matte Grey (`--paper: #dadada`) | Builds human trust via a cut-out duo portrait of the two female creative directors (10+ years experience, 100+ projects, Awwwards jury pedigree). |
| **Stage 6** | **3D Award Collage & Terminal Footer** | Matte Grey (`--paper: #dadada`) with floating 3D glass plaques | Reinforces social proof with floating 3D glass award plaques (*"Awwwards Jury 2026 - Elena Bobina"*, *"Las Puertas de Barceloneta Website of the Day"*) and repeats the 3-column structural footer bar. |

### 1.2 Navigation, Header & Drawer Menu Interactions
The navigation architecture on [Emblematica Agency](https://emblematica.agency/) deliberately avoids conventional horizontal link lists in favor of a floating, pill-based spatial interface:
* **Fixed Topbar (`.topbar`):** Positioned at the top of the viewport using fluid unit variables (`--menu-edge-gap: calc(12 * var(--u))`).
  * **Left Anchor:** Circular geometric emblem mark paired with the lowercase `emblematica` wordmark.
  * **Center Anchor (`--menu-anchor-left: calc(50vw - (45 * var(--u)))`):** A rounded white pill button (`--white: #fbfbfb`) labeled `MENU ::` with a four-dot grid icon.
  * **Right Anchor:** Language selector pill (`ENG` / `ESP`) adjacent to a high-visibility acid-lime CTA pill (`SHARE A BRIEF` on `--acid: #d5ff69`).
* **Drawer Menu Overlay (`.menu-overlay`):** Clicking `MENU ::` invokes a custom JavaScript FLIP geometry synchronization (`syncMenuGeometry()`). The central pill expands and morphs over `840ms cubic-bezier(0.18, 0.82, 0.22, 1)` into a right-aligned full-height off-white drawer covering approximately 55% of the viewport width (`--menu-drawer-padding-left: calc(28 * var(--u))`), while the underlying viewport receives a `720ms` Gaussian backdrop blur (`backdrop-filter: blur()`).
  * **Drawer State Switch:** The trigger button label switches from `MENU ::` to `CLOSE ::` accompanied by the `@keyframes menuCloseDrift` (`620ms cubic-bezier(0.18, 0.82, 0.22, 1)`) upward drift animation.
  * **Primary Menu Items:** Stacked display links for `WEB&DIGITAL` ([https://emblematica.agency/digital](https://emblematica.agency/digital)), `BRANDING&DESIGN` ([https://emblematica.agency/branding](https://emblematica.agency/branding)), `WHO WE ARE`, `PROJECTS`, and `BOOK A CALL` (highlighted in vibrant hot-pink `#FF2E93`).
  * **Secondary Utility Footer Inside Drawer:** Direct links for `ASK@EMBLEMATICA.AGENCY`, `CALENDLY`, `DRIBBBLE`, and `PRIVACY`, plus language toggles (`Eng` / `Esp`).
* **Graceful "Coming Soon" & Language Modals (`.lang-soon`):** Clicking links flagged with `.menu-link-disabled` (such as unfinished portfolio subpages) or the Spanish toggle (`Esp`) intercepts default browser navigation (`event.preventDefault()`) and triggers a glassmorphic modal overlay (`backdrop-filter: blur(6px)`):
  * English state: *"This page is on its way — We're putting the finishing touches on it — it'll be live very, very soon. [Got it]"*
  * Spanish state: *"Muy pronto en español — Estamos traduciendo el sitio — la versión en español llega muy pronto. [Entendido]"*
* **Direct Conversion Trigger (`SHARE A BRIEF`):** Clicking `SHARE A BRIEF` executes an immediate `mailto:ask@emblematica.agency?subject=Project%20brief` protocol call rather than forcing the user through a multi-page form reload.

### 1.3 Typography & Fluid Visual Hierarchy
Inspection of the computed DOM styles on [Emblematica Agency](https://emblematica.agency/) confirms that the entire typographic system is anchored by **Inter Tight** (`font-family: "Inter Tight", Arial, Helvetica, sans-serif`), loaded via Google Fonts, paired with a mathematical fluid scaling unit (`--u`) that locks proportions across aspect ratios:
* **Desktop Fluid Scaling Unit:** `--u: min(0.0694444444vw, 0.1315789474vh);` (normalizing `1--u` to `1px` on a reference `1440 × 760` viewport).
* **Mobile Fluid Scaling Unit (`@media (max-width: 900px)`):** `--u: min(0.2564102564vw, 0.1184834123vh);` (normalizing `1--u` to `1px` on a reference `390 × 844` mobile viewport).
* **Typographic Hierarchy & Tracking:**
  * **Display Card & Section Titles (`BRAND CREATION`, `RE-BRANDS`, `WEB& DIGITAL`):** Set in ultra-tight uppercase or title-case display sizes (`calc(64 * var(--u))` to `calc(96 * var(--u))`), `font-weight: 700` to `800`, `line-height: 0.92`, and negative letter-spacing (`-0.03em` to `-0.04em`).
  * **Editorial Statement Blocks (Manifesto & Creative Method):** Large mid-scale editorial paragraphs (`calc(32 * var(--u))` to `calc(48 * var(--u))`), `font-weight: 600`, `line-height: 1.15`, designed for word-by-word scroll illumination.
  * **Structural Micro-Copy (Hero Bottom Bar & Section Eyebrows):** All-caps architectural labels (`CONCEPT-LED DESIGN AGENCY`, `MANIFESTO`, `CREATIVE METHOD`, `WHO'S ON BACK`) set at `calc(11 * var(--u))` to `calc(13 * var(--u))`, `font-weight: 600`, `letter-spacing: 0.04em`, `line-height: 1.35`.

### 1.4 Layout, Composition & Spatial Pacing
Rather than stacking uniform 12-column Bootstrap-style rows, [Emblematica Agency](https://emblematica.agency/) alternates between **three distinct spatial grammars**:
1. **Diarama Stage Composition (Hero & Award Collage):** A full-viewport spatial canvas (`100vw × 100vh`) where cutout 3D renders are distributed across horizontal and vertical depth planes with intentional overlap and negative space, framed by fixed perimeter typography.
2. **Centered Monolithic Editorial (Manifesto & Creative Method):** High-contrast dark stages (`--ink: #0e0c0d`) with generous vertical padding (`calc(140 * var(--u))`), a small uppercase left/top eyebrow tag, and a single commanding text block occupying 70%–80% of the viewport width.
3. **Pinned Kinetic Deck (`What We Do Best`):** A sticky viewport container inside a tall scroll track where oversized rounded cards (`border-radius: calc(28 * var(--u))`) translate horizontally and stack with subtle 3D rotational angles (`rotateZ` / `rotateY`), blending text specifications on the left/top with cutout lifestyle/3D mockups on the right/bottom.

### 1.5 Color Palette, Surface Contrast & Visual Identity
The color architecture on [Emblematica Agency](https://emblematica.agency/) relies on a disciplined neutral foundation punctured by saturated electric accents:

| Token / Role | Verified Hex / CSS Value | Visual & Psychological Function |
| :--- | :--- | :--- |
| **`--ink` (Primary Dark Surface & Type)** | `#0e0c0d` / `#000000` | Provides deep theater-black grounding for the preloader, Manifesto, and Creative Method sections, maximizing contrast for 3D renders and white type. |
| **`--paper` (Primary Light Surface)** | `#dadada` / `#E5E5E5` | A cool architectural studio grey used for the Hero stage, Who's On Back, and Footer—avoiding the harsh glare of pure white while allowing specular highlights on 3D objects to pop. |
| **`--white` (UI Pill & Surface Highlight)** | `#fbfbfb` / `#F4F4F4` | Used for floating navigation pills (`MENU ::`), the slide-out drawer surface, and Card 5 (`Design Support`). |
| **`--acid` (Primary Conversion Accent)** | `#d5ff69` / `#D4FF00` | High-visibility electric lime green used on the `SHARE A BRIEF` CTA button and Card 1 (`Brand Creation`). |
| **Hot Magenta Accent** | `#FF3B8D` / `#FF2E93` | Used for Card 2 (`Re-Brands`), the retro TV in the hero, animated underline strokes in `Creative Method`, and `BOOK A CALL` in the menu drawer. |
| **Electric Violet Accent** | `#6B66FF` | Used for Card 3 (`Web & Digital`) to signal digital product sophistication. |
| **Orchid Lavender Accent** | `#F090FF` | Used for Card 4 (`B+W Combo`) as a bridge between warm magenta and cool violet. |
| **Subpage Atmospheric Skies** | Sky Blue (`#7EC8FF`–`#BCE4FF`) | Used exclusively on [Emblematica Branding](https://emblematica.agency/branding) (with soap bubbles) and [Emblematica Digital](https://emblematica.agency/digital) (with fluffy clouds) to differentiate vertical landing pages from the grey homepage stage. |

### 1.6 Backgrounds, Textures, Gradients & Lighting Treatments
* **Studio Clay & Specular Lighting:** Background surfaces themselves are kept flat and matte (`--paper: #dadada` and `--ink: #0e0c0d`) so that all visual complexity lives inside the **baked global illumination, subsurface scattering, and specular reflections of the 3D assets**.
* **Material Diversity in 3D Assets:** Across [Emblematica Agency](https://emblematica.agency/), [Emblematica Branding](https://emblematica.agency/branding), and [Emblematica Digital](https://emblematica.agency/digital), the studio showcases mastery of shaders by contrasting:
  * *Subsurface Scattering & Translucent Refractive Materials:* Golden amber grapes, translucent green jelly "R" with sprinkles, refractive blue glass "D" filled with pill capsules, and frosted blue/black glass Awwwards plaques.
  * *Soft-Body Cloth & Matte Vinyl:* Puffy checkered green/pink tote bag, pink hoodie bull/dragon character, stylized matte skin textures on the brunette and blonde 3D character busts.
  * *Hard-Surface Gloss & Pixel Emissives:* Retro hot-pink CRT television with an emissive green pixel matrix (`"LETS MAKE IT FANCY"`), glossy ceramic coffee cup, and 3D mechanical keyboard keycaps spelling `DIGITAL`.
* **Curved Section Dividers:** Rather than hard horizontal `1px` borders, transitions between `#dadada` (light grey) and `#0e0c0d` (black) utilize dynamic convex/concave SVG arcs and `border-radius` / `clip-path` envelopes that bend in response to scroll velocity.

### 1.7 Image, Video & 3D Asset Treatments
A critical finding of our technical inspection is that [Emblematica Agency](https://emblematica.agency/) achieves its "interactive 3D" look **without loading a heavy Three.js or WebGL `<canvas>` scene**. Instead:
* Every 3D character, inflatable letter, award plaque, and product mockup is rendered offline in a 3D DCC tool (such as Cinema 4D / Redshift / Octane or Blender Cycles) with alpha transparency and exported as optimized `.webp` / `.png` layers and short looping `.mp4` videos.
* In the Hero section (`#scene`), the retro hot-pink 3D television combines a pre-rendered 3D frame with live HTML form inputs (`YOUR NAME`, `YOUR PHONE`, `SEND REQUEST`) mapped onto the screen plane, creating the illusion of an interactive 3D terminal at a fraction of WebGL's memory footprint.

### 1.8 Hover, Click, Scroll, Pinned & Cursor Interactions Summary
* **Hover Interactions:** Hovering over the 8 hero 3D objects (`#scene` sets native `cursor: pointer`) and navigation pills triggers GPU-accelerated CSS transforms (`scale`, `translate3d`, and rotation micro-shifts) with `cubic-bezier(0.18, 0.82, 0.22, 1)` easing.
* **Click Interactions:**
  * Clicking `MENU ::` triggers the FLIP drawer expansion.
  * Clicking the interactive retro TV screen inputs allows direct typing on the hero canvas.
  * Clicking `SHARE A BRIEF` launches the pre-populated `mailto:` client action.
  * Clicking unfinished links or `ESP` opens the blurred `.lang-soon` modal overlay.
* **Scroll & Pinned Interactions:** Vanilla JavaScript scroll listeners compute normalized `0 → 1` progress ratios for each section's bounding box, driving hero depth parallax, word-by-word text illumination, the 5-card pinned horizontal showcase, SVG underline drawing, and curved section transitions.
* **Responsive Behavior (`@media (max-width: 900px)`):** On tablet and mobile viewports, the fluid unit `--u` recalculates (`min(0.2564102564vw, 0.1184834123vh)`), collapsing the wide horizontal hero diorama into a vertical/staggered composition, docking the navigation controls into a thumb-friendly floating bottom bar (`MENU ::`, `SHARE A BRIEF`, `ESP`), and adjusting the pinned card stack geometry for vertical touch swiping.

---

## DELIVERABLE B (PHASE 2) — Motion Reverse-Engineering & Choreography Inventory

To ensure **3DRequests** feels like a unified, choreographed digital film rather than disconnected widget animations, every major motion sequence on [Emblematica Agency](https://emblematica.agency/) has been reverse-engineered from the live DOM, CSS `<style>` rules, and inline vanilla JavaScript math.

### 2.1 Master Motion & Animation Inventory Table

| ID | Animation Name | Trigger Mechanism | Target DOM Elements | Initial State | Final State | Duration & Easing Curve | Control Mode & Reverse Scroll Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **M-01** | **Preloader Spotlight Reel & Curved Unmask** | `DOMContentLoaded` + asset load completion (`body.is-booting` removal) | Preloader black wrapper, circular reel items, bottom convex SVG/clip mask | Fullscreen `#000000` overlay; `translateY(0%)`; bottom curve flat (`Q 50% 100%`) | Overlay translates to `translateY(-100%)` while bottom edge bows upward into a convex arc (`Q 50% 75% → 100%`) | `~840ms–1000ms` via `cubic-bezier(0.18, 0.82, 0.22, 1)`; bypassed immediately if `prefers-reduced-motion: reduce` | **Time-based (One-shot on load):** Locks body scroll during `is-booting`, then releases scroll and hands off seamlessly to M-02 idle float. |
| **M-02** | **Hero 3D Idle Float & Pointer Drift** | Continuous `requestAnimationFrame` / CSS keyframe + `mousemove` on `#scene` | 8 cutout 3D object containers in `#scene` | Rest coordinates `(0, 0, 0)` with individual phase offsets | Sinusoidal vertical bob `translateY(±6*var(--u))` + pointer offset `translate3d(dx, dy, 0)` scaled by depth factor | Continuous ambient loop (`3.5s–5s` sine cycle) + pointer interpolation (`~420ms cubic-bezier(0.18, 0.82, 0.22, 1)`) | **Time + Pointer Continuous:** Remains active whenever Hero is in viewport; gracefully blends with M-03 vertical scroll parallax. |
| **M-03** | **Hero Multi-Plane Scroll Parallax** | `window.scrollY` within `[0, heroHeight]` | `#scene` 3D object layers & background/foreground planes | `p = 0`: `translate3d(0, 0, 0)` | `p = 1`: `translate3d(0, calc(p * depth * var(--u)), 0)` where each object has a distinct `depth` multiplier | Directly scrubbed (`0ms` lag, frame-locked to scroll) | **Scroll-Controlled (`p = clamp(scrollY / heroHeight, 0, 1)`):** Scrolling upward reverses the vertical spread along the exact same linear/depth vector back to origin. |
| **M-04** | **Curved Section Envelope Transition (Light ↔ Dark)** | Section boundary crossing `window.innerHeight` during scroll | SVG arc path `d="M ... Q ..."` / `border-radius` wrapper between Hero/Manifesto and Method/Founders | Flat or maximally bowed arc control point (`Q 50% Cy`) | Arc control point interpolates toward flat horizontal line as section fills viewport | Directly scrubbed to viewport intersection progress `0 → 1` | **Scroll-Controlled:** Scrolling backward re-bows the convex curve smoothly, preventing jarring hard cuts between `#dadada` and `#0e0c0d`. |
| **M-05** | **Manifesto Word-by-Word Scroll Illumination** | Section bounding box relative to viewport (`rect.top` vs `window.innerHeight`) | Dynamically wrapped `<span>` word nodes inside Manifesto body copy | All word spans at muted dark-grey opacity (`opacity: 0.15`) on `#0e0c0d` canvas | Sequential word spans step to full white (`opacity: 1.0`) as normalized progress $t \in [0, 1]$ crosses each word's index threshold | Scrubbed across scroll window (`window.innerHeight * 0.6`); soft CSS opacity smoothing (`~150ms–220ms ease`) | **Scroll-Controlled ($t = 	ext{clamp}(rac{H - 	ext{rect.top}}{0.6 H}, 0, 1)$):** Scrolling upward extinguishes words in reverse sequence (from last word back to first word) back to `0.15`. |
| **M-06** | **Pinned 5-Card Horizontal & 3D Tilt Stack (`What We Do Best`)** | Scroll position inside tall sticky wrapper (`[containerTop, containerBottom - vh]`) | Sticky viewport container (`position: sticky; top: 0`) + 5 service cards (`.card-1` to `.card-5`) | `r = 0`: Card 1 centered/active; Cards 2–5 offset right (`+X`) with slight `rotateZ` / `rotateY` tilt | `r = 1`: Track translates left (`translate3d(calc(-r * maxTranslateX), 0, 0)`) as successive cards glide into focal position and flatten tilt | Directly scrubbed across total track height (`vh + horizontalWidth`) | **Scroll-Controlled ($r = 	ext{clamp}(rac{	ext{scrollY} - 	ext{top}}{	ext{height} - vh}, 0, 1)$):** Scrolling backward un-stacks and glides cards back from left to right in exact reverse order before unpinning top. |
| **M-07** | **Creative Method Text & Magenta Underline Draw** | Section scroll entry into active reading zone | Body word `<span>` elements + 3 magenta (`#FF3B8D`) underline vectors beneath `project vision`, `creative idea`, `idea and mood` | Words at `opacity: 0.15`; underline vectors at `transform: scaleX(0)` (`transform-origin: left center`) or `stroke-dashoffset: 100%` | Words illuminate to `1.0`; each underline sweeps left-to-right to `scaleX(1)` (`stroke-dashoffset: 0`) as its parent phrase illuminates | Scrubbed to word index threshold + `420ms cubic-bezier(0.18, 0.82, 0.22, 1)` smoothing on underline | **Scroll-Controlled:** Scrolling upward retracts the magenta underlines from right to left (`scaleX(1 → 0)`) in sync with word dimming. |
| **M-08** | **FLIP Menu Drawer Morph & Backdrop Blur** | Click on `.menu-btn` (`MENU ::`) / `.menu-close-btn` (`CLOSE ::`) | `.menu-overlay`, `.topbar` pill geometry, page backdrop, close button label | Pill anchored at `left: calc(50vw - 45*var(--u)), top: calc(12*var(--u))`; backdrop blur `0px` | Full right drawer (`~55vw × 100vh`), `padding-left: calc(28*var(--u))`, backdrop `filter: blur()`, close label `menuCloseDrift` (`translateY(10*var(--u) → 0)`, `opacity: 0 → 1`) | Transform & border-radius: `840ms–860ms cubic-bezier(0.18, 0.82, 0.22, 1)`; Filter: `720ms`; Close drift: `620ms` | **Time-Based Interactive State Toggle:** Clicking `CLOSE ::` or backdrop reverses the FLIP morph back into the compact top-center pill. |
| **M-09** | **Award Collage Floating Parallax & Hover Lift** | Scroll through Section 6 + pointer hover on 3D plaques/props | Cutout 3D glass plaques (*Awwwards Jury 2026*, *WOTD*) and 3D props | Offset vertical coordinates with slight Z-tilt | Differential scroll parallax `translate3d(0, dy, 0)` + hover scale `scale(1.05) rotateZ(±2deg)` | Scroll-scrubbed vertical offset + `420ms cubic-bezier(0.18, 0.82, 0.22, 1)` hover transition | **Hybrid (Scroll + Hover):** Reverses vertical parallax on upward scroll; resets scale smoothly on `mouseleave`. |

### 2.2 Inter-Section Continuity & Choreographic Handoffs
Why does [Emblematica Agency](https://emblematica.agency/) feel cohesive rather than fragmented? Inspection reveals four deliberate continuity rules:
1. **Single Signature Easing Curve Across All UI Transitions:** Virtually every time-based motion on the site shares the exact same custom exponential-out curve: `cubic-bezier(0.18, 0.82, 0.22, 1)`. Whether expanding the menu drawer (`840ms`), shifting a hover state (`420ms`), or drifting the close button (`620ms`), the acceleration and deceleration physics feel like they belong to the same physical world.
2. **Curved Membrane Handoffs Between Light & Dark Worlds:** The site alternates purposefully between `--paper` (`#dadada`, representing an open daylight studio stage where 3D objects float) and `--ink` (`#0e0c0d`, representing an intimate dark screening room where typography and colorful cards command focus). The curved SVG/clip-path transitions act as an elastic membrane so one world physically pushes the other out of the frame.
3. **Scroll-Velocity Momentum Preservation:** Because the Manifesto (`M-05`), What We Do Best (`M-06`), and Creative Method (`M-07`) animations are bound directly to normalized scroll progress equations ($p, t, r \in [0, 1]$) rather than intersection-triggered one-shot timers, the user's scroll wheel acts as a physical playhead. Fast scrolling accelerates the choreography; slow scrolling allows frame-by-frame inspection; scrolling backward rewinds the timeline deterministically.
4. **Bookend Framing (Hero Bar ↔ Terminal Footer Bar):** The exact 3-column architectural bar that anchors the bottom of the Hero section (`CONCEPT-LED DESIGN AGENCY` / `WE CREATE DESIGN...` / `LET'S MEET IN BARCELONA`) reappears at the bottom of the page below the Award Collage, giving the entire scroll journey structural closure.

---

## DELIVERABLE C (PHASE 3) — Technical Investigation & Source Verification

### 3.1 Verified Findings vs. Educated Assumptions Matrix
Per strict engineering forensic standards, we separate **100% verified DOM/source observations** gathered directly from inspecting [Emblematica Agency](https://emblematica.agency/) from **educated architectural assumptions** regarding their offline asset creation workflow.

| Technical Dimension | Status | Forensic Evidence & Architectural Details |
| :--- | :--- | :--- |
| **Core CMS / Hosting Platform** | **VERIFIED** | Built on **Tilda Publishing** (`tildacdn.com`), project ID `189979109` (`tilda-blocks-page189979109.min.js`). However, instead of using standard Tilda drag-and-drop Zero Blocks (`t396`—there are `0` `.t396__artboard` nodes on the homepage), the entire experience is hand-coded inside a **Tilda T123 Custom HTML/CSS/JS Embed Block** (`div#rec5163217401.r.t-rec > .t123`). |
| **External JavaScript Dependencies** | **VERIFIED** | Only standard Tilda system scripts are loaded externally (`jquery-1.10.2.min.js`, `tilda-scripts-3.0.min.js`, `tilda-lazyload-1.0.min.js`, `hammer.min.js`, `tilda-video-1.0.min.js`, `tilda-events-1.0.min.js`). **Zero external animation or WebGL libraries** (no external GSAP CDN, ScrollTrigger CDN, Lenis CDN, Three.js, or Spline runtime) are loaded on `https://emblematica.agency/`. *(Note: While third-party reviews like [Mindsparkle Mag's MontRural feature](https://mindsparklemag.com/website/montrural) note Emblematica uses Tilda + GSAP on client sites like MontRural, their own agency flagship `emblematica.agency` executes its scroll choreography via bespoke inline vanilla JS and CSS inside `#rec5163217401`.)* |
| **WebGL / `<canvas>` Usage** | **VERIFIED** | There are **`0` `<canvas>` elements** in the live DOM of `https://emblematica.agency/`. All 3D visuals are pre-rendered 2D raster/video assets (`.webp`, `.png`, `.mp4`) composited in 3D CSS space using `transform: translate3d(...)`, `scale(...)`, and `rotate(...)`. |
| **Fluid Viewport Scaling Engine (`--u`)** | **VERIFIED** | Uses a custom CSS proportional unit `--u` defined as `min(0.0694444444vw, 0.1315789474vh)` on desktop and `min(0.2564102564vw, 0.1184834123vh)` under `@media (max-width: 900px)`. Every padding, margin, font size, and translation offset is expressed as `calc(N * var(--u))`, guaranteeing pixel-exact aspect-ratio preservation across all screen sizes. |
| **Typography Stack** | **VERIFIED** | `"Inter Tight", Arial, Helvetica, sans-serif` loaded from Google Fonts (`fonts.googleapis.com/css2?family=Inter...`). |
| **CSS Color Tokens** | **VERIFIED** | Defined in inline `<style>`: `--ink: #0e0c0d;`, `--paper: #dadada;`, `--white: #fbfbfb;`, `--acid: #d5ff69;`. |
| **Custom Cursor Implementation** | **VERIFIED** | No custom DOM follower element (`div.cursor`). Uses native CSS cursor manipulation (`cursor: pointer` on `#scene` and interactive controls). |
| **Accessibility & Reduced Motion** | **VERIFIED** | Inline JS explicitly checks `window.matchMedia('(prefers-reduced-motion: reduce)').matches` during preloader initialization and scroll setup to bypass heavy entrance delays for motion-sensitive users. |
| **Offline 3D DCC Pipeline** | **EDUCATED ASSUMPTION** | Because the live browser receives compiled `.webp`, `.png`, and `.mp4` files hosted on `static.tildacdn.com`, the specific offline 3D software used to model and render the characters (likely Cinema 4D + Redshift/Octane or Blender Cycles + After Effects) is not exposed in client-side headers. |
| **Design Prototyping Workflow** | **EDUCATED ASSUMPTION** | Given their listing in [Awwwards' Figma Websites Collection](https://www.awwwards.com/websites/figma/?page=4) (Honorable Mention, Sep 21, 2026), layouts and proportions (`1440 × 760` desktop artboard and `390 × 844` mobile artboard matching the exact reciprocals of `0.0694444444vw` and `0.2564102564vw`) were designed in Figma before being translated into `calc(N * var(--u))` CSS code. |

### 3.2 Deep-Dive into Emblematica's Core Engineering Techniques
1. **Why `0.0694444444vw` and `0.1315789474vh`? The Secret of `--u` Math:**
   * Notice that $rac{100}{1440} = 0.0694444444	ext{vw}$ and $rac{100}{760} = 0.1315789474	ext{vh}$.
   * By setting `--u: min(0.0694444444vw, 0.1315789474vh)`, `1 * var(--u)` equals exactly `1px` on a `1440 × 760` screen, and scales down or up proportionally constrained by whichever viewport dimension (width or height) is tighter! This prevents tall elements (like the 8-item 3D hero scene or pinned service cards) from ever overflowing vertically on short laptop screens (e.g., 13-inch MacBooks) while maintaining exact composition on ultra-wide monitors.
   * Similarly, at `@media (max-width: 900px)`, $rac{100}{390} = 0.2564102564	ext{vw}$ and $rac{100}{844} = 0.1184834123	ext{vh}$, locking mobile scaling to an iPhone `390 × 844` reference artboard.
2. **Pre-Rendered 3D Composite Layers vs. Live WebGL:**
   * Live WebGL scenes with 8 high-poly characters, subsurface scattering (grapes/jelly), fur/cloth, and environment reflections would require 40MB+ of `.glb`/HDRI downloads and cause severe thermal throttling on mobile devices.
   * By rendering transparent WebP sprites and short MP4 loops offline and driving their spatial coordinates via `translate3d(x, y, z)` and normalized scroll math, [Emblematica Agency](https://emblematica.agency/) achieves photorealistic offline raytracing quality at 60fps–120fps across every device.


---

## DELIVERABLE D (PHASE 4) — Original Creative Direction for 3DRequests

### 4.1 Strategic Translation: From "Concept-Led Brand Agency" to "Precision 3D Production Atelier"
We must not clone [Emblematica Agency](https://emblematica.agency/)'s playful Barcelona brand-agency persona (hot-pink retro TVs, shawarma wraps, and cartoon dragons). Instead, we extract **Emblematica's underlying structural genius**—its proportional `--u` viewport math, high-contrast light/dark stage alternation, curved membrane section transitions, scroll-scrubbed editorial typography, pinned multi-card discipline deck, and zero-lag pre-rendered 3D sprite/turntable compositing—and re-architect it for **3DRequests**.

**Core Creative Concept: *"THE PRECISION ATELIER & OPTICAL FOUNDRY"***  
**3DRequests** should feel like stepping inside a hybrid between a **Leica optical engineering laboratory**, a **Teenage Engineering industrial design studio**, and a **framestore-grade visual production house**. Every pixel must communicate that this studio understands both **sub-millimeter CAD/3D-printing tolerances** (wall thickness, manifold geometry, draft angles, mechanical assemblies) and **cinematic visual storytelling** (physically based rendering, subsurface shaders, rigid/soft-body dynamics, and product motion).

| Design Dimension | Reference Principle ([Emblematica Agency](https://emblematica.agency/)) | Original Translation for **3DRequests** |
| :--- | :--- | :--- |
| **Core Metaphor** | Playful pop-surrealist brand gallery | **Precision 3D Production Atelier & Optical Foundry** |
| **Hero Stage Concept** | 8 static/floating cutout props with a retro CRT TV form | **"The Multi-Discipline Optical Stage"**: A choreographed spatial workbench featuring 6–8 user-supplied signature 3D artifacts across disciplines (mechanical CAD assembly, consumer hardware product render, 3D-printed prototype with support-structure toggle, stylized character bust, packaging visualization) + an interactive **3-Mode Render Inspector Toggle (`FINAL SHADER` / `CLAY STUDIO` / `WIREFRAME TOPOLOGY`)** and a live **Quick-Scope Project Terminal**. |
| **Scroll Storytelling** | Word-by-word Manifesto illumination on `#0e0c0d` | **"Precision Manifesto + Scroll-Scrubbed Exploded Turntable"**: As words illuminate from `0.15` to `1.0` opacity, a multi-part 3D product assembly alongside the text scrubs through a 60-frame exploded-view image sequence (`frame_001.webp` → `frame_060.webp`) synchronized 1:1 with scroll progress. |
| **Service Architecture** | Pinned 5-card horizontal deck with bright pop colors | **"The 8-Discipline Production Deck"**: Pinned horizontal/stacked architectural cards organized into 4 core production pillars (or 8 modular discipline cards) with tactile material swatches, interactive CAD/Render split-sliders, and deliverable file-format badges (`.STEP`, `.STL`, `.OBJ`, `.FBX`, `.USDZ`, `.EXR`, `.MP4`). |
| **Conversion Engine** | Simple `mailto:` trigger on `SHARE A BRIEF` | **"The Interactive 3D Request Configurator Drawer + Direct Brief Upload"**: Clicking `SUBMIT A 3D REQUEST` opens a precision FLIP drawer where clients select their discipline, target output use-case (Manufacturing/3D Print, Marketing Render/Animation, Real-Time/AR, Character/Collectible), timeline, and attach reference sketches/CAD files—plus a 1-click direct email/call fallback. |

### 4.2 Color Palette & Material Surface System for 3DRequests
To ensure **3DRequests**’ client renders and 3D models never clash with overly loud background colors (a risk if we copied Emblematica's hot pink and purple cards directly), **3DRequests** uses an **achromatic calibration studio palette** punctuated by **high-visibility technical engineering accents**:

| CSS Custom Property | Hex Value | Surface / Material Name | Usage in **3DRequests** |
| :--- | :--- | :--- | :--- |
| `--obsidian-stage` | `#0A0B0E` | **Anodized Darkroom Carbon** | Preloader, Manifesto/Exploded-View stage, Technical Pipeline section, and Request Configurator drawer background. Allows emissive shaders, rim lighting, and wireframe overlays to pop with razor clarity. |
| `--atelier-stone` | `#E4E5E9` | **Calibrated 18% Studio Grey** | Hero workbench canvas, Portfolio Showcase stage, and Production Standards section. Neutral studio daylight environment where shadows and specular highlights read accurately. |
| `--titanium-surface` | `#F7F8FA` | **Machined Aluminum / Pure Card** | Floating navigation pills, specification cards, and interactive inspector controls. |
| `--carbon-grid` | `rgba(10,11,14,0.07)` | **Sub-Millimeter CAD Grid** | Subtle architectural coordinate ticks and crosshair markers (`+`) placed at structural grid intersections on light sections. |
| `--volt-precision` | `#D2FF28` | **Laser Calibration Lime** | Primary conversion CTA (`SUBMIT A 3D REQUEST`), active render-mode toggle indicator, and primary metric highlights (preserving Emblematica's high-converting `--acid` contrast energy in a sharper industrial hue). |
| `--ember-cad` | `#FF4F18` | **Industrial Engineering Orange** | Secondary technical accent used for mechanical/3D-printing tolerance callouts, wireframe vertex highlights, and step badges (`[01]`–`[08]`). |
| `--cobalt-optic` | `#2E5BFF` | **Optical Raytrace Blue** | Used for shader/rendering pipeline annotations, topology inspection overlays, and interactive hover borders. |
| `-- tungsten-muted` | `#686D78` | **Technical Spec Muted Ink** | Metadata labels, polygon count readouts, file-format tags, and secondary captions. |

### 4.3 Typography & Technical Micro-Hierarchy
We pair [Emblematica Agency](https://emblematica.agency/)'s proven **Inter Tight** display voice with a crisp technical monospace font (**JetBrains Mono**) to reinforce engineering authority:
1. **Primary Display & Editorial Sans (`--font-display: "Inter Tight", sans-serif`):**
   * Used for monumental uppercase/title-case headlines, pinned discipline card titles, and scroll-illuminated manifesto statements.
   * Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Tracking: `-0.035em` on display sizes; `-0.015em` on editorial paragraphs.
2. **Body & UI Sans (`--font-sans: "Inter", "Inter Tight", sans-serif`):**
   * Used for readable service descriptions, case study narratives, and form inputs (`font-weight: 400` and `500`, `line-height: 1.55`).
3. **Technical Engineering Monospace (`--font-mono: "JetBrains Mono", monospace`):**
   * Used for coordinate readouts (`X: 042.8mm | Y: 118.4mm`), deliverable file extension badges (`.STEP / .STL / .BLEND / 4K EXR`), polycount/tolerance specs, and numbered section indices (`[01 // CUSTOM MODELING]`).

### 4.4 Signature Interactive 3D Showcases (Without WebGL Bloat)
Taking direct inspiration from [Emblematica Agency](https://emblematica.agency/)'s high-performance pre-rendered architecture, **3DRequests** will showcase 3D mastery at a locked 60fps–120fps using **three bespoke interactive media mechanics**:
1. **Synchronized 3-Pass Shader Switcher (`FINAL RENDER` | `CLAY + AMBIENT OCCLUSION` | `WIREFRAME TOPOLOGY`):**
   * In both the Hero Showcase and Portfolio Case Studies, visitors can click or scrub a 3-state pill toggle (or drag an interactive optical loupe cursor) over a 3D asset.
   * Because all three passes (`asset_beauty.webp`, `asset_clay.webp`, `asset_wireframe.webp`) are rendered from the exact same camera angle offline, switching or masking between them via CSS `clip-path: circle(var(--loupe-r) at var(--mouse-x) var(--mouse-y))` is instantaneous (`0ms` GPU latency) and proves to technical buyers that **3DRequests** produces clean, subdivision-ready quad topology and watertight meshes—not messy AI-generated geometry.
2. **Scroll-Scrubbed 60-Frame Exploded Assembly Sequence:**
   * A dedicated `<canvas>` or preloaded `<img>` sprite frame-buffer controlled by normalized scroll progress $p \in [0, 1]$. As the visitor scrolls through the Engineering & Craftsmanship section, a complex product (provided by you—e.g., a mechanical assembly or consumer device) smoothly separates along its axial vectors to reveal internal gears, PCB mounts, and housing ribs, with floating SVG callout lines (`stroke-dashoffset` animated) labeling tolerances and materials.
3. **Interactive Turntable Drag-Scrubber Cards:**
   * Portfolio cards support horizontal click-and-drag (or hover X-coordinate mapping: `frameIndex = Math.floor((mouseX / cardWidth) * totalFrames)`) allowing prospective clients to rotate featured 3D models $360^\circ$ smoothly using a 24-frame or 36-frame WebP sprite strip.

---

## DELIVERABLE E (PHASE 5) — Complete Website Structure, Section Blueprint & Conversion Strategy

### 5.1 Holistic Conversion Funnel & User Journey Architecture
Every section of the **3DRequests** website is engineered to answer the four sequential questions of a high-value 3D buyer (Product Designer, Hardware Startup Founder, Manufacturing Engineer, Brand Director, or Agency Producer):
1. *"Can they execute at the visual and technical level I need?"* → Answered within 3 seconds in **Section 1 (Hero Stage + Live Topology Loupe)**.
2. *"Do they understand the difference between pretty pictures and production-ready 3D geometry?"* → Answered in **Section 2 (Precision Manifesto & Exploded Assembly)**.
3. *"Do they cover my exact 3D discipline and file deliverable requirements?"* → Answered in **Section 3 (Pinned 8-Discipline Production Deck)**.
4. *"Can I see proof across real projects, understand how the process works, and submit my brief right now without friction?"* → Answered in **Sections 4, 5, 6, and 7 (Interactive Portfolio Matrix, 4-Stage Production Pipeline, Technical Standards Grid, and Interactive Request Configurator)**.

---

### 5.2 Section-by-Section Complete Specification (All 10 Mandatory Attributes per Section)

#### SECTION 0: Preloader & Optical Calibration Curtain (`#preloader`)
1. **Purpose:** Mask initial high-DPI image/sprite preloading while immediately establishing **3DRequests**' identity as a precision 3D production studio.
2. **Content:**
   * Center Optical Viewport (`280 * var(--u)` circle): Rapidly cycles through 3 synchronized passes of a hero 3D object (`01 // WIREFRAME` → `02 // CLAY STUDIO` → `03 // FINAL SHADER`).
   * Monospace Counter: `[CALIBRATING OPTICAL STAGE — 00% → 100%]`.
   * Brand Wordmark: `3DREQUESTS™ — CUSTOM 3D DESIGN & VISUAL PRODUCTION`.
3. **Layout:** Full-viewport fixed overlay (`100vw × 100vh`, `z-index: 9999`), centered flexbox axis with perimeter coordinate ticks at all four corners (`calc(20 * var(--u))` inset).
4. **Visual Composition:** Deep `--obsidian-stage` (`#0A0B0E`) background with a crisp `1px solid rgba(255,255,255,0.12)` circular reticle in the center and subtle `--volt-precision` (`#D2FF28`) progress arc.
5. **Typography:** `JetBrains Mono` `calc(12 * var(--u))`, uppercase, `letter-spacing: 0.08em`, `#F7F8FA` text with `#D2FF28` numeric readout.
6. **Animation Behavior:**
   * Progress counter increments from `000` to `100` over `~650ms` (or immediately if `prefers-reduced-motion: reduce`).
   * At `100%`, the entire `#preloader` wrapper translates upward (`translateY(-100%)`) over `860ms cubic-bezier(0.18, 0.82, 0.22, 1)` while its bottom SVG mask curves upward into a convex arc (`d="M 0 100 Q 50 72 100 100"` → `Q 50 100 100 100`), unveiling the Hero Workbench beneath.
7. **Hover & Click Interactions:** Non-blocking during the sub-second load; if assets take >1.2s on slow connections, a `[SKIP INTRO ->]` monospace pill appears at bottom right.
8. **Scroll Behavior:** `body.is-booting` locks vertical scroll (`overflow: hidden`) until the `860ms` unmask transition completes.
9. **CTA Placement:** None inside preloader; hands off directly to the Hero Topbar and Quick-Scope Terminal.
10. **Responsive Behavior (`@media (max-width: 900px)`):** Circular reticle scales via mobile `--u` (`calc(200 * var(--u))`); corner ticks simplify to top-left and bottom-right.

---

#### SECTION 1: Global Spatial Navigation & Interactive 3D Hero Stage (`#hero-stage`)
1. **Purpose:** Deliver immediate visual astonishment, communicate all core 3D capabilities at a glance, allow interactive topology/shader inspection, and capture immediate high-intent project enquiries.
2. **Content (Production-Ready Copywriting):**
   * **Topbar Left:** `3DREQUESTS` geometric mark + monospace status pill `[STUDIO STATUS: ACCEPTING PROJECTS]`.
   * **Topbar Center:** `INDEX ::` floating pill button (opens FLIP navigation drawer).
   * **Topbar Right:** `VIEW DISCIPLINES` pill + `SUBMIT A REQUEST` high-contrast `--volt-precision` (`#D2FF28`) pill button.
   * **Center Spatial Diorama (6–8 User-Provided 3D Assets):** Arranged in a balanced multi-plane diorama around the central headline/inspector:
     * *Slot H1 (Top-Left Foreground):* Hard-surface mechanical/industrial assembly model.
     * *Slot H2 (Mid-Left):* Consumer product visualization render (e.g., electronics, bottle, footwear, or industrial hardware).
     * *Slot H3 (Bottom-Left):* 3D-printing-ready prototype shown with precision layer/support detailing.
     * *Slot H4 (Center Hero Focal Object):* Flagship multi-pass hero 3D asset with interactive **Shader Mode Switcher** (`[01 BEAUTY RENDER]` | `[02 CLAY STUDIO]` | `[03 QUAD WIREFRAME]`).
     * *Slot H5 (Top-Right):* Character or collectible sculpture bust/figurine.
     * *Slot H6 (Mid-Right Interactive Terminal Card):* **"FAST-TRACK BRIEF TERMINAL"**—an angled 3D/glassmorphic hardware module embedded directly in the hero canvas containing live inputs: `PROJECT TYPE (Dropdown)`, `YOUR EMAIL`, and `INITIATE BRIEF ->` (inspired by Emblematica's interactive retro TV, reimagined as a sleek Teenage-Engineering-style CAD terminal).
     * *Slot H7 (Bottom-Right):* Looping short 3D motion/simulation clip (`.mp4` / `.webm` with alpha or studio backdrop).
   * **Fixed 3-Column Bottom Architectural Bar:**
     * *Left Column:* `PRECISION 3D DESIGN & VISUAL PRODUCTION STUDIO`
     * *Center Column:* `CUSTOM 3D MODELING, PRODUCT VISUALIZATION, PRINT-READY PROTOTYPING, CHARACTER SCULPTING & CINEMATIC MOTION FOR BRANDS, ENGINEERS & CREATORS.`
     * *Right Column:* `BUILT FOR PRODUCTION — REQUEST A QUOTE ->`
3. **Layout:** `100vw × 100vh` spatial canvas using Emblematica's exact `--u` fluid coordinate system (`--u: min(0.0694444444vw, 0.1315789474vh)`). Central focal object anchored at `(50vw, 48vh)`, surrounded by peripheral 3D cutouts positioned via `calc(N * var(--u))` offsets and anchored at the bottom by a `calc(64 * var(--u))` 3-column architectural bar.
4. **Visual Composition:** Calibrated studio grey surface (`--atelier-stone: #E4E5E9`) with subtle CAD crosshair ticks (`+`), crisp ambient drop shadows beneath each floating 3D object, and high-contrast `#0A0B0E` typography.
5. **Typography:**
   * Hero Background/Overlay Display Title: `ENGINEERED IN 3D. RENDERED TO CONVERT.` set in `Inter Tight` ExtraBold (`800`), `calc(78 * var(--u))`, `line-height: 0.92`, `-0.035em` tracking.
   * Bottom Bar & Labels: `Inter Tight` SemiBold (`600`), `calc(12 * var(--u))`, uppercase, `letter-spacing: 0.04em`.
   * Shader Switcher Pills: `JetBrains Mono` `calc(11 * var(--u))`.
6. **Animation Behavior:**
   * **Idle Float (`M-02` equivalent):** Each of the 7 hero slots oscillates on an independent sine wave (`translateY(±5 * var(--u))` over `3.8s–5.2s`).
   * **Mouse Parallax Drift:** Pointer coordinates `(clientX, clientY)` normalized to `[-0.5, 0.5]` shift each layer proportionally to its `data-depth` (`0.15` to `0.65`) smoothed over `420ms cubic-bezier(0.18, 0.82, 0.22, 1)`.
7. **Hover & Click Interactions:**
   * Hovering over any peripheral 3D object scales it to `1.04`, reveals a monospace spec tooltip (`[DISCIPLINE: MECHANICAL CAD // TOLERANCE: ±0.05mm]`), and slightly dims sibling objects.
   * Clicking the `[BEAUTY | CLAY | WIREFRAME]` toggle cross-fades or radially wipes (`clip-path: circle(...)`) the central hero object between its 3 rendered passes over `540ms cubic-bezier(0.18, 0.82, 0.22, 1)`.
   * Typing into the **Fast-Track Brief Terminal** (`Slot H6`) and clicking `INITIATE BRIEF ->` opens the Request Configurator Drawer pre-filled with the user's input.
8. **Scroll Behavior:** As `window.scrollY` advances from `0` to `heroHeight`, normalized progress $p = 	ext{clamp}(	ext{scrollY} / 	ext{heroHeight}, 0, 1)$ drives differential vertical parallax (`translate3d(0, calc(p * depth * var(--u)), 0)`) while the bottom convex SVG membrane curves upward to transition into Section 2 (`#0A0B0E`). Scrolling back up reverses the spread identically.
9. **CTA Placement:**
   * Primary Top-Right Pill: `SUBMIT A REQUEST` (`--volt-precision: #D2FF28`).
   * On-Canvas Interactive Terminal (`Slot H6`): `INITIATE BRIEF ->`.
   * Bottom-Right Architectural Bar Link: `REQUEST A QUOTE ->`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** Recalculates `--u: min(0.2564102564vw, 0.1184834123vh)`. The 7-slot horizontal spread reorganizes into a clean 2-column vertical stagger around the central 3-pass hero object; the Fast-Track Brief Terminal docks cleanly below the primary headline; floating bottom control bar pins `INDEX ::` and `SUBMIT A REQUEST` within thumb reach.

---

#### SECTION 2: The Craft & Precision Manifesto + Scroll-Scrubbed Exploded View (`#manifesto-precision`)
1. **Purpose:** Differentiate **3DRequests** from generic freelance marketplaces and AI-generated slop by articulating why purposeful geometry, clean topology, and lighting direction matter—paired with a visceral scroll-scrubbed exploded 3D product sequence.
2. **Content (Production-Ready Copywriting):**
   * **Eyebrow Tag:** `[01 // STUDIO PHILOSOPHY & TECHNICAL STANDARD]`
   * **Sub-Headline:** `AT 3DREQUESTS, WE BELIEVE GREAT 3D IS BUILT FROM THE GEOMETRY UP.`
   * **Scroll-Illuminated Manifesto Copy:**
     > *"Anyone can generate a passable image from a prompt or download a stock mesh. Very few can engineer a model that manufactures cleanly, animates without deformation artifacts, and holds up under macro 8K studio lighting. Every request we take on—whether a single 3D-printable prototype, a mechanical assembly, a collectible character, or a full product launch film—is built with clean topology, accurate scale, and deliberate art direction."*
   * **Exploded View Annotations (3 Callout Pins):**
     * `PIN 01 // MANIFOLD & PRINT-READY GEOMETRY — Watertight meshes, verified wall thickness, and zero non-manifold edges.`
     * `PIN 02 // SUBDIVISION & DEFORMATION TOPOLOGY — Clean quad flow engineered for smooth rigging, animation, and close-up bevels.`
     * `PIN 03 // PHYSICALLY BASED LOOKDEV — Calibrated IOR, subsurface scattering, and studio HDRI lighting that sells material truth.`
3. **Layout:** 2-column asymmetric split on a full-bleed dark stage (`--obsidian-stage: #0A0B0E`), `min-height: 160vh` scroll track. Left 58%: sticky editorial manifesto statement. Right 42%: sticky exploded-view sequence canvas (`600 × 600 * var(--u)`) with animated SVG callout lines.
4. **Visual Composition:** Deep carbon black (`#0A0B0E`) background; muted dark-grey unrevealed words (`rgba(247,248,250,0.16)`) illuminating to pure white (`#F7F8FA`), with key engineering terms (`clean topology`, `accurate scale`, `deliberate art direction`) underscored by animated `--ember-cad` (`#FF4F18`) and `--volt-precision` (`#D2FF28`) vector strokes.
5. **Typography:**
   * Eyebrow: `JetBrains Mono` `calc(12 * var(--u))`, `#D2FF28`.
   * Manifesto Statement: `Inter Tight` SemiBold (`600`), `calc(40 * var(--u))`, `line-height: 1.16`, `-0.02em` tracking.
   * Callout Pins: `JetBrains Mono` `calc(11 * var(--u))`, `#F7F8FA` with `#FF4F18` leader dots.
6. **Animation Behavior:**
   * **Word-by-Word Scroll Illumination (`M-05` mechanic):** Each word is wrapped in `<span class="word">`. As scroll progress $t = 	ext{clamp}(rac{	ext{window.innerHeight} - 	ext{rect.top}}{	ext{window.innerHeight} 	imes 0.75}, 0, 1)$ advances, words step from `opacity: 0.16` to `opacity: 1.0`.
   * **Synchronized Exploded View Scrub:** The same progress variable $t \in [0, 1]$ maps to frame index $k = 	ext{Math.round}(t 	imes (	ext{totalFrames} - 1))$ of the user-provided exploded-view image sequence (or 3 layered PNG component groups separating via `translate3d` along X/Y/Z axes if a multi-layer PNG asset is provided instead of a frame sequence).
   * **Callout Line Draw (`M-07` mechanic):** At $t = 0.30, 0.60, 0.85$, SVG leader lines animate `stroke-dashoffset: 1 → 0` over `420ms cubic-bezier(0.18, 0.82, 0.22, 1)`.
7. **Hover & Click Interactions:** Hovering over any of the 3 callout pins highlights the corresponding part of the exploded 3D model and displays deliverable format compatibility (`.STEP`, `.STL`, `.FBX`, `.BLEND`).
8. **Scroll Behavior:** Fully scroll-scrubbed (`0 → 1`). Scrolling backward reassembles the exploded 3D components back into a unified product while dimming the manifesto words in reverse order.
9. **CTA Placement:** Subtle inline link beneath the manifesto after $t > 0.85$: `EXPLORE OUR 8 CORE DISCIPLINES ↓` + persistent topbar `SUBMIT A REQUEST`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** Stacks vertically: the exploded-view visual pins at the top half of the mobile viewport (`42vh`) while the illuminated manifesto copy scrolls cleanly through the lower half (`58vh`).

---

#### SECTION 3: What We Do Best — Pinned 8-Discipline Production Deck (`#disciplines-deck`)
1. **Purpose:** Present **3DRequests**' complete spectrum of 8 specialized 3D services using [Emblematica Agency](https://emblematica.agency/)'s signature pinned horizontal/stacked card choreography (`M-06`), making it effortless for any visitor—from an industrial engineer to a collectibles creator—to recognize their exact need.
2. **Content (All 8 Core 3DRequests Specializations):**
   * **Section Header:** `[02 // CAPABILITIES & DISCIPLINES] — EIGHT SPECIALIZED 3D PRODUCTION VERTICALS. ONE UNIFIED STUDIO.`
   * **Card (01) Custom 3D Modeling:**
     * *Tag:* `(01) BESPOKE GEOMETRY` | *Title:* `CUSTOM 3D MODELING`
     * *Copy:* `"From rough napkin sketches, 2D blueprints, or reference photographs to production-grade 3D assets built with clean topology and exact proportions."`
     * *Deliverable Specs:* `Sub-D Quad Meshes • Hard-Surface & Organic • .OBJ / .FBX / .BLEND / .MAX`
     * *Visual Slot:* User-provided custom 3D model showcasing wireframe-to-shaded transition.
   * **Card (02) Product Design & Visualization:**
     * *Tag:* `(02) INDUSTRIAL & CONSUMER` | *Title:* `PRODUCT DESIGN & VISUALIZATION`
     * *Copy:* `"Iterative 3D form development, CMF (Color, Material, Finish) exploration, and studio-grade visualization for physical products before tooling begins."`
     * *Deliverable Specs:* `CMF Variants • Packaging & Hardware • 4K–8K Print & Web Ready`
     * *Visual Slot:* User-provided consumer product render with multiple material swatches.
   * **Card (03) 3D Printing-Ready Models & Prototypes:**
     * *Tag:* `(03) ADDITIVE MANUFACTURING` | *Title:* `3D PRINTING & PROTOTYPES`
     * *Copy:* `"Watertight, manifold meshes engineered specifically for SLA, SLS, FDM, and MJF printing—complete with wall-thickness verification, keying, and tolerances."`
     * *Deliverable Specs:* `Manifold Checked • Multi-Part Keying & Hollowing • .STL / .3MF / .STEP`
     * *Visual Slot:* User-provided 3D print model paired with physical/sliced print preview.
   * **Card (04) Mechanical & Functional Product Modeling:**
     * *Tag:* `(04) PRECISION CAD & ASSEMBLIES` | *Title:* `MECHANICAL & FUNCTIONAL MODELING`
     * *Copy:* `"Dimensionally accurate functional parts, enclosures, interlocking mechanisms, and exploded technical assemblies built for real-world fit and function."`
     * *Deliverable Specs:* `Parametric & Direct CAD • Fitment & Clearance • .STEP / .IGES / .Parasolid`
     * *Visual Slot:* User-provided mechanical/functional CAD assembly render.
   * **Card (05) Character & Collectible Modeling:**
     * *Tag:* `(05) DIGITAL SCULPTING & FIGURINES` | *Title:* `CHARACTER & COLLECTIBLE MODELING`
     * *Copy:* `"High-detail digital sculpting for stylized characters, gaming miniatures, vinyl toys, statues, and articulated collectibles ready for resin printing or rigging."`
     * *Deliverable Specs:* `High-Poly ZBrush/Blender Sculpts • Cut & Keyed for Print or Retopologized for Rigging`
     * *Visual Slot:* User-provided character or collectible statue render.
   * **Card (06) Photorealistic Product Rendering:**
     * *Tag:* `(06) COMMERCIAL LOOKDEV & STILLS` | *Title:* `PRODUCT RENDERING`
     * *Copy:* `"Campaign-ready packshots, macro material close-ups, lifestyle staging, and e-commerce 360° turntables that outperform traditional studio photography."`
     * *Deliverable Specs:* `Physically Based Shaders • Multi-Pass EXR Compositing • 4K / 8K Stills`
     * *Visual Slot:* User-provided photorealistic hero product render.
   * **Card (07) 3D Animation & Motion Design:**
     * *Tag:* `(07) KINETIC STORYTELLING` | *Title:* `3D ANIMATION & MOTION`
     * *Copy:* `"Feature-reveal product films, exploded-view technical animations, physics simulations, and social launch loops that explain complex products in seconds."`
     * *Deliverable Specs:* `60fps Product Films • Rigid/Soft-Body & Fluid Sims • ProRes / MP4 / WebM`
     * *Visual Slot:* User-provided looping `.mp4` / `.webm` 3D motion reel clip.
   * **Card (08) Custom Visual Production:**
     * *Tag:* `(08) END-TO-END CAMPAIGN WORLDS` | *Title:* `CUSTOM VISUAL PRODUCTION`
     * *Copy:* `"Full-scale 3D environments, abstract brand worlds, interactive web 3D assets, and bespoke visual direction tailored for agencies, startups, and enterprise launches."`
     * *Deliverable Specs:* `Art Direction • Environment & Stage Design • Web-Optimized GLB / USDZ / Video`
     * *Visual Slot:* User-provided custom visual production / environment showcase.
3. **Layout:** Tall scroll container (`height: 480vh`) containing a sticky viewport wrapper (`position: sticky; top: 0; height: 100vh; overflow: hidden`). Inside, a horizontal kinetic track holds the 8 oversized cards (`width: calc(460 * var(--u))`, `height: calc(560 * var(--u))`, `border-radius: calc(28 * var(--u))`, gap `calc(24 * var(--u))`).
4. **Visual Composition:** Each card features a distinct, sophisticated surface palette that complements 3D work without overpowering it:
   * Card 01: `#F7F8FA` (Machined Titanium White) with `#0A0B0E` ink.
   * Card 02: `#161920` (Graphite Anodized Slate) with `#F7F8FA` ink and `#D2FF28` badge.
   * Card 03: `#D2FF28` (Laser Calibration Lime—Emblematica `--acid` homage) with `#0A0B0E` ink.
   * Card 04: `#E8ECEF` (Brushed Steel Grey) with `#FF4F18` (Engineering Orange) accents.
   * Card 05: `#1E1B2E` (Deep Obsidian Indigo) with `#F7F8FA` ink and `#FF3B8D` sculpt highlight.
   * Card 06: `#F2EFE9` (Warm Gallery Alabaster) with `#0A0B0E` ink.
   * Card 07: `#2E5BFF` (Optical Raytrace Blue) with `#FFFFFF` ink.
   * Card 08: `#0A0B0E` (Carbon Black bordered in `#D2FF28`) with `#F7F8FA` ink.
5. **Typography:**
   * Card Index Tag: `JetBrains Mono` `calc(12 * var(--u))`, uppercase.
   * Card Display Title: `Inter Tight` ExtraBold (`800`), `calc(44 * var(--u))`, `line-height: 0.94`, uppercase.
   * Card Body Copy: `Inter` Medium (`500`), `calc(15 * var(--u))`, `line-height: 1.45`.
   * Deliverable Spec Footer: `JetBrains Mono` `calc(11 * var(--u))`, pill-bordered tags.
6. **Animation Behavior (`M-06` Pinned Horizontal + Tilt Choreography):**
   * Normalized scroll progress $r = 	ext{clamp}\left(rac{	ext{scrollY} - 	ext{containerTop}}{	ext{containerHeight} - 	ext{viewportHeight}}, 0, 1ight)$.
   * Horizontal translation: `transform: translate3d(calc(${-r * maxTranslateX}px), 0, 0)`.
   * Dynamic 3D perspective card tilt: As each card approaches the center focal zone, its initial rotational offset (`rotateZ(2.5deg) rotateY(-6deg) scale(0.94)`) smoothly interpolates to `rotateZ(0deg) rotateY(0deg) scale(1.0)`.
   * Progress Scrubber Bar at Bottom of Sticky Viewport: `[01] ━━━━●─────────── [08]`.
7. **Hover & Click Interactions:**
   * Hovering a card elevates its 3D cutout asset via `translate3d(0, calc(-10 * var(--u)), calc(20 * var(--u))) scale(1.05)` over `420ms cubic-bezier(0.18, 0.82, 0.22, 1)`.
   * Clicking `"REQUEST THIS SERVICE ->"` on any card opens the Request Configurator Drawer with that specific discipline (`01`–`08`) automatically pre-selected!
8. **Scroll Behavior:** Deterministically scrubbed ($r \in [0, 1]$). Scrolling backward glides the deck from Card 08 back to Card 01 and restores each card's perspective tilt.
9. **CTA Placement:** Bottom of every individual card features an interactive pill button: `COMMISSION [DISCIPLINE NAME] ->`, plus a deck-footer button `NEED MULTIPLE DISCIPLINES? BUILD A CUSTOM PACKAGE ->`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** On mobile viewports, instead of an overly long horizontal track, the 8 cards utilize `position: sticky; top: calc(72 * var(--u) + (index * 12 * var(--u)))` vertical card-stacking (like physical index cards stacking one atop another as you scroll down), preserving the tactile deck feel with native vertical thumb scrolling.

---

#### SECTION 4: Selected Works & Interactive 3D Inspection Showcase (`#portfolio-showcase`)
1. **Purpose:** Prove production quality across diverse real-world projects (provided by you) while giving technical and creative buyers an interactive way to inspect geometry, lighting, and turntable angles.
2. **Content:**
   * **Section Header:** `[03 // SELECTED PRODUCTION ARCHIVE] — ENGINEERED FOR REAL-WORLD MANUFACTURING, CAMPAIGNS & LAUNCHES.`
   * **Filter Bar:** `[ALL WORKS]` | `[PRODUCT & PACKAGING]` | `[MECHANICAL & CAD]` | `[3D PRINT & PROTOTYPES]` | `[CHARACTERS & COLLECTIBLES]` | `[3D MOTION]`
   * **Project Showcase Cards (Populated Strictly from User-Provided Project Assets — Zero Invented Clients):**
     * Structured as modular **Project Inspection Stages** (`Project Slot 01` through `Project Slot 06`).
     * Each card displays: Project Title, Discipline Category Badge, Deliverable Format Tags (`.STEP`, `.STL`, `4K EXR`, `60FPS MP4`), Technical Objective Summary, and an **Interactive Inspection Toggle** (`[RENDER VIEW]` / `[WIREFRAME / CLAY VIEW]` / `[360° DRAG TURNTABLE]`).
3. **Layout:** Asymmetric 2-column Bento/Editorial Showcase on `--atelier-stone` (`#E4E5E9`) background. Featured flagship projects span 12 columns (`height: calc(540 * var(--u))`); secondary projects pair in 7-column / 5-column alternating rows with `calc(28 * var(--u))` gaps.
4. **Visual Composition:** High-contrast frameless media containers (`border-radius: calc(24 * var(--u))`) with dark `#0A0B0E` or neutral studio backdrops, overlaid with floating glassmorphic HUD badges (`backdrop-filter: blur(12px)`) showing real technical metadata (e.g., `Render Engine`, `Target Output`, `Deliverable Type`).
5. **Typography:**
   * Project Titles: `Inter Tight` Bold (`700`), `calc(32 * var(--u))`, `-0.02em` tracking.
   * HUD Metadata & Filter Pills: `JetBrains Mono` `calc(11 * var(--u))`, uppercase.
6. **Animation Behavior:**
   * Cards enter on scroll with a vertical clip-curtain reveal (`clip-path: inset(12% 0% 0% 0% round 24px)` → `inset(0% 0% 0% 0% round 24px)`) and image scale (`scale(1.08)` → `scale(1.0)`) scrubbed over the bottom 25% of viewport entry.
7. **Hover & Click Interactions:**
   * **Interactive Loupe / Wireframe Split:** Moving the cursor across a project card moves an optical inspection lens (`clip-path: circle(calc(110 * var(--u)) at var(--mx) var(--my))`) that reveals the underlying wireframe or clay mesh right beneath the beauty render!
   * **Click Interaction:** Clicking a project opens a sleek **Project Case Study Drawer/Modal** displaying high-res gallery stills, turntable video, problem/solution breakdown, and a `"REQUEST A SIMILAR PROJECT ->"` button.
8. **Scroll Behavior:** Smooth parallax differential (`0.08` depth offset) between left and right columns in asymmetric rows; reverses cleanly on upward scroll.
9. **CTA Placement:** Inside each project card hover state (`INSPECT PROJECT ::`) and a prominent banner below the archive: `"HAVE A SPECIFIC PRODUCT OR PROTOTYPE IN MIND? START YOUR BRIEF ->"`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** Collapses into a single-column full-width feed; the hover optical loupe automatically converts into a touch-draggable horizontal split-slider (`<-> DRAG TO COMPARE RENDER / WIREFRAME`).

---

#### SECTION 5: The 3DRequests Production Method (`#production-method`)
1. **Purpose:** Translate [Emblematica Agency](https://emblematica.agency/)'s high-trust `CREATIVE METHOD` section into a transparent, engineering-grade **4-Stage 3D Production Pipeline** that eliminates buyer anxiety around revisions, file compatibility, and missed deadlines.
2. **Content (Production-Ready Copywriting):**
   * **Eyebrow Tag:** `[04 // PRODUCTION WORKFLOW]`
   * **Editorial Statement (with Animated Underline Highlights):**
     > *"First we lock the technical constraints. Then we craft the visual impact. Every project follows a structured four-stage production pipeline—so whether you are sending us a CAD assembly, a hand-drawn character sketch, or a physical product sample, you have complete visibility from initial blockout to final native files."*
     *(Animated `--volt-precision` `#D2FF28` and `--ember-cad` `#FF4F18` underlines draw beneath `lock the technical constraints`, `structured four-stage production pipeline`, and `final native files`.)*
   * **4-Stage Horizontal Process Stepper:**
     * **Stage 01 // Technical Scope & Reference Lock:** *"We review your sketches, dimensions, CAD files, or mood boards, define exact target use-cases (manufacturing, print, web, or broadcast), and lock a clear milestone schedule."*
     * **Stage 02 // Greybox Blockout & Proportions Approval:** *"Before spending hours on fine shaders or micro-bevels, we deliver an untextured 3D clay/wireframe blockout (or test-print mesh) so you can verify scale, silhouette, and mechanical fit."*
     * **Stage 03 // Precision Detailing, Lookdev & Lighting:** *"We execute high-resolution sculpting, clean subdivision topology, physically based material shaders, studio lighting, or keyframed motion choreography."*
     * **Stage 04 // Quality Assurance & Native File Handover:** *"Every asset undergoes manifold/print checks or multi-pass render verification before we deliver organized, production-ready native files, renders, and commercial usage rights."*
3. **Layout:** Full-width dark stage (`--obsidian-stage: #0A0B0E`) entered via a smooth convex SVG curve. Top half: centered editorial statement (`max-width: calc(1080 * var(--u))`). Bottom half: 4-column interactive process grid separated by animated SVG progress connectors.
4. **Visual Composition:** Deep carbon `#0A0B0E` backdrop, crisp `1px solid rgba(255,255,255,0.1)` architectural grid cells, glowing `--volt-precision` (`#D2FF28`) active step indicators, and `--ember-cad` (`#FF4F18`) underline vectors.
5. **Typography:**
   * Editorial Statement: `Inter Tight` SemiBold (`600`), `calc(38 * var(--u))`, `line-height: 1.18`.
   * Stage Numbers (`01`–`04`): `JetBrains Mono` Bold, `calc(28 * var(--u))`, `#D2FF28`.
   * Stage Titles: `Inter Tight` Bold (`700`), `calc(22 * var(--u))`, `#F7F8FA`.
   * Stage Descriptions: `Inter` Regular (`400`), `calc(15 * var(--u))`, `rgba(247,248,250,0.75)`.
6. **Animation Behavior (`M-07` mechanic):**
   * Words in the editorial statement illuminate from `0.15` to `1.0` opacity on scroll, triggering `scaleX(0 → 1)` (`420ms cubic-bezier(0.18, 0.82, 0.22, 1)`) on the three underline vectors as their parent phrases light up.
   * The horizontal connector line bridging Stages `01 → 02 → 03 → 04` fills left-to-right in sync with scroll progress through the bottom half of the section.
7. **Hover & Click Interactions:** Hovering each stage card illuminates its border in `#D2FF28` and reveals a `"TYPICAL DELIVERABLE AT THIS STAGE"` micro-badge (e.g., `Stage 02 -> Interactive Clay Turntable + Scale PDF`).
8. **Scroll Behavior:** Scroll-scrubbed text and connector progress; reverses smoothly when scrolling back up.
9. **CTA Placement:** Centered action bar beneath the 4 stages: `READY TO LOCK STAGE 01? SUBMIT YOUR PROJECT SPECS ->`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** The 4-column horizontal stepper transforms into a vertical timeline with a left-aligned animated vertical progress bar connecting Stages `01` through `04`.

---

#### SECTION 6: Studio Capabilities, Deliverable Standards & Industry Matrix (`#studio-standards`)
1. **Purpose:** Replace [Emblematica Agency](https://emblematica.agency/)'s `WHO'S ON BACK` and `AWARD COLLAGE` sections with an authentic, high-trust **Technical Standards & Who We Serve Showcase** tailored for a pre-launch studio (avoiding any fabricated awards, fake client logos, or invented testimonials while maximizing technical credibility).
2. **Content (Production-Ready Copywriting — 100% Honest & Grounded):**
   * **Eyebrow Tag:** `[05 // BUILT FOR PRODUCTION TEAMS]`
   * **Headline:** `DESIGNED TO PLUG SEAMLESSLY INTO YOUR ENGINEERING, PRODUCT, OR CREATIVE PIPELINE.`
   * **Left Column (Studio Identity & Standards):**
     > *"3DRequests was built to bridge the gap between technical engineering CAD and high-end entertainment/commercial CGI. Whether you are an individual inventor preparing a prototype for 3D printing, a hardware startup launching a flagship product, or a creative agency needing custom 3D motion on a tight deadline, we deliver studio-grade geometry and visuals without agency bloat."*
   * **Right Column (Interactive Deliverable & Compatibility Matrix):**
     * **CAD & Manufacturing Formats:** `.STEP`, `.IGES`, `.STL`, `.3MF`, `.OBJ` (Watertight, manifold-verified, millimeter-accurate).
     * **DCC & Real-Time Formats:** `.BLEND`, `.FBX`, `.C4D`, `.MAX`, `.ZTL`, `.GLB / .GLTF`, `.USDZ` (Clean quad topology, UV-unwrapped, PBR textured).
     * **Visual & Motion Outputs:** `16-bit / 32-bit Multi-Pass .EXR`, `4K–8K PNG/TIFF with Alpha`, `ProRes 4444`, `60fps MP4 / WebM`.
   * **Floating 3D Spec Collage (Emblematica Section 6 Homage):**
     * Instead of glass Awwwards plaques, 4 floating 3D technical artifacts (supplied from your asset library—e.g., a translucent resin print test piece, a brushed metal CAD gear, a UV-checkerboard sphere/shader ball, and a stylized character token) float with subtle parallax around the specification matrix.
3. **Layout:** Enters via a smooth convex SVG curve back onto `--atelier-stone` (`#E4E5E9`). 12-column grid: Left 5 columns for studio narrative + Who We Serve pills (`Startups & Founders`, `Product Designers`, `Manufacturers & Engineers`, `Brands & Marketing Teams`, `Creative Agencies`, `Individual Creators`); Right 7 columns for the Technical Compatibility Matrix surrounded by floating 3D shader/print tokens.
4. **Visual Composition:** Daylight studio grey (`#E4E5E9`) background, crisp white (`#F7F8FA`) specification bento tiles with `1px solid rgba(10,11,14,0.08)` borders, and floating cutout 3D calibration objects.
5. **Typography:**
   * Headline: `Inter Tight` Bold (`700`), `calc(48 * var(--u))`, `line-height: 0.98`, `#0A0B0E`.
   * Matrix Headers: `Inter Tight` Bold (`700`), `calc(18 * var(--u))`.
   * File Format Pills: `JetBrains Mono` Medium (`500`), `calc(12 * var(--u))`, `#0A0B0E` on `#E4E5E9` pills.
6. **Animation Behavior (`M-09` mechanic):**
   * Floating 3D shader/calibration tokens drift vertically at independent parallax ratios (`depth: -0.25` to `+0.35`) as the user scrolls toward the footer.
7. **Hover & Click Interactions:** Hovering any file format pill (e.g., `.STEP` or `.GLB`) highlights which of the 8 studio disciplines output that format and displays a 1-line technical QA guarantee.
8. **Scroll Behavior:** Continuous differential parallax on floating 3D tokens; reverses on upward scroll.
9. **CTA Placement:** Secondary text link `DOWNLOAD STUDIO CAPABILITIES & FILE SPEC SHEET (PDF)` (optional asset slot) + primary trigger `START A PROJECT BRIEF ->`.
10. **Responsive Behavior (`@media (max-width: 900px)`):** Stacks narrative above the 3-card Deliverable Matrix; floating 3D tokens tuck neatly into the section corners so they never obscure specification text.

---

#### SECTION 7: The Interactive Project Enquiry Experience & Terminal Footer (`#request-brief`)
1. **Purpose:** Convert visitors into qualified project leads. Where [Emblematica Agency](https://emblematica.agency/) relies solely on a `mailto:` link on `SHARE A BRIEF`, **3DRequests** upgrades this into a dual-mode conversion engine: an **Embedded & Drawer-Accessible Interactive 3D Request Configurator** plus a friction-free **Direct Email / Schedule Call fallback**.
2. **Content (Production-Ready Copywriting & Form Architecture):**
   * **Eyebrow Tag:** `[06 // INITIATE PRODUCTION]`
   * **Display Headline:** `TELL US WHAT YOU NEED BUILT IN 3D.`
   * **Sub-Copy:** `"Select your required disciplines, target output, and timeline below—or attach your reference sketches, CAD files, or brief directly. We review every request with a senior 3D specialist and respond within 24 business hours with a clear scope and estimate."`
   * **Interactive 4-Step Request Configurator:**
     1. **Step 1 — Select Discipline(s) (Multi-Select Interactive Pills):**
        `[Custom 3D Modeling]` `[Product Design & Visualization]` `[3D Printing-Ready Models]` `[Mechanical / Functional CAD]` `[Character & Collectible]` `[Product Rendering]` `[3D Animation & Motion]` `[Custom Visual Production]`
     2. **Step 2 — Target Output & Use-Case:**
        `[Physical Manufacturing / 3D Print]` `[Marketing & E-Commerce Stills]` `[Product Launch Video / Animation]` `[Real-Time / Web / AR Asset]` `[Not Sure — Need Guidance]`
     3. **Step 3 — Existing Reference Materials Available:**
        `[CAD / 3D Files]` `[2D Drawings / Blueprints]` `[Hand Sketches / Moodboard]` `[Physical Product Photos]` `[Concept Idea Only]`
     4. **Step 4 — Project Details, File Upload Dropzone & Contact:**
        * Inputs: `Your Name *`, `Work Email *`, `Company / Brand (Optional)`, `Target Timeline / Budget Range (Optional)`, `Project Description & Specifications *`.
        * Drag-and-Drop Reference Zone: `"Drop reference images, sketches, PDFs, or ZIP/CAD files here (or paste a Drive/Dropbox link)"`.
        * Submit Button: `SUBMIT 3D REQUEST ->` (`--volt-precision: #D2FF28`).
   * **Direct Contact Fallback Bar:**
     * `PREFER DIRECT EMAIL? -> REQUESTS@3DREQUESTS.COM (1-CLICK COPY + MAILTO)`
     * `BOOK A 15-MIN TECHNICAL DISCOVERY CALL ->`
   * **Bookend 3-Column Architectural Footer Bar (Echoing Hero Bottom Bar per Emblematica's Structural Closure):**
     * *Left Column:* `3DREQUESTS™ — PRECISION 3D DESIGN & VISUAL PRODUCTION STUDIO`
     * *Center Column:* `CUSTOM MODELING • PRODUCT VISUALIZATION • 3D PRINTING PROTOTYPES • MECHANICAL CAD • CHARACTERS • MOTION`
     * *Right Column:* `© 2026 3DREQUESTS. ALL RIGHTS RESERVED. [BACK TO TOP ↑]`
3. **Layout:** Full-viewport culmination section on `--obsidian-stage` (`#0A0B0E`) with a 7-column Interactive Configurator on the left/center and a 5-column Direct Contact & Live Summary Receipt Card on the right (which dynamically updates like an engineering spec sheet as the user clicks discipline pills!). Also accessible from anywhere on the site via the topbar `SUBMIT A REQUEST` FLIP drawer.
4. **Visual Composition:** Deep `#0A0B0E` background, tactile dark-slate form pills (`#161920`) that ignite into `--volt-precision` (`#D2FF28` with `#0A0B0E` text) when selected, and a live "Specification Receipt" card styled like a precision CAD blueprint tag.
5. **Typography:**
   * Display Headline: `Inter Tight` ExtraBold (`800`), `calc(64 * var(--u))`, `line-height: 0.94`.
   * Form Labels & Receipt Specs: `JetBrains Mono` `calc(12 * var(--u))`, uppercase.
   * Pill Selectors & Inputs: `Inter` Medium (`500`), `calc(14 * var(--u))`.
6. **Animation Behavior:**
   * Selecting any discipline or output pill triggers a crisp `220ms cubic-bezier(0.18, 0.82, 0.22, 1)` scale-bounce and immediately animates a new line item into the right-hand "Live Request Spec Sheet".
   * Submitting the form triggers a deterministic confirmation sequence displaying a unique reference ID (`[REQ-2026-XXXX — RECEIVED]`).
7. **Hover & Click Interactions:**
   * Multi-select pill toggles, drag-and-drop file highlight state, 1-click email address copy-to-clipboard with `[COPIED TO CLIPBOARD ✓]` feedback toast, and smooth scroll-to-top on `[BACK TO TOP ↑]`.
8. **Scroll Behavior:** Enters via a final convex SVG transition from `--atelier-stone` (`#E4E5E9`) to `--obsidian-stage` (`#0A0B0E`) and locks cleanly at the terminal architectural bar.
9. **CTA Placement:** Primary `SUBMIT 3D REQUEST ->` full-width button inside the configurator + `1-CLICK EMAIL` and `BOOK A CALL` cards in the right column.
10. **Responsive Behavior (`@media (max-width: 900px)`):** The Live Spec Receipt condenses into a sticky summary bar above the submit button; pill selectors wrap into a 2-column touch-friendly grid with minimum `48px` tap targets.

---

### 5.3 Asset & Project File Manifest Required from You (The Studio Owner)
Per your critical instructions, **no projects, client names, testimonials, or renders have been fabricated**. To populate the production build generated by the Google AI Studio Master Prompt below, prepare the following asset folder (`/public/assets/`):

| Asset Slot ID | Target Section | Recommended Format & Resolution | Description of What You Need to Provide |
| :--- | :--- | :--- | :--- |
| **`hero-center-beauty.webp`**, **`hero-center-clay.webp`**, **`hero-center-wire.webp`** | Preloader & Section 1 (Hero Center Focal Asset) | `1600 × 1600px` transparent `.webp` (3 matching camera passes) | Your single most impressive 3D model rendered from the exact same camera in (1) Final Beauty Shader, (2) Matte Studio Clay/AO, and (3) Quad Wireframe overlay. |
| **`hero-item-01.webp` to `hero-item-05.webp`** | Section 1 (Hero Peripheral Floating Objects) | `900 × 900px` transparent `.webp` (`<250KB` each) | 5 cutout 3D renders representing your range: (1) Mechanical/CAD part, (2) Consumer product, (3) 3D-printed prototype, (4) Character/collectible sculpt, (5) Material/packaging piece. |
| **`hero-motion-loop.mp4` / `.webm`** | Section 1 (`Slot H7` Motion Preview) | `720 × 720px` looping video (`4–6s`, muted, `<2.5MB`) | A short, punchy 3D motion or simulation loop. |
| **`exploded-frames/` (`01`–`36.webp`) OR `exploded-layers-1-4.webp`** | Section 2 (Manifesto Exploded Assembly) | Either 36-frame `.webp` sequence (`1000 × 1000px`) OR 4 separate transparent `.webp` component layers | A multi-part 3D product or mechanical assembly that separates along its axes to show internal engineering precision. |
| **`discipline-01.webp` to `discipline-08.webp` (or `.mp4` for #07)** | Section 3 (Pinned 8-Discipline Cards) | `1000 × 1000px` transparent `.webp` (plus looping `.mp4` for Card 07) | 1 hero visual for each of the 8 core services (Custom Modeling, Product Design, 3D Printing, Mechanical CAD, Character/Collectible, Product Rendering, 3D Animation, Custom Visual Production). |
| **`portfolio-01/` to `portfolio-06/`** | Section 4 (Selected Works Archive) | Per project: `beauty.webp` (`1920 × 1200px`), `wireframe.webp` (`1920 × 1200px`), optional `turntable.mp4`, + real title & specs | Your real 3D project pieces (even internal R&D pieces or anonymized client studies—each with a beauty render and a matching clay/wireframe pass for the interactive optical loupe). |
| **`tokens-01.webp` to `tokens-04.webp`** | Section 6 (Studio Standards Floating Collage) | `600 × 600px` transparent `.webp` | 4 small tactile 3D tokens (e.g., shader calibration ball, resin print test coupon, CAD gear, sculpted detail). |


---

## DELIVERABLE F (PHASE 6) — Copy-Ready Google AI Studio Master Implementation Prompt

Copy the complete block below and paste it directly into **Google AI Studio** (alongside your project asset folder or existing repository files) to build the complete **3DRequests** production website.

```markdown
# ROLE & OBJECTIVE
You are a Principal Creative Director, Awwwards-winning Interactive Motion Designer, Senior UX Architect, and Lead Frontend Engineer.
Your task is to build the complete, production-ready flagship website for **3DRequests**—a premium 3D design, engineering, and visual production studio.

## 1. CRITICAL ARCHITECTURAL & ASSET CONSTRAINTS (READ FIRST)
1. **Inspect Existing Workspace First:** Before writing code, inspect any project files, directory structures, package manifests (`package.json`), or image/video assets I have uploaded or provided in this workspace. Adapt to the existing framework if one is present; if starting from a clean slate, build a modular, zero-bloat Vite + React + TypeScript (or clean modular HTML5/CSS3/TypeScript) application with zero heavy runtime WebGL dependencies unless `.glb` files are explicitly provided.
2. **Strict Anti-Hallucination Policy:** Do NOT invent fake client logos, fictional customer testimonials, fabricated awards, or imaginary case study metrics. Use the exact production copywriting specified in this prompt and bind all visual slots to the provided asset paths (with clean, architectural SVG/canvas fallback placeholders clearly labeled with their expected `data-asset-slot` filename if an image file has not yet been dropped into `/public/assets/`).
3. **High-Performance Pre-Rendered 3D Stagecraft:** Inspired by the Awwwards-recognized architecture of `https://emblematica.agency/`, achieve a 60fps–120fps tactile 3D studio experience using **multi-plane pre-rendered 3D `.webp` / `.png` passes (Beauty, Clay/AO, Quad Wireframe), scroll-scrubbed image/layer sequences, SVG convex/concave membrane transitions, FLIP drawer geometry, and deterministic CSS/JS scroll math** rather than heavy, mobile-throttling WebGL scenes.

---

## 2. BRAND POSITIONING & CREATIVE DIRECTION ("THE PRECISION ATELIER & OPTICAL FOUNDRY")
**3DRequests** is a custom 3D design and visual production studio serving individuals, businesses, brands, hardware startups, product designers, manufacturers, and creative agencies.
Our 8 core specializations are:
1. Custom 3D Modeling
2. Product Design & Visualization
3. 3D Printing-Ready Models & Prototypes
4. Mechanical & Functional Product Modeling
5. Character & Collectible Modeling
6. Product Rendering
7. 3D Animation & Motion
8. Custom Visual Production

**Aesthetic Persona:** A precision hybrid of a Leica optical laboratory, a Teenage Engineering industrial design studio, and a tier-one visual effects atelier. It must communicate sub-millimeter technical precision, clean quad/manifold topology, and cinematic lookdev—never looking like a generic freelancer template or AI-generated landing page.

---

## 3. DESIGN TOKENS, FLUID SCALING ENGINE (`--u`) & TYPOGRAPHY
Implement the following exact CSS custom properties in `:root`:

```css
:root {
  /* Surface & Color Palette */
  --obsidian-stage: #0A0B0E;       /* Primary Darkroom Carbon Stage */
  --obsidian-elevated: #14171F;    /* Dark Card / Input Surface */
  --atelier-stone: #E4E5E9;        /* Calibrated 18% Studio Grey Light Stage */
  --titanium-surface: #F7F8FA;     /* Pure Machined Card / Pill Surface */
  --volt-precision: #D2FF28;       /* Primary Conversion CTA & Active Indicator */
  --ember-cad: #FF4F18;            /* Engineering Tolerance & Accent Highlight */
  --cobalt-optic: #2E5BFF;         /* Shader / Topology Inspection Accent */
  --tungsten-muted: #686D78;       /* Muted Technical Spec Copy */
  --carbon-grid: rgba(10, 11, 14, 0.07);
  --obsidian-grid: rgba(247, 248, 250, 0.08);

  /* Mathematical Fluid Viewport Scaling Unit (Desktop Reference: 1440 x 760) */
  --u: min(0.0694444444vw, 0.1315789474vh);

  /* Signature Motion Physics */
  --ease-atelier: cubic-bezier(0.18, 0.82, 0.22, 1);
  --dur-fast: 260ms;
  --dur-med: 420ms;
  --dur-slow: 840ms;

  /* Typography Families (Load via Google Fonts: Inter Tight, Inter, JetBrains Mono) */
  --font-display: "Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Navigation & Drawer Geometry */
  --menu-edge-gap: calc(14 * var(--u));
}

@media (max-width: 900px) {
  :root {
    /* Mobile Reference Artboard: 390 x 844 */
    --u: min(0.2564102564vw, 0.1184834123vh);
  }
}
```

### Typographic Scale Rules:
* **Hero & Section Display Headlines:** `font-family: var(--font-display); font-weight: 800; font-size: calc(72 * var(--u)); line-height: 0.92; letter-spacing: -0.035em; text-transform: uppercase;`
* **Editorial Scroll-Illuminated Statements:** `font-family: var(--font-display); font-weight: 600; font-size: calc(40 * var(--u)); line-height: 1.15; letter-spacing: -0.02em;`
* **Card Titles:** `font-family: var(--font-display); font-weight: 800; font-size: calc(42 * var(--u)); line-height: 0.94; letter-spacing: -0.03em; text-transform: uppercase;`
* **Technical Spec Tags, Coordinates & Eyebrows:** `font-family: var(--font-mono); font-weight: 500; font-size: calc(11.5 * var(--u)); letter-spacing: 0.05em; text-transform: uppercase;`

---

## 4. COMPLETE SECTION-BY-SECTION ARCHITECTURE & INTERACTIVE IMPLEMENTATION

### COMPONENT 0: Preloader & Optical Calibration Curtain (`#preloader`)
* **Behavior:** On initial load, apply `body.is-booting { overflow: hidden; }`. Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`—if true, skip animation and reveal immediately.
* **Visuals:** Fullscreen `--obsidian-stage` (`#0A0B0E`) overlay with a central circular optical reticle (`width: calc(260 * var(--u)); height: calc(260 * var(--u))`) that cycles rapidly through the 3 passes of the central hero asset (`01 WIREFRAME` → `02 CLAY STUDIO` → `03 BEAUTY SHADER`) while a monospace counter increments `[OPTICAL STAGE CALIBRATION: 000% -> 100%]`.
* **Curved Unmasking Transition:** Upon completion (`~700ms`), translate the preloader upward (`transform: translate3d(0, -100%, 0)`) over `860ms var(--ease-atelier)` while morphing its bottom SVG edge from a flat line to an upward convex arc (`d="M0,100 Q50,70 100,100"` → `d="M0,100 Q50,100 100,100"`), revealing Section 1 beneath.

### COMPONENT 1: Fixed Spatial Navigation & FLIP Drawer (`.topbar` & `.menu-overlay`)
* **Topbar Layout:** Fixed across the top (`top: var(--menu-edge-gap)`):
  * **Left:** `3DREQUESTS` emblem + wordmark + live indicator dot `[ACCEPTING REQUESTS]`.
  * **Center:** Floating pill button `INDEX ::` (`background: var(--titanium-surface); color: var(--obsidian-stage); border-radius: 999px;`).
  * **Right:** Quick-jump pill `DISCIPLINES (08)` + primary CTA pill `SUBMIT A REQUEST` (`background: var(--volt-precision); color: var(--obsidian-stage); font-weight: 700;`).
* **FLIP Drawer Overlay (`.menu-overlay`):**
  * Clicking `INDEX ::` expands the drawer from the right covering `55vw` on desktop (`100vw` on mobile) over `840ms var(--ease-atelier)`, applying `backdrop-filter: blur(12px)` over `720ms var(--ease-atelier)` to the underlying page.
  * The button label switches to `CLOSE ::` using `@keyframes menuCloseDrift` (`0% { opacity: 0; transform: translate3d(0, calc(10 * var(--u)), 0); } 100% { opacity: 1; transform: translate3d(0, 0, 0); }` over `620ms var(--ease-atelier)`).
  * **Drawer Links:** `01 // PHILOSOPHY & PRECISION`, `02 // 8 CORE DISCIPLINES`, `03 // PRODUCTION ARCHIVE`, `04 // 4-STAGE PIPELINE`, `05 // FILE & CAD STANDARDS`, and `06 // SUBMIT A 3D REQUEST` (highlighted in `--volt-precision`), plus footer links for direct email copy and scheduling.

### SECTION 1: Interactive 3D Hero Workbench (`#hero-stage`)
* **Surface:** `100vw x 100vh` on `--atelier-stone` (`#E4E5E9`) with subtle architectural crosshair ticks (`+`) at grid intersections.
* **Central Focal Object + Live 3-Pass Shader Switcher (`Slot H4`):**
  * Positioned center-stage with a floating monospace control pill below it: `[01 BEAUTY SHADER]` | `[02 CLAY + AO]` | `[03 QUAD TOPOLOGY]`.
  * Clicking any mode cross-fades/wipes between `hero-center-beauty.webp`, `hero-center-clay.webp`, and `hero-center-wire.webp` over `520ms var(--ease-atelier)`. Furthermore, moving the mouse over the central object activates an interactive circular inspection lens (`clip-path: circle(calc(95 * var(--u)) at var(--mx) var(--my))`) that previews the next shader pass in real time!
* **Peripheral Floating 3D Cutout Assets (`Slots H1–H3, H5, H7`):**
  * 5 floating 3D object slots + 1 looping motion preview (`Slot H7`) distributed around the perimeter with independent `data-depth` attributes (`0.18` to `0.60`).
  * **Continuous Idle Float:** Sinusoidal vertical oscillation `translateY(calc(±6 * var(--u)))` (`3.8s–5.2s` stagger).
  * **Pointer Parallax Drift:** Smoothly interpolate `(mouseX, mouseY)` offsets over `420ms var(--ease-atelier)`.
  * **Hover Spec Tooltip:** Hovering any floating 3D object scales it `1.04x` and reveals its discipline tag and tolerance spec.
* **On-Canvas Fast-Track Brief Terminal (`Slot H6`):**
  * Embedded directly on the mid-right of the hero stage (styled like a precision hardware controller module) with live inputs:
    * `SELECT DISCIPLINE` (Dropdown of the 8 services)
    * `YOUR WORK EMAIL` (Input)
    * `START PROJECT BRIEF ->` (Button that opens the Section 7 / Drawer Request Configurator pre-populated with these values).
* **Bottom 3-Column Architectural Bar:**
  * **Left:** `PRECISION 3D DESIGN & VISUAL PRODUCTION STUDIO`
  * **Center:** `CUSTOM 3D MODELING, PRODUCT VISUALIZATION, PRINT-READY PROTOTYPES, MECHANICAL CAD, CHARACTERS & MOTION FOR BRANDS, ENGINEERS & CREATORS.`
  * **Right:** `BUILT FOR PRODUCTION — SUBMIT A REQUEST ->`
* **Scroll Parallax (`M-03`):** Compute $p = 	ext{clamp}(	ext{scrollY} / 	ext{heroHeight}, 0, 1)$ and apply `transform: translate3d(0, calc(p * depth * var(--u)), 0)` to each hero layer.

### SECTION 2: Precision Manifesto & Scroll-Scrubbed Exploded Assembly (`#manifesto-precision`)
* **Transition In:** Smooth upward convex SVG curve transitioning from `--atelier-stone` (`#E4E5E9`) to `--obsidian-stage` (`#0A0B0E`).
* **Left Column (Scroll-Scrubbed Word Illumination):**
  * Eyebrow: `[01 // STUDIO PHILOSOPHY & TECHNICAL STANDARD]`
  * Sub-headline: `AT 3DREQUESTS, WE BELIEVE GREAT 3D IS BUILT FROM THE GEOMETRY UP.`
  * Body Copy (split into individual `<span class="word">` elements):
    *"Anyone can generate a passable image from a prompt or download a stock mesh. Very few can engineer a model that manufactures cleanly, animates without deformation artifacts, and holds up under macro 8K studio lighting. Every request we take on—whether a single 3D-printable prototype, a mechanical assembly, a collectible character, or a full product launch film—is built with clean topology, accurate scale, and deliberate art direction."*
  * **Scroll Math:** Calculate $t = 	ext{clamp}\left(rac{	ext{window.innerHeight} - 	ext{rect.top}}{	ext{window.innerHeight} 	imes 0.75}, 0, 1ight)$. Map $t$ across word indices so each word transitions from `opacity: 0.16` to `opacity: 1.0` on scroll down, and dims in exact reverse order on scroll up.
  * **Animated Underlines:** When $t$ passes the word indices for `clean topology`, `accurate scale`, and `deliberate art direction`, animate SVG underline strokes beneath them (`transform: scaleX(0 -> 1)`, `transform-origin: left center`, `420ms var(--ease-atelier)` in `--volt-precision` and `--ember-cad`).
* **Right Column (Scroll-Scrubbed Exploded 3D Assembly):**
  * Synchronized to the exact same $t \in [0, 1]$ scroll progress: either scrub through a frame sequence (`exploded_01.webp` → `exploded_36.webp`) OR separate 4 layered component PNGs/SVGs along axial vectors (`translate3d`) while drawing 3 SVG technical callout lines (`PIN 01 // MANIFOLD GEOMETRY`, `PIN 02 // SUB-D QUAD FLOW`, `PIN 03 // CALIBRATED PBR LOOKDEV`).

### SECTION 3: Pinned 8-Discipline Production Deck (`#disciplines-deck`)
* **Scroll Track Architecture:** Create a outer track container (`height: 460vh` on desktop) with an inner sticky viewport (`position: sticky; top: 0; height: 100vh; overflow: hidden`).
* **Scroll Math (`M-06`):** Compute $r = 	ext{clamp}\left(rac{	ext{scrollY} - 	ext{containerTop}}{	ext{containerHeight} - 	ext{viewportHeight}}, 0, 1ight)$. Translate the horizontal card track via `transform: translate3d(calc(${-r * maxTranslateX}px), 0, 0)`. As each card enters the active viewport center, interpolate its 3D tilt from `rotateZ(2.5deg) rotateY(-6deg) scale(0.94)` to `rotateZ(0deg) rotateY(0deg) scale(1.0)`.
* **The 8 Required Cards (Include Exact Copy, Deliverable Badges, Visual Slot & Pre-Filled CTA):**
  1. **(01) CUSTOM 3D MODELING** — Surface: `#F7F8FA` | Text: `#0A0B0E` | Copy: *"From rough sketches, 2D blueprints, or reference photos to production-grade 3D assets built with clean topology and exact proportions."* | Specs: `Sub-D Quad Meshes • Hard-Surface & Organic • .OBJ / .FBX / .BLEND`
  2. **(02) PRODUCT DESIGN & VISUALIZATION** — Surface: `#161920` | Text: `#F7F8FA` | Copy: *"Iterative 3D form development, CMF exploration, and studio-grade visualization for physical products before tooling begins."* | Specs: `CMF Variants • Hardware & Packaging • 4K–8K Ready`
  3. **(03) 3D PRINTING & PROTOTYPES** — Surface: `#D2FF28` | Text: `#0A0B0E` | Copy: *"Watertight, manifold meshes engineered specifically for SLA, SLS, FDM, and MJF printing—complete with wall-thickness verification, keying, and tolerances."* | Specs: `Manifold Checked • Multi-Part Keying • .STL / .3MF / .STEP`
  4. **(04) MECHANICAL & FUNCTIONAL MODELING** — Surface: `#E8ECEF` | Text: `#0A0B0E` (Accent: `#FF4F18`) | Copy: *"Dimensionally accurate functional parts, enclosures, interlocking mechanisms, and exploded technical assemblies built for real-world fit and function."* | Specs: `Precision CAD • Clearance Verified • .STEP / .IGES / .Parasolid`
  5. **(05) CHARACTER & COLLECTIBLE MODELING** — Surface: `#1E1B2E` | Text: `#F7F8FA` | Copy: *"High-detail digital sculpting for stylized characters, miniatures, vinyl toys, statues, and collectibles ready for resin printing or animation rigging."* | Specs: `High-Poly Sculpts • Cut & Keyed or Retopologized • .ZTL / .STL / .FBX`
  6. **(06) PRODUCT RENDERING** — Surface: `#F2EFE9` | Text: `#0A0B0E` | Copy: *"Campaign-ready packshots, macro material close-ups, lifestyle staging, and e-commerce 360° turntables that outperform traditional photography."* | Specs: `Physically Based Shaders • Multi-Pass EXR • 4K / 8K Stills`
  7. **(07) 3D ANIMATION & MOTION** — Surface: `#2E5BFF` | Text: `#FFFFFF` | Copy: *"Feature-reveal product films, exploded-view technical animations, physics simulations, and launch loops that explain complex products in seconds."* | Specs: `60fps Product Motion • Physics & Simulations • ProRes / MP4 / WebM`
  8. **(08) CUSTOM VISUAL PRODUCTION** — Surface: `#0A0B0E` (Border: `#D2FF28`) | Text: `#F7F8FA` | Copy: *"Full-scale 3D environments, brand worlds, interactive web 3D assets, and bespoke visual direction for agencies, startups, and enterprise launches."* | Specs: `Bespoke Art Direction • Environments • Web GLB / USDZ / Video`
* **Card Interaction:** Clicking `"COMMISSION THIS DISCIPLINE ->"` on any card opens the Request Configurator with that discipline pre-selected.
* **Mobile Fallback (`@media (max-width: 900px)`):** Convert the horizontal track into a tactile vertical sticky card stack (`position: sticky; top: calc(70 * var(--u) + index * 12 * var(--u))`).

### SECTION 4: Selected Production Archive & Interactive Wireframe Loupe (`#portfolio-showcase`)
* **Surface:** `--atelier-stone` (`#E4E5E9`).
* **Category Filter Bar:** `[ALL WORKS]`, `[PRODUCT & PACKAGING]`, `[MECHANICAL & CAD]`, `[3D PRINT & PROTOTYPES]`, `[CHARACTERS & COLLECTIBLES]`, `[3D MOTION]`.
* **6 Modular Project Inspection Cards (`portfolio-01` to `portfolio-06`):**
  * Each card layers two synchronized images: `beauty.webp` (base layer) and `wireframe.webp` (top inspection layer masked by `clip-path: circle(var(--loupe-r, 0px) at var(--mx, 50%) var(--my, 50%))`).
  * On mouse hover/move over the card, expand `--loupe-r` to `calc(120 * var(--u))` and track cursor coordinates `(var(--mx), var(--my))` with a crisp monospace HUD ring (`TOPOLOGY / CLAY X-RAY`) so visitors can physically inspect the wireframe mesh underneath every finished render! Also include a manual toggle pill (`[BEAUTY]` | `[WIREFRAME]` | `[SPLIT SLIDER]`) for touch devices and keyboard users.
  * Clicking a project opens a **Case Study Inspection Modal** with full technical specs, deliverable formats, and `"REQUEST A SIMILAR BUILD ->"`.

### SECTION 5: The 4-Stage 3D Production Pipeline (`#production-method`)
* **Surface:** Enters via a convex SVG curve into `--obsidian-stage` (`#0A0B0E`).
* **Scroll-Illuminated Method Statement:**
  *"First we lock the technical constraints. Then we craft the visual impact. Every project follows a structured four-stage production pipeline—so whether you are sending us a CAD assembly, a hand-drawn character sketch, or a physical product sample, you have complete visibility from initial blockout to final native files."*
* **Animated Underline Highlights:** Draw SVG underlines beneath `lock the technical constraints`, `structured four-stage production pipeline`, and `final native files` as scroll progress illuminates those words.
* **4 Interactive Pipeline Cards connected by a Scroll-Progress SVG Bar:**
  * `STAGE 01 // TECHNICAL SCOPE & REFERENCE LOCK`
  * `STAGE 02 // GREYBOX BLOCKOUT & PROPORTIONS APPROVAL`
  * `STAGE 03 // PRECISION DETAILING, LOOKDEV & LIGHTING`
  * `STAGE 04 // QUALITY ASSURANCE & NATIVE FILE HANDOVER`

### SECTION 6: Technical Standards, Deliverable Formats & Industry Matrix (`#studio-standards`)
* **Surface:** Enters via a convex SVG curve onto `--atelier-stone` (`#E4E5E9`).
* **Content:** Left column highlights who we serve (`Individuals & Inventors`, `Hardware Startups`, `Product Designers`, `Manufacturers`, `Brands`, `Creative Agencies`); Right column features an interactive **Deliverable Format Compatibility Matrix** (`.STEP`, `.IGES`, `.STL`, `.3MF`, `.OBJ`, `.FBX`, `.BLEND`, `.C4D`, `.GLB`, `.USDZ`, `16/32-bit .EXR`, `ProRes 4444`) where hovering any format highlights its quality assurance checklist (e.g., `Manifold & Wall-Thickness Checked`, `Clean Subdivision Quads`, `Calibrated ACEScg Color Space`).
* **Floating 3D Calibration Tokens:** 4 floating cutout 3D tokens (`tokens-01.webp` to `tokens-04.webp`) drift with scroll parallax around the matrix.

### SECTION 7: Interactive 3D Request Configurator & Bookend Footer (`#request-brief`)
* **Surface:** Final convex SVG curve into `--obsidian-stage` (`#0A0B0E`).
* **Left 7 Columns — Interactive 4-Step Project Configurator:**
  1. **Select Discipline(s) (Multi-select pills):** All 8 core specializations.
  2. **Target Use-Case:** `Manufacturing / 3D Print`, `Marketing & E-Commerce Stills`, `Product Launch Motion`, `Real-Time / Web / AR`, `Custom / Advisory`.
  3. **Available Reference Material:** `CAD / 3D Files`, `2D Blueprints / Drawings`, `Sketches / Moodboard`, `Physical Product Photos`, `Concept Only`.
  4. **Project Details & File Dropzone:** Name, Work Email, Company, Timeline/Budget (Optional), Detailed Brief textarea, and interactive Drag-and-Drop Reference File Upload zone.
* **Right 5 Columns — Live Engineering Spec Sheet Receipt + Direct Contact:**
  * Dynamically updates in real time as the user toggles pills on the left, displaying a monospace blueprint summary (`SELECTED DISCIPLINES`, `ESTIMATED PIPELINE STAGES`, `TARGET DELIVERABLE FORMATS`) with a `SUBMIT 3D REQUEST ->` (`#D2FF28`) action button, a 1-click `COPY STUDIO EMAIL (REQUESTS@3DREQUESTS.COM)` button with toast confirmation, and a `BOOK A 15-MIN DISCOVERY CALL` trigger.
* **Terminal 3-Column Architectural Footer Bar:** Mirrors the Hero bottom bar for complete choreographic closure.

---

## 5. PERFORMANCE, ACCESSIBILITY & QUALITY ASSURANCE REQUIREMENTS
1. **60fps Scroll Choreography:** Consolidate all scroll calculations (`Hero Parallax`, `Curved Section SVG Envelopes`, `Manifesto Word Illumination`, `Pinned 8-Card Deck`, and `Pipeline Progress`) into a single throttled `requestAnimationFrame` scroll loop reading cached bounding metrics updated on `ResizeObserver`.
2. **GPU Compositing Discipline:** Animate only `transform: translate3d(...)`, `scale(...)`, `rotate(...)`, `opacity`, and `clip-path`. Never animate layout properties (`top`, `left`, `width`, `height`, `margin`).
3. **Accessibility (`WCAG 2.1 AA`):**
   * Honor `prefers-reduced-motion: reduce`: disable continuous idle bobbing, bypass the preloader delay, and allow instant readable opacity (`1.0`) on editorial text and keyboard-accessible carousel buttons on the 8-discipline deck.
   * Ensure all custom pills, shader toggles, loupe controls, and form configurator buttons have full keyboard navigation (`tabIndex`, `aria-pressed`, `aria-expanded`, `Escape` to close drawer/modals) and contrast ratios $\ge 4.5:1$.
4. **Self-Contained Asset Fallback System:** For every image/video slot in the Asset Manifest, render the `<img>` / `<video>` pointing to `/assets/<filename>`, and attach an `onError` handler (or clean architectural SVG/Canvas studio placeholder) that renders a sleek, high-precision wireframe/technical CAD graphic labeled with the exact slot name so the website looks extraordinary immediately upon first run and seamlessly swaps in my final 3D renders as I drop them into `/public/assets/`.
```

---

## Reference Sources & Verification Links
* **Primary Reference Website:** [Emblematica Agency Homepage](https://emblematica.agency/)
* **Reference Vertical Subpages:** [Emblematica Branding Division](https://emblematica.agency/branding) | [Emblematica Digital Division](https://emblematica.agency/digital)
* **Industry Recognition & Technical Mentions:** [Emblematica Awwwards Profile](https://www.awwwards.com/emblematica/) | [Awwwards Design Agencies Showcase](https://www.awwwards.com/websites/design-agencies/) | [Awwwards Figma Websites Collection](https://www.awwwards.com/websites/figma/?page=4) | [Mindsparkle Mag — MontRural by Emblematica Review](https://mindsparklemag.com/website/montrural) | [Muzli — Emblematica Showcase](https://me.muz.li/robinbobina/emblematica-concept-led-brand-web-design-agency-in-barcelona-2)

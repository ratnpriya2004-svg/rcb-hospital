---
name: Clinical Editorial Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d9e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#5d3f3d'
  inverse-surface: '#273143'
  inverse-on-surface: '#ecf0ff'
  outline: '#916f6c'
  outline-variant: '#e6bdb9'
  surface-tint: '#c0001e'
  primary: '#b0001a'
  on-primary: '#ffffff'
  primary-container: '#d91a2a'
  on-primary-container: '#ffefed'
  inverse-primary: '#ffb3ae'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#006429'
  on-tertiary: '#ffffff'
  tertiary-container: '#008036'
  on-tertiary-container: '#ceffcf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930014'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d9e3fb'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: '300'
    lineHeight: 5rem
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: 3.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '300'
    lineHeight: 3.5rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is conceived for a modern regional multi-speciality healthcare facility and diagnostic center. It bridges institutional clinical precision with the warmth, dignity, and accessibility required for patients and families navigating critical medical decisions.

The design movement balances **Minimalism** with an **Editorial Modern** architecture. It rejects the antiseptic, cookie-cutter clinical portal template in favor of an award-winning editorial aesthetic: authoritative typography, generous negative space, intentional asymmetric compositions, and surgical typographic discipline. 

The emotional response must convey absolute diagnostic accuracy, prompt emergency response, and deep human empathy. Primary crimson red—derived directly from hospital architectural identity and emergency triage signs—is never applied casually; it functions as a deliberate beacon for critical actions, emergency contacts, operational status indicators, and acute focal points.

## Colors

The palette is engineered around high functional contrast, hyper-clean medical whites, structural deep charcoals, and a clinical action red.

### Palette Architecture
- **Primary (`#D91A2A`)**: The signature hospital red. Reserved strictly for primary conversions (book appointment, call emergency, ambulance dispatch), life-critical alerts, and delicate focal accents. It commands attention without overwhelming cognitive load.
- **Secondary (`#111315` & `#181A1D`)**: Ink-black charcoal used for high-contrast headlines, deep architectural grounding, high-visibility badges, and premium footer blocks. Replaces pure `#000000` to prevent harsh visual fatigue.
- **Tertiary (`#16A34A`)**: Clinical reassurance green, pulled directly from physical pharmacy and medical cross signage. Used exclusively for verified status, diagnostic report readiness, and open OPD schedules.
- **Neutrals (`#FFFFFF`, `#FBFBFB`, `#F4F5F7`, `#E4E7EC`, `#667085`)**: 
  - Canvas: `#FBFBFB` off-white provides a soft, non-glare clinical backdrop.
  - Surface Pure: `#FFFFFF` for diagnostic cards, consultation forms, and overlays.
  - Subtle Borders: `#E4E7EC` provides microscopic edge definition without visual clutter.
  - Body Text: `#344054` for effortless prolonged reading of medical procedures and reports.
  - Secondary Metadata: `#667085` for timestamps, doctor registration IDs, and room specifications.

## Typography

The type system deploys **Plus Jakarta Sans** across all roles to achieve a clean, razor-sharp medical aesthetic that retains organic warmth through deliberate weight contrasts. 

- **Weight Counterpoint**: Hero titles leverage light weight (`300`) at scale paired with surgical bold accents (`700`), giving the hospital brand an authoritative, premium editorial atmosphere.
- **Numbers & Diagnostics**: Tabular lining figures are enabled (`font-feature-settings: 'tnum' on, 'cv05' on`) to ensure medical diagnostic values, laboratory test rates, and emergency telephone lines align across dense layouts.
- **Uppercase Labels**: Specialized tracking (`0.05em` to `0.06em`) is applied to diagnostic section tags (e.g., `ICU 24/7`, `PATHOLOGY LAB`, `ULTRASOUND`) to deliver military-level legibility even on low-end mobile devices in rural environments.

## Layout & Spacing

The structural layout uses an **asymmetric 12-column grid** anchored by crisp margins and calibrated column spans:

- **Desktop (1024px+)**: 12 columns with `1.5rem` gutters and generous `3rem` (expanding to `5rem` on ultra-wide) external safe margins. Sections deploy staggered 7/5 or 8/4 asymmetrical splits where clinical imagery contrasts with stark editorial typography.
- **Tablet (768px - 1023px)**: 8 columns, `1.25rem` gutters, `2rem` margins. Content reflows into structured bilateral grids.
- **Mobile (< 768px)**: 4 columns, `1rem` gutters, `1.25rem` margins. Emergency quick-actions dock fixed to the bottom viewport with safe-area spacing.

Component interiors follow an 8-point base rhythm, balancing dense information units (OPD timetables, pathology test panels) with open, breathable negative space around medical specialists and diagnostic infrastructure photography.

## Elevation & Depth

To sustain a hygienic, tactile, and modern clinic environment, this system eliminates exaggerated blur drop-shadows. Depth is articulated through **tonal layering** paired with **hairline structural borders**.

- **Level 0 (Base Surface)**: Ground background tint `#FBFBFB`.
- **Level 1 (Clinical Cards & Modules)**: Pure white `#FFFFFF` bounded by a 1px solid border in `#E4E7EC`. Zero drop shadow at rest; subtle `0 4px 16px -2px rgba(17, 19, 21, 0.05)` on hover to indicate interactive affordance.
- **Level 2 (Dropdowns, Diagnostic Popovers & Search)**: `#FFFFFF` lifted with a dual-stage ambient shadow: `0 8px 24px -4px rgba(17, 19, 21, 0.08), 0 2px 6px -1px rgba(17, 19, 21, 0.04)`.
- **Level 3 (Emergency Modals, Triage Overlays & Mobile Drawers)**: `#FFFFFF` framed by a faint dark perimeter ring `0 0 0 1px rgba(17, 19, 21, 0.08)` and deep elevation `0 20px 48px -12px rgba(17, 19, 21, 0.16)`.
- **Backdrop Veil**: Emergency dialogs and doctor appointment sheets invoke `backdrop-filter: blur(8px)` with a 40% opacity `#111315` wash.

## Shapes

The design system adopts a **Soft (`1`)** shape language.

- **Primary Geometry**: Standard interaction components (buttons, input fields, badges, test result containers) employ a `0.25rem` (4px) corner radius. This delivers an architectural, crisp, and disciplined institutional tone reminiscent of clinical equipment and precision diagnostic machinery.
- **Cards & Architectural Framing**: Diagnostic department cards, doctor profiles, and clinical photography containers utilize `rounded-lg` at `0.5rem` (8px). 
- **Floating Emergency Controls & Badges**: Small status pills (e.g., `EMERGENCY 24x7`, `OPEN NOW`) may utilize full circular radii (`9999px`) exclusively to communicate dynamic real-time status.

## Components

### Buttons
- **Primary Brand Action (Emergency / Immediate Booking)**: Solid `#D91A2A` background, `#FFFFFF` text, `4px` border radius, `0.75rem 1.5rem` padding. On hover: `#B81523`. Focused with a high-contrast offset ring.
- **Secondary Action (Doctor Profile / Department Overview)**: Crisp `#111315` solid background with `#FFFFFF` text, or high-contrast outlined style using `1.5px solid #111315`.
- **Tertiary / Sub-action**: Transparent background, text colored in `#111315`, paired with a forward directional arrow (`→`) that transitions `4px` horizontally on hover.

### Cards & Diagnostic Panels
- **Department & Doctor Cards**: Flat `#FFFFFF` foundation, `1px solid #E4E7EC` perimeter, `0.5rem` radius. Photography sits edge-to-edge on top or flush to the left, framed by a soft neutral tone mask. Hover states introduce a crisp border change to `#D91A2A` or subtle shadow elevation.
- **Facility Stat Modules**: Monochromatic tiles in `#F4F5F7` with bold, oversized numbers (e.g., `24/7`, `100+`) rendered in `#111315` with small, uppercase tracked labels.

### Input Fields & Selectors
- **Consultation & Appointment Forms**: Form fields feature a height of `48px`, background of `#FFFFFF`, border of `1px solid #D0D5DD`, and soft 4px corners. Focus state replaces the border with `#D91A2A` accompanied by an ultra-soft red focus ring (`box-shadow: 0 0 0 3px rgba(217, 26, 42, 0.12)`).

### Chips & Status Indicators
- **Operational Badges**: Compact padding (`0.25rem 0.625rem`), font-size `0.75rem`, bold weight. 
  - Green status (`OPD Available`): `#ECFDF5` background with `#027A48` text and a pulsing green dot.
  - Emergency indicator: `#FEF3F2` background with `#B42318` text and a bright `#D91A2A` dot.

### Lists & Test Menus
- **Pathology & Diagnostic Directory**: Tabular rows bounded by `1px solid #F2F4F7` horizontal rules. Left column displays procedure names in `font-medium`, right column details turnaround time and transparent fee structures, ending in a fast-track "Book Test" micro-action.
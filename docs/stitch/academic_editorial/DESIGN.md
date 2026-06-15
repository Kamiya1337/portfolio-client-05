---
name: Academic Editorial
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fceae9'
  surface-container-high: '#f6e4e4'
  surface-container-highest: '#f0dfde'
  on-surface: '#221919'
  on-surface-variant: '#534342'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#ffedec'
  outline: '#857371'
  outline-variant: '#d8c2bf'
  surface-tint: '#8b4d48'
  primary: '#8b4d48'
  on-primary: '#ffffff'
  primary-container: '#f7a8a1'
  on-primary-container: '#753b36'
  inverse-primary: '#ffb3ad'
  secondary: '#984446'
  on-secondary: '#ffffff'
  secondary-container: '#fe9696'
  on-secondary-container: '#782c2f'
  tertiary: '#a23b47'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffa3a9'
  on-tertiary-container: '#892836'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#380c0a'
  on-primary-fixed-variant: '#6f3632'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#3f0209'
  on-secondary-fixed-variant: '#7a2d30'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b6'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#832331'
  background: '#fff8f7'
  on-background: '#221919'
  surface-variant: '#f0dfde'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is built for academic excellence through an elegant, editorial lens. The brand personality is sophisticated and warm, moving away from cold institutional aesthetics toward a premium, feminine, and approachable academic identity. 

The design style is **Minimalist Editorial**. It leverages expansive whitespace, high-contrast serif typography, and a "warm-light" color theory. The UI evokes the feeling of a high-end academic journal or a curated gallery portfolio. Layouts are structured but breathe easily, using soft peach tones to create a welcoming environment for deep reading and intellectual engagement.

## Colors

The palette is rooted in "Warm Porcelain." The background strategy uses three distinct layers of off-white to create subtle depth without relying on heavy lines. 

- **Primary & Secondary:** Used for interactive elements and brand markers.
- **Warm Rose:** Reserved for critical actions or high-emphasis academic labels.
- **Sidebar:** A deep, warm brown (#2A1C1C) provides a structural anchor, contrasting sharply with the airy content area to establish a clear information hierarchy.
- **Accents:** Soft Blush is used for hover states and subtle highlights behind text.

## Typography

The system utilizes a classic pairing of a high-contrast serif and a functional humanist sans-serif. 

- **Playfair Display** handles all editorial headings, providing an authoritative yet elegant academic voice.
- **Source Sans 3** is used for body copy to ensure maximum legibility during long-form reading of research or CV details.
- **Case Styling:** Section headers and metadata tags should use the `label-caps` style to create a rhythmic break in the editorial flow.

## Layout & Spacing

This design system follows a **Fixed Grid** editorial model. On desktop, content is centered within a 1280px container with generous 64px outer margins to maintain the premium "magazine" feel.

- **Grid:** A 12-column system is used for portfolios. Research papers or long-form text should be constrained to an 8-column central span for optimal line length.
- **Rhythm:** Vertical spacing is intentional. Use `section-gap` between major portfolio items to allow the work to stand alone.
- **Mobile:** Transition to a single-column fluid layout with 16px horizontal margins.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional shadows. 

- **Surfaces:** Use `#FFFFFF` (Card) on top of `#FFF8F5` (Background) to create a natural "lift."
- **Shadows:** When necessary for interactivity (e.g., hover states on cards), use a very soft, diffused peach-tinted shadow: `0px 12px 32px rgba(247, 168, 161, 0.12)`.
- **Outlines:** Cards and containers use a subtle `1px` border in `#F4C8C0`. This defines the boundaries clearly against the warm backgrounds without the harshness of grey.

## Shapes

The shape language is "Soft Geometry." 

- **Standard Elements:** Use `0.5rem` (rounded-md/lg) for cards, buttons, and input fields.
- **Profile Frames:** Large images (headshots) should use a `1.5rem` (rounded-xl) corner radius or a soft-squircle to maintain the elegant feel.
- **Separators:** Horizontal rules should be thin (1px) and use the `border-subtle` color.

## Components

### Buttons
Primary buttons are styled in **Coral Pink** (#F28C8C) with white text. They should have a subtle hover transition to **Warm Rose** (#E76F7A). Use `label-caps` for button text to maintain the editorial look.

### Cards
Portfolio and publication cards use the `#FFFFFF` background with a `1px` border in `#F4C8C0`. On hover, apply the peach-tinted ambient shadow.

### Tables (Academic Data)
Header rows should use a `Soft Blush` (#FFE7E2) background with `label-caps` text. Cell borders are horizontal only, using the `border_subtle` color to keep the table feeling light and airy.

### Input Fields
Inputs are white with a 1px border. On focus, the border transitions to `Primary Peach` (#F7A8A1) with a soft glow in the same hue.

### Professional Profile Blocks
These are the centerpiece of the portfolio. They should feature a large profile image with a `rounded-xl` frame, paired with `display-lg` typography for the name and `body-lg` for the bio.

### Chips/Labels
Used for research interests or tags. Use a `Soft Blush` background with `Warm Rose` text. Keep corners slightly more rounded (pill-style) than main cards.
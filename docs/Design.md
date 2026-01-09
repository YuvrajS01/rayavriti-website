

---

# Rayavriti Design System

## 1. Brand Overview

Rayavriti’s design language is **dark, bold, technical, and future-ready**.
The visual system reflects **speed, structure, security, and growth**, avoiding softness or playfulness.

**Core personality traits**

* Confident
* High-contrast
* Minimal
* Engineering-first
* Scalable and professional

This design system must feel suitable for:

* Enterprise IT dashboards
* Cybersecurity platforms
* Training portals
* High-impact landing pages
* Internal tools and admin panels

---

## 2. Color System

### 2.1 Primary Brand Colors

| Role      | Color     | Usage                                           |
| --------- | --------- | ----------------------------------------------- |
| Primary   | `#d9fd3a` | CTAs, highlights, active states, brand emphasis |
| Secondary | `#11110B` | Main background, foundation color               |

**Design rule:**
Electric green must always sit on dark backgrounds for maximum contrast.

---

### 2.2 Background Colors

| Token    | Color     | Usage             |
| -------- | --------- | ----------------- |
| Default  | `#11110B` | App background    |
| Surface  | `#161612` | Cards, panels     |
| Elevated | `#1C1C16` | Modals, dropdowns |

Backgrounds should feel **layered but subtle**. Avoid visible gradients.

---

### 2.3 Text Colors

| Role      | Color     | Notes                  |
| --------- | --------- | ---------------------- |
| Primary   | `#d9fd3a` | Headings, key text     |
| Secondary | `#A6B300` | Subheadings            |
| Muted     | `#6F6F5A` | Helper text, labels    |
| Inverse   | `#11110B` | Text on green surfaces |

Text must always maintain **AA+ contrast**.

---

## 3. Typography

### 3.1 Font Families

| Usage      | Font           |
| ---------- | -------------- |
| Headings   | League Spartan |
| Body / UI  | Space Grotesk  |
| Code / IDs | JetBrains Mono |

**Why**

* League Spartan → strength, authority
* Space Grotesk → modern clarity
* Mono → technical precision

---

### 3.2 Type Scale

| Element | Size | Weight |
| ------- | ---- | ------ |
| H1      | 64px | 700    |
| H2      | 48px | 700    |
| H3      | 36px | 600    |
| H4      | 28px | 600    |
| H5      | 22px | 600    |
| Body    | 16px | 400    |
| Small   | 14px | 400    |

**Rules**

* Headings are **uppercase**
* Body text remains sentence case
* Avoid italics unless absolutely required

---

## 4. Spacing System

Base unit: **8px**

| Token | Value |
| ----- | ----- |
| xs    | 4px   |
| sm    | 8px   |
| md    | 16px  |
| lg    | 24px  |
| xl    | 32px  |
| 2xl   | 48px  |
| 3xl   | 64px  |

Spacing should feel **structured and intentional**.
Never eyeball spacing — always use tokens.

---

## 5. Layout & Grid

* Max width: **1200px**
* Grid: **12 columns**
* Gutter: **24px**

**Guidelines**

* Content should breathe horizontally
* Avoid dense vertical stacking
* Prefer sections over walls of content

---

## 6. Borders & Radius

| Token  | Radius |
| ------ | ------ |
| None   | 0px    |
| Small  | 4px    |
| Medium | 8px    |
| Large  | 12px   |
| XL     | 20px   |
| Pill   | 999px  |

**Rule**

* Default UI uses **8px**
* Pills only for badges or tags
* No playful rounding

---

## 7. Shadows & Elevation

| Type | Usage               |
| ---- | ------------------- |
| Soft | Cards, hover states |
| Hard | Modals, overlays    |
| Glow | Active focus, CTAs  |

Glow is **brand-signature** but must be subtle and controlled.

---

## 8. Components

### 8.1 Buttons

**Primary Button**

* Background: Electric Green
* Text: Deep Black
* Hover: Slight darkening + glow

**Secondary Button**

* Transparent background
* Green border + text
* Hover uses green tint overlay

Buttons must feel **decisive**, not soft.

---

### 8.2 Cards

* Dark surface background
* Thin border
* Hover activates green border and soft shadow

Cards should feel **modular and scalable**.

---

### 8.3 Inputs

* Dark background
* Subtle border
* Green glow on focus

Focus states are mandatory for accessibility.

---

## 9. Motion & Interaction

### Durations

* Fast: 120ms
* Normal: 220ms
* Slow: 400ms

### Easing

* Standard: `cubic-bezier(0.4, 0, 0.2, 1)`
* Emphasized: `cubic-bezier(0.2, 0, 0, 1)`

Animations should feel **mechanical and precise**, never bouncy.

---

## 10. Iconography

* Geometric
* Sharp corners
* Solid fills
* Consistent stroke weight

Icons must align with the **logo’s angular geometry**.

---

## 11. Accessibility

* Maintain color contrast
* Visible focus states
* Keyboard navigation supported
* Text never relies on color alone

Accessibility is **non-negotiable**.

---

## 12. What NOT to Do

❌ No gradients
❌ No pastel colors
❌ No playful fonts
❌ No excessive blur
❌ No low-contrast UI
❌ No skeuomorphic effects

---

## 13. Design Philosophy (Summary)

Rayavriti’s UI should feel like:

> **A control panel for the future — fast, sharp, and dependable.**

Every screen should communicate:

* Confidence
* Technical excellence
* Long-term reliability



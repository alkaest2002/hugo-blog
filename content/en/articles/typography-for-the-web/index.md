---
draft: false
title: "Typography for the Web"
description: "Good typography is mostly invisible. Bad typography is impossible to ignore. Here are the principles that keep type working in your favor."
date: 2024-06-25
categories: ["Technology"]
authors: ["Priya Raghunathan"]
tags: ["typography", "web design", "fonts", "readability", "UI"]
---

## Why Typography Is the Foundation

Before color, before layout, before imagery — a web page is text. Most of what the web communicates travels through type. Getting typography right doesn't mean picking a beautiful font; it means making reading effortless. When it works, readers don't notice. When it fails, they leave.

## The Core Variables

### Line Length
Optimal line length for body text is 60–75 characters, including spaces. Too wide and the eye struggles to track back to the next line. Too narrow and the constant jumping creates visual noise. In CSS, `max-width: 65ch` on your content container is a reasonable starting point.

### Line Height
Body text generally needs a `line-height` of 1.4–1.7. The exact value depends on the typeface — condensed faces need more leading; naturally open faces like Georgia can work at the lower end. Headings, being set larger and shorter, can compress to 1.1–1.2.

### Font Size
16px is the browser default for a reason — it's close to the minimum comfortable reading size for most people. Go larger (18–20px) for long-form content or reader-focused designs.

## Choosing Typefaces

A few honest principles:

- **Use fewer typefaces.** One for body and one for display is a complete system. Three or more requires expertise to pull off.
- **System font stacks are underrated.** `font-family: system-ui` serves the user's native UI font — crisp, fast, and already on their device.
- **Variable fonts** allow a single font file to serve every weight and width, reducing load time without sacrificing flexibility.

## The Hierarchy Problem

Visual hierarchy in type comes from size, weight, and spacing — not color alone. A common mistake is setting headings only a little larger than body text, forcing readers to work harder to scan the page structure.

Establish clear jumps: if body is 18px, H2 might be 28px and H1 might be 40px. The difference should feel obvious, not subtle.

---
title: "Dark Mode Design Principles"
date: 2024-06-08
draft: false
categories: ["Technology"]
tags: ["dark mode", "UI design", "accessibility", "color", "typography"]
description: "Dark mode is more than inverting your color palette. Done well, it requires rethinking contrast, hierarchy, and the psychology of light."
---

## Dark Mode Is Not an Inversion

The most common mistake is treating dark mode as a simple color flip: white becomes black, black becomes white. The result looks like a photo negative — jarring, flat, and hard to read for sustained periods. True dark mode design requires building a parallel visual system.

The key insight is that light and shadow work differently against dark backgrounds. On a white canvas, elements gain depth by darkening (shadows, borders, lower luminance). On a dark canvas, elements gain depth by *lightening* — slightly elevated surfaces appear closer to the viewer.

## Principles to Build From

### 1. Use Dark Gray, Not Pure Black

Pure `#000000` backgrounds create an uncomfortable contrast spike with almost any foreground text. Material Design's dark theme uses `#121212`; most well-regarded dark interfaces land somewhere between `#0d0d0d` and `#1e1e1e`. The softness reduces eye strain and makes surface elevation visible.

### 2. Desaturate Your Colors

Fully saturated colors that look great on white — a vivid `#2563EB` blue, for instance — vibrate uncomfortably against dark backgrounds. In dark mode, shift your brand and accent colors to slightly lower saturation and higher lightness.

### 3. Treat Shadows Differently

Shadows are invisible on dark backgrounds. Use elevation through subtle surface lightening instead: a card at elevation 1 might be `#1e1e1e`, at elevation 2 it's `#232323`, and so on.

### 4. Respect the User's Preference

Use `prefers-color-scheme` in CSS rather than a toggle-only approach. Users who set their OS to dark mode expect apps to follow suit without manual intervention.

## A Note on Accessibility

Dark mode is not automatically accessible. A low-contrast dark theme can be worse than a properly implemented light one. Always verify WCAG 2.1 contrast ratios — aim for at least 4.5:1 for body text — in both modes.

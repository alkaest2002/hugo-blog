---
title: "Understanding CSS Grid"
date: 2024-03-05
draft: false
categories: ["Technology"]
tags: ["css", "web development", "layout", "frontend", "design"]
description: "CSS Grid is the most powerful layout system the web has ever had. This post breaks down the core concepts so you can actually use it with confidence."
---

## The Layout Problem Grid Solves

Before Grid, web layouts were a series of creative hacks. We floated elements meant for text, abused tables for structure, and eventually leaned heavily on Flexbox — which, while excellent, is fundamentally one-dimensional. CSS Grid is the first native two-dimensional layout system built into the browser, and it changes what's possible.

## Core Concepts

### Defining a Grid

Everything starts with the container:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}
```

`1fr` is the key unit — it represents a *fraction* of available space, letting the browser handle the math. The `gap` property adds gutters between cells without you needing to fuss with margins.

### Placing Items

By default, grid items flow in automatically. But you can take explicit control:

```css
.featured {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

This places `.featured` across the first two columns of the first row. Named grid areas make complex layouts even more readable.

## When to Use Grid vs. Flexbox

A useful rule of thumb:

- **Grid** — When you know the layout structure up front (page-level scaffolding, card grids, magazine layouts).
- **Flexbox** — When you want items to determine their own sizing and spacing (nav bars, button groups, dynamic content rows).

They're not mutually exclusive. Using Grid for the page shell and Flexbox inside components is a perfectly sound pattern.

## Browser Support

Grid has been baseline-supported across all major browsers since 2017. The only edge cases are a handful of subgrid behaviors, which are now landing in Chromium and Firefox. You can use Grid confidently in production today.

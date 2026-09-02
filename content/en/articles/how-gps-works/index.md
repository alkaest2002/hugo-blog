---
draft: false
title: "How GPS Works"
description: "Your phone knows where you are to within a few meters, anywhere on Earth. The mechanism behind that feat involves satellites, atomic clocks, and a counterintuitive trick from general relativity."
date: 2024-05-07
categories: ["Technology"]
authors: ["Marcus Feldt"]
tags: ["GPS", "navigation", "satellites", "physics", "technology"]
---

## Thirty Satellites, One Location

The Global Positioning System consists of at least 24 operational satellites in medium Earth orbit, distributed so that at least four are above the horizon from anywhere on the planet at any given time. Each satellite continuously broadcasts a signal that includes two things: its precise location in orbit, and the exact time the signal was sent.

Your GPS receiver listens to these signals and measures how long each one took to arrive. Since radio waves travel at the speed of light (about 299,792 km/s), travel time × speed gives you distance. With distances from four or more satellites, the receiver can solve for three spatial coordinates plus its own clock error. This is called *trilateration*.

## Why Four Satellites?

Three distances define a unique point in three-dimensional space — in theory. But the clock in your phone isn't accurate enough. Even a microsecond of error translates to 300 meters of positional error. The fourth satellite lets the receiver solve for its own timing offset, effectively borrowing the satellites' atomic clock precision without actually having one.

## The Relativity Correction

Here's where it gets strange. The satellites' atomic clocks run in a different gravitational field and at a different velocity than clocks on the ground. Two effects pull in opposite directions:

- **Special relativity** — Clocks moving faster tick *slower*. The satellites' clocks lose about 7 microseconds per day.
- **General relativity** — Clocks in weaker gravity tick *faster*. The satellites' clocks gain about 45 microseconds per day.

The net effect is a gain of roughly 38 microseconds per day. Left uncorrected, this would accumulate to about 10 kilometers of positional error daily. GPS satellites are pre-programmed to tick slightly slower to compensate.

Einstein's field equations are baked into your maps app.

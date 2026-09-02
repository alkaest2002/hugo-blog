---
draft: false
title: "Writing Better Commit Messages"
description: "A great commit message is a gift to your future self and your teammates. Here's how to write ones that actually communicate."
date: 2025-02-03
categories: ["Technology"]
authors: ["Priya Raghunathan"]
tags: ["git", "version control", "developer workflow", "best practices", "collaboration"]
---

## The Cost of Bad Commit Messages

Open any long-running codebase and run `git log`. What do you see? "fix bug," "wip," "asdf," "update," "final," "final2." These messages tell you nothing about *why* a change was made, *what problem* it solved, or *what context* you'd need to understand it six months later.

When you're debugging a regression at midnight, a commit message that reads "fix null pointer in user session lookup after token expiry" is worth considerably more than "bug fix."

## The Anatomy of a Good Commit

The most widely cited standard is the one described by Tim Pope and adopted by projects like Git itself:

```
Short summary (50 characters or fewer)

Longer explanatory text if necessary. Wrap at 72 characters.
Explain the *why*, not just the *what*. The diff shows what
changed; the commit message should explain why it needed to change.

- Bullet points are fine for lists of related changes
- Use the imperative mood: "Fix bug" not "Fixed bug" or "Fixes bug"
```

The 50-character subject line isn't arbitrary — it's the width shown in `git log --oneline`, GitHub's commit list, and most Git UIs.

## Imperative Mood, and Why It Matters

Git itself uses imperative mood in its own generated messages: "Merge branch 'feature'", "Revert 'Add broken thing'". Writing your messages the same way keeps the log consistent and makes the message read as an instruction: *if applied, this commit will...*

"Add rate limiting to the auth endpoint" — good.
"Added rate limiting to the auth endpoint" — less conventional.
"Adds rate limiting to the auth endpoint" — also avoid.

## When to Break It Up

One commit per logical change. If you find yourself writing "and" in a commit subject — "Fix login bug and update styles" — that's usually two commits. Atomic commits make `git bisect`, code review, and cherry-picking across branches dramatically more tractable.

The discipline of writing clear commit messages also forces you to think clearly about what a change actually does. That's never a bad thing.

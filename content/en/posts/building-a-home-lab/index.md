---
title: "Building a Home Lab"
date: 2024-12-01
draft: false
categories: ["Technology"]
tags: ["homelab", "self-hosting", "networking", "linux", "infrastructure"]
description: "A home lab is part playground, part learning environment. Here's how I set mine up and what I actually run on it."
---

## Why Bother?

Running your own infrastructure at home sounds like a lot of work — because it is, sometimes. But the payoff is substantial: you learn by doing things that managed services hide from you, you control your own data, and you get a sandbox that nobody will fire you for breaking.

My motivation was simple: I wanted to understand Kubernetes properly, and running it in a real (if small) cluster taught me more in two weeks than months of documentation reading.

## My Current Setup

**Hardware:**
- 3× Intel NUC 12 (Core i5, 32GB RAM each) running as Kubernetes nodes
- 1× older Synology NAS for persistent storage and backups
- A small Ubiquiti router and managed switch for proper network segmentation

**Software stack:**
- **Proxmox** — Hypervisor on each node, so I can run VMs alongside containers
- **k3s** — Lightweight Kubernetes distribution, much easier to operate than full k8s
- **Longhorn** — Distributed block storage for the cluster
- **Traefik** — Ingress controller and reverse proxy with automatic TLS via Let's Encrypt
- **Authentik** — Single sign-on for all internal services

## What I Self-Host

- **Gitea** — Private git server for personal projects
- **Vaultwarden** — Self-hosted Bitwarden-compatible password manager
- **Immich** — Photo library and backup, replacing Google Photos
- **Paperless-ngx** — Document management, OCR included
- **Uptime Kuma** — Status monitoring for everything above

## Lessons Learned

Don't put anything you depend on into the lab without a backup strategy first. I learned this the expensive way when I accidentally wiped my NAS volume. Also: a UPS is not optional if you live somewhere with unreliable power.

The money spent on the hardware paid for itself quickly in reduced cloud subscriptions. The knowledge gained was the real return.

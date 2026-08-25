---
title: "Costruire un Home Lab"
date: 2024-12-01
draft: false
categories: ["Tecnologia"]
tags: ["homelab", "self-hosting", "networking", "linux", "infrastructure"]
description: "Un home lab è in parte un campo giochi, in parte un ambiente di apprendimento. Ecco come ho configurato il mio e cosa ci faccio girare davvero."
---

## Perché Farselo?

Gestire la propria infrastruttura a casa sembra un sacco di lavoro — perché a volte lo è davvero. Ma il guadagno è sostanziale: impari facendo cose che i servizi gestiti ti nascondono, controlli i tuoi dati e hai un sandbox che nessuno ti licenzierà per aver rotto.

La mia motivazione era semplice: volevo capire Kubernetes sul serio, e farlo girare su un cluster reale (anche se piccolo) mi ha insegnato più in due settimane che mesi di lettura della documentazione.

## La Mia Configurazione Attuale

**Hardware:**
- 3× Intel NUC 12 (Core i5, 32 GB di RAM ciascuno) come nodi Kubernetes
- 1× NAS Synology più vecchio per lo storage persistente e i backup
- Un piccolo router Ubiquiti e uno switch gestito per una corretta segmentazione della rete

**Stack software:**
- **Proxmox** — Hypervisor su ogni nodo, così posso far girare VM insieme ai container
- **k3s** — Distribuzione Kubernetes leggera, molto più semplice da gestire rispetto al k8s completo
- **Longhorn** — Storage a blocchi distribuito per il cluster
- **Traefik** — Ingress controller e reverse proxy con TLS automatico tramite Let's Encrypt
- **Authentik** — Single sign-on per tutti i servizi interni

## Cosa Ospito in Autonomia

- **Gitea** — Server git privato per i progetti personali
- **Vaultwarden** — Gestore di password compatibile con Bitwarden, self-hosted
- **Immich** — Libreria fotografica e backup, in sostituzione di Google Foto
- **Paperless-ngx** — Gestione documenti con OCR integrato
- **Uptime Kuma** — Monitoraggio dello stato di tutto quanto sopra

## Lezioni Imparate

Non mettere in laboratorio nulla di cui hai bisogno senza prima avere una strategia di backup. L'ho imparato a caro prezzo quando ho cancellato accidentalmente il volume del mio NAS. Inoltre: un UPS non è facoltativo se vivi in un posto con l'alimentazione instabile.

Il denaro speso per l'hardware si è ripagato rapidamente grazie alla riduzione degli abbonamenti cloud. Le conoscenze acquisite sono stati il vero guadagno.

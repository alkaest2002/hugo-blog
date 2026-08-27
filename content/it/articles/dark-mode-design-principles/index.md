---
title: "Principi di Design in Dark Mode"
date: 2024-06-08
draft: false
categories: ["Tecnologia"]
authors: ["Priya Raghunathan"]
tags: ["dark mode", "UI design", "accessibilità", "colore", "tipografia"]
description: "La dark mode è molto più che invertire la palette di colori. Fatta bene, richiede di ripensare il contrasto, la gerarchia visiva e la psicologia della luce."
---

## La Dark Mode Non È un'Inversione

L'errore più comune è trattare la dark mode come un semplice ribaltamento dei colori: il bianco diventa nero, il nero diventa bianco. Il risultato assomiglia al negativo di una fotografia — straniante, piatto e difficile da leggere per periodi prolungati. Un vero design in dark mode richiede la costruzione di un sistema visivo parallelo.

Il punto chiave è che luce e ombra funzionano diversamente su sfondi scuri. Su una tela bianca, gli elementi acquistano profondità scurendosi (ombre, bordi, luminanza ridotta). Su una tela scura, gli elementi acquistano profondità *schiarendosi* — le superfici leggermente più elevate appaiono più vicine all'osservatore.

## Principi su cui Costruire

### 1. Usa il Grigio Scuro, Non il Nero Puro

Gli sfondi `#000000` puro creano un contrasto eccessivo e scomodo con quasi qualsiasi testo in primo piano. Il tema scuro di Material Design usa `#121212`; la maggior parte delle interfacce dark ben riuscite si collocano tra `#0d0d0d` e `#1e1e1e`. La morbidezza riduce l'affaticamento visivo e rende visibile l'elevazione delle superfici.

### 2. Desatura i Tuoi Colori

I colori completamente saturi che risultano ottimi su bianco — come un vivace blu `#2563EB` — vibrano in modo sgradevole su sfondi scuri. In dark mode, sposta i colori del tuo brand e i colori di accento verso una saturazione leggermente inferiore e una luminosità maggiore.

### 3. Tratta le Ombre in Modo Diverso

Le ombre sono invisibili su sfondi scuri. Usa l'elevazione attraverso una leggera schiarita delle superfici: una card all'elevazione 1 potrebbe essere `#1e1e1e`, all'elevazione 2 diventa `#232323`, e così via.

### 4. Rispetta la Preferenza dell'Utente

Usa `prefers-color-scheme` nei CSS invece di un approccio basato solo su un pulsante di toggle. Gli utenti che hanno impostato il loro sistema operativo in dark mode si aspettano che le app seguano questa preferenza senza intervento manuale.

## Una Nota sull'Accessibilità

La dark mode non è automaticamente accessibile. Un tema scuro a basso contrasto può essere peggio di un tema chiaro correttamente implementato. Verifica sempre i rapporti di contrasto WCAG 2.1 — punta ad almeno 4.5:1 per il testo del corpo — in entrambe le modalità.

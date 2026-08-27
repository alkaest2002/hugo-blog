---
title: "Tipografia per il Web"
date: 2024-06-25
draft: false
categories: ["Tecnologia"]
authors: ["Priya Raghunathan"]
tags: ["tipografia", "web design", "font", "leggibilità", "UI"]
description: "La buona tipografia è quasi invisibile. Quella cattiva è impossibile da ignorare. Ecco i principi che mantengono i caratteri dalla tua parte."
---

## Perché la Tipografia è la Base di Tutto

Prima del colore, prima del layout, prima delle immagini — una pagina web è testo. La maggior parte di ciò che il web comunica passa attraverso i caratteri. Fare bene la tipografia non significa scegliere un font bello; significa rendere la lettura senza sforzo. Quando funziona, chi legge non se ne accorge. Quando fallisce, abbandona la pagina.

## Le Variabili Fondamentali

### Lunghezza della Riga
La lunghezza ottimale per il corpo del testo è di 60–75 caratteri, spazi inclusi. Troppo larga e l'occhio fatica a tornare all'inizio della riga successiva. Troppo stretta e il salto continuo genera rumore visivo. In CSS, `max-width: 65ch` sul contenitore del contenuto è un buon punto di partenza.

### Altezza di Riga
Il testo corpo ha generalmente bisogno di un `line-height` di 1.4–1.7. Il valore esatto dipende dal carattere tipografico — i font condensati richiedono più interlinea; quelli naturalmente aperti come Georgia possono funzionare sul limite inferiore. I titoli, essendo impostati a dimensioni maggiori e su meno righe, possono scendere a 1.1–1.2.

### Dimensione del Font
16px è il valore predefinito del browser per una ragione — è vicino alla dimensione minima di lettura confortevole per la maggior parte delle persone. Aumenta (18–20px) per contenuti di lunga lettura o design orientati al testo.

## Scegliere i Caratteri

Alcuni principi onesti:

- **Usa meno caratteri tipografici.** Uno per il corpo e uno per i titoli è un sistema completo. Tre o più richiedono esperienza per essere gestiti bene.
- **I font di sistema sono sottovalutati.** `font-family: system-ui` serve il font nativo dell'interfaccia dell'utente — nitido, veloce e già presente sul suo dispositivo.
- **I variable font** consentono a un singolo file di coprire tutti i pesi e le larghezze, riducendo i tempi di caricamento senza sacrificare la flessibilità.

## Il Problema della Gerarchia

La gerarchia visiva nel testo si ottiene con dimensione, peso e spaziatura — non solo con il colore. Un errore comune è impostare i titoli solo di poco più grandi del corpo del testo, costringendo i lettori a fare più fatica per leggere la struttura della pagina.

Stabilisci salti netti: se il corpo è a 18px, H2 potrebbe essere a 28px e H1 a 40px. La differenza deve essere evidente, non sottile.

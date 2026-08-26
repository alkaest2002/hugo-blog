---
title: "Vim Motions per Tutti"
date: 2024-08-19
draft: false
categories: ["Tecnologia"]
tags: ["vim", "neovim", "editor", "produttività", "strumenti"]
description: "Non devi usare Vim a tempo pieno per trarre vantaggio dalle sue motion. Ecco un'introduzione pratica ai movimenti che cambieranno il modo in cui modifichi il testo."
---

## Il Modello di Editing Modale

L'idea centrale di Vim è l'editing modale: la tastiera fa cose diverse a seconda della modalità in cui ti trovi. In *modalità Normal*, i tasti sono comandi. In *modalità Insert*, i tasti digitano testo. In *modalità Visual*, i tasti selezionano il testo. All'inizio sembra strano, per qualche giorno, poi diventa difficile rinunciarci.

Il vantaggio è che le mani raramente devono abbandonare la home row. Niente mouse. Niente frecce direzionali. Niente acrobazie con `Ctrl+Shift` per selezionare una parola. La modifica del testo diventa un linguaggio componibile.

## Le Motion Che Contano di Più

Puoi imparare Vim in modo incrementale. Queste motion da sole cambieranno il modo in cui ti muovi in un file:

- `h j k l` — Sinistra, giù, su, destra. Strano all'inizio; naturale in fretta.
- `w` / `b` — Avanza / torna indietro di una parola.
- `e` — Vai alla fine della parola corrente.
- `0` / `$` — Salta all'inizio / alla fine della riga.
- `gg` / `G` — Salta in cima / in fondo al file.
- `{` / `}` — Vai al paragrafo precedente / successivo.
- `f<char>` — Salta alla prossima occorrenza di `<char>` sulla riga corrente.

## La Potenza della Composizione

Ciò che rende le motion potenti è come si combinano con gli operatori. `d` elimina, `c` cambia, `y` copia (yank). Quindi:

- `dw` — Elimina una parola.
- `ci"` — Cambia tutto ciò che si trova all'interno delle virgolette doppie più vicine.
- `y$` — Copia dal cursore fino alla fine della riga.

Non sono scorciatoie arbitrarie — sono una grammatica. Imparare la grammatica ti permette di formare nuove frasi senza memorizzare singoli comandi.

## Non Devi Cambiare Editor

La maggior parte degli editor più diffusi ha un'ottima emulazione di Vim: VSCode ha `vscodevim`, i JetBrains IDE hanno `IdeaVim` e Zed ha la modalità Vim integrata. Ottieni il modello delle motion senza abbandonare il tuo ambiente attuale.

Inizia con la navigazione in modalità normal. Aggiungi qualche operatore. Nel giro di una settimana ti sorprenderai a voler usare `ci"` in contesti che non hanno nulla a che fare con Vim.

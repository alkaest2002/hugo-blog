---
title: "Capire CSS Grid"
date: 2024-03-05
draft: false
categories: ["Tecnologia"]
tags: ["css", "sviluppo web", "layout", "frontend", "design"]
description: "CSS Grid è il sistema di layout più potente che il web abbia mai avuto. Questo articolo analizza i concetti fondamentali per usarlo con sicurezza."
---

## Il Problema di Layout che Grid Risolve

Prima di Grid, i layout web erano una serie di hack creativi. Si facevano galleggiare elementi pensati per il testo, si abusava delle tabelle per la struttura e alla fine ci si affidava pesantemente a Flexbox — che, pur essendo eccellente, è fondamentalmente monodimensionale. CSS Grid è il primo sistema di layout nativo bidimensionale integrato nel browser, e cambia ciò che è possibile realizzare.

## Concetti Fondamentali

### Definire una Griglia

Tutto parte dal contenitore:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}
```

`1fr` è l'unità chiave — rappresenta una *frazione* dello spazio disponibile, lasciando al browser il compito di fare i calcoli. La proprietà `gap` aggiunge i margini tra le celle senza dover lavorare manualmente con i margin.

### Posizionare gli Elementi

Per impostazione predefinita, gli elementi della griglia si dispongono automaticamente. Ma puoi prenderne il controllo esplicito:

```css
.featured {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

Questo posiziona `.featured` sulle prime due colonne della prima riga. Le aree della griglia con nome rendono i layout complessi ancora più leggibili.

## Quando Usare Grid vs. Flexbox

Una regola pratica utile:

- **Grid** — Quando conosci in anticipo la struttura del layout (impalcatura a livello di pagina, griglie di card, layout stile magazine).
- **Flexbox** — Quando vuoi che gli elementi determinino da soli le proprie dimensioni e spaziatura (barre di navigazione, gruppi di pulsanti, righe di contenuto dinamico).

Non si escludono a vicenda. Usare Grid per la struttura della pagina e Flexbox all'interno dei componenti è un pattern del tutto corretto.

## Supporto dei Browser

Grid è supportato in modo stabile da tutti i principali browser dal 2017. Gli unici casi limite riguardano alcuni comportamenti di subgrid, che stanno ora arrivando in Chromium e Firefox. Puoi usare Grid con fiducia in produzione già oggi.

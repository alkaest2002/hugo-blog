---
title: "Come Funziona il GPS"
date: 2024-05-07
draft: false
categories: ["Tecnologia"]
tags: ["GPS", "navigazione", "satelliti", "fisica", "tecnologia"]
description: "Il tuo telefono sa dove ti trovi con una precisione di pochi metri, ovunque sulla Terra. Il meccanismo alla base di questa impresa coinvolge satelliti, orologi atomici e un trucco controintuitivo tratto dalla relatività generale."
---

## Trenta Satelliti, Una Posizione

Il Sistema di Posizionamento Globale è composto da almeno 24 satelliti operativi in orbita terrestre media, distribuiti in modo che almeno quattro siano sopra l'orizzonte da qualsiasi punto del pianeta in qualsiasi momento. Ogni satellite trasmette continuamente un segnale che include due informazioni: la sua posizione precisa in orbita e l'ora esatta in cui il segnale è stato inviato.

Il tuo ricevitore GPS ascolta questi segnali e misura quanto tempo ha impiegato ciascuno ad arrivare. Poiché le onde radio viaggiano alla velocità della luce (circa 299.792 km/s), tempo di percorrenza × velocità fornisce la distanza. Con le distanze da quattro o più satelliti, il ricevitore può calcolare tre coordinate spaziali più il proprio errore di orologio. Questo si chiama *trilaterazione*.

## Perché Quattro Satelliti?

Tre distanze definiscono un punto univoco nello spazio tridimensionale — in teoria. Ma l'orologio del tuo telefono non è sufficientemente preciso. Anche un microsecondo di errore si traduce in 300 metri di errore di posizione. Il quarto satellite permette al ricevitore di calcolare il proprio sfasamento temporale, mutuando di fatto la precisione degli orologi atomici dei satelliti senza averne uno.

## La Correzione della Relatività

Qui la faccenda si fa strana. Gli orologi atomici dei satelliti operano in un campo gravitazionale diverso e a una velocità diversa rispetto agli orologi a terra. Due effetti agiscono in direzioni opposte:

- **Relatività speciale** — Gli orologi in movimento più veloce ticchettano *più lentamente*. Gli orologi dei satelliti perdono circa 7 microsecondi al giorno.
- **Relatività generale** — Gli orologi in un campo gravitazionale più debole ticchettano *più velocemente*. Gli orologi dei satelliti guadagnano circa 45 microsecondi al giorno.

L'effetto netto è un guadagno di circa 38 microsecondi al giorno. Se non corretto, questo si accumulerebbe fino a circa 10 chilometri di errore di posizione quotidiano. I satelliti GPS sono preprogrammati per ticchettare leggermente più lentamente per compensare.

Le equazioni di campo di Einstein sono incorporate nella tua app di navigazione.

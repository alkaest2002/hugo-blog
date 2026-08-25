---
title: "Come Funzionano Davvero i LLM"
date: 2024-07-14
draft: false
categories: ["Tecnologia"]
tags: ["AI", "machine learning", "LLM", "transformers", "deep learning"]
description: "I modelli linguistici di grandi dimensioni sembrano magia, ma i meccanismi fondamentali sono sorprendentemente comprensibili. Ecco una spiegazione in linguaggio semplice di ciò che accade sotto il cofano."
---

## Token, Non Parole

La prima cosa da disimparare è che i LLM ragionano in termini di parole. Non è così. Operano su *token* — frammenti di testo che possono essere una parola intera, una sillaba, un segno di punteggiatura o una comune espressione composta. La parola "incredibile" potrebbe essere due o tre token; "gatto" è uno solo. Questo passaggio di tokenizzazione è il momento in cui il testo grezzo viene convertito in numeri interi che il modello può effettivamente elaborare.

## L'Architettura Transformer

I LLM moderni sono costruiti sull'architettura Transformer, introdotta nel 2017 nel paper *Attention Is All You Need*. L'innovazione chiave è stata il *meccanismo di attenzione*: un modo per il modello di valutare la rilevanza di ogni token nel contesto rispetto a tutti gli altri token contemporaneamente.

Quando si scrive "La riva del fiume era allagata", l'attenzione permette al modello di capire che "riva" è collegata a "fiume" e "allagata", e non alla finanza. Questo avviene attraverso decine o centinaia di *teste di attenzione* parallele, ognuna delle quali impara a tracciare diversi tipi di relazioni.

## Addestramento: Predire il Token Successivo

I LLM vengono addestrati con un obiettivo apparentemente semplice: dato una sequenza di token, prevedere il successivo. Ripetendo questa operazione miliardi di volte su centinaia di miliardi di parole raccolte da internet, libri e codice sorgente, il modello sviluppa rappresentazioni interne ricche di grammatica, fatti, schemi di ragionamento e persino tono.

La magia emerge dalla scala. I modelli piccoli addestrati con questo obiettivo imparano la grammatica di base. Quelli grandi sviluppano quelle che i ricercatori chiamano con cautela *capacità emergenti* — ragionamento con pochi esempi, generazione di codice, analogie — che non erano state ottimizzate esplicitamente.

## L'Inferenza è Autoregressiva

Quando si interagisce con un LLM, esso genera testo un token alla volta. Ogni nuovo token viene aggiunto al contesto e l'intera sequenza viene rivalutata per produrre il successivo. Ecco perché la generazione è sequenziale e perché gli output più lunghi richiedono più tempo.

Comprendere questo ciclo aiuta a spiegare sia perché i LLM sono impressionanti sia dove possono sbagliare: non hanno memoria a lungo termine, non accedono a stati esterni (a meno che non vengano forniti strumenti appositi), e possono produrre con sicurezza affermazioni plausibili ma prive di senso.

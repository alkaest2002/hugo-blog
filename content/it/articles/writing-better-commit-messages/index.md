---
draft: false
title: "Scrivere Messaggi di Commit Migliori"
description: "Un buon messaggio di commit è un regalo al tuo sé futuro e ai tuoi colleghi. Ecco come scriverne di quelli che comunicano davvero."
date: 2025-02-03
categories: ["Tecnologia"]
authors: ["Priya Raghunathan"]
tags: ["git", "controllo versione", "flusso di lavoro per sviluppatori", "best practice", "collaborazione"]
---

## Il Costo dei Messaggi di Commit Scadenti

Apri qualsiasi codebase longeva ed esegui `git log`. Cosa vedi? "fix bug," "wip," "asdf," "update," "final," "final2." Questi messaggi non ti dicono nulla sul *perché* una modifica è stata fatta, *quale problema* ha risolto, né il *contesto* che ti servirebbe per comprenderla sei mesi dopo.

Quando stai facendo debug di una regressione a mezzanotte, un messaggio di commit come "fix null pointer in user session lookup after token expiry" vale infinitamente più di "bug fix."

## L'Anatomia di un Buon Commit

Lo standard più citato è quello descritto da Tim Pope e adottato da progetti come Git stesso:

```
Breve sommario (50 caratteri o meno)

Testo esplicativo più lungo se necessario. Va a capo a 72 caratteri.
Spiega il *perché*, non solo il *cosa*. Il diff mostra cosa è
cambiato; il messaggio di commit dovrebbe spiegare perché era
necessario cambiarlo.

- I punti elenco vanno bene per elenchi di modifiche correlate
- Usa il modo imperativo: "Fix bug" non "Fixed bug" o "Fixes bug"
```

Il limite di 50 caratteri per la riga del soggetto non è arbitrario — è la larghezza mostrata da `git log --oneline`, dall'elenco commit di GitHub e dalla maggior parte delle interfacce Git.

## Il Modo Imperativo, e Perché È Importante

Git stesso usa il modo imperativo nei propri messaggi generati automaticamente: "Merge branch 'feature'", "Revert 'Add broken thing'". Scrivere i propri messaggi nello stesso modo mantiene il log coerente e fa leggere il messaggio come un'istruzione: *se applicato, questo commit...*

"Add rate limiting to the auth endpoint" — corretto.
"Added rate limiting to the auth endpoint" — meno convenzionale.
"Adds rate limiting to the auth endpoint" — da evitare anch'esso.

## Quando Suddividere le Modifiche

Un commit per ogni modifica logica. Se ti ritrovi a scrivere "e" nel soggetto di un commit — "Fix login bug and update styles" — di solito si tratta di due commit distinti. I commit atomici rendono `git bisect`, la code review e il cherry-pick tra i branch enormemente più gestibili.

La disciplina di scrivere messaggi di commit chiari ti costringe anche a ragionare con chiarezza su cosa fa effettivamente una modifica. Non è mai una cosa negativa.

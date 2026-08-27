---
title: "Introduzione a Docker"
date: 2024-03-20
draft: false
categories: ["Tecnologia"]
authors: ["Marcus Feldt"]
tags: ["docker", "containers", "devops", "infrastructure", "deployment"]
description: "Docker ha reso i container mainstream e ha cambiato il modo in cui il software viene costruito, distribuito ed eseguito. Ecco cosa bisogna sapere per iniziare."
---

## Il Problema che Docker Risolve

"Funziona sulla mia macchina" è una delle lamentele più antiche nello sviluppo software. Le differenze tra versioni di sistemi operativi, versioni di librerie, variabili d'ambiente e percorsi di file fanno sì che un software che gira perfettamente in sviluppo fallisca misteriosamente in produzione. Docker risolve questo problema impacchettando l'applicazione e tutto ciò di cui ha bisogno — runtime, librerie, configurazione — in un'unica unità portatile chiamata *container*.

## Container e Macchine Virtuali

Un equivoco comune è che i container siano macchine virtuali leggere. Non è così. Una VM include un sistema operativo completo, il che la rende lenta all'avvio e pesante in termini di risorse. Un container condivide il kernel del sistema operativo host e isola solo il livello applicativo tramite i namespace e i cgroup di Linux. Questo fa sì che i container si avviino in millisecondi e consumino una frazione della memoria di una VM equivalente.

## Concetti Fondamentali

**Image** — Un template di sola lettura che descrive l'applicazione e il suo ambiente. Costruita a partire da un `Dockerfile`.

**Container** — Un'istanza in esecuzione di un'image. È possibile eseguire simultaneamente molti container da una singola image.

**Dockerfile** — Un file di testo con le istruzioni per costruire un'image:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "main.py"]
```

**Registry** — Un luogo in cui archiviare e distribuire le image. Docker Hub è il registry pubblico predefinito; la maggior parte dei team gestisce un registry privato in produzione.

## Comandi Utili da Conoscere

- `docker build -t myapp .` — Costruisce un'image dalla directory corrente.
- `docker run -p 8080:8080 myapp` — Esegue un container mappando la porta 8080.
- `docker ps` — Elenca i container in esecuzione.
- `docker logs <container_id>` — Mostra l'output di un container.

## Passo Successivo: Docker Compose

Per lo sviluppo locale con più servizi — un'applicazione, un database, una cache — `docker compose` permette di definire e avviare tutto con un singolo file YAML e un solo comando. È lo strumento con cui la maggior parte dei team lavora quotidianamente.

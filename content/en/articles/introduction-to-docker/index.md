---
title: "Introduction to Docker"
date: 2024-03-20
draft: false
categories: ["Technology"]
authors: ["Marcus Feldt"]
tags: ["docker", "containers", "devops", "infrastructure", "deployment"]
description: "Docker made containers mainstream and changed how software gets built, shipped, and run. Here's what you need to understand to get started."
---

## The Problem Docker Solves

"It works on my machine" is one of the oldest complaints in software development. Differences in OS versions, library versions, environment variables, and file paths cause software that runs perfectly in development to fail mysteriously in production. Docker solves this by packaging your application and everything it needs — runtime, libraries, configuration — into a single portable unit called a *container*.

## Containers vs. Virtual Machines

A common misconception is that containers are lightweight virtual machines. They're not. A VM includes a full operating system, making it slow to start and heavy on resources. A container shares the host OS kernel and isolates only the application layer using Linux namespaces and cgroups. This makes containers start in milliseconds and use a fraction of the memory of a comparable VM.

## Core Concepts

**Image** — A read-only template describing your application and its environment. Built from a `Dockerfile`.

**Container** — A running instance of an image. You can run many containers from a single image simultaneously.

**Dockerfile** — A text file with instructions for building an image:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "main.py"]
```

**Registry** — A place to store and distribute images. Docker Hub is the default public registry; most teams run a private registry in production.

## Useful Commands to Know

- `docker build -t myapp .` — Build an image from the current directory.
- `docker run -p 8080:8080 myapp` — Run a container and map port 8080.
- `docker ps` — List running containers.
- `docker logs <container_id>` — Tail a container's output.

## Next Step: Docker Compose

For local development with multiple services — an app, a database, a cache — `docker compose` lets you define and start everything with a single YAML file and one command. It's where most teams actually live day-to-day.

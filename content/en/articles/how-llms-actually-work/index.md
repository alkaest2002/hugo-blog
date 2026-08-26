---
title: "How LLMs Actually Work"
date: 2024-07-14
draft: false
categories: ["Technology"]
tags: ["AI", "machine learning", "LLM", "transformers", "deep learning"]
description: "Large language models seem like magic, but the core mechanics are surprisingly graspable. Here's a plain-language breakdown of what's happening under the hood."
---

## Tokens, Not Words

The first thing to unlearn is that LLMs think in words. They don't. They operate on *tokens* — chunks of text that might be a whole word, a syllable, a punctuation mark, or a common multi-word phrase. The word "unbelievable" might be three tokens; "cat" is one. This tokenization step is where raw text gets converted into integers that the model can actually process.

## The Transformer Architecture

Modern LLMs are built on the Transformer architecture, introduced in the 2017 paper *Attention Is All You Need*. The key innovation was the *attention mechanism*: a way for the model to weigh the relevance of every token in the context against every other token simultaneously.

When you write "The bank by the river was flooded," attention lets the model figure out that "bank" relates to "river" and "flooded," not to finance. This happens across dozens or hundreds of parallel *attention heads*, each learning to track different kinds of relationships.

## Training: Predict the Next Token

LLMs are trained on a deceptively simple objective: given a sequence of tokens, predict the next one. Do this billions of times across hundreds of billions of words scraped from the internet, books, and code, and the model develops rich internal representations of grammar, facts, reasoning patterns, and even tone.

The magic emerges from scale. Small models trained on this objective learn basic grammar. Large ones develop what researchers cautiously call *emergent capabilities* — few-shot reasoning, code generation, analogy-making — that weren't explicitly optimized for.

## Inference Is Autoregressive

When you chat with an LLM, it generates text one token at a time. Each new token is appended to the context, and the whole sequence is re-evaluated to produce the next one. This is why generation is sequential and why longer outputs take more time.

Understanding this loop helps explain both why LLMs are impressive and where they slip up: they have no long-term memory, no access to external state (unless given tools), and they can confidently produce plausible-sounding nonsense.

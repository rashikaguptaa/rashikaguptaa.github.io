---
layout: ../../layouts/Post.astro
title: Welcome to my blog
date: 2026-09-23
description: What this blog is for, and what to expect from it.
tags: [Notes]
---

I am a PhD candidate in Operations & Decision Sciences at IIM Ahmedabad. I work on Markov decision processes and queueing models for warehouses, electric vehicle charging and freight transportation. This blog is where I write about that work and about the methods behind it.

Expect three kinds of posts:

- **Paper explainers.** The question behind a paper, the model, and what we learned, without the journal formatting.
- **Methods notes.** Structural results for Markov decision processes (when is the optimal policy a threshold? when is it monotone in the state?), proved carefully, with each assumption marked at the step where it is used.
- **Numerical checks.** Most posts end with a short Python script, so that you can test a claim, or try to break it, yourself.

Most of what I write about comes back to one equation, the Bellman equation for a discounted Markov decision process:

$$
V^*(s) \;=\; \min_{a \in A(s)} \Big\{ c(s,a) + \beta \sum_{s'} p(s' \mid s, a)\, V^*(s') \Big\}, \qquad \beta \in (0,1).
$$

Solving it numerically is usually easy for small problems. The interesting questions are about its *shape*: which properties of $c$ and $p$ force the minimizing action to behave in a simple way as $s$ changes. Those are the questions this blog is about.

If you have a comment or spot an error, please email me.

---
layout: ../../layouts/Post.astro
title: When is a threshold policy optimal? Admission control, proved carefully
date: 2026-10-02
description: A complete proof that a threshold admission policy is optimal for a finite-buffer Markovian queue with convex holding costs, a counterexample showing that convexity cannot be dropped, and Python code to check both.
tags: [Markov decision processes, Structural results, Queueing]
---

Many operations problems share one question. A customer arrives at a queue, or an electric vehicle at a charging station, or an order at a warehouse. Should the system accept it? The classic answer is a **threshold policy**: accept if and only if fewer than $x^*$ customers are present. Results of this kind are called *structural results*. They matter for three reasons: they cut the search for an optimal policy down to a single number, they are easy to put into practice, and they explain *why* the optimal policy looks the way it does.

This post proves the simplest version of this result in full. It then shows with an explicit counterexample that the key assumption, convex holding costs, cannot be dropped, and ends with Python code that checks both claims. The result itself is classical (Naor, 1969; Stidham, 1985). The point here is to give a proof in which every step is checked.

## The model

- A single server serves customers at exponential rate $\mu > 0$, and there is room for at most $N \ge 1$ customers.
- Customers arrive according to a Poisson process with rate $\lambda > 0$.
- When a customer arrives and $x < N$ customers are present, the controller either **admits** it, earning a reward $R > 0$ and moving to state $x+1$, or **rejects** it, leaving the state unchanged. When $x = N$, every arrival is rejected.
- While $x$ customers are present, the system pays a holding cost at rate $c(x)$.
- Future costs are discounted continuously at rate $\alpha > 0$. The goal is to minimize the expected total discounted cost minus rewards.

**Assumption (A).** The holding cost $c : \{0, \dots, N\} \to \mathbb{R}$ is nondecreasing and convex. Writing $\Delta c(x) = c(x+1) - c(x)$, this means

$$
0 \le \Delta c(0) \le \Delta c(1) \le \dots \le \Delta c(N-1).
$$

A linear cost $c(x) = hx$ with $h \ge 0$ satisfies (A).

## The Bellman equation

Let $\Lambda = \lambda + \mu$. *Uniformization* (Lippman, 1975; Puterman, 1994, Ch. 11) adds fictitious events so that every state has total event rate $\Lambda$: in state $0$ a "service" event leaves the state unchanged. The times between events are then i.i.d. exponential with rate $\Lambda$. If $\tau \sim \mathrm{Exp}(\Lambda)$ is the time to the next event, then

$$
\mathbb{E}\Big[\int_0^{\tau} e^{-\alpha t} c(x)\, dt\Big] = \frac{c(x)}{\alpha + \Lambda},
\qquad
\mathbb{E}\big[e^{-\alpha \tau}\big] = \frac{\Lambda}{\alpha + \Lambda},
$$

and the next event is an arrival with probability $\lambda / \Lambda$. Let the action $a \in A(x)$ be "admit the next arrival" ($a = 1$) or "reject it" ($a = 0$), with $A(x) = \{0, 1\}$ for $x < N$ and $A(N) = \{0\}$. Because the state does not change before the next event, choosing $a$ on entering state $x$ is the same as choosing it when the arrival happens. Conditioning on the first event gives a discrete-time MDP with finitely many states and actions. Its Bellman operator, acting on $f : \{0, \dots, N\} \to \mathbb{R}$, is

$$
(Tf)(x) = \frac{1}{\alpha + \Lambda} \Big[\, c(x) + \lambda \min_{a \in A(x)} \big\{ f(x + a) - aR \big\} + \mu\, f\big((x-1)^+\big) \Big].
$$

Two standard facts about finite discounted MDPs (Puterman, 1994, Ch. 6) are all we need.

- **(F1)** $T$ is a contraction in the sup norm, with modulus $\beta = \Lambda / (\alpha + \Lambda) < 1$. This follows from $|\min\{u, v\} - \min\{u', v'\}| \le \max\{|u - u'|, |v - v'|\}$, so $\|Tf - Tf'\|_\infty \le \frac{\lambda + \mu}{\alpha + \Lambda} \|f - f'\|_\infty$. By Banach's fixed-point theorem, $T$ has a unique fixed point $V$, and $T^n f \to V$ for every $f$.
- **(F2)** $V$ is the optimal value function, and any deterministic stationary policy that attains the minimum in $TV$ in every state is optimal.

So it is optimal to admit in state $x < N$ if and only if $V(x+1) - R \le V(x)$, that is,

$$
\Delta V(x) \le R, \qquad \text{where } \Delta V(x) = V(x+1) - V(x).
$$

(Ties are broken in favour of admitting.)

## The theorem

> **Theorem.** Under (A), $0 \le \Delta V(0) \le \Delta V(1) \le \dots \le \Delta V(N-1)$. Consequently, if
>
> $$
> x^* = \min\{x \in \{0, \dots, N-1\} : \Delta V(x) > R\} \quad (\text{with } x^* = N \text{ if no such } x \text{ exists}),
> $$
>
> then the policy "admit if and only if $x < x^*$" is optimal.

## Proof

Let $\mathcal{K}$ be the set of functions $f : \{0, \dots, N\} \to \mathbb{R}$ with

$$
0 \le \Delta f(0) \le \Delta f(1) \le \dots \le \Delta f(N-1),
$$

that is, the nondecreasing convex functions. The proof shows that $T$ maps $\mathcal{K}$ into itself and then passes to the limit.

**Step 1: $\mathcal{K}$ is a closed convex cone.** It is cut out of $\mathbb{R}^{N+1}$ by finitely many non-strict linear inequalities, so it is closed. It is also closed under sums and under multiplication by nonnegative scalars, and $0 \in \mathcal{K}$.

**Step 2: $T(\mathcal{K}) \subseteq \mathcal{K}$.** Fix $f \in \mathcal{K}$ and write

$$
(\alpha + \Lambda)\, Tf = c + \lambda g + \mu h, \qquad g(x) = \min_{a \in A(x)} \{ f(x+a) - aR \}, \qquad h(x) = f\big((x-1)^+\big).
$$

Since $\mathcal{K}$ is a convex cone and $c \in \mathcal{K}$ by (A), it is enough to show that $h \in \mathcal{K}$ and $g \in \mathcal{K}$.

*The service term $h$.* Here $\Delta h(0) = f(0) - f(0) = 0$ and $\Delta h(x) = \Delta f(x - 1)$ for $1 \le x \le N-1$. So the differences of $h$ are $0, \Delta f(0), \dots, \Delta f(N-2)$. They are nonnegative and nondecreasing because $\Delta f(0) \ge 0$ and $\Delta f$ is nondecreasing. Hence $h \in \mathcal{K}$. *This is the step that needs $f$ to be nondecreasing, not just convex:* an idle server at $x = 0$ adds the difference $0$ at the start of the list, so the list stays sorted only if $\Delta f(0) \ge 0$.

*The arrival term $g$.* Set $\Delta f(N) := +\infty$ and $m(t) := \min\{0, t - R\}$, with $m(+\infty) = 0$. Then for every $x \in \{0, \dots, N\}$,

$$
g(x) = f(x) + m\big(\Delta f(x)\big).
$$

For $x < N$ this is $\min\{f(x), f(x+1) - R\}$. For $x = N$ it is $f(N)$, which is the forced rejection.

*Lemma.* For $x \in \{0, \dots, N-1\}$,

$$
\Delta g(x) = \min\big\{ \max\{\Delta f(x), R\},\ \Delta f(x+1) \big\}.
$$

*Proof of the lemma.* Let $a = \Delta f(x) \in \mathbb{R}$ and $b = \Delta f(x+1) \in \mathbb{R} \cup \{+\infty\}$, so that $a \le b$. Then $\Delta g(x) = a + m(b) - m(a)$. There are three cases.

1. $a \le b \le R$ (so $b$ is finite). Then $m(a) = a - R$ and $m(b) = b - R$, so $\Delta g(x) = b$. Also $\max\{a, R\} = R \ge b$, so the right-hand side equals $b$.
2. $a \le R < b$. Then $m(a) = a - R$ and $m(b) = 0$, so $\Delta g(x) = R$. The right-hand side is $\min\{R, b\} = R$.
3. $R < a \le b$. Then $m(a) = m(b) = 0$, so $\Delta g(x) = a$. The right-hand side is $\min\{a, b\} = a$.

These cases cover every possibility, which proves the lemma. $\square$

Note that $\Delta g(x)$ is always finite, because $\max\{a, R\}$ is. Now let $0 \le x \le N-2$ and write $a, b$ as above and $d = \Delta f(x+2)$, so $a \le b \le d \le +\infty$. Then

$$
\Delta g(x) = \min\{\max\{a, R\}, b\} \le b \le \max\{b, R\}
\quad\text{and}\quad
\Delta g(x) \le b \le d,
$$

so $\Delta g(x) \le \min\{\max\{b, R\}, d\} = \Delta g(x+1)$. Finally, with $x = 0$, $\Delta g(0) = \min\{\max\{a, R\}, b\} \ge \min\{a, b\} = a = \Delta f(0) \ge 0$. Hence $g \in \mathcal{K}$, which completes Step 2.

**Step 3: $V \in \mathcal{K}$.** Let $f_0 = 0 \in \mathcal{K}$ and $f_{n+1} = T f_n$. By Step 2 and induction, $f_n \in \mathcal{K}$ for all $n$. By (F1), $f_n \to V$, and $\mathcal{K}$ is closed by Step 1, so $V \in \mathcal{K}$.

**Step 4: the threshold.** Let $x < x^*$. By the definition of $x^*$ as a minimum, $\Delta V(x) \le R$, so admitting attains the minimum in $TV$. Let $x^* \le x < N$. Then $\Delta V(x) \ge \Delta V(x^*) > R$ by Step 3, so rejecting is the unique minimizer. The policy "admit if and only if $x < x^*$" therefore attains the minimum in $TV$ in every state, and it is optimal by (F2). $\blacksquare$

### Where each assumption was used

- **$c$ convex:** to get $c \in \mathcal{K}$ in Step 2. This is the essential assumption, as the next section shows.
- **$c$ nondecreasing:** also for $c \in \mathcal{K}$. Monotonicity is part of $\mathcal{K}$ because the service term $h$ needs $\Delta f(0) \ge 0$.
- **Finite buffer $N$:** this makes the state space finite, so (F1) and (F2) are elementary. $N$ can be as large as you like. For $N = \infty$ the same induction goes through, but showing that $V$ is the optimal value function with unbounded costs needs a weighted-norm argument that I do not repeat here.

The theorem also has limits. It does **not** say how $x^*$ moves when $R$, $\lambda$, $\mu$ or $c$ change. Comparative statics of that kind need separate arguments.

## Convexity cannot be dropped

Take $N = 3$, $\lambda = \mu = \alpha = 1$ and $R = 1$, with the holding cost

$$
c = (c(0), c(1), c(2), c(3)) = (0,\ 0,\ 3,\ 3).
$$

This cost is nondecreasing but not convex: $\Delta c = (0, 3, 0)$. Think of a fixed cost that is incurred as soon as a second customer is present, for example opening an overflow area. I claim that

$$
V = \Big( -\tfrac{2}{3},\ -\tfrac{1}{3},\ \tfrac{19}{15},\ \tfrac{32}{15} \Big).
$$

Here $\alpha + \Lambda = 3$. Check each state directly:

| $x$ | admit: $V(x+1) - R$ | reject: $V(x)$ | $(TV)(x)$ |
|---|---|---|---|
| 0 | $-4/3$ | $-2/3$ | $\big(0 - \tfrac{4}{3} - \tfrac{2}{3}\big)/3 = -\tfrac{2}{3}$ |
| 1 | $4/15$ | $-1/3$ | $\big(0 - \tfrac{1}{3} - \tfrac{2}{3}\big)/3 = -\tfrac{1}{3}$ |
| 2 | $17/15$ | $19/15$ | $\big(3 + \tfrac{17}{15} - \tfrac{1}{3}\big)/3 = \tfrac{19}{15}$ |
| 3 | (forced reject) | $32/15$ | $\big(3 + \tfrac{32}{15} + \tfrac{19}{15}\big)/3 = \tfrac{32}{15}$ |

So $TV = V$. By (F1) the fixed point is unique, so this $V$ is the optimal value function. The minimizing actions are **admit at 0, reject at 1, admit at 2**. Every comparison is strict, so no other deterministic stationary policy is optimal. Indeed, if a policy $d$ picked the other action at some $x$, then $V_d = T_d V_d \ge T_d V$ (because $V_d \ge V$ and $T_d$ is monotone), and $(T_d V)(x) > V(x)$. Hence no threshold policy is optimal.

The intuition is simple. Going from one customer to two triggers the cost jump, so the controller refuses it. Once two customers are present the jump has already been paid and another customer costs nothing extra, so admitting is attractive again.

## Check it yourself

The script below runs value iteration on 2000 random instances that satisfy (A) and checks every conclusion of the theorem. It then verifies the counterexample in exact rational arithmetic.

```python
import numpy as np
from fractions import Fraction

def bellman(V, lam, mu, alpha, R, c):
    """One application of T. Works for floats and for exact Fractions."""
    N = len(c) - 1
    out = []
    for x in range(N + 1):
        best = min(V[x + 1] - R, V[x]) if x < N else V[x]   # admit / reject
        out.append((c[x] + lam * best + mu * V[max(x - 1, 0)]) / (alpha + lam + mu))
    return out

def solve(lam, mu, alpha, R, c, tol=1e-12):
    V = [0.0] * len(c)
    while True:
        W = bellman(V, lam, mu, alpha, R, c)
        if max(abs(a - b) for a, b in zip(V, W)) < tol:
            return np.array(W)
        V = W

def admit_set(V, R):
    return [x for x in range(len(V) - 1) if V[x + 1] - R <= V[x]]

def is_threshold(A):
    return A == list(range(len(A)))       # A = {0, 1, ..., x*-1}

# 1. The theorem: random instances with c nondecreasing and convex.
rng = np.random.default_rng(0)
bad = 0
for _ in range(2000):
    N = int(rng.integers(1, 20))
    lam, mu, alpha = rng.uniform(0.1, 5, 3)
    R = rng.uniform(0.1, 20)
    inc = np.sort(rng.uniform(0, 3, N))                 # 0 <= Δc(0) <= ... <= Δc(N-1)
    c = np.concatenate(([0.0], np.cumsum(inc)))
    V = solve(lam, mu, alpha, R, c)
    dV = np.diff(V)
    ok = (dV >= -1e-9).all() and (np.diff(dV) >= -1e-9).all() and is_threshold(admit_set(V, R))
    bad += not ok
print("violations of the theorem:", bad, "out of 2000")

# 2. The counterexample, in exact arithmetic.
F = Fraction
c = [F(0), F(0), F(3), F(3)]
V = [F(-2, 3), F(-1, 3), F(19, 15), F(32, 15)]
print("TV - V =", [a - b for a, b in zip(bellman(V, 1, 1, 1, F(1), c), V)])
print("optimal admit set:", admit_set(V, F(1)))
```

Output:

```text
violations of the theorem: 0 out of 2000
TV - V = [Fraction(0, 1), Fraction(0, 1), Fraction(0, 1), Fraction(0, 1)]
optimal admit set: [0, 2]
```

To see the theorem fail, replace `np.sort(...)` with unsorted increments, so that $c$ is nondecreasing but not convex. Random search then finds non-threshold optimal policies quickly.

## References

- Koole, G. (2006). Monotonicity in Markov reward and decision chains: Theory and applications. *Foundations and Trends in Stochastic Systems*, 1(1), 1–76.
- Lippman, S. A. (1975). Applying a new device in the optimization of exponential queuing systems. *Operations Research*, 23(4), 687–710.
- Naor, P. (1969). The regulation of queue size by levying tolls. *Econometrica*, 37(1), 15–24.
- Puterman, M. L. (1994). *Markov Decision Processes: Discrete Stochastic Dynamic Programming*. Wiley.
- Stidham, S. (1985). Optimal control of admission to a queueing system. *IEEE Transactions on Automatic Control*, 30(8), 705–713.

---
layout: ../../layouts/Post.astro
title: How long should a truck wait for a platoon partner?
date: 2026-09-30
description: A one-truck toy model of the platooning trade-off. The answer turns on a single function, the hazard rate of the partner's arrival time, and a short proof shows exactly when to wait forever, never, or up to a deadline.
tags: [Truck platooning, Optimal stopping, Freight transportation]
---

Trucks that drive in a closely spaced platoon use less fuel, but trucks rarely arrive at the same place at the same time. Forming a platoon therefore means **waiting**, and waiting costs driver time and delays freight. In our [paper in *Transportation Research Part E*](https://www.sciencedirect.com/science/article/pii/S1366554526000244), we study this trade-off between fuel savings and formation delay across a whole freight network, using a closed queueing network model.

This post strips the question down to one truck at one hub. Even this toy version has a clean structural answer, and the same way of thinking (compare the marginal gain from waiting with its marginal cost) carries over to richer models.

## The model

A truck reaches a hub at time $0$. Let $T \ge 0$ be the random time until a potential partner arrives, with distribution function $F$. I assume that

- $F$ has a continuous density $f$ on $[0, \infty)$,
- $F(t) < 1$ for every $t \ge 0$, and
- $\mathbb{E}[T] < \infty$.

The **hazard rate** of $T$ is $h(t) = f(t) / (1 - F(t))$. It is continuous under these assumptions. Waiting costs $c > 0$ per hour, and forming a platoon saves $s > 0$.

The truck chooses a **deadline** $\tau \in [0, \infty]$. It waits until the partner arrives or the deadline passes, whichever comes first, and it platoons if and only if $T \le \tau$. Its expected net benefit is

$$
B(\tau) = s\, \mathbb{P}(T \le \tau) - c\, \mathbb{E}[\min(T, \tau)].
$$

All results below are stated for deadline rules. This is the natural class here: until the partner arrives, the only thing the truck learns is that the partner has not arrived yet, so a non-randomized rule can only depend on elapsed time. Randomizing does not help either. A random deadline $\tilde\tau$ independent of $T$ earns $\mathbb{E}[B(\tilde\tau)] \le \sup_\tau B(\tau)$.

## The derivative of $B$

**Lemma.** For $\tau \in [0, \infty)$,

$$
B(\tau) = s F(\tau) - c \int_0^\tau \big(1 - F(t)\big)\, dt,
$$

$B$ is continuously differentiable on $[0, \infty)$ with

$$
B'(\tau) = \big(1 - F(\tau)\big)\big(s\, h(\tau) - c\big),
$$

and $B(\infty) = s - c\, \mathbb{E}[T] = \lim_{\tau \to \infty} B(\tau)$.

*Proof.* Since $\min(T, \tau) = \int_0^\tau \mathbf{1}\{T > t\}\, dt$, Tonelli's theorem gives $\mathbb{E}[\min(T, \tau)] = \int_0^\tau (1 - F(t))\, dt$. Because $f$ is continuous, $F$ is continuously differentiable with $F' = f$, and the integrand $1 - F$ is continuous. The fundamental theorem of calculus therefore gives $B'(\tau) = s f(\tau) - c(1 - F(\tau))$. Factoring out $1 - F(\tau) > 0$ gives the stated form. Finally, $F(\tau) \to 1$, and $\int_0^\tau (1 - F) \uparrow \int_0^\infty (1 - F) = \mathbb{E}[T]$ by monotone convergence. $\square$

The formula for $B'$ has a direct reading. If the truck is still waiting at time $\tau$ (probability $1 - F(\tau)$), then waiting $d\tau$ longer brings a partner with probability about $h(\tau)\, d\tau$, worth $s$, and costs $c\, d\tau$. **Waiting a little longer is worthwhile exactly when $s\, h(\tau) > c$.** The global answer depends on how $h$ changes over time.

## The theorem

> **Theorem** (optimal deadlines).
>
> 1. **Memoryless partners** ($T \sim \mathrm{Exp}(\lambda)$, so $h \equiv \lambda$). Then $B(\tau) = (1 - e^{-\lambda\tau})(s - c/\lambda)$. If $s\lambda > c$, wait until a partner arrives ($\tau = \infty$). If $s\lambda < c$, leave at once ($\tau = 0$). If $s\lambda = c$, every deadline is optimal.
> 2. **Increasing hazard** ($h$ nondecreasing). Then $\sup_\tau B(\tau) = \max\{0,\ s - c\,\mathbb{E}[T]\}$, attained at $\tau = 0$ or $\tau = \infty$. It is never strictly better to set a finite positive deadline.
> 3. **Decreasing hazard** ($h$ nonincreasing). Let $t^* = \inf\{t \ge 0 : s\, h(t) \le c\}$, with $\inf \emptyset = \infty$. Then $\tau = t^*$ is optimal: wait while waiting is still worth it, and never longer.

*Proof of 1.* With $1 - F(t) = e^{-\lambda t}$, the lemma gives $B(\tau) = s(1 - e^{-\lambda \tau}) - c(1 - e^{-\lambda\tau})/\lambda$. The factor $1 - e^{-\lambda\tau}$ increases from $0$ to $1$, and $B(\infty) = s - c/\lambda$. The three cases follow from the sign of $s - c/\lambda$. $\square$

*Proof of 2.* Let $t_0 = \inf\{t \ge 0 : s\, h(t) > c\}$. If $t < t_0$, then $s\, h(t) \le c$, so $B'(t) \le 0$. If $t > t_0$, the definition of the infimum gives some $t'' \in [t_0, t)$ with $s\, h(t'') > c$, and since $h$ is nondecreasing, $s\, h(t) \ge s\, h(t'') > c$, so $B'(t) > 0$. Because $B$ is continuous, it is nonincreasing on $[0, t_0]$ and nondecreasing on $[t_0, \infty)$. Hence $B(\tau) \le B(0) = 0$ for $\tau \le t_0$, and $B(\tau) \le \lim_{u \to \infty} B(u) = B(\infty)$ for $\tau \ge t_0$. Both values are attained, at $\tau = 0$ and $\tau = \infty$. If $t_0 = \infty$, then $B$ is nonincreasing everywhere and the supremum is $B(0) = 0 \ge B(\infty)$. $\square$

*Proof of 3.* If $t^* = \infty$, then $s\, h(t) > c$ for all $t$, so $B' > 0$, $B$ is increasing, and its supremum $B(\infty)$ is attained at $\tau = \infty = t^*$. Otherwise $t^* < \infty$. The set $\{t : s\, h(t) \le c\}$ is closed because $h$ is continuous, so it contains its infimum, and $s\, h(t^*) \le c$. For $t < t^*$ we have $s\, h(t) > c$, so $B'(t) > 0$. For $t \ge t^*$ we have $h(t) \le h(t^*)$, so $s\, h(t) \le c$ and $B'(t) \le 0$. So $B$ is nondecreasing on $[0, t^*]$ and nonincreasing on $[t^*, \infty)$. Its maximum over $[0, \infty)$ is therefore $B(t^*)$, and $B(\infty) = \lim_{\tau\to\infty} B(\tau) \le B(t^*)$. $\blacksquare$

The two monotone cases give opposite answers. With an increasing hazard, a partner becomes *more* likely the longer the truck waits. So if waiting is worth starting, it is worth finishing, and the answer is all or nothing. With a decreasing hazard, a long wait is evidence that no partner is nearby. The truck should then follow the myopic rule "wait while $s\, h(t) > c$", and this rule is globally optimal.

## A decreasing-hazard example

Suppose that half the time a partner is close behind, arriving at rate $\lambda_1 = 2$ per hour, and otherwise partners arrive at rate $\lambda_2 = 0.1$ per hour. Then $T$ is hyperexponential:

$$
1 - F(t) = p\, e^{-\lambda_1 t} + (1-p)\, e^{-\lambda_2 t}, \qquad p = \tfrac12 .
$$

Its hazard rate is nonincreasing. To see this, write $w_i(t) = p_i e^{-\lambda_i t}$, so that $h = \sum_i \lambda_i w_i / \sum_i w_i$. Differentiating gives

$$
h'(t) = -\frac{\big(\sum_i \lambda_i^2 w_i\big)\big(\sum_i w_i\big) - \big(\sum_i \lambda_i w_i\big)^2}{\big(\sum_i w_i\big)^2} \le 0
$$

by the Cauchy–Schwarz inequality. Take $s = 100$ and $c = 30$ per hour. Then:

- $s\, h(0) = 105 > c$, so the truck should wait at least a little.
- $s\, h(\infty) = s\lambda_2 = 10 < c$, so $t^*$ is finite. Solving $s\, h(t^*) = c$ gives $t^* \approx 1.13$ hours, with $B(t^*) \approx 27.4$.
- Waiting until a partner arrives gives $B(\infty) = 100 - 30 \times 5.25 = -57.5$. On average this is worse than not platooning at all.

The deadline matters. With the right one, platooning is worth about 27 units per truck. With no deadline, it loses about 58.

## Check it yourself

The script finds $t^*$ from the hazard rule, compares it with a brute-force maximization of $B$, and checks the formula for $B$ by simulation.

```python
import numpy as np

s, c = 100.0, 30.0                       # saving per platoon, waiting cost per hour
p, l1, l2 = 0.5, 2.0, 0.1                # hyperexponential partner arrival time

surv = lambda t: p * np.exp(-l1 * t) + (1 - p) * np.exp(-l2 * t)              # 1 - F(t)
dens = lambda t: p * l1 * np.exp(-l1 * t) + (1 - p) * l2 * np.exp(-l2 * t)    # f(t)
hazard = lambda t: dens(t) / surv(t)

def B(tau):   # s F(tau) - c * integral_0^tau (1 - F(t)) dt, in closed form
    integral = p * (1 - np.exp(-l1 * tau)) / l1 + (1 - p) * (1 - np.exp(-l2 * tau)) / l2
    return s * (1 - surv(tau)) - c * integral

# t* = inf{t : s h(t) <= c}, found by bisection (h is decreasing here)
lo, hi = 0.0, 100.0
for _ in range(100):
    mid = (lo + hi) / 2
    lo, hi = (mid, hi) if s * hazard(mid) > c else (lo, mid)
t_star = hi

grid = np.linspace(0, 100, 1_000_001)
print(f"t* from the hazard rule : {t_star:.4f} h,  B(t*) = {B(t_star):.2f}")
print(f"argmax of B on a grid   : {grid[np.argmax(B(grid))]:.4f} h")
print(f"never wait / wait always: B(0) = {B(0.0):.2f},  B(inf) = {s - c * (p / l1 + (1 - p) / l2):.2f}")

# Monte Carlo check of the formula for B
rng = np.random.default_rng(1)
n = 2_000_000
T = np.where(rng.random(n) < p, rng.exponential(1 / l1, n), rng.exponential(1 / l2, n))
for tau in (0.5, t_star, 4.0):
    mc = np.mean(s * (T <= tau) - c * np.minimum(T, tau))
    print(f"tau = {tau:.3f}:  simulated {mc:7.2f}   formula {B(tau):7.2f}")
```

Output:

```text
t* from the hazard rule : 1.1264 h,  B(t*) = 27.38
argmax of B on a grid   : 1.1264 h
never wait / wait always: B(0) = 0.00,  B(inf) = -57.50
tau = 0.500:  simulated   21.97   formula   21.99
tau = 1.126:  simulated   27.39   formula   27.38
tau = 4.000:  simulated    9.50   formula    9.52
```

To see the increasing-hazard case, replace $T$ with an Erlang distribution, for example the sum of two independent $\mathrm{Exp}(1)$ variables, whose hazard $t/(1+t)$ is increasing. Computing $B$ numerically on a grid, its maximum agrees with $\max\{0,\ s - c\,\mathbb{E}[T]\} = \max\{0,\ s - 2c\}$, as part 2 of the theorem predicts.

## What the toy leaves out

A single truck facing a given arrival process misses what makes platooning a *network* problem. A truck that waits is itself a potential partner for the trucks behind it. Platoons can have more than two trucks. Travel times between hubs depend on platoon size, and different formation rules change the traffic that every other hub sees. Capturing these effects is what the closed queueing network in the [paper](https://www.sciencedirect.com/science/article/pii/S1366554526000244) is for. The toy model only isolates the basic trade-off between saving fuel and losing time.

# Brownian Particle in a fluctuating potential
**Author**: Bhaskar Kumawat

## Flat Potential over an infinite domain

### Setup
In the absence of a potential gradient, the drift speed of the Brownian particle is zero and the Fokker-Planck equation for its probability distribution is given by,

$$\frac{\partial p(x,t)}{\partial t} = D \frac{\partial ^2p(x,t)}{\partial x^2}$$ (1)

Let us assume that the particle starts out at $x=0$, this implies that the probability distribution $p(x,0)$ is given by,

$$p(x,0)=\delta (x),\\ \text{The F.T is given by } p(k,0) = 1$$ (2)

### Solution
Let $p(k,t)$ be the spatial Fourier-transform of $p(x,t)$ given by,

$$p(k,t)=\int_{-\infin}^{\infin}e^{-ikx}p(x,t)\;dx$$ (3)

Applying the F.T (3) to both sides of equation (1) gives,

$$\frac{\partial p(k,t)}{\partial t} = -Dk^2 p(k,t)$$ (4)

The general solution of  (4) is given by,

$$p(k,t)=p(k,0) \; e^{-Dk^2t} = e^{-Dk^2t}$$ (5)

Taking a reverse fourier transform gives,

$$p(x,t)=\frac{1}{2\pi} \int_{-\infin}^{\infin} e^{ikx-Dk^2t} dk$$ (6)

To solve (6), we need to complete the square in the exponent to give,

$$p(x,t) = \frac{1}{2\pi} e^{\left(\frac{ix}{2\sqrt{Dt}}\right)^2} \int_{-\infin}^{\infin} e^{-\left(k\sqrt{Dt}-\frac{ix}{2\sqrt{Dt}}\right)^2} dk$$ (7)

Transforming $\omega=k\sqrt{Dt}-\frac{ix}{2\sqrt{Dt}}$, and $\frac{d\omega}{dk}=\sqrt{Dt}$

$$p(x,t) = \frac{1}{2\pi\sqrt{Dt}} e^{\left(\frac{ix}{2\sqrt{Dt}}\right)^2} \int_{-\infin}^{\infin} e^{-\omega^2} d\omega\\
\implies p(x,t) = \frac{1}{\sqrt{4\pi Dt}} e^{\left(\frac{ix}{2\sqrt{Dt}}\right)^2} = \frac{e^{-\frac{x^2}{4Dt}}}{\sqrt{4\pi Dt}}$$ (8)

The initial delta distribution thus spreads out over the entire space. 

## Flat potential on a bounded domain with reflecting boundaries

### Setup
Let the brownian particle (with no potential gradient) be bound by reflecting walls at $x=\{ -a,a \}$. In this case, the _probability current_ on both walls of the domain should be zero at all times. This implies,

$$J(-a,t) = J(a,t)=0$$ (9)

Where $J(x,t)$ is the probability current on the domain that can be obtained from (1) as,

$$ \frac{\partial p(x,t)}{\partial t} = - \frac{\partial J(x,t)}{\partial x} \\ \implies J(x,t) = -D \frac{\partial p(x,t)}{\partial x}$$ (10)

Thus, for the probability current to be zero at $x=\{-a,a\}$, 

$$\left. \frac{\partial p(x,t)}{\partial x} \right|_{x=-a} = \left. \frac{\partial p(x,t)}{\partial x} \right|_{x=a} = 0 $$ (11)

This signifies that the slope of the probability function should be zero at both the boundaries. We must thus solve equation (1) with boundary conditions in (11) and an initial value described by (2). 

### Time-dependent solution

### Stationary solution

Under a stationary distribution, $p(x,t)\rightarrow p(x)$. Equation (1) is then,

$$ D\frac{\partial^2 p(x)}{\partial x^2} = 0$$



## Linear potential with reflecting boundaries
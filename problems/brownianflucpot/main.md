# Brownian Particle in a fluctuating potential
**Author**: Bhaskar Kumawat

## Flat Potential over an infinite domain

### Setup

<center>
<img width=60% src="f1.png">
</center>

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

<center>
<img width=60% src="f2.png">
</center>

Let the brownian particle (with no potential gradient) be bound by reflecting walls at $x=\{ -a,a \}$. In this case, the _probability current_ on both walls of the domain should be zero at all times. This implies,

$$J(-a,t) = J(a,t)=0$$ (9)

Where $J(x,t)$ is the probability current on the domain that can be obtained from (1) as,

$$ \frac{\partial p(x,t)}{\partial t} = - \frac{\partial J(x,t)}{\partial x} \\ \implies J(x,t) = -D \frac{\partial p(x,t)}{\partial x}$$ (10)

Thus, for the probability current to be zero at $x=\{-a,a\}$, 

$$\left. \frac{\partial p(x,t)}{\partial x} \right|_{x=-a} = \left. \frac{\partial p(x,t)}{\partial x} \right|_{x=a} = 0 $$ (11)

This signifies that the slope of the probability function should be zero at both the boundaries. We must thus solve equation (1) with boundary conditions in (11) and an initial value described by (2). 

### Stationary solution

Under a stationary distribution, $p(x,t)\rightarrow p(x)$. Equation (1) is then,

$$ D\frac{\partial^2 p(x)}{\partial x^2} = 0 \\ 
\implies \frac{\partial p(x)}{\partial x}=c_1 \\
\implies p(x) = c_1 x + c_2$$  (12)

Where $c_1$ and $c_2$ are constants.

The only way for (12) to satisfy the boundary condition in (11) is if $c_1=0$. In addition, the normalization condition for $p(x)$ ($\int_{-a}^{a} p(x)=1$) gives the solution,

$$ p(x) = \frac{1}{2a} $$ (13)

### Time-dependent solution

Let the time dependent solution for the above system be given by, 

$$p(x,t)=X(x)T(t)$$ (14)

Then, equation (1) implies,

$$ X \dot{T}  =DT\ddot{X}$$ (15)

Where the dot notation is used to denote a derivative with respect to the relevant variable. Rewriting this, we get

$$ \frac{\dot{T}}{T} = D \frac{\ddot{X}}{X}$$ (16)

Both sides of this equation are dependent on two different variables and hence must be equal to the same constant (say $k$). Then, the equation can be separated as,

$$\dot{T} = kT \text{ and } \ddot{X} = \frac{k}{D} X$$ (17)

The general solution for both equations are given by,

$$ T(t) = c e^{kt}$$ (18)
$$ X(x) = c_1 e^{x\sqrt{k/D}} + c_2 e^{-x\sqrt{k/D}}$$ (19)


The zero current boundary conditions in (11) imply,

$$\left. \frac{\partial X}{\partial x} \right|_{x=\pm a}=0$$ (20)

A non-trivial solution for equations (19) and (20) is possible only when the constant $k$ is negative, which results in complex exponents in equation (19). Thus, equation (19) can be rewritten in the following form without loss of generality,


$$X(x)=c_1 \cos{\frac{\omega x}{D}}+c_2 \sin{\frac{\omega x}{D}}$$ (21)

Where $k=-\omega^2$ . Substituting (21) in the boundary conditions defined by (20) gives (and taking $\gamma=\omega/D$),

$$ \left. \frac{\partial X}{\partial x} \right|_{x=a} = -c_1 \gamma \sin(\gamma a)+c_2 \gamma \cos(\gamma a) = 0 \\

\left. \frac{\partial X}{\partial x} \right|_{x=-a} = c_1 \gamma \sin(\gamma a)+c_2 \gamma \cos(\gamma a) = 0
$$ (22)

For a non-trivial solution of $X(x)$, $c_1$ and $c_2$ cannot be zero simultaneously. As $c_2=c_1 tan(\gamma a)$ from the first equation, the only possible way to get a non-trivial solution is if,  

$$c_2=0 \text{ and } \sin(\gamma a)=0$$ (23)

Which means that,

$$\gamma = \frac{n\pi}{a}\\
\implies \omega = \frac{n\pi D}{a}\\
\implies k = -\left(\frac{n\pi D}{a}\right)^2$$ (24)

$X(x)$ is in turn given by,

$$X(x) = c_1 \cos\left(\frac{n\pi x}{a}\right), \text{where } n\in \{\pm 1,\pm 2...\}$$ (25)

The full solution can now be written as,

$$p_n(x,t)=a_n \cos\left(\frac{n \pi x}{a}\right) \; e^{-t\left(\frac{n\pi D}{a}\right)^2}$$

Where $p_n$ is the nth normal mode with a normalizing constant $a_n$. We can write the full distribution as a superposition of all these modes, thus obtaining

$$p(x,t)= a_0 + \sum_{n=1}^\infin a_n \cos\left(\frac{n \pi x}{a}\right) \; e^{-t\left(\frac{n\pi D}{a}\right)^2}$$

To satisfy the initial condition, 

$$ p(x,0) = a_0 + \sum_{n=1}^\infin a_n \cos\left(\frac{n \pi x}{a}\right) = \delta(x)$$

Thus, the coefficients $a_0,a_1,...$ etc. are just the cosine coefficients of $\delta(x)$ and are given by,

$$ a_0 = \frac{1}{2a} \int_{-a}^{a} \delta(x) dx = \frac{1}{2a} \\
a_n = \frac{1}{a} \int_{-a}^{a} \delta(x) cos\left(\frac{n\pi x}{a}\right) = \frac{1}{a}$$ 


## Linear potential with reflecting boundaries
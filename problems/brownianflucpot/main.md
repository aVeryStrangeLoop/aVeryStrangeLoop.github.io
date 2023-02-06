# Brownian Particle in a fluctuating potential
The Fokker-Planck equation describes the change in the probability density of a Brownian particle under drift and random forces. In a 1-D space, it is given by,

$$ \frac{\partial}{\partial t}p(x,t)= - \frac{\partial}{\partial x} \left[\mu(x,t)p(x,t)\right] + \frac{\partial ^2}{\partial x^2}[D(x,t)p(x,t)]$$ (1)

## Flat potential, isotropic 1-D space with reflecting boundaries

The Fokker-Planck equation (1) can be modified to read,

$$ \frac{\partial}{\partial t} p(x,t)= -\frac{\partial}{\partial x} J(x,t)$$ (2)

where $J(x,t)$ is a _probability current_ given by,

$$J(x,t) = \mu(x,t)p(x,t)-\frac{\partial}{\partial x}\left[D(x,t) p(x,t)\right]$$ (3)

Assuming the system has reflecting boundaries at $x=-a$ and $x=a$, the probability current at these points should be zero. Hence,

$$ J(-a,t)=J(a,t)=0$$ 

To get the stationary distribution, the left hand side of equation (2) and hence $\frac{\partial J}{\partial x}$ should be zero, which means J should be constant independent of x and t. This in turn implies that p(x,t) has to be
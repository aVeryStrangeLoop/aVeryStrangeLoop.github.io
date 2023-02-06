# Brownian Particle in a fluctuating potential
**Author**: Bhaskar Kumawat

## Flat Potential over an infinite domain

In the absence of a potential gradient, the drift speed of the Brownian particle is zero and the Fokker-Planck equation for its probability distribution is given by,

$$\frac{\partial p(x,t)}{\partial t} = D \frac{\partial ^2p(x,t)}{\partial x^2}$$ (1)

Let us assume that the particle starts out at $x=0$, this implies that the probability distribution $p(x,0)$ is given by,

$$p(x,0)=\delta (x),\\ \text{The F.T is given by } p(k,0) = 1$$ (2)

Let $p(k,t)$ be the spatial Fourier-transform of $p(x,t)$ given by,

$$p(k,t)=\int_{-\infin}^{\infin}e^{-ikx}p(x,t)\;dx$$ (3)

Applying the F.T (3) to both sides of equation (1) gives,

$$\frac{\partial p(k,t)}{\partial t} = -Dk^2 p(k,t)$$ (4)

The general solution of  (4) is given by,

$$p(k,t)=p(k,0) \; e^{-Dk^2t} = e^{-Dk^2t}$$ (5)

Taking a reverse fourier transform gives,

$$p(x,t)=\frac{1}{2\pi} \int_{-\infin}^{\infin} e^{ikx-Dk^2t} dk$$ (6)

To solve (6), we need to complete the square in the exponent to give,

$$p(x,t) = \frac{1}{2\pi} e^{\left(\frac{ix}{2\sqrt{Dt}}\right)^2} \int_{-\infin}^{\infin} e^{-\left(k\sqrt{Dt}+\frac{ix}{2\sqrt{Dt}}\right)^2}$$
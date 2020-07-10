---
layout: default
published: true
---

[About](/)   |   [Research](/projects.html)   |    [Publications](/pubs.html)   |   [Personal](/personal.html)   |   [Open-Source](/prog.html)

## Open-source
This page lists the open-source programs I've worked on or am currently working on.

### Classical and Cellular Potts models (Python)
These two programs implement the classical Potts (a generalised version of the Ising model) and cellular Potts (extended spin areas) models under an easy, adaptable framework. 

[Classical Potts Repository link](https://github.com/aVeryStrangeLoop/potts_model)

[Cellular Potts Repository link](https://github.com/aVeryStrangeLoop/cellular_potts_model)

### OptAgentNet (Python)
OptAgentNet simulates a decentralised network of agents on a 2-Dimensional grid. These agents can perform tasks in context of an environmental "utility function" to generate fitness for the entire network. A genetic algorithm optimizes this network to find the optimal state given a utility function. These agents are also capable of communicating with each other and sharing the resources they obtain by performing tasks. (Written with [Preetham Venkatesh](https://prvenkatesh.wordpress.com))

[Repository link](https://github.com/aVeryStrangeLoop/opt-agent-net)

### OptAgentNet (Rust)
This is a Rust implementation of OptAgentNet. The aim is to use Rust's speed and safety features to make the the simulation times shorter. Also implements multithreading in order to execute all agent genomes in parallel. Quite possibly the first digital evolution simulation written in Rust.

[Repository link](https://github.com/aVeryStrangeLoop/optagentnet)



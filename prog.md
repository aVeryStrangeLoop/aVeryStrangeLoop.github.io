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
This program was written as a part of a project for the game theory course at IISc. It simulates a group of agents on a two dimensional grid. The bandits can execute a series of instructions to receive resources from the environment or share it with neighbours.  There is a global utility function that determines the utility of the agent based on its set of resources. In the project we showed that certain kinds of utility functions improve the extent of sharing when social welfare in the system is maximised. (Written with [Preetham Venkatesh](https://prvenkatesh.wordpress.com))

[Repository link](https://github.com/aVeryStrangeLoop/opt-agent-net)

### OptAgentNet (Rust, currently under development)
This is a Rust implementation of OptAgentNet. The aim is to use Rust's speed and safety features to make the the simulation times shorter. I also plan to implement multithreading in order to execute all agent genomes in parallel. Quite possibly the first digital evolution simulation written in Rust.

[Repository link](https://github.com/aVeryStrangeLoop/optagentnet)



---
layout: post
title: Internals of Digital Useless Machine I
image: /images/graph.png
---

# About

This machine is a system with rules and an organization. One can play the machine by poking it and seeing how it responds. Like many machines it will generate sound. A sound that will be altered by how you interact with it. It is similar to any musical instrument but instead of it being made out of wood or metal it is made from describing to a computer, by programming, what you have in mind. Also like any instrument, this machine has its own aesthetic. The coating and wood finish on a guitar is similar to the shaders, the colours and the representation that I choose for this machine.

# The internals

The machine is made up of a network of connected nodes and a notion of time. The time is described by a metronome with a set beat per minute (96 bpm). All nodes are similar except 4 of them: there are two entry nodes (white) and two exit nodes (black). At each tick of the beat the two entry nodes are filled up with agents (up to 10) and the two exit nodes are emptied of their agents. At each beat the agents in the network travel through it. Similar to a water pipe system the agents flow from the entrance to the exit.

# Stabilization

At the beginning the network is empty and starts to be filled with agents. After a while the number of agents exiting and entering the network stabilizes; it's in a steady state. The number of agents on each node will converge to a stable value.

The degree of convergence of the network is used to express the mood of the machine. The more this value is equal to 1, the more the network is stabilizing: the machine is *bored*. The more this value is equal to 0, the machine is *happy* and *active*. This influences the sound made by the machine.

# On making music

This was a the hard part as I didn't know anything about music theory. I learnt about scales, modes, chords and how synthesizers work. I created 3 synths that have distinctive sounds. At each tick the 3 synths produce a sound.

The number of agents entering the network defines the note played by the first synth. Similarly the number of agents going out of the network defines the note played by the second synth. I use the degree of convergence of the network to modulate the note played by the third synth. So at every tick a 3 note chord is played.

I feel totally useless to continue...

# References

[three.js](http://threejs.org/
): A WebGL toolkit used to render the  machine on the screen.

[timbre.js](http://mohayonao.github.io/timbre.js/
): A JavaScript Library for Objective Sound Programming. Used to program and generate the sounds made by the machine.

[Markov chains](http://en.wikipedia.org/wiki/Markov_chain)

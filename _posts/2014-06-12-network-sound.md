---
layout: post
title: Internals of Digital Useless Machine I
image: /images/graph.png
---

# About

This machine is a system with rules and an organization. One can play the machine by poking it and see how it respond. Like many machine it will generate sound. A sound that will be altered by how you interact with it. It is similar to any musical instrument but instead of it being made out of wood or metal its made from describing to a computer, by programming, what you have in mind. Also like an instrument the machine can have an esthetic. The coating and wood finish on a guitar is similar to the shaders, the colors and the representation that I choose for that machine.

# The internals

The machine is made up of a network of connected node and a notion of time. The time is described by a metronome with a set beat per minute (96 bpm). All nodes are similar except 4 of them: there is two entry nodes (white) and two exit nodes (black). At each tick of the beat the two entry nodes are fill up with agent (up to 10) and the two exit nodes are emptied of their agent. At each beat the agent in the network travel through it. Similar to a water pipe system the agent flow from the entrance to the exit. Each node (or vertex) can hold up to 10 agent. Links (or edge) can see up to 100 agent travelling through them.

# Stabilization

At the beginning the network is empty and starts to be feededd with agent. They quickly fill up the network. After a while the number of agent exiting and entering the network stabilize itself; it's in a steady state. The number of agent on each node will be similar at each clock tick: the network converge to a stable value.

The degree of convergence is used to express the mood of the machine. The more this value is equal to 1 and more the network is stabilizing: the machine is *bored*. The more this value is equal to 0: the machine is *happy* and *active*. This influence the sound made by the machine.`

# On making music

This was a the hard part as I didn't know anything about music theory. I learnt about scales, modes, chords and how synthetizer works.

There is one synth used to genrate a piano like timbre. At each tick a note is played with an octave proportional to the quantity of agent entering the network.

# How was it made? 

## Graph

This machine is based on Markov chains. It's a fascinating tool and one can read more about it [here](http://en.wikipedia.org/wiki/Markov_chain).

A graph or a network can be represented as a matrix. A vertex is one node in the network. An edge is a link between two node. A line of this matrix represent the edges entering a node. A column represent the edges going out of this node. 

## Making agent move in the network 

Now we want to simulate the travel of elements in this network. We define an "agent" vector: an array where each element represent the number of agent on each vertex. So lets say there is 10 agent in the first node of our network, the initial value of the agent vector is then:

[10, 0, 0, 0]

So we got the agent vector representing the amount of things on each vertex and we got the matrix of the graph representing of each vertex are connected.

Lets multiply the vector with the matrix! We got a new vector; a new agent vector.

# References

[three.js](http://threejs.org/
): A WebGL toolkit used to render the  machine on the screen.

[timbre.js](http://mohayonao.github.io/timbre.js/
): A JavaScript Library for Objective Sound Programming. Used to program and generate the sounds made by the machine. 

---
layout: post
title: Sunny day, 4 PM
image: /images/icecream.jpg
---

### Which is more important: the artefact or the process?

Usually an artist iterates on an idea, produces artworks and then picks one or
more that they are happy with. Those will become icons of their process. When
looking at those icons the spectators understand only a fraction of the artist’s
intent and won’t necessarily learn about the process.

> *The system is the work of art; the visual work of art is the proof of the system* — Sol Lewitt

The spectator’s own interpration of the work is as important as the artist’s
intent. They decide what is good or bad.

> *All in all, the creative act is not performed by the artist alone; the spectator brings the work in contact with the external world by deciphering and interpreting its inner qualifications and thus adds his contribution to the creative act.* — Marcel Duchamp

What if I could encode the process I had in mind and let a machine produce my
artwork? The resulting program is the imprint of my thinking. I provide the
parameters and constraints. It defines the scope of what happens on the canvas. 

The program would also get inputs from the viewers. This feedback loop fills the
missing link between the intention of the artist (encoded in the program) and
the interpretation of the spectator.

*Sunny day, 4 PM* is a small experiment that tests these ideas.

### How does an ice cream make you feel?

I’m a three-minute-a-day artist. Every day I will go on Twitter and get the most
favourited posts from my account. From those I will create a new image. Learning
day by day — a new image posted every day at 4 PM. Creating our perfect ice
cream.

I’m interested in knowing how an ice cream makes you feel. What are its
dynamics? How do colors and shapes make it an ice cream?

The program uses a parameterised circle, rectangle and triangle. It learns and
evolves their placement, size, rotation and color by using a genetic algorithm.
Using basic shapes help us study the relationship between the ice cream’s
components: cone, scoop and chocolate flake.

<div class="col col-12">
  <img src="/images/icecream.jpg" class="block m3 mx-auto align-middle" width="400px"/>
</div>

The first installment is fully random. The program then uses previous ice creams
to create a new one each day. It assumes that the more Twitter favourites an ice
cream gets, the more its characteristics are important. It picks parents. The
first parent is the ice cream with the most favourites. The second parent is
randomly picked from all the ice creams that received fvourites. The features of
the parents are then mixed at random (genes crossover) to create the new ice
cream DNA. Each shape has a random color picked from a subset of all possible
colors. These subsets evolve over generations.

There we go, the program knows my intention and how to realize it: creating a
visual work of art.

<a class="twitter-timeline" data-width="400" data-height="800"
data-theme="light" href="https://twitter.com/sunnyday4pm">Tweets by
sunnyday4pm</a>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

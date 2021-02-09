---
layout: post
title: Frameworks, patterns and recipes
image: /images/pattern.jpg
---

A framework: *a conceptual structure.* In software, a framework brings a
foundation and a set of conventions on which you lay your work. It formalises an
abstract school of thought. There are many frameworks you can use to solve the
same problem. They come and go according to fashion.

A circle function from Processing: `circle(x, y, 100)`.

A pattern: *an authoritative model given to be imitated.* Patterns are similar
to recipes but more abstract. They are like grandmother recipes that come with
no measurements or steps. Vague, a collection of rules of thumb. In software
engineering and UX, we have the famous Design Patterns.

A circle is described by its coordinates in the Cartesian space and its
diameter.

A recipe: *a series of steps and instructions to follow to create something*. In
the kitchen, recipes we follow are often vague, unclear or in the wrong metric
system. We have to interpret and adapt. We do the same with code when following
a tutorial or copying and pasting from Stack Overflow. The execution of a recipe
is influenced by context, leaving room for organic explorations.

How to draw a circle? `r` is the radius of the circle. For every degree theta
between 0-360, compute `x = r * cosine(theta)`, `y = r * sine(theta)`. Plot
every point described by `x` and `y`. Add any number to every pair of `x` and
`y` to translate the circle.

Next time you’re starting a project, think about the level on which you are
operating. If you’re building a new framework, consider how people will develop
design patterns on top of it, and how users will create and share their recipes.

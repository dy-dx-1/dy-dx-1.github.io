---
title: "Custom Rover Wheels"
description: "Redesigning PolyOrbite's 3D-printed TPU rover wheels with a two-layer damping system and numerically optimized treads."
category: "PolyOrbite"
tags:
  - Mechanical Design
  - CAD
  - FEA
  - Python
  - 3D Printing
  - Robotics
draft: true
featured: false
order: 5
cover: "../../assets/projects/rover-wheels/esa_best.jpg"
gallery:
  - "../../assets/projects/rover-wheels/esa_best.jpg"
  - "../../assets/projects/rover-wheels/esa_global.jpg"
  - "../../assets/projects/rover-wheels/initial_version.jpg"
  - "../../assets/projects/rover-wheels/middle_age.jpg"
  - "../../assets/projects/rover-wheels/middle_age_on_rover.jpg"
---

## Overview

Over three years with the PolyOrbite rover team, I worked on several generations of the rover's 3D-printed wheels, first as a propulsion team member, then as structure technical lead, and finally as the mechanical consultant leading the redesign. The wheels are printed in 95A TPU and have to deliver traction on loose, rocky terrain while protecting the rims and the rover from impacts.

## Engineering Highlights

- Designed a two-layer damping system: a soft outer layer that deforms over rocks for traction, and a stiffer inner layer sized to fully compress only under an impact roughly equivalent to the rover falling from 0.4 m.
- Tuned both layers through FEA and repeated tests on 3D-printed prototypes, and checked the damping behaviour with hand energy calculations before installing the wheels on the rover.
- Optimized the tread shape numerically: I modelled a tread moving through a granular medium with free-body diagrams, then wrote a Python program that generated thousands of candidate profiles and kept the one that maximized traction.
- Led the latest redesign, which reduced print time by 27% and wheel mass by 33% while increasing traction.

## Outcome

The wheels have been used on the team's rovers in competition, including tests on simulated lunar terrain.

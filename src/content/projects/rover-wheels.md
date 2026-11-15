---
title: "Custom Rover Wheels"
description: "Four generations of airless, 3D-printed TPU rover wheels with a two-layer damping system and numerically optimized treads."
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
  - image: "../../assets/projects/rover-wheels/esa_best.jpg"
    caption: "Close-up of the final wheel design at the ESA LUNA facility."
  - image: "../../assets/projects/rover-wheels/esa_global.jpg"
    caption: "The rover at the ESA LUNA facility."
  - image: "../../assets/projects/rover-wheels/final_cad.png"
    caption: "Final CAD model of the wheels in 2025."
  - image: "../../assets/projects/rover-wheels/slicer_full_wheel.png"
    caption: "A slicer view of the 2025 wheels."
  - image: "../../assets/projects/rover-wheels/slicer_support_layer.png"
    caption: "1 layer grid with mesh modifiers to enable printing of the lower density mid-section."
  - video: "../../assets/projects/rover-wheels/slicer_vid.mp4"
    caption: "Video of the slicing of a 2024 wheel, showcasing the 1 layer support layers and the middle lower density infill."
  - image: "../../assets/projects/rover-wheels/middle_age_on_rover.jpg"
    caption: "The rover at the 2023 Canadian International Rover Challenge"
  - image: "../../assets/projects/rover-wheels/2023_def.jpg"
    caption: "The 2023 wheels showing the expected first stage deformation while going over obstacles, however it was anisotropic."
  - image: "../../assets/projects/rover-wheels/splines_schock.png"
    caption: "Early notes from the initial design showing the intended spline-spring behavior under a moderate shock test."
  - image: "../../assets/projects/rover-wheels/tread_optimization_plot.png"
    caption: "Plot from the 2024 sensitivity analysis."
  - image: "../../assets/projects/rover-wheels/tread_calcs.jpg"
    caption: "Genesis of the project; defining traction in loose soil as a piecewise function of the rotation angle and the tread geometry."
---

## Overview

I designed the airless, 3D-printed wheels of PolyOrbite's rovers and iterated on them every year from 2021 to 2025. The wheels are printed in 95A TPU and have to grip loose and rocky terrain while protecting the rims and the rover from impacts. The design, analysis, testing, and documentation are my own work.

## Engineering Highlights

- **Two-layer damping.** A soft outer layer deforms around rocks for traction, while a stiffer inner layer of spline-shaped springs only collapses fully under major impacts (roughly the rover dropping from 0.5 m). I tuned the inner layer by spline thickness, using hand energy calculations and drop tests on printed wheel sections, with final validations and adjustments on the rover (wheel sections were not entirely representative as they lack the internal pull that a closed circle adds).
- **Numerically optimized treads.** From free-body diagrams of a tread entering, pushing through, and leaving loose soil, I derived a piecewise traction function, then wrote a Python script that searched every combination of trapezoidal tread dimensions for the highest average traction. I settled on 18 treads as a compromise between loose and hard ground.
- **Questioning my own assumptions.** A year later I ran a sensitivity study on the model's main assumption; the ratio between the two contact forces on a tread. It turned out to be more important than I assumed, so I re-estimated it from the rover's weight and motor torque and updated the tread dimensions.
- **Fixing what competitions revealed.** The grid infill of the outer layer responded differently depending on load direction, so I moved to gyroid infill for an isotropic response at lower mass. I straightened the treads to cut the load on the suspension during pivot turns, and softened the inner layer after noticing that TPU stiffens with age.
- **Slotted final design.** Slots around the circumference turn each tread into an independent platform that tilts to match rocks and steps. The mid-section of the wheel uses a lighter infill, which I made printable with slicer modifier meshes and one-layer support grids. The result weighs roughly 500g and prints in about 10h, for comparison, the original wheels weighed 980g and printed in 36h. 

## Outcome

The wheels survived every competition season with no shock-related failure on the rover, even after major drops, and the rover climbed steeper slopes each year. The first optimized treads were used at the Canadian Rover Challenge in 2023. In October 2025 the latest wheels drove on simulated lunar regolith at ESA's LUNA facility, during a collaboration with Polytechnique Montréal's MIST Lab and Astrolith. The team never built a test bench to validate the traction model, so I treat it as a principled starting point that field results then supported.

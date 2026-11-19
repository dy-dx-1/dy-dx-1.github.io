---
title: "Lattice Boltzmann Flow Simulation"
description: "Extended a MATLAB lattice Boltzmann solver from a lid-driven cavity to turbulent 2D flow around a cylinder, then validated it against the literature from Re = 1 to 10,000."
category: "Course Project"
year: "2024"
tags:
  - CFD
  - Lattice Boltzmann
  - MATLAB
  - Python
  - Numerical Methods
  - Fluid Dynamics
draft: false
featured: false
order: 7
cover: "../../assets/projects/lbm-cylinder/streamlines_re3000.png"
gallery:
  - video: "../../assets/projects/lbm-cylinder/velocity_re3000.mp4"
    poster: "../../assets/projects/lbm-cylinder/velocity_re3000_poster.jpg"
    caption: "Velocity field at Re = 3000, showing the von Kármán vortex street forming behind the cylinder."
  - image: "../../assets/projects/lbm-cylinder/streamlines_re3000.png"
    caption: "Velocity magnitude (normalized by inlet velocity) with streamlines at Re = 3000."
  - video: "../../assets/projects/lbm-cylinder/pressure_re3000.mp4"
    poster: "../../assets/projects/lbm-cylinder/pressure_re3000_poster.jpg"
    caption: "Pressure field with contour lines at Re = 3000. Vortices show up as local low-pressure cores."
  - video: "../../assets/projects/lbm-cylinder/square_re3000.mp4"
    poster: "../../assets/projects/lbm-cylinder/square_re3000_poster.jpg"
    caption: "The same solver with a square obstacle at Re = 3000."
  - image: "../../assets/projects/lbm-cylinder/vectors_re3000.png"
    caption: "Velocity field with overlaid vector field at Re = 3000."
  - image: "../../assets/projects/lbm-cylinder/drag_vs_re.png"
    caption: "Mean simulated drag coefficient across 29 Reynolds numbers, compared against reference data during validation."
  - image: "../../assets/projects/lbm-cylinder/lift_vs_re.png"
    caption: "Mean simulated lift coefficient versus Reynolds number. Values at high Re are unreliable because of large oscillation amplitudes."
  - image: "../../assets/projects/lbm-cylinder/cavity_re100.jpg"
    caption: "Starting point: the original lid-driven cavity case at Re = 100, first validated against Ghia et al. (1982)."
---

## Overview

For my third-year integrative project (MEC3900), Dr. Sami Ammar asked for an educational MATLAB tool that simulates turbulent flow around airfoils with the lattice Boltzmann method (LBM). Starting from an [existing open-source D2Q9 solver](https://github.com/rlee32/lbm_matlab) for a lid-driven cavity, I adapted and extended it to model flow through a channel around a circular or square cylinder, as a foundation for future airfoil work. The method was new to me, so the project started with learning LBM from the literature, mainly Krüger et al.'s textbook.

## Engineering Highlights

- **Validated the starting point first.** Before changing the physics, I checked the cavity solver against Ghia et al.'s benchmark data from Re = 100 to 10,000. Getting acceptable errors (under 15% at most points) required reworking how parameters were specified: imposing the Reynolds number and relaxation time τ directly instead of physical properties and time step, which also made it much easier to find stable settings.
- **New boundary conditions for high Reynolds numbers.** I replaced the original Zou-He inlet, which the literature reports introduces spurious high-wavenumber noise at high Re, with a halfway bounce-back velocity inlet, an anti-bounce-back pressure outlet with extrapolated outlet velocity, and no-slip bounce-back on the walls and obstacle.
- **Aerodynamic coefficients.** I implemented drag and lift through the momentum exchange method, and the pressure coefficient from density along the cylinder surface. A Python script post-processes the logged values.
- **96% faster.** Using MATLAB's profiler, I optimized the numerical loop and visualization, cutting a reference simulation from 93.3 s to 3.8 s.
- **Usable as a teaching tool.** All physical and visualization options are grouped at the top of the script (Reynolds number, τ, domain size and ratio, obstacle shape and size, velocity/pressure fields, streamlines, vectors), and the code was split into commented modules. I also added a square obstacle as an alternative to the circular cylinder.

## Outcome

I ran a validation campaign over 29 Reynolds numbers from 1 to 10,000, comparing velocity fields, pressure fields, and drag, lift, and pressure coefficients against published data. The solver reproduces the qualitative flow behaviour, including vortex shedding, but with a systematic bias: the flow behaves as if at a lower Reynolds number (shedding appears near Re = 500 instead of ~50), and the coefficients miss the 5% accuracy target. I therefore recommended the code for educational visualization only, and identified the outlet pressure condition and the staircase approximation of the cylinder wall as the most likely sources of error.

Source code: [github.com/dy-dx-1/lbm_matlab](https://github.com/dy-dx-1/lbm_matlab)

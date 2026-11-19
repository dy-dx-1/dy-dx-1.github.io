---
title: "Nonlinear Vibration Analysis Interface"
description: "A Python desktop interface for exploring the nonlinear dynamics of blade-tip / casing contact in turbofan engines."
year: "2022-2023"
category: "Undergraduate Research"
tags:
  - Python
  - PyQt6
  - NumPy
  - Matplotlib
  - Nonlinear Dynamics
  - Data Visualization
draft: false
featured: false
order: 5
cover: "../../assets/projects/turbofan-vibration/main.png"
gallery:
  - video: "../../assets/projects/turbofan-vibration/interface_tour.mp4"
    caption: "General tour of the interface."
  - image: "../../assets/projects/turbofan-vibration/main.png"
    caption: "Main page - temporal/frequency analysis."
  - image: "../../assets/projects/turbofan-vibration/stab.png"
    caption: "Stability analysis page."
  - image: "../../assets/projects/turbofan-vibration/harm.png"
    caption: "2D and 3D harmonics page."
  - image: "../../assets/projects/turbofan-vibration/modal.png"
    caption: "3D modal contributions page."
  - image: "../../assets/projects/turbofan-vibration/fourier.png"
    caption: "Fourier truncation error page."
---

## Overview

As a part-time UPIR research intern at LAVA, Polytechnique Montréal's vibration and acoustics lab, I spent an academic year alongside my mechanical engineering degree building the analysis interface for the lab's research on blade-tip / casing contact in turbofan engines. The lab's solver computes harmonic balance results; my interface lets researchers explore them interactively.

## Engineering Highlights

- Rewrote an existing PyQt5 prototype from scratch in PyQt6 with Qt Designer and an object-oriented architecture, so new analysis views could be added without touching the rest of the code.
- Added a linked, live view: selecting a solution on the frequency response curve instantly updates its time response, contact force, and harmonic content.
- Extended the tool with tabs for stability analysis (Floquet exponents and bifurcation detection), harmonics, modal contributions, and Fourier truncation error, plus figure export to LaTeX/TikZ.
- Used Matplotlib blitting and reworked data handling so interactive updates went from several seconds (with frequent crashes) to near-instant.
- Documented the code on the lab's GitLab so future students could maintain and extend it.

## Outcome

My supervisor and the lab director were very satisfied with the tool, I was later invited back to join the lab as a master's student. The project gave me hands-on experience in vibration analysis, scientific data visualization, and object-oriented design in Python.

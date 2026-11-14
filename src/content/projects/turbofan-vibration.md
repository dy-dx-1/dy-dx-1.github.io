---
title: "Turbofan Vibration Analysis"
description: "A Python desktop interface for exploring nonlinear vibration results from blade-tip / casing contact simulations in aircraft engines."
category: "Research Internship"
tags:
  - Python
  - PyQt6
  - NumPy
  - Matplotlib
  - Nonlinear Dynamics
  - Data Visualization
draft: true
featured: false
order: 3
cover: "../../assets/projects/turbofan-vibration/gui_global.jpg"
gallery:
  - "../../assets/projects/turbofan-vibration/gui_global.jpg"
  - "../../assets/projects/turbofan-vibration/gui_freq_response.jpg"
  - "../../assets/projects/turbofan-vibration/gui_modal.jpg"
---

## Overview

During an eight-month research internship at LAVA (Laboratoire d'Analyse Vibratoire et Acoustique, Polytechnique Montréal), I developed a Python desktop application for analyzing nonlinear dynamic systems, specifically the contact between blade tips and the casing in aircraft engines. The tool turns large sets of harmonic balance simulation results into interactive plots researchers can explore.

## Engineering Highlights

- Built the interface in Python with PyQt6, NumPy, and Matplotlib, using an object-oriented structure so each analysis view could be developed and extended separately.
- Linked the nonlinear frequency response curve to time-domain and harmonic views: selecting a solution on the curve updates its periodic response, contact force, and harmonic content.
- Displayed stability along the response branches and marked detected bifurcations (limit, branch, Neimark–Sacker, and period-doubling points).
- Added dedicated views for modal contributions, harmonic analysis, and Fourier truncation error.
- Optimized rendering and data handling so the interface stayed responsive on large, complex result sets.

## Outcome

TODO: who used the tool after the internship, and what it enabled.

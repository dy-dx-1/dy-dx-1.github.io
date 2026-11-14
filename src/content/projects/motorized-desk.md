---
title: "Motorized Standing Desk"
description: "Retrofitting a hand-cranked standing desk with a 3D-printed gear and belt drive, a DC motor, and Arduino-based touch control."
category: "Personal Project"
tags:
  - Mechanical Design
  - CAD
  - FEA
  - 3D Printing
  - Arduino
  - Electronics
draft: true
featured: false
order: 4
cover: "../../assets/projects/motorized-desk/cover.jpg"
gallery:
  - "../../assets/projects/motorized-desk/global.jpg"
  - video: "/images/motorized-desk/run_vertical.mp4"
  - "../../assets/projects/motorized-desk/elec_pic.png"
  - video: "/images/motorized-desk/full_assy.mp4"
  - video: "/images/motorized-desk/motor_assy.mp4"
  - "../../assets/projects/motorized-desk/gear-ratio-calcs.png"
---

## Overview

Designed and built a custom drive system that motorizes my hand-cranked standing desk. I managed and executed the full project, from load measurements and drivetrain sizing to CAD, 3D printing, electronics, and firmware.

## Engineering Highlights

- Measured the crank force at the 127 mm handle (about 1.1–1.7 kg in operation, up to 2 kg to break free) and derived the torque the motor has to deliver.
- Sized a 9:1 reduction (16- and 144-tooth spur gears, 1.125 safety factor) to balance cost, lift time, and current draw. The reduction lets an inexpensive off-the-shelf 12 V worm-gear motor do the job.
- Designed a 3D-printed mount with a screw belt tensioner and a custom spur-to-HTD compound gear, checked with FEA. I identified likely failure modes up front and reinforced them, and kept the parts modular so worn pieces are easy to replace. I chose PLA over PETG for its stiffness, since the room has no thermal constraints.
- Programmed the control logic on an Arduino Nano, including homing, state-aware safety checks, and filtering of noisy sensor input.
- Iterated through physical testing: switched from GT2 to HTD-5M belts after slippage, replaced an L298N driver with a MOSFET-based BTS7960 to fix voltage drop, and swapped a knock sensor for a capacitive touch sensor after power-supply noise caused false triggers.

## Outcome

I use it daily. The desk lowers in about 1 min 45 s and raises in about 2 minutes, roughly the length of a short break. The analytical prediction was 1 min 27 s, and the gap on the way up is most likely the budget motor falling short of its rated speed curve. The final build uses about $120 CAD of hardware, a fraction of the price of a new electric desk frame. Its main drawback is noise from the large printed gear, a fair trade-off for the cost.

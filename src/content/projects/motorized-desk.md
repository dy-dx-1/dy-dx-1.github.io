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
gallery:
  - "../../assets/projects/motorized-desk/global.jpg"
  - "../../assets/projects/motorized-desk/elec_pic.png"
  - "../../assets/projects/motorized-desk/compound-gear-fea.png"
  - "../../assets/projects/motorized-desk/gear-ratio-calcs.png"
  - video: "/images/motorized-desk/full_assy.mp4"
  - video: "/images/motorized-desk/motor_assy.mp4"
  - video: "/images/motorized-desk/run_vertical.mp4"
---

## Overview

Designed and built a bolt-on drive system that motorizes my hand-cranked standing desk. I owned the full project, from load measurements and drivetrain sizing to CAD, 3D printing, electronics, and firmware.

## Engineering Highlights

- Measured the crank force at the 127 mm handle (about 1.1–1.7 kg in operation, up to 2 kg to break free) and derived the torque the motor has to deliver.
- Sized a 9:1 reduction (16- and 144-tooth spur gears, 1.125 safety factor) so an off-the-shelf 12 V worm-gear motor could be used. I relaxed the lift-time target from 15 s to about 2 minutes to stay within a hobby budget and a reasonable power draw.
- Designed a 3D-printed sliding baseplate with a screw tensioner, ran FEA on the lightweight compound gear, and reviewed likely failure modes before the final print.
- Iterated through physical testing: switched from GT2 to HTD-5M belts after slippage, replaced an L298N driver with a MOSFET-based BTS7960 to fix voltage drop, and swapped a knock sensor for a capacitive touch sensor after power-supply noise caused false triggers.

## Outcome

The desk raises in about 2 minutes and lowers in about 1 min 45 s, against a predicted 87 s. It runs from a wall supply and an Arduino Nano, controlled by a touch sensor, with limit switches stopping the motor.

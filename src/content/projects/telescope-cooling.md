---
title: "Telescope Cooling System"
description: "A custom fan and monitoring system designed to improve the thermal performance of a Dobsonian telescope."
category: "Personal Project"
year: "2025"
tags:
  - CAD
  - 3D Printing
  - Arduino
  - Electronics
draft: true
featured: false
order: 8
gallery:
  - image: "../../assets/projects/telescope-cooling/main.jpg"
    caption: "Using the project on a trip near Mont-Mégantic in 2026."
  - image: "../../assets/projects/telescope-cooling/inside.jpg"
    caption: "The finished product in 2025."
  - video: "../../assets/projects/telescope-cooling/animation.mp4"
    caption: "Mechanical assembly sequence. The left pocket was originally for a 9V battery, but the Arduino shares power with the fan in the end. Not portrayed: magnets on the scope, prototyping shield with electric components and wiring."
---

## Overview

Designed and built a removable cooling system for my Dobsonian telescope to accelerate primary mirror cooldown and reduce thermal currents that can degrade image quality.

## Engineering Highlights

- Designed a custom 3D-printed fan enclosure with magnetic mounting and an alignment procedure, allowing easy removal for telescope maintenance.
- Integrated an Arduino Uno, DHT11 temperature/humidity sensor, and LED display, with four operating modes for independent fan and display control.
- Measured electrical current consumption to size the battery for extended operation.
- Programmed custom fan LED patterns using exclusively red illumination to preserve night vision during observations.

## Outcome

The system is fully functional and has noticeably reduced telescope cooldown time, improving the observing experience. I've used it in temperatures as low as -26C. However, I discovered the limits of the DHT11 sensor as it's not super accurate. 

---
title: "in the digital shadow: An Embodied Debrief"
subtitle: "Final Documentation"
author: "Viacheslav (Slava) Romanov"
program: "Digital Media Bremen / HfK Bremen"
year: "2026"
supervisors: "Dennis P. Paul; Ralf Baecker"
project_page: "https://www.slavaromanov.art/2026/in-the-digital-shadow"
umbra_page: "https://www.slavaromanov.art/2025/umbra"
repository: "https://github.com/slavaromanov/inthedigitalshadow"
thesis_pdf: "../../romanov_in_the_digital_shadow.pdf"
video_documentation: "https://filedn.com/lGT3vQOeVHQFjjI0lPsYmHS/website_slavaromanov_media/small_slavaromanov_in_the_digital_shadow_teaser.mp4"
---

# in the digital shadow: An Embodied Debrief

*in the digital shadow: An Embodied Debrief* is a practice-based research project and installation developed out of the production process of *umbra: In the Digital Shadow*. It rereads that process through accumulated traces and remnants: files, schedules, budgets, chat histories, self-tracking records, notes, physical leftovers, and the residual pressure that remained after the project had formally ended.

The work asks how creative production can be understood once attention shifts away from finished outcomes and toward coordination, delegation, accumulation, and overload. The analytical material extends well beyond conventional documentation. It includes project remnants, operational traces, digital residue, and material evidence that stayed attached to the project after its completion.

## Project Overview

The project combines research, data interpretation, and installation design. Its central method, *Embodied Debrief*, approaches the project retrospectively. Production is reread through residues and reconstructed as a dynamic system of growing traces, uneven resource distribution, distributed agency, and delayed aftereffects.

The reflective base of the project is *umbra: In the Digital Shadow*, a collaborative audiovisual performance developed in Bremen in 2025 together with Chi Him Chik. That production provides the temporal frame, the collaborative setting, the technical environment, and much of the residual material that is reread here through traces, diagrams, notes, and installation logic. In the sections that follow, `the project` refers to that performance and its afterimage.

The installation translates this logic into a spatial experience. Visitors move through an environment where traces are captured, circulated, intensified, and partially released. The work stages project memory as an unstable, accumulating, and overloaded condition.

## Research Frame

The research is organized through four operational modes:

- `Collect`
- `Allocate`
- `Delegate`
- `Overload`

These four modes were selected as working analytical lenses for rereading the same project. Together they make it possible to follow accumulation, distribution, externalization, and limit conditions across one shared production process.

They are grounded in a speculative reading of lived production experience and do not claim to form a closed or exhaustive taxonomy of creative work.

### Collect

`Collect` reads the accumulation of project mass across several layers at once: digital files, communication traces, spending, material acquisitions, and shared documentation. One of the central observations is that project growth increases logistical, cognitive, and affective weight alongside possibility.

The corresponding figure combines surviving folder chronology, `.toe` save density, filtered message layers, budget-derived material counts, and observed FigJam revision activity.

### Allocate

`Allocate` reads how time, money, attention, and technical capacity were distributed under scarcity. Schedules, budgets, and event markers show production as a process of continual reassignment.

The allocation figure is assembled from a recognized project schedule, a structured budget table, and a recovered project timeline. Red Marks formed an important self-reflective layer during production, especially across the densest weeks of work.

### Delegate

`Delegate` studies how work, uncertainty, revision, and responsibility move across humans, AI systems, software, and infrastructure. Here the project focuses on requests, responses, follow-up actions, and the differing roles assigned to human and machine counterparts.

The delegate figures reduce private annotated communication corpora into public-safe comparison tables. Human-directed requests concentrate strongly in coordination and planning, while AI-directed requests are distributed more heavily across analysis, coding, writing, and technical setup.

### Overload

`Overload` reads the point where accumulated pressure exceeds workable capacity and becomes legible through chronology, notes, self-tracking, repeated repair, and recovery cycles. Physiological traces are treated as an embodied overlay aligned to reconstructed project phases.

The overload figures were built by aligning fitness-tracking summaries to a separately recovered project chronology and event frame. The phases were defined through chronology and interpretive framing first; physiological traces were aggregated against that scaffold afterward.

## Installation

The installation translates the analytical logic of the thesis into a visitor-facing environment. It performs the project's internal dynamics spatially.

The installation is a self-running system that embodies the debrief through its own operational behavior. It gathers physical and digital remnants of the project, reworks elements of its visual and material language, and translates the four production modes into an interactive environment. The visitor enters an already active system that remembers, records, circulates, and modulates traces over time.

### Spatial Components

Its physical setup brings together several components:

- a `3 x 3 x 3 m` cube made of aluminium profiles with projection surfaces
- a Collection Chamber built around point-cloud capture and resonating metal sound input
- six light-sound objects made of aluminium profiles and stitched projection-fabric diffusers
- an Allocate Station for red-line interaction
- distributed projection, light, slot-based memory logic, and multichannel sound

### Collection Chamber

The Collection Chamber is the main capture environment of the installation. It includes:

- the large projection cube
- four-channel sound inside the cube
- three depth cameras (`Azure Kinect`)
- a resonating metal plate with two piezo microphones
- an audio input/output interface and mixing console for recording, processing, compression, delay, and direct monitoring

When a visitor enters the chamber, the system records presence through point-cloud traces and through sound captured from touch on the resonating metal plate. Short fragments are written into the system's memory and retained inside a slot logic that distributes them across visual and sonic components.

The chamber records more than entry. It captures brief embodied fragments and folds them back into the ongoing internal circulation of the installation.

### Light-Sound Objects

Six light-sound objects extend the chamber into a distributed memory field. Each object consists of aluminium profiles, sewn projection-fabric diffusers, one sound channel, and a DMX LED PAR light. Together they form a six-channel sound layer across the installation space and carry part of the system's state-based modulation.

### Allocate Station

The Allocate Station introduces a second mode of interaction. Paper, marker, and under-camera trigger logic connect gesture to memory allocation inside the system. A red line drawn by the visitor activates an additional allocation event, occupies a slot, and triggers a corresponding red visual pulse inside the installation logic.

Red Marks form an important static and documentary component of the installation. They condense occupied time into a visible trace and connect the exhibition experience back to the project's own self-observation practices.

The station also includes:

- a webcam-based recognition setup
- an OpenCV-based detection workflow
- an internal LED layer synchronized with the light-sound objects through an `ESP32`-controlled lighting component

### System Logic

Together these components produce a state logic in which waiting, circulation, capture, overload, and release remain in tension. The installation stores and replays traces, modulates sound and light by system state, and moves between quieter spatial behavior and more intensified noise-based conditions.

Different sonic layers correspond to different system conditions. The installation uses a spatial sound layer for ambient memory circulation, a noisier layer for heightened system pressure, and a separate reaction layer linked to Allocate activity.

Several internal concepts are central to that logic:

- `shadowDB`
- `slotDB`
- `Orchestrator`

These components organize how traces are stored, distributed, recalled, and transformed across system states. They connect the installation back to the analytical model developed in the thesis.

### Technical Architecture

The installation runs through three main computational roles:

- a main computer responsible for point-cloud recording, point-cloud display, system-state logic, and several visual representations of the system state
- a controlled computer responsible for sound recording, synchronized playback of fragments linked to point clouds, ten-channel sound distribution, and generative sound layers for `empty`, `idle`, `collecting`, `overload`, and `flush`
- a controlled computer responsible for Allocate Station input through webcam capture and OpenCV-based recognition

The visual layer uses two projectors across the large cube surfaces. The sound system uses one audio input/output interface for recording and ten-channel output.

For future exhibition contexts, the detailed technical stack and rider can be separated into a dedicated production document. In this documentation layer, the emphasis remains on the operational logic and the role of each module inside the installation.

## Figures And Media

This documentation layer does not need to reproduce the full analytical figure set from the thesis. A smaller selection is more useful here.

Recommended balance:

- `2-3` analytical figures from the research
- `3-5` installation or presentation images
- `1` key visual early in the document

The full analytical diagram set remains available through the thesis and the repository. In this document, figures should support the narrative flow rather than reproduce the entire research apparatus.

Good candidates for inclusion are:

- one `Collect` or `Allocate` figure
- one `Delegate` or `Overload` figure
- one image of Red Marks
- one or two installation views
- one presentation still

## Presentation

The final presentation brought together the research, the installation environment, and the documentary layer. The colloquium functioned as both an exhibition situation and a reflection on project memory. What became visible was the final system together with the density of the process that produced it.

Exhibition footage and installation stills provide the practical record of this layer. They document the spatial arrangement, visitor relation, technical atmosphere, and the way the installation translated project residue into public form.

## Reflection

One of the main conclusions of the project is that creative production leaves behind a much larger field of evidence than final outcomes usually suggest. Coordination labor, infrastructural friction, spending, delegation, and recovery all participate in the making of a project, yet often remain outside conventional documentation.

The project proposes a way of rereading those residues without flattening them into a single explanatory system. It treats traces as partial, situated, and uneven. In this sense, the installation and the thesis work together: one builds an environment of encounter, the other reconstructs the analytical frame through which that environment becomes legible.

The project also leaves open a productive question: how future creative work might be documented in ways that preserve achievements together with accumulation, strain, and distributed agency as constitutive parts of production.

The accompanying research repository extends that question toward reproducibility. It gathers methods, reduced datasets, diagrams, and technical notes so that trace-based reflection can be reused as a broader analytical approach to one's own project remnants and production data.

## Access

- Project page: [slavaromanov.art/2026/in-the-digital-shadow](https://www.slavaromanov.art/2026/in-the-digital-shadow)
- Umbra project page: [slavaromanov.art/2025/umbra](https://www.slavaromanov.art/2025/umbra)
- Public research repository: [inthedigitalshadow](https://github.com/slavaromanov/inthedigitalshadow)
- Thesis PDF in repository: [romanov_in_the_digital_shadow.pdf](../../romanov_in_the_digital_shadow.pdf)
- Video documentation: [small_slavaromanov_in_the_digital_shadow_teaser.mp4](https://filedn.com/lGT3vQOeVHQFjjI0lPsYmHS/website_slavaromanov_media/small_slavaromanov_in_the_digital_shadow_teaser.mp4)

Additional project, publication, and video links can be attached to this documentation package together with the final media selection.

## Credits

Supervisors:

- Dennis P. Paul
- Ralf Baecker

Photo credits:

- performance photographs by Jimi Liu
- installation photographs by Viacheslav (Slava) Romanov

Acknowledgements:

- Chi Him Chik
- Alex Reinig
- Leonard Spillner
- Juan Luque
- Lucy Savelyeva
- Jimi Liu
- Nilya Musaeva
- Ali Mukhametov
- Markus Walthert
- Patrick Peljhan
- Alena Romanova
- Urbanscreen GmbH & Co KG
- Zentrale Ausleihe
- Schwankhalle

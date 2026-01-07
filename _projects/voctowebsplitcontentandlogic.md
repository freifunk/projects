---
collaborating_projects:
  - freifunk
desc: "Migrate media.freifunk.net to the latest VocToWeb version with automated Docker deployment and customization overlay"
developers_involved:
  - andibraeu
difficulty: medium
size: "175 hours"
status: open
initiatives:
  - GSoC
  - GSoC 2026
issues:
  - "https://github.com/freifunk/voctoweb/issues/2"
markdown: voctoweb-split-content-and-logic.md
mentors:
- name: andibraeu
  contact:
    github: andibraeu
    email: "ab+gsoc2024@andi95.de"
    other_chat_options: ["https://matrix.to/#/@andibraeu:bau-ha.us"]
- name: christian-draeger
  contact:
    github: christian-draeger
    email: ""
    other_chat_options: []
name: "VocToWeb: Migration and Docker Deployment with Customizations"
requirements:
  - "Analyzing and coding"
  - "Docker, Docker-Compose"
  - "CI/CD, GitHub Actions"
  - "Ruby, HTML, JavaScript"
tags:
  - GSoC2026
  - docker
  - ruby
  - web
  - voctoweb
  - video
  - deployment
---

VocToWeb is the software behind [media.ccc.de](https://media.ccc.de) and is used for distributing video recordings of many events. We forked the repository years ago to set up our own video portal at [media.freifunk.net](https://media.freifunk.net).

## Motivation

We want to improve our deployment workflow and make it easier to stay up-to-date with upstream development:

* Our current setup is based on a fork, which makes it harder to incorporate new features and improvements from [voc/voctoweb](https://github.com/voc/voctoweb)
* We want to streamline the deployment process and reduce manual intervention
* Customizations (design, templates, code) should be managed separately from the upstream codebase to simplify future upgrades

## Project Goals

The goal of this project is to modernize our VocToWeb deployment with the following objectives:

1. **Migration**: Upgrade media.freifunk.net to the current VocToWeb version from upstream
2. **Customization System**: Develop a mechanism to manage our customizations (design, templates, minor code changes) separately, which get applied during build or deployment
3. **Docker Deployment**: Set up automated deployment using Docker-Compose without manual intervention
4. **CI/CD Pipeline**: Implement a GitHub Actions pipeline for automatic builds and deployments
5. **Documentation**: Create comprehensive documentation for future updates and maintenance

## Milestones

### Preparation/Bonding

* Set up a local VocToWeb installation using Docker (following upstream documentation)
* Study the VocToWeb codebase and understand its architecture
* Document all current customizations used on media.freifunk.net
* Analyze the differences between our fork and the current upstream version
* Create a migration plan

### Coding Period

* Perform the migration to the current VocToWeb version
* Develop a customization overlay mechanism (e.g., via Docker volume mounts, build-time file overrides, or a separate customization layer)
* Create a production-ready Docker-Compose setup for media.freifunk.net
* Implement CI/CD pipeline using GitHub Actions for automated builds and deployments
* Test the deployment process thoroughly
* Write documentation on:
  * How to update VocToWeb to newer upstream versions
  * How to develop and apply customizations
  * How the automated deployment works

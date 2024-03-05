---
collaborating_projects:
  - freifunk
desc: "Develop components to apply customizations to the default VocToWeb"
developers_involved:
  - andibraeu
difficulty: medium
size: "175 hours"
status: open
initiatives:
  - GSoC
  - GSoC2024
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
name: "VocToWeb: Install and apply customizations"
requirements:
  - "Analyzing and coding"
  - "refactoring, migrations"
  - "ruby, html, javascript"
tags:
  - GSoC2024
  - json
  - ruby
  - web
  - voctoweb
  - video
---

Voctoweb is the software behind media.ccc.de and used for distributing video recordings of a lot of events. We forked their repo to set up our own video portal, [media.freifunk.net](https://media.freifunk.net). As there was only one user of this software for years, content pages and templates are mixed with the business logic.

Goal of this project should be: We're able to set up a new instance of voctoweb and add our own contents, designs, templates and other customizations. When the projects is finished we have a document on how to get your own, independent and customized instance.

It may be hard to split the original project in a first step. But if we find a way to make it easy for others to customize the installation, that doesn't matter.

## Milestones

### Preparation/Bonding

* Install your own instance of voctoweb and try to understand how it works
* identify the components to be used for customizations

### Coding period

* merge upstream changes
* identify the general and the customizable parts
* find ways to apply the customizable parts to a default installation
* update media.freifunk.net, maybe use docker based components
* improve documentation on installing voctoweb
* add documentation on how to apply and develop customizable parts

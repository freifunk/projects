---
collaborating_projects:
  - freifunk
desc: "Update to latest libraries and versions, fix timezone issues"
developers_involved:
  - andibraeu
difficulty: medium
size: "90 hours"
status: completed
initiatives:
  - GSoC
  - GSoC 2025
issues:
  - https://github.com/freifunk/common.api.freifunk.net/issues/19
mentors:
- name: andibraeu
  contact:
    github: andibraeu
    email: "ab+gsoc2024@andi95.de"
    other_chat_options: ["https://matrix.to/#/@andibraeu:bau-ha.us"]
name: "Renovate freifunk ICS Collector"
requirements:
  - "Analyzing and coding"
  - "php"
  - "ics"
  - "ical"
tags:
  - GSoC2025
  - ical
  - web
---

Back in 2015 during GSoC we developed this [ICS Collector](https://github.com/freifunk/common.api.freifunk.net/tree/master/ics-collector) to merge multiple calendars from freifunk communities. The software is quite stable, but needs some updates and renovation, as calendars evolved, too.

The software should be adopted to latest versions of php and libraries used.

We also need to find a way to fix timezone issues we run into, when we want to use the merged calendar result. The API should be kept stable.

## Milestones

### Preparation/Bonding

* checkout the repository and try to understand how it works
* find possible library and dependency updates
* identify potential refactorings
* look for updated or new ical libraries

### Coding period

* update or replace libraries
* refactor code and add more tests
* add timezone to single events, if the source contains a timezone
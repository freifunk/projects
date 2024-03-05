---
name: Change SSID when servers are not accessible
desc: In larger installations there will be many routers at different parts of a building on different channels, and one these may not be able to reach to the project's servers, and consequently also not issue IP numbers.
  Users changing their location may interpret this as an instability of the Freifunk and not attempt to fix what may be a loose cable on their side.
  The routers should change their SSID to an indication that it needs help.
collaborating_projects:
- OpenWRT
- LibreMesh
developers_involved:
- none, yet
difficulty: easy
status: open
initiatives:
- GSoC 2024
issues:
- https://wiki.freifunk-franken.de/w/SSID_%C3%A4ndern_wenn_kein_Gateway_in_Range
size: 175 hours # choose between 90 hours, 175 hours and 350 hours
markdown: filename of your md file
mentors:
- name: Steffen Möller
  contact:
    github: smoe
requirements:
- Communication skills to discuss best implementation
- An overview on how modern UNIX works
- Talent to understand the current code base
tags:
- tag 1
- tag 2 
---

In larger installations there will be many routers at different parts of a building on different channels, and one these may not be able to reach to the project's servers, and consequently also not issue IP numbers.
Users changing their location may interpret this as an instability of the Freifunk and not attempt to fix what may be a loose cable on their side.
The routers should change their SSID to an indication that it needs help, so local organisers can find the issue earlier and error reports improve.
The meshing between routers should not be affected.

This project idea is not new, above shows a respective suggestion from the community. But yet no solution has been integrated with the regular Freifunk images.
The solution from 2016 may stimulate a better implementation. 

#### Milestones

##### GSOC COMMUNITY BONDING

* Conceptual work should be finished.
* The contributor have a repository, know how to work with the community.
* The applicant should know the community.

##### GSOC MIDTERM

* Everything listed here has to be reviewed and merged by midterm.
* No exceptions to that. Changing the goals is possible together with mentors.
* Yes, that includes tests and documentation.

##### GSOC FINAL

* Everything has to be reviewed and merged.
* Including tests and docs, again.

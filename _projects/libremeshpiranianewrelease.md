---
name: "Project Librimesh Pirania, new release."
desc: "This project, the description of this project, will be the development of a new release from Pirania sfor the new version of Librimesh based on OpenWRT 23."
collaborating_projects:
- Coolab
- LibreMesh
developers_involved:
- San
- Hiure
- Tania
- Luandro
difficulty: medium
status: open
initiatives:
- GSoC 2024
issues:
- https://github.com/libremesh/lime-packages/issues/942 
- https://github.com/libremesh/lime-packages/issues/936
- https://github.com/libremesh/lime-packages/issues/886
- https://github.com/libremesh/lime-packages/issues/327
- https://github.com/libremesh/lime-packages/issues/261
- https://github.com/libremesh/lime-packages/issues/76

size: 350 hours # choose between 90 hours, 175 hours and 350 hours
markdown: libremeshpiranianewrelease
mentors:
- name: Bruno Viana
  contact:
    github: brunoviana  # provide at least one contact option
    email: bruno@pobox.com
    other_chat_options:
    - link to matrix or similar
requirements:
- "Analyzing and coding"
- "Lua"
- "javascript"
tags:
- Libremesh
- Pirania
---

After the publication of the  [New Pirania API](https://github.com/libremesh/lime-packages/pull/893), a lot has been gained with Pirania in Libremesh.
Many communities could be used and even today they use it as a very important tool for the collection of funds, for the payment of the provider and sometimes even for people who work.
Everbody can manage the sistem with [Pirania UI](https://github.com/libremesh/lime-app/pull/329).
each router has access to the Captive Portal system and this makes it be distributed and extremely used in a community and of different types of governance. Pirania has diferent options of governance, this means that each community can understand the best use that it can make with the system and different cases of use.
but for it to be more complete it is important to raise the different ideas that have already been [raised by the community](https://github.com/libremesh/lime-packages/issues/76).
And after the latest versions of lime-packages, pirania is not included, mainly because the basis of pirania's operation is the iptbles rules contained in ./usr/bin/captive-portal. As iptables ends up creating a very large file, the new version of libremesh decided to migrate from iptables to nftables.
This and other changes need to be made to fit pirania into a new release.


#### Milestones

##### GSOC COMMUNITY BONDING

* Understanding open issues about pirania.
* Survey of all the ideas from the community that have not yet been contemplated about pirania.
* Understand with the community of the Librimesh in which point is the LimeApp, to planning the integration of the Pirania with the new LimeApp.
* Understand the integration of the Pirania with the Shared-State and to review the points that are open in this sense.

##### GSOC MIDTERM

* Create a clear and feasible plan of actions to be carried out within the indicated timeframe.
* develop a user prototype of the Librimesh in the new version
* Test this solution with the community test of the Librimesh
* Documentation.

##### GSOC FINAL

* review everything and present it to the libremesh community to more contributions.
* Documentation
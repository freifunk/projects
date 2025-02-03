---
name: "Simplify LibreMesh and get it closer to OpenWrt"
desc: "Replace some tools developed or just used in LibreMesh with the OpenWrt's counterpart, for stability and quality. Also, develop a light version of LibreMesh more suited for smaller communities."
requirements:
 - "Understanding of Linux system administration"
 - "Understanding of networking in Linux systems"
difficulty: "medium"
size: "350 hours"
status: open
issues:
 - https://github.com/libremesh/lime-packages/issues/294
 - https://github.com/libremesh/lime-packages/issues/581
 - https://github.com/libremesh/lime-packages/issues/596
 - https://github.com/libremesh/lime-packages/pull/631
 - https://github.com/libremesh/lime-packages/issues/468
mentors:
- name: Javier
  contact:
    github: javierbrk 
    email: javierbrk@gmail.com
initiatives:
 - GSoC
 - GSoC 2025
tags:
 - LibreMesg
 - Babel
 - VLAN
 - Batman-adv
collaborating_projects:
 - OpenWrt
 - LibreMesh
markdown: libremesh-simplify_and_get_closer_to_openwrt.md
---


#### Project objectives

LibreMesh is composed by a set of modules which configure OpenWrt.

Over the past few years, OpenWrt has improved massively, and some of the features developed within the LibreMesh modules have been created inside OpenWrt as well. So, the **first goal of this project is to migrate from LibreMesh's own solutions to the OpenWrt's ones**, in order to merge the efforts of the two communities. In some cases, it could be needed to add features to the OpenWrt softwares, and the feasibility of this will be evaluated on a per-case basis.

Also, the development of LibreMesh's modules is going on since more than 10 years with a joint effort from several network communities worldwide. Complexity built up and it is time to review it, for checking which code lines can now be spared. So, the **second goal of this project is to simplify LibreMesh modules**.

The communication with mentors and LibreMesh community is absolutely necessary for the success of the project. For this, the applicant will be required to write 3 blog posts, one at the beginning, one in the middle, and one at the end of the project, on [Freifunk's blog](https://blog.freifunk.net). Also, the applicant is expected to join the LibreMesh [mailing list and chat channel](https://libremesh.org/communication.html#mailing_lists), announce there the advancements and seek for feedback.

#### Identified actions

Some tasks have already been identified, and should be analyzed in the project. More tasks could be identified during the process.

###### Tasks for getting closer to OpenWrt (first goal)

**Replace deferrable-reboot with watchcat.** Within the José de la Quintana network community, several tools have been developed over the years. Between them, [deferrable-reboot](https://github.com/libremesh/lime-packages/tree/master/packages/deferrable-reboot) is a tool decreasing the need of maintenance of the network, simply rebooting the devices when they lose internet connectivity. This simple solution clearly will not fix real fundamental network issues, but will help in decreasing the annoyance caused by undetected and not-yet-fixed stability issues. Inside OpenWrt, a similar tool named [watchcat](https://openwrt.org/docs/guide-user/advanced/watchcat) has been created, and could be used for replacing deferrable-reboot.

**Replacing dnsmasq with odhcpcd.** LibreMesh is using [dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html) (also) as a DHCP server, while OpenWrt is using [odhcpcd](https://openwrt.org/docs/techref/odhcpd) by default. The migration towards odhcpcd involves checking whether odhcpcd has all the required features, understanding how to use them, and adapting LibreMesh to using them. A reference ticket with already some information can be seen here:
* ["Replace dnsmasq by odhcpd"](https://github.com/libremesh/lime-packages/issues/294)

###### Tasks for simplifying LibreMesh (second goal)

**Removing VLAN from Babel interfaces.** LibreMesh creates one VLAN interface on top of each physical interface specifically for [Babel](https://www.irif.fr/~jch/software/babel/) routing protocol. This is not needed, decreases the maximum transmission unit (MTU) and increases the complexity of LibreMesh. There are two relevant tickets with some information on this: 
* ["Lets remove unneded vlans from protocol interfaces"](https://github.com/libremesh/lime-packages/issues/581)
* ["Babeld without VLAN does not run on LAN ethernet ports"](https://github.com/libremesh/lime-packages/issues/596)
* ["Support Babeld without VLAN on ethernet interfaces inside br-lan"](https://github.com/libremesh/lime-packages/pull/631)

**Creating a layer2-only version of LibreMesh.** LibreMesh has been designed for scalability. For this, it includes a layer 2 routing protocol -[Batman-adv](https://www.open-mesh.org/projects/batman-adv/wiki/Wiki)- for managing local networks, together with a layer 3 routing protocol -[Babel](https://www.irif.fr/~jch/software/babel/)- for connecting local networks with each other. With this two-layers approach, enormous networks can be created, at the cost of high complexity. But in most cases, communities are smaller than a hundred nodes, and having a complex structure increase the access barrier for community members to debug issues in their network and develop new features. So, a layer2-only version of LibreMesh could be developed. A ticket with some relevant info can be found here:
* ["LibreMesh releases: only layer2+3 or both layer2+3 and layer2?"](https://github.com/libremesh/lime-packages/issues/468)

#### Milestones

##### GSOC COMMUNITY BONDING
**May 8 - June 1 Community Bonding Period**

The applicant is expected to:
* buy or gather somehow at least 3 LibreMesh-compatible routers and install a pre-compiled LibreMesh firmware image on them. At least one router model should have a switch that is DSA-supported within OpenWrt. At least one router should not be supported yet by DSA in OpenWrt.
* deploy [LibreMesh in a virtual environment](https://github.com/libremesh/lime-packages/pull/938/files#diff-bbac40d9e7464512614594a7c71e02cc4a28c0489fb6b0c38e846b8527a14ccb).
* compile a [LibreMesh firmware image using the BuildRoot method](https://libremesh.org/development.html#compiling_libremesh_from_source_code).

##### GSOC MIDTERM

**June 2 - July 14 First work period**

* Analyze the already identified actions and select the ones that seems feasible and easiest to implement.
* Start implementing them while testing the results on a real testing network composed by at least 3 routers.

**July 14 MID TERM EVALUATION**

##### GSOC FINAL

**July 14 - September 1 Second work period**

* Identify new actions that help with simplifying LibreMesh or to get it closer to OpenWrt. Write them down as [issues on the lime-packages repository](https://github.com/libremesh/lime-packages/issues).
* Complete the implementation of the selected actions and test various network configuration to make sure that the solution is solid.
* Propose the changes as one or more pull requests on the [lime-packages repository](https://github.com/libremesh/lime-packages/).

**September 1 FINAL EVALUATION**








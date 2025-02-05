---
name: OpenWrt integration with bird2 (UCI and LuCI) for BGP and Babel protocols
desc: Develop BIRD2 integration for OpenWrt, including support for Babel and BGP
collaborating_projects:
- OpenWrt
difficulty: high
status: open
initiatives:
- GSoC 2025
- GSoC
size: 350 hours
markdown: openwrt-integration_bird2_babel_bgp.md
mentors:
- name: Ilario
  contact:
    github: ilario
    email: ilario@sindominio.net
    other_chat_options:
    - ilario:matrix.guifi.net
- name: Bruno
  contact:
    github: brunovianna
    email: bruno@pobox.com
requirements:
- Previous experience with OpenWrt usage 
- Understanding of principles of mesh networking and routing protocols
tags:
- Babel
- BIRD2
- BGP 
---

#### Abstract

The project's proposal consists on developing OpenWrt's integration with bird2 to support the BGP and Babel routing protocols via UCI and LuCI in a way that is useful for community networks. The project aims to build upon previous work on bird1, which reached end of life in 2023, aiming to modernize and maintain interoperability for community networks. The plan outlines phased milestones to implement, test, and document bird2's integration, ensuring robust support for both routing protocols while preparing for future transitions, including bird3.

#### Context

Years ago, Eloi Carbó successfully participated in the [2014 edition of Google Summer of Code](https://www.google-melange.com/archive/gsoc/2014/orgs/freifunk/projects/eloicaso.html) to improve integration of Bird with OpenWrt. The code was retired on 2023 because bird1 [reached end of life in 31 Dec 2023](http://trubka.network.cz/pipermail/bird-users/2023-June/017008.html), see commit [fa136b7](https://github.com/openwrt/routing/commit/fa136b70dfb29595083353f168d3b6c4df1d8e6e).

Bird version 2 comes also with Babel mesh routing protocol support. The Babel Routing Protocol (RFC6126) is a loop-avoiding distance-vector routing protocol that is robust and efficient both in ordinary wired networks and in wireless mesh networks.

The overall idea of this project is to:

1. Upgrade from bird1 to bird2
2. Do some maintenance on existing code
3. Include Babel as a protocol and make it interact with BGP both via UCI and LUCI

##### Why is relevant to maintain and upgrade OpenWrt Bird bindings?

Bird is relevant software, it is used in production for BGP in large scale deployments (see [evidence1](https://ripe73.ripe.net/presentations/115-e-bru-20161026-RIPE73-scaling-bird-routeservers-final.pdf) and [evidence2](https://ripe60.ripe.net/presentations/Jasinska-_Ab_Using_Route_Servers.pdf) via [bird-users mailinglist](https://bird.network.cz/pipermail/bird-users/2017-May/011260.html)).

It is also appreciated by community networks. For example, the following internship report, used the `bird1-openwrt` package to enable community networks interoperability through [BGP](https://gitlab.com/g10h4ck/lime-guifi-interop-internship-report/-/blob/master/main.asciidoc). In fact, in guifi.net we have some nodes that use the `bird1-openwrt` package to make interoperability between the backbone network in BGP and the mesh BMX6 networks. In fact, in the following table, we show some relevant networks that work with BMX6 but are reachable from guifi.net through BGP's Bird:


| nodes | zone                                                 |
|  -    | -                                                    |
| 23    | [Sant Andreu](http://tomir.ac.upc.edu/qmpsa/index.php) |
| 41    | [Sants](http://tomir.ac.upc.edu/qmpsu/index.php)       |
| 12    | [Raval](http://tomir.ac.upc.edu/qmprv/index.php)       |
| 14    | [Vallcarca](http://tomir.ac.upc.edu/qmpvc/index.php)   |

: Number of mesh nodes in Barcelona per sub-zone as of 2025-02-01

##### Why is relevant to add Babel?

There are about a hundred nodes (see previous table and related links) running BMX6 in guifi.net, but BMX6 software is unmaintained (last code commit `d8869ec` is from [2018](https://github.com/bmx-routing/bmx6/commits/master)). In fact, it was removed from openwrt routing repository in 2023 (see [#963](https://github.com/openwrt/routing/issues/963)); that's why community networks are deciding migrations to BMX7 or Babel. BMX7 was unmaintained for long time, but looks like it came back in [2024](https://github.com/bmx-routing/bmx7/issues/61). We believe Babel provides a distance-vector easy to use alternative to BMX6 and BMX7. It has two maintained implementations: (1) lightweight and experimental Babeld; and (2) heavier but production-ready Babel inside the Bird software.

##### Relevant deployments of Babel

Babeld is what communities choose in general when they go for the Babel protocol, but comes with some problems: (1) the CLI is very limited, (2) it is not easy to debug on it and (3) it has no WebGUI at all ([this](https://github.com/openwrt/luci/tree/master/applications/luci-app-babeld) is just a LuCI status page that at least is not working in OpenWrt 23.05.5 release). Babeld is used as a default configuration for [LibreRouter](https://gitlab.com/librerouter/librerouteros/-/blob/librerouter-1.5/configs/default_config), and it is used in at least a relevant deployment in Quintana Libre of around 60 nodes.


Bird2 OpenWrt package (without UCI and LuCI) is being used in a small community network of 9 nodes with [good results](https://tomir.ac.upc.edu/qmpcav/index.php).

##### About the upcoming bird3

On December 2024, a new bird3 package appeared in [openwrt-routing repository](https://github.com/openwrt/routing/commit/5998119c5530fbd4ab844edee3c4da0ea4fec924).

Working on bird2 OpenWrt integration is still relevant for the upcoming bird3, in the [official announcement](https://trubka.network.cz/pipermail/bird-users/2024-December/017973.html) they said:

> There are some minor breaking changes in config and CLI, most notably 
> unified route attribute names to the filter variant. We are expecting 
> to add a compatibility mode for the CLI. Anyway, it should be possible 
> to reuse most of the configs and CLI scriptings from BIRD 2.

It's also good to stay on bird2, specially, if we want to be able to run it on legacy and very old devices that are in the network:

> The memory consumption has gone up significantly. We are still working 
on reducing the memory footprint and the next versions should be 
better in that.

##### Resources

1. [Bird2 babel docs](https://bird.network.cz/doc/bird-6.html#ss6.1)
2. [Bird2 bgp docs](https://bird.network.cz/doc/bird-6.html#ss6.3)
3. [OpenWrt package bird1 OpenWrt](https://github.com/eloicaso/bird-openwrt), [project's extra documentation](https://github.com/eloicaso/bgp-bmx6-bird-docn)
4. [User guide on babeld](https://openwrt.org/docs/guide-user/services/babeld)
5. [OpenWrt package babeld](https://github.com/openwrt/routing/tree/master/babeld)
6. [OpenWrt package of luci app for babeld](https://github.com/openwrt/luci/tree/master/applications/luci-app-babeld)
7. [Babel IETF standard](https://www.rfc-editor.org/rfc/rfc6126)
8. [[BSc] Interoperability between classic infrastructure and Libre-Mesh networks in Guifi.net. Gioacchino Mazzurco, 2015, Università di Pisa](https://nuvol.exo.cat/index.php/s/cQfdHpCnLowRnWM/download?path=%2F2.%20Memoria%20activitats%20publica%2F2015&files=lime-guifi-interop-internship-report_2018-build.pdf&downloadStartSecret=ht5dehqmgof)
9. [[MSc] LEDE Firmware optimization for wired deployments using BGP and BMX6 for routing by enhancing and extending Bird Daemon's configuration and UI integration. Eloi Caso, 2017, Universitat Oberta de Catalunya](https://github.com/eloicaso/msc_dissertation/blob/master/dissertation.pdf)

#### GSoC 2025 plan

##### Milestones

Here are the milestones to track the project completion.

During GSOC Community Bonding

1. Blog post announcing GSOC starts
2. Blog post that summarizes end of GSOC Community Bonding Phase

During GSOC MidTerm

1. Bird2 BGP is configurable through UCI
2. Bird2 BGP is configurable through LUCI
3. Blog post that summarizes end of GSOC MidTerm

During GSOC Final

1. Bird2 Babel is configurable through UCI
2. Bird2 Babel is configurable through LUCI
3. Bird2 BGP and babel working at the same time in the same device
4. Blog post that summarizes end of GSOC Final

##### GSOC Community Bonding

Tasks for phase 1 (May 4 - 28), introducing the gsoc contributor to the project.

1. Get familiar on OpenWrt version 23.05.x and its BuildRoot
2. Get familiar on how LuCI works
3. Get familiar on how ubus works
4. Get familiar on how Babel routing protocol works
5. Get familiar on how BGP routing protocol works
6. Learn to develop a basic openwrt-routing package
7. Get familiar with existing codebase of bird1-openwrt in Lua and shell
8. Get familiar with test frameworks that could fit well with OpenWrt environment
9. Document the entire process at least with a blog post

##### GSOC MidTerm

Tasks for phase 2 (May 29 - July 10), work mainly on BGP but start approaching Babel.

1. Integrate and use end to end tests for frontend and backend in the project, to improve code quality and ensure no functionality is lost (specially on the unstable code or most complex UX journeys)
2. Set up a small testbed for experimenting the routing protocols
3. Adapt configuration syntax changes from BGP from bird1 to bgp bird2
4. Upgrade bird1-openwrt code to reach a bird2
5. Do code maintenance tasks, minor bugfixes and improvements
6. First development iteration on UCI and LuCI bird2 Babel development
7. Document the entire process at least with a blog post

##### GSOC Final

Tasks for phase 3 (July 14 - August 21), work mainly on babel and finish project.

1. Last development iteration on UCI and LuCI bird2 babel development
2. Improve bird2 BGP and Babel integration, ensure it will work for bird3
3. Refactor code if needed, so it is easier to maintain
4. Document the entire process at least with a blog post

---
name: Live Protocol Overhead Dissector/Statistics for Gluon
desc: Generate live protocol overhead visualizations of batman-adv packet subtypes and layer 2 multicast traffic in Gluon.
collaborating_projects:
- Freifunk
- Gluon
- OpenWrt
- (libpcap)
developers_involved:
- Linus Lüssing
difficulty: medium
status: open
initiatives:
- GSoC 2024
issues: []
size: 175 hours # choose between 90 hours, 175 hours and 350 hours
markdown: filename of your md file
mentors:
- name: Linus Lüssing
  contact:
    github: T-X
    email: linus.luessing@c0d3.blue
    other_chat_options:
    - "IRC: T_X on HackInt/LiberaChat or #gluon on HackInt"
    - "Matrix: @t_x:matrix.org or #gluon:hackint.org"
requirements:
- C and Bash (maybe/optionally Rust for requestd additions)
- basic network protocol knowledge
tags:
- Gluon
- OpenWrt
- Mesh
- batman-adv
- libpcap
- BPF
- Grafana
- InfluxDB
---

The overall goal is to gather a better insight into the overhead details
of a [Gluon](https://github.com/freifunk-gluon/gluon/) /
[batman-adv](https://www.open-mesh.org/projects/batman-adv/wiki) based
mesh network. To be able to evaluate past
protocol changes and to spot areas for future improvements regarding
protocol overhead. A live view should also help to monitor and alert
on unexpectedly high protocol overhead in a real world setup.

A package/daemon on a Gluon mesh node needs to collect statistics on the
protocol's "background noise" on both the upper interfaces as well as the
underlying mesh interfaces and shall do so with a configurable list of
packet types based on the pcap-filter syntax. And must provide this to
a server. This has already (mostly) been implemented via:

* gluon-statistics-mcast package:
  * https://github.com/freifunk-gluon/gluon/pull/2367
* bpfcountd:
  * https://github.com/lemoer/bpfcountd/
  * this is used by gluon-statistics-mcast for getting the
  * this uses libpcap + a (not yet upstream) batman-adv dissector patch

The first and next steps would be to rebase, update with the needed changes
to be able to be merged upstream and test it:

* libpcap: "Add support for B.A.T.M.A.N. Advanced #980":
  https://github.com/the-tcpdump-group/libpcap/pull/980
  - [ ] add the new batman-adv multicast packet type to this PR
  - [ ] add support to dissect within TVLV enabled batman-adv
        packet types (needs BPF code which reads the TVLV length
        field and adjusts the inner header offsets with it)
  - [ ] (try to) persuade libpcap to merge it
        (they haven't merged it in three years yet, with no
         additional feedback on why not)
  - [ ] submit the updated version to OpenWrt:
        https://github.com/openwrt/openwrt/blob/main/package/libs/libpcap/patches/300-Add-support-for-B.A.T.M.A.N.-Advanced.patch

* Gluon: "gluon-statistics-mcast: adding initial package #2367":
  https://github.com/freifunk-gluon/gluon/pull/2367
  - [ ] update it with the changes requested in the ticket,
        get it merged upstream in Gluon
  - [ ] add dissectors for the new batman-adv multicast packet type
  - [ ] replace gluon-neighbor-info and respondd usage in general
        with providing the (compressed) statistics data directly via
        HTTP (while keeping the previous JSON format?);
        only set some flag (and/or URL? http path?) in respondd
        "nodeinfo" (or "statistics"?) provider so that a respondd
        querier would be informed about where/what extra data to get
        and to make this PR obsolete:
        https://github.com/freifunk-gluon/packages/pull/256

Then deploy and run this on either a WiFi router with enough RAM +
CPU power, capable of Gluon, or an x86 VM.

Then either add to [requestd](https://git.chaotikum.org/freifunk-luebeck/requestd)
or implement something new (usable on Debian?) for the gathering side:

- [ ] from responses to general respondd queries, determine which
      nodes have the gluon-statistics-mcast package installed
- [ ] query this JSON formatted data via HTTP from the nodes
      determined in step 1); do this a lot less frequently
      than the general respondd queries (e.g. only every 30min?)
- [ ] parse and push this data into an InfluxDB (or Prometheus?)
- [ ] Create live graphs in Grafana from InfluxDB data (or Prometheus?)

You can get access to a Requestd/InfluxDB/Grafana server
at Freifunk Lübeck for real world statistics measurements
in a network with a recent Gluon / batman-adv version.

(Optional) Bonus Milestones:

Likey all very much out of scope - but if you'd be interested
about anything of this in particular, we could talk about it :-).

- [ ] reduce bpfcountd overhead through eBPF? Ideally this would
      be a feature in libpcap, to be able to count packets
      through eBPF in kernelspace, without needing to copy them
      to userspace, while staying easy to customize & use
      through libpcap's pcap-filter syntax;
      another option would be to replace libpcap usage in bpfcountd
      with one's own, new eBPF counting library which still
      uses/reimplements the libpcap pcap-filter syntax parsing
      (difficulty: hard?)
- [ ] add dissectors for OLSRv2 (+ Babel?) and compare protocol
      overhead between these with batman-adv (though currently
      no Gluon Babel setup active, size/status of Gluon with
      OLSRv2 at FunkFeuer Graz unknown/WIP?
- [ ] measure various batman-adv tweaks:
  - [ ] measure ARP overhead reduction with pending batman-adv
       DAT DHT/Cache split and increased DAT DHT timeout?
       also needs rebase)
       https://patchwork.open-mesh.org/project/b.a.t.m.a.n./cover/20190407112320.32021-1-linus.luessing@c0d3.blue/
  - [ ] measure multicast overhead with `batctl multicast_forceflood 1`
        (disables batman-adv multicast packet type and
         unicasted multicast packets)
  - [ ] might be useful to have a package that allows
        configuring these on all nodes, without requiring
        full SSH access on all these nodes, e.g. something
        like the gluon-authorized-keys package but with a
        lot less privileges (implement a site.conf list
        option in gluon-authorized-keys which contains
        allowed files to execute, which would disallow
        ash usage over SSH?)

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


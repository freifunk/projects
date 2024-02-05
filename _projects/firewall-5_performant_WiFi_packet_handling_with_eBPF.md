---
name: eBPF performance optimisations for a new OpenWrt Firewall 5
desc: Implementation and Evaluation of a new OpenWrt Firewall version that utilizes eBPF Linux Kernel APIs 
collaborating_projects:
  - openwrt.org
developers_involved:
  - thuehn
difficulty: tough
status: open
initiatives:
  - GSoC
  - GSoC 2024
issues: []
size: 350 hours
markdown: firewall-5_performant_WiFi_packet_handling_with_eBPF.md
mentors:
  - name: thuehn
    contact:
      github: thuehn
      email: thomas.huehn@evernet-eg.de
requirements:
  - "Ansi C"
tags:
  - GSoC 2024
  - OpenWrt
  - Linux Kernel
  - Firewall
  - eBPF
  - XDP
---

While the Linux network stack evolved throughout the past years with support for new protocols and features, it has become more complex, which introduces overhead and currently hampers its throughput potential with network speeds about multi-digit Gigabit/s levels. Limitations and bottlenecks include memory (de-)allocations, data copy operations, (un-)lock operations, and scheduling in their respective layers [1]. Over the past, networkers proposed several approaches to overcome this; one such solution is eBPF.

eBPF (extended Berkeley Packet Filter) is a technology within the Linux kernel that allows it to dynamically program the kernel without requiring modifications to its source code. Developers can write programs in C code, compile them to BPF objects, and attach them to several so-called hooks inside the network stack. Networkers typically use it to implement more efficient networking, improved tracing of data packets, and enhanced security. [2]

The idea in this proposal is to intercept an incoming data package as soon as possible inside the network stack in case of the TC hook or even before it enters the network stack using the XDP hook. With eBPF helper functions, it is already possible to parse the package headers, determine the next hop, and redirect the package [3]. But still missing is the ability to check for Firewall rules, e.g., if it should drop a package or if NAT should be applied.

The goal of this project is to implement such a Firewall for forwarded packages through a combination of an eBPF kernel space and a user space program for the OpenWrt [4] OS, hoping that CPU-limited devices can benefit and that it can significantly increase packet forwarding, dropping and mangling performance within the OpenWrt network stack.

* The user space will parse the Firewall rules and pass them through a BPF map to the eBPF program.
* The eBPF program will parse incoming packages, apply the rules for matching packages, and redirect or drop the package.


#### Resources

* [1] https://www.cs.cornell.edu/~ragarwal/pubs/network-stack.pdf
* [2] https://ebpf.io/
* [3] https://homepages.dcc.ufmg.br/~mmvieira/so/papers/Fast_Packet_Processing_with_eBPF_and_XDP.pdf
* [4] https://openwrt.org/

#### Milestones

* Creation of an eBPF package forwarder
* Creation of a user space program for loading and communicating with the eBPF program
* Extend the user space program with a Firewall rule parser
* Apply the parsed rules on incoming packages in the eBPF program
* Evaluate the performance of the implementation (XDP and TC)

#### Preparation/Bonding

* Understand the current limitations and bottlenecks in the network stack
* Examine OpenWrt's Firewall options
* Explore existing (eBPF) Firewall approaches
* Study eBPF capabilities and limitations
* Outline the architecture of the combined eBPF kernel space and user space program

#### Coding Period

* Implementation of an eBPF package forwarder in kernel space
* Implementation of an eBPF program loader in user space
* Integrate the communication between the eBPF and the user space program through BPF maps
* Firewall NAT entry parsing in user space and applying in the eBPF program
* Firewall rule parsing in user space and applying in the eBPF program

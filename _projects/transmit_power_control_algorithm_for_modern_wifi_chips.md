---
name: New Transmit Power Control approach for IEEE 802.11ax WiFi chips
desc: Developing and testing a Transmit Power Control algorithm for IEEE 802.11ax WiFi chips and beyond
collaborating_projects:
  - openwrt.org
developers_involved: []
difficulty: tough
status: open
initiatives:
  - GSoC
  - GSoC 2024
issues: []
size: 350 hours
markdown: transmit_power_control_algorithm_for_modern_wifi_chips.md
mentors:
  - name: thuehn
    contact:
      github: thuehn
      email: thomas.huehn@evernet-eg.de
  - name: prashiddhath
    contact:
      github: prashiddhath
requirements:
  - "Python"
  - "Ansi C"
  - "Linux"
tags:
  - GSoC 2024
  - OpenWrt
  - Linux Kernel
  - mac80211
---

Incorporating active Transmit Power Control (TPC) through a TPC algorithm holds the potential to optimize WiFi networks by intelligently adjusting transmit power for various clients. This adaptive approach reduces interference and enhances overall network throughput, utilizing potential spatial reuse, especially in high-density WiFi environments. Additionally, It is essential for TPC to be supported by 802.11h-compliant WiFi devices, enabling higher TX power levels under specific circumstances, notably adhering to regulatory limits in certain channels.

Past attempts to implement a TPC algorithm relied on the TX status information to obtain information on the used transmission power which work with older WiFi chips like IEEE802.11n AR9xxx or IEEE 802.11ac mt7615. However, as the industry shifts towards closed-source firmware from the IEEE802.11ax standard onward and embraces FullMAC architectures in WiFi chips, there's a need for a more forward-looking solution.

To address this challenge, the proposal advocates for developing a new approach which works as a simplified wifi firmware to Linux driver interface, sidestepping the dependence on extra reporting features.The algorithm will instead focus on capabilities that permit annotating different power levels per connected station and dynamically adjust the TX power limit per station based on the available information about current throughput.

The goal of this project is to initially implement a novel TPC algorithm in the user space and then in the mac80211 subsystem of the Linux Kernel. The evaluation will be conducted in real-world scenarios, specifically on productive Freifunk Mesh and Access deployments.

#### Resources
* [A Measurement-Based Joint Power and Rate Controller for IEEE 802.11 Networks](https://depositonce.tu-berlin.de/bitstream/11303/4022/1/huehn_thomas.pdf)
* [Evaluation of Resource Allocation in WiFi Networks using Minstrel HT in User space](https://drive.google.com/file/d/1HcQuS5Wk7KsepTHVw3XbU1VLUJ30hHe4/view?usp=sharing)

#### Milestones

##### GSOC COMMUNITY BONDING

* Develop foundational understanding of the importance for resource allocation in wireless transmission, with a specific focus on power control.
* Familiarize with the tools for developing and analyzing resource control algorithms in user space
* Create visual representation detailing the architecture of the formulated TPC algorithm.

##### GSOC MIDTERM

* Achieve functional implementation of the TPC algorithm in the user space.
* Conduct preliminary performance comparison, evaluating the developed algorithm against existing resource control algorithm implementations.

##### GSOC FINAL

* Present ready-to-run demo to showcase the potential and effectiveness of the developed TPC algorithm.
* Provide comprehensive source code and project documentation for future reference
* Deploy and evaluate the TPC algorithm in real-world scenarios, specifically on productive Freifunk Mesh and Access deployments.

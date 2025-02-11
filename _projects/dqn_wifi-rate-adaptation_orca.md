---
name: "Deep Q Network-based Rate Adaptation for IEEE 802.11ac Networks"
desc: "Implementation and performance evaluation of reinforcement learning algorithm based on the Deep Q Network approach for MCS rate adaptation in real WiFi networks"
collaborating_projects:
  - openwrt.org
developers_involved: []
difficulty: tough
initiatives:
  - GSoC
  - GSoC 2025
issues: []
size: 350 hours
status: open
markdown: dqn_wifi-rate-adaptation_orca.md
mentors:
- name: thuehn
  contact:
    github: thuehn
- name: Sankalp Prakash Pawar
  contact:
    github: pawarsp
requirements:
  - "Python"
  - "Linux"
tags:
  - WiFi rate adaptation
  - GSoC 2025
  - OpenWrt
  - mac80211
---

The goal of MAC-layer Wi-Fi rate adaptation (RA) is to dynamically select modulation and coding scheme (MCS) rate parameters for the transmission of frames to optimize throughput given a varying channel. Conventional Wi-Fi RA algorithms rely on heuristics from older IEEE 802.11 amendments, which can struggle in denser, more complex networks. As Wi-Fi environments become more crowded, machine learning techniques, especially reinforcement learning (RL), are gaining attention for their potential to improve rate selection [3].

RL addresses the exploration-exploitation tradeoff by continuously exploring actions and exploiting the best-performing ones. This dynamic approach can adapt to real-time network conditions, optimizing throughput, and improving overall performance. Unlike traditional heuristics, RL can evolve, offering a more flexible and robust solution for modern Wi-Fi networks. However, even with the promising potential of applying RL-based approaches for WiFi RA, there are limited investigations that offer an in-depth performance evaluation for real IEEE 802.11 networks using commercial off-the-shelf (COTS) hardware.

The objective of this project is to investigate the use of Deep Q Networks (DQN) for Wi-Fi RA. In [2], R. Queirós et al. demonstrated the effectiveness of a DQN-based RA algorithm in an IEEE 802.11n network through simulation. Building on this work, this project aims to extend the algorithm for the IEEE 802.11ac standard, which involves a relatively larger action space. The implemented algorithm will be evaluated using an experimental toolchain based on the Open-source Resource Control API (ORCA) [1] which enables user space implementation of novel WiFi RA algorithms and their comparison. ORCA is a kernel-user space API for the Linux-based OpenWrt OS. Performance evaluation will include comparing the DQN-based RA algorithm and variants of Minstrel-HT based on metrics such as throughput.

#### Milestones

##### GSOC COMMUNITY BONDING
* Primer on existing Wi-Fi RA algorithms and their limitations (especially in dense environments).
* Gained hands-on experience using ORCA to learn about its control and monitoring capabilities for user space research on WiFi resource control for OpenWrt-based WiFi nodes.
* Overview report on reinforcement learning-based rate adaptation techniques, focusing on Deep Q Networks (DQN).

##### GSOC MIDTERM

* Implemented the core DQN-based RA algorithm for the action space (MCS rates), state space (RSSI), and reward (expected throughput) using TensorFlow or an appropriate RL library.
* Tested the initial algorithm using a testbed involving an RF-isolated single-link Access Point (AP) and  Station (STA) setup. 
* Defined possibilities to tune hyperparameters (learning rate, discount factor, etc.) for stability and performance.
* Designed experiment plan with details on traffic flows and channel scenarios. 

##### GSOC FINAL

* Completed deploying a desk setup consisting of a single-link with AP and STA using IEEE 802.11ac Conducted measurements using the DQN-based RA algorithm and state-of-the-art Minstrel-HT based on the experiment plan. 
* Performed statistical analysis of measurement data and visualization using libraries such as matplotlib. 
* Improved the DQN-based RA algorithm based on analysis results.
* Presented a demo to highlight the potential performance improvements using the DQN-based RA algorithm.
* Published comprehensive source code and project documentation.

#### Resources
* [1] [Open-source Resource Control API for real IEEE 802.11 Networks](https://www.researchgate.net/publication/386449314_Open-source_Resource_Control_API_for_real_IEEE_80211_Networks)
* [2] [Wi-Fi Rate Adaptation using a Simple Deep Reinforcement Learning Approach](https://www.researchgate.net/publication/365109362_Wi-Fi_Rate_Adaptation_using_a_Simple_Deep_Reinforcement_Learning_Approach)
* [3] [SmartLA: Reinforcement Learning-based Link Adaptation for High Throughput Wireless Access Networks](https://www.researchgate.net/publication/317263666_SmartLA_Reinforcement_Learning-based_Link_Adaptation_for_High_Throughput_Wireless_Access_Networks)


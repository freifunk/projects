---
name: Adding Wi-Fi Support to QEMU Simulations in LibreMesh
desc: Adding the wireless interfaces to the LibreMesh virtualized environemnt in QEMU is expected to greatly improve its continuous testing.
collaborating_projects:
- LibreMesh
- OpenWrt
difficulty: medium
status: open
initiatives:
- GSoC 2025
- GSoC
size: 350 hours
markdown: libremesh-wifi_support_qemu.md
mentors:
- name: Javier Jorge
  contact:
    github: javierbrk 
    email: javierbrk@gmail.com
requirements:
- Understanding of networking in Linux environment 
- Some experience in virtualization
tags:
- LibreMesh
- QEMU
---

#### Synopsis

LibreMesh relies on continuous testing to ensure its robustness across various network conditions and hardware setups. Currently, testing new firmware images lacks a standardized method to include Wi-Fi simulations within a virtualized environment. This project aims to add Wi-Fi support to existing QEMU simulations for LibreMesh, allowing near-realistic network testing using virtual Wi-Fi interfaces. By leveraging the `mac80211_hwsim` module and integrating existing OpenWrt-friendly virtual Wi-Fi tools, we can enhance testing automation and reproducibility.

#### Benefits to the Community

- **Improved Testing Framework:** This project will enable LibreMesh developers to run "almost real" tests in a virtualized environment, improving debugging and validation before deploying changes to physical hardware.
- **Enhanced Automation:** By integrating virtual Wi-Fi support into QEMU, developers can automate complex test scenarios without requiring physical routers.
- **A set of scripted tests that can be run on real hardware:** Currently, real tests on physical hardware are performed manually at each release. With this new set of test scripts for QEMU and Wi-Fi, many tests will be automated and easily adapted to real hardware.
- **Collaboration with OpenWrt:** Given that OpenWrt is also working on virtual Wi-Fi support, this project can align efforts with the broader open-source networking community, benefiting multiple projects.
- **Lower Barrier to Entry:** New contributors will find it easier to test their changes without needing specialized hardware.

#### Deliverables

1. **Initial Research & Setup** 

   - Review existing tools (`mac80211_hwsim`, `vwifi`, OpenWrt test frameworks).
   - Set up a basic QEMU-based LibreMesh test environment.

2. **Virtual Wi-Fi Interface Integration** 

   - Configure and validate [mac80211_hwsim](https://linuxembedded.fr/2021/01/emulating-wlan-in-linux-part-ii-mac80211hwsim) in a QEMU LibreMesh instance.
   - Enable multiple virtual Wi-Fi interfaces to simulate different network conditions.

3. **Script Development for Network Testing** 

   - Develop and document a set of scripts using `rpcd` interfaces for network diagnostics.
   - Implement automated tests using the virtualized Wi-Fi environment.

4. **Integration with Existing LibreMesh Testing Framework** (Weeks 7-8)

   - Ensure the developed solution integrates seamlessly with the current LibreMesh testing setup.
   - Validate compatibility with different network topologies.

5. **Documentation and Final Testing** (Weeks 9-10)

   - Create detailed documentation for developers on setting up and using the virtual Wi-Fi testing environment.
   - Final debugging and submission of the project for review.
   - blog posts to spread the news.

#### Related Work

- **[mac80211\_hwsim](https://wireless.docs.kernel.org/en/latest/en/users/drivers/mac80211_hwsim.html)**: A kernel module that emulates multiple Wi-Fi radios, widely used for testing wireless protocols.
- **[VWIFI (Raizo62/vwifi)](https://github.com/Raizo62/vwifi/wiki/Install-on-OpenWRT-X86_64)**: A project focused on virtual Wi-Fi interfaces, particularly OpenWrt-friendly solutions.

#### Estimated Timeline & Milestones

| Week | Task                                               | Deliverable                                    |
| ---- | -------------------------------------------------- | ---------------------------------------------- |
| May 5 - May 29   | Intro to QEMU, research and setup QEMU-based LibreMesh instance   | First post in  Freifunk's blog, Suggestions to improve libremesh documentation |
| May 29- Jun 23   | Configure mac80211\_hwsim and enable virtual Wi-Fi | QEMU instance with functional Wi-Fi simulation |
| Jun 23- July 14  | Develop network testing scripts                    | Scripts for automated testing using rpcd       |
|**July 14 MID TERM EVALUATION**|
| July 14 - Aug 11 | Integrate with LibreMesh testing framework         | Testing capabilities report, expanded current RPC tests to run against QEMU |
| Aug 11 - Aug 25  | Final documentation and debugging                  | Documentation in LibreMesh repo and blog posts in Freifunk's blog  |
|**September 1 FINAL EVALUATION**|

This project will provide LibreMesh with a powerful new tool for virtualized testing, improving both development efficiency and deployment reliability.

The communication with mentors and LibreMesh community is absolutely necessary for the success of the project. For this, the applicant will be required to write 3 blog posts, one at the beginning, one in the middle, and one at the end of the project, on Freifunk's blog. Also, the applicant is expected to join the LibreMesh mailing list and chat channel, announce there the advancements and seek for feedback.
Weekly meetings will be held with the mentor to ensure the success of the project. 

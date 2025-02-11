---
name: Quantum Safe VPN Mesh
desc: Secure a WireGuard mesh network against quantum computers
collaborating_projects:
- OpenWRT
developers_involved:
- aparcar
difficulty: high
status: open
initiatives:
- GSoC 2025
issues: []
size: 350 hours
markdown: quantum-safe-vpn-mesh.md
mentors:
- name: Paul Spooren
  contact:
    github: aparcar
    email: mail@aparcar.org
    other_chat_options:
    - https://matrix.to/#/@aparcar:matrix.org
requirements:
- OpenWrt
- C
- Docker/Podman/Containers
- WireGuard/Networking
tags:
- quantum
- wireguard
- vpn
- openwrt
---

Quantum computers pose a threat to existing cryptographic algorithms, including
those used in VPNs. This project aims to develop a quantum-safe VPN mesh network
using WireGuard on OpenWrt. The core component, `unetd`[unetd], is an OpenWrt daemon
that creates mesh networks using WireGuard. However, WireGuard itself is not
quantum-safe. To address this, the project will extend `unetd` to support
injecting pre-shared keys generated or exchanged through quantum-safe methods.
Additionally, `unetd` will be enhanced to incorporate peer properties that
influence routing decisions, ensuring policies enforce routing over specially
strengthened links.

Tests will be performed in the german [Q-net-Q][qnq] research network, which is part of
an european initiative to develop a quantum-safe communicationn. The project
will be guided by the mentors and parts of the Q-net-Q team.

> *Quantum Safe* means in this case that pre-shared keys are available at both
ends of the VPN tunnel, allowing an additional layer of security by symetrically
encrypting the data. To generate these keys either [Quantum Key
Distribution][qkd] (QKD) and/or [Post-quantum Cryptography][pqc] (PQC) is used.
The detailed generation of these keys is out of the scope for this project and
will be guided through the mentors, no prior knowledge is required.

[unetd]: https://github.com/openwrt/unetd
[qkd]: https://en.wikipedia.org/wiki/Quantum_key_distribution
[pqc]: https://en.wikipedia.org/wiki/Post-quantum_cryptography
[qnq]: https://q-net-q.eu

#### Milestones

##### GSOC COMMUNITY BONDING

* Setup development environment of multiple OpenWrt instances.
* Deploy `unetd` on OpenWrt instances and document the process.
* Run Rosenpass[rosenpass] container on OpenWrt instances and document the process.
* `unetd` codebase understood sufficiently to extended injection of pre-shared key feature.

[rosenpass]: https://rosenpass.eu

##### GSOC MIDTERM

* Reproducible Rosenpass on OpenWrt setup documented and tested
* `unetd` extended to allow injection of pre-shared keys.
* Design of `unetd` peer properties, to influence routing decisions.

##### GSOC FINAL

* Working `unetd` with pre-shared key injection feature.
* Working `unetd` with peer properties influencing routing decisions.
* Documentation of the project and how to use it.
* Presentation of the project including a demo to the OpenWrt community and Q-net-Q members.

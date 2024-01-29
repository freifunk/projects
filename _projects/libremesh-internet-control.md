---
name: "LibreMesh Internet Control"
desc: "Develop a simple interface for LibreMesh to enable internet control and service whitelisting, addressing the needs of communities."
collaborating_projects:
- LibreMesh
- Intervoices
developers_involved:
- technician from the Guarani community
- LibreMesh developers
difficulty: high
status: open
initiatives:
- GSoC 2024
issues:
- "Difficulty in tracking and whitelisting services like WhatsApp due to changing IPs"
size: 350 hours
markdown: libremesh-internet-control.md
mentors:
- name: mentor from the LibreMesh community
  contact:
    github: mentor_github_handle
    email: mentor_email_address
    other_chat_options:
    - mentor_matrix_link
requirements:
- Networking in mesh networks
- Experience with IP tables and traffic control
tags:
- LibreMesh
- Internet Control
- Block scheduler
- Pirania
---

This project is a response to the needs expressed by the Guarani people and other indigenous communities in Brazil who have faced challenges with the introduction of internet in their territories. The project aims to create a user-friendly interface for internet control within the LibreMesh network, allowing for scheduled blockage of internet access while whitelisting essential services like WhatsApp for emergency communication. The solution will build upon the existing Piranha software, adapting it to the specific requirements of communities. 

These deployments have proven successful when integrated with community servers that offer curated content tailored to local interests and needs. This approach presents a meaningful substitute for online activities during times when internet access is restricted, effectively mitigating issues like gaming addiction and the impact of social media on cultural practices.

#### Milestones

##### GSOC 2024 COMMUNITY BONDING

* Set up a development environment and become familiar with the LibreMesh and Piranha codebases.
* Draft a detailed plan for the interface design and functionality, considering the technical challenges of service whitelisting.
* Identify and document the specific services that need to be whitelisted and understand their network behavior.
* Begin coding the backend logic for service whitelisting and internet control scheduling.


##### GSOC 2024 MIDTERM

* Implement the core functionality for scheduled internet control and service whitelisting.
* Develop a prototype of the interface, focusing on the user experience and ease of use for non-technical users.
* Test the solution in a controlled environment, ensuring reliability and ease of use.
* Document the setup process and provide training materials for community technicians.

##### GSOC FINAL

* Deploy the solution in a live community network and monitor its effectiveness.
* Gather feedback from the community and make necessary adjustments.
* Ensure all code is reviewed, merged, and well-documented, including user guides for non-technical community members.


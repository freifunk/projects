---
collaborating_projects:
  - openwrt
desc: "Create a platform to build and host packages for openwrt.org (PPA, or Personal Package Archive)"
developers_involved: [ ]
size: 350 hours
difficulty: medium
status: completed
initiatives:
  - GSoC
  - GSoC2021
issues: []
markdown: openwrt_ppa.md
mentors:
  - name: zoobab
    contact:
      github: zoobab
      email: ""
      other_chat_options: []
name: "OpenWrt PPA"
requirements:
  - "Python (Django or Flask)"
  - "Kubernetes"
  - "Docker"
  - "Shell"
  - "Makefiles"
  - "OpenWrt"
tags:
  - GSoC2021
  - OpenWrt
  - Kubernetes
  - Docker
  - Shell
  - Makefiles
---

[OpenWrt](openwrt.org) is a Linux distribution for off the shelf WiFi routers. People who want to make and distribute their personal packages, often for development purposes. So far the best option is to build the whole firmware from zero, but very few people use the OpenWrt SDKs. The idea behind this project is to create a platform to build and host those personal package repositories, possibility integrated with GIT farms, so that the end users can add a repository URL to use those packages, modelled on what Ubuntu PPA (Personal Package Archive) has been provided for years.

There is no such platform at the moment, packages are made via Pull Requests on a central repository, but that does not meet the requirements of a typical developer, which are:

1. Autonomy: no external person is needed to use the platform
2. Build with many different targets like: brcm2708, ar71xx, x86, sunxi, etc...
3. Generate an URL for each repository
4. CI/CD with green/red button: rebuild with latest commits
5. Optional: Deploy to a physical target device (see https://gitlab.com/zoobab/arduino-cli-esp8266)

Tasks:
 - Document the existing approaches, like cascading docker images (such as https://github.com/wlanslovenija/firmware-core)
 - Build a prototype where a developer can build and host packages by just providing a github URL
 - Integrate the build with a Docker image that contains the OpenWrt SDK, and build it in a Kubernetes cluster
 - Investigate solutions like Source2image, Canico (S2I, see https://github.com/openshift/source-to-image)

These tasks require communication with the OpenWrt community, notably to find out issues regarding the build system or the SDK.

#### Milestones

* Document existing tools and strategies
* Make a first Proof-Of-Concept (POC), even without authentication, with a simple API inside Kubernetes (CRD)
* Make a web GUI on top of that API

##### Preparation

- Web development: html/js/css/python/django/flask or any other widely used web framework
- Basic Knowledge of OpenWrt (should have compiled an image once before)
- Basic Makefile knowledge
- Basic Kubernetes knowledge (podman, buildah, kaniko, makisu, CRD, etc...)

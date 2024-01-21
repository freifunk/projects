---
collaborating_projects:
  - freifunk
name: "A modular Wizard for OpenWrt"
desc: "Write a wizard to easen the initial configuration of OpenWrt based devices"
developers_involved:
  - akira25
  - noxilion
  - Noki
  - pktpls
difficulty: medium
size: "175 hours"
status: open
initiatives:
  - GSoC
  - GSoC2024
issues:
  - https://github.com/freifunk-berlin/falter-ffwizard_spec
mentors:
- name: akira25
  contact:
    github: akira25
    email: "martin.hubner@web.de"
    other_chat_options: ["https://matrix.to/#/@akira25:matrix.org"]
- name: Noki
  contact:
    github: Noki
    email: "info@tobias-schwarz.com"
    other_chat_options: ["https://matrix.to/#/@noki-:matrix.org"]
requirements:
  - "Analyzing and coding"
  - "bash"
  - "javascript"
  - "html"
  - "luci"
tags:
  - GSoC2024
  - OpenWrt
  - UI
  - configuration
---

`OpenWrt` is a distribution for embedded devices such as WiFi router and similar devices.

While it gained very much popularity in the rather experienced Tech-Community, its further expansion is damped by the fact, that the further configuration of an OpenWrt-System needs knowledge of Wireless Routers.

Therefor, commercial OpenWrt-based devices mostly come with a custom UI, which incorporates a setup wizard for initially setting up the device, like it is known from many other firmwares already.

The objective of the project is, to develop such a wizard, which will ease the initial configuration of a device.

That wizard will be implemented by using `LuCI`, which is a framework to build a web interface for configuration and monitoring.

The to-be-developed wizard should be modular and adoptable to different scenarios by scripting. Thus it can be adjusted to the needs of OpenWrt-based communities, like Freifunk and others.

Data will be provided by the user through the UI, the configuration of the actual router will be done by shell scripts in the backend.

<!-- Data will be provided via rpcd and ubus in a JSON format. You probably have to write new rpcd services to provide data that was formerly used directly on the router. Services are usually written as ash script. -->

## Milestones

* Learn how the LuCI client side API works
* Learn how to write rpcd services
* Learn how to set permissions and menu entries
* Discuss an easy and reliable approach to run the wizard on initial startup.
* Make a HowTo for others to help them adjusting the wizard for their needs.

### Preparation/Bonding

* Study the [example app](https://github.com/openwrt/luci/tree/master/applications/luci-app-example) to see how it generally works.
* See other apps like [luci-mod-freifunk](https://github.com/freifunk/openwrt-packages/tree/master/modules/luci-mod-freifunk) that are more sophisticated to learn more details.
* Get familiar with rpcd and ubus.
* Have a look on the [Mock-UI](https://github.com/freifunk-berlin/falter-ffwizard_spec) to get an idea of how the Freifunk specific implementation should look like

### Coding period

* Start creating an minimalist UI example and the related backend module
* Verify that example to be functional by testing it on an OpenWrt system
* Create documentation for implementing a specific wizard with code examples
* Once the example UI and its backend script work, start implementing the Freifunk Berlin wizard as specified by the mockups in the [Freifunk Berlin Repo](https://github.com/freifunk-berlin/falter-ffwizard_spec)

+---
+name: "uMesh: New mac80211 architecture for faster WiFi mesh networks"
+desc: "Implement an alternative wifi mesh network mac80211 mode based on AP WDS<->WDS as successor of IEEE 802.11s"
+difficulty: tough
+collaborating_projects:
+  - openwrt.org
+size: "350 hours"
+status: open
+mentors:
+- name: thuehn
+  contact:
+    github: thuehn
+    email: ""
+    other_chat_options: []
+initiatives:
+  - GSoC
+  - GSoC2024
+requirements:
+  - "C programming experience"
+tags:
+  - mac80211
+  - OpenWrt
+  - Linux kernel
+
+---
+
+Our Freifunk community is a foundation of people building networks in a decentralized, hands-on DIY way - distributed, self-made and community managed. The network technology and components span from WiFi mesh routers over P2P 60GHz to fiber optical links.
+The objectives of  the uMesh proposal are to plan, build and run fast and robust wireless mesh networks as FOSS based decentralized network infrastructure on current IEEE 802.11ax and upcoming IEEE802.11be chips.
+
+This goal is achieved through the strategic deployment of a highly dense arrangement of WiFi nodes, each possessing the capability to establish visual connectivity with neighboring nodes. The emphasis is placed on maximizing network interconnectivity, thereby enhancing redundancy and resilience within the system.
+
+To attain the desired level of interconnectivity, conventional AP (Access Point) station mode proves inadequate due to its inherent limitation in constructing solely star-shaped topologies. This limitation arises from the singular central instance, the AP, rendering the entire network susceptible to failure upon its malfunction. Additionally, under the AP station mode, stations lack the capacity to engage in data exchange amongst themselves. The introduction of the ad-hoc mode in WiFi was conceived as a solution, enabling decentralized and egalitarian data exchange among all stations. However, the universal support for ad-hoc mode was impeded by inconsistent and unreliable implementation across various drivers. Seeking a comprehensive remedy, the 802.11s mode was conceived, purporting to establish a mesh network capable of overcoming the drawbacks associated with traditional station and AP links.
+Nevertheless, the efficacy of IEEE 802.11s mode has been hindered by a lack of consistent support within Linux kernel wifi device drivers. Notably, disparities in performance between ad-hoc mesh links and conventional station-to-AP links have been observed, with the situation exacerbated by emerging chipsets designed to accommodate ever-increasing data rates, such as IEEE 802.11ax. The exigencies of these advanced data rates necessitate specialized offloading techniques, often not implemented and hence supported in the implementations of IEEE 802.11s, resulting in its neglect or outright abandonment in certain instances or low performance figures in data throughout.
+
+The LibresMesh community introduced the concept of utilizing Mesh while retaining AP WDS links. As the name implies, this approach ostensibly involves the criticized star-shaped topology where a failure could potentially cripple the network. The distinction lies in the modification of the WiFi stack, wherein all WiFi nodes operate in AP mode. Instead of functioning as APs, they emit beacon frames, which are received by all other nodes. Upon detecting identical SSIDs, the APs establish WDS-Station links with each other, facilitating subsequent communication.
+
+This configuration can be analogized to each node having an AP interface and connecting, as a Station, to the respective APs of others using the same radio, akin to proprietary products. The key distinction lies in the automated functionality of this process.
+
+Through this technique, we amalgamate the benefits of the resilient 802.11s mesh while concurrently leveraging the significantly better-maintained AP mode drivers embedded within the WiFi chip. This approach alleviates concerns regarding the potential absence or infrequent implementation of the 802.11s mode in future chips.
+
+Based on an initial proof-of-conecpt implementation of an AP-WDS-WDS mesh within the uMesh proposal we plan to implement, validate and evaluate the uMesh approach in different productive Freifunk WiFi Mesh networks using IEEE 802.11ax chips and OpenWrt Linux WiFi Routers. Our plan is to elevate the current implementation to a level where the rate negotiation functions properly, and the timeouts of the WiFi link distances operate correctly. Subsequently, we will conduct a performance analysis between the 802.11s and the new WDS-AP-AP mode across various WiFi generations, ranging from older 802.11n to newer standards such as 802.11ax.
+
+#### Milestones
+
+* Connecting with the community. This includes joining all relevant channels and in touch with the mentors.
+* Work on a hostapd patchset to enable IEEE 802.11n/ac/ax uMesh capabilities.
+* Validate and evaluate the throughput performance of IEEE 802.11ac and IEEE 802.11ax uMesh WiFi links.
+* Test and ensure the usability of the integration of common Freifunk mesh routing protocols (such as Babel, OLSR, BMW, or Batman) on uMesh interfaces for the purpose.
+* Evaluate and publish a community white paper outlining the migration plan from the existing Freifunk Mesh utilizing IEEE 802.11s to the implementation of uMesh.
+* Explore options for implementing encryption in this scenario.
+* Identify limitations. How many WiFi routers can be connected to each other? Are there any other potential issues?
+
+##### GSOC 2024 COMMUNITY BONDING
+
+The conceptual work is aimed at generating a cohesive proposal for community review. Applicants are expected to participate in all project communication channels and attend periodic online meetings with the community. Additionally, an initial blog post will be authored, inviting proposals for alternative solutions to address identified challenges.
+
+##### GSOC 2024 MIDTERM
+
+In this milestone, the focus is on the aforementioned coding milestones. This involves delving into the hostapd, creating a corresponding patch set for WDS-AP-AP communication, resolving issues, establishing a testbed, identifying limitations. At the end, a blog post will then be published.
+
+##### GSOC 2024 FINAL
+
+Every aspect needs to undergo review and be merged. Comprehensive documentation should be made accessible. Lastly, a conclusive blog post will be authored.

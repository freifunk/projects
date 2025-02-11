---
name: Data-Driven Analysis of Rate Adaptation Using Machine Learning on Traces from a Real IEEE 802.11 Mesh Deployment
desc: Analyze RA data based on our ORCA API traces from a rural WiFi ISP in Germany to develop ML-based optimizations
collaborating_projects:
- openwrt.org
developers_involved:
- prashiddhth
difficulty: high
status: open
initiatives:
- GSoC 2025
issues: []
size: 350 hours
markdown: time_series_ml_for_wifi_ra.md
mentors:
- name: thuehn
    contact:
      github: thuehn
      email: thomas.huehn@evernet-eg.de
- name: prashiddhath
    contact:
      github: prashiddhath
      email: prashiddhad.thapa@gmail.com
requirements:
- Python [asyncio, tensorflow, numpy/pandas,s matplotlib, scikit-learn]
- Linux
tags:
- Recurrent Neural Network (RNN)
- Long Short-Term Memory Network (LSTM)
- WiFi Rate Adaptation
- Time Series Data Analysis
- OpenWrt
---

Rate Adaptation (RA) plays an important role in deciding the performance of a WiFi link. As WiFi operates within the limited and unlicensed ISM band, it is highly prone to interference. Newer standards of IEEE 802.11 offer faster Modulation and Coding Scheme (MCS) rates, higher bandwidth and more spatial stream, increasing the number of possible transmission configurations. However, efficiently navigating this growing search space for optimal rate selection remains a challenge. To address this challenge, we leverage data-driven machine learning techniques, such as LSTMs, to navigate the search space efficiently. Analyzing RA traces from a real rural ISP network could help us learn which data rates perform well and which do not across diverse environments. The access points run OpenWrt OS, based on Linux, with the ORCA API for monitoring frame transmissions and control of RA parameters. The details of the API and the trace format has been provided under `Resources for Proposal`.

This project is positioned as a research initiative, exploring the following key questions:

* Can RA traces be effectively analyzed as time-series data?
* Are data rates inherently correlated, or are they primarily influenced by environmental factors?
* How effectively can historical RA data (RSSI and TX status) be leveraged in an LSTM model for optimal data rate prediction?

The optimisation challenge in RA is framed as selecting the optimal data rate from a set of available options, where the best choice can be highly dynamic and fluctuate every 20-50ms. This rapid variability is influenced by factors such as channel conditions, interference, and device mobility, making real-time prediction crucial for maintaining optimal performance. We have real ISP traces from the Linux mac80211 subsystem of mesh access points, providing insights into the performance of data rates across different environments. The key challenge lies in accurately modelling with the limited information exposed to us, capturing the diversity of the channel environment for precise data rate predictions.

#### Resources for Proposal

* [IEEE 802.11 Rate Adaptation](https://ieeexplore.ieee.org/document/8455115)
* [ORCA API Paper](https://www.researchgate.net/publication/386449314_Open-source_Resource_Control_API_for_real_IEEE_80211_Networks/)
* [Inferring ORCA Trace Lines](https://github.com/SupraCoNeX/orca/blob/main/docs/orca_uapi.md) | [ORCA Trace Snippet](https://docs.google.com/document/d/1yHOazOl7mSlatdCMbFmy5c0YRtnqVTxUP2NkpvzmPEk/edit?usp=sharing)

#### Milestones

##### GSOC COMMUNITY BONDING
* Knowledge on the basics of IEEE 802.11 Rate Adaptation.
* Familiarity with the ORCA API traces.
* Defined structured plan for data analysis and ML model development including data selection and preprocessing.

##### GSOC MIDTERM

* Analysed (temporal) data rates correlation.
* Identified and engineered features to effectively characterise the wireless channel.
* Implemented a functional LSTM-RA model with preliminary trace evaluation.

##### GSOC FINAL

* Evaluated LSTM on traces from selected productive Freifunk Mesh and Access deployments.
* Documented source code and project for future reference.

##### Optional

* Implementation of LSTM RA for real WiFi access points using RateMan and ORCA.

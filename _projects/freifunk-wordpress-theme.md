---
collaborating_projects:
  - freifunk
desc: "Modernize the freifunk.net WordPress theme with responsive design, dark mode support, and current development standards"
developers_involved:
  - andibraeu
difficulty: medium
size: "175 hours"
status: open
initiatives:
  - GSoC
  - GSoC 2026
issues:
  - "https://github.com/freifunk/www.freifunk.net/tree/master/wp-plugins"
markdown: freifunk-wordpress-theme.md
mentors:
- name: andibraeu
  contact:
    github: andibraeu
    email: "ab+gsoc2024@andi95.de"
    other_chat_options: ["https://matrix.to/#/@andibraeu:bau-ha.us"]
name: "Freifunk WordPress Theme: Modernization and Responsive Redesign"
requirements:
  - "WordPress Theme Development"
  - "PHP"
  - "CSS/SCSS, Responsive Design"
  - "JavaScript"
tags:
  - GSoC2026
  - wordpress
  - php
  - css
  - responsive
  - dark-mode
  - frontend
---

The WordPress theme for [freifunk.net](https://freifunk.net) is now 13 years old and based on the Twenty Twelve theme. Many aspects of the theme no longer follow current WordPress development standards, and the design has not been adapted for mobile devices or larger displays.

## Motivation

We want to modernize the freifunk.net WordPress theme while preserving its visual identity:

* The current theme is based on Twenty Twelve and uses outdated coding practices
* The design is not responsive and does not adapt to mobile devices or larger screens
* We want to add dark mode support to improve user experience
* Theme updates should be detectable by WordPress (optional: via GitHub releases or a custom update mechanism)
* Several custom plugins exist in the [wp-plugins directory](https://github.com/freifunk/www.freifunk.net/tree/master/wp-plugins) that need to be reviewed and integrated

## Project Goals

The goal of this project is to modernize the freifunk.net WordPress theme with the following objectives:

1. **Refactoring**: Update the theme codebase to follow current WordPress theme development standards and best practices
2. **Responsive Design**: Implement a mobile-first responsive design that works across all device sizes
3. **Dark Mode**: Add dark mode support with a user toggle, respecting system preferences
4. **Theme Versioning**: Implement a versioning mechanism so WordPress can detect available updates (optional: via GitHub releases or update checker library)
5. **Plugin Review**: Review and ensure compatibility with existing plugins from the repository
6. **Documentation**: Create comprehensive documentation for theme customization and maintenance

## Milestones

### Preparation/Bonding

* Set up a local WordPress development environment with the current theme
* Analyze the existing theme structure and identify outdated patterns
* Document all customizations and deviations from the Twenty Twelve base theme
* Review the existing plugins in the wp-plugins directory
* Create a detailed refactoring plan with prioritized tasks

### Coding Period

* Refactor the theme structure to follow current WordPress standards
* Implement responsive CSS using a mobile-first approach
* Add CSS custom properties (variables) for theming and dark mode support
* Implement dark mode toggle with localStorage persistence and system preference detection
* Set up theme versioning mechanism for update detection
* Test the theme across different browsers and devices
* Write documentation on:
  * How the theme is structured
  * How to customize the theme
  * How dark mode works
  * How updates are detected and applied


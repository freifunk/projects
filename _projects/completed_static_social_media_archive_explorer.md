---
collaborating_projects:
  - freifunk
desc: "Develop a (static) website to display and search an archive of social media posts (e.g. tweets) gathered using Cyd, leveraging both HTML archives and a SQLite3 database."
developers_involved:
  - andibraeu
difficulty: medium
size: "90 hours"
status: completed
initiatives:
  - GSoC
  - GSoC 2025
issues: []
mentors:
- name: andibraeu
  contact:
    github: andibraeu
    email: "ab+gsoc2025@andi95.de"
    other_chat_options: ["https://matrix.to/#/@andibraeu:bau-ha.us"]
name: "Static Social Media Archive Explorer"
requirements:
  - "Static site generation"
  - "HTML"
  - "JavaScript"
  - "Data processing"
tags:
  - GSoC2025
  - social-media
  - static
  - web
---
## Idea

The project aims to create a static website that serves as an archive explorer for our social media posts, which were collected using Cyd. The archive exists in two formats: HTML files and a SQLite3 database. The resulting site should allow users to browse and search through historical posts in a clear, user-friendly interface.

A key component of the project is to develop an easy-to-use extractor tool. This tool will:

- Process the existing HTML and SQLite3 data,
- Normalize and export it into a common format (e.g., JSON),
- Allow the results to be easily reproduced,
- Enable others to use the tool to set up their own static websites for similar archives.

Since no new posts will be added, the focus is on efficient data extraction, processing, and client-side search capabilities.

## Milestones

1. **Milestone 1: Data Extraction and Processing Tool**
   - Analyze the archive formats (HTML and SQLite3).
   - Develop an easy-to-use extraction tool that converts the data into a common format (e.g., JSON), ensuring that the process is reproducible.
   - Document the tool and provide clear instructions so that others can use it for their own social media archives.
   - Validate data consistency and completeness.

2. **Milestone 2: Static Website Setup**
   - Choose and set up a static site generator.
   - Create basic templates for listing posts and individual post pages.
   - Integrate the processed data into the static site build.

3. **Milestone 3: Client-side Search Integration**
   - Implement search functionality using a JavaScript library.
   - Pre-index the data during the build process.
   - Ensure the search interface is intuitive and responsive.

4. **Milestone 4: Testing, Optimization, and Deployment**
   - Conduct testing to ensure data integrity, search accuracy, and overall usability.
   - Optimize the site for performance and accessibility.
   - Prepare documentation and deploy the static site.
   
5. **Extra: Theming Support (Optional)**
   - If time permits, implement theming support to allow customization of the site's appearance.
   - Ensure that themes can be easily switched or customized via configuration files.

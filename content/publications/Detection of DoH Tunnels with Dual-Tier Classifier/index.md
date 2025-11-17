---
title: 'Qiu et al_2022_Detection of DoH Tunnels with Dual-Tier Classifier'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Li, B., Jiao, L., Zhu, Y., & Liu, Q

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2022-12-16T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-03-29T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: International Conference on Mobility, Sensing and Networking
publication_short: MSN

abstract: DNS over HTTPS (DoH) has been deployed to provide confidentiality in the DNS resolution process. However, encryption is a double-edged sword in providing security while increasing the risk of data tunneling attacks. Current approaches for plaintext DNS tunnel detection are disabled. Due to the diversity of tunneling tool variations and the low proportion of tunneled traffic in real situations, detecting malicious behaviors is becoming more and more challenging. In this paper, we propose a novel behavior-based model with Dual-Tier Tunnel Classifier (DTC) for tool-level DoH tunneling detection. The major advantage of DTC is that it can not only capture existing tunneling tools but also explore unknown ones in the wild. In particular, DTC considers data imbalance, which improves robustness of the model in the open environment. Our method has been proven successful in both closed and open scenarios, achieving 99.99 % accuracy in detecting known malicious DoH traffic, 96.93% accuracy in unknown and 95.31 % accuracy in identifying malicious DoH tunnel tools.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  # - Large Language Models

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1109/MSN57253.2022.00073

# Custom links
links:
  - type: pdf
    url: ""
  # - type: code
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: dataset
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: video
  #   url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
  # caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  # focal_point: ''
  # preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
  # - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ""
---



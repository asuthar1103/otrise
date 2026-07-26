# OTRise

A free OT/ICS cybersecurity training game. Six levels take you from plant-floor basics to incident command, covering the Purdue model, industrial protocols, IEC 62443, safety instrumented systems, and real ICS incidents.

Live site: https://otrise.io

## How it works

The whole app is a single self-contained `index.html` file — no build step, no dependencies, no tracking. Progress is stored locally in the browser.

## Deployment

Pushes to `main` are built and deployed automatically by AWS Amplify Hosting, which serves the site over CloudFront at https://otrise.io.

## Sources

Advanced levels draw on IEC 62443, IEC 61511, NIST SP 800-82, and the cyber-physical risk knowledge base.

<div align="center">

# My App

**What is My App**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Build and Release My App](https://github.com/name/app/actions/workflows/build-release.yml/badge.svg?branch=main)](https://github.com/name/app/actions/workflows/build-release.yml)
[![Release](https://img.shields.io/github/v/release/name/app?label=release)](https://github.com/name/app/releases/latest)
[![Issues](https://img.shields.io/badge/issues-welcome-green.svg)](https://github.com/name/app/issues)

[About](#about) · [Download](#download) · [Getting Started](#getting-started) · [Development](#development) · [Contributing](#contributing)

</div>

---

## About

## Download

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS)
-   Git

### Install & Run

**1. Install TS dependencies**

```bash
npm install
```

**2. Package the app**

Windows:

```bash
npm run dist:win
```

Linux:

```bash
npm run dist:linux
```

macOS:

```bash
npm run dist:mac
```

Installers are written to the `dist_electron/` output directory.

## Development

Run the app in dev mode with hot reloading powered by Vite:

```bash
npm install
npm run dev
```

Useful scripts:

| Script                 | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `npm run dev`          | Run Electron + React UI with hot reloading               |
| `npm run build`        | Type-check and build the renderer bundle                 |
| `npm run lint`         | Run ESLint                                               |

### Project Structure

## Contributing

There are many ways to participate in this project:

-   [Submit bugs and feature requests](https://github.com/name/app/issues)
-   Improve documentation on the [wiki](https://github.com/name/app/wiki)

## License

Licensed under the [license](LICENSE) license.

Copyright (c) ???YEAR??? – present, My App contributors.

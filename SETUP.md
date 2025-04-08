# CodeLavaLab Setup Guide

## Installation

1. Navigate to the project directory:
```
cd codelavalab
```

2. Install dependencies:
```
npm install
```

3. Fix vulnerabilities:
```
npm audit fix
```

## Fixing Common Issues

### Content Security Policy Error

If you encounter a Content Security Policy error related to the favicon, the issue has been fixed in the `index.html` file by:

1. Adding a proper Content Security Policy meta tag
2. Correcting the favicon path

### NPM Vulnerabilities

To fix the npm vulnerabilities:

1. We've updated the `semver` package to version 7.5.4 in package.json
2. Added a `.npmrc` file with settings to help with dependency resolution
3. Run `npm audit fix` to apply the fixes

If you still encounter issues, you can try:

```
npm audit fix --force
```

Or update the specific packages manually:

```
npm install semver@latest
```

## Running the Application

Start the development server:

```
npm run dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is in use).

## Local Storage

CodeLavaLab uses browser local storage to save:

1. User progress (completed lessons)
2. Achievements
3. User settings

This means all your data is stored locally in your browser and persists even when you close and reopen the application. No server or internet connection is required after the initial load.

## Features

- 5 programming languages: Python, HTML, CSS, JavaScript, and Java
- 73 lessons for each language (365 total)
- WebAssembly-based code execution
- Achievements system
- Search functionality
- Customizable settings
- Responsive design for all devices

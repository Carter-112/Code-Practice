# Troubleshooting Guide for CodeLavaLab

This guide addresses common issues you might encounter when setting up and running the CodeLavaLab application.

## 404 Not Found Error at http://localhost:3000

If you see a 404 error when accessing http://localhost:3000:

### Solution 1: Make sure you're using the correct command
```bash
npm run dev
# or
npm start
```

### Solution 2: Check if port 3000 is already in use
You can check if the port is in use and kill the process:

On Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

On Mac/Linux:
```bash
lsof -i :3000
kill -9 <PID>
```

### Solution 3: Use a different port
If port 3000 is consistently unavailable, you can modify the port in:
- package.json
- vite.config.js

## Content Security Policy (CSP) Error

If you see errors related to Content Security Policy:

### Solution 1: We've removed the CSP
The latest version of the application has removed the Content Security Policy meta tag to avoid these errors.

### Solution 2: Clear browser cache
Try clearing your browser cache or using incognito mode:
1. Press Ctrl+Shift+Delete (Windows/Linux) or Cmd+Shift+Delete (Mac)
2. Select "Cached images and files"
3. Click "Clear data"

### Solution 3: Disable browser extensions
Some browser extensions might interfere with the application. Try disabling them or using incognito mode.

## Favicon.ico Not Found

If you see errors related to favicon.ico:

### Solution 1: We've added a favicon.ico
The latest version includes a favicon.ico file in the public directory.

### Solution 2: Manually create the favicon
If the favicon is still causing issues, you can manually create it:
1. Make sure the public directory exists
2. Create a favicon.ico file in the public directory

## NPM Vulnerabilities

If you see npm vulnerability warnings:

### Solution 1: Run npm audit fix
```bash
npm audit fix
```

### Solution 2: Force fix (may change dependencies)
```bash
npm audit fix --force
```

### Solution 3: Update specific packages
```bash
npm install semver@latest
```

## Application Not Loading Properly

If the application doesn't load properly:

### Solution 1: Check the browser console for errors
1. Right-click on the page
2. Select "Inspect" or "Inspect Element"
3. Go to the "Console" tab
4. Look for error messages

### Solution 2: Reinstall dependencies
```bash
rm -rf node_modules
npm install
```

## Still Having Issues?

If you're still experiencing problems:

1. Try using a different browser
2. Check if your Node.js version is compatible (v14 or higher recommended)
3. Make sure you have the latest version of npm: `npm install -g npm@latest`
4. Try running the application in development mode with verbose logging:
   ```bash
   npx vite --debug
   ```

If none of these solutions work, please provide more details about your environment and the specific errors you're seeing.

# cPanel Deployment Guide

This guide explains how to build and deploy your React + Vite application to a standard cPanel hosting environment.

---

## Step 1: Build the Application Locally

Before uploading to cPanel, you need to compile the TypeScript/React code into production-ready, static HTML, CSS, and JavaScript files.

1. Open your local terminal in the project root directory.
2. Run the following commands:
   ```bash
   # Install dependencies
   npm install

   # Build the production assets
   npm run build
   ```
3. This will compile all assets and output them to a folder named **`dist`** in your project root.

---

## Step 2: Create a `.htaccess` File (Crucial for Routing)

Since this is a Single Page Application (SPA), all routing is handled on the client side. If a user visits `yourdomain.com/some-route` directly, Apache (cPanel's web server) will return a `404 Not Found` error unless we tell it to redirect all traffic to `index.html`.

1. Inside the newly created **`dist`** folder, create a new file named **`.htaccess`** (note the leading dot).
2. Paste the following configuration into the `.htaccess` file:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     
     # If the requested filename does not exist as a physical file...
     RewriteCond %{REQUEST_FILENAME} !-f
     # ...and does not exist as a physical directory...
     RewriteCond %{REQUEST_FILENAME} !-d
     # ...rewrite the path to index.html to let React handle the route
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Step 3: Compress the Build Files

1. Go into your project's **`dist`** folder.
2. Select **all** the files and folders inside `dist` (including `index.html`, the `assets` folder, and your `.htaccess` file).
3. Right-click and compress them into a single zip file (e.g., `build.zip`). 
   * **Note:** Make sure you are zip-compressing the *contents* of the `dist` folder, not the `dist` folder itself.

---

## Step 4: Upload to cPanel

1. Log in to your **cPanel dashboard**.
2. Locate and open the **File Manager**.
3. Navigate to the directory where your domain is pointing:
   * For your **Primary Domain**: Navigate to `public_html`.
   * For an **Addon Domain** or **Subdomain**: Navigate to the specific folder created for that domain (e.g., `public_html/subdomain-folder` or `/your-addon-domain`).
4. Click **Upload** in the top navigation bar.
5. Select and upload your **`build.zip`** file.
6. Once the upload is 100% complete, go back to the File Manager, select `build.zip`, and click **Extract** in the top toolbar.
7. Confirm extraction into the current directory.
8. (Optional) Delete the `build.zip` file to keep your directory clean.

---

## Step 5: Verification

1. Visit your domain in the web browser (e.g., `https://yourdomain.com`).
2. Verify that the application loads and all visual animations and buttons operate as expected.
3. Try refreshing the page on sub-routes (if any are introduced later) to ensure the `.htaccess` fallback router works without 404 errors.

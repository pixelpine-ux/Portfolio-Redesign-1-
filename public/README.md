# Resume Setup Instructions

## How to Add Your Resume

To make the "Download Resume" button functional on your portfolio website:

1. **Prepare your resume** as a PDF file
2. **Name it** `resume.pdf`
3. **Place it** in this `/public` folder (the same folder as this README)
4. The button on your homepage will automatically download it when clicked!

## File Location

```
/public/
  └── resume.pdf  ← Place your resume PDF here
```

## What Happens

When users click the "Download Resume" button on your homepage:
- The file will download with the name `Mastewal_Resume.pdf`
- It works because the button links to `/resume.pdf` which serves files from this public folder

## Alternative: Use External Link

If you prefer to host your resume elsewhere (like Google Drive, Dropbox, etc.):

1. Upload your resume to your preferred hosting service
2. Get a direct download link
3. Update the `href` in `/src/app/pages/HomePage.tsx`:
   ```tsx
   <a 
     href="YOUR_EXTERNAL_LINK_HERE" 
     download="Mastewal_Resume.pdf"
     className="..."
   >
   ```

---

**Note:** This folder (`/public`) is automatically served by Vite, so any files placed here are accessible at the root URL of your website.

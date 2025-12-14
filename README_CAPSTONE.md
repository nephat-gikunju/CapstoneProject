# Academic Capstone Website

A professional, academic portfolio website built with Next.js 14 and Tailwind CSS for university capstone projects.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Professional Navigation**: Clean navbar with all capstone sections
- **Google Drive Integration**: Support for embedded videos, PDFs, and presentations
- **Multilingual Support**: Sections for English, Kiswahili, and indigenous African languages
- **Academic Focus**: Clean, formal design suitable for university evaluation

## Site Structure

### Pages

1. **Home** (`/`)
   - Student information
   - Course and university details
   - Navigation to all capstone sections

2. **Resume** (`/resume`)
   - Three multilingual resumes (English, Kiswahili, Indigenous)
   - Google Drive preview and download links

3. **Autobiography** (`/autobiography`)
   - Essay overview
   - Embedded PDF document
   - Download link

4. **Autobiography Presentation** (`/autobiography-presentation`)
   - Visual presentation
   - Embedded slides
   - Download link

5. **Innovation/Invention** (`/innovation`)
   - Multilingual abstracts
   - 20-minute video presentation
   - Supporting presentation slides

6. **African Culture** (`/african-culture`)
   - Cultural exploration
   - Multilingual abstracts
   - Video documentation
   - Presentation slides

7. **Modern Societal Challenge** (`/societal-challenge`)
   - Problem analysis
   - Proposed solution
   - Video presentation

8. **Photographic Essay** (`/photographic-essay`)
   - Responsive image gallery
   - Captions for each photo
   - Visual storytelling

9. **Professional Online Presence** (`/online-presence`)
   - LinkedIn profile
   - GitHub repositories
   - Blog/Medium
   - YouTube channel
   - Portfolio website

## Customization Guide

### 1. Update Student Information

Edit `app/page.tsx`:
```typescript
<p className="text-2xl text-slate-700">
  [Student Name] // Replace with your name
</p>
<p className="text-lg text-slate-600">
  [Course Name] | [University Name] // Update with your details
</p>
```

### 2. Add Google Drive Content

#### For PDFs and Documents:
1. Upload file to Google Drive
2. Right-click → Share → Get link
3. Change permissions to "Anyone with the link can view"
4. Extract the FILE_ID from the URL
5. Use format: `https://drive.google.com/file/d/FILE_ID/preview`

#### For Videos:
1. Upload video to Google Drive
2. Share with "Anyone with the link"
3. Use format: `https://drive.google.com/file/d/FILE_ID/preview`

#### For Google Slides:
1. Create presentation in Google Slides
2. File → Share → Publish to web
3. Copy the embed code or URL

#### Example:
```typescript
// In your page component
const videoEmbedUrl = 'https://drive.google.com/file/d/YOUR_FILE_ID/preview';
const downloadUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
```

### 3. Update Professional Links

Edit `app/online-presence/page.tsx`:
```typescript
const platforms = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile', // Update this
    // ...
  },
  // Update all platform URLs
];
```

### 4. Add Your Photos

Edit `app/photographic-essay/page.tsx`:
```typescript
const photos = [
  {
    url: 'YOUR_IMAGE_URL', // Update with your image URL
    caption: 'Your caption here',
    alt: 'Description of image',
  },
  // Add more photos
];
```

For Google Drive images:
- Share image → Get link
- Use format: `https://drive.google.com/uc?export=view&id=FILE_ID`

### 5. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: 'your-color',
  // Add custom colors
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Deploy to Netlify (Recommended)
The site is pre-configured for Netlify deployment with `netlify.toml`.

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the Next.js configuration
4. Deploy!

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## File Structure

```
project/
├── app/
│   ├── page.tsx                        # Home page
│   ├── resume/page.tsx                 # Resume section
│   ├── autobiography/page.tsx          # Autobiography
│   ├── autobiography-presentation/     # Auto presentation
│   ├── innovation/page.tsx             # Innovation project
│   ├── african-culture/page.tsx        # Cultural exploration
│   ├── societal-challenge/page.tsx     # Societal challenge
│   ├── photographic-essay/page.tsx     # Photo gallery
│   └── online-presence/page.tsx        # Professional links
├── components/
│   ├── Navbar.tsx                      # Navigation
│   ├── Footer.tsx                      # Footer
│   ├── DriveEmbed.tsx                  # Google Drive iframe
│   ├── ExternalLinkButton.tsx          # External link button
│   └── SectionHeader.tsx               # Page headers
└── components/ui/                      # shadcn/ui components
```

## Tips for Academic Success

1. **Keep it Professional**: Use formal language and academic tone
2. **Cite Sources**: Include proper citations where applicable
3. **High Quality Content**: Ensure all videos and documents are high quality
4. **Test Everything**: Verify all links work before submission
5. **Mobile Check**: Test on mobile devices - lecturers may view on tablets
6. **Fast Loading**: Optimize images and videos for web
7. **Clear Navigation**: Make it easy for evaluators to find each section
8. **Backup Content**: Keep local copies of all uploaded files

## Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs
- Google Drive embed help: https://support.google.com/drive

## License

This template is provided for academic use. Customize freely for your capstone project.

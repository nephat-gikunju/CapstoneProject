# Quick Start Guide

## Step 1: Add Your Information

### Home Page
File: `app/page.tsx`

Replace these placeholders:
- `[Student Name]` - Your full name
- `[Course Name]` - Your course title
- `[University Name]` - Your university name

## Step 2: Upload Content to Google Drive

### Prepare Your Files
1. Create a folder in Google Drive called "Capstone Project"
2. Upload all your files:
   - Resumes (3 versions: English, Kiswahili, Indigenous language)
   - Autobiography PDF
   - Autobiography presentation
   - Innovation video (20 minutes)
   - Innovation presentation
   - African culture video
   - African culture presentation
   - Societal challenge video
   - Photos for photographic essay

### Get Shareable Links
For each file:
1. Right-click the file
2. Click "Share"
3. Change to "Anyone with the link can view"
4. Click "Copy link"

### Extract File ID
From a Google Drive link like:
```
https://drive.google.com/file/d/1ABC123xyz789/view?usp=sharing
```

The FILE_ID is: `1ABC123xyz789`

## Step 3: Add Links to Your Pages

### Resume Page
File: `app/resume/page.tsx`

Find the `resumes` array and update:
```typescript
{
  language: 'English',
  description: 'Professional resume in English',
  downloadUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
  embedUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/preview',
}
```

### Autobiography
File: `app/autobiography/page.tsx`

Update:
```typescript
const driveEmbedUrl = 'https://drive.google.com/file/d/YOUR_FILE_ID/preview';
const downloadUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
```

Add your essay overview in the "Overview" section.

### Autobiography Presentation
File: `app/autobiography-presentation/page.tsx`

Update the URLs and add your presentation description.

### Innovation Page
File: `app/innovation/page.tsx`

1. Add your innovation description
2. Write abstracts in three languages
3. Update video and presentation URLs

### African Culture Page
File: `app/african-culture/page.tsx`

1. Describe your cultural topic
2. Write abstracts in three languages
3. Update video and presentation URLs

### Societal Challenge Page
File: `app/societal-challenge/page.tsx`

1. Describe the problem
2. Explain your proposed solution
3. Add research and analysis
4. Update video URL

### Photographic Essay
File: `app/photographic-essay/page.tsx`

For Google Drive images:
```typescript
const photos = [
  {
    url: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID',
    caption: 'Your caption describing this photo',
    alt: 'Description for accessibility',
  },
];
```

### Professional Online Presence
File: `app/online-presence/page.tsx`

Update all platform URLs:
```typescript
{
  name: 'LinkedIn',
  url: 'https://linkedin.com/in/your-actual-profile',
  // ...
}
```

## Step 4: Test Your Site

```bash
# Run development server
npm run dev
```

Visit http://localhost:3000 and check:
- [ ] All links work
- [ ] Videos play
- [ ] PDFs display
- [ ] Navigation works
- [ ] Mobile responsive (resize browser)

## Step 5: Build and Deploy

```bash
# Test the build
npm run build
```

If successful, deploy to Netlify:
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

## Common Issues

### Videos Not Playing
- Ensure Google Drive link is public ("Anyone with the link")
- Use format: `https://drive.google.com/file/d/FILE_ID/preview`

### PDFs Not Displaying
- Check file permissions in Google Drive
- Try the direct preview link format

### Images Not Loading
- For Drive images: `https://drive.google.com/uc?export=view&id=FILE_ID`
- For external images: Use direct image URLs

## Checklist Before Submission

- [ ] Student name and info updated on home page
- [ ] All three resumes uploaded and linked
- [ ] Autobiography PDF embedded
- [ ] Autobiography presentation embedded
- [ ] Innovation video and abstracts added
- [ ] African culture content added
- [ ] Societal challenge content complete
- [ ] Photographic essay with captions
- [ ] Professional links updated
- [ ] All links tested and working
- [ ] Mobile responsive checked
- [ ] Build succeeds without errors
- [ ] Site deployed and accessible

## Need Help?

- Google Drive embedding: https://support.google.com/drive/answer/2494822
- Next.js issues: https://nextjs.org/docs
- Contact your instructor for content requirements

# Quick Start: RSVP to Google Sheets

## What's New?
RSVPs from your website now automatically sync to your Google Sheet in real-time!

## Setup (5 minutes)

### 1. Deploy Google Apps Script
1. Go to https://script.google.com
2. Click **+ New Project**
3. Copy entire code from `GOOGLE_APPS_SCRIPT.js` file (in this repo)
4. Paste into the editor
5. Click **Deploy** → **New Deployment**
   - Type: Web app
   - Execute as: Your email
   - Access: Anyone
6. Copy the deployment URL

### 2. Add Environment Variable
1. Open `.env` file in project root
2. Add:
   ```
   VITE_GOOGLE_SCRIPT_URL=YOUR_DEPLOYMENT_URL
   ```
   Replace `YOUR_DEPLOYMENT_URL` with the URL from step 1.6

3. Rebuild:
   ```bash
   npm run build
   ```

### 3. For Vercel (Production)
1. Go to https://vercel.com → Your project
2. Settings → Environment Variables
3. Add `VITE_GOOGLE_SCRIPT_URL` = your deployment URL
4. Redeploy

## Test It
1. Go to website
2. Fill out RSVP form
3. Submit
4. Check your Google Sheet - data appears in 5-10 seconds!

## That's it! 🎉

When guests submit RSVPs:
- ✅ Data saved locally on their browser
- ✅ Data sent to your Google Sheet
- ✅ You can see all responses in one place

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| No data in sheet | Check `.env` has correct URL, rebuild & redeploy |
| RSVP form not working | Data still saves locally, even if sheet sync fails |
| Permission error | Run test in Google Apps Script first, accept permissions |

## Files Reference
- `GOOGLE_APPS_SCRIPT.js` - The webhook script to deploy
- `RSVP_GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
- `.env.example` - Template for environment variables
- `src/components/RSVPForm.tsx` - Updated form (now sends to Google Sheets)

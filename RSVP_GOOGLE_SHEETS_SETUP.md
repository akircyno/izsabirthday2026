# RSVP → Google Sheets Integration Setup Guide

This guide will walk you through connecting the birthday invitation RSVP form to automatically sync responses to your Google Sheet.

## Overview

When guests submit an RSVP on the website:
1. ✅ Data is saved locally in the browser (localStorage)
2. ✅ Data is automatically sent to your Google Sheet
3. ✅ You can view all responses in real-time in one place

## Prerequisites

- Google Account
- Access to the Google Sheet: https://docs.google.com/spreadsheets/d/1jtTJq-wnxMwkSflIddrcTSdxI4lPqbg-IhMCSsmVlXQ/

## Step 1: Create Google Apps Script Webhook

### 1.1 Go to Google Apps Script
- Open: https://script.google.com
- Click **"+ New Project"**
- Name it: `Izsa Birthday RSVP Webhook`

### 1.2 Copy and Paste the Script
Replace the default code with the contents of `GOOGLE_APPS_SCRIPT.js` in this repo.

### 1.3 Deploy the Script

1. Click **"Deploy"** button (top right)
2. Click **"New Deployment"**
3. Choose **Type**: "Web app"
4. Set **Execute as**: Your email (the account running the script)
5. Set **Who has access**: "Anyone"
6. Click **Deploy**
7. **Copy the Deployment URL** - it will look like:
   ```
   https://script.google.com/macros/d/SCRIPT_ID/usercscript
   ```

## Step 2: Link to Your Google Sheet

### 2.1 Option A: Use Standalone Apps Script (Recommended)

1. Keep the standalone Google Apps Script you just created
2. It will write to any sheet you specify in the code
3. Get the deployment URL from Step 1.3

### 2.2 Option B: Use Sheet-Bound Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1jtTJq-wnxMwkSflIddrcTSdxI4lPqbg-IhMCSsmVlXQ/
2. Click **Extensions** → **Apps Script**
3. Replace code with `GOOGLE_APPS_SCRIPT.js`
4. Deploy as "Web app" (same steps as 1.3)

## Step 3: Configure the Website

### 3.1 Update Environment Variable

1. Create `.env` file in project root (copy from `.env.example`):
   ```bash
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercscript
   ```

2. Replace `YOUR_SCRIPT_ID` with your actual Script ID from deployment URL

3. Rebuild:
   ```bash
   npm run build
   ```

### 3.2 For Vercel Production

1. Go to Vercel: https://vercel.com
2. Select `izsabirthday2026` project
3. Go to **Settings** → **Environment Variables**
4. Add `VITE_GOOGLE_SCRIPT_URL` with your deployment URL
5. Redeploy

## Step 4: Test It

### 4.1 Test in Google Apps Script
1. Open Google Apps Script editor
2. Select `testRSVP` function
3. Click **Run**
4. Check Google Sheet for test row

### 4.2 Test on Website
1. Go to website
2. Fill RSVP form
3. Click "Confirm RSVP"
4. Check Google Sheet (data appears in 5-10 seconds)

## Troubleshooting

**No data in Google Sheet?**
- Check `.env` has correct `VITE_GOOGLE_SCRIPT_URL`
- Verify Apps Script deployment URL is active
- Open DevTools (F12) → Console → look for errors
- Check Google Sheet sharing settings (must be public or accessible)

**"Authorization failed" error?**
- Open Apps Script Editor
- Click **Run** on a test function
- Accept permission prompts
- Try website RSVP again

## Columns in Google Sheet

| Column | Data |
|--------|------|
| A | Timestamp |
| B | Full Name |
| C | Attending (YES/NO) |
| D | Guest Count |
| E | Additional Guests (comma-separated) |
| F | Submitted At (ISO) |
| G | ID |


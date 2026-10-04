# 🎉 Birthday Invitation - RSVP to Google Sheets Integration

Your birthday invitation website now syncs RSVPs to Google Sheets automatically!

## ✨ Quick Summary

| Before | After |
|--------|-------|
| RSVP saved locally | RSVP saved locally + Google Sheet |
| View responses in DevTools | View responses in Google Sheet |
| Manual guest tracking | Automated guest tracking |

## 🚀 Setup (Choose Your Guide)

1. **Fast** (5 min): Read `QUICK_START_RSVP.md`
2. **Detailed** (15 min): Read `RSVP_GOOGLE_SHEETS_SETUP.md`
3. **Visual**: Read `SETUP_STEPS.txt`

## 📋 What Gets Synced

Your Google Sheet will have:
- Timestamp (when received)
- Full Name
- Attending (YES/NO)
- Guest Count
- Additional Guests
- Submission ID

## 🔧 3-Step Setup

### Step 1: Deploy Google Apps Script
- Go to https://script.google.com
- Copy code from `GOOGLE_APPS_SCRIPT.js`
- Deploy as "Web app"
- Copy deployment URL

### Step 2: Configure Website
- Create `.env` file
- Add: `VITE_GOOGLE_SCRIPT_URL=YOUR_URL`
- Run: `npm run build`

### Step 3: Deploy to Vercel
- Add env variable to Vercel
- Redeploy project
- Done!

## 📚 Documentation

| File | Purpose |
|------|---------|
| `GOOGLE_APPS_SCRIPT.js` | Webhook script to deploy |
| `QUICK_START_RSVP.md` | 5-minute setup |
| `RSVP_GOOGLE_SHEETS_SETUP.md` | Complete guide |
| `SETUP_STEPS.txt` | Visual guide |
| `.env.example` | Environment template |
| `IMPLEMENTATION_SUMMARY.md` | Technical details |

## ✅ How to Verify It Works

1. Deploy Google Apps Script
2. Set environment variable
3. Submit test RSVP on website
4. Check Google Sheet
5. New row appears in 5-10 seconds = ✅ Success!

## 🔄 Data Flow

```
Guest RSVP → Browser Validation → localStorage (backup)
                                 → Google Apps Script
                                 → Google Sheet
```

## 🔐 Security & Reliability

✅ Data saved locally first (always works)
✅ Falls back gracefully if sync fails
✅ Public endpoint (required design)
✅ No sensitive data exposed

## 🛠️ What Changed in Code

`src/components/RSVPForm.tsx`:
- Made `handleSubmit` async
- Added Google Apps Script webhook call
- Uses `VITE_GOOGLE_SCRIPT_URL` env variable
- Graceful error handling

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| No data in sheet | Check `.env` has correct URL, rebuild |
| RSVP form not working | Check browser console (F12) |
| Permission error | Run test in Google Apps Script first |
| Still not working | Data is in localStorage - check DevTools |

## 📊 See Your RSVPs

Once setup:
1. Open Google Sheet
2. New rows appear automatically
3. Sort/filter/export as needed
4. Share with family/coordinators

## 📞 Need Help?

1. Read: `RSVP_GOOGLE_SHEETS_SETUP.md` (full troubleshooting)
2. Check: Browser console (F12 → Console)
3. Verify: All 3 setup steps completed

## 🎉 You're Ready!

Start with `QUICK_START_RSVP.md` and you'll be done in 5 minutes!

---
**Status**: ✅ Ready
**Last Updated**: 2026-10-04

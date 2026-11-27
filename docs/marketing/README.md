# Amaltas Villa — Marketing docs

Planning files for Amaltas Villa by Jungle Diaries ad campaigns. Nothing in this folder is used by the website build.

- [`brand-brief.md`](./brand-brief.md): brand brief taken from the landing page (positioning, rooms, dining, location, offer, open points)
- [`Amaltas_Villa_Google_Search_Ads_Dec2026.xlsx`](./Amaltas_Villa_Google_Search_Ads_Dec2026.xlsx): **Google Search campaign plan.** It has five tabs: Google Search Ads (tracker row), Keywords, Negative Keywords, Ad Copy & Assets, and Setup & Checklist.

## Google Search Ads — December 2026

Campaign: `AMV_Search_CorbettVilla_Dec2026` · Status: Yet to launch · 1 – 31 Dec 2026 · ₹500/day (≈ ₹15,500 for the flight)

| Ad group | What it covers |
|---|---|
| Brand - Amaltas | People searching the property by name |
| Jim Corbett Villa | Villa, boutique and private-villa searches, including "with pool" and group stays |
| Couples & Getaways | Couple, romantic, honeymoon and weekend-getaway searches |
| Dhela & Jhirna Stay | Stays near the Dhela and Jhirna safari zones |

- Objective: leads (WhatsApp clicks, form submits on `/thank-you/`, calls). Landing page: https://amaltasvilla.com/
- Phrase and exact match only, 54 campaign negatives, Presence-only location targeting (Delhi NCR first, then Chandigarh tricity, Dehradun, Meerut, Moradabad, Bareilly, Lucknow).
- Each ad group has one responsive search ad: 10 shared headlines + 5 ad-group headlines, and 4 shared descriptions. The Ad Copy tab checks every line against Google's character limits.
- Bidding: Maximize Clicks with a ₹30 max CPC to start, then Maximize Conversions after about 15 conversions in 30 days.
- Kept apart from the Destinn Dhela campaign (`DHR_Search_CorbettStay_Nov2026`): its Dhela-zone and "resort in jim corbett" keywords are left out here, and destinn / destin are negatives.

### Before launch

- [ ] Conversion tracking: GTM (GTM-P45R5SQ3) and GA4 (G-EDV333KPWB) are on the site, but no Google Ads tag. Track WhatsApp clicks, form submits and call clicks.
- [ ] Add `id="rooms"`, `id="experiences"` and `id="dining"` to those homepage sections, for the sitelinks.
- [ ] Confirm the reservations number: +91 92582 14866 (footer, buttons) vs +91 88688 88494 (FAQ).
- [ ] Add a line and photo about the pool. It's only in the ticker now, but the ads mention it.
- [ ] Fix the room count ("Six Rooms" heading, five shown).
- [ ] Add terms for "Free cancellation on most dates*", or remove the asterisk.
- [ ] Upload the logo and real property photos as image assets.

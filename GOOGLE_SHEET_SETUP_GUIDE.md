# Google Sheet Setup Guide for Projects Carousel

## Quick Start: Create a New Google Sheet with Sample Data

### **Method 1: Copy-Paste Method (Easiest)**

1. **Create a new Google Sheet:**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click "Create" → "Blank spreadsheet"
   - Name it "Magnitude Power Projects"

2. **Add the header row:**
   - In cell A1, type: `imageUrl`
   - In cell B1, type: `projectTitle`
   - In cell C1, type: `capacityDetails`
   - In cell D1, type: `clientName`

3. **Copy the sample data below and paste into your sheet:**

```
imageUrl | projectTitle | capacityDetails | clientName
https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop | Oil Filtration Works - Contractual Service | Oil Filtration Works within Peninsular Malaysia and East Malaysia | MTM-TNB
https://images.unsplash.com/photo-1581092163562-40f08e78bbf7?w=800&h=600&fit=crop | 45MVA Transformer Installation - Multiple Locations | Installation of 3 units 45MVA 132/33kV ABB Transformers | MN Power
https://images.unsplash.com/photo-1581092916550-e323b3c69d4d?w=800&h=600&fit=crop | 130MVA Transformer Installation | Installation of 1 unit 130MVA 132/33kV Daihen Transformer | MN Power
https://images.unsplash.com/photo-1581092163562-40f08e78bbf7?w=800&h=600&fit=crop | TNB Pasir Gudang Power Plant - Substation Design & Build | Design and build 2x500kVA 22/0.415kV electrical substation | TNB Remaco – TNB Generation
https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop | Robinson Falls Power Plant - Transformer Supply | Supply install testing and commissioning 3 units Step-up Transformer | TNB Generation
https://images.unsplash.com/photo-1581092916550-e323b3c69d4d?w=800&h=600&fit=crop | 240MVA Ultra-High Capacity Transformer Installation | Installation of 1 Unit 240MVA 275/132kV CG Power Transformer | TSG
https://images.unsplash.com/photo-1581092163562-40f08e78bbf7?w=800&h=600&fit=crop | Installation Testing and Commissioning of Transformer | Sept 2024 | GDS Nusajaya
https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop | Installation Testing and Commissioning of Transformer | Sept 2025 | GDS Nusajaya
https://images.unsplash.com/photo-1581092916550-e323b3c69d4d?w=800&h=600&fit=crop | Installation Testing and Commissioning of Transformer | Jul 2025 | GDS Nusajaya
https://images.unsplash.com/photo-1581092163562-40f08e78bbf7?w=800&h=600&fit=crop | Power Transformer Repair & Refurbishment Service | Aug 2022 | TNB
https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop | Power Transformer Repair & Refurbishment Service | Aug 2022 | TNB
https://images.unsplash.com/photo-1581092916550-e323b3c69d4d?w=800&h=600&fit=crop | Inspection Internal Active Part Transformer - Untanking | Apr 2026 | TNB
```

4. **Publish the sheet as CSV:**
   - Click "File" → "Share" → "Publish to web"
   - Select your sheet name (default is "Sheet1")
   - Choose format: **CSV**
   - Click "Publish"
   - Copy the published URL (it will look like: `https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pub?gid=0&single=true&output=csv`)

5. **Update the carousel component:**
   - Copy the new CSV URL
   - In the website code, update the `GOOGLE_SHEET_CSV_URL` variable in `ProjectsCarousel.tsx` with your new URL
   - The carousel will automatically fetch and display your projects with images!

---

### **Method 2: Import CSV File**

1. **Create a new Google Sheet** (as above)
2. **Import the CSV:**
   - Click "File" → "Import" → "Upload"
   - Select `SAMPLE_PROJECTS_DATA.csv` from this project folder
   - Choose "Replace current sheet"
   - Click "Import"

3. **Publish and update carousel** (same as steps 4-5 above)

---

## Image URL Sources

The sample data uses images from **Unsplash** (free, professional photos). You can:

1. **Keep the Unsplash URLs** - They're free and reliable
2. **Replace with your own images:**
   - Upload to Google Drive → Right-click → Get link
   - Upload to Imgur → Copy image URL
   - Use any public image hosting service

---

## Column Format Reference

| Column | Name | Format | Example |
|--------|------|--------|---------|
| A | imageUrl | Full image URL (HTTP/HTTPS) | `https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop` |
| B | projectTitle | Text (up to 100 characters recommended) | `Oil Filtration Works - Contractual Service` |
| C | capacityDetails | Text (up to 150 characters recommended) | `Oil Filtration Works within Peninsular Malaysia and East Malaysia` |
| D | clientName | Text (up to 50 characters recommended) | `MTM-TNB` |

---

## Troubleshooting

**Images not showing in carousel?**
- Check that the CSV URL is correct and published
- Verify image URLs are accessible (try opening them in a new browser tab)
- Ensure the first row contains headers: `imageUrl`, `projectTitle`, `capacityDetails`, `clientName`

**Carousel still showing "Image not available"?**
- Hard refresh the website (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for errors (F12 → Console tab)
- Verify the CSV is published as "CSV" format, not "Web page"

---

## Next Steps

Once your Google Sheet is set up and published:
1. The carousel will automatically fetch and display your projects
2. You can add/edit projects anytime by updating the Google Sheet
3. Changes will appear on your website within a few minutes (after page refresh)

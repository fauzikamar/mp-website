# Google Sheet Setup Guide for Projects Carousel

The Projects Carousel component fetches data from a Google Sheet published as CSV. Follow these steps to populate your sheet:

## Sheet Structure

Your Google Sheet should have exactly 4 columns with these headers:

| imageUrl | projectTitle | capacityDetails | clientName |
|----------|--------------|-----------------|-----------|

## Column Descriptions

1. **imageUrl** (Required)
   - Full URL to the project image
   - Example: `https://example.com/images/project1.jpg`
   - If empty, a placeholder will be shown

2. **projectTitle** (Required)
   - Name of the project
   - Example: `45MVA Transformer Installation - Multiple Locations`

3. **capacityDetails** (Required)
   - Technical specifications or capacity information
   - Example: `Installation of 3 units 45MVA 132/33kV ABB Transformers`

4. **clientName** (Required)
   - Name of the client
   - Example: `MN Power`

## Sample Data

Add rows to your Google Sheet following this format:

```
imageUrl,projectTitle,capacityDetails,clientName
https://example.com/image1.jpg,Oil Filtration Works - Contractual Service,Oil Filtration Works within Peninsular Malaysia and East Malaysia,MTM-TNB
https://example.com/image2.jpg,45MVA Transformer Installation,Installation of 3 units 45MVA 132/33kV ABB Transformers,MN Power
https://example.com/image3.jpg,130MVA Transformer Installation,Installation of 1 unit 130MVA 132/33kV Daihen Transformer,MN Power
```

## Steps to Set Up

1. Open your Google Sheet
2. Add the 4 column headers in the first row
3. Add your project data in subsequent rows
4. Go to **File → Share → Publish to the web**
5. Select the sheet and choose **CSV** format
6. Copy the published URL
7. The carousel will automatically fetch and display the data

## Published Sheet URL

Your current Google Sheet CSV URL:
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vT2dwg6pZFzMIF3T-YMyyXPAJOuMyaNuAp41YXn9i8EAVaWUo5C9GYa-luEMsaXjfdEoP3lsxFHceey/pub?gid=0&single=true&output=csv
```

## Notes

- The carousel automatically handles responsive layout (1 card on mobile, 2 on tablet, 3 on desktop)
- Images are displayed with hover zoom effect
- Navigation arrows appear automatically if there are more projects than visible cards
- Touch/drag swiping works on mobile devices
- Click-and-drag works on desktop
- Pagination dots show the current position in the carousel

## Troubleshooting

If projects aren't showing:
1. Verify the Google Sheet is published to the web (File → Share → Publish to the web)
2. Check that data rows are present (not just headers)
3. Ensure image URLs are valid and accessible
4. Check browser console for any error messages

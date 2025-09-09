# India Map State Abbreviations Overlay

This tool allows you to overlay Indian state abbreviations on a political map of India. It uses HTML5 Canvas and JavaScript to add white text labels for each state at their approximate center positions.

## Features

- Upload any India political map image (recommended: image1 as mentioned in requirements)
- Automatically overlay state abbreviations in white text for clear visibility
- Export the processed map as PNG
- Responsive design that works with different image sizes
- Comprehensive coverage of all Indian states and major union territories

## How to Use

1. Open `india_map_overlay.html` in your web browser
2. Click "Upload Map Image" and select your India political map
3. The tool will automatically process the image and add state abbreviations
4. Click "Download Result" to save the processed map

## State Abbreviations Included

The tool includes abbreviations for all 28 states and 8 union territories:

### Major States
- UP (Uttar Pradesh)
- MH (Maharashtra) 
- RJ (Rajasthan)
- WB (West Bengal)
- GJ (Gujarat)
- KA (Karnataka)
- AP (Andhra Pradesh)
- TN (Tamil Nadu)
- KL (Kerala)
- MP (Madhya Pradesh)
- OR (Odisha)
- BR (Bihar)
- TG (Telangana)

### Northeastern States
- AS (Assam)
- ML (Meghalaya)
- MN (Manipur)
- MZ (Mizoram)
- TR (Tripura)
- NL (Nagaland)
- AR (Arunachal Pradesh)

### Northern States
- PB (Punjab)
- HR (Haryana)
- HP (Himachal Pradesh)
- UK (Uttarakhand)

### Other States & UTs
- JH (Jharkhand)
- CG (Chhattisgarh)
- GA (Goa)
- SK (Sikkim)
- DL (Delhi)
- JK (Jammu and Kashmir)
- LA (Ladakh)
- PY (Puducherry)

## Technical Details

- Built with vanilla JavaScript and HTML5 Canvas
- Uses normalized coordinates (0-1) for positioning to work with different image sizes
- White text with black stroke for maximum visibility against blue map backgrounds
- Responsive font sizing based on image dimensions
- No external dependencies required

## File Structure

```
indiaMapOverlay/
├── india_map_overlay.html    # Main interface
├── india_map_overlay.js      # Core functionality
└── README.md                # Documentation
```

## Browser Compatibility

Works in all modern browsers that support HTML5 Canvas:
- Chrome 4+
- Firefox 3.6+
- Safari 4+
- Opera 9+
- Internet Explorer 9+

## Output

The processed map will be saved as `india_map_with_abbreviations.png` in your browser's downloads folder.
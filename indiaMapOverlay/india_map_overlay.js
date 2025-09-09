// Indian States and UTs with their abbreviations and approximate center coordinates
// Coordinates are normalized (0-1) for different map sizes
const indianStates = [
    // Major States
    { name: "Uttar Pradesh", abbr: "UP", x: 0.62, y: 0.45 },
    { name: "Maharashtra", abbr: "MH", x: 0.50, y: 0.65 },
    { name: "Rajasthan", abbr: "RJ", x: 0.40, y: 0.45 },
    { name: "West Bengal", abbr: "WB", x: 0.75, y: 0.52 },
    { name: "Gujarat", abbr: "GJ", x: 0.35, y: 0.55 },
    { name: "Karnataka", abbr: "KA", x: 0.48, y: 0.75 },
    { name: "Andhra Pradesh", abbr: "AP", x: 0.58, y: 0.75 },
    { name: "Tamil Nadu", abbr: "TN", x: 0.55, y: 0.85 },
    { name: "Kerala", abbr: "KL", x: 0.46, y: 0.88 },
    { name: "Madhya Pradesh", abbr: "MP", x: 0.52, y: 0.55 },
    { name: "Odisha", abbr: "OR", x: 0.68, y: 0.62 },
    { name: "Bihar", abbr: "BR", x: 0.68, y: 0.48 },
    { name: "Telangana", abbr: "TG", x: 0.55, y: 0.68 },
    
    // Northeastern States
    { name: "Assam", abbr: "AS", x: 0.78, y: 0.45 },
    { name: "Meghalaya", abbr: "ML", x: 0.78, y: 0.48 },
    { name: "Manipur", abbr: "MN", x: 0.82, y: 0.50 },
    { name: "Mizoram", abbr: "MZ", x: 0.80, y: 0.53 },
    { name: "Tripura", abbr: "TR", x: 0.78, y: 0.52 },
    { name: "Nagaland", abbr: "NL", x: 0.82, y: 0.47 },
    { name: "Arunachal Pradesh", abbr: "AR", x: 0.83, y: 0.42 },
    
    // Northern States
    { name: "Punjab", abbr: "PB", x: 0.45, y: 0.35 },
    { name: "Haryana", abbr: "HR", x: 0.50, y: 0.38 },
    { name: "Himachal Pradesh", abbr: "HP", x: 0.48, y: 0.32 },
    { name: "Uttarakhand", abbr: "UK", x: 0.55, y: 0.35 },
    
    // Eastern States
    { name: "Jharkhand", abbr: "JH", x: 0.68, y: 0.55 },
    { name: "Chhattisgarh", abbr: "CG", x: 0.62, y: 0.60 },
    
    // Other States
    { name: "Goa", abbr: "GA", x: 0.45, y: 0.72 },
    { name: "Sikkim", abbr: "SK", x: 0.73, y: 0.42 },
    
    // Union Territories
    { name: "Delhi", abbr: "DL", x: 0.52, y: 0.40 },
    { name: "Jammu and Kashmir", abbr: "JK", x: 0.48, y: 0.25 },
    { name: "Ladakh", abbr: "LA", x: 0.52, y: 0.22 },
    { name: "Puducherry", abbr: "PY", x: 0.58, y: 0.82 },
    { name: "Chandigarh", abbr: "CH", x: 0.47, y: 0.36 },
    { name: "Dadra and Nagar Haveli and Daman and Diu", abbr: "DD", x: 0.40, y: 0.58 },
    { name: "Lakshadweep", abbr: "LD", x: 0.38, y: 0.85 },
    { name: "Andaman and Nicobar Islands", abbr: "AN", x: 0.82, y: 0.75 }
];

class IndiaMapOverlay {
    constructor() {
        this.canvas = document.getElementById('mapCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.originalImage = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const imageInput = document.getElementById('imageInput');
        imageInput.addEventListener('change', (e) => {
            this.handleImageUpload(e.target.files[0]);
        });
    }

    handleImageUpload(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.originalImage = img;
                this.processImage();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);

        this.updateStatus('Loading image...');
    }

    processImage() {
        if (!this.originalImage) return;

        // Set canvas dimensions to match image
        this.canvas.width = this.originalImage.width;
        this.canvas.height = this.originalImage.height;

        // Clear canvas and draw original image
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.originalImage, 0, 0);

        // Overlay state abbreviations
        this.overlayStateAbbreviations();

        // Show canvas and download button
        this.canvas.style.display = 'block';
        document.getElementById('downloadLink').style.display = 'inline-block';

        // Setup download link
        this.setupDownloadLink();

        this.updateStatus('Map processed successfully! State abbreviations added.');
    }

    overlayStateAbbreviations() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // Set text styling
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.font = this.calculateFontSize(canvasWidth, canvasHeight);
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        // Add each state abbreviation
        indianStates.forEach(state => {
            const x = state.x * canvasWidth;
            const y = state.y * canvasHeight;

            // Draw text with white fill and black stroke for better visibility
            this.ctx.strokeText(state.abbr, x, y);
            this.ctx.fillText(state.abbr, x, y);
        });
    }

    calculateFontSize(width, height) {
        // Calculate font size based on image dimensions
        const baseSize = Math.min(width, height) * 0.025; // Increased from 0.02
        return `bold ${Math.max(14, Math.min(28, baseSize))}px Arial`; // Increased minimum from 12
    }

    setupDownloadLink() {
        const downloadLink = document.getElementById('downloadLink');
        
        // Convert canvas to blob and create download URL
        this.canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
        }, 'image/png');
    }

    updateStatus(message) {
        document.getElementById('status').textContent = message;
        setTimeout(() => {
            document.getElementById('status').textContent = '';
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IndiaMapOverlay();
});

// Export functionality for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { IndiaMapOverlay, indianStates };
}
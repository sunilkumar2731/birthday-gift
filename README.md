# Happy Birthday Heart, Tree & Photo Memories Film

A cinematic, interactive birthday experience in six acts:
1. **Act 1 — The Invitation:** A beating 3D heart waiting to be struck. Pull and release the Cupid bowstring (or simply tap anywhere) to shoot the arrow.
2. **Act 2 — The Flood:** The arrow strikes the heart; it recoils and bursts into an expanding flood of rose that fills the screen.
3. **Act 3 — The Wish:** Under cinema letterbox bars, kinetic typography reveals "Happy Birthday" with each character hinging up in 3D perspective, accented by a gold hand-drawn flourish.
4. **Act 4 — The Blossom Tree:** Warm dawn blooms as an interactive procedural cherry blossom tree grows its trunk and branches upward, progressively blooming with hundreds of heart-shaped petals forming a heart-shaped canopy, accompanied by cursive hand-lettered birthday wishes and falling petals.
5. **Act 5 — Our Beautiful Memories:** A gentle transition banner invites the visitor ("Every moment with you is a beautiful memory ❤️" → "Our Beautiful Memories 💗") to smoothly glide down into an interactive 3D perspective carousel and romantic polaroid memory wall, with full-screen zoom viewer and swipe gestures.
6. **Act 6 — The Final Birthday Surprise:** A heartfelt closing message ("Happy Birthday, My Special Person ❤️" and "Some people make the world more beautiful just by being in it. You are one of them.") with a pulsing, multi-layered glowing heart and full replay controls.

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Running Locally (Development)
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready to be hosted on any web server or GitHub Pages.

### Previewing the Production Build
```bash
npm run preview
```

---

## How to Add Your Own Photographs

All photo configuration is centralized in **`memories.js`**:

1. **Place your photos** into the `public/images/` directory:
   - `public/images/memory1.jpg`
   - `public/images/memory2.jpg`
   - `public/images/memory3.jpg`
   - ...up to `public/images/memory8.jpg` (or any custom names).
2. **Open `memories.js`** and customize the `memories` array:
   ```javascript
   export const memories = [
     {
       id: 1,
       title: "Memory 01",
       tag: "First Spark",
       image: "/images/memory1.jpg",
       caption: "The day our story began & smiles became unforgettable",
       date: "A Beautiful Beginning"
     },
     // ...
   ];
   ```
3. **Automatic Fallback:** If any image file is missing or still being uploaded, a romantic, pastel SVG artwork placeholder will be rendered automatically. There will never be broken images or empty placeholders!

---

## Interactive Features & Controls

- **Act 1 Bow & Arrow:**
  - Drag the bowstring downward and release to shoot.
  - Or simply **tap / click anywhere on the screen** (or the heart) to trigger the shot automatically.
  - Keyboard: Press `Space` or `Enter` to fire.
- **Act 4 to Act 5 Transition:**
  - After the tree finishes blossoming, the invitation banner smoothly slides up.
  - Clicking **"Our Beautiful Memories 💗"** smoothly scrolls down into the memories section.
- **3D Photo Carousel:**
  - Click left and right arrows (or swipe left/right on touch devices, or use keyboard arrow keys) to browse through memories in 3D perspective.
  - Click on the active center card to open it full-screen.
- **Polaroid Memory Wall:**
  - Click any tilted polaroid card to open the fullscreen lightbox viewer.
- **Fullscreen Lightbox Viewer:**
  - Zoom-in preview with high-res display and captions.
  - Left / Right navigation arrows and touch swipe gestures.
  - Press `Esc` or click the `×` button or backdrop to close.
- **Final Surprise & Replay:**
  - Click **"Back to Tree"** to scroll smoothly back to the blossom tree.
  - Click **"Replay Full Surprise"** or **"Again"** to restart the entire film from Act 1.

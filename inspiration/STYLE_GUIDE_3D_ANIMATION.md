# 3D Background Animation Style Guide

**Source Inspiration:** hudahajira.com  
**Created:** 2025  
**Purpose:** Reference for portfolio website background animation design

---

## Overview

A minimalist, elegant 3D background animation featuring floating geometric wireframe shapes with smooth mouse interaction. The design uses a warm, light color palette with subtle depth and sophisticated visual effects.

---

## Color Palette

### Background
- **Primary Gradient:** 
  - Start: `#faf8f3` (warm off-white)
  - Mid: `#f0ede5` (soft beige)
  - End: `#e8e4dc` (warm light gray)
  - Direction: `135deg` diagonal gradient

### Text Colors
- **Primary Text:** `#2d3748` (dark gray)
- **Heading:** `#4c51bf` (indigo)
- **Body Text:** `rgba(45, 55, 72, 0.75)` (semi-transparent dark gray)

### 3D Shape Colors (Wireframe)
- **Indigo:** `#3730a3` (dark indigo)
- **Red:** `#b91c1c` (deep red)
- **Cyan:** `#0e7490` (dark cyan)
- **Amber:** `#b45309` (dark amber/orange)
- **Green:** `#047857` (dark green)

### Cursor Trail
- **Dot Color:** `rgba(76, 81, 191, 0.6)` (semi-transparent indigo)
- **Size:** 4px × 4px circles

### UI Elements
- **Info Box Background:** `rgba(255, 255, 255, 0.85)` (semi-transparent white)
- **Info Box Border:** `rgba(0, 0, 0, 0.05)` (very subtle border)
- **Shadow:** `rgba(0, 0, 0, 0.08)` (soft shadow)

---

## Typography

- **Font Family:** `'Arial', sans-serif`
- **Heading Size:** `2.5rem`
- **Heading Weight:** `600` (semi-bold)
- **Body Size:** `1.2rem`
- **Line Height:** `1.6`

---

## 3D Animation Specifications

### Scene Setup
- **Camera Type:** Perspective Camera
- **Field of View:** 75°
- **Near Plane:** 0.1
- **Far Plane:** 1000
- **Camera Position:** `z: 10`
- **Renderer:** WebGL with alpha channel and antialiasing
- **Pixel Ratio:** Device pixel ratio for crisp rendering

### Geometric Shapes
**Types:**
- Box (Cube)
- Sphere
- Cone
- Tetrahedron
- Octahedron

**Properties:**
- **Total Count:** 18 shapes
- **Scale Range:** 0.4 - 1.0 (randomized)
- **Position Range:** 
  - X: -12.5 to 12.5
  - Y: -12.5 to 12.5
  - Z: -6 to 6
- **Material:** Wireframe only (`wireframe: true`)
- **Rotation Speed:** Random per axis (-0.01 to 0.01)

### Animation Behaviors

#### Shape Rotation
- Continuous rotation on all three axes
- Individual rotation speeds per shape
- Smooth, organic movement

#### Floating Effect
- Vertical floating using sine wave
- Formula: `Math.sin(Date.now() * 0.001 + shape.position.x) * 0.002`
- Creates gentle up/down motion

#### Mouse Interaction
- Camera follows mouse movement
- Smooth interpolation: `0.05` lerp factor
- Camera movement range: `-2 to 2` on X and Y axes
- Camera always looks at scene center

---

## Cursor Trail Animation

### Specifications
- **Dot Size:** 4px diameter
- **Max Trail Length:** 12 dots
- **Creation Interval:** 15ms (very smooth)
- **Fade-in:** Immediate via `requestAnimationFrame`
- **Fade-out Duration:** 500ms
- **Total Lifetime:** 800ms before fade starts

### Visual Properties
- **Shape:** Perfect circle (`border-radius: 50%`)
- **Color:** `rgba(76, 81, 191, 0.6)`
- **Position:** Fixed, centered on cursor
- **Z-index:** 9999 (above all content)
- **Transitions:** 
  - Opacity: `0.5s ease-out`
  - Transform: `0.1s ease-out`
- **Performance:** `will-change: opacity, transform`

---

## UI Component Styles

### Info Box
```css
background: rgba(255, 255, 255, 0.85);
padding: 2rem;
border-radius: 12px;
backdrop-filter: blur(10px);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
border: 1px solid rgba(0, 0, 0, 0.05);
```

**Characteristics:**
- Glassmorphism effect (backdrop blur)
- Soft shadows for depth
- Subtle border for definition
- Semi-transparent background

---

## Technical Implementation

### Three.js Version
- **Library:** Three.js r128
- **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

### Key Code Patterns

#### Scene Initialization
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
```

#### Shape Creation Loop
```javascript
for (let i = 0; i < 18; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const shape = new THREE.Mesh(geometry, material);
    // Random positioning, rotation speeds, and scaling
}
```

#### Animation Loop
```javascript
function animate() {
    requestAnimationFrame(animate);
    // Update camera position based on mouse
    // Rotate shapes
    // Apply floating movement
    renderer.render(scene, camera);
}
```

#### Mouse Interaction
```javascript
target.x += (mouse.x - target.x) * 0.05; // Smooth interpolation
camera.position.x += (target.x * 2 - camera.position.x) * 0.05;
```

---

## Design Principles

### 1. Minimalism
- Clean, uncluttered design
- Focus on essential elements
- Subtle effects that don't distract

### 2. Elegance
- Warm, sophisticated color palette
- Smooth animations and transitions
- Refined typography and spacing

### 3. Performance
- Optimized rendering with `requestAnimationFrame`
- Efficient trail management
- Hardware acceleration via `will-change`

### 4. Accessibility
- Default cursor remains visible
- High contrast for readability
- Non-intrusive animations

### 5. Responsiveness
- Window resize handling
- Pixel ratio adaptation
- Flexible layout

---

## Customization Ideas

### Color Variations
- **Dark Theme:** Deep blues/purples with bright wireframes
- **Neon Theme:** Dark background with vibrant neon wireframes
- **Monochrome:** Grayscale with subtle color accents

### Shape Variations
- Add more geometric shapes (dodecahedron, torus, etc.)
- Include tech-themed shapes (devices, icons, code symbols)
- Mix filled and wireframe materials

### Animation Variations
- Faster/slower rotation speeds
- More dramatic floating effects
- Particle effects or trails from shapes
- Shape-to-shape connections or interactions

### Interaction Enhancements
- Click to add/remove shapes
- Hover effects on shapes
- Scroll-based camera movement
- Touch gestures for mobile

---

## Performance Considerations

### Optimizations Applied
- ✅ Alpha channel for transparency
- ✅ Antialiasing for smooth edges
- ✅ Device pixel ratio matching
- ✅ Efficient trail cleanup
- ✅ `will-change` for GPU acceleration
- ✅ Smooth interpolation (lerp) for camera

### Potential Improvements
- LOD (Level of Detail) for shapes based on distance
- Frustum culling for off-screen shapes
- Instanced rendering for identical shapes
- Web Workers for heavy calculations

---

## Browser Compatibility

- **WebGL Support:** Required
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile:** iOS Safari, Chrome Mobile (with performance considerations)

---

## File Structure

```
hudahajira-threejs-animation.html
├── <head>
│   ├── Three.js CDN
│   └── <style> (all CSS)
├── <body>
│   ├── #canvas-container (Three.js canvas)
│   └── .content (UI overlay)
└── <script>
    ├── Three.js setup
    ├── Shape creation
    ├── Mouse interaction
    ├── Cursor trail
    └── Animation loop
```

---

## Usage Notes

### Integration into Portfolio
1. Extract the `<style>` section for CSS
2. Extract the `<script>` section for JavaScript
3. Ensure Three.js is loaded (CDN or npm)
4. Add canvas container div: `<div id="canvas-container"></div>`
5. Adjust z-index values to work with your layout
6. Customize colors to match your brand

### Best Practices
- Keep animation subtle and non-distracting
- Ensure content remains readable
- Test performance on lower-end devices
- Provide option to disable animation
- Consider reduced motion preferences

---

## React/Next.js Integration

### Overview
The animation can be integrated into React/Next.js applications by converting the vanilla JavaScript implementation into React components with proper lifecycle management.

### Key Requirements
- **Client-Side Rendering:** Must use `'use client'` directive (Next.js App Router)
- **Three.js Package:** Install via `npm install three` or `pnpm add three`
- **Component Structure:** Separate components for 3D background and cursor trail
- **Lifecycle Management:** Proper cleanup in `useEffect` hooks

### Component Architecture

#### 1. ThreeJS Background Component
- **Purpose:** Renders the 3D scene with floating shapes
- **Location:** `components/helper/threejs-background.jsx`
- **Key Features:**
  - Uses `useRef` for DOM and Three.js object references
  - Initializes scene in `useEffect` hook
  - Handles window resize events
  - Properly disposes resources on unmount

#### 2. Cursor Trail Component
- **Purpose:** Creates the dotted trail effect following cursor
- **Location:** `components/helper/cursor-trail.jsx`
- **Key Features:**
  - Manages trail dots array with refs
  - Creates/fades dots on mouse movement
  - Cleans up DOM elements on unmount

### Integration Points

#### Option A: Global Layout
- Add components to root layout for site-wide effect
- Best for: Consistent background across all pages

#### Option B: Section-Specific
- Add to specific sections (e.g., hero section)
- Best for: Targeted animations on specific pages

### Performance Considerations
- **Dynamic Imports:** Use `next/dynamic` with `ssr: false` for code splitting
- **Conditional Rendering:** Consider disabling on mobile devices
- **Memory Management:** Properly dispose Three.js geometries and materials
- **Event Cleanup:** Remove all event listeners in cleanup functions

### Next.js Specific Notes
- **SSR Compatibility:** Three.js requires client-side only rendering
- **Z-Index Management:** Ensure canvas is behind content (z-0 or z-1)
- **Styling:** Use Tailwind classes or CSS modules for positioning
- **TypeScript:** Can be converted to `.tsx` with proper Three.js types

### Implementation Checklist
- [ ] Install Three.js package
- [ ] Create ThreeJS background component
- [ ] Create cursor trail component
- [ ] Add components to layout or target section
- [ ] Add global styles for background gradient
- [ ] Test on desktop and mobile
- [ ] Verify cleanup on navigation
- [ ] Optimize for performance

---

## Inspiration & References

- **Original Source:** hudahajira.com
- **Three.js Docs:** https://threejs.org/docs/
- **WebGL Best Practices:** MDN Web Docs
- **React Three Fiber:** Alternative React wrapper for Three.js (optional)

---

## Future Enhancements

- [ ] Add shape morphing animations
- [ ] Implement color transitions
- [ ] Add sound effects (optional)
- [ ] Create preset themes
- [ ] Add configuration panel
- [ ] Optimize for mobile devices
- [ ] Add keyboard controls
- [ ] Implement shape selection/highlighting

---

**Last Updated:** 2025  
**Status:** Reference Document  
**Version:** 1.1


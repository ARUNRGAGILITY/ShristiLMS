# ShristiLMS Navigation System

## Overview

This document describes the centralized navigation system for ShristiLMS, which ensures consistent navigation button styles across all pages using CSS variables and a shared CSS file.

## Files

### `global.css`
Centralized CSS file containing all navigation styles and theme variables.

**Key Features:**
- CSS variables for consistent theming
- Responsive navigation styles
- Theme-aware navigation links
- Mobile-first design

### `js/shared-nav.js`
JavaScript component for shared navigation functionality.

**Features:**
- Theme toggle functionality
- Active page highlighting
- Mobile navigation handling
- Navbar scroll effects

## CSS Variables

### Theme Variables
```css
[data-theme="light"] {
    --nav-link-bg: rgba(59, 130, 246, 0.1);
    --nav-link-bg-hover: rgba(59, 130, 246, 0.2);
    --nav-link-color: var(--text-primary);
}

[data-theme="dark"] {
    --nav-link-bg: rgba(255, 255, 255, 0.1);
    --nav-link-bg-hover: rgba(255, 255, 255, 0.2);
    --nav-link-color: var(--text-primary);
}
```

## Usage

### 1. Include the CSS
Add this to your HTML `<head>` section:
```html
<link rel="stylesheet" href="global.css" />
```

### 2. Include the JavaScript
Add this before the closing `</body>` tag:
```html
<script src="js/shared-nav.js"></script>
```

### 3. Use Navigation Classes
```html
<!-- Standard navigation link -->
<a href="index.html" class="nav-link">Home</a>

<!-- Quiz button with special styling -->
<a href="quiz.html" class="nav-link quiz-link">Quiz</a>

<!-- Theme toggle button -->
<button class="theme-toggle" id="themeToggle">
    <i class="fas fa-sun" id="themeIcon"></i>
</button>
```

### 4. Navbar Structure
```html
<nav class="navbar-theme">
    <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <a href="index.html">
                    <img src="assets/logo.png" alt="Logo" class="w-12 h-12">
                </a>
            </div>
            
            <!-- Navigation Links -->
            <div class="flex items-center space-x-4">
                <a href="index.html" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="quiz.html" class="nav-link quiz-link">Quiz</a>
                <button class="theme-toggle" id="themeToggle">
                    <i class="fas fa-sun" id="themeIcon"></i>
                </button>
            </div>
        </div>
    </div>
</nav>
```

## Features

### ✅ Consistent Styling
- All navigation buttons use the same CSS variables
- Consistent hover effects and transitions
- Theme-aware colors and backgrounds

### ✅ DRY Implementation
- Single source of truth for navigation styles
- No duplicate CSS across pages
- Centralized theme variables

### ✅ Responsive Design
- Mobile-first approach
- Responsive padding and font sizes
- Touch-friendly button sizes

### ✅ Theme Support
- Automatic light/dark mode switching
- Theme-aware navigation colors
- Consistent across all pages

## Benefits

1. **Consistency**: All pages now have identical navigation button styles
2. **Maintainability**: Changes to navigation styles only need to be made in one place
3. **Performance**: Reduced CSS duplication across pages
4. **Accessibility**: Consistent focus states and hover effects
5. **Theme Support**: Seamless light/dark mode switching

## Migration Guide

If you have existing pages with custom navigation styles:

1. Remove duplicate CSS variables and navigation styles
2. Include `global.css` in your HTML
3. Replace custom navigation classes with `.nav-link`
4. Add `quiz-link` class for quiz buttons
5. Ensure theme toggle has proper IDs (`themeToggle`, `themeIcon`)

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS custom properties (variables)
- ES6+ JavaScript features 
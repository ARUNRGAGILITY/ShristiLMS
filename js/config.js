// LMS Configuration
const CONFIG = {
    // Branding
    brandName: 'Shristi',
    brandLogo: 'S', // Single letter for the logo circle
    tagline: 'Empowering learners worldwide',
    
    // URLs
    homeUrl: 'index.html',
    verificationUrl: 'verify.shristilms.com',
    
    // Theme
    defaultTheme: 'light', // 'light' or 'dark'
    
    // Course Settings
    defaultPassingScore: 60, // Percentage
    
    // Footer
    footerText: '© 2025 Shristi. Empowering learners worldwide.',
    
    // Certificate
    certificatePrefix: 'SLM', // Used in certificate IDs: SLM-COURSE-TIMESTAMP
    
    // Colors (can be customized)
    colors: {
        primary: {
            light: '#2563eb', // blue-600
            dark: '#3b82f6'   // blue-500
        },
        secondary: {
            light: '#7c3aed', // purple-600
            dark: '#8b5cf6'   // purple-500
        }
    }
};

// Make config globally available
window.CONFIG = CONFIG;
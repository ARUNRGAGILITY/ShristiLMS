// python_content.js - Main loader file
console.log('Loading python_content.js...');

// Initialize the main content object
window.PYTHON_CONTENT = {
    icon: '🐍',
    title: 'Python Mastery',
    description: 'Master Python programming from basics to advanced concepts',
    chapters: {}
};

// List of chapter files to load
const CHAPTER_FILES = [
    'content/python/chapters/intro.js',
    'content/python/chapters/basics.js',
    'content/python/chapters/control_flow.js',
    'content/python/chapters/data_structures.js',
    'content/python/chapters/functions.js',
    'content/python/chapters/lamda.js',
    'content/python/chapters/collections.js',
    'content/python/chapters/oop.js',
    'content/python/chapters/modules.js',
    'content/python/chapters/file_handling.js',
    'content/python/chapters/error_handling.js',
    'content/python/chapters/libraries.js',
    'content/python/chapters/best_practices.js'
];

// Function to load a script dynamically
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            console.log(`Loaded: ${src}`);
            resolve();
        };
        script.onerror = () => {
            console.error(`Failed to load: ${src}`);
            reject(new Error(`Failed to load script: ${src}`));
        };
        document.head.appendChild(script);
    });
}

// Load all chapter files
async function loadAllChapters() {
    try {
        console.log('Starting to load Python content chapters...');
        
        // Load all chapter files sequentially
        for (const file of CHAPTER_FILES) {
            await loadScript(file);
        }
        
        console.log('All Python content chapters loaded successfully!');
        console.log('PYTHON_CONTENT chapters:', Object.keys(window.PYTHON_CONTENT.chapters));
        
        // Dispatch custom event to notify that content is ready
        window.dispatchEvent(new CustomEvent('pythonContentReady', {
            detail: { content: window.PYTHON_CONTENT }
        }));
        
    } catch (error) {
        console.error('Error loading Python content:', error);
    }
}

// Start loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllChapters);
} else {
    loadAllChapters();
}
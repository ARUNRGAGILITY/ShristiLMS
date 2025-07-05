// test-content.js
console.log('Loading test-content.js...');

const TEST_CONTENT = {
    icon: '🧪',
    title: 'Test Course',
    description: 'Simple test course for debugging',
    chapters: {
        intro: {
            title: 'Test Introduction',
            content: `
                <h1>🧪 Test Course</h1>
                
                <div class="theory-box">
                    <h4>This is a test</h4>
                    <p>If you can see this, the content loading is working correctly!</p>
                </div>

                <div class="code-block">
                    <span class="comment"># Test command</span>
                    <div class="command">$ echo "Hello World"</div>
                    <div class="output">Hello World</div>
                </div>

                <div class="tip">
                    <strong>💡 Success:</strong> The content system is working!
                </div>
            `
        },
        basics: {
            title: 'Test Basics',
            content: `
                <h1>📚 Test Basics</h1>
                
                <div class="practice-box">
                    <h4>Basic Test</h4>
                    <p>This is the second chapter of the test course.</p>
                </div>

                <div class="exercise">
                    <h4>🎯 Test Exercise</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Check if navigation works
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Verify content loads properly
                    </div>
                </div>
            `
        }
    }
};

// Attach to window explicitly
window.TEST_CONTENT = TEST_CONTENT;

console.log('TEST_CONTENT loaded:', TEST_CONTENT);
console.log('TEST_CONTENT attached to window:', window.TEST_CONTENT);
console.log('TEST_CONTENT available globally:', typeof window.TEST_CONTENT !== 'undefined');
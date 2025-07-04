// git-content.js
const GIT_CONTENT = {
    icon: '🔧',
    title: 'Git Mastery',
    description: 'Master Git and version control fundamentals',
    chapters: {
        intro: {
            title: 'Introduction to Version Control',
            content: `
                <h1>🚀 Introduction to Version Control</h1>
                
                <div class="theory-box">
                    <h4>What is Version Control?</h4>
                    <p>Version control is a system that records changes to files over time so you can recall specific versions later. Think of it as a sophisticated "time machine" for your code that allows you to:</p>
                    <ul>
                        <li>Track every change made to your files</li>
                        <li>See who made what changes and when</li>
                        <li>Revert to previous versions if something goes wrong</li>
                        <li>Collaborate with others without conflicts</li>
                    </ul>
                </div>

                <h2>Why Version Control Matters</h2>
                <p>Imagine you're working on a important project and suddenly realize you've broken something that was working perfectly yesterday. Without version control, you'd have to manually undo all your changes or start from scratch. With version control, you can simply revert to yesterday's working version!</p>

                <div class="scenario-box">
                    <h4>Real-World Scenario</h4>
                    <p><strong>The Freelancer's Nightmare:</strong> Sarah is a freelance web developer. She's been working on a client's website for weeks. One day, she decides to "improve" the navigation system. After several hours of changes, she realizes the new approach won't work and wants to go back to the original design. Without version control, she'd have to recreate everything from memory. With Git, she can simply revert to any previous version in seconds!</p>
                </div>

                <h3>Version Control vs. Traditional File Management</h3>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Traditional Approach] --> B[File_v1.docx]
                        A --> C[File_v2.docx]
                        A --> D[File_FINAL.docx]
                        A --> E[File_FINAL_REVISED.docx]
                        A --> F[File_FINAL_FINAL.docx]
                        
                        G[Version Control] --> H[Single File]
                        H --> I[Version History]
                        I --> J[All Changes Tracked]
                        I --> K[Who Changed What]
                        I --> L[When Changes Made]
                        I --> M[Why Changes Made]
                    </div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 1: Understanding Version Control</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Think of a project you're currently working on (could be code, writing, design, etc.)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> List 3 scenarios where you wished you could go back to a previous version
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Imagine collaborating with 3 other people on this project. What challenges would you face without version control?
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Key Takeaway:</strong> Version control isn't just about backing up files—it's about giving you the confidence to experiment, collaborate, and iterate without fear of losing work or breaking things permanently.
                </div>
            `
        },
        fundamentals: {
            title: 'Git Fundamentals',
            content: `
                <h1>🔧 Git Fundamentals</h1>
                
                <div class="theory-box">
                    <h4>What Makes Git Special?</h4>
                    <p>Git is a distributed version control system created by Linus Torvalds (the creator of Linux) in 2005. Unlike other VCS, Git thinks of data as snapshots, not differences. Every time you commit, Git takes a picture of all your files and stores a reference to that snapshot.</p>
                </div>

                <h2>The Three States of Git</h2>
                <p>Git has three main states that your files can reside in: <strong>working directory</strong>, <strong>staging area</strong>, and <strong>repository</strong>.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[Working Directory] -->|git add| B[Staging Area]
                        B -->|git commit| C[Repository]
                        C -->|git checkout| A
                        
                        A --> D[Modified Files]
                        B --> E[Staged Files]
                        C --> F[Committed Files]
                        
                        style A fill:#ffeb3b
                        style B fill:#ff9800
                        style C fill:#4caf50
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Analogy: The Photography Studio</h4>
                    <p>Think of Git like a photography studio:</p>
                    <ul>
                        <li><strong>Working Directory:</strong> Your models getting ready (files being edited)</li>
                        <li><strong>Staging Area:</strong> Models positioned and ready for the shot (files selected for commit)</li>
                        <li><strong>Repository:</strong> The final photographs in your portfolio (committed snapshots)</li>
                    </ul>
                </div>

                <h2>Git Configuration</h2>
                <p>Before using Git, you need to configure it with your identity. This information is used for every commit you make.</p>

                <div class="code-block">
                    <span class="comment"># Set your name and email (do this once)</span>
                    <div class="command">$ git config --global user.name "John Doe"</div>
                    <div class="command">$ git config --global user.email "john@example.com"</div>
                    
                    <span class="comment"># Check your configuration</span>
                    <div class="command">$ git config --list</div>
                    <div class="output">user.name=John Doe</div>
                    <div class="output">user.email=john@example.com</div>
                    
                    <span class="comment"># Set your default editor</span>
                    <div class="command">$ git config --global core.editor "code --wait"</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 2: First Git Setup</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Install Git on your system (git-scm.com)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Configure your name and email
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Set your preferred text editor
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Run \`git config --list\` to verify your settings
                    </div>
                </div>

                <div class="warning">
                    <strong>⚠️ Important:</strong> The \`.git\` folder contains all the repository history. Never delete it unless you want to lose all version control history!
                </div>
            `
        },
        repositories: {
            title: 'Working with Repositories',
            content: `
                <h1>📁 Working with Repositories</h1>
                
                <div class="theory-box">
                    <h4>The Git Workflow</h4>
                    <p>Working with Git follows a predictable pattern: modify files, stage changes, commit snapshots, and optionally push to remote repositories. Understanding this workflow is crucial for effective Git usage.</p>
                </div>

                <h2>The Basic Git Workflow</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[1. Edit Files] --> B[2. Stage Changes]
                        B --> C[3. Commit Snapshot]
                        C --> D[4. Push to Remote]
                        D --> E[5. Pull Updates]
                        E --> A
                        
                        style A fill:#ffeb3b
                        style B fill:#ff9800
                        style C fill:#4caf50
                        style D fill:#2196f3
                        style E fill:#9c27b0
                    </div>
                </div>

                <h2>Checking Repository Status</h2>
                <p>The \`git status\` command is your best friend. It shows you exactly what's happening in your repository.</p>

                <div class="code-block">
                    <span class="comment"># Check the status of your repository</span>
                    <div class="command">$ git status</div>
                    <div class="output">On branch main</div>
                    <div class="output">Changes to be committed:</div>
                    <div class="output">        new file:   index.html</div>
                    <div class="output">Changes not staged for commit:</div>
                    <div class="output">        modified:   README.md</div>
                    <div class="output">Untracked files:</div>
                    <div class="output">        styles.css</div>
                </div>

                <div class="interactive-demo">
                    <h4>🎮 Interactive Demo: Git Status</h4>
                    <p>Click the buttons to see how Git status changes:</p>
                    <button class="demo-button" onclick="showStatus('clean')">Clean Repository</button>
                    <button class="demo-button" onclick="showStatus('modified')">Modified Files</button>
                    <button class="demo-button" onclick="showStatus('staged')">Staged Files</button>
                    <button class="demo-button" onclick="showStatus('committed')">After Commit</button>
                    <div class="demo-output" id="statusOutput">
                        On branch main<br>
                        nothing to commit, working tree clean
                    </div>
                </div>

                <h2>Making Commits</h2>
                <p>A commit is a snapshot of your staged changes. Each commit should represent a logical unit of work.</p>

                <div class="code-block">
                    <span class="comment"># Commit with a message</span>
                    <div class="command">$ git commit -m "Add homepage HTML structure"</div>
                    <div class="output">[main 1a2b3c4] Add homepage HTML structure</div>
                    <div class="output"> 1 file changed, 20 insertions(+)</div>
                    
                    <span class="comment"># Stage and commit in one command</span>
                    <div class="command">$ git commit -am "Update README with installation instructions"</div>
                </div>

                <div class="tip">
                    <strong>💡 Pro Tip:</strong> Use \`git log --oneline --graph --all\` to see a visual representation of your commit history, including branches and merges.
                </div>
            `
        },
        branching: {
            title: 'Branching and Merging',
            content: `
                <h1>🌿 Branching and Merging</h1>
                
                <div class="theory-box">
                    <h4>Understanding Branches</h4>
                    <p>Branches in Git are incredibly lightweight and fast. They're simply movable pointers to specific commits. The default branch is usually called 'main' or 'master'. Creating a new branch essentially creates a new pointer to the current commit.</p>
                </div>

                <div class="scenario-box">
                    <h4>The Feature Development Scenario</h4>
                    <p><strong>Team Scenario:</strong> Your team is working on a web application. While you're implementing a new user profile feature, your teammate is fixing a critical bug in the payment system. Without branches, you'd interfere with each other's work. With branches, you can work independently and merge when ready.</p>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "Initial"
                        commit id: "Add login"
                        branch feature-profile
                        commit id: "Add profile page"
                        commit id: "Add profile edit"
                        checkout main
                        commit id: "Fix bug"
                        merge feature-profile
                        commit id: "Release v2.0"
                    </div>
                </div>

                <h2>Creating and Switching Branches</h2>
                <div class="code-block">
                    <span class="comment"># Create a new branch</span>
                    <div class="command">$ git branch feature-user-profile</div>
                    
                    <span class="comment"># Switch to a branch</span>
                    <div class="command">$ git checkout feature-user-profile</div>
                    
                    <span class="comment"># Create and switch in one command</span>
                    <div class="command">$ git checkout -b feature-dashboard</div>
                    
                    <span class="comment"># Modern way (Git 2.23+)</span>
                    <div class="command">$ git switch feature-user-profile</div>
                    <div class="command">$ git switch -c feature-new-feature</div>
                </div>

                <div class="interactive-demo">
                    <h4>🎮 Interactive Demo: Branch Visualization</h4>
                    <p>Click to see how branches evolve:</p>
                    <button class="demo-button" onclick="showBranch('initial')">Initial State</button>
                    <button class="demo-button" onclick="showBranch('branch')">Create Branch</button>
                    <button class="demo-button" onclick="showBranch('commits')">Add Commits</button>
                    <button class="demo-button" onclick="showBranch('merge')">Merge Branch</button>
                    <div class="demo-output" id="branchOutput">
                        main: A --- B --- C
                    </div>
                </div>

                <h2>Merging Branches</h2>
                <p>Once you've finished work on a branch, you can merge it back into the main branch.</p>

                <div class="code-block">
                    <span class="comment"># Switch to main branch</span>
                    <div class="command">$ git checkout main</div>
                    
                    <span class="comment"># Merge feature branch</span>
                    <div class="command">$ git merge feature-navbar</div>
                    <div class="output">Updating 5d6e7f8..1a2b3c4</div>
                    <div class="output">Fast-forward</div>
                    <div class="output"> navbar.html | 25 +++++++++++++++++++++++++</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 4: Working with Branches</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a new branch called \`feature-navbar\`
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Switch to this branch
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Create a new file called \`navbar.html\`
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Add and commit this file
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Switch back to main and merge your feature branch
                    </div>
                </div>

                <div class="warning">
                    <strong>⚠️ Merge Conflicts:</strong> Sometimes Git can't automatically merge branches. When this happens, you'll need to manually resolve conflicts before completing the merge.
                </div>
            `
        },
        remote: {
            title: 'Remote Repositories',
            content: `
                <h1>🌐 Remote Repositories</h1>
                
                <div class="theory-box">
                    <h4>Understanding Remote Repositories</h4>
                    <p>Remote repositories are versions of your project that are hosted on the internet or network. They enable collaboration with other developers. The most common remote hosting services are GitHub, GitLab, and Bitbucket.</p>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Developer 1] --> B[Local Repository]
                        C[Developer 2] --> D[Local Repository]
                        E[Developer 3] --> F[Local Repository]
                        
                        B --> G[Remote Repository]
                        D --> G
                        F --> G
                        
                        style G fill:#4caf50
                        style B fill:#2196f3
                        style D fill:#2196f3
                        style F fill:#2196f3
                    </div>
                </div>

                <h2>Setting Up Remote Repositories</h2>
                <div class="code-block">
                    <span class="comment"># Add a remote repository</span>
                    <div class="command">$ git remote add origin https://github.com/username/repo.git</div>
                    
                    <span class="comment"># List remote repositories</span>
                    <div class="command">$ git remote -v</div>
                    <div class="output">origin  https://github.com/username/repo.git (fetch)</div>
                    <div class="output">origin  https://github.com/username/repo.git (push)</div>
                </div>

                <h2>Pushing Changes</h2>
                <div class="code-block">
                    <span class="comment"># Push to remote repository</span>
                    <div class="command">$ git push origin main</div>
                    <div class="output">Counting objects: 3, done.</div>
                    <div class="output">Writing objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.</div>
                    <div class="output">To https://github.com/username/repo.git</div>
                    <div class="output">   1a2b3c4..5d6e7f8  main -> main</div>
                </div>

                <h2>Pulling Changes</h2>
                <div class="code-block">
                    <span class="comment"># Pull changes from remote</span>
                    <div class="command">$ git pull origin main</div>
                    <div class="output">From https://github.com/username/repo</div>
                    <div class="output">Updating 1a2b3c4..9x8y7z6</div>
                    <div class="output">Fast-forward</div>
                    <div class="output"> README.md | 5 +++++</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 5: Working with Remotes</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a new repository on GitHub
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Add it as a remote to your local repository
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Push your local commits to GitHub
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Make a change on GitHub's web interface
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Pull the changes to your local repository
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Best Practice:</strong> Always pull before pushing to avoid conflicts. The command \`git pull --rebase\` often creates cleaner history than regular pulls.
                </div>
            `
        },
        advanced: {
            title: 'Advanced Git Operations',
            content: `
                <h1>⚡ Advanced Git Operations</h1>
                
                <div class="theory-box">
                    <h4>Beyond Basic Git</h4>
                    <p>Once you're comfortable with basic Git operations, these advanced techniques will help you manage complex scenarios, clean up your history, and work more efficiently with your team.</p>
                </div>

                <h2>Git Stash: Temporary Storage</h2>
                <div class="code-block">
                    <span class="comment"># Stash current changes</span>
                    <div class="command">$ git stash</div>
                    <div class="output">Saved working directory and index state WIP on main: 1a2b3c4 Latest commit</div>
                    
                    <span class="comment"># Apply and remove stash</span>
                    <div class="command">$ git stash pop</div>
                    
                    <span class="comment"># List all stashes</span>
                    <div class="command">$ git stash list</div>
                </div>

                <h2>Rebasing: Rewriting History</h2>
                <div class="code-block">
                    <span class="comment"># Rebase current branch onto main</span>
                    <div class="command">$ git rebase main</div>
                    
                    <span class="comment"># Interactive rebase (last 3 commits)</span>
                    <div class="command">$ git rebase -i HEAD~3</div>
                </div>

                <h2>Cherry Picking</h2>
                <div class="code-block">
                    <span class="comment"># Cherry pick a specific commit</span>
                    <div class="command">$ git cherry-pick 1a2b3c4</div>
                    <div class="output">[main 5d6e7f8] Fix critical security vulnerability</div>
                </div>

                <div class="warning">
                    <strong>⚠️ Golden Rule:</strong> Never rebase commits that have been pushed to a shared repository. It rewrites history and can cause problems for other developers.
                </div>
            `
        },
        workflows: {
            title: 'Git Workflows',
            content: `
                <h1>🔄 Git Workflows</h1>
                
                <div class="theory-box">
                    <h4>Choosing the Right Workflow</h4>
                    <p>Different teams and projects require different workflows. The key is choosing one that matches your team size, release schedule, and collaboration style.</p>
                </div>

                <h2>Feature Branch Workflow</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "Initial"
                        commit id: "Setup"
                        branch feature-login
                        commit id: "Add login form"
                        commit id: "Add validation"
                        checkout main
                        commit id: "Fix bug"
                        merge feature-login
                        commit id: "Release v1.0"
                    </div>
                </div>

                <h2>GitHub Flow</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Create Branch] --> B[Make Changes]
                        B --> C[Open Pull Request]
                        C --> D[Code Review]
                        D --> E[Tests Pass?]
                        E -->|Yes| F[Merge to Main]
                        E -->|No| B
                        F --> G[Deploy to Production]
                        
                        style C fill:#4caf50
                        style D fill:#ff9800
                        style F fill:#2196f3
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Workflow Selection Tips:</strong>
                    <ul>
                        <li><strong>Small team, simple project:</strong> GitHub Flow</li>
                        <li><strong>Large team, scheduled releases:</strong> GitFlow</li>
                        <li><strong>Open source project:</strong> Forking Workflow</li>
                    </ul>
                </div>
            `
        },
        collaboration: {
            title: 'Team Collaboration',
            content: `
                <h1>👥 Team Collaboration</h1>
                
                <div class="theory-box">
                    <h4>Effective Git Collaboration</h4>
                    <p>Successful team collaboration with Git requires clear communication, consistent workflows, and good practices. The goal is to enable multiple developers to work together efficiently.</p>
                </div>

                <h2>Pull Requests / Merge Requests</h2>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Create Feature Branch] --> B[Make Changes]
                        B --> C[Push Branch]
                        C --> D[Open Pull Request]
                        D --> E[Team Review]
                        E --> F[Request Changes?]
                        F -->|Yes| G[Make Updates]
                        G --> E
                        F -->|No| H[Approve & Merge]
                        H --> I[Delete Branch]
                        
                        style D fill:#4caf50
                        style E fill:#ff9800
                        style H fill:#2196f3
                    </div>
                </div>

                <h2>Code Review Guidelines</h2>
                <div class="practice-box">
                    <h4>What to Look for in Code Reviews</h4>
                    <ul>
                        <li><strong>Functionality:</strong> Does the code work as intended?</li>
                        <li><strong>Readability:</strong> Is the code easy to understand?</li>
                        <li><strong>Performance:</strong> Are there any performance issues?</li>
                        <li><strong>Security:</strong> Are there any security vulnerabilities?</li>
                        <li><strong>Testing:</strong> Are there adequate tests?</li>
                    </ul>
                </div>

                <div class="warning">
                    <strong>⚠️ Team Anti-Patterns to Avoid:</strong>
                    <ul>
                        <li>Force pushing to shared branches</li>
                        <li>Committing directly to main/master</li>
                        <li>Large, monolithic commits</li>
                        <li>Ignoring code review feedback</li>
                    </ul>
                </div>
            `
        },
        'best-practices': {
            title: 'Best Practices',
            content: `
                <h1>✨ Best Practices</h1>
                
                <div class="theory-box">
                    <h4>Git Mastery Through Good Habits</h4>
                    <p>Following best practices makes Git a powerful ally rather than a source of frustration. These practices will help you maintain clean repositories and collaborate effectively.</p>
                </div>

                <h2>Writing Great Commit Messages</h2>
                <div class="code-block">
                    <span class="comment"># Good commit messages</span>
                    <div class="output">✅ "feat(auth): add password reset functionality"</div>
                    <div class="output">✅ "fix(auth): prevent SQL injection in login form"</div>
                    <div class="output">✅ "docs: update installation instructions"</div>
                    
                    <span class="comment"># Bad commit messages</span>
                    <div class="output">❌ "fix stuff"</div>
                    <div class="output">❌ "update"</div>
                    <div class="output">❌ "asdf"</div>
                </div>

                <h2>The .gitignore File</h2>
                <div class="code-block">
                    <span class="comment"># Example .gitignore for a Node.js project</span>
                    <div class="output"># Dependencies</div>
                    <div class="output">node_modules/</div>
                    <div class="output">npm-debug.log*</div>
                    <div class="output"></div>
                    <div class="output"># Build outputs</div>
                    <div class="output">dist/</div>
                    <div class="output">build/</div>
                    <div class="output">*.min.js</div>
                    <div class="output"></div>
                    <div class="output"># Environment files</div>
                    <div class="output">.env</div>
                    <div class="output">.env.local</div>
                    <div class="output"></div>
                    <div class="output"># OS generated files</div>
                    <div class="output">.DS_Store</div>
                    <div class="output">Thumbs.db</div>
                </div>

                <h2>Security Best Practices</h2>
                <div class="warning">
                    <strong>⚠️ Security Considerations:</strong>
                    <ul>
                        <li>Never commit secrets, API keys, or passwords</li>
                        <li>Use environment variables for sensitive data</li>
                        <li>Regularly update dependencies</li>
                        <li>Use signed commits for verification</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Remember:</strong> Good practices become habits with repetition. Start with one or two practices and gradually incorporate more as they become natural.
                </div>
            `
        },
        troubleshooting: {
            title: 'Troubleshooting',
            content: `
                <h1>🔧 Troubleshooting</h1>
                
                <div class="theory-box">
                    <h4>Git Recovery and Problem Solving</h4>
                    <p>Even experienced Git users encounter problems. The key is knowing how to diagnose issues and having the right tools to fix them. Git is very forgiving - most "disasters" can be recovered from.</p>
                </div>

                <h2>Common Git Problems</h2>
                <div class="scenario-box">
                    <h4>The "Oh No!" Moments</h4>
                    <ul>
                        <li>😱 "I committed to the wrong branch!"</li>
                        <li>😱 "I pushed sensitive data to GitHub!"</li>
                        <li>😱 "I lost my work after a hard reset!"</li>
                        <li>😱 "I can't push because of conflicts!"</li>
                        <li>😱 "I accidentally deleted my branch!"</li>
                    </ul>
                    <p>Don't panic! Git has solutions for all of these problems.</p>
                </div>

                <h2>Undoing Commits</h2>
                <div class="code-block">
                    <span class="comment"># Undo last commit (not pushed)</span>
                    <div class="command">$ git reset --soft HEAD~1</div>
                    <div class="output"># Commit undone, changes still staged</div>
                    
                    <span class="comment"># Undo last commit and discard changes</span>
                    <div class="command">$ git reset --hard HEAD~1</div>
                    <div class="output">HEAD is now at 1a2b3c4 Previous commit</div>
                    
                    <span class="comment"># Undo a pushed commit safely</span>
                    <div class="command">$ git revert HEAD</div>
                    <div class="output">[main 5d6e7f8] Revert "Bad commit"</div>
                </div>

                <h2>Recovering Lost Work</h2>
                <div class="code-block">
                    <span class="comment"># View reflog to find lost commits</span>
                    <div class="command">$ git reflog</div>
                    <div class="output">1a2b3c4 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1</div>
                    <div class="output">5d6e7f8 HEAD@{1}: commit: Important work</div>
                    
                    <span class="comment"># Recover the lost commit</span>
                    <div class="command">$ git checkout 5d6e7f8</div>
                    <div class="command">$ git checkout -b recovery-branch</div>
                </div>

                <h2>Fixing Merge Conflicts</h2>
                <div class="code-block">
                    <span class="comment"># Conflict occurs during merge</span>
                    <div class="command">$ git merge feature-branch</div>
                    <div class="output">CONFLICT (content): Merge conflict in index.html</div>
                    
                    <span class="comment"># After manually resolving:</span>
                    <div class="command">$ git add index.html</div>
                    <div class="command">$ git commit -m "Resolve merge conflict"</div>
                </div>

                <div class="practice-box">
                    <h4>Git Debugging Toolkit</h4>
                    <ul>
                        <li><strong>git status:</strong> See current state</li>
                        <li><strong>git log --oneline:</strong> View recent commits</li>
                        <li><strong>git reflog:</strong> See all actions taken</li>
                        <li><strong>git diff:</strong> See what changed</li>
                        <li><strong>git blame:</strong> See who changed what</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Prevention is Better Than Cure:</strong>
                    <ul>
                        <li>Commit frequently</li>
                        <li>Use descriptive commit messages</li>
                        <li>Test before committing</li>
                        <li>Keep backups of important work</li>
                        <li>Use branches for experiments</li>
                    </ul>
                </div>
            `
        },
        reference: {
            title: 'Quick Reference',
            content: `
                <h1>📚 Quick Reference</h1>
                
                <div class="theory-box">
                    <h4>Your Git Command Cheat Sheet</h4>
                    <p>This comprehensive reference covers all the Git commands you'll need in your daily workflow. Bookmark this page and refer to it whenever you need a quick reminder!</p>
                </div>

                <h2>Repository Setup</h2>
                <div class="code-block">
                    <span class="comment"># Initialize a new repository</span>
                    <div class="command">$ git init</div>
                    <div class="command">$ git init my-project</div>
                    
                    <span class="comment"># Clone an existing repository</span>
                    <div class="command">$ git clone https://github.com/user/repo.git</div>
                    
                    <span class="comment"># Configure Git</span>
                    <div class="command">$ git config --global user.name "Your Name"</div>
                    <div class="command">$ git config --global user.email "your.email@example.com"</div>
                </div>

                <h2>Basic Workflow</h2>
                <div class="code-block">
                    <span class="comment"># Check repository status</span>
                    <div class="command">$ git status</div>
                    <div class="command">$ git status -s</div>
                    
                    <span class="comment"># Add files to staging</span>
                    <div class="command">$ git add file.txt</div>
                    <div class="command">$ git add .</div>
                    <div class="command">$ git add -A</div>
                    
                    <span class="comment"># Commit changes</span>
                    <div class="command">$ git commit -m "Commit message"</div>
                    <div class="command">$ git commit -am "Stage and commit"</div>
                    
                    <span class="comment"># View history</span>
                    <div class="command">$ git log</div>
                    <div class="command">$ git log --oneline</div>
                    <div class="command">$ git log --graph --oneline --all</div>
                </div>

                <h2>Branching and Merging</h2>
                <div class="code-block">
                    <span class="comment"># Branch operations</span>
                    <div class="command">$ git branch</div>
                    <div class="command">$ git branch feature-name</div>
                    <div class="command">$ git branch -d feature-name</div>
                    
                    <span class="comment"># Switch branches</span>
                    <div class="command">$ git checkout branch-name</div>
                    <div class="command">$ git checkout -b new-branch</div>
                    <div class="command">$ git switch branch-name</div>
                    
                    <span class="comment"># Merging</span>
                    <div class="command">$ git merge branch-name</div>
                </div>

                <h2>Remote Operations</h2>
                <div class="code-block">
                    <span class="comment"># Remote management</span>
                    <div class="command">$ git remote -v</div>
                    <div class="command">$ git remote add origin url</div>
                    
                    <span class="comment"># Fetch and pull</span>
                    <div class="command">$ git fetch</div>
                    <div class="command">$ git pull</div>
                    <div class="command">$ git pull origin main</div>
                    
                    <span class="comment"># Push operations</span>
                    <div class="command">$ git push</div>
                    <div class="command">$ git push origin main</div>
                    <div class="command">$ git push -u origin branch-name</div>
                </div>

                <h2>Undoing Changes</h2>
                <div class="code-block">
                    <span class="comment"># Unstage files</span>
                    <div class="command">$ git restore --staged file.txt</div>
                    
                    <span class="comment"># Discard working directory changes</span>
                    <div class="command">$ git restore file.txt</div>
                    
                    <span class="comment"># Reset commits</span>
                    <div class="command">$ git reset --soft HEAD~1</div>
                    <div class="command">$ git reset HEAD~1</div>
                    <div class="command">$ git reset --hard HEAD~1</div>
                    
                    <span class="comment"># Revert commits</span>
                    <div class="command">$ git revert HEAD</div>
                </div>

                <h2>Advanced Operations</h2>
                <div class="code-block">
                    <span class="comment"># Stashing</span>
                    <div class="command">$ git stash</div>
                    <div class="command">$ git stash pop</div>
                    <div class="command">$ git stash list</div>
                    
                    <span class="comment"># Rebasing</span>
                    <div class="command">$ git rebase main</div>
                    <div class="command">$ git rebase -i HEAD~3</div>
                    
                    <span class="comment"># Cherry picking</span>
                    <div class="command">$ git cherry-pick commit-hash</div>
                </div>

                <h2>Useful Aliases</h2>
                <div class="code-block">
                    <span class="comment"># Set up helpful aliases</span>
                    <div class="command">$ git config --global alias.co checkout</div>
                    <div class="command">$ git config --global alias.br branch</div>
                    <div class="command">$ git config --global alias.ci commit</div>
                    <div class="command">$ git config --global alias.st status</div>
                    <div class="command">$ git config --global alias.lg "log --oneline --graph --all"</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Git Mastery Journey] --> B[Learn Basics]
                        B --> C[Practice Daily Workflow]
                        C --> D[Master Branching]
                        D --> E[Team Collaboration]
                        E --> F[Advanced Techniques]
                        F --> G[Troubleshooting Expert]
                        G --> H[Git Master! 🏆]
                        
                        style A fill:#4caf50
                        style H fill:#ff9800
                    </div>
                </div>

                <div class="practice-box">
                    <h4>🎓 Congratulations!</h4>
                    <p>You've completed the comprehensive Git guide! You now have the knowledge and tools to:</p>
                    <ul>
                        <li>✅ Understand version control fundamentals</li>
                        <li>✅ Master the Git workflow</li>
                        <li>✅ Work effectively with branches</li>
                        <li>✅ Collaborate seamlessly with teams</li>
                        <li>✅ Handle complex scenarios with confidence</li>
                        <li>✅ Troubleshoot and recover from problems</li>
                    </ul>
                </div>

                <div class="tip">
                    <strong>💡 Final Pro Tips:</strong>
                    <ul>
                        <li>Commit early and often</li>
                        <li>Write meaningful commit messages</li>
                        <li>Use branches for all new work</li>
                        <li>Keep your repository clean and organized</li>
                        <li>Don't be afraid to experiment - Git has your back!</li>
                    </ul>
                </div>

                <div style="text-align: center; margin-top: 40px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
                    <h2 style="color: white; margin-bottom: 15px;">🎉 Happy Git-ing!</h2>
                    <p style="font-size: 1.2em; margin-bottom: 0;">You're now equipped with the knowledge to version control like a pro. Go forth and build amazing things!</p>
                </div>
            `
        }
    }
};
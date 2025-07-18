// git_content.js
console.log('Loading git_content.js...');

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

                <div class="practice-box">
                    <h4>Hands-On Understanding</h4>
                    <p>Let's understand this with a simple analogy. Think of version control like a detailed diary for your project:</p>
                    <ul>
                        <li><strong>Entry 1:</strong> "Created initial project structure"</li>
                        <li><strong>Entry 2:</strong> "Added user login functionality"</li>
                        <li><strong>Entry 3:</strong> "Fixed bug in password validation"</li>
                        <li><strong>Entry 4:</strong> "Added user dashboard"</li>
                    </ul>
                    <p>Each entry represents a "commit" in Git terminology - a snapshot of your project at that moment.</p>
                </div>

                <h2>Types of Version Control Systems</h2>
                
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[Version Control Systems] --> B[Local VCS]
                        A --> C[Centralized VCS]
                        A --> D[Distributed VCS]
                        
                        B --> E[RCS, SCCS]
                        C --> F[SVN, Perforce]
                        D --> G[Git, Mercurial]
                        
                        style D fill:#e1f5fe
                        style G fill:#c8e6c9
                    </div>
                </div>

                <h3>1. Local Version Control</h3>
                <p>Simple database that keeps all changes to files under revision control on your local machine. Limited to single-user scenarios.</p>

                <h3>2. Centralized Version Control</h3>
                <p>Single server contains all versioned files. Clients check out files from this central place. Examples: SVN, Perforce.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Central Server] --> B[Developer 1]
                        A --> C[Developer 2]
                        A --> D[Developer 3]
                        
                        B --> A
                        C --> A
                        D --> A
                        
                        style A fill:#ffcdd2
                    </div>
                </div>

                <h3>3. Distributed Version Control (Git)</h3>
                <p>Every client has a complete copy of the project history. No single point of failure. Can work offline.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Remote Repository] --> B[Developer 1 Local Repo]
                        A --> C[Developer 2 Local Repo]
                        A --> D[Developer 3 Local Repo]
                        
                        B --> A
                        C --> A
                        D --> A
                        
                        B --> E[Full History]
                        C --> F[Full History]
                        D --> G[Full History]
                        
                        style A fill:#c8e6c9
                        style B fill:#c8e6c9
                        style C fill:#c8e6c9
                        style D fill:#c8e6c9
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

                <h3>1. Working Directory</h3>
                <p>This is where you make changes to your files. It's your current project folder where you edit, create, and delete files.</p>

                <div class="code-block">
                    <span class="comment"># Check what's in your working directory</span>
                    <div class="command">$ ls -la</div>
                    <div class="output">total 16</div>
                    <div class="output">drwxr-xr-x  4 user user 4096 Jan 15 10:30 .</div>
                    <div class="output">drwxr-xr-x  3 user user 4096 Jan 15 10:29 ..</div>
                    <div class="output">drwxr-xr-x  8 user user 4096 Jan 15 10:30 .git</div>
                    <div class="output">-rw-r--r--  1 user user   23 Jan 15 10:30 README.md</div>
                    <div class="output">-rw-r--r--  1 user user  156 Jan 15 10:30 index.html</div>
                </div>

                <h3>2. Staging Area (Index)</h3>
                <p>The staging area is like a loading dock where you prepare your next commit. You can add and remove files from the staging area before making a commit.</p>

                <div class="practice-box">
                    <h4>Understanding Staging</h4>
                    <p>The staging area is Git's unique feature. It allows you to carefully control what goes into each commit. You might change 10 files but only want to commit 3 of them that relate to a specific feature.</p>
                </div>

                <h3>3. Repository</h3>
                <p>The repository is where Git stores all the committed snapshots of your project. Each commit creates a new snapshot that you can return to later.</p>

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
                    <div class="output">core.editor=vim</div>
                    
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

                <h2>Creating Your First Repository</h2>
                <p>There are two ways to get a Git repository: create one from scratch or clone an existing one.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Getting a Git Repository] --> B[git init]
                        A --> C[git clone]
                        
                        B --> D[Create new repository]
                        C --> E[Copy existing repository]
                        
                        D --> F[Empty .git folder]
                        E --> G[Full project history]
                        
                        style B fill:#4caf50
                        style C fill:#2196f3
                    </div>
                </div>

                <h3>Method 1: Initialize a New Repository</h3>
                <div class="code-block">
                    <span class="comment"># Create a new directory and initialize Git</span>
                    <div class="command">$ mkdir my-awesome-project</div>
                    <div class="command">$ cd my-awesome-project</div>
                    <div class="command">$ git init</div>
                    <div class="output">Initialized empty Git repository in /path/to/my-awesome-project/.git/</div>
                    
                    <span class="comment"># Check the status</span>
                    <div class="command">$ git status</div>
                    <div class="output">On branch main</div>
                    <div class="output">No commits yet</div>
                    <div class="output">nothing to commit (create/copy files and use "git add" to track)</div>
                </div>

                <h3>Method 2: Clone an Existing Repository</h3>
                <div class="code-block">
                    <span class="comment"># Clone a repository from GitHub</span>
                    <div class="command">$ git clone https://github.com/user/repo.git</div>
                    <div class="output">Cloning into 'repo'...</div>
                    <div class="output">remote: Counting objects: 100, done.</div>
                    <div class="output">remote: Compressing objects: 100% (50/50), done.</div>
                    <div class="output">remote: Total 100 (delta 25), reused 100 (delta 25)</div>
                    <div class="output">Receiving objects: 100% (100/100), 15.50 KiB | 0 bytes/s, done.</div>
                    <div class="output">Resolving deltas: 100% (25/25), done.</div>
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

                <div class="warning">
                    <strong>⚠️ Important:</strong> The .git folder contains all the repository history. Never delete it unless you want to lose all version control history!
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
                        
                        A --> F[git add]
                        B --> G[git commit]
                        C --> H[git push]
                        D --> I[git pull]
                        
                        style A fill:#ffeb3b
                        style B fill:#ff9800
                        style C fill:#4caf50
                        style D fill:#2196f3
                        style E fill:#9c27b0
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Daily Developer Workflow</h4>
                    <p><strong>Morning Routine:</strong> Emma starts her day by pulling the latest changes from the remote repository. She then works on a new feature, adds her changes to staging, commits them with a descriptive message, and pushes her work to share with the team.</p>
                </div>

                <h2>Checking Repository Status</h2>
                <p>The \`git status\` command is your best friend. It shows you exactly what's happening in your repository.</p>

                <div class="code-block">
                    <span class="comment"># Check the status of your repository</span>
                    <div class="command">$ git status</div>
                    <div class="output">On branch main</div>
                    <div class="output">Your branch is up to date with 'origin/main'.</div>
                    <div class="output"></div>
                    <div class="output">Changes to be committed:</div>
                    <div class="output">  (use "git reset HEAD <file>..." to unstage)</div>
                    <div class="output">        new file:   index.html</div>
                    <div class="output"></div>
                    <div class="output">Changes not staged for commit:</div>
                    <div class="output">  (use "git add <file>..." to update what will be committed)</div>
                    <div class="output">  (use "git restore <file>..." to discard changes in working directory)</div>
                    <div class="output">        modified:   README.md</div>
                    <div class="output"></div>
                    <div class="output">Untracked files:</div>
                    <div class="output">  (use "git add <file>..." to include in what will be committed)</div>
                    <div class="output">        styles.css</div>
                </div>

                <div class="practice-box">
                    <h4>Understanding Git Status Output</h4>
                    <ul>
                        <li><strong>Changes to be committed:</strong> Files in the staging area</li>
                        <li><strong>Changes not staged for commit:</strong> Modified files in working directory</li>
                        <li><strong>Untracked files:</strong> New files Git doesn't know about</li>
                    </ul>
                </div>

                <h2>Staging Changes</h2>
                <p>The staging area lets you carefully control what goes into each commit. You can stage individual files, parts of files, or everything at once.</p>

                <div class="code-block">
                    <span class="comment"># Stage a specific file</span>
                    <div class="command">$ git add index.html</div>
                    
                    <span class="comment"># Stage multiple files</span>
                    <div class="command">$ git add index.html styles.css script.js</div>
                    
                    <span class="comment"># Stage all modified files</span>
                    <div class="command">$ git add .</div>
                    
                    <span class="comment"># Stage all files including deletions</span>
                    <div class="command">$ git add -A</div>
                    
                    <span class="comment"># Stage interactively (choose what to stage)</span>
                    <div class="command">$ git add -i</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[Working Directory] --> B[Staging Area]
                        B --> C[Repository]
                        
                        A --> D[file1.txt modified]
                        A --> E[file2.txt modified]
                        A --> F[file3.txt new]
                        
                        B --> G[file1.txt staged]
                        B --> H[file3.txt staged]
                        
                        C --> I[Previous commits]
                        
                        style B fill:#ff9800
                    </div>
                </div>

                <h3>Selective Staging</h3>
                <p>Sometimes you've made multiple changes to a file but only want to commit some of them. Git allows you to stage parts of a file.</p>

                <div class="code-block">
                    <span class="comment"># Stage parts of a file interactively</span>
                    <div class="command">$ git add -p filename.txt</div>
                    <div class="output">diff --git a/filename.txt b/filename.txt</div>
                    <div class="output">index 1234567..abcdefg 100644</div>
                    <div class="output">--- a/filename.txt</div>
                    <div class="output">+++ b/filename.txt</div>
                    <div class="output">@@ -1,4 +1,6 @@</div>
                    <div class="output"> Line 1</div>
                    <div class="output"> Line 2</div>
                    <div class="output">+New line added</div>
                    <div class="output"> Line 3</div>
                    <div class="output"> Line 4</div>
                    <div class="output">Stage this hunk [y,n,q,a,d,/,s,e,?]?</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 3: Staging Practice</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a new file called \`index.html\` with some basic HTML
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Modify an existing file (like README.md)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Run \`git status\` to see the changes
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Stage only the new file using \`git add index.html\`
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Run \`git status\` again to see the difference
                    </div>
                </div>

                <h2>Making Commits</h2>
                <p>A commit is a snapshot of your staged changes. Each commit should represent a logical unit of work.</p>

                <div class="code-block">
                    <span class="comment"># Commit with a message</span>
                    <div class="command">$ git commit -m "Add homepage HTML structure"</div>
                    <div class="output">[main 1a2b3c4] Add homepage HTML structure</div>
                    <div class="output"> 1 file changed, 20 insertions(+)</div>
                    <div class="output"> create mode 100644 index.html</div>
                    
                    <span class="comment"># Commit with a detailed message</span>
                    <div class="command">$ git commit -m "Add user authentication" -m "Implement login/logout functionality with session management"</div>
                    
                    <span class="comment"># Stage and commit in one command</span>
                    <div class="command">$ git commit -am "Update README with installation instructions"</div>
                </div>

                <div class="theory-box">
                    <h4>Anatomy of a Good Commit Message</h4>
                    <ul>
                        <li><strong>Subject line:</strong> 50 characters or less, imperative mood</li>
                        <li><strong>Body:</strong> Explain what and why, not how</li>
                        <li><strong>Footer:</strong> Reference issues, breaking changes</li>
                    </ul>
                </div>

                <h2>Viewing History</h2>
                <p>Git provides powerful tools to explore your project's history.</p>

                <div class="code-block">
                    <span class="comment"># Basic log</span>
                    <div class="command">$ git log</div>
                    <div class="output">commit 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0</div>
                    <div class="output">Author: John Doe &lt;john@example.com&gt;</div>
                    <div class="output">Date:   Mon Jan 15 10:30:00 2024 -0500</div>
                    <div class="output"></div>
                    <div class="output">    Add homepage HTML structure</div>
                    <div class="output"></div>
                    <div class="output">    Created the basic HTML structure for the homepage</div>
                    <div class="output">    including navigation, header, and main content areas.</div>
                    
                    <span class="comment"># Compact log</span>
                    <div class="command">$ git log --oneline</div>
                    <div class="output">1a2b3c4 Add homepage HTML structure</div>
                    <div class="output">5d6e7f8 Initial commit</div>
                    
                    <span class="comment"># Visual log</span>
                    <div class="command">$ git log --graph --oneline --all</div>
                    <div class="output">* 1a2b3c4 Add homepage HTML structure</div>
                    <div class="output">* 5d6e7f8 Initial commit</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "Initial commit"
                        commit id: "Add README"
                        commit id: "Add HTML structure"
                        branch feature
                        commit id: "Add CSS styles"
                        commit id: "Add JavaScript"
                        checkout main
                        commit id: "Update README"
                        merge feature
                        commit id: "Release v1.0"
                    </div>
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

                <h2>Why Use Branches?</h2>
                <p>Branches allow you to diverge from the main line of development and work on features, experiments, or bug fixes in isolation.</p>

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
                        branch hotfix
                        commit id: "Critical fix"
                        checkout main
                        merge hotfix
                        merge feature-profile
                        commit id: "Release v2.0"
                    </div>
                </div>

                <h2>Creating and Switching Branches</h2>
                <div class="code-block">
                    <span class="comment"># Create a new branch</span>
                    <div class="command">$ git branch feature-user-profile</div>
                    
                    <span class="comment"># List all branches</span>
                    <div class="command">$ git branch</div>
                    <div class="output">  feature-user-profile</div>
                    <div class="output">* main</div>
                    
                    <span class="comment"># Switch to a branch</span>
                    <div class="command">$ git checkout feature-user-profile</div>
                    <div class="output">Switched to branch 'feature-user-profile'</div>
                    
                    <span class="comment"># Create and switch in one command</span>
                    <div class="command">$ git checkout -b feature-dashboard</div>
                    <div class="output">Switched to a new branch 'feature-dashboard'</div>
                    
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

                <h2>Branch Management</h2>
                <div class="code-block">
                    <span class="comment"># List all branches (including remote)</span>
                    <div class="command">$ git branch -a</div>
                    <div class="output">* feature-user-profile</div>
                    <div class="output">  main</div>
                    <div class="output">  remotes/origin/main</div>
                    <div class="output">  remotes/origin/feature-dashboard</div>
                    
                    <span class="comment"># Show last commit on each branch</span>
                    <div class="command">$ git branch -v</div>
                    <div class="output">* feature-user-profile 1a2b3c4 Add profile form</div>
                    <div class="output">  main                 5d6e7f8 Update README</div>
                    
                    <span class="comment"># Delete a branch (safe)</span>
                    <div class="command">$ git branch -d feature-completed</div>
                    <div class="output">Deleted branch feature-completed (was 1a2b3c4).</div>
                    
                    <span class="comment"># Force delete a branch</span>
                    <div class="command">$ git branch -D feature-abandoned</div>
                    <div class="output">Deleted branch feature-abandoned (was 9x8y7z6).</div>
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
                        <strong>Step 5:</strong> Switch back to main and notice the file is gone
                    </div>
                    <div class="exercise-step">
                        <strong>Step 6:</strong> Switch back to your feature branch and see the file return
                    </div>
                </div>

                <h2>Merging Branches</h2>
                <p>Once you've finished work on a branch, you can merge it back into the main branch.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[main branch] --> B[Create feature branch]
                        B --> C[Work on feature]
                        C --> D[Feature complete]
                        D --> E[Switch to main]
                        E --> F[Merge feature]
                        F --> G[Delete feature branch]
                        
                        style F fill:#4caf50
                    </div>
                </div>

                <h3>Fast-Forward Merge</h3>
                <p>When the main branch hasn't diverged, Git can simply move the pointer forward.</p>

                <div class="code-block">
                    <span class="comment"># Switch to main branch</span>
                    <div class="command">$ git checkout main</div>
                    <div class="output">Switched to branch 'main'</div>
                    
                    <span class="comment"># Merge feature branch</span>
                    <div class="command">$ git merge feature-navbar</div>
                    <div class="output">Updating 5d6e7f8..1a2b3c4</div>
                    <div class="output">Fast-forward</div>
                    <div class="output"> navbar.html | 25 +++++++++++++++++++++++++</div>
                    <div class="output"> 1 file changed, 25 insertions(+)</div>
                    <div class="output"> create mode 100644 navbar.html</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "A"
                        commit id: "B"
                        branch feature
                        commit id: "C"
                        commit id: "D"
                        checkout main
                        merge feature
                    </div>
                </div>

                <h3>Three-Way Merge</h3>
                <p>When both branches have diverged, Git creates a new commit that combines both histories.</p>

                <div class="code-block">
                    <span class="comment"># Three-way merge example</span>
                    <div class="command">$ git merge feature-user-profile</div>
                    <div class="output">Merge made by the 'recursive' strategy.</div>
                    <div class="output"> profile.html | 45 +++++++++++++++++++++++++++++++++++++++++++++</div>
                    <div class="output"> profile.css  | 23 +++++++++++++++++++++++</div>
                    <div class="output"> 2 files changed, 68 insertions(+)</div>
                    <div class="output"> create mode 100644 profile.html</div>
                    <div class="output"> create mode 100644 profile.css</div>
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

                <h2>What Are Remote Repositories?</h2>
                <p>A remote repository is a Git repository that's stored on a server, accessible over the internet. It serves as a central point where team members can share their work.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Developer 1] --> B[Local Repository]
                        C[Developer 2] --> D[Local Repository]
                        E[Developer 3] --> F[Local Repository]
                        
                        B --> G[Remote Repository]
                        D --> G
                        F --> G
                        
                        G --> B
                        G --> D
                        G --> F
                        
                        style G fill:#4caf50
                        style B fill:#2196f3
                        style D fill:#2196f3
                        style F fill:#2196f3
                    </div>
                </div>

                <div class="scenario-box">
                    <h4>Real-World Scenario: The Startup Team</h4>
                    <p><strong>Team Collaboration:</strong> TechStart Inc. has 5 developers working on their new app. Each developer works on their local machine, but they need to share code. They use GitHub as their remote repository. When Alice finishes a feature, she pushes it to GitHub. Bob can then pull Alice's changes and continue building on top of her work.</p>
                </div>

                <h2>Setting Up Remote Repositories</h2>
                <div class="code-block">
                    <span class="comment"># Add a remote repository</span>
                    <div class="command">$ git remote add origin https://github.com/username/repo.git</div>
                    
                    <span class="comment"># List remote repositories</span>
                    <div class="command">$ git remote -v</div>
                    <div class="output">origin  https://github.com/username/repo.git (fetch)</div>
                    <div class="output">origin  https://github.com/username/repo.git (push)</div>
                    
                    <span class="comment"># Add multiple remotes</span>
                    <div class="command">$ git remote add upstream https://github.com/original/repo.git</div>
                    <div class="command">$ git remote add backup https://gitlab.com/username/repo.git</div>
                </div>

                <h3>Common Remote Operations</h3>
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[Local Repository] -->|git push| B[Remote Repository]
                        B -->|git pull| A
                        B -->|git fetch| C[Local Remote Tracking]
                        C --> A
                        
                        style A fill:#ffeb3b
                        style B fill:#4caf50
                        style C fill:#ff9800
                    </div>
                </div>

                <h2>Pushing Changes</h2>
                <p>Pushing sends your local commits to the remote repository, making them available to other team members.</p>

                <div class="code-block">
                    <span class="comment"># Push to remote repository</span>
                    <div class="command">$ git push origin main</div>
                    <div class="output">Counting objects: 3, done.</div>
                    <div class="output">Delta compression using up to 4 threads.</div>
                    <div class="output">Compressing objects: 100% (2/2), done.</div>
                    <div class="output">Writing objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.</div>
                    <div class="output">Total 3 (delta 0), reused 0 (delta 0)</div>
                    <div class="output">To https://github.com/username/repo.git</div>
                    <div class="output">   1a2b3c4..5d6e7f8  main -> main</div>
                    
                    <span class="comment"># Push and set upstream</span>
                    <div class="command">$ git push -u origin feature-branch</div>
                    <div class="output">Branch 'feature-branch' set up to track remote branch 'feature-branch' from 'origin'.</div>
                    
                    <span class="comment"># Push all branches</span>
                    <div class="command">$ git push --all origin</div>
                    
                    <span class="comment"># Push tags</span>
                    <div class="command">$ git push --tags</div>
                </div>

                <h2>Pulling Changes</h2>
                <p>Pulling fetches changes from the remote repository and merges them into your current branch.</p>

                <div class="code-block">
                    <span class="comment"># Pull changes from remote</span>
                    <div class="command">$ git pull origin main</div>
                    <div class="output">From https://github.com/username/repo</div>
                    <div class="output"> * branch            main     -> FETCH_HEAD</div>
                    <div class="output">Updating 1a2b3c4..9x8y7z6</div>
                    <div class="output">Fast-forward</div>
                    <div class="output"> README.md | 5 +++++</div>
                    <div class="output"> 1 file changed, 5 insertions(+)</div>
                    
                    <span class="comment"># Pull with rebase</span>
                    <div class="command">$ git pull --rebase origin main</div>
                    
                    <span class="comment"># Just fetch (don't merge)</span>
                    <div class="command">$ git fetch origin</div>
                    <div class="output">From https://github.com/username/repo</div>
                    <div class="output"> * [new branch]      feature-new    -> origin/feature-new</div>
                    <div class="output">   1a2b3c4..5d6e7f8  main           -> origin/main</div>
                </div>

                <div class="practice-box">
                    <h4>Understanding Pull vs Fetch</h4>
                    <ul>
                        <li><strong>git fetch:</strong> Downloads changes but doesn't merge them</li>
                        <li><strong>git pull:</strong> Downloads changes and merges them (fetch + merge)</li>
                        <li><strong>git pull --rebase:</strong> Downloads changes and rebases your work on top</li>
                    </ul>
                </div>

                <h2>Handling Merge Conflicts</h2>
                <p>When multiple developers modify the same lines of code, Git can't automatically merge the changes.</p>

                <div class="code-block">
                    <span class="comment"># Conflict occurs during pull</span>
                    <div class="command">$ git pull origin main</div>
                    <div class="output">Auto-merging index.html</div>
                    <div class="output">CONFLICT (content): Merge conflict in index.html</div>
                    <div class="output">Automatic merge failed; fix conflicts and then commit the result.</div>
                    
                    <span class="comment"># Check conflict status</span>
                    <div class="command">$ git status</div>
                    <div class="output">On branch main</div>
                    <div class="output">You have unmerged paths.</div>
                    <div class="output">  (fix conflicts and run "git commit")</div>
                    <div class="output">  (use "git merge --abort" to abort the merge)</div>
                    <div class="output"></div>
                    <div class="output">Unmerged paths:</div>
                    <div class="output">  (use "git add <file>..." to mark resolution)</div>
                    <div class="output">        both modified:   index.html</div>
                </div>

                <div class="scenario-box">
                    <h4>Resolving Conflicts Step by Step</h4>
                    <p>When you open the conflicted file, you'll see conflict markers:</p>
                    <div class="code-block">
                        <div class="output"><<<<<<< HEAD</div>
                        <div class="output">Your changes</div>
                        <div class="output">=======</div>
                        <div class="output">Changes from remote</div>
                        <div class="output">>>>>>>> commit-hash</div>
                    </div>
                    <p>Choose which changes to keep, remove the markers, then add and commit.</p>
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
                <p>Stashing allows you to temporarily save your work without committing it. Perfect for when you need to quickly switch branches or pull updates.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph LR
                        A[Working Directory] -->|git stash| B[Stash Storage]
                        B -->|git stash pop| A
                        B -->|git stash apply| A
                        
                        A --> C[Uncommitted Changes]
                        B --> D[Temporary Safe Storage]
                        
                        style B fill:#ff9800
                        style A fill:#ffeb3b
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Stash current changes</span>
                    <div class="command">$ git stash</div>
                    <div class="output">Saved working directory and index state WIP on main: 1a2b3c4 Latest commit</div>
                    
                    <span class="comment"># Stash with a message</span>
                    <div class="command">$ git stash save "Work in progress on user authentication"</div>
                    
                    <span class="comment"># List all stashes</span>
                    <div class="command">$ git stash list</div>
                    <div class="output">stash@{0}: WIP on main: 1a2b3c4 Latest commit</div>
                    <div class="output">stash@{1}: On feature-branch: Work in progress on user authentication</div>
                    
                    <span class="comment"># Apply and remove stash</span>
                    <div class="command">$ git stash pop</div>
                    <div class="output">On branch main</div>
                    <div class="output">Changes not staged for commit:</div>
                    <div class="output">        modified:   index.html</div>
                    <div class="output">Dropped refs/stash@{0}</div>
                    
                    <span class="comment"># Apply specific stash</span>
                    <div class="command">$ git stash apply stash@{1}</div>
                    
                    <span class="comment"># Delete a stash</span>
                    <div class="command">$ git stash drop stash@{0}</div>
                </div>

                <div class="scenario-box">
                    <h4>Stash Use Case</h4>
                    <p><strong>The Urgent Bug Fix:</strong> You're working on a new feature when your manager asks you to fix a critical bug immediately. You're not ready to commit your current work, but you need to switch branches. Solution: stash your work, fix the bug, then return to your feature and pop the stash!</p>
                </div>

                <h2>Rebasing: Rewriting History</h2>
                <p>Rebasing allows you to move or combine commits, creating a cleaner project history.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "A"
                        commit id: "B"
                        branch feature
                        commit id: "C"
                        commit id: "D"
                        checkout main
                        commit id: "E"
                        commit id: "F"
                        checkout feature
                        commit id: "C'"
                        commit id: "D'"
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Rebase current branch onto main</span>
                    <div class="command">$ git rebase main</div>
                    <div class="output">First, rewinding head to replay your work on top of it...</div>
                    <div class="output">Applying: Add user authentication</div>
                    <div class="output">Applying: Fix login validation</div>
                    
                    <span class="comment"># Interactive rebase (last 3 commits)</span>
                    <div class="command">$ git rebase -i HEAD~3</div>
                    <div class="output"># This opens an editor with:</div>
                    <div class="output">pick 1a2b3c4 Add user authentication</div>
                    <div class="output">pick 5d6e7f8 Fix typo in login form</div>
                    <div class="output">pick 9x8y7z6 Add logout functionality</div>
                    
                    <span class="comment"># Rebase options:</span>
                    <div class="comment"># pick = keep the commit</div>
                    <div class="comment"># reword = change commit message</div>
                    <div class="comment"># edit = stop to modify commit</div>
                    <div class="comment"># squash = combine with previous commit</div>
                    <div class="comment"># drop = remove commit</div>
                </div>

                <div class="practice-box">
                    <h4>Interactive Rebase Use Cases</h4>
                    <ul>
                        <li><strong>Squashing:</strong> Combine multiple small commits into one</li>
                        <li><strong>Reordering:</strong> Change the order of commits</li>
                        <li><strong>Editing:</strong> Modify commit messages or content</li>
                        <li><strong>Dropping:</strong> Remove commits from history</li>
                    </ul>
                </div>

                <h2>Cherry Picking</h2>
                <p>Cherry picking applies specific commits from one branch to another without merging the entire branch.</p>

                <div class="code-block">
                    <span class="comment"># Cherry pick a specific commit</span>
                    <div class="command">$ git cherry-pick 1a2b3c4</div>
                    <div class="output">[main 5d6e7f8] Fix critical security vulnerability</div>
                    <div class="output"> 1 file changed, 3 insertions(+), 1 deletion(-)</div>
                    
                    <span class="comment"># Cherry pick multiple commits</span>
                    <div class="command">$ git cherry-pick 1a2b3c4 5d6e7f8 9x8y7z6</div>
                    
                    <span class="comment"># Cherry pick a range of commits</span>
                    <div class="command">$ git cherry-pick 1a2b3c4..9x8y7z6</div>
                </div>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "A"
                        commit id: "B"
                        branch feature
                        commit id: "C"
                        commit id: "D"
                        commit id: "E"
                        checkout main
                        commit id: "C'"
                        commit id: "F"
                    </div>
                </div>

                <h2>Git Reset: Undoing Changes</h2>
                <p>Git reset allows you to undo commits in various ways, depending on how much you want to preserve.</p>

                <div class="code-block">
                    <span class="comment"># Soft reset (keep changes staged)</span>
                    <div class="command">$ git reset --soft HEAD~1</div>
                    <div class="output"># Commit is undone, changes remain staged</div>
                    
                    <span class="comment"># Mixed reset (default - unstage changes)</span>
                    <div class="command">$ git reset HEAD~1</div>
                    <div class="output"># Commit is undone, changes remain in working directory</div>
                    
                    <span class="comment"># Hard reset (discard all changes)</span>
                    <div class="command">$ git reset --hard HEAD~1</div>
                    <div class="output">HEAD is now at 1a2b3c4 Previous commit</div>
                </div>

                <div class="warning">
                    <strong>⚠️ Danger Zone:</strong> \`git reset --hard\` permanently deletes your changes. Use with extreme caution, especially on shared branches!
                </div>

                <h2>Git Revert: Safe Undoing</h2>
                <p>Unlike reset, revert creates a new commit that undoes the changes from a previous commit.</p>

                <div class="code-block">
                    <span class="comment"># Revert a specific commit</span>
                    <div class="command">$ git revert 1a2b3c4</div>
                    <div class="output">[main 5d6e7f8] Revert "Add broken feature"</div>
                    <div class="output"> 1 file changed, 0 insertions(+), 25 deletions(-)</div>
                    
                    <span class="comment"># Revert without creating a commit</span>
                    <div class="command">$ git revert --no-commit 1a2b3c4</div>
                    
                    <span class="comment"># Revert a merge commit</span>
                    <div class="command">$ git revert -m 1 5d6e7f8</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 6: Advanced Operations</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Make some changes to a file but don't commit
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Stash your changes
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Make a few small commits
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Use interactive rebase to squash the commits
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Pop your stashed changes
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Golden Rule:</strong> Never rebase commits that have been pushed to a shared repository. It rewrites history and can cause problems for other developers.
                </div>
            `
        },
        workflows: {
            title: 'Git Workflows',
            content: `
                <h1>🔄 Git Workflows</h1>
                
                <div class="theory-box">
                    <h4>Choosing the Right Workflow</h4>
                    <p>Different teams and projects require different workflows. The key is choosing one that matches your team size, release schedule, and collaboration style. A good workflow reduces conflicts and makes collaboration smooth.</p>
                </div>

                <h2>Feature Branch Workflow</h2>
                <p>The most popular workflow where each feature is developed in its own branch, then merged back to main.</p>

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
                        branch feature-dashboard
                        commit id: "Add dashboard"
                        commit id: "Add charts"
                        checkout main
                        merge feature-dashboard
                        commit id: "Release v1.0"
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Feature Branch Workflow</span>
                    <div class="command">$ git checkout -b feature-user-profile</div>
                    <div class="output">Switched to a new branch 'feature-user-profile'</div>
                    
                    <span class="comment"># Work on feature, make commits</span>
                    <div class="command">$ git add .</div>
                    <div class="command">$ git commit -m "Add user profile page"</div>
                    
                    <span class="comment"># Push feature branch</span>
                    <div class="command">$ git push -u origin feature-user-profile</div>
                    
                    <span class="comment"># Switch back to main and merge</span>
                    <div class="command">$ git checkout main</div>
                    <div class="command">$ git merge feature-user-profile</div>
                    
                    <span class="comment"># Delete feature branch</span>
                    <div class="command">$ git branch -d feature-user-profile</div>
                </div>

                <h2>GitFlow Workflow</h2>
                <p>A more structured approach with specific branch types for different purposes.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    gitGraph
                        commit id: "Initial"
                        branch develop
                        commit id: "Setup dev"
                        branch feature-A
                        commit id: "Feature A"
                        checkout develop
                        merge feature-A
                        branch release-1.0
                        commit id: "Prepare release"
                        checkout main
                        merge release-1.0
                        commit id: "v1.0" tag: "v1.0"
                        checkout develop
                        merge release-1.0
                        branch hotfix
                        checkout main
                        merge hotfix
                        commit id: "v1.0.1" tag: "v1.0.1"
                    </div>
                </div>

                <div class="practice-box">
                    <h4>GitFlow Branch Types</h4>
                    <ul>
                        <li><strong>main:</strong> Production-ready code</li>
                        <li><strong>develop:</strong> Integration branch for features</li>
                        <li><strong>feature/*:</strong> New features</li>
                        <li><strong>release/*:</strong> Prepare new releases</li>
                        <li><strong>hotfix/*:</strong> Critical production fixes</li>
                    </ul>
                </div>

                <h2>GitHub Flow</h2>
                <p>A simpler workflow perfect for continuous deployment.</p>

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

                <div class="scenario-box">
                    <h4>GitHub Flow in Action</h4>
                    <p><strong>The Agile Startup:</strong> DevCorp deploys multiple times per day. They use GitHub Flow: create a branch, make changes, open a pull request, get reviewed, merge to main, and deploy. Simple, fast, and effective for their rapid release cycle.</p>
                </div>

                <h2>Forking Workflow</h2>
                <p>Popular for open-source projects where contributors don't have write access to the main repository.</p>

                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Original Repository] --> B[Fork Repository]
                        B --> C[Clone Fork]
                        C --> D[Create Feature Branch]
                        D --> E[Make Changes]
                        E --> F[Push to Fork]
                        F --> G[Create Pull Request]
                        G --> H[Code Review]
                        H --> I[Merge to Original]
                        
                        style A fill:#4caf50
                        style B fill:#ff9800
                        style G fill:#2196f3
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Forking Workflow Steps</span>
                    <div class="command"># 1. Fork the repository on GitHub</div>
                    <div class="command"># 2. Clone your fork</div>
                    <div class="command">$ git clone https://github.com/yourusername/project.git</div>
                    
                    <span class="comment"># 3. Add upstream remote</span>
                    <div class="command">$ git remote add upstream https://github.com/original/project.git</div>
                    
                    <span class="comment"># 4. Create feature branch</span>
                    <div class="command">$ git checkout -b feature-awesome</div>
                    
                    <span class="comment"># 5. Make changes and push to your fork</span>
                    <div class="command">$ git push origin feature-awesome</div>
                    
                    <span class="comment"># 6. Create pull request on GitHub</span>
                    <div class="comment"># 7. Keep your fork updated</div>
                    <div class="command">$ git fetch upstream</div>
                    <div class="command">$ git checkout main</div>
                    <div class="command">$ git merge upstream/main</div>
                </div>

                <h2>Centralized Workflow</h2>
                <p>Simple workflow where everyone works on the main branch. Best for small teams transitioning from SVN.</p>

                <div class="code-block">
                    <span class="comment"># Centralized Workflow</span>
                    <div class="command">$ git pull origin main</div>
                    <div class="output">Already up to date.</div>
                    
                    <span class="comment"># Make changes and commit</span>
                    <div class="command">$ git add .</div>
                    <div class="command">$ git commit -m "Add new feature"</div>
                    
                    <span class="comment"># Push to shared repository</span>
                    <div class="command">$ git push origin main</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 7: Implementing a Workflow</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Choose a workflow that fits your project
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Create a feature branch
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Make several commits on the feature branch
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Practice the merge/pull request process
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Clean up by deleting the feature branch
                    </div>
                </div>

                <div class="tip">
                    <strong>💡 Workflow Selection Tips:</strong>
                    <ul>
                        <li><strong>Small team, simple project:</strong> GitHub Flow</li>
                        <li><strong>Large team, scheduled releases:</strong> GitFlow</li>
                        <li><strong>Open source project:</strong> Forking Workflow</li>
                        <li><strong>Transitioning from SVN:</strong> Centralized Workflow</li>
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
                    <p>Successful team collaboration with Git requires clear communication, consistent workflows, and good practices. The goal is to enable multiple developers to work together efficiently without stepping on each other's toes.</p>
                </div>

                <h2>Pull Requests / Merge Requests</h2>
                <p>Pull requests are the cornerstone of collaborative development. They provide a way to propose changes, discuss them, and review code before merging.</p>

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

                <div class="scenario-box">
                    <h4>Pull Request Best Practices</h4>
                    <p><strong>The Code Review Culture:</strong> At TechCorp, every change goes through a pull request. Sarah creates a PR for her authentication feature. Her teammates review the code, suggest improvements, and test the feature. This process catches bugs early and ensures code quality.</p>
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
                        <li><strong>Documentation:</strong> Is the code well-documented?</li>
                    </ul>
                </div>

                <h2>Managing Conflicts in Teams</h2>
                <p>Conflicts are inevitable in team environments. The key is to handle them gracefully and learn from them.</p>

                <div class="code-block">
                    <span class="comment"># Common conflict scenario</span>
                    <div class="command">$ git pull origin main</div>
                    <div class="output">Auto-merging src/auth.js</div>
                    <div class="output">CONFLICT (content): Merge conflict in src/auth.js</div>
                    <div class="output">Automatic merge failed; fix conflicts and then commit the result.</div>
                    
                    <span class="comment"># View conflicted files</span>
                    <div class="command">$ git status</div>
                    <div class="output">On branch feature-auth</div>
                    <div class="output">You have unmerged paths.</div>
                    <div class="output">  (fix conflicts and run "git commit")</div>
                    <div class="output">Unmerged paths:</div>
                    <div class="output">        both modified:   src/auth.js</div>
                    
                    <span class="comment"># Use merge tool</span>
                    <div class="command">$ git mergetool</div>
                    
                    <span class="comment"># Or resolve manually and commit</span>
                    <div class="command">$ git add src/auth.js</div>
                    <div class="command">$ git commit -m "Resolve merge conflict in auth.js"</div>
                </div>

                <div class="tip">
                    <strong>💡 Conflict Prevention:</strong>
                    <ul>
                        <li>Pull frequently to stay updated</li>
                        <li>Make smaller, focused commits</li>
                        <li>Communicate with team about overlapping work</li>
                        <li>Use feature branches to isolate changes</li>
                    </ul>
                </div>

                <h2>Git Hooks for Team Standards</h2>
                <p>Git hooks are scripts that run automatically at certain points in the Git workflow. They help enforce team standards and automate common tasks.</p>

                <div class="code-block">
                    <span class="comment"># Pre-commit hook example (saved as .git/hooks/pre-commit)</span>
                    <div class="command">#!/bin/sh</div>
                    <div class="command"># Run tests before commit</div>
                    <div class="command">npm test</div>
                    <div class="command">if [ $? -ne 0 ]; then</div>
                    <div class="command">    echo "Tests failed! Commit aborted."</div>
                    <div class="command">    exit 1</div>
                    <div class="command">fi</div>
                    
                    <span class="comment"># Commit message hook (saved as .git/hooks/commit-msg)</span>
                    <div class="command">#!/bin/sh</div>
                    <div class="command"># Check commit message format</div>
                    <div class="command">commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'</div>
                    <div class="command">if ! grep -qE "$commit_regex" "$1"; then</div>
                    <div class="command">    echo "Invalid commit message format!"</div>
                    <div class="command">    exit 1</div>
                    <div class="command">fi</div>
                </div>

                <h2>Branch Protection Rules</h2>
                <p>Protect important branches from direct pushes and enforce quality standards.</p>

                <div class="practice-box">
                    <h4>Common Branch Protection Rules</h4>
                    <ul>
                        <li><strong>Require pull requests:</strong> No direct pushes to main</li>
                        <li><strong>Require reviews:</strong> At least one approval needed</li>
                        <li><strong>Require status checks:</strong> Tests must pass</li>
                        <li><strong>Require up-to-date branches:</strong> Must be current with main</li>
                        <li><strong>Restrict push access:</strong> Only certain users can push</li>
                    </ul>
                </div>

                <h2>Team Communication Strategies</h2>
                <div class="scenario-box">
                    <h4>Communication Best Practices</h4>
                    <ul>
                        <li><strong>Daily standups:</strong> Discuss what you're working on</li>
                        <li><strong>Feature planning:</strong> Coordinate overlapping work</li>
                        <li><strong>Code reviews:</strong> Provide constructive feedback</li>
                        <li><strong>Documentation:</strong> Keep README and docs updated</li>
                        <li><strong>Issue tracking:</strong> Use GitHub issues or similar tools</li>
                    </ul>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 8: Team Collaboration Simulation</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Set up a shared repository with a teammate
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Both create different feature branches
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Modify the same file in different ways
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> One person merges first, the other resolves conflicts
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Practice the pull request review process
                    </div>
                </div>

                <div class="warning">
                    <strong>⚠️ Team Anti-Patterns to Avoid:</strong>
                    <ul>
                        <li>Force pushing to shared branches</li>
                        <li>Committing directly to main/master</li>
                        <li>Large, monolithic commits</li>
                        <li>Ignoring code review feedback</li>
                        <li>Not communicating about major changes</li>
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
                    <p>Following best practices makes Git a powerful ally rather than a source of frustration. These practices will help you maintain clean repositories, collaborate effectively, and avoid common pitfalls.</p>
                </div>

                <h2>Writing Great Commit Messages</h2>
                <p>A good commit message tells a story about what changed and why. Future you (and your teammates) will thank you for clear, descriptive messages.</p>

                <div class="practice-box">
                    <h4>Commit Message Format</h4>
                    <div class="code-block">
                        <div class="output">type(scope): subject</div>
                        <div class="output"></div>
                        <div class="output">body</div>
                        <div class="output"></div>
                        <div class="output">footer</div>
                    </div>
                    <ul>
                        <li><strong>Type:</strong> feat, fix, docs, style, refactor, test, chore</li>
                        <li><strong>Subject:</strong> 50 characters or less, imperative mood</li>
                        <li><strong>Body:</strong> Explain what and why, not how</li>
                        <li><strong>Footer:</strong> Reference issues, breaking changes</li>
                    </ul>
                </div>

                <div class="code-block">
                    <span class="comment"># Good commit messages</span>
                    <div class="command">$ git commit -m "feat(auth): add password reset functionality</div>
                    <div class="command"></div>
                    <div class="command">Implement password reset via email with secure tokens.</div>
                    <div class="command">Users can now reset forgotten passwords safely.</div>
                    <div class="command"></div>
                    <div class="command">Closes #123"</div>
                    
                    <span class="comment"># Bad commit messages</span>
                    <div class="output">❌ "fix stuff"</div>
                    <div class="output">❌ "update"</div>
                    <div class="output">❌ "working on login"</div>
                    <div class="output">❌ "asdf"</div>
                    
                    <span class="comment"># Good commit messages</span>
                    <div class="output">✅ "fix(auth): prevent SQL injection in login form"</div>
                    <div class="output">✅ "docs: update installation instructions"</div>
                    <div class="output">✅ "refactor: extract user validation logic"</div>
                    <div class="output">✅ "test: add unit tests for payment processing"</div>
                </div>

                <h2>Repository Structure</h2>
                <p>A well-organized repository makes it easy for new contributors to understand and contribute to your project.</p>

                <div class="code-block">
                    <span class="comment"># Typical project structure</span>
                    <div class="output">my-project/</div>
                    <div class="output">├── .github/</div>
                    <div class="output">│   ├── workflows/        # GitHub Actions</div>
                    <div class="output">│   ├── ISSUE_TEMPLATE/   # Issue templates</div>
                    <div class="output">│   └── PULL_REQUEST_TEMPLATE.md</div>
                    <div class="output">├── .gitignore           # Files to ignore</div>
                    <div class="output">├── README.md            # Project overview</div>
                    <div class="output">├── CONTRIBUTING.md      # How to contribute</div>
                    <div class="output">├── LICENSE              # License information</div>
                    <div class="output">├── package.json         # Dependencies</div>
                    <div class="output">├── src/                 # Source code</div>
                    <div class="output">│   ├── components/</div>
                    <div class="output">│   ├── utils/</div>
                    <div class="output">│   └── index.js</div>
                    <div class="output">├── tests/               # Test files</div>
                    <div class="output">├── docs/                # Documentation</div>
                    <div class="output">└── examples/            # Usage examples</div>
                </div>

                <h2>The .gitignore File</h2>
                <p>A proper .gitignore file prevents unnecessary files from being tracked and keeps your repository clean.</p>

                <div class="code-block">
                    <span class="comment"># Example .gitignore for a Node.js project</span>
                    <div class="output"># Dependencies</div>
                    <div class="output">node_modules/</div>
                    <div class="output">npm-debug.log*</div>
                    <div class="output">yarn-debug.log*</div>
                    <div class="output">yarn-error.log*</div>
                    <div class="output"></div>
                    <div class="output"># Build outputs</div>
                    <div class="output">dist/</div>
                    <div class="output">build/</div>
                    <div class="output">*.min.js</div>
                    <div class="output">*.min.css</div>
                    <div class="output"></div>
                    <div class="output"># Environment files</div>
                    <div class="output">.env</div>
                    <div class="output">.env.local</div>
                    <div class="output">.env.development.local</div>
                    <div class="output">.env.test.local</div>
                    <div class="output">.env.production.local</div>
                    <div class="output"></div>
                    <div class="output"># IDE and editor files</div>
                    <div class="output">.vscode/</div>
                    <div class="output">.idea/</div>
                    <div class="output">*.swp</div>
                    <div class="output">*.swo</div>
                    <div class="output">*~</div>
                    <div class="output"></div>
                    <div class="output"># OS generated files</div>
                    <div class="output">.DS_Store</div>
                    <div class="output">Thumbs.db</div>
                    <div class="output"></div>
                    <div class="output"># Logs</div>
                    <div class="output">*.log</div>
                    <div class="output">logs/</div>
                    <div class="output"></div>
                    <div class="output"># Runtime data</div>
                    <div class="output">pids</div>
                    <div class="output">*.pid</div>
                    <div class="output">*.seed</div>
                </div>

                <h2>Branching Strategy</h2>
                <div class="practice-box">
                    <h4>Branch Naming Conventions</h4>
                    <ul>
                        <li><strong>feature/</strong> - New features (feature/user-authentication)</li>
                        <li><strong>bugfix/</strong> - Bug fixes (bugfix/login-validation)</li>
                        <li><strong>hotfix/</strong> - Critical production fixes (hotfix/security-patch)</li>
                        <li><strong>release/</strong> - Release preparation (release/v1.2.0)</li>
                        <li><strong>chore/</strong> - Maintenance tasks (chore/update-dependencies)</li>
                    </ul>
                </div>

                <h2>Security Best Practices</h2>
                <div class="warning">
                    <strong>⚠️ Security Considerations:</strong>
                    <ul>
                        <li>Never commit secrets, API keys, or passwords</li>
                        <li>Use environment variables for sensitive data</li>
                        <li>Regularly update dependencies</li>
                        <li>Be careful with public repositories</li>
                        <li>Use signed commits for verification</li>
                    </ul>
                </div>

                <div class="code-block">
                    <span class="comment"># Set up GPG signing</span>
                    <div class="command">$ git config --global user.signingkey YOUR_GPG_KEY_ID</div>
                    <div class="command">$ git config --global commit.gpgsign true</div>
                    
                    <span class="comment"># Sign a commit</span>
                    <div class="command">$ git commit -S -m "feat: add secure payment processing"</div>
                    
                    <span class="comment"># Verify signatures</span>
                    <div class="command">$ git log --show-signature</div>
                </div>

                <h2>Performance Optimization</h2>
                <div class="practice-box">
                    <h4>Keep Your Repository Fast</h4>
                    <ul>
                        <li><strong>Avoid large files:</strong> Use Git LFS for binary files</li>
                        <li><strong>Regular cleanup:</strong> Use git gc to optimize</li>
                        <li><strong>Shallow clones:</strong> Use --depth for faster clones</li>
                        <li><strong>Prune remotes:</strong> Clean up deleted branches</li>
                    </ul>
                </div>

                <div class="code-block">
                    <span class="comment"># Repository maintenance</span>
                    <div class="command">$ git gc --aggressive</div>
                    <div class="output">Counting objects: 1000, done.</div>
                    <div class="output">Delta compression using up to 4 threads.</div>
                    <div class="output">Compressing objects: 100% (500/500), done.</div>
                    
                    <span class="comment"># Shallow clone</span>
                    <div class="command">$ git clone --depth 1 https://github.com/user/repo.git</div>
                    
                    <span class="comment"># Prune remote branches</span>
                    <div class="command">$ git remote prune origin</div>
                    
                    <span class="comment"># Clean up local branches</span>
                    <div class="command">$ git branch --merged | grep -v "main\|develop" | xargs -n 1 git branch -d</div>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 9: Repository Audit</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Review your commit messages - are they descriptive?
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Check your .gitignore - is it comprehensive?
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Audit your repository structure - is it organized?
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Set up branch naming conventions
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Configure GPG signing for commits
                    </div>
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
                <div class="mermaid-container">
                    <div class="mermaid">
                    graph TD
                        A[Commit Problem] --> B{Already Pushed?}
                        B -->|No| C[git reset]
                        B -->|Yes| D[git revert]
                        
                        C --> E[--soft: Keep changes staged]
                        C --> F[--mixed: Keep changes unstaged]
                        C --> G[--hard: Discard changes]
                        
                        D --> H[Create new commit that undoes changes]
                        
                        style C fill:#ff9800
                        style D fill:#4caf50
                    </div>
                </div>

                <div class="code-block">
                    <span class="comment"># Undo last commit (not pushed)</span>
                    <div class="command">$ git reset --soft HEAD~1</div>
                    <div class="output"># Commit undone, changes still staged</div>
                    
                    <span class="comment"># Undo last commit and unstage changes</span>
                    <div class="command">$ git reset HEAD~1</div>
                    
                    <span class="comment"># Undo last commit and discard changes</span>
                    <div class="command">$ git reset --hard HEAD~1</div>
                    <div class="output">HEAD is now at 1a2b3c4 Previous commit</div>
                    
                    <span class="comment"># Undo a pushed commit safely</span>
                    <div class="command">$ git revert HEAD</div>
                    <div class="output">[main 5d6e7f8] Revert "Bad commit"</div>
                </div>

                <h2>Recovering Lost Work</h2>
                <p>Git's reflog keeps track of all your actions, making it possible to recover "lost" work.</p>

                <div class="code-block">
                    <span class="comment"># View reflog to find lost commits</span>
                    <div class="command">$ git reflog</div>
                    <div class="output">1a2b3c4 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1</div>
                    <div class="output">5d6e7f8 HEAD@{1}: commit: Important work</div>
                    <div class="output">9x8y7z6 HEAD@{2}: commit: Previous commit</div>
                    
                    <span class="comment"># Recover the lost commit</span>
                    <div class="command">$ git checkout 5d6e7f8</div>
                    <div class="output">You are in 'detached HEAD' state...</div>
                    
                    <span class="comment"># Create a new branch to save the work</span>
                    <div class="command">$ git checkout -b recovery-branch</div>
                    <div class="output">Switched to a new branch 'recovery-branch'</div>
                    
                    <span class="comment"># Or reset main to the lost commit</span>
                    <div class="command">$ git checkout main</div>
                    <div class="command">$ git reset --hard 5d6e7f8</div>
                </div>

                <h2>Fixing Merge Conflicts</h2>
                <p>Merge conflicts happen when Git can't automatically merge changes. Here's how to resolve them systematically.</p>

                <div class="code-block">
                    <span class="comment"># Conflict occurs during merge</span>
                    <div class="command">$ git merge feature-branch</div>
                    <div class="output">Auto-merging index.html</div>
                    <div class="output">CONFLICT (content): Merge conflict in index.html</div>
                    <div class="output">Automatic merge failed; fix conflicts and then commit the result.</div>
                    
                    <span class="comment"># See conflicted files</span>
                    <div class="command">$ git status</div>
                    <div class="output">Unmerged paths:</div>
                    <div class="output">  (use "git add <file>..." to mark resolution)</div>
                    <div class="output">        both modified:   index.html</div>
                    
                    <span class="comment"># View the conflict</span>
                    <div class="command">$ cat index.html</div>
                    <div class="output"><<<<<<< HEAD</div>
                    <div class="output">    <h1>Welcome to our site</h1></div>
                    <div class="output">=======</div>
                    <div class="output">    <h1>Welcome to our website</h1></div>
                    <div class="output">>>>>>>> feature-branch</div>
                    
                    <span class="comment"># After manually resolving:</span>
                    <div class="command">$ git add index.html</div>
                    <div class="command">$ git commit -m "Resolve merge conflict in index.html"</div>
                </div>

                <div class="practice-box">
                    <h4>Merge Conflict Resolution Steps</h4>
                    <ol>
                        <li>Open the conflicted file in your editor</li>
                        <li>Look for conflict markers (<<<<<<, =======, >>>>>>>)</li>
                        <li>Decide which changes to keep</li>
                        <li>Remove the conflict markers</li>
                        <li>Test that the file works correctly</li>
                        <li>Stage the resolved file with git add</li>
                        <li>Commit the resolution</li>
                    </ol>
                </div>

                <h2>Removing Sensitive Data</h2>
                <p>Accidentally committed passwords or API keys? Here's how to remove them from history.</p>

                <div class="code-block">
                    <span class="comment"># Remove file from all history (dangerous!)</span>
                    <div class="command">$ git filter-branch --force --index-filter \</div>
                    <div class="command">  'git rm --cached --ignore-unmatch secrets.txt' \</div>
                    <div class="command">  --prune-empty --tag-name-filter cat -- --all</div>
                    
                    <span class="comment"># Better: use BFG Repo-Cleaner</span>
                    <div class="command">$ java -jar bfg.jar --delete-files secrets.txt</div>
                    <div class="command">$ git reflog expire --expire=now --all</div>
                    <div class="command">$ git gc --prune=now --aggressive</div>
                    
                    <span class="comment"># Force push (after backup!)</span>
                    <div class="command">$ git push --force-with-lease origin main</div>
                </div>

                <div class="warning">
                    <strong>⚠️ Important:</strong> After removing sensitive data, change all exposed credentials immediately. The data might still be cached or accessible through other means.
                </div>

                <h2>Fixing Detached HEAD</h2>
                <div class="code-block">
                    <span class="comment"># You're in detached HEAD state</span>
                    <div class="command">$ git status</div>
                    <div class="output">HEAD detached at 1a2b3c4</div>
                    
                    <span class="comment"># Create a branch to save your work</span>
                    <div class="command">$ git checkout -b fix-detached-head</div>
                    <div class="output">Switched to a new branch 'fix-detached-head'</div>
                    
                    <span class="comment"># Or go back to main</span>
                    <div class="command">$ git checkout main</div>
                    <div class="output">Warning: you are leaving 1 commit behind</div>
                </div>

                <h2>Repository Corruption</h2>
                <p>In rare cases, Git repositories can become corrupted. Here's how to fix them.</p>

                <div class="code-block">
                    <span class="comment"># Check repository integrity</span>
                    <div class="command">$ git fsck --full</div>
                    <div class="output">Checking object directories: 100% (256/256), done.</div>
                    <div class="output">Checking objects: 100% (1000/1000), done.</div>
                    
                    <span class="comment"># Find and recover dangling commits</span>
                    <div class="command">$ git fsck --lost-found</div>
                    <div class="output">dangling commit 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0</div>
                    
                    <span class="comment"># Recover a dangling commit</span>
                    <div class="command">$ git show 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0</div>
                    <div class="command">$ git cherry-pick 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0</div>
                </div>

                <h2>Diagnostic Commands</h2>
                <div class="practice-box">
                    <h4>Git Debugging Toolkit</h4>
                    <ul>
                        <li><strong>git status:</strong> See current state</li>
                        <li><strong>git log --oneline:</strong> View recent commits</li>
                        <li><strong>git reflog:</strong> See all actions taken</li>
                        <li><strong>git diff:</strong> See what changed</li>
                        <li><strong>git blame:</strong> See who changed what</li>
                        <li><strong>git bisect:</strong> Find when bug was introduced</li>
                    </ul>
                </div>

                <div class="exercise">
                    <h4>🎯 Exercise 10: Disaster Recovery</h4>
                    <div class="exercise-step">
                        <strong>Step 1:</strong> Create a test repository with several commits
                    </div>
                    <div class="exercise-step">
                        <strong>Step 2:</strong> Simulate a problem (hard reset, accidental deletion)
                    </div>
                    <div class="exercise-step">
                        <strong>Step 3:</strong> Use git reflog to find the lost work
                    </div>
                    <div class="exercise-step">
                        <strong>Step 4:</strong> Recover the lost commits
                    </div>
                    <div class="exercise-step">
                        <strong>Step 5:</strong> Practice creating and resolving a merge conflict
                    </div>
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
                    <div class="command">$ git clone https://github.com/user/repo.git my-project</div>
                    
                    <span class="comment"># Configure Git</span>
                    <div class="command">$ git config --global user.name "Your Name"</div>
                    <div class="command">$ git config --global user.email "your.email@example.com"</div>
                    <div class="command">$ git config --global init.defaultBranch main</div>
                    <div class="command">$ git config --list</div>
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
                    <div class="command">$ git add -p</div>
                    
                    <span class="comment"># Commit changes</span>
                    <div class="command">$ git commit -m "Commit message"</div>
                    <div class="command">$ git commit -am "Stage and commit"</div>
                    <div class="command">$ git commit --amend</div>
                    
                    <span class="comment"># View history</span>
                    <div class="command">$ git log</div>
                    <div class="command">$ git log --oneline</div>
                    <div class="command">$ git log --graph --oneline --all</div>
                    <div class="command">$ git show HEAD</div>
                </div>

                <h2>Branching and Merging</h2>
                <div class="code-block">
                    <span class="comment"># Branch operations</span>
                    <div class="command">$ git branch</div>
                    <div class="command">$ git branch feature-name</div>
                    <div class="command">$ git branch -d feature-name</div>
                    <div class="command">$ git branch -D feature-name</div>
                    <div class="command">$ git branch -m old-name new-name</div>
                    
                    <span class="comment"># Switch branches</span>
                    <div class="command">$ git checkout branch-name</div>
                    <div class="command">$ git checkout -b new-branch</div>
                    <div class="command">$ git switch branch-name</div>
                    <div class="command">$ git switch -c new-branch</div>
                    
                    <span class="comment"># Merging</span>
                    <div class="command">$ git merge branch-name</div>
                    <div class="command">$ git merge --no-ff branch-name</div>
                    <div class="command">$ git merge --squash branch-name</div>
                </div>

                <h2>Remote Operations</h2>
                <div class="code-block">
                    <span class="comment"># Remote management</span>
                    <div class="command">$ git remote -v</div>
                    <div class="command">$ git remote add origin url</div>
                    <div class="command">$ git remote remove origin</div>
                    <div class="command">$ git remote rename old-name new-name</div>
                    
                    <span class="comment"># Fetch and pull</span>
                    <div class="command">$ git fetch</div>
                    <div class="command">$ git fetch origin</div>
                    <div class="command">$ git pull</div>
                    <div class="command">$ git pull origin main</div>
                    <div class="command">$ git pull --rebase</div>
                    
                    <span class="comment"># Push operations</span>
                    <div class="command">$ git push</div>
                    <div class="command">$ git push origin main</div>
                    <div class="command">$ git push -u origin branch-name</div>
                    <div class="command">$ git push --force-with-lease</div>
                </div>

                <h2>Undoing Changes</h2>
                <div class="code-block">
                    <span class="comment"># Unstage files</span>
                    <div class="command">$ git restore --staged file.txt</div>
                    <div class="command">$ git reset HEAD file.txt</div>
                    
                    <span class="comment"># Discard working directory changes</span>
                    <div class="command">$ git restore file.txt</div>
                    <div class="command">$ git checkout -- file.txt</div>
                    
                    <span class="comment"># Reset commits</span>
                    <div class="command">$ git reset --soft HEAD~1</div>
                    <div class="command">$ git reset HEAD~1</div>
                    <div class="command">$ git reset --hard HEAD~1</div>
                    
                    <span class="comment"># Revert commits</span>
                    <div class="command">$ git revert HEAD</div>
                    <div class="command">$ git revert commit-hash</div>
                </div>

                <h2>Stashing</h2>
                <div class="code-block">
                    <span class="comment"># Stash operations</span>
                    <div class="command">$ git stash</div>
                    <div class="command">$ git stash save "message"</div>
                    <div class="command">$ git stash list</div>
                    <div class="command">$ git stash pop</div>
                    <div class="command">$ git stash apply</div>
                    <div class="command">$ git stash drop</div>
                    <div class="command">$ git stash clear</div>
                </div>

                <h2>Advanced Operations</h2>
                <div class="code-block">
                    <span class="comment"># Rebasing</span>
                    <div class="command">$ git rebase main</div>
                    <div class="command">$ git rebase -i HEAD~3</div>
                    <div class="command">$ git rebase --continue</div>
                    <div class="command">$ git rebase --abort</div>
                    
                    <span class="comment"># Cherry picking</span>
                    <div class="command">$ git cherry-pick commit-hash</div>
                    <div class="command">$ git cherry-pick commit1..commit2</div>
                    
                    <span class="comment"># Tagging</span>
                    <div class="command">$ git tag</div>
                    <div class="command">$ git tag v1.0.0</div>
                    <div class="command">$ git tag -a v1.0.0 -m "Version 1.0"</div>
                    <div class="command">$ git push --tags</div>
                </div>

                <h2>Information and Inspection</h2>
                <div class="code-block">
                    <span class="comment"># View differences</span>
                    <div class="command">$ git diff</div>
                    <div class="command">$ git diff --staged</div>
                    <div class="command">$ git diff HEAD</div>
                    <div class="command">$ git diff branch1..branch2</div>
                    
                    <span class="comment"># Search and blame</span>
                    <div class="command">$ git grep "search term"</div>
                    <div class="command">$ git blame file.txt</div>
                    <div class="command">$ git log --grep="search"</div>
                    <div class="command">$ git log -p file.txt</div>
                    
                    <span class="comment"># Repository information</span>
                    <div class="command">$ git reflog</div>
                    <div class="command">$ git fsck</div>
                    <div class="command">$ git gc</div>
                </div>

                <h2>Useful Aliases</h2>
                <div class="code-block">
                    <span class="comment"># Set up helpful aliases</span>
                    <div class="command">$ git config --global alias.co checkout</div>
                    <div class="command">$ git config --global alias.br branch</div>
                    <div class="command">$ git config --global alias.ci commit</div>
                    <div class="command">$ git config --global alias.st status</div>
                    <div class="command">$ git config --global alias.unstage 'reset HEAD --'</div>
                    <div class="command">$ git config --global alias.last 'log -1 HEAD'</div>
                    <div class="command">$ git config --global alias.visual '!gitk'</div>
                    <div class="command">$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"</div>
                </div>

                <h2>Git Flow Commands</h2>
                <div class="code-block">
                    <span class="comment"># Git Flow initialization</span>
                    <div class="command">$ git flow init</div>
                    
                    <span class="comment"># Feature branches</span>
                    <div class="command">$ git flow feature start feature-name</div>
                    <div class="command">$ git flow feature finish feature-name</div>
                    <div class="command">$ git flow feature publish feature-name</div>
                    
                    <span class="comment"># Release branches</span>
                    <div class="command">$ git flow release start 1.0.0</div>
                    <div class="command">$ git flow release finish 1.0.0</div>
                    
                    <span class="comment"># Hotfix branches</span>
                    <div class="command">$ git flow hotfix start hotfix-name</div>
                    <div class="command">$ git flow hotfix finish hotfix-name</div>
                </div>

                <h2>Emergency Commands</h2>
                <div class="warning">
                    <strong>⚠️ Use with Caution:</strong> These commands can cause data loss if used incorrectly.
                </div>
                
                <div class="code-block">
                    <span class="comment"># Force operations (dangerous!)</span>
                    <div class="command">$ git push --force</div>
                    <div class="command">$ git push --force-with-lease</div>
                    <div class="command">$ git reset --hard HEAD</div>
                    <div class="command">$ git clean -fd</div>
                    
                    <span class="comment"># Recovery operations</span>
                    <div class="command">$ git reflog</div>
                    <div class="command">$ git fsck --lost-found</div>
                    <div class="command">$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch filename' HEAD</div>
                </div>

                <h2>Git Configuration Reference</h2>
                <div class="code-block">
                    <span class="comment"># User configuration</span>
                    <div class="command">$ git config --global user.name "Your Name"</div>
                    <div class="command">$ git config --global user.email "email@example.com"</div>
                    <div class="command">$ git config --global core.editor "code --wait"</div>
                    
                    <span class="comment"># Behavior configuration</span>
                    <div class="command">$ git config --global init.defaultBranch main</div>
                    <div class="command">$ git config --global push.default simple</div>
                    <div class="command">$ git config --global pull.rebase false</div>
                    <div class="command">$ git config --global merge.tool vimdiff</div>
                    
                    <span class="comment"># Security configuration</span>
                    <div class="command">$ git config --global user.signingkey GPG-KEY-ID</div>
                    <div class="command">$ git config --global commit.gpgsign true</div>
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

                <div class="scenario-box">
                    <h4>Next Steps in Your Git Journey</h4>
                    <ul>
                        <li><strong>Practice regularly:</strong> Use Git daily to build muscle memory</li>
                        <li><strong>Contribute to open source:</strong> Practice with real projects</li>
                        <li><strong>Learn advanced topics:</strong> Git hooks, submodules, LFS</li>
                        <li><strong>Teach others:</strong> Sharing knowledge reinforces learning</li>
                        <li><strong>Stay updated:</strong> Git continues to evolve with new features</li>
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

// Attach to window explicitly for global access
window.GIT_CONTENT = GIT_CONTENT;

console.log('GIT_CONTENT loaded:', GIT_CONTENT);
console.log('GIT_CONTENT attached to window:', window.GIT_CONTENT);
console.log('Number of chapters:', Object.keys(GIT_CONTENT.chapters).length);
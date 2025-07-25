// Shristi LMS Interactive Learning System

// Learning System Class
class LearningSystem {
  constructor() {
    this.currentCourse = null;
    this.currentChapter = null;
    this.chapters = [];
    this.courseData = null;
    this.initializeSystem();
  }

  initializeSystem() {
    console.log("Initializing Shristi LMS Learning System...");
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Setup scroll progress tracking
    window.addEventListener("scroll", this.updateProgress.bind(this));

    // Setup course card interactions
    this.setupCourseCards();
  }

  setupCourseCards() {
    const courseCards = document.querySelectorAll(".course-card[data-course]");
    courseCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const courseId = card.getAttribute("data-course");
        if (courseId && !card.classList.contains("cursor-not-allowed")) {
          this.loadCourse(courseId);
        }
      });
    });
  }

  loadCourse(courseId) {
    console.log(`Loading course: ${courseId}`);

    // Show loading indicator
    this.showLoading();

    // Simulate course loading
    setTimeout(() => {
      this.hideLoading();
      this.displayCourseContent(courseId);
    }, 1500);
  }

  displayCourseContent(courseId) {
    // Hide course selector
    document.getElementById("courseSelector").classList.add("hidden");

    // Show sidebar
    document.getElementById("sidebar").classList.remove("hidden");
    document.getElementById("mainContent").classList.add("ml-80");

    // Update course title
    const courseTitles = {
      test_git: "Git Version Control",
      git: "Git Version Control",
      python: "Python Programming",
    };

    document.getElementById("courseTitle").textContent =
      courseTitles[courseId] || "Course";

    // Populate table of contents
    this.populateTableOfContents(courseId);

    // Load main content
    this.loadMainContent(courseId);

    // Update progress
    this.updateProgress();
  }

  populateTableOfContents(courseId) {
    const tocContainer = document.getElementById("tocContainer");

    const sampleChapters = {
      git: [
        "Introduction to Git",
        "Git Basics",
        "Branching and Merging",
        "Remote Repositories",
        "Advanced Git Features",
      ],
      python: [
        "Python Fundamentals",
        "Data Types and Variables",
        "Control Structures",
        "Functions and Modules",
        "Object-Oriented Programming",
      ],
    };

    const chapters = sampleChapters[courseId] || ["Course Overview"];
    this.chapters = chapters;

    tocContainer.innerHTML = chapters
      .map(
        (chapter, index) => `
            <div class="p-3 mb-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-50 ${
              index === 0
                ? "bg-blue-100 border-l-4 border-blue-500"
                : "border-l-4 border-transparent"
            }" 
                 onclick="window.learningSystem.navigateToChapter('${chapter}', ${index})">
                <div class="font-medium text-gray-800">${
                  index + 1
                }. ${chapter}</div>
            </div>
        `
      )
      .join("");
  }

  loadMainContent(courseId) {
    const mainContent = document.getElementById("mainContent");

    const courseContent = {
      git: `
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800 mb-6">Git Version Control</h1>
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-semibold mb-4">Welcome to Git Mastery</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Git is a distributed version control system that tracks changes in computer files 
                            and is used for coordinating work among multiple people. This course will take you 
                            from beginner to advanced Git user.
                        </p>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-blue-50 p-6 rounded-lg">
                                <h3 class="font-semibold text-blue-800 mb-2">What You'll Learn</h3>
                                <ul class="text-blue-700 space-y-1">
                                    <li>• Git fundamentals and workflow</li>
                                    <li>• Branching and merging strategies</li>
                                    <li>• Collaboration with remote repositories</li>
                                    <li>• Advanced Git commands and techniques</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-6 rounded-lg">
                                <h3 class="font-semibold text-green-800 mb-2">Course Features</h3>
                                <ul class="text-green-700 space-y-1">
                                    <li>• Interactive exercises</li>
                                    <li>• Real-world examples</li>
                                    <li>• Hands-on practice</li>
                                    <li>• Progress tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `,
      python: `
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800 mb-6">Python Programming</h1>
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-semibold mb-4">Master Python Programming</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Python is a high-level, interpreted programming language with dynamic semantics. 
                            Its high-level built-in data structures make it attractive for Rapid Application 
                            Development and scripting.
                        </p>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-purple-50 p-6 rounded-lg">
                                <h3 class="font-semibold text-purple-800 mb-2">Course Modules</h3>
                                <ul class="text-purple-700 space-y-1">
                                    <li>• Python syntax and basics</li>
                                    <li>• Data structures and algorithms</li>
                                    <li>• Object-oriented programming</li>
                                    <li>• Web development with Python</li>
                                </ul>
                            </div>
                            <div class="bg-orange-50 p-6 rounded-lg">
                                <h3 class="font-semibold text-orange-800 mb-2">Projects</h3>
                                <ul class="text-orange-700 space-y-1">
                                    <li>• Build a calculator</li>
                                    <li>• Create a web scraper</li>
                                    <li>• Develop a REST API</li>
                                    <li>• Machine learning basics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    };

    mainContent.innerHTML =
      courseContent[courseId] ||
      `
            <div class="max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-gray-800 mb-6">Course Content</h1>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <p class="text-gray-600">Course content for ${courseId} will be loaded here.</p>
                </div>
            </div>
        `;
  }

  navigateToChapter(chapter, index) {
    console.log(`Navigating to chapter: ${chapter}`);

    // Update active chapter in TOC
    const tocItems = document.querySelectorAll("#tocContainer > div");
    tocItems.forEach((item, i) => {
      if (i === index) {
        item.className =
          "p-3 mb-2 rounded-lg cursor-pointer transition-colors bg-blue-100 border-l-4 border-blue-500";
      } else {
        item.className =
          "p-3 mb-2 rounded-lg cursor-pointer transition-colors hover:bg-blue-50 border-l-4 border-transparent";
      }
    });

    // Update progress
    this.updateProgress(index);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateProgress(chapterIndex = 0) {
    if (this.chapters.length > 0) {
      const progress = ((chapterIndex + 1) / this.chapters.length) * 100;
      document.getElementById("progressBar").style.width = `${progress}%`;
    }
  }

  showCourseSelection() {
    document.getElementById("courseSelector").classList.remove("hidden");
    document.getElementById("sidebar").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("ml-80");
  }

  showLoading() {
    document.getElementById("loadingIndicator").classList.remove("hidden");
  }

  hideLoading() {
    document.getElementById("loadingIndicator").classList.add("hidden");
  }
}
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Shristi LMS Interactive Learning System loaded successfully!");

  // Initialize the learning system
  window.learningSystem = new LearningSystem();

  // Initialize demo functionality
  initializeDemoFeatures();
});

function initializeDemoFeatures() {
  // Add enhanced course card interactions
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    // Add ripple effect on click
    card.addEventListener("click", function (e) {
      if (!card.classList.contains("cursor-not-allowed")) {
        createRippleEffect(e, card);
      }
    });
  });

  // Add smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function createRippleEffect(event, element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.className = "ripple";

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

function initializeApp() {
  // Add fade-in animation to main sections
  addFadeInAnimations();

  // Initialize event listeners
  initializeEventListeners();

  // Add hover effects to cards
  addCardHoverEffects();

  // Initialize greeting functionality
  initializeGreeting();
}

function addFadeInAnimations() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("animate-fade-in");
    }, index * 200);
  });
}

function initializeEventListeners() {
  // Get Started button
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", handleGetStarted);
  }

  // Navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });

  // Add smooth scrolling to all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", handleSmoothScroll);
  });

  // Mobile menu toggle (if implemented)
  const mobileMenuBtn = document.querySelector('button[class*="md:hidden"]');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }
}

function addCardHoverEffects() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    // Cards already have hover effects via CSS
    // Add click event for potential future interactions
    card.addEventListener("click", function (e) {
      // Only trigger if not clicking on interactive elements
      if (!e.target.closest("button, input, a")) {
        console.log("Card clicked:", card);
      }
    });
  });
}

function initializeGreeting() {
  const greetBtn = document.getElementById("greetBtn");
  const nameInput = document.getElementById("nameInput");
  const greetingOutput = document.getElementById("greetingOutput");

  if (greetBtn && nameInput && greetingOutput) {
    greetBtn.addEventListener("click", function () {
      const name = nameInput.value.trim();
      if (name) {
        showGreeting(name, greetingOutput);
      } else {
        showError("Please enter your name first!", greetingOutput);
      }
    });

    // Add Enter key support for input
    nameInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        greetBtn.click();
      }
    });
  }
}

function handleGetStarted(e) {
  e.preventDefault();

  // Add pulse animation
  const button = e.target;
  button.classList.add("pulse-animation");

  // Show welcome message
  showNotification("Welcome to Shristi LMS! 🎉", "success");

  // Remove animation after 2 seconds
  setTimeout(() => {
    button.classList.remove("pulse-animation");
  }, 2000);

  // Simulate navigation or action
  console.log("Getting started with Shristi LMS...");
}

function handleNavigation(e) {
  e.preventDefault();
  const linkText = e.target.textContent;
  showNotification(`Navigating to ${linkText}...`, "info");
  console.log(`Navigation clicked: ${linkText}`);
}

function handleSmoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function showGreeting(name, outputElement) {
  const greetings = [
    `Hello, ${name}! Welcome to Shristi LMS! 👋`,
    `Hi there, ${name}! Ready to start learning? 📚`,
    `Welcome aboard, ${name}! Let's explore together! 🚀`,
    `Great to meet you, ${name}! Your learning journey begins now! ✨`,
  ];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  outputElement.textContent = randomGreeting;
  outputElement.classList.remove("hidden");
  outputElement.classList.add("animate-slide-up");

  // Add some visual flair
  outputElement.style.color = "#10b981"; // green-500
}

function showError(message, outputElement) {
  outputElement.textContent = message;
  outputElement.classList.remove("hidden");
  outputElement.style.color = "#ef4444"; // red-500

  // Clear error after 3 seconds
  setTimeout(() => {
    outputElement.classList.add("hidden");
  }, 3000);
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  notification.textContent = message;

  // Add to document
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add mobile menu toggle function
function toggleMobileMenu() {
  console.log("Mobile menu toggled");
  // Implementation for mobile menu toggle
  // This would show/hide mobile navigation
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add window resize handler for responsive behavior
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
    // Add any responsive behavior here
  }, 250)
);

// Add scroll handler for potential future features
window.addEventListener(
  "scroll",
  throttle(() => {
    const scrollY = window.scrollY;
    // Add scroll-based animations or effects here
  }, 100)
);

// Export functions for potential module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeApp,
    showNotification,
    debounce,
    throttle,
  };
}

// Quiz Master Pro - Main Logic with Enhanced Certificate
class QuizMaster {
  constructor() {
    this.currentQuestions = [];
    this.userAnswers = [];
    this.startTime = null;
    this.endTime = null;
    this.timerInterval = null;
    this.totalSeconds = 0;
    this.selectedLevel = '';
    this.questionPools = {
      easy: pythonEasyQuestions || [],
      intermediate: pythonIntermediateQuestions || [],
      advanced: pythonAdvancedQuestions || []
    };
    
    // Configuration for certificate - Change these values to customize
    this.config = {
      assessmentTitle: "Python Programming Proficiency Assessment",
      skillArea: "Python programming concepts and problem-solving abilities",
      certifyingAuthority: "ShristiLMS",
      platformName: "Learning Management System",
      validationText: "Verified Assessment"
    };
    
    this.init();
  }

  init() {
    this.setupLevelSelection();
    this.setupValidation();
    this.updateConfigurableText();
  }

  updateConfigurableText() {
    // Update certificate subtitle and skill area text
    document.getElementById('certificateSubtitle').textContent = this.config.assessmentTitle;
    document.getElementById('certSkillArea').textContent = this.config.skillArea;
    document.getElementById('certAuthority').textContent = this.config.certifyingAuthority;
    document.getElementById('certPlatform').textContent = this.config.platformName;
    document.getElementById('certValidation').textContent = this.config.validationText;
  }

  setupLevelSelection() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove selected class from all cards
        levelCards.forEach(c => c.classList.remove('selected'));
        // Add selected class to clicked card
        card.classList.add('selected');
        // Set selected level
        const level = card.dataset.level;
        document.getElementById('selectedLevel').value = level;
        this.selectedLevel = level;
        
        // Update question count options based on available questions
        const maxQuestions = this.questionPools[level].length;
        const questionCountSelect = document.getElementById('questionCount');
        
        // Update options to reflect available questions for this level
        Array.from(questionCountSelect.options).forEach(option => {
          const value = parseInt(option.value);
          if (value > maxQuestions) {
            option.disabled = true;
            option.text = option.text + ` (Only ${maxQuestions} available)`;
          } else {
            option.disabled = false;
            option.text = option.text.replace(/ \(Only \d+ available\)/, '');
          }
        });
        
        // Reset to valid selection if current is too high
        if (parseInt(questionCountSelect.value) > maxQuestions) {
          questionCountSelect.value = maxQuestions.toString();
        }
      });
    });
  }

  setupValidation() {
    const nameInput = document.getElementById('candidateName');
    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
    });
  }

  startQuiz() {
    if (!this.validateInputs()) return;

    const name = document.getElementById('candidateName').value.trim();
    const level = document.getElementById('selectedLevel').value;
    const questionCount = parseInt(document.getElementById('questionCount').value);
    const timeLimit = parseInt(document.getElementById('quizTime').value);

    // Hide intro and show quiz
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');

    // Prepare questions
    this.prepareQuestions(level, questionCount);
    
    // Setup timer
    this.totalSeconds = timeLimit * 60;
    this.startTime = new Date();
    
    // Render questions and start timer
    this.renderQuestions();
    this.startTimer();
    this.updateProgress();
    this.updateAnsweredCount();

    // Scroll to top of quiz
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  validateInputs() {
    const name = document.getElementById('candidateName').value.trim();
    const level = document.getElementById('selectedLevel').value;
    const questionCount = document.getElementById('questionCount').value;
    const timeLimit = document.getElementById('quizTime').value;

    if (!name) {
      this.showAlert('Please enter your name', 'warning');
      document.getElementById('candidateName').focus();
      return false;
    }

    if (name.length < 2) {
      this.showAlert('Please enter a valid name (at least 2 characters)', 'warning');
      document.getElementById('candidateName').focus();
      return false;
    }

    if (!level) {
      this.showAlert('Please select a difficulty level', 'warning');
      return false;
    }

    if (!questionCount) {
      this.showAlert('Please select number of questions', 'warning');
      return false;
    }

    if (!timeLimit) {
      this.showAlert('Please select time limit', 'warning');
      return false;
    }

    return true;
  }

  prepareQuestions(level, count) {
    const questionPool = [...this.questionPools[level]];
    
    // Shuffle questions
    for (let i = questionPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionPool[i], questionPool[j]] = [questionPool[j], questionPool[i]];
    }
    
    // Select required number of questions
    this.currentQuestions = questionPool.slice(0, count);
    this.userAnswers = new Array(this.currentQuestions.length).fill([]);
  }

  renderQuestions() {
    const form = document.getElementById('quizForm');
    form.innerHTML = '';

    this.currentQuestions.forEach((question, index) => {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card fade-in';
      
      const questionTitle = document.createElement('div');
      questionTitle.className = 'question-title';
      questionTitle.innerHTML = `<strong>Q${index + 1}:</strong> ${question.question}`;
      
      questionCard.appendChild(questionTitle);

      // Add topic badge
      const topicBadge = document.createElement('div');
      topicBadge.innerHTML = `<small style="background: var(--info-color); color: white; padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 1rem;"><i class="fas fa-tag"></i> ${question.topic}</small>`;
      questionCard.appendChild(topicBadge);

      question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = `question_${index}`;
        checkbox.value = optionIndex;
        checkbox.id = `q${index}_${optionIndex}`;
        
        const label = document.createElement('label');
        label.htmlFor = `q${index}_${optionIndex}`;
        label.textContent = option;
        label.style.cursor = 'pointer';
        label.style.flex = '1';

        optionDiv.appendChild(checkbox);
        optionDiv.appendChild(label);
        
        // Make entire option clickable
        optionDiv.addEventListener('click', (e) => {
          if (e.target.type !== 'checkbox') {
            checkbox.checked = !checkbox.checked;
          }
          this.updateUserAnswer(index);
        });

        questionCard.appendChild(optionDiv);
      });

      form.appendChild(questionCard);
    });

    // Add event listeners for answer tracking
    this.currentQuestions.forEach((_, index) => {
      const checkboxes = document.querySelectorAll(`input[name="question_${index}"]`);
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => this.updateUserAnswer(index));
      });
    });
  }

  updateUserAnswer(questionIndex) {
    const checkboxes = document.querySelectorAll(`input[name="question_${questionIndex}"]:checked`);
    this.userAnswers[questionIndex] = Array.from(checkboxes).map(cb => parseInt(cb.value));
    this.updateProgress();
    this.updateAnsweredCount();
  }

  updateProgress() {
    const answeredQuestions = this.userAnswers.filter(answer => answer.length > 0).length;
    const totalQuestions = this.currentQuestions.length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    
    document.getElementById('progressFill').style.width = progressPercentage + '%';
    document.getElementById('questionProgress').textContent = 
      `Question Progress: ${answeredQuestions}/${totalQuestions} answered`;
  }

  updateAnsweredCount() {
    const answeredQuestions = this.userAnswers.filter(answer => answer.length > 0).length;
    const totalQuestions = this.currentQuestions.length;
    document.getElementById('answeredCount').textContent = 
      `${answeredQuestions} of ${totalQuestions} questions answered`;
  }

  startTimer() {
    const updateTimer = () => {
      const minutes = Math.floor(this.totalSeconds / 60);
      const seconds = this.totalSeconds % 60;
      const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
      document.getElementById('timer').innerHTML = 
        `<i class="fas fa-clock"></i> <span>Time Left: ${timeDisplay}</span>`;
      
      // Change color when time is running low
      const timerElement = document.getElementById('timer');
      if (this.totalSeconds <= 300) { // 5 minutes
        timerElement.style.color = '#ef4444';
        timerElement.style.animation = 'pulse 1s infinite';
      }
      
      if (this.totalSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.submitQuiz();
        return;
      }
      
      this.totalSeconds--;
    };

    updateTimer();
    this.timerInterval = setInterval(updateTimer, 1000);
  }

  submitQuiz() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTime = new Date();
    
    // Hide quiz section and show results
    document.getElementById('quizSection').classList.add('hidden');
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');
    resultsSection.classList.add('show');
    resultsSection.style.display = 'block';
    
    // Calculate and display results
    setTimeout(() => {
      this.calculateResults();
      // Scroll to top of results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  calculateResults() {
    let score = 0;
    const results = [];
    const topicPerformance = {};

    this.currentQuestions.forEach((question, index) => {
      const userAnswer = this.userAnswers[index] || [];
      const correctAnswers = question.correct_answers;
      
      // Check if answer is correct (arrays must match exactly)
      const isCorrect = this.arraysEqual(userAnswer.sort(), correctAnswers.sort());
      
      if (isCorrect) score++;
      
      results.push({
        question,
        userAnswer,
        isCorrect,
        index
      });

      // Track topic performance
      const topic = question.topic;
      if (!topicPerformance[topic]) {
        topicPerformance[topic] = { correct: 0, total: 0 };
      }
      topicPerformance[topic].total++;
      if (isCorrect) topicPerformance[topic].correct++;
    });

    this.displayResults(score, results, topicPerformance);
  }

  arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  displayResults(score, results, topicPerformance) {
    const totalQuestions = this.currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const timeTaken = Math.round((this.endTime - this.startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Calculate grade
    const grade = this.calculateGrade(percentage);
    const passed = percentage >= 60;

    // Update score display
    document.getElementById('scoreDisplay').textContent = `${score}/${totalQuestions}`;
    document.getElementById('gradeDisplay').textContent = `Grade: ${grade.letter} (${percentage}%)`;
    document.getElementById('statusDisplay').innerHTML = 
      `<i class="fas fa-${passed ? 'check-circle' : 'times-circle'}"></i> ${passed ? 'Passed ✅' : 'Failed ❌'}`;

    // Show motivation for failed candidates
    if (!passed) {
      document.getElementById('motivationSection').classList.remove('hidden');
      this.showMotivation(percentage, grade);
    }

    // Display topic performance
    this.displayTopicPerformance(topicPerformance);

    // Display detailed review
    this.displayDetailedReview(results);

    // Show certificate for passed candidates
    if (passed) {
      this.generateCertificate(score, totalQuestions, grade, minutes, seconds);
    }
  }

  calculateGrade(percentage) {
    if (percentage >= 90) return { letter: 'A+', description: 'Excellent' };
    if (percentage >= 85) return { letter: 'A', description: 'Outstanding' };
    if (percentage >= 80) return { letter: 'A-', description: 'Very Good' };
    if (percentage >= 75) return { letter: 'B+', description: 'Good' };
    if (percentage >= 70) return { letter: 'B', description: 'Above Average' };
    if (percentage >= 65) return { letter: 'B-', description: 'Satisfactory' };
    if (percentage >= 60) return { letter: 'C', description: 'Pass' };
    if (percentage >= 50) return { letter: 'D', description: 'Below Average' };
    return { letter: 'F', description: 'Fail' };
  }

  showMotivation(percentage, grade) {
    const messages = [
      "🌟 Remember, every expert was once a beginner!",
      "💪 Your dedication to learning is already a victory!",
      "🚀 Each attempt brings you closer to mastery!",
      "🎯 Focus on understanding, not just memorizing!",
      "📚 Practice makes perfect - keep coding!",
      "✨ Believe in yourself and your potential!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    let encouragement = '';
    if (percentage < 30) {
      encouragement = "Don't worry! Start with the basics and build your foundation strong. Python is a journey, not a race!";
    } else if (percentage < 50) {
      encouragement = "You're making progress! Review the fundamentals and practice more coding exercises.";
    } else {
      encouragement = "You're almost there! Just a little more practice and you'll ace it next time!";
    }

    document.getElementById('encouragementMessage').innerHTML = 
      `<p style="font-size: 1.2rem; margin: 1rem 0;">${randomMessage}</p>
       <p>${encouragement}</p>`;
  }

  displayTopicPerformance(topicPerformance) {
    const topicStats = document.getElementById('topicStats');
    topicStats.innerHTML = '';

    Object.entries(topicPerformance).forEach(([topic, stats]) => {
      const percentage = Math.round((stats.correct / stats.total) * 100);
      const topicCard = document.createElement('div');
      topicCard.className = 'topic-card';
      
      let color = 'var(--danger-color)';
      if (percentage >= 80) color = 'var(--success-color)';
      else if (percentage >= 60) color = 'var(--warning-color)';
      
      topicCard.innerHTML = `
        <div class="topic-score" style="color: ${color}">${percentage}%</div>
        <h4>${topic}</h4>
        <p>${stats.correct}/${stats.total} correct</p>
        <small>${this.getTopicFeedback(percentage)}</small>
      `;
      
      topicStats.appendChild(topicCard);
    });
  }

  getTopicFeedback(percentage) {
    if (percentage >= 90) return "🌟 Excellent mastery!";
    if (percentage >= 80) return "🎯 Great understanding!";
    if (percentage >= 70) return "👍 Good grasp!";
    if (percentage >= 60) return "📖 Need some review";
    if (percentage >= 40) return "📚 Requires study";
    return "🔄 Needs significant improvement";
  }

  displayDetailedReview(results) {
    const reviewContainer = document.getElementById('questionReview');
    reviewContainer.innerHTML = '';

    results.forEach((result, index) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.className = `review-question ${result.isCorrect ? 'correct-answer' : 'incorrect-answer'}`;
      
      const userAnswerText = result.userAnswer.length > 0 
        ? result.userAnswer.map(i => result.question.options[i]).join(', ')
        : 'No answer selected';
      
      const correctAnswerText = result.question.correct_answers
        .map(i => result.question.options[i]).join(', ');

      reviewDiv.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="margin-right: 1rem; font-size: 1.5rem;">
            ${result.isCorrect ? '✅' : '❌'}
          </div>
          <div style="flex: 1;">
            <strong>Q${index + 1}: ${result.question.question}</strong>
            <div style="margin-top: 0.5rem;">
              <span style="background: var(--info-color); color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem;">
                ${result.question.topic}
              </span>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <strong style="color: ${result.isCorrect ? 'var(--success-color)' : 'var(--danger-color)'};">
            Your Answer:
          </strong> ${userAnswerText}
        </div>
        
        <div style="margin-bottom: 1rem;">
          <strong style="color: var(--success-color);">Correct Answer:</strong> ${correctAnswerText}
        </div>
        
        <div style="background: rgba(6, 182, 212, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--info-color);">
          <strong><i class="fas fa-lightbulb"></i> Explanation:</strong>
          <p style="margin: 0.5rem 0 0 0;">${result.question.explanation}</p>
        </div>
      `;
      
      reviewContainer.appendChild(reviewDiv);
    });
  }

  generateCertificate(score, total, grade, minutes, seconds) {
    document.getElementById('certificateSection').classList.remove('hidden');
    
    const name = document.getElementById('candidateName').value;
    const level = this.selectedLevel.charAt(0).toUpperCase() + this.selectedLevel.slice(1);
    const percentage = Math.round((score / total) * 100);
    const currentDate = new Date();
    
    // Format date and time
    const examDate = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const examTime = currentDate.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    
    // Generate verification code
    const verificationCode = `PY-${level.toUpperCase()}-${Date.now().toString().slice(-6)}`;
    
    // Populate certificate fields
    document.getElementById('certName').textContent = name;
    document.getElementById('certLevel').textContent = `${level} Python`;
    document.getElementById('certAssessmentType').textContent = this.config.assessmentTitle.replace('Python Programming Proficiency Assessment', 'Programming Assessment');
    document.getElementById('certScore').textContent = `${score}/${total} (${percentage}%)`;
    document.getElementById('certGrade').textContent = grade.description;
    document.getElementById('certDate').textContent = examDate;
    document.getElementById('certTime').textContent = examTime;
    document.getElementById('certDuration').textContent = `${minutes}m ${seconds}s`;
    document.getElementById('certQuestions').textContent = `${total} Questions`;
    document.getElementById('certVerification').textContent = verificationCode;
    
    // Add animation effect
    setTimeout(() => {
      document.getElementById('certificate').style.animation = 'fadeIn 1s ease-in-out';
    }, 100);
  }

  async downloadCertificate() {
    try {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      
      // Page dimensions
      const pageWidth = 297; // A4 landscape width
      const pageHeight = 210; // A4 landscape height
      const margin = 20;
      
      // Get certificate data
      const name = document.getElementById('candidateName').value;
      const level = this.selectedLevel.charAt(0).toUpperCase() + this.selectedLevel.slice(1);
      const score = document.getElementById('scoreDisplay').textContent;
      const grade = document.getElementById('gradeDisplay').textContent;
      const currentDate = new Date();
      const examDate = currentDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const examTime = currentDate.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      
      // Calculate exam duration
      const timeTaken = Math.round((this.endTime - this.startTime) / 1000);
      const minutes = Math.floor(timeTaken / 60);
      const seconds = timeTaken % 60;
      const duration = `${minutes}m ${seconds}s`;
      
      // Colors
      const primaryBlue = '#2563eb';
      const goldColor = '#fbbf24';
      const darkGray = '#374151';
      const lightGray = '#9ca3af';
      
      // Add decorative border
      pdf.setDrawColor(37, 99, 235); // Primary blue
      pdf.setLineWidth(3);
      pdf.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);
      
      // Add inner border
      pdf.setDrawColor(251, 191, 36); // Gold
      pdf.setLineWidth(1);
      pdf.rect(margin + 5, margin + 5, pageWidth - 2 * margin - 10, pageHeight - 2 * margin - 10);
      
      // Add corner decorations
      const cornerSize = 15;
      pdf.setFillColor(37, 99, 235);
      // Top corners
      pdf.triangle(margin, margin, margin + cornerSize, margin, margin, margin + cornerSize);
      pdf.triangle(pageWidth - margin, margin, pageWidth - margin - cornerSize, margin, pageWidth - margin, margin + cornerSize);
      // Bottom corners
      pdf.triangle(margin, pageHeight - margin, margin + cornerSize, pageHeight - margin, margin, pageHeight - margin - cornerSize);
      pdf.triangle(pageWidth - margin, pageHeight - margin, pageWidth - margin - cornerSize, pageHeight - margin, pageWidth - margin, pageHeight - margin - cornerSize);
      
      // Header decoration
      pdf.setFillColor(251, 191, 36);
      pdf.ellipse(pageWidth / 2, margin + 25, 40, 8, 'F');
      
      // Certificate title
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(28);
      pdf.setTextColor(37, 99, 235);
      pdf.text('CERTIFICATE OF ACHIEVEMENT', pageWidth / 2, margin + 40, { align: 'center' });
      
      // Subtitle
      pdf.setFontSize(14);
      pdf.setTextColor(107, 114, 128);
      pdf.text(this.config.assessmentTitle, pageWidth / 2, margin + 50, { align: 'center' });
      
      // Decorative line
      pdf.setDrawColor(251, 191, 36);
      pdf.setLineWidth(2);
      pdf.line(pageWidth / 2 - 60, margin + 55, pageWidth / 2 + 60, margin + 55);
      
      // "This is to certify that" text
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(16);
      pdf.setTextColor(55, 65, 81);
      pdf.text('This is to certify that', pageWidth / 2, margin + 75, { align: 'center' });
      
      // Candidate name (large and prominent)
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(36);
      pdf.setTextColor(37, 99, 235);
      pdf.text(name.toUpperCase(), pageWidth / 2, margin + 95, { align: 'center' });
      
      // Name underline
      pdf.setDrawColor(251, 191, 36);
      pdf.setLineWidth(2);
      const nameWidth = pdf.getTextWidth(name.toUpperCase()) * 36 / 12; // Approximate width calculation
      pdf.line(pageWidth / 2 - nameWidth / 2, margin + 100, pageWidth / 2 + nameWidth / 2, margin + 100);
      
      // Achievement text
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(16);
      pdf.setTextColor(55, 65, 81);
      pdf.text(`has successfully completed the ${level} Level`, pageWidth / 2, margin + 115, { align: 'center' });
      pdf.text(this.config.assessmentTitle.replace('Proficiency Assessment', 'Assessment'), pageWidth / 2, margin + 125, { align: 'center' });
      
      // Score and grade in a box
      pdf.setDrawColor(37, 99, 235);
      pdf.setFillColor(248, 250, 252);
      pdf.setLineWidth(1);
      pdf.rect(pageWidth / 2 - 50, margin + 135, 100, 25, 'FD');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.setTextColor(37, 99, 235);
      pdf.text(`Score: ${score}`, pageWidth / 2, margin + 145, { align: 'center' });
      pdf.text(grade, pageWidth / 2, margin + 155, { align: 'center' });
      
      // Performance level
      const percentage = parseInt(grade.match(/\((\d+)%\)/)?.[1] || '0');
      let performanceLevel = '';
      if (percentage >= 90) performanceLevel = 'OUTSTANDING PERFORMANCE';
      else if (percentage >= 80) performanceLevel = 'EXCELLENT PERFORMANCE';
      else if (percentage >= 70) performanceLevel = 'GOOD PERFORMANCE';
      else performanceLevel = 'SATISFACTORY PERFORMANCE';
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(251, 191, 36);
      pdf.text(performanceLevel, pageWidth / 2, margin + 170, { align: 'center' });
      
      // Footer section with exam details
      const footerY = pageHeight - margin - 35;
      
      // Left side - Date and Time
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      pdf.setTextColor(107, 114, 128);
      
      pdf.text('EXAMINATION DATE:', margin + 20, footerY);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(55, 65, 81);
      pdf.text(examDate, margin + 20, footerY + 8);
      
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(107, 114, 128);
      pdf.text('EXAMINATION TIME:', margin + 20, footerY + 18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(55, 65, 81);
      pdf.text(examTime, margin + 20, footerY + 26);
      
      // Center - Duration and Questions
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(107, 114, 128);
      pdf.text('COMPLETION TIME:', pageWidth / 2 - 30, footerY, { align: 'center' });
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(55, 65, 81);
      pdf.text(duration, pageWidth / 2 - 30, footerY + 8, { align: 'center' });
      
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(107, 114, 128);
      pdf.text('TOTAL QUESTIONS:', pageWidth / 2 - 30, footerY + 18, { align: 'center' });
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(55, 65, 81);
      pdf.text(this.currentQuestions.length.toString(), pageWidth / 2 - 30, footerY + 26, { align: 'center' });
      
      // Right side - Authority
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(37, 99, 235);
      pdf.text(this.config.certifyingAuthority, pageWidth - margin - 20, footerY + 5, { align: 'right' });
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.setTextColor(107, 114, 128);
      pdf.text(this.config.platformName, pageWidth - margin - 20, footerY + 13, { align: 'right' });
      pdf.text(this.config.validationText, pageWidth - margin - 20, footerY + 21, { align: 'right' });
      
      // Add verification code
      const verificationCode = `PY-${level.toUpperCase()}-${Date.now().toString().slice(-6)}`;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.setTextColor(156, 163, 175);
      pdf.text(`Verification Code: ${verificationCode}`, pageWidth / 2, pageHeight - margin - 5, { align: 'center' });
      
      // Add subtle watermark
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(60);
      pdf.setTextColor(248, 250, 252);
      pdf.text('CERTIFIED', pageWidth / 2, pageHeight / 2, { 
        align: 'center',
        angle: -45,
        renderingMode: 'stroke'
      });
      
      // Save the PDF
      const fileName = `${name.replace(/\s+/g, '_')}_Python_${level}_Certificate_${currentDate.getFullYear()}.pdf`;
      pdf.save(fileName);
      
      // Show success message
      this.showAlert('Certificate downloaded successfully!', 'success');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      this.showAlert('Error generating certificate. Please try again.', 'danger');
    }
  }

  restartQuiz() {
    // Reset all data
    this.currentQuestions = [];
    this.userAnswers = [];
    this.startTime = null;
    this.endTime = null;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.totalSeconds = 0;

    // Reset form
    document.getElementById('candidateName').value = '';
    document.getElementById('selectedLevel').value = '';
    document.getElementById('questionCount').value = '20';
    document.getElementById('quizTime').value = '30';
    
    // Remove selected class from level cards
    document.querySelectorAll('.level-card').forEach(card => {
      card.classList.remove('selected');
    });

    // Hide results and show intro
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('certificateSection').classList.add('hidden');
    document.getElementById('motivationSection').classList.add('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 1000;
      animation: slideIn 0.3s ease;
      max-width: 400px;
    `;
    
    const colors = {
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#06b6d4'
    };
    
    alert.style.backgroundColor = colors[type] || colors.info;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
      alert.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (alert.parentNode) {
          alert.parentNode.removeChild(alert);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.quizMaster = new QuizMaster();
});

// Global functions for HTML events
function startQuiz() {
  window.quizMaster.startQuiz();
}

function submitQuiz() {
  if (confirm('Are you sure you want to submit your quiz? This action cannot be undone.')) {
    window.quizMaster.submitQuiz();
  }
}

function restartQuiz() {
  if (confirm('Are you sure you want to start a new quiz? Your current progress will be lost.')) {
    window.quizMaster.restartQuiz();
  }
}

function downloadCertificate() {
  window.quizMaster.downloadCertificate();
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(style);
// Quiz Master Pro - Main Logic
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
    this.init();
  }

  init() {
    this.setupLevelSelection();
    this.setupValidation();
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
    
    document.getElementById('certName').textContent = name;
    document.getElementById('certLevel').textContent = `${level} Python`;
    document.getElementById('certScore').textContent = `${score}/${total} (${percentage}%)`;
    document.getElementById('certGrade').textContent = grade.description;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString();
    document.getElementById('certTime').textContent = `${minutes}m ${seconds}s`;
  }

  async downloadCertificate() {
    try {
      const certificate = document.getElementById('certificate');
      const canvas = await html2canvas(certificate, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true
      });
      
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 297; // A4 landscape width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      const name = document.getElementById('candidateName').value;
      const level = this.selectedLevel;
      const fileName = `${name.replace(/\s+/g, '_')}_Python_${level}_Certificate.pdf`;
      
      pdf.save(fileName);
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
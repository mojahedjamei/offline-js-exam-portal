// ============================================
// exam.js - سیستم آزمون Django
// مرکز آموزشی خوارزمی
// نسخه اصلاح شده - دی‌ماه ۱۴۰۳
// ============================================

// تنظیمات آزمون
const QUESTIONS_COUNT = 33;
const EXAM_DURATION = 33 * 60; // ۳۳ دقیقه

// متغیرهای آزمون
let selectedQuestions = [];
let currentQuestion = 0;
let answers = {};
let timer;
let timerInterval;
let examStarted = false;

// عناصر DOM
const startSection = document.getElementById('startSection');
const examSection = document.getElementById('examSection');
const resultSection = document.getElementById('resultSection');
const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('options');
const questionCounter = document.getElementById('questionCounter');
const timerDiv = document.getElementById('timer');
const scoreDisplay = document.getElementById('scoreDisplay');
const verifyBox = document.getElementById('verifyBox');
const wrongQuestionsContainer = document.getElementById('wrongQuestionsContainer');

// عناصر ورودی
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const nationalCodeInput = document.getElementById('nationalCode');

// ==================== توابع اصلی ====================

// شروع آزمون
function startExam() {
  // اعتبارسنجی
  if (!firstNameInput.value.trim() || !lastNameInput.value.trim() || !nationalCodeInput.value.trim()) {
    alert('لطفاً تمامی فیلدها را پر کنید');
    return;
  }
  
  // انتخاب سوالات تصادفی
  selectedQuestions = [...QUESTIONS]
    .sort(() => Math.random() - 0.5)
    .slice(0, QUESTIONS_COUNT);
  
  // ریست متغیرها
  answers = {};
  currentQuestion = 0;
  timer = EXAM_DURATION;
  examStarted = true;
  
  // تغییر بخش‌های نمایش
  startSection.style.display = "none";
  examSection.style.display = "block";
  
  // نمایش اولین سوال
  showQuestion();
  
  // شروع تایمر
  startTimer();
}

// شروع تایمر
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timer--;
    updateTimerDisplay();
    
    if (timer <= 0) {
      finishExam();
    }
  }, 1000);
}

// نمایش تایمر
function updateTimerDisplay() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  timerDiv.textContent = `⏰ زمان باقی‌مانده: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // تغییر رنگ در ۵ دقیقه آخر
  if (timer <= 300) {
    timerDiv.style.color = '#e74c3c';
    timerDiv.style.background = '#ffe6e6';
  } else if (timer <= 600) {
    timerDiv.style.color = '#f39c12';
    timerDiv.style.background = '#fff8e6';
  }
}

// نمایش سوال
function showQuestion() {
  const q = selectedQuestions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.text}`;
  questionCounter.textContent = `سؤال ${currentQuestion + 1} از ${selectedQuestions.length}`;
  
  // پاک کردن گزینه‌های قبلی
  optionsDiv.innerHTML = '';
  
  // ایجاد گزینه‌ها
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    
    // اگر قبلاً پاسخ داده شده باشد
    if (answers[currentQuestion] === index) {
      btn.classList.add('selected');
    }
    
    optionsDiv.appendChild(btn);
  });
}

// انتخاب پاسخ
function selectAnswer(index) {
  answers[currentQuestion] = index;
  
  // برجسته کردن گزینه انتخاب شده
  const buttons = optionsDiv.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('selected'));
  buttons[index].classList.add('selected');
}

// سوال بعدی
function nextQuestion() {
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

// سوال قبلی
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// پایان آزمون
function finishExam() {
  // توقف تایمر
  clearInterval(timerInterval);
  
  // درخواست تأیید
  const confirmFinish = confirm("آیا مطمئن هستید که می‌خواهید آزمون را به پایان برسانید؟\n\nپس از پایان، نتایج نمایش داده خواهد شد.");
  if (!confirmFinish) {
    // اگر کاربر لغو کرد، تایمر را دوباره شروع کن
    if (timer > 0) {
      timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay();
        if (timer <= 0) finishExam();
      }, 1000);
    }
    return;
  }
  
  examStarted = false;
  
  // محاسبه نتایج
  let correctCount = 0;
  let wrongQuestions = [];
  
  selectedQuestions.forEach((question, index) => {
    const userAnswerIndex = answers[index];
    const isCorrect = userAnswerIndex === question.answer;
    
    if (isCorrect) {
      correctCount++;
    } else if (userAnswerIndex !== undefined) {
      // ذخیره سوالات اشتباه
      wrongQuestions.push({
        questionNumber: index + 1,
        questionText: question.text,
        userAnswer: question.options[userAnswerIndex],
        correctAnswer: question.options[question.answer],
        explanation: question.explanation || "توضیحی موجود نیست"
      });
    }
  });
  
  const scoreOutOf100 = Math.round((correctCount / QUESTIONS_COUNT) * 100);
  
  // نمایش نتایج کلی
  displayResults(correctCount, scoreOutOf100);
  
  // نمایش سوالات اشتباه
  displayWrongQuestions(wrongQuestions);
  
  // ذخیره نتیجه
  saveExamResult(correctCount, scoreOutOf100);
  
  // تغییر بخش‌های نمایش
  examSection.style.display = "none";
  resultSection.style.display = "block";
}

// نمایش نتایج
function displayResults(correctCount, scoreOutOf100) {
  const totalTime = EXAM_DURATION - timer;
  const minutesSpent = Math.floor(totalTime / 60);
  const secondsSpent = totalTime % 60;
  
  scoreDisplay.innerHTML = `
    <div style="text-align: center;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 20px 0;">
        <div style="font-size: 42px; font-weight: bold; margin-bottom: 10px;">${scoreOutOf100}/100</div>
        <div style="font-size: 20px; opacity: 0.9;">نمره نهایی شما</div>
      </div>
      
      <div style="display: flex; justify-content: space-around; margin: 25px 0; text-align: center;">
        <div>
          <div style="font-size: 32px; color: #28a745; font-weight: bold;">${correctCount}</div>
          <div style="color: #666; margin-top: 5px;">پاسخ صحیح</div>
        </div>
        <div style="border-left: 2px solid #eee; border-right: 2px solid #eee; padding: 0 30px;">
          <div style="font-size: 32px; color: #6c757d; font-weight: bold;">${QUESTIONS_COUNT - correctCount}</div>
          <div style="color: #666; margin-top: 5px;">پاسخ نادرست</div>
        </div>
        <div>
          <div style="font-size: 32px; color: #17a2b8; font-weight: bold;">${QUESTIONS_COUNT}</div>
          <div style="color: #666; margin-top: 5px;">کل سوالات</div>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; text-align: center;">
        <div style="color: #666; font-size: 14px; margin-bottom: 5px;">⏱️ زمان صرف شده</div>
        <div style="font-size: 24px; font-weight: bold; color: #495057;">${minutesSpent}:${secondsSpent.toString().padStart(2, '0')}</div>
        <div style="color: #6c757d; font-size: 12px; margin-top: 5px;">از ۳۳:۰۰ دقیقه</div>
      </div>
    </div>
  `;
  
  // اطلاعات آزمون
  const now = new Date();
  verifyBox.innerHTML = `
    <div style="text-align: center;">
      <h3 style="color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #3498db;">📋 مشخصات آزمون</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: right;">
        <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #3498db;">
          <div style="color: #666; font-size: 14px; margin-bottom: 5px;">👤 نام</div>
          <div style="font-weight: bold; font-size: 16px;">${firstNameInput.value}</div>
        </div>
        <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #3498db;">
          <div style="color: #666; font-size: 14px; margin-bottom: 5px;">👥 نام خانوادگی</div>
          <div style="font-weight: bold; font-size: 16px;">${lastNameInput.value}</div>
        </div>
        <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #3498db;">
          <div style="color: #666; font-size: 14px; margin-bottom: 5px;">🔢 کد ملی</div>
          <div style="font-weight: bold; font-size: 16px;">${nationalCodeInput.value}</div>
        </div>
        <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #3498db;">
          <div style="color: #666; font-size: 14px; margin-bottom: 5px;">📅 تاریخ آزمون</div>
          <div style="font-weight: bold; font-size: 16px;">${now.toLocaleDateString('fa-IR')}</div>
        </div>
      </div>
      <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; text-align: center;">
        <div style="color: #004085; font-weight: bold; margin-bottom: 10px;">📢 توجه</div>
        <div style="color: #004085; font-size: 14px;">
          نتایج آزمون را حداکثر تا ساعت ۲۰:۰۰ روز آزمون، به صورت شخصی برای استاد در تلگرام ارسال کنید.
        </div>
      </div>
    </div>
  `;
}

// نمایش سوالات اشتباه
function displayWrongQuestions(wrongQuestions) {
  wrongQuestionsContainer.innerHTML = '';
  
  if (wrongQuestions.length === 0) {
    wrongQuestionsContainer.innerHTML = `
      <div style="text-align: center; padding: 30px; background: #d4edda; border-radius: 10px; margin: 20px 0;">
        <div style="font-size: 24px; color: #155724; margin-bottom: 10px;">🎉 تبریک!</div>
        <div style="color: #155724; font-size: 16px;">شما تمام سوالات را صحیح پاسخ دادید.</div>
      </div>
    `;
    return;
  }
  
  let html = `
    <div style="margin-top: 40px;">
      <h3 style="color: #e74c3c; text-align: center; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 2px solid #f8d7da;">
        📝 سوالات نیاز به بررسی (${wrongQuestions.length} سوال)
      </h3>
  `;
  
  wrongQuestions.forEach(item => {
    html += `
      <div style="background: white; border: 2px solid #f8d7da; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <span style="background: #e74c3c; color: white; padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: bold;">
            سوال ${item.questionNumber}
          </span>
          <span style="font-size: 14px; color: #e74c3c; font-weight: bold;">❌ پاسخ شما اشتباه بود</span>
        </div>
        
        <p style="font-weight: bold; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">${item.questionText}</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
          <div style="background: #f8d7da; padding: 15px; border-radius: 8px; border-right: 4px solid #dc3545;">
            <div style="color: #721c24; font-weight: bold; margin-bottom: 8px; font-size: 15px;">❌ پاسخ شما</div>
            <div style="color: #721c24; font-size: 14px; line-height: 1.5;">${item.userAnswer}</div>
          </div>
          <div style="background: #d4edda; padding: 15px; border-radius: 8px; border-right: 4px solid #28a745;">
            <div style="color: #155724; font-weight: bold; margin-bottom: 8px; font-size: 15px;">✅ پاسخ صحیح</div>
            <div style="color: #155724; font-size: 14px; line-height: 1.5;">${item.correctAnswer}</div>
          </div>
        </div>
        
        <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; border-right: 4px solid #3498db;">
          <div style="color: #004085; font-weight: bold; margin-bottom: 8px; font-size: 15px;">💡 توضیح آموزشی</div>
          <div style="color: #004085; font-size: 14px; line-height: 1.6;">${item.explanation}</div>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  wrongQuestionsContainer.innerHTML = html;
}

// ذخیره نتیجه آزمون
function saveExamResult(correctCount, scoreOutOf100) {
  try {
    const result = {
      id: `exam_${nationalCodeInput.value}_${Date.now()}`, // 🔥 شناسه منحصربه‌فرد
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      nationalCode: nationalCodeInput.value,
      score: scoreOutOf100,
      correctAnswers: correctCount,
      totalQuestions: QUESTIONS_COUNT,
      date: new Date().toISOString(),
      timestamp: Date.now()
    };
    
    // ذخیره در IndexedDB
    if (typeof saveResult === 'function') {
      saveResult(result);
    } else {
      // ذخیره جایگزین در localStorage
      localStorage.setItem(`exam_result_${result.id}`, JSON.stringify(result));
      console.log("✅ نتایج در localStorage ذخیره شد:", result);
    }
    
  } catch (error) {
    console.error("❌ خطا در ذخیره نتایج:", error);
  }
}

// ==================== رویدادهای صفحه ====================

// رویداد بارگذاری صفحه
window.onload = function() {
  console.log("✅ سیستم آزمون Django آماده است.");
  
  // امکان Enter برای شروع آزمون
  nationalCodeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      startExam();
    }
  });
  
  // حذف فضاهای اضافی هنگام تایپ
  firstNameInput.addEventListener('input', function() {
    this.value = this.value.trim();
  });
  
  lastNameInput.addEventListener('input', function() {
    this.value = this.value.trim();
  });
  
  nationalCodeInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // فقط اعداد
  });
};

// ==================== توابع عمومی ====================

// توابع در دسترس از HTML
window.startExam = startExam;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.finishExam = finishExam;

// ==================== پایان فایل ====================

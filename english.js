/* =========================================
   P1 ENGLISH
   Four beginner lessons + quizzes + progress
========================================= */

const englishLessons = {
    phonics: {
        label: "Adventure 1",
        title: "Alphabet & Phonics",
        icon: "🔤",
        description: "Listen for beginning sounds and match them to letters.",
        facts: [
            { icon: "A a 🍎", title: "A says /a/", text: "Apple begins with the letter A." },
            { icon: "B b ⚽", title: "B says /b/", text: "Ball begins with the letter B." },
            { icon: "C c 🐱", title: "C says /k/", text: "Cat begins with the letter C." },
            { icon: "D d 🐶", title: "D says /d/", text: "Dog begins with the letter D." }
        ],
        questions: [
            { text: "Which letter does apple begin with?", visual: "🍎", answers: ["A", "B", "D"], correct: 0 },
            { text: "Which word begins with B?", visual: "B b", answers: ["ball", "cat", "dog"], correct: 0 },
            { text: "Which letter does cat begin with?", visual: "🐱", answers: ["C", "A", "D"], correct: 0 },
            { text: "Which word begins with D?", visual: "D d", answers: ["dog", "apple", "ball"], correct: 0 },
            { text: "Which pair is correct?", visual: "🔤", answers: ["A - apple", "B - cat", "C - dog"], correct: 0 }
        ]
    },
    vocabulary: {
        label: "Adventure 2",
        title: "Words & Vocabulary",
        icon: "🧠",
        description: "Learn common words and what they mean.",
        facts: [
            { icon: "👩", title: "Person", text: "A teacher is a person." },
            { icon: "🏫", title: "Place", text: "A school is a place." },
            { icon: "📘", title: "Thing", text: "A book is a thing we can read." },
            { icon: "🏃", title: "Action", text: "Run is an action word. It tells what someone does." }
        ],
        questions: [
            { text: "Which one is a person?", visual: "👩 🏫 📘", answers: ["teacher", "school", "book"], correct: 0 },
            { text: "Which one is a place?", visual: "🏠", answers: ["home", "girl", "pencil"], correct: 0 },
            { text: "Which one is a thing?", visual: "✏️", answers: ["pencil", "boy", "park"], correct: 0 },
            { text: "Which word is an action?", visual: "🏃", answers: ["run", "table", "school"], correct: 0 },
            { text: "Which word matches this picture?", visual: "🐶", answers: ["dog", "chair", "jump"], correct: 0 }
        ]
    },
    sentences: {
        label: "Adventure 3",
        title: "Simple Sentences",
        icon: "✏️",
        description: "Make complete sentences using capitals, spaces and full stops.",
        facts: [
            { icon: "🔠", title: "Start with a capital", text: "A sentence begins with a capital letter. Example: The cat runs." },
            { icon: "↔️", title: "Leave spaces", text: "Leave a space between each word so the sentence is easy to read." },
            { icon: "🔴", title: "End with a full stop", text: "A telling sentence can end with a full stop." },
            { icon: "👦 ➕ 🏃", title: "Tell a complete idea", text: "A sentence can tell who or what, and what happens. Example: Ben runs." }
        ],
        questions: [
            { text: "Which sentence starts correctly?", visual: "🔠", answers: ["The dog runs.", "the dog runs.", "the Dog runs."], correct: 0 },
            { text: "Which sentence has the correct spaces?", visual: "↔️", answers: ["I like apples.", "Ilikeapples.", "I  likeapples."], correct: 0 },
            { text: "Which sentence ends correctly?", visual: "🔴", answers: ["Sam is happy.", "Sam is happy", "Sam is happy,"], correct: 0 },
            { text: "Which is a complete sentence?", visual: "🐱 💤", answers: ["The cat sleeps.", "The cat", "sleeps"], correct: 0 },
            { text: "Choose the best sentence.", visual: "👧 🍎", answers: ["Mia eats an apple.", "mia eats an apple", "Mia apple eats"], correct: 0 }
        ]
    },
    reading: {
        label: "Adventure 4",
        title: "Reading",
        icon: "📖",
        description: "Read a tiny story and find important details.",
        facts: [
            { icon: "👦", title: "Meet Ben", text: "Ben has a red ball." },
            { icon: "🌳", title: "At the park", text: "Ben goes to the park with his mum." },
            { icon: "🐶", title: "A new friend", text: "A small dog runs after the ball." },
            { icon: "😊", title: "A happy ending", text: "Ben laughs and plays with the dog." }
        ],
        questions: [
            { text: "What colour is Ben's ball?", visual: "👦 ⚽", answers: ["red", "blue", "green"], correct: 0 },
            { text: "Where does Ben go?", visual: "🌳", answers: ["the park", "the zoo", "the shop"], correct: 0 },
            { text: "Who goes with Ben?", visual: "👦 👩", answers: ["his mum", "his teacher", "his friend"], correct: 0 },
            { text: "What animal runs after the ball?", visual: "⚽ 🐾", answers: ["a dog", "a cat", "a bird"], correct: 0 },
            { text: "How does Ben feel at the end?", visual: "😊", answers: ["happy", "angry", "sleepy"], correct: 0 }
        ]
    }
};

let currentEnglishTopic = null;
let currentEnglishQuestion = 0;
let currentEnglishScore = 0;
let englishAnswered = false;

function openEnglishLesson(topic) {
    const lesson = englishLessons[topic];
    if (!lesson) return;

    currentEnglishTopic = topic;
    currentEnglishQuestion = 0;
    currentEnglishScore = 0;
    englishAnswered = false;

    document.getElementById("english-dashboard").hidden = true;
    document.getElementById("english-lesson").hidden = false;
    document.getElementById("learn-stage").hidden = false;
    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;

    document.getElementById("lesson-icon").textContent = lesson.icon;
    document.getElementById("lesson-label").textContent = lesson.label;
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-description").textContent = lesson.description;

    const factGrid = document.getElementById("fact-grid");
    factGrid.innerHTML = "";

    lesson.facts.forEach((fact) => {
        const button = document.createElement("button");
        button.className = "fact-card";
        button.type = "button";
        button.innerHTML = `
            <span class="fact-icon">${fact.icon}</span>
            <span class="fact-title">${fact.title}</span>
            <span class="fact-text">${fact.text}</span>
            <span class="fact-listen">🔊 Tap to hear</span>
        `;
        button.addEventListener("click", () => speakEnglish(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeEnglishLesson() {
    stopEnglishSpeech();
    document.getElementById("english-lesson").hidden = true;
    document.getElementById("english-dashboard").hidden = false;
    updateEnglishProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startEnglishQuiz() {
    currentEnglishQuestion = 0;
    currentEnglishScore = 0;
    englishAnswered = false;

    document.getElementById("learn-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("quiz-stage").hidden = false;
    showEnglishQuestion();
}

function showEnglishQuestion() {
    const lesson = englishLessons[currentEnglishTopic];
    const question = lesson.questions[currentEnglishQuestion];
    const total = lesson.questions.length;

    englishAnswered = false;
    document.getElementById("english-question-number").textContent = currentEnglishQuestion + 1;
    document.getElementById("english-question-total").textContent = total;
    document.getElementById("english-question-text").textContent = question.text;
    document.getElementById("english-question-visual").textContent = question.visual;
    document.getElementById("english-live-score").textContent = currentEnglishScore;
    document.getElementById("english-quiz-progress").style.width = `${((currentEnglishQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("english-feedback");
    feedback.textContent = "";
    feedback.className = "english-feedback";

    const answerGrid = document.getElementById("english-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "english-answer";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => checkEnglishAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkEnglishAnswer(selectedIndex, selectedButton) {
    if (englishAnswered) return;
    englishAnswered = true;

    const lesson = englishLessons[currentEnglishTopic];
    const question = lesson.questions[currentEnglishQuestion];
    const buttons = [...document.querySelectorAll(".english-answer")];
    const feedback = document.getElementById("english-feedback");

    buttons.forEach((button) => button.disabled = true);
    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentEnglishScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent reading!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("english-live-score").textContent = currentEnglishScore;

    window.setTimeout(() => {
        currentEnglishQuestion += 1;
        if (currentEnglishQuestion < lesson.questions.length) {
            showEnglishQuestion();
        } else {
            finishEnglishLesson();
        }
    }, 1300);
}

function finishEnglishLesson() {
    const lesson = englishLessons[currentEnglishTopic];
    const total = lesson.questions.length;

    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = false;
    document.getElementById("english-final-score").textContent = `${currentEnglishScore} / ${total}`;

    let message = "You finished the English adventure. Great effort!";
    if (currentEnglishScore === total) {
        message = "Perfect score! You are a super reader! 📚✨";
    } else if (currentEnglishScore >= 3) {
        message = "Great job! Your English skills are growing! 🌟";
    } else {
        message = "Nice try! Read the learning cards again and have another go. 💪";
    }
    document.getElementById("english-finish-message").textContent = message;

    saveEnglishCompletion(currentEnglishTopic);
    updateEnglishProgress();
}

function restartEnglishLesson() {
    startEnglishQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getEnglishCompletion() {
    try {
        return JSON.parse(localStorage.getItem("englishP1Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveEnglishCompletion(topic) {
    const completed = getEnglishCompletion();
    completed[topic] = true;
    localStorage.setItem("englishP1Completed", JSON.stringify(completed));
}

function updateEnglishProgress() {
    const completed = getEnglishCompletion();
    const topics = Object.keys(englishLessons);
    const done = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((done / topics.length) * 100);

    document.getElementById("english-progress-text").textContent = `${progress}%`;
    document.getElementById("english-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("english-progress-message");
    if (progress === 100) {
        message.textContent = "Amazing! You completed every P1 English adventure! 🏆";
    } else if (progress > 0) {
        message.textContent = `${done} of ${topics.length} adventures completed. Keep reading!`;
    } else {
        message.textContent = "Complete a lesson to earn your first English star!";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.english-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        if (completed[topic]) {
            card.classList.add("completed");
            status.textContent = "Completed ✓";
        } else {
            card.classList.remove("completed");
            status.textContent = "Ready";
        }
    });
}

function speakEnglish(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    utterance.pitch = 1.04;
    window.speechSynthesis.speak(utterance);
}

function stopEnglishSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateEnglishProgress);

const p3MathLessons = {
    rounding: {
        label: "Adventure 1",
        title: "Rounding Off",
        icon: "🎯",
        description: "Round numbers to the nearest 10 and nearest 100.",
        facts: [
            { icon: "🔟", title: "Nearest 10", text: "Look at the ones digit. 5 or more rounds up; 4 or less rounds down." },
            { icon: "💯", title: "Nearest 100", text: "Look at the tens digit. 5 or more rounds up; 4 or less rounds down." },
            { icon: "⬆️", title: "Round up", text: "347 rounds to 350 to the nearest 10 because the ones digit is 7." },
            { icon: "⬇️", title: "Round down", text: "342 rounds to 340 to the nearest 10 because the ones digit is 2." }
        ],
        example: {
            icon: "🎯",
            title: "Rounding example",
            text: "347 rounds to 350 to the nearest 10, but 347 rounds to 300 to the nearest 100."
        },
        questions: [
            { text: "Round 347 to the nearest 10.", visual: "347 → ?", answers: ["340", "350", "400"], correct: 1 },
            { text: "Round 682 to the nearest 100.", visual: "682 → ?", answers: ["600", "680", "700"], correct: 2 },
            { text: "Round 1,243 to the nearest 10.", visual: "1,243 → ?", answers: ["1,240", "1,250", "1,200"], correct: 0 },
            { text: "Round 3,451 to the nearest 100.", visual: "3,451 → ?", answers: ["3,400", "3,450", "3,500"], correct: 2 },
            { text: "Round 764 to the nearest 10.", visual: "764 → ?", answers: ["760", "770", "800"], correct: 0 }
        ]
    },
    operations: {
        label: "Adventure 2",
        title: "Four Operations",
        icon: "➕",
        description: "Use addition, subtraction, multiplication and division with confidence.",
        facts: [
            { icon: "➕", title: "Addition", text: "Line up place values so ones, tens, hundreds and thousands stay in the correct columns." },
            { icon: "➖", title: "Subtraction", text: "Subtract carefully by place value and regroup when needed." },
            { icon: "✖️", title: "Multiplication", text: "Multiplication is a fast way to add equal groups." },
            { icon: "➗", title: "Division", text: "Division means sharing equally or finding how many equal groups there are." }
        ],
        example: {
            icon: "🧮",
            title: "Four-operation example",
            text: "8 × 7 = 56, so 56 ÷ 8 = 7. Multiplication and division are related."
        },
        questions: [
            { text: "What is 2,356 + 1,487?", visual: "2,356 + 1,487", answers: ["3,743", "3,843", "3,943"], correct: 1 },
            { text: "What is 5,000 − 2,756?", visual: "5,000 − 2,756", answers: ["2,244", "2,344", "3,244"], correct: 0 },
            { text: "What is 8 × 7?", visual: "8 groups of 7", answers: ["48", "54", "56"], correct: 2 },
            { text: "What is 72 ÷ 8?", visual: "72 shared into 8 groups", answers: ["8", "9", "10"], correct: 1 },
            { text: "Four bags have 6 oranges each. How many oranges altogether?", visual: "🍊🍊🍊🍊 × 6", answers: ["10", "20", "24"], correct: 2 }
        ]
    },
    fractions: {
        label: "Adventure 3",
        title: "Fractions",
        icon: "🍕",
        description: "Read fractions, compare them and recognise simple equivalent fractions.",
        facts: [
            { icon: "🔢", title: "Numerator", text: "The top number tells how many equal parts we are talking about." },
            { icon: "🧩", title: "Denominator", text: "The bottom number tells how many equal parts make one whole." },
            { icon: "⚖️", title: "Compare", text: "When denominators are the same, the fraction with the larger numerator is greater." },
            { icon: "🔁", title: "Equivalent", text: "Different-looking fractions can have the same value, such as one half and two quarters." }
        ],
        example: {
            icon: "🍕",
            title: "Fraction example",
            text: "If a pizza has 8 equal slices and you eat 3, you ate 3/8 of the pizza."
        },
        questions: [
            { text: "What is the numerator in 3/8?", visual: "3/8", answers: ["3", "8", "11"], correct: 0 },
            { text: "What is the denominator in 5/6?", visual: "5/6", answers: ["5", "6", "1"], correct: 1 },
            { text: "Which fraction is equivalent to 1/2?", visual: "1/2 = ?", answers: ["1/4", "2/4", "3/4"], correct: 1 },
            { text: "Which fraction is greater?", visual: "5/8  ?  3/8", answers: ["5/8", "3/8", "They are equal"], correct: 0 },
            { text: "One whole is split into 4 equal parts. What is one part?", visual: "◼️ → 4 equal parts", answers: ["1/2", "1/3", "1/4"], correct: 2 }
        ]
    },
    measure: {
        label: "Adventure 4",
        title: "Measurement & Time",
        icon: "📏",
        description: "Use common units for length, mass, capacity, perimeter and time.",
        facts: [
            { icon: "📏", title: "Length", text: "100 centimetres equals 1 metre. Use centimetres for smaller lengths and metres for larger ones." },
            { icon: "⚖️", title: "Mass", text: "1000 grams equals 1 kilogram. A school bag is usually measured in kilograms." },
            { icon: "🥛", title: "Capacity", text: "1000 millilitres equals 1 litre. A water bottle may be measured in millilitres." },
            { icon: "🕒", title: "Time & perimeter", text: "Time can be measured in hours and minutes. Perimeter is the distance around a shape." }
        ],
        example: {
            icon: "📐",
            title: "Perimeter example",
            text: "A rectangle 5 cm long and 3 cm wide has perimeter 5 + 3 + 5 + 3 = 16 cm."
        },
        questions: [
            { text: "How many centimetres are in 1 metre?", visual: "1 m = ? cm", answers: ["10", "100", "1000"], correct: 1 },
            { text: "How many grams are in 1 kilogram?", visual: "1 kg = ? g", answers: ["100", "500", "1000"], correct: 2 },
            { text: "How many millilitres are in 1 litre?", visual: "1 L = ? mL", answers: ["100", "1000", "10,000"], correct: 1 },
            { text: "What time is 30 minutes after 3:15?", visual: "🕒 3:15 + 30 min", answers: ["3:30", "3:45", "4:15"], correct: 1 },
            { text: "A square has sides of 4 cm. What is its perimeter?", visual: "□ 4 cm each side", answers: ["8 cm", "12 cm", "16 cm"], correct: 2 }
        ]
    }
};

let currentP3Topic = null;
let currentP3Question = 0;
let currentP3Score = 0;
let p3Answered = false;

function openP3Lesson(topic) {
    const lesson = p3MathLessons[topic];
    if (!lesson) return;

    currentP3Topic = topic;
    currentP3Question = 0;
    currentP3Score = 0;
    p3Answered = false;

    document.getElementById("p3-dashboard").hidden = true;
    document.getElementById("p3-lesson").hidden = false;
    document.getElementById("learn-stage").hidden = false;
    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;

    document.getElementById("lesson-icon").textContent = lesson.icon;
    document.getElementById("lesson-label").textContent = lesson.label;
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-description").textContent = lesson.description;
    document.getElementById("example-icon").textContent = lesson.example.icon;
    document.getElementById("example-title").textContent = lesson.example.title;
    document.getElementById("example-text").textContent = lesson.example.text;

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
        button.addEventListener("click", () => speakP3Math(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP3Lesson() {
    stopP3Speech();
    document.getElementById("p3-lesson").hidden = true;
    document.getElementById("p3-dashboard").hidden = false;
    updateP3Progress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP3Quiz() {
    currentP3Question = 0;
    currentP3Score = 0;
    p3Answered = false;

    document.getElementById("learn-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("quiz-stage").hidden = false;
    showP3Question();
}

function showP3Question() {
    const lesson = p3MathLessons[currentP3Topic];
    const question = lesson.questions[currentP3Question];
    const total = lesson.questions.length;

    p3Answered = false;
    document.getElementById("p3-question-number").textContent = currentP3Question + 1;
    document.getElementById("p3-question-total").textContent = total;
    document.getElementById("p3-question-text").textContent = question.text;
    document.getElementById("p3-question-visual").textContent = question.visual;
    document.getElementById("p3-live-score").textContent = currentP3Score;
    document.getElementById("p3-quiz-progress").style.width = `${((currentP3Question + 1) / total) * 100}%`;

    const feedback = document.getElementById("p3-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p3-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP3Answer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP3Answer(selectedIndex, selectedButton) {
    if (p3Answered) return;
    p3Answered = true;

    const lesson = p3MathLessons[currentP3Topic];
    const question = lesson.questions[currentP3Question];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p3-feedback");

    buttons.forEach((button) => { button.disabled = true; });
    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP3Score += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent P3 maths thinking!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p3-live-score").textContent = currentP3Score;

    window.setTimeout(() => {
        currentP3Question += 1;
        if (currentP3Question < lesson.questions.length) {
            showP3Question();
        } else {
            finishP3Lesson();
        }
    }, 1300);
}

function finishP3Lesson() {
    const lesson = p3MathLessons[currentP3Topic];
    const total = lesson.questions.length;

    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = false;
    document.getElementById("p3-final-score").textContent = `${currentP3Score} / ${total}`;

    let message = "You finished the adventure. Great effort!";
    if (currentP3Score === total) {
        message = "Perfect score! You are a P3 Math superstar! 🌟";
    } else if (currentP3Score >= 3) {
        message = "Great job! Your P3 maths skills are getting stronger! 💪";
    } else {
        message = "Nice try! Review the learning cards and try again. 🧠";
    }
    document.getElementById("p3-finish-message").textContent = message;

    saveP3Completion(currentP3Topic);
    updateP3Progress();
}

function restartP3Lesson() {
    startP3Quiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP3Completion() {
    try {
        return JSON.parse(localStorage.getItem("mathP3Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP3Completion(topic) {
    const completed = getP3Completion();
    completed[topic] = true;
    localStorage.setItem("mathP3Completed", JSON.stringify(completed));
}

function updateP3Progress() {
    const completed = getP3Completion();
    const topics = Object.keys(p3MathLessons);
    const done = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((done / topics.length) * 100);

    document.getElementById("p3-progress-text").textContent = `${progress}%`;
    document.getElementById("p3-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p3-progress-message");
    if (progress === 100) {
        message.textContent = "Amazing! You completed every P3 Math adventure! 🏆";
    } else if (progress > 0) {
        message.textContent = `${done} of ${topics.length} adventures completed. Keep going!`;
    } else {
        message.textContent = "Complete a lesson to earn your first P3 Math star!";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p3-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        if (!card || !status) return;

        if (completed[topic]) {
            card.classList.add("completed");
            status.textContent = "Completed ✓";
        } else {
            card.classList.remove("completed");
            status.textContent = "Ready";
        }
    });
}

function speakP3Math(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    utterance.pitch = 1.02;
    window.speechSynthesis.speak(utterance);
}

function stopP3Speech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP3Progress);

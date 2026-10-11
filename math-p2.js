const p2MathLessons = {
    numbers: {
        label: "Adventure 1",
        title: "Numbers to 1000",
        icon: "🔢",
        description: "Build, read and compare 3-digit numbers using place value.",
        facts: [
            { icon: "💯", title: "Hundreds", text: "100 is one hundred. Ten hundreds make 1000." },
            { icon: "🧱", title: "Place value", text: "In 347, there are 3 hundreds, 4 tens and 7 ones." },
            { icon: "⬆️", title: "Compare", text: "Look at the hundreds first. 652 is greater than 589." },
            { icon: "🔁", title: "Number patterns", text: "Count forward or backward in ones, tens or hundreds." }
        ],
        example: {
            icon: "🧱",
            title: "Place-value example",
            text: "425 = 4 hundreds + 2 tens + 5 ones."
        },
        questions: [
            { text: "What is the value of the 6 in 642?", visual: "642", answers: ["6", "60", "600"], correct: 2 },
            { text: "Which number is greatest?", visual: "🔍", answers: ["398", "839", "783"], correct: 1 },
            { text: "What number is 5 hundreds, 2 tens and 4 ones?", visual: "🧱🧱🧱", answers: ["524", "254", "542"], correct: 0 },
            { text: "What comes next? 470, 480, 490, ___", visual: "➡️", answers: ["491", "500", "590"], correct: 1 },
            { text: "Which sign makes this true? 706 ___ 760", visual: "706 ? 760", answers: [">", "<", "="], correct: 1 }
        ]
    },
    addsub: {
        label: "Adventure 2",
        title: "Add & Subtract",
        icon: "➕",
        description: "Use place value and number bonds to calculate within 1000.",
        facts: [
            { icon: "➕", title: "Add hundreds", text: "200 + 300 = 500. Add hundreds just like smaller numbers." },
            { icon: "🧠", title: "Break apart", text: "46 + 23 can be 40 + 20, then 6 + 3." },
            { icon: "➖", title: "Subtract", text: "Start with the bigger number and take away tens and ones." },
            { icon: "✅", title: "Check", text: "Use the opposite operation to check your answer when you can." }
        ],
        example: {
            icon: "🧮",
            title: "Break-apart example",
            text: "245 + 32 = 245 + 30 + 2 = 277."
        },
        questions: [
            { text: "What is 230 + 140?", visual: "230 + 140", answers: ["360", "370", "470"], correct: 1 },
            { text: "What is 485 - 200?", visual: "485 - 200", answers: ["285", "385", "685"], correct: 0 },
            { text: "What is 156 + 23?", visual: "156 + 23", answers: ["169", "179", "189"], correct: 1 },
            { text: "What is 320 - 45?", visual: "320 - 45", answers: ["265", "275", "285"], correct: 1 },
            { text: "A box has 125 stickers. 40 more are added. How many stickers now?", visual: "⭐📦", answers: ["85", "155", "165"], correct: 2 }
        ]
    },
    multdiv: {
        label: "Adventure 3",
        title: "Multiply & Divide",
        icon: "✖️",
        description: "Make equal groups, use times tables and share equally.",
        facts: [
            { icon: "🍎🍎", title: "Equal groups", text: "3 groups of 2 means 2 + 2 + 2, which is 6." },
            { icon: "✖️", title: "Multiplication", text: "4 times 5 means 4 equal groups of 5. The answer is 20." },
            { icon: "➗", title: "Division", text: "12 divided by 3 means share 12 into 3 equal groups. Each group gets 4." },
            { icon: "🔗", title: "They are connected", text: "If 3 times 4 is 12, then 12 divided by 3 is 4." }
        ],
        example: {
            icon: "🍪",
            title: "Equal-group example",
            text: "5 plates with 2 cookies each: 5 × 2 = 10 cookies."
        },
        questions: [
            { text: "What is 4 × 3?", visual: "●●●  ●●●  ●●●  ●●●", answers: ["7", "12", "14"], correct: 1 },
            { text: "What is 20 ÷ 5?", visual: "20 ÷ 5", answers: ["4", "5", "10"], correct: 0 },
            { text: "There are 3 bags with 5 marbles in each bag. How many marbles?", visual: "🎒 🎒 🎒", answers: ["8", "15", "20"], correct: 1 },
            { text: "18 sweets are shared equally among 3 children. How many does each child get?", visual: "🍬 → 👧👦👧", answers: ["5", "6", "9"], correct: 1 },
            { text: "Which fact is true?", visual: "✖️➗", answers: ["5 × 2 = 7", "4 × 5 = 20", "12 ÷ 3 = 3"], correct: 1 }
        ]
    },
    moneytime: {
        label: "Adventure 4",
        title: "Money & Time",
        icon: "🪙",
        description: "Use dollars and cents, then read common times on a clock.",
        facts: [
            { icon: "💵", title: "Dollars and cents", text: "100 cents make 1 Singapore dollar." },
            { icon: "🪙", title: "Add money", text: "Add dollars with dollars and cents with cents." },
            { icon: "🕐", title: "O'clock", text: "When the minute hand points to 12, the time is exactly on the hour." },
            { icon: "🕡", title: "Half past", text: "When the minute hand points to 6, 30 minutes have passed. We say half past." }
        ],
        example: {
            icon: "🛍️",
            title: "Money example",
            text: "$2 + $3 = $5. A $5 note can pay for an item costing $4, with $1 change."
        },
        questions: [
            { text: "How many cents make $1?", visual: "💰 $1", answers: ["10 cents", "50 cents", "100 cents"], correct: 2 },
            { text: "You have $2 and $5. How much altogether?", visual: "💵 $2 + $5", answers: ["$3", "$7", "$10"], correct: 1 },
            { text: "A toy costs $6. You pay $10. How much change do you get?", visual: "🧸 $6", answers: ["$4", "$6", "$16"], correct: 0 },
            { text: "The hour hand is at 3 and the minute hand is at 12. What time is it?", visual: "🕒", answers: ["3 o'clock", "3:30", "12 o'clock"], correct: 0 },
            { text: "Which clock shows half past 6?", visual: "🕡", answers: ["6:00", "6:30", "7:30"], correct: 1 }
        ]
    }
};

let currentP2Topic = null;
let currentP2Question = 0;
let currentP2Score = 0;
let p2Answered = false;

function openP2Lesson(topic) {
    const lesson = p2MathLessons[topic];
    if (!lesson) return;

    currentP2Topic = topic;
    currentP2Question = 0;
    currentP2Score = 0;
    p2Answered = false;

    document.getElementById("p2-dashboard").hidden = true;
    document.getElementById("p2-lesson").hidden = false;
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
        button.addEventListener("click", () => speakP2Math(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP2Lesson() {
    stopP2Speech();
    document.getElementById("p2-lesson").hidden = true;
    document.getElementById("p2-dashboard").hidden = false;
    updateP2Progress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP2Quiz() {
    currentP2Question = 0;
    currentP2Score = 0;
    p2Answered = false;

    document.getElementById("learn-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("quiz-stage").hidden = false;
    showP2Question();
}

function showP2Question() {
    const lesson = p2MathLessons[currentP2Topic];
    const question = lesson.questions[currentP2Question];
    const total = lesson.questions.length;

    p2Answered = false;
    document.getElementById("p2-question-number").textContent = currentP2Question + 1;
    document.getElementById("p2-question-total").textContent = total;
    document.getElementById("p2-question-text").textContent = question.text;
    document.getElementById("p2-question-visual").textContent = question.visual;
    document.getElementById("p2-live-score").textContent = currentP2Score;
    document.getElementById("p2-quiz-progress").style.width = `${((currentP2Question + 1) / total) * 100}%`;

    const feedback = document.getElementById("p2-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p2-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP2Answer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP2Answer(selectedIndex, selectedButton) {
    if (p2Answered) return;
    p2Answered = true;

    const lesson = p2MathLessons[currentP2Topic];
    const question = lesson.questions[currentP2Question];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p2-feedback");

    buttons.forEach((button) => { button.disabled = true; });
    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP2Score += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Great maths thinking!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p2-live-score").textContent = currentP2Score;

    window.setTimeout(() => {
        currentP2Question += 1;
        if (currentP2Question < lesson.questions.length) {
            showP2Question();
        } else {
            finishP2Lesson();
        }
    }, 1300);
}

function finishP2Lesson() {
    const lesson = p2MathLessons[currentP2Topic];
    const total = lesson.questions.length;

    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = false;
    document.getElementById("p2-final-score").textContent = `${currentP2Score} / ${total}`;

    let message = "You finished the adventure. Great effort!";
    if (currentP2Score === total) {
        message = "Perfect score! You are a P2 Math superstar! 🌟";
    } else if (currentP2Score >= 3) {
        message = "Great job! Your maths skills are getting stronger! 💪";
    } else {
        message = "Nice try! Review the learning cards and try again. 🧠";
    }
    document.getElementById("p2-finish-message").textContent = message;

    saveP2Completion(currentP2Topic);
    updateP2Progress();
}

function restartP2Lesson() {
    startP2Quiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP2Completion() {
    try {
        return JSON.parse(localStorage.getItem("mathP2Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP2Completion(topic) {
    const completed = getP2Completion();
    completed[topic] = true;
    localStorage.setItem("mathP2Completed", JSON.stringify(completed));
}

function updateP2Progress() {
    const completed = getP2Completion();
    const topics = Object.keys(p2MathLessons);
    const done = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((done / topics.length) * 100);

    document.getElementById("p2-progress-text").textContent = `${progress}%`;
    document.getElementById("p2-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p2-progress-message");
    if (progress === 100) {
        message.textContent = "Amazing! You completed every P2 Math adventure! 🏆";
    } else if (progress > 0) {
        message.textContent = `${done} of ${topics.length} adventures completed. Keep going!`;
    } else {
        message.textContent = "Complete a lesson to earn your first P2 Math star!";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p2-card[data-topic="${topic}"]`);
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

function speakP2Math(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.84;
    utterance.pitch = 1.03;
    window.speechSynthesis.speak(utterance);
}

function stopP2Speech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP2Progress);

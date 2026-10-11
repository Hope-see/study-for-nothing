const p4MathLessons = {
    whole: {
        label: "Adventure 1",
        title: "Whole Numbers & Rounding",
        icon: "🔢",
        description: "Explore numbers up to 100,000 and round them to useful place values.",
        facts: [
            { icon: "🏙️", title: "Numbers to 100,000", text: "A 5-digit number has ten-thousands, thousands, hundreds, tens and ones places." },
            { icon: "🔎", title: "Place value", text: "In 47,386, the digit 7 has a value of 7,000 because it is in the thousands place." },
            { icon: "⚖️", title: "Compare numbers", text: "Compare digits from left to right. The first different digit tells you which number is greater." },
            { icon: "🎯", title: "Rounding", text: "To round to the nearest 10, 100 or 1,000, look at the digit immediately to the right." }
        ],
        example: {
            icon: "🎯",
            title: "Rounding example",
            text: "47,386 is about 47,400 to the nearest 100 and about 47,000 to the nearest 1,000."
        },
        questions: [
            { text: "What is the value of the digit 7 in 47,386?", visual: "47,386", answers: ["700", "7,000", "70,000"], correct: 1 },
            { text: "Which number is the greatest?", visual: "🔢", answers: ["63,205", "63,250", "62,999"], correct: 1 },
            { text: "Round 46,782 to the nearest 100.", visual: "46,782 → ?", answers: ["46,700", "46,800", "47,000"], correct: 1 },
            { text: "Round 72,650 to the nearest 1,000.", visual: "72,650 → ?", answers: ["72,000", "72,700", "73,000"], correct: 2 },
            { text: "What is 10,000 more than 58,746?", visual: "58,746 + 10,000", answers: ["59,746", "68,746", "158,746"], correct: 1 }
        ]
    },
    factors: {
        label: "Adventure 2",
        title: "Factors, Multiples & Operations",
        icon: "✖️",
        description: "Find factors and multiples, then multiply and divide larger numbers.",
        facts: [
            { icon: "🧩", title: "Factors", text: "A factor divides a number exactly. For example, 6 is a factor of 36 because 36 divided by 6 is 6." },
            { icon: "🪜", title: "Multiples", text: "Multiples come from multiplying. Multiples of 4 include 4, 8, 12, 16 and 20." },
            { icon: "🤝", title: "Common factors and multiples", text: "A common factor or common multiple belongs to both numbers you are comparing." },
            { icon: "🧠", title: "Larger operations", text: "Use place value carefully when multiplying by a 2-digit number or dividing a larger number." }
        ],
        example: {
            icon: "🧩",
            title: "Factor example",
            text: "Factors of 12 are 1, 2, 3, 4, 6 and 12. The first common multiple of 4 and 6 is 12."
        },
        questions: [
            { text: "Which number is a factor of 36?", visual: "36", answers: ["5", "6", "7"], correct: 1 },
            { text: "Which is a common factor of 18 and 24?", visual: "18 & 24", answers: ["5", "6", "8"], correct: 1 },
            { text: "What is the first common multiple of 4 and 6?", visual: "4, 6", answers: ["8", "10", "12"], correct: 2 },
            { text: "What is 324 × 12?", visual: "324 × 12", answers: ["3,288", "3,888", "4,188"], correct: 1 },
            { text: "What is 2,856 ÷ 7?", visual: "2,856 ÷ 7", answers: ["408", "418", "428"], correct: 0 }
        ]
    },
    fractions: {
        label: "Adventure 3",
        title: "Fractions & Decimals",
        icon: "🍕",
        description: "Connect mixed numbers, fractions and decimals, then calculate with them.",
        facts: [
            { icon: "🍰", title: "Mixed and improper fractions", text: "A mixed number has a whole number and a fraction. An improper fraction has a numerator that is at least as large as its denominator." },
            { icon: "🎒", title: "Fraction of a set", text: "To find a fraction of a set, divide by the denominator and multiply by the numerator." },
            { icon: "➕", title: "Add and subtract fractions", text: "Fractions need a common denominator before you add or subtract the numerators." },
            { icon: "🔟", title: "Decimals", text: "Decimals can show tenths, hundredths and thousandths. They can also be rounded just like whole numbers." }
        ],
        example: {
            icon: "🍕",
            title: "Fraction and decimal example",
            text: "1 3/4 = 7/4. Also, 3/10 = 0.3 and 25/100 = 0.25."
        },
        questions: [
            { text: "Change 1 3/4 into an improper fraction.", visual: "1 3/4", answers: ["4/7", "7/4", "8/4"], correct: 1 },
            { text: "What is 3/5 of 20?", visual: "3/5 of 20", answers: ["8", "12", "15"], correct: 1 },
            { text: "What is 1/4 + 1/2?", visual: "1/4 + 1/2", answers: ["2/6", "2/4", "3/4"], correct: 2 },
            { text: "In 0.375, which digit is in the hundredths place?", visual: "0.375", answers: ["3", "7", "5"], correct: 1 },
            { text: "Round 3.46 to 1 decimal place.", visual: "3.46 → ?", answers: ["3.4", "3.5", "4.0"], correct: 1 }
        ]
    },
    geometry: {
        label: "Adventure 4",
        title: "Geometry, Area & Perimeter",
        icon: "📐",
        description: "Measure angles, explore symmetry and nets, and solve shape problems.",
        facts: [
            { icon: "📐", title: "Angles", text: "Angles are measured in degrees. A right angle measures exactly 90 degrees." },
            { icon: "🪞", title: "Line symmetry", text: "A line of symmetry divides a shape into two matching mirror halves." },
            { icon: "📏", title: "Area and perimeter", text: "Area measures the space inside a shape. Perimeter measures the distance around its outside." },
            { icon: "📦", title: "Nets", text: "A net is a flat 2D pattern that can be folded to make a 3D solid such as a cube or cuboid." }
        ],
        example: {
            icon: "▭",
            title: "Rectangle example",
            text: "A rectangle 8 cm long and 5 cm wide has area 40 cm² and perimeter 26 cm."
        },
        questions: [
            { text: "How many degrees are in a right angle?", visual: "∟", answers: ["45°", "90°", "180°"], correct: 1 },
            { text: "A rectangle is 8 cm by 5 cm. What is its area?", visual: "8 cm × 5 cm", answers: ["13 cm²", "26 cm²", "40 cm²"], correct: 2 },
            { text: "A square has side length 7 cm. What is its perimeter?", visual: "□ 7 cm", answers: ["14 cm", "28 cm", "49 cm"], correct: 1 },
            { text: "How many lines of symmetry does a square have?", visual: "□", answers: ["2", "4", "8"], correct: 1 },
            { text: "A net made of 6 equal squares can fold into which solid?", visual: "⬜⬜⬜⬜⬜⬜", answers: ["Cube", "Cone", "Cylinder"], correct: 0 }
        ]
    }
};

let currentP4Topic = null;
let currentP4Question = 0;
let currentP4Score = 0;
let p4Answered = false;

function openP4Lesson(topic) {
    const lesson = p4MathLessons[topic];
    if (!lesson) return;

    currentP4Topic = topic;
    currentP4Question = 0;
    currentP4Score = 0;
    p4Answered = false;

    document.getElementById("p4-dashboard").hidden = true;
    document.getElementById("p4-lesson").hidden = false;
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
        button.addEventListener("click", () => speakP4Math(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP4Lesson() {
    stopP4Speech();
    document.getElementById("p4-lesson").hidden = true;
    document.getElementById("p4-dashboard").hidden = false;
    updateP4Progress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP4Quiz() {
    currentP4Question = 0;
    currentP4Score = 0;
    p4Answered = false;

    document.getElementById("learn-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("quiz-stage").hidden = false;
    showP4Question();
}

function showP4Question() {
    const lesson = p4MathLessons[currentP4Topic];
    const question = lesson.questions[currentP4Question];
    const total = lesson.questions.length;

    p4Answered = false;
    document.getElementById("p4-question-number").textContent = currentP4Question + 1;
    document.getElementById("p4-question-total").textContent = total;
    document.getElementById("p4-question-text").textContent = question.text;
    document.getElementById("p4-question-visual").textContent = question.visual;
    document.getElementById("p4-live-score").textContent = currentP4Score;
    document.getElementById("p4-quiz-progress").style.width = `${((currentP4Question + 1) / total) * 100}%`;

    const feedback = document.getElementById("p4-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p4-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP4Answer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP4Answer(selectedIndex, selectedButton) {
    if (p4Answered) return;
    p4Answered = true;

    const lesson = p4MathLessons[currentP4Topic];
    const question = lesson.questions[currentP4Question];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p4-feedback");

    buttons.forEach((button) => { button.disabled = true; });
    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP4Score += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent P4 maths thinking!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p4-live-score").textContent = currentP4Score;

    window.setTimeout(() => {
        currentP4Question += 1;
        if (currentP4Question < lesson.questions.length) {
            showP4Question();
        } else {
            finishP4Lesson();
        }
    }, 1300);
}

function finishP4Lesson() {
    const lesson = p4MathLessons[currentP4Topic];
    const total = lesson.questions.length;

    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = false;
    document.getElementById("p4-final-score").textContent = `${currentP4Score} / ${total}`;

    let message = "You finished the adventure. Great effort!";
    if (currentP4Score === total) {
        message = "Perfect score! You are a P4 Math superstar! 🌟";
    } else if (currentP4Score >= 3) {
        message = "Great job! Your P4 maths skills are getting stronger! 💪";
    } else {
        message = "Nice try! Review the learning cards and try again. 🧠";
    }
    document.getElementById("p4-finish-message").textContent = message;

    saveP4Completion(currentP4Topic);
    updateP4Progress();
}

function restartP4Lesson() {
    startP4Quiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP4Completion() {
    try {
        return JSON.parse(localStorage.getItem("mathP4Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP4Completion(topic) {
    const completed = getP4Completion();
    completed[topic] = true;
    localStorage.setItem("mathP4Completed", JSON.stringify(completed));
}

function updateP4Progress() {
    const completed = getP4Completion();
    const topics = Object.keys(p4MathLessons);
    const done = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((done / topics.length) * 100);

    document.getElementById("p4-progress-text").textContent = `${progress}%`;
    document.getElementById("p4-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p4-progress-message");
    if (progress === 100) {
        message.textContent = "Amazing! You completed every P4 Math adventure! 🏆";
    } else if (progress > 0) {
        message.textContent = `${done} of ${topics.length} adventures completed. Keep going!`;
    } else {
        message.textContent = "Complete a lesson to earn your first P4 Math star!";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p4-card[data-topic="${topic}"]`);
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

function speakP4Math(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    utterance.pitch = 1.02;
    window.speechSynthesis.speak(utterance);
}

function stopP4Speech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP4Progress);

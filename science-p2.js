/* =========================================
   P2 SCIENCE
   Four lessons + quizzes + saved progress
========================================= */

const p2ScienceLessons = {
    materials: {
        label: "Adventure 1",
        title: "Materials & Properties",
        icon: "🧱",
        description: "Compare materials by their useful properties.",
        exampleIcon: "🧽",
        exampleTitle: "Mini investigation",
        exampleText: "Put one drop of water on paper and one on plastic. Which material absorbs the water?",
        facts: [
            { icon: "🪨 🧸", title: "Hard or soft", text: "A rock is hard. A soft toy is soft and can be squeezed." },
            { icon: "🧽 💧", title: "Absorbent", text: "An absorbent material takes in water. A sponge is absorbent." },
            { icon: "☂️ 💧", title: "Waterproof", text: "A waterproof material does not let water pass through easily." },
            { icon: "🪟 📦", title: "Transparent or opaque", text: "Transparent materials let light through. Opaque materials block light." }
        ],
        questions: [
            { text: "Which material is likely to absorb water?", visual: "🧽 💧", answers: ["Sponge", "Glass", "Metal spoon"], correct: 0 },
            { text: "Which object should be made from a waterproof material?", visual: "🌧️", answers: ["Raincoat", "Tissue", "Paper towel"], correct: 0 },
            { text: "Which material lets us see through it clearly?", visual: "🪟", answers: ["Clear glass", "Wood", "Cardboard"], correct: 0 },
            { text: "A wooden block is usually...", visual: "🪵", answers: ["Hard", "Liquid", "Stretchy like rubber"], correct: 0 },
            { text: "Why is a towel useful after a shower?", visual: "🛁 🧺", answers: ["It is absorbent", "It is transparent", "It makes light"], correct: 0 }
        ]
    },
    lifecycles: {
        label: "Adventure 2",
        title: "Life Cycles",
        icon: "🦋",
        description: "Explore how living things grow and change over time.",
        exampleIcon: "🌱",
        exampleTitle: "Watch something grow",
        exampleText: "Place a bean on damp cotton. Observe it each day and draw what changes.",
        facts: [
            { icon: "🌰 ➜ 🌱 ➜ 🌿", title: "Plants grow from seeds", text: "With suitable water, air and warmth, many seeds can begin to grow." },
            { icon: "🥚 ➜ 🐛 ➜ 🦋", title: "Butterfly life cycle", text: "A butterfly begins as an egg, becomes a caterpillar, then a pupa and an adult butterfly." },
            { icon: "🥚 ➜ 🐸", title: "Frog life cycle", text: "Frogs begin as eggs, become tadpoles and later grow into adult frogs." },
            { icon: "🐣 ➜ 🐔", title: "Young animals grow", text: "Young animals grow into adults of the same kind." }
        ],
        questions: [
            { text: "What usually comes first in a butterfly life cycle?", visual: "🦋", answers: ["Egg", "Adult butterfly", "Pupa"], correct: 0 },
            { text: "What does a tadpole grow into?", visual: "🐟 ➜ ?", answers: ["Frog", "Butterfly", "Chicken"], correct: 0 },
            { text: "What can a seed grow into?", visual: "🌰 ➜ ?", answers: ["A plant", "A rock", "A spoon"], correct: 0 },
            { text: "Which order is correct for a chicken?", visual: "🐔", answers: ["Egg → chick → adult", "Adult → egg → chick", "Chick → adult → seed"], correct: 0 },
            { text: "What is true about life cycles?", visual: "🔄", answers: ["Living things grow and change", "Nothing ever changes", "Only toys have life cycles"], correct: 0 }
        ]
    },
    light: {
        label: "Adventure 3",
        title: "Light & Shadows",
        icon: "💡",
        description: "Discover light sources and investigate how shadows are made.",
        exampleIcon: "🔦",
        exampleTitle: "Shadow test",
        exampleText: "Shine a torch at a toy near a wall. Move the toy closer to and farther from the torch. What happens to its shadow?",
        facts: [
            { icon: "☀️ 💡 🔦", title: "Light sources", text: "The Sun, a lit lamp and a switched-on torch are sources of light." },
            { icon: "👀 ✨", title: "Light helps us see", text: "We need light to see objects around us clearly." },
            { icon: "✋ 🔦 ⬛", title: "Shadows", text: "A shadow forms when an opaque object blocks light." },
            { icon: "🪟 📦", title: "Materials and light", text: "Transparent materials let much light through. Opaque materials block light." }
        ],
        questions: [
            { text: "Which one is a source of light?", visual: "☀️ 🪑 📘", answers: ["Sun", "Chair", "Book"], correct: 0 },
            { text: "What do we need to see an object clearly?", visual: "👀", answers: ["Light", "Only sound", "Only water"], correct: 0 },
            { text: "When does a shadow form?", visual: "🔦 ✋", answers: ["When an object blocks light", "When there is no object", "When water boils"], correct: 0 },
            { text: "Which object is opaque?", visual: "📦", answers: ["Cardboard box", "Clear glass window", "Clean water"], correct: 0 },
            { text: "Which tool can you use to make a shadow indoors?", visual: "🏠", answers: ["Torch", "Towel", "Spoon only"], correct: 0 }
        ]
    },
    weather: {
        label: "Adventure 4",
        title: "Weather & Water",
        icon: "🌦️",
        description: "Observe weather and see how heating and cooling change water.",
        exampleIcon: "🧊",
        exampleTitle: "Water change",
        exampleText: "Place an ice cube in a bowl and watch it. Record what happens as it gets warmer.",
        facts: [
            { icon: "☀️ 🌧️ 💨", title: "Weather changes", text: "A day can be sunny, rainy, cloudy or windy. We can observe and record the weather." },
            { icon: "🧊 ➜ 💧", title: "Melting", text: "When ice gets warm enough, it melts and becomes liquid water." },
            { icon: "💧 ➜ 🧊", title: "Freezing", text: "When liquid water becomes cold enough, it freezes and becomes ice." },
            { icon: "☀️ 👕", title: "Warmth can dry water", text: "Water on wet clothes can slowly go into the air, helping the clothes dry." }
        ],
        questions: [
            { text: "Which symbol shows rainy weather?", visual: "☀️ 🌧️ ☁️", answers: ["🌧️", "☀️", "⭐"], correct: 0 },
            { text: "What happens when an ice cube gets warmer?", visual: "🧊", answers: ["It melts", "It grows", "It becomes wood"], correct: 0 },
            { text: "What happens when liquid water becomes cold enough?", visual: "💧 ❄️", answers: ["It can freeze", "It becomes sand", "It starts shining"], correct: 0 },
            { text: "Which tool can help measure how warm the air is?", visual: "🌡️", answers: ["Thermometer", "Ruler", "Clock"], correct: 0 },
            { text: "Why can wet clothes become dry?", visual: "👕 ☀️", answers: ["Water leaves the clothes and goes into the air", "The clothes eat the water", "The water turns into paper"], correct: 0 }
        ]
    }
};

let currentP2ScienceTopic = null;
let currentP2ScienceQuestion = 0;
let currentP2ScienceScore = 0;
let p2ScienceAnswered = false;

function openP2ScienceLesson(topic) {
    const lesson = p2ScienceLessons[topic];
    if (!lesson) return;

    currentP2ScienceTopic = topic;
    currentP2ScienceQuestion = 0;
    currentP2ScienceScore = 0;
    p2ScienceAnswered = false;

    document.getElementById("p2-science-dashboard").hidden = true;
    document.getElementById("p2-science-lesson").hidden = false;
    document.getElementById("p2-science-learn-stage").hidden = false;
    document.getElementById("p2-science-quiz-stage").hidden = true;
    document.getElementById("p2-science-finish-stage").hidden = true;

    document.getElementById("p2-science-lesson-icon").textContent = lesson.icon;
    document.getElementById("p2-science-lesson-label").textContent = lesson.label;
    document.getElementById("p2-science-lesson-title").textContent = lesson.title;
    document.getElementById("p2-science-lesson-description").textContent = lesson.description;
    document.getElementById("p2-science-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p2-science-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p2-science-example-text").textContent = lesson.exampleText;

    const factGrid = document.getElementById("p2-science-fact-grid");
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
        button.addEventListener("click", () => speakP2Science(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP2ScienceLesson() {
    stopP2ScienceSpeech();
    document.getElementById("p2-science-lesson").hidden = true;
    document.getElementById("p2-science-dashboard").hidden = false;
    updateP2ScienceProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP2ScienceQuiz() {
    currentP2ScienceQuestion = 0;
    currentP2ScienceScore = 0;
    p2ScienceAnswered = false;

    document.getElementById("p2-science-learn-stage").hidden = true;
    document.getElementById("p2-science-finish-stage").hidden = true;
    document.getElementById("p2-science-quiz-stage").hidden = false;
    showP2ScienceQuestion();
}

function showP2ScienceQuestion() {
    const lesson = p2ScienceLessons[currentP2ScienceTopic];
    const question = lesson.questions[currentP2ScienceQuestion];
    const total = lesson.questions.length;

    p2ScienceAnswered = false;
    document.getElementById("p2-science-question-number").textContent = currentP2ScienceQuestion + 1;
    document.getElementById("p2-science-question-total").textContent = total;
    document.getElementById("p2-science-question-text").textContent = question.text;
    document.getElementById("p2-science-question-visual").textContent = question.visual;
    document.getElementById("p2-science-live-score").textContent = currentP2ScienceScore;
    document.getElementById("p2-science-quiz-progress").style.width = `${((currentP2ScienceQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("p2-science-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p2-science-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP2ScienceAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP2ScienceAnswer(selectedIndex, selectedButton) {
    if (p2ScienceAnswered) return;
    p2ScienceAnswered = true;

    const lesson = p2ScienceLessons[currentP2ScienceTopic];
    const question = lesson.questions[currentP2ScienceQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p2-science-feedback");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP2ScienceScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Great investigating!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p2-science-live-score").textContent = currentP2ScienceScore;

    window.setTimeout(() => {
        currentP2ScienceQuestion += 1;
        if (currentP2ScienceQuestion < lesson.questions.length) {
            showP2ScienceQuestion();
        } else {
            finishP2ScienceLesson();
        }
    }, 1300);
}

function finishP2ScienceLesson() {
    const lesson = p2ScienceLessons[currentP2ScienceTopic];
    const total = lesson.questions.length;

    document.getElementById("p2-science-quiz-stage").hidden = true;
    document.getElementById("p2-science-finish-stage").hidden = false;
    document.getElementById("p2-science-final-score").textContent = `${currentP2ScienceScore} / ${total}`;

    let message = "You finished the investigation and learned something new!";
    if (currentP2ScienceScore === total) {
        message = "Perfect score! You are a super scientist! 🧪✨";
    } else if (currentP2ScienceScore >= 3) {
        message = "Great job! Your science skills are growing! 🌟";
    } else {
        message = "Nice investigating! Try again and see what else you can discover. 🔎";
    }
    document.getElementById("p2-science-finish-message").textContent = message;

    saveP2ScienceCompletion(currentP2ScienceTopic);
    updateP2ScienceProgress();
}

function restartP2ScienceLesson() {
    startP2ScienceQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP2ScienceCompletion() {
    try {
        return JSON.parse(localStorage.getItem("scienceP2Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP2ScienceCompletion(topic) {
    const completed = getP2ScienceCompletion();
    completed[topic] = true;
    localStorage.setItem("scienceP2Completed", JSON.stringify(completed));
}

function updateP2ScienceProgress() {
    const completed = getP2ScienceCompletion();
    const topics = Object.keys(p2ScienceLessons);
    const completedCount = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((completedCount / topics.length) * 100);

    document.getElementById("p2-science-progress-text").textContent = `${progress}%`;
    document.getElementById("p2-science-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p2-science-progress-message");
    if (progress === 0) {
        message.textContent = "Complete a lesson to earn your first P2 Science star!";
    } else if (progress < 100) {
        message.textContent = `${completedCount} of ${topics.length} adventures complete. Keep investigating!`;
    } else {
        message.textContent = "Amazing! You completed every P2 Science adventure! 🏆";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p2-science-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        const done = Boolean(completed[topic]);

        if (card) card.classList.toggle("completed", done);
        if (status) status.textContent = done ? "Completed ✓" : "Ready";
    });
}

function speakP2Science(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
}

function stopP2ScienceSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP2ScienceProgress);

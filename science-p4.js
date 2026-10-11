const p4ScienceLessons = {
    matter: {
        label: "Adventure 1",
        title: "Matter & Its States",
        icon: "🧊",
        description: "Compare solids, liquids and gases, and investigate mass and volume.",
        exampleIcon: "🧪",
        exampleTitle: "Matter detective",
        exampleText: "Find one solid, one liquid and one gas around you. Describe whether each has a fixed shape and fixed volume.",
        facts: [
            { icon: "⚖️📦", title: "What is matter?", text: "Matter has mass and occupies space. Solids, liquids and gases are all matter." },
            { icon: "🧊", title: "Solid", text: "A solid has a fixed shape and a fixed volume." },
            { icon: "💧", title: "Liquid", text: "A liquid has a fixed volume but takes the shape of its container." },
            { icon: "💨", title: "Gas", text: "A gas has no fixed shape and no fixed volume. It spreads out to fill available space." },
            { icon: "⚖️🥛", title: "Mass and volume", text: "Mass tells how much matter there is. Volume tells how much space matter occupies." }
        ],
        questions: [
            { text: "Which statement about matter is correct?", visual: "⚖️ 📦", answers: ["It must be visible", "It has mass and occupies space", "It must be solid"], correct: 1 },
            { text: "Which state of matter has a fixed shape and fixed volume?", visual: "🧊", answers: ["Liquid", "Gas", "Solid"], correct: 2 },
            { text: "Water poured into a cup changes shape but keeps the same amount. What state is it?", visual: "💧🥤", answers: ["Liquid", "Solid", "Gas"], correct: 0 },
            { text: "Which state spreads out to fill available space?", visual: "💨", answers: ["Solid", "Gas", "Liquid"], correct: 1 },
            { text: "Which tool is suitable for measuring the volume of a liquid?", visual: "🧪", answers: ["Clock", "Ruler", "Measuring cylinder"], correct: 2 }
        ]
    },

    systems: {
        label: "Adventure 2",
        title: "Plant & Human Systems",
        icon: "🌱",
        description: "Learn how parts of plant and human systems work together to perform important functions.",
        exampleIcon: "🧩",
        exampleTitle: "Parts working together",
        exampleText: "Choose a plant or the digestive system. Draw the main parts and add one function beside each part.",
        facts: [
            { icon: "🌿", title: "Plant parts", text: "Roots, stems and leaves are parts of a plant system. Each part has a different function." },
            { icon: "🌱💧", title: "Roots", text: "Roots anchor the plant and absorb water and mineral salts from the soil." },
            { icon: "🌿☀️", title: "Leaves and stems", text: "Leaves make food when there is light. The stem supports the plant and connects its parts." },
            { icon: "👄➡️🫃", title: "Digestive system", text: "Digestion begins in the mouth. Food then moves through the gullet to the stomach and intestines." },
            { icon: "🩸", title: "Absorption", text: "Digested food is absorbed mainly in the small intestine and enters the bloodstream." }
        ],
        questions: [
            { text: "Which plant part absorbs water and mineral salts from the soil?", visual: "🌱💧", answers: ["Flowers", "Roots", "Fruits"], correct: 1 },
            { text: "Which plant part supports the plant and connects roots to leaves?", visual: "🌿", answers: ["Seed", "Petal", "Stem"], correct: 2 },
            { text: "Where does digestion begin?", visual: "👄", answers: ["Mouth", "Large intestine", "Bloodstream"], correct: 0 },
            { text: "Which organ churns food and mixes it with digestive juices?", visual: "🫃", answers: ["Lungs", "Stomach", "Heart"], correct: 1 },
            { text: "Where is most digested food absorbed into the bloodstream?", visual: "🩸", answers: ["Gullet", "Mouth", "Small intestine"], correct: 2 }
        ]
    },

    light: {
        label: "Adventure 3",
        title: "Light & Shadows",
        icon: "💡",
        description: "Investigate light sources, reflected light, straight-line travel and shadow formation.",
        exampleIcon: "🔦",
        exampleTitle: "Shadow investigation",
        exampleText: "Shine a torch at an object in front of a wall. Move the object closer to and farther from the torch and observe the shadow size.",
        facts: [
            { icon: "☀️💡", title: "Light sources", text: "A light source produces its own light. The Sun and a lit bulb are light sources." },
            { icon: "📖✨👀", title: "Seeing objects", text: "We see many objects when light reflects from them and enters our eyes." },
            { icon: "➡️", title: "Light travels straight", text: "Light travels in straight lines." },
            { icon: "🔦🧸⬛", title: "Shadows", text: "A shadow forms when an object blocks some or all of the light travelling toward a surface." },
            { icon: "🌙", title: "The Moon", text: "The Moon is not a light source. We see it because it reflects light from the Sun." }
        ],
        questions: [
            { text: "Which object produces its own light?", visual: "☀️ 🌙 📖", answers: ["Moon", "Sun", "Book"], correct: 1 },
            { text: "Why can we see a book in a bright room?", visual: "💡📖👀", answers: ["The book makes its own light", "Sound enters our eyes", "Light reflects from the book into our eyes"], correct: 2 },
            { text: "How does light travel?", visual: "➡️", answers: ["In straight lines", "Only in circles", "Only downward"], correct: 0 },
            { text: "What causes a shadow?", visual: "🔦🧸⬛", answers: ["An object makes extra light", "An object blocks light", "Sound becomes dark"], correct: 1 },
            { text: "Which statement about the Moon is correct?", visual: "🌙☀️", answers: ["It produces sunlight", "It cannot be seen at night", "It reflects sunlight"], correct: 2 }
        ]
    },

    heat: {
        label: "Adventure 4",
        title: "Heat & Temperature",
        icon: "🌡️",
        description: "Explore temperature, heat flow, conductors and the effects of gaining or losing heat.",
        exampleIcon: "🥄",
        exampleTitle: "Compare materials",
        exampleText: "Place a metal spoon and a plastic spoon in warm water with adult supervision. Compare which material transfers heat more readily.",
        facts: [
            { icon: "🌡️", title: "Temperature", text: "Temperature tells us how hot or cold an object is. It can be measured in degrees Celsius." },
            { icon: "🔥➡️❄️", title: "Heat flow", text: "Heat flows from a hotter object or region to a colder object or region." },
            { icon: "⬆️🌡️", title: "Gaining heat", text: "When an object gains heat, its temperature usually rises." },
            { icon: "⬇️🌡️", title: "Losing heat", text: "When an object loses heat, its temperature usually falls." },
            { icon: "🥄🪵", title: "Conductors", text: "Some materials transfer heat more readily than others. Metals are generally good conductors of heat." },
            { icon: "🧊➡️💧", title: "Effects of heat", text: "Gaining or losing heat can cause changes such as melting, freezing, expansion or contraction." }
        ],
        questions: [
            { text: "Which instrument measures temperature?", visual: "🌡️", answers: ["Ruler", "Thermometer", "Balance"], correct: 1 },
            { text: "Heat naturally flows from...", visual: "🔥 ➡️ ❄️", answers: ["small to large", "colder to hotter", "hotter to colder"], correct: 2 },
            { text: "What usually happens when an object gains heat?", visual: "⬆️🌡️", answers: ["Its temperature rises", "Its mass always doubles", "It becomes magnetic"], correct: 0 },
            { text: "Which material is generally a good conductor of heat?", visual: "🥄", answers: ["Wood", "Metal", "Air"], correct: 1 },
            { text: "Ice gains enough heat and changes into liquid water. What change happened?", visual: "🧊 ➡️ 💧", answers: ["Freezing", "Contracting", "Melting"], correct: 2 }
        ]
    }
};

let currentP4ScienceTopic = null;
let currentP4ScienceQuestion = 0;
let currentP4ScienceScore = 0;
let p4ScienceAnswered = false;

function openP4ScienceLesson(topic) {
    const lesson = p4ScienceLessons[topic];
    if (!lesson) return;

    currentP4ScienceTopic = topic;
    currentP4ScienceQuestion = 0;
    currentP4ScienceScore = 0;
    p4ScienceAnswered = false;

    document.getElementById("p4-science-dashboard").hidden = true;
    document.getElementById("p4-science-lesson").hidden = false;
    document.getElementById("p4-science-learn-stage").hidden = false;
    document.getElementById("p4-science-quiz-stage").hidden = true;
    document.getElementById("p4-science-finish-stage").hidden = true;

    ["icon", "label", "title", "description"].forEach((key) => {
        document.getElementById(`p4-science-lesson-${key}`).textContent = lesson[key];
    });

    document.getElementById("p4-science-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p4-science-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p4-science-example-text").textContent = lesson.exampleText;

    const grid = document.getElementById("p4-science-fact-grid");
    grid.innerHTML = "";
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
        button.onclick = () => speakP4Science(`${fact.title}. ${fact.text}`);
        grid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP4ScienceLesson() {
    stopP4ScienceSpeech();
    document.getElementById("p4-science-lesson").hidden = true;
    document.getElementById("p4-science-dashboard").hidden = false;
    updateP4ScienceProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP4ScienceQuiz() {
    currentP4ScienceQuestion = 0;
    currentP4ScienceScore = 0;
    p4ScienceAnswered = false;
    document.getElementById("p4-science-learn-stage").hidden = true;
    document.getElementById("p4-science-finish-stage").hidden = true;
    document.getElementById("p4-science-quiz-stage").hidden = false;
    showP4ScienceQuestion();
}

function showP4ScienceQuestion() {
    const lesson = p4ScienceLessons[currentP4ScienceTopic];
    const question = lesson.questions[currentP4ScienceQuestion];
    const total = lesson.questions.length;
    p4ScienceAnswered = false;

    document.getElementById("p4-science-question-number").textContent = currentP4ScienceQuestion + 1;
    document.getElementById("p4-science-question-total").textContent = total;
    document.getElementById("p4-science-question-text").textContent = question.text;
    document.getElementById("p4-science-question-visual").textContent = question.visual;
    document.getElementById("p4-science-live-score").textContent = currentP4ScienceScore;
    document.getElementById("p4-science-quiz-progress").style.width = `${((currentP4ScienceQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("p4-science-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const grid = document.getElementById("p4-science-answer-grid");
    grid.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.onclick = () => checkP4ScienceAnswer(index, button);
        grid.appendChild(button);
    });
}

function checkP4ScienceAnswer(index, button) {
    if (p4ScienceAnswered) return;
    p4ScienceAnswered = true;

    const question = p4ScienceLessons[currentP4ScienceTopic].questions[currentP4ScienceQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p4-science-feedback");

    buttons.forEach((item) => { item.disabled = true; });
    buttons[question.correct].classList.add("correct");

    if (index === question.correct) {
        currentP4ScienceScore += 1;
        button.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent science reasoning!";
        feedback.classList.add("good");
    } else {
        button.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p4-science-live-score").textContent = currentP4ScienceScore;

    setTimeout(() => {
        currentP4ScienceQuestion += 1;
        if (currentP4ScienceQuestion < p4ScienceLessons[currentP4ScienceTopic].questions.length) {
            showP4ScienceQuestion();
        } else {
            finishP4ScienceLesson();
        }
    }, 1300);
}

function finishP4ScienceLesson() {
    const total = p4ScienceLessons[currentP4ScienceTopic].questions.length;
    document.getElementById("p4-science-quiz-stage").hidden = true;
    document.getElementById("p4-science-finish-stage").hidden = false;
    document.getElementById("p4-science-final-score").textContent = `${currentP4ScienceScore} / ${total}`;

    const message = document.getElementById("p4-science-finish-message");
    if (currentP4ScienceScore === total) {
        message.textContent = "Perfect score! You are a super P4 scientist! 🔬✨";
    } else if (currentP4ScienceScore >= 3) {
        message.textContent = "Great job! Your science reasoning is getting stronger! 🌟";
    } else {
        message.textContent = "Nice investigating! Review the facts and try again. 🔎";
    }

    saveP4ScienceCompletion(currentP4ScienceTopic);
    updateP4ScienceProgress();
}

function restartP4ScienceLesson() {
    startP4ScienceQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP4ScienceCompletion() {
    try {
        return JSON.parse(localStorage.getItem("scienceP4Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP4ScienceCompletion(topic) {
    const completed = getP4ScienceCompletion();
    completed[topic] = true;
    localStorage.setItem("scienceP4Completed", JSON.stringify(completed));
}

function updateP4ScienceProgress() {
    const completed = getP4ScienceCompletion();
    const topics = Object.keys(p4ScienceLessons);
    const finished = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((finished / topics.length) * 100);

    document.getElementById("p4-science-progress-text").textContent = `${progress}%`;
    document.getElementById("p4-science-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p4-science-progress-message");
    if (progress === 0) {
        message.textContent = "Complete a lesson to earn your first P4 Science star!";
    } else if (progress < 100) {
        message.textContent = `${finished} of ${topics.length} adventures complete. Keep investigating!`;
    } else {
        message.textContent = "Amazing! You completed every P4 Science adventure! 🏆";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p4-science-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        const done = Boolean(completed[topic]);
        if (card) card.classList.toggle("completed", done);
        if (status) status.textContent = done ? "Completed ✓" : "Ready";
    });
}

function speakP4Science(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    speechSynthesis.speak(utterance);
}

function stopP4ScienceSpeech() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
}

document.addEventListener("DOMContentLoaded", updateP4ScienceProgress);

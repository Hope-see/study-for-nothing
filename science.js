/* =========================================
   P1 SCIENCE
   Four beginner lessons + quizzes + progress
========================================= */

const scienceLessons = {
    living: {
        label: "Adventure 1",
        title: "Living Things",
        icon: "🌱",
        description: "Discover how living things grow, need resources and change.",
        facts: [
            { icon: "🐶", title: "Living things grow", text: "A puppy grows into an adult dog." },
            { icon: "💧", title: "Living things need water", text: "Animals and plants need water to stay alive." },
            { icon: "🍎", title: "Living things need energy", text: "Animals eat food. Plants use sunlight to make food." },
            { icon: "🌻", title: "Living things can reproduce", text: "Living things can make new living things of the same kind." }
        ],
        questions: [
            { text: "Which one is a living thing?", visual: "🌳 🪨 🪑", answers: ["🌳 Tree", "🪨 Rock", "🪑 Chair"], correct: 0 },
            { text: "What does a living thing need?", visual: "🐰 💧", answers: ["Paint", "Water", "A toy"], correct: 1 },
            { text: "Which one can grow by itself?", visual: "🐶 ⚽ 🥄", answers: ["Ball", "Spoon", "Puppy"], correct: 2 },
            { text: "Which one can make new living things?", visual: "🌼 📏 🧱", answers: ["Flower", "Ruler", "Brick"], correct: 0 },
            { text: "Which sentence is true?", visual: "🌱", answers: ["Plants are not living", "Plants are living things", "Plants never grow"], correct: 1 }
        ]
    },
    senses: {
        label: "Adventure 2",
        title: "Five Senses",
        icon: "👀",
        description: "Use your body to collect information about the world.",
        facts: [
            { icon: "👀", title: "Eyes help us see", text: "We use sight to notice colour, shape, size and movement." },
            { icon: "👂", title: "Ears help us hear", text: "We use hearing to notice loud, soft, high and low sounds." },
            { icon: "👃", title: "Nose helps us smell", text: "We can notice sweet, strong and other smells with our nose." },
            { icon: "👅 ✋", title: "Tongue & skin", text: "Our tongue helps us taste. Our skin helps us feel touch." }
        ],
        questions: [
            { text: "Which body part helps you see a rainbow?", visual: "🌈", answers: ["Eyes", "Ears", "Nose"], correct: 0 },
            { text: "Which sense helps you hear a bell?", visual: "🔔", answers: ["Smell", "Hearing", "Taste"], correct: 1 },
            { text: "What helps you smell a flower?", visual: "🌸", answers: ["Nose", "Hands", "Feet"], correct: 0 },
            { text: "Which body part helps you taste an orange?", visual: "🍊", answers: ["Ear", "Tongue", "Elbow"], correct: 1 },
            { text: "Which sense tells you an ice cube feels cold?", visual: "🧊 ✋", answers: ["Touch", "Sight", "Hearing"], correct: 0 }
        ]
    },
    habitats: {
        label: "Adventure 3",
        title: "Animals & Habitats",
        icon: "🐾",
        description: "Explore the places animals live and how those places meet their needs.",
        facts: [
            { icon: "🐠 🌊", title: "Fish live in water", text: "Fish have body parts that help them live and move in water." },
            { icon: "🐪 🏜️", title: "Camels can live in deserts", text: "Camels are suited to hot, dry places." },
            { icon: "🐻‍❄️ ❄️", title: "Polar bears live in cold places", text: "Thick fur and body fat help them stay warm." },
            { icon: "🏠", title: "A habitat is a home", text: "A habitat gives an animal food, water, shelter and space." }
        ],
        questions: [
            { text: "Where does a fish live?", visual: "🐠", answers: ["Water", "Desert", "Tree branch"], correct: 0 },
            { text: "Which animal is well suited to a desert?", visual: "🏜️", answers: ["Camel", "Penguin", "Goldfish"], correct: 0 },
            { text: "Which animal can live in a very cold habitat?", visual: "❄️", answers: ["Polar bear", "Camel", "Lizard"], correct: 0 },
            { text: "What does a habitat provide?", visual: "🏡 🐿️", answers: ["Food, water and shelter", "Only toys", "Only sunshine"], correct: 0 },
            { text: "Which place is a good habitat for a frog?", visual: "🐸", answers: ["Near a pond", "Inside a freezer", "On the Moon"], correct: 0 }
        ]
    },
    plants: {
        label: "Adventure 4",
        title: "Plants",
        icon: "🌻",
        description: "Meet the main parts of a plant and learn what each part does.",
        facts: [
            { icon: "🌱", title: "Roots", text: "Roots hold a plant in the soil and take in water." },
            { icon: "🌿", title: "Stem", text: "The stem supports the plant and carries water to other parts." },
            { icon: "🍃 ☀️", title: "Leaves", text: "Leaves use light to help the plant make food." },
            { icon: "🌼 🌰", title: "Flowers & seeds", text: "Flowers can help plants make seeds. Seeds can grow into new plants." }
        ],
        questions: [
            { text: "Which plant part takes in water from the soil?", visual: "🌱 💧", answers: ["Roots", "Flower", "Leaf"], correct: 0 },
            { text: "Which part helps hold the plant up?", visual: "🌻", answers: ["Stem", "Seed", "Petal"], correct: 0 },
            { text: "Which plant part uses sunlight to help make food?", visual: "☀️ 🍃", answers: ["Leaf", "Root", "Seed"], correct: 0 },
            { text: "What can grow into a new plant?", visual: "🌰 ➜ 🌱", answers: ["Seed", "Stone", "Spoon"], correct: 0 },
            { text: "Which list contains plant parts?", visual: "🌻", answers: ["Root, stem, leaf", "Wheel, door, window", "Fin, wing, paw"], correct: 0 }
        ]
    }
};

let currentScienceTopic = null;
let currentScienceQuestion = 0;
let currentScienceScore = 0;
let scienceAnswered = false;

function openScienceLesson(topic) {
    const lesson = scienceLessons[topic];
    if (!lesson) return;

    currentScienceTopic = topic;
    currentScienceQuestion = 0;
    currentScienceScore = 0;
    scienceAnswered = false;

    document.getElementById("science-dashboard").hidden = true;
    document.getElementById("science-lesson").hidden = false;
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
        button.addEventListener("click", () => speakScience(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeScienceLesson() {
    stopScienceSpeech();
    document.getElementById("science-lesson").hidden = true;
    document.getElementById("science-dashboard").hidden = false;
    updateScienceProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startScienceQuiz() {
    currentScienceQuestion = 0;
    currentScienceScore = 0;
    scienceAnswered = false;

    document.getElementById("learn-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("quiz-stage").hidden = false;
    showScienceQuestion();
}

function showScienceQuestion() {
    const lesson = scienceLessons[currentScienceTopic];
    const question = lesson.questions[currentScienceQuestion];
    const total = lesson.questions.length;

    scienceAnswered = false;
    document.getElementById("science-question-number").textContent = currentScienceQuestion + 1;
    document.getElementById("science-question-total").textContent = total;
    document.getElementById("science-question-text").textContent = question.text;
    document.getElementById("science-question-visual").textContent = question.visual;
    document.getElementById("science-live-score").textContent = currentScienceScore;
    document.getElementById("science-quiz-progress").style.width = `${((currentScienceQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("science-feedback");
    feedback.textContent = "";
    feedback.className = "science-feedback";

    const answerGrid = document.getElementById("science-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "science-answer";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", () => checkScienceAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkScienceAnswer(selectedIndex, selectedButton) {
    if (scienceAnswered) return;
    scienceAnswered = true;

    const lesson = scienceLessons[currentScienceTopic];
    const question = lesson.questions[currentScienceQuestion];
    const buttons = [...document.querySelectorAll(".science-answer")];
    const feedback = document.getElementById("science-feedback");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentScienceScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Great observing!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("science-live-score").textContent = currentScienceScore;

    window.setTimeout(() => {
        currentScienceQuestion += 1;
        if (currentScienceQuestion < lesson.questions.length) {
            showScienceQuestion();
        } else {
            finishScienceLesson();
        }
    }, 1300);
}

function finishScienceLesson() {
    const lesson = scienceLessons[currentScienceTopic];
    const total = lesson.questions.length;

    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = false;
    document.getElementById("science-final-score").textContent = `${currentScienceScore} / ${total}`;

    let message = "You finished the adventure and learned something new!";
    if (currentScienceScore === total) {
        message = "Perfect score! You are a super scientist! 🧪✨";
    } else if (currentScienceScore >= 3) {
        message = "Great job! Your science skills are growing! 🌱";
    } else {
        message = "Nice exploring! Try again and see if you can discover even more. 🔎";
    }
    document.getElementById("science-finish-message").textContent = message;

    saveScienceCompletion(currentScienceTopic);
    updateScienceProgress();
}

function restartScienceLesson() {
    startScienceQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getScienceCompletion() {
    try {
        return JSON.parse(localStorage.getItem("scienceP1Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveScienceCompletion(topic) {
    const completed = getScienceCompletion();
    completed[topic] = true;
    localStorage.setItem("scienceP1Completed", JSON.stringify(completed));
}

function updateScienceProgress() {
    const completed = getScienceCompletion();
    const topics = Object.keys(scienceLessons);
    const done = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((done / topics.length) * 100);

    document.getElementById("science-progress-text").textContent = `${progress}%`;
    document.getElementById("science-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("science-progress-message");
    if (progress === 100) {
        message.textContent = "Amazing! You completed every P1 Science adventure! 🏆";
    } else if (progress > 0) {
        message.textContent = `${done} of ${topics.length} adventures completed. Keep exploring!`;
    } else {
        message.textContent = "Complete a lesson to earn your first science star!";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.science-card[data-topic="${topic}"]`);
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

function speakScience(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
}

function stopScienceSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateScienceProgress);

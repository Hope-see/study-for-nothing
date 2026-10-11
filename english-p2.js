/* =========================================
   P2 ENGLISH
   Four lessons + quizzes + saved progress
========================================= */

const p2EnglishLessons = {
    sounds: {
        label: "Adventure 1",
        title: "Blends & Digraphs",
        icon: "🔤",
        description: "Read common sound groups and use them to decode words.",
        exampleIcon: "👂",
        exampleTitle: "Sound detective",
        exampleText: "Say ship slowly. The letters s and h work together to make one sound: sh.",
        facts: [
            { icon: "🚢 sh", title: "sh", text: "The letters s and h can make the sh sound, as in ship and fish." },
            { icon: "🪑 ch", title: "ch", text: "The letters c and h can make the ch sound, as in chair and lunch." },
            { icon: "👍 th", title: "th", text: "The letters t and h can work together in words such as this and three." },
            { icon: "🧱 br / ⭐ st", title: "Blends", text: "In a blend, we can hear both sounds, as in brown, brick, star and stop." }
        ],
        questions: [
            { text: "Which word begins with the sh sound?", visual: "🐟 🚢", answers: ["ship", "chip", "tip"], correct: 0 },
            { text: "Which word begins with the ch sound?", visual: "🪑", answers: ["chair", "share", "fair"], correct: 0 },
            { text: "Which word starts with the blend br?", visual: "🧱", answers: ["brick", "stick", "ship"], correct: 0 },
            { text: "Which word starts with the blend st?", visual: "⭐", answers: ["star", "car", "jar"], correct: 0 },
            { text: "Which letters work together at the start of 'three'?", visual: "3️⃣", answers: ["th", "sh", "ch"], correct: 0 }
        ]
    },
    grammar: {
        label: "Adventure 2",
        title: "Nouns & Verbs",
        icon: "🧩",
        description: "Find naming words and action words in simple sentences.",
        exampleIcon: "🐶🏃",
        exampleTitle: "Look at the sentence",
        exampleText: "The dog runs. 'Dog' is a noun because it names an animal. 'Runs' is a verb because it shows an action.",
        facts: [
            { icon: "👧 🏫 🐱", title: "Nouns name things", text: "A noun can name a person, place, animal or thing." },
            { icon: "🏃 🍽️ ✍️", title: "Verbs show actions", text: "A verb can tell what someone or something does, such as run, eat or write." },
            { icon: "🐦 flies", title: "Noun + verb", text: "Many simple sentences have a noun and a verb. For example: The bird flies." },
            { icon: "👦 kicks ⚽", title: "Find the action", text: "Ask: What is happening? The action word is often the verb." }
        ],
        questions: [
            { text: "Which word is a noun?", visual: "The cat sleeps.", answers: ["cat", "sleeps", "the"], correct: 0 },
            { text: "Which word is the verb?", visual: "Mia jumps.", answers: ["jumps", "Mia", "the"], correct: 0 },
            { text: "Which word names a place?", visual: "🏫", answers: ["school", "runs", "happy"], correct: 0 },
            { text: "Which word is an action word?", visual: "🍎", answers: ["eats", "apple", "red"], correct: 0 },
            { text: "In 'The bird sings', what is the noun?", visual: "🐦 🎵", answers: ["bird", "sings", "the"], correct: 0 }
        ]
    },
    sentences: {
        label: "Adventure 3",
        title: "Better Sentences",
        icon: "✏️",
        description: "Use describing words, capitals and punctuation to make clearer sentences.",
        exampleIcon: "🌟",
        exampleTitle: "Make it better",
        exampleText: "Instead of 'The dog runs', try 'The small brown dog runs quickly.' Describing words add useful detail.",
        facts: [
            { icon: "🔠", title: "Start with a capital", text: "A sentence begins with a capital letter. Names also begin with capital letters." },
            { icon: ". ? !", title: "End punctuation", text: "Use a full stop for a statement, a question mark for a question, and an exclamation mark for strong feeling." },
            { icon: "🌈 big blue", title: "Adjectives describe", text: "Adjectives tell us more about a noun, such as big, blue, soft or noisy." },
            { icon: "🧒 + 🏃", title: "Complete thought", text: "A good sentence tells a complete idea so the reader understands what is happening." }
        ],
        questions: [
            { text: "Which sentence starts correctly?", visual: "🔠", answers: ["The cat is small.", "the cat is small.", "the Cat is small."], correct: 0 },
            { text: "Which punctuation should end a question?", visual: "Where is my bag", answers: ["?", ".", "!"], correct: 0 },
            { text: "Which word is an adjective?", visual: "The fluffy rabbit hops.", answers: ["fluffy", "rabbit", "hops"], correct: 0 },
            { text: "Which sentence is complete?", visual: "✏️", answers: ["The boy kicks the ball.", "The boy", "Kicks the"], correct: 0 },
            { text: "Which sentence uses an adjective to add detail?", visual: "🐘", answers: ["The huge elephant walks.", "The elephant walks.", "Elephant."], correct: 0 }
        ]
    },
    reading: {
        label: "Adventure 4",
        title: "Reading Comprehension",
        icon: "📖",
        description: "Read a short passage and answer questions using clues from the text.",
        exampleIcon: "📚",
        exampleTitle: "Read this story",
        exampleText: "Ava has a small red kite. On Saturday morning, she goes to the park with her brother Ben. The wind is strong, so the kite flies high above the trees. Ben holds the string while Ava runs across the grass. After playing, they drink water and walk home happily.",
        facts: [
            { icon: "👀", title: "Read carefully", text: "Read the whole passage once before answering the questions." },
            { icon: "🔎", title: "Find key details", text: "Look for names, places, times and actions in the passage." },
            { icon: "🧠", title: "Use clues", text: "Some answers are not said in exactly the same words, so use clues to work them out." },
            { icon: "✅", title: "Check your answer", text: "Go back to the passage and make sure your answer matches the story." }
        ],
        questions: [
            { text: "What colour is Ava's kite?", visual: "🪁", answers: ["Red", "Blue", "Green"], correct: 0 },
            { text: "Where do Ava and Ben go?", visual: "🌳", answers: ["The park", "The library", "The beach"], correct: 0 },
            { text: "Why does the kite fly high?", visual: "💨 🪁", answers: ["The wind is strong", "It is raining", "Ben throws it"], correct: 0 },
            { text: "Who holds the string?", visual: "🧵", answers: ["Ben", "Ava", "Their teacher"], correct: 0 },
            { text: "What do they do after playing?", visual: "🥤 🚶", answers: ["Drink water and walk home", "Buy a new kite", "Go swimming"], correct: 0 }
        ]
    }
};

let currentP2EnglishTopic = null;
let currentP2EnglishQuestion = 0;
let currentP2EnglishScore = 0;
let p2EnglishAnswered = false;

function openP2EnglishLesson(topic) {
    const lesson = p2EnglishLessons[topic];
    if (!lesson) return;

    currentP2EnglishTopic = topic;
    currentP2EnglishQuestion = 0;
    currentP2EnglishScore = 0;
    p2EnglishAnswered = false;

    document.getElementById("p2-english-dashboard").hidden = true;
    document.getElementById("p2-english-lesson").hidden = false;
    document.getElementById("p2-english-learn-stage").hidden = false;
    document.getElementById("p2-english-quiz-stage").hidden = true;
    document.getElementById("p2-english-finish-stage").hidden = true;

    document.getElementById("p2-english-lesson-icon").textContent = lesson.icon;
    document.getElementById("p2-english-lesson-label").textContent = lesson.label;
    document.getElementById("p2-english-lesson-title").textContent = lesson.title;
    document.getElementById("p2-english-lesson-description").textContent = lesson.description;
    document.getElementById("p2-english-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p2-english-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p2-english-example-text").textContent = lesson.exampleText;

    const factGrid = document.getElementById("p2-english-fact-grid");
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
        button.addEventListener("click", () => speakP2English(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP2EnglishLesson() {
    stopP2EnglishSpeech();
    document.getElementById("p2-english-lesson").hidden = true;
    document.getElementById("p2-english-dashboard").hidden = false;
    updateP2EnglishProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP2EnglishQuiz() {
    currentP2EnglishQuestion = 0;
    currentP2EnglishScore = 0;
    p2EnglishAnswered = false;

    document.getElementById("p2-english-learn-stage").hidden = true;
    document.getElementById("p2-english-finish-stage").hidden = true;
    document.getElementById("p2-english-quiz-stage").hidden = false;
    showP2EnglishQuestion();
}

function showP2EnglishQuestion() {
    const lesson = p2EnglishLessons[currentP2EnglishTopic];
    const question = lesson.questions[currentP2EnglishQuestion];
    const total = lesson.questions.length;

    p2EnglishAnswered = false;
    document.getElementById("p2-english-question-number").textContent = currentP2EnglishQuestion + 1;
    document.getElementById("p2-english-question-total").textContent = total;
    document.getElementById("p2-english-question-text").textContent = question.text;
    document.getElementById("p2-english-question-visual").textContent = question.visual;
    document.getElementById("p2-english-live-score").textContent = currentP2EnglishScore;
    document.getElementById("p2-english-quiz-progress").style.width = `${((currentP2EnglishQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("p2-english-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p2-english-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP2EnglishAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP2EnglishAnswer(selectedIndex, selectedButton) {
    if (p2EnglishAnswered) return;
    p2EnglishAnswered = true;

    const lesson = p2EnglishLessons[currentP2EnglishTopic];
    const question = lesson.questions[currentP2EnglishQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p2-english-feedback");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP2EnglishScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent reading!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p2-english-live-score").textContent = currentP2EnglishScore;

    window.setTimeout(() => {
        currentP2EnglishQuestion += 1;
        if (currentP2EnglishQuestion < lesson.questions.length) {
            showP2EnglishQuestion();
        } else {
            finishP2EnglishLesson();
        }
    }, 1300);
}

function finishP2EnglishLesson() {
    const lesson = p2EnglishLessons[currentP2EnglishTopic];
    const total = lesson.questions.length;

    document.getElementById("p2-english-quiz-stage").hidden = true;
    document.getElementById("p2-english-finish-stage").hidden = false;
    document.getElementById("p2-english-final-score").textContent = `${currentP2EnglishScore} / ${total}`;

    let message = "You finished the English adventure and learned something new!";
    if (currentP2EnglishScore === total) {
        message = "Perfect score! You are a super reader! 📚✨";
    } else if (currentP2EnglishScore >= 3) {
        message = "Great job! Your English skills are growing! 🌟";
    } else {
        message = "Nice work! Try again and use the examples to help you. 💪";
    }
    document.getElementById("p2-english-finish-message").textContent = message;

    saveP2EnglishCompletion(currentP2EnglishTopic);
    updateP2EnglishProgress();
}

function restartP2EnglishLesson() {
    startP2EnglishQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP2EnglishCompletion() {
    try {
        return JSON.parse(localStorage.getItem("englishP2Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP2EnglishCompletion(topic) {
    const completed = getP2EnglishCompletion();
    completed[topic] = true;
    localStorage.setItem("englishP2Completed", JSON.stringify(completed));
}

function updateP2EnglishProgress() {
    const completed = getP2EnglishCompletion();
    const topics = Object.keys(p2EnglishLessons);
    const completedCount = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((completedCount / topics.length) * 100);

    document.getElementById("p2-english-progress-text").textContent = `${progress}%`;
    document.getElementById("p2-english-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p2-english-progress-message");
    if (progress === 0) {
        message.textContent = "Complete a lesson to earn your first P2 English star!";
    } else if (progress < 100) {
        message.textContent = `${completedCount} of ${topics.length} adventures complete. Keep reading!`;
    } else {
        message.textContent = "Amazing! You completed every P2 English adventure! 🏆";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p2-english-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        const done = Boolean(completed[topic]);

        if (card) card.classList.toggle("completed", done);
        if (status) status.textContent = done ? "Completed ✓" : "Ready";
    });
}

function speakP2English(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.86;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
}

function stopP2EnglishSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP2EnglishProgress);

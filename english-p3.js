/* =========================================
   P3 ENGLISH
   Four lessons + quizzes + saved progress
========================================= */

const p3EnglishLessons = {
    grammar: {
        label: "Adventure 1",
        title: "Grammar & Tenses",
        icon: "⏰",
        description: "Use verbs, pronouns and tenses to make grammatically correct sentences.",
        exampleIcon: "🕒",
        exampleTitle: "Past or present?",
        exampleText: "Today I walk to school. Yesterday I walked to school. The verb changes to show when the action happens.",
        facts: [
            { icon: "☀️", title: "Present tense", text: "Use the present tense for actions happening now or regularly: I play. She plays." },
            { icon: "🕰️", title: "Past tense", text: "Use the past tense for actions that already happened: jump becomes jumped, and go becomes went." },
            { icon: "👧➡️ she", title: "Pronouns", text: "Pronouns replace nouns. We can use he, she, it, they, we and you instead of repeating names." },
            { icon: "🐶 barks", title: "Subject and verb", text: "A singular subject often uses a verb ending in s in the simple present: The dog barks." }
        ],
        questions: [
            { text: "Choose the correct word: Yesterday, Amir ___ to the library.", visual: "📚 🕰️", answers: ["went", "goes", "going"], correct: 0 },
            { text: "Which sentence is correct?", visual: "🐱", answers: ["The cat sleeps on the mat.", "The cat sleep on the mat.", "The cat sleeping on the mat."], correct: 0 },
            { text: "Which pronoun can replace 'Maya and Ben'?", visual: "👧 👦", answers: ["They", "She", "It"], correct: 0 },
            { text: "Which word shows an action that happened in the past?", visual: "⚽", answers: ["kicked", "kick", "kicks"], correct: 0 },
            { text: "Choose the correct word: My brother ___ his teeth every morning.", visual: "🪥", answers: ["brushes", "brush", "brushed yesterday"], correct: 0 }
        ]
    },

    vocabulary: {
        label: "Adventure 2",
        title: "Vocabulary & Word Power",
        icon: "🧠",
        description: "Understand word relationships and use clues to work out unfamiliar words.",
        exampleIcon: "🔍",
        exampleTitle: "Use context clues",
        exampleText: "The puppy was exhausted after running around the park, so it lay down to rest. The clue 'lay down to rest' helps us know exhausted means very tired.",
        facts: [
            { icon: "😊 = glad", title: "Synonyms", text: "Synonyms are words with similar meanings, such as happy and glad." },
            { icon: "⬆️ ↔️ ⬇️", title: "Antonyms", text: "Antonyms have opposite meanings, such as high and low or noisy and quiet." },
            { icon: "un + happy", title: "Prefixes", text: "A prefix is added to the beginning of a word. The prefix un- can mean not: unhappy means not happy." },
            { icon: "🧩", title: "Context clues", text: "Words around an unfamiliar word can give clues about its meaning." }
        ],
        questions: [
            { text: "Which word is a synonym for 'large'?", visual: "🐘", answers: ["huge", "tiny", "short"], correct: 0 },
            { text: "Which word is an antonym for 'empty'?", visual: "🥛", answers: ["full", "open", "quiet"], correct: 0 },
            { text: "What does 'unfair' most likely mean?", visual: "⚖️", answers: ["not fair", "very fair", "fair again"], correct: 0 },
            { text: "The path was narrow, so only one person could walk on it at a time. What does 'narrow' mean?", visual: "🥾", answers: ["not wide", "very long", "very smooth"], correct: 0 },
            { text: "Which word best replaces 'said loudly'?", visual: "📣", answers: ["shouted", "whispered", "thought"], correct: 0 }
        ]
    },

    writing: {
        label: "Adventure 3",
        title: "Sentences & Connectors",
        icon: "✍️",
        description: "Connect ideas and add useful details to make sentences clearer and stronger.",
        exampleIcon: "🔗",
        exampleTitle: "Join two ideas",
        exampleText: "I took an umbrella because the sky was dark. The connector 'because' explains the reason.",
        facts: [
            { icon: "➕ and", title: "and", text: "Use and to add another similar idea: Mina packed a sandwich and a bottle of water." },
            { icon: "↔️ but", title: "but", text: "Use but to show a contrast: The bag is small, but it is heavy." },
            { icon: "❓ because", title: "because", text: "Use because to give a reason: I stayed inside because it was raining." },
            { icon: "➡️ so", title: "so", text: "Use so to show a result: The bus was late, so we waited longer." }
        ],
        questions: [
            { text: "Choose the best connector: I wore a raincoat ___ it was raining.", visual: "🌧️ 🧥", answers: ["because", "but", "and"], correct: 0 },
            { text: "Choose the best connector: Leo was tired, ___ he finished his homework.", visual: "😴 ✏️", answers: ["but", "because", "so"], correct: 0 },
            { text: "Which sentence gives the clearest detail?", visual: "🐕", answers: ["The small brown dog ran quickly across the field.", "The dog ran.", "Dog field run."], correct: 0 },
            { text: "Choose the best connector: The room was dark, ___ I switched on the lamp.", visual: "💡", answers: ["so", "because", "and"], correct: 0 },
            { text: "Which sentence has correct punctuation?", visual: "❗", answers: ["Wow, that rainbow is beautiful!", "wow that rainbow is beautiful", "Wow that rainbow is beautiful."], correct: 0 }
        ]
    },

    reading: {
        label: "Adventure 4",
        title: "Reading Comprehension",
        icon: "🔎",
        description: "Read for details, understand vocabulary in context and make simple inferences.",
        exampleIcon: "🌱",
        exampleTitle: "Read this passage",
        exampleText: "On Saturday morning, Hana and her brother Zane visited the community garden. They noticed that the tomato plants were drooping because the soil was dry. Hana filled a watering can while Zane gently pulled out the weeds. After they watered the plants, the leaves slowly lifted. Before going home, they wrote a small sign asking visitors to save water and use only what the plants needed.",
        facts: [
            { icon: "📌", title: "Find details", text: "Look for who, what, where, when and why in the passage." },
            { icon: "💭", title: "Make an inference", text: "Combine clues from the text with what you already know to work out an answer that is not directly stated." },
            { icon: "🔍", title: "Use context", text: "Read the words around an unfamiliar word to work out what it probably means." },
            { icon: "✅", title: "Check the text", text: "Before answering, return to the passage and make sure the evidence supports your choice." }
        ],
        questions: [
            { text: "Why were the tomato plants drooping?", visual: "🍅 💧", answers: ["The soil was dry.", "The garden was too cold.", "There were too many tomatoes."], correct: 0 },
            { text: "What did Zane do in the garden?", visual: "🌿", answers: ["He pulled out weeds.", "He painted a sign.", "He picked all the tomatoes."], correct: 0 },
            { text: "What does 'gently' tell us about how Zane pulled the weeds?", visual: "🤲", answers: ["Carefully and softly", "Very loudly", "As quickly as possible"], correct: 0 },
            { text: "What can we infer about Hana and Zane?", visual: "🌱 ❤️", answers: ["They care about the garden.", "They dislike plants.", "They want to waste water."], correct: 0 },
            { text: "Why did they make the sign?", visual: "🪧 💧", answers: ["To remind visitors not to waste water.", "To tell visitors to take the plants home.", "To close the garden."], correct: 0 }
        ]
    }
};

let currentP3EnglishTopic = null;
let currentP3EnglishQuestion = 0;
let currentP3EnglishScore = 0;
let p3EnglishAnswered = false;

function openP3EnglishLesson(topic) {
    const lesson = p3EnglishLessons[topic];
    if (!lesson) return;

    currentP3EnglishTopic = topic;
    currentP3EnglishQuestion = 0;
    currentP3EnglishScore = 0;
    p3EnglishAnswered = false;

    document.getElementById("p3-english-dashboard").hidden = true;
    document.getElementById("p3-english-lesson").hidden = false;
    document.getElementById("p3-english-learn-stage").hidden = false;
    document.getElementById("p3-english-quiz-stage").hidden = true;
    document.getElementById("p3-english-finish-stage").hidden = true;

    document.getElementById("p3-english-lesson-icon").textContent = lesson.icon;
    document.getElementById("p3-english-lesson-label").textContent = lesson.label;
    document.getElementById("p3-english-lesson-title").textContent = lesson.title;
    document.getElementById("p3-english-lesson-description").textContent = lesson.description;
    document.getElementById("p3-english-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p3-english-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p3-english-example-text").textContent = lesson.exampleText;

    const factGrid = document.getElementById("p3-english-fact-grid");
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
        button.addEventListener("click", () => speakP3English(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP3EnglishLesson() {
    stopP3EnglishSpeech();
    document.getElementById("p3-english-lesson").hidden = true;
    document.getElementById("p3-english-dashboard").hidden = false;
    updateP3EnglishProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP3EnglishQuiz() {
    currentP3EnglishQuestion = 0;
    currentP3EnglishScore = 0;
    p3EnglishAnswered = false;

    document.getElementById("p3-english-learn-stage").hidden = true;
    document.getElementById("p3-english-finish-stage").hidden = true;
    document.getElementById("p3-english-quiz-stage").hidden = false;
    showP3EnglishQuestion();
}

function showP3EnglishQuestion() {
    const lesson = p3EnglishLessons[currentP3EnglishTopic];
    const question = lesson.questions[currentP3EnglishQuestion];
    const total = lesson.questions.length;

    p3EnglishAnswered = false;
    document.getElementById("p3-english-question-number").textContent = currentP3EnglishQuestion + 1;
    document.getElementById("p3-english-question-total").textContent = total;
    document.getElementById("p3-english-question-text").textContent = question.text;
    document.getElementById("p3-english-question-visual").textContent = question.visual;
    document.getElementById("p3-english-live-score").textContent = currentP3EnglishScore;
    document.getElementById("p3-english-quiz-progress").style.width = `${((currentP3EnglishQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("p3-english-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p3-english-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP3EnglishAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP3EnglishAnswer(selectedIndex, selectedButton) {
    if (p3EnglishAnswered) return;
    p3EnglishAnswered = true;

    const lesson = p3EnglishLessons[currentP3EnglishTopic];
    const question = lesson.questions[currentP3EnglishQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p3-english-feedback");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP3EnglishScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "✅ Correct! Excellent thinking!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `💡 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p3-english-live-score").textContent = currentP3EnglishScore;

    window.setTimeout(() => {
        currentP3EnglishQuestion += 1;
        if (currentP3EnglishQuestion < lesson.questions.length) {
            showP3EnglishQuestion();
        } else {
            finishP3EnglishLesson();
        }
    }, 1300);
}

function finishP3EnglishLesson() {
    const lesson = p3EnglishLessons[currentP3EnglishTopic];
    const total = lesson.questions.length;

    document.getElementById("p3-english-quiz-stage").hidden = true;
    document.getElementById("p3-english-finish-stage").hidden = false;
    document.getElementById("p3-english-final-score").textContent = `${currentP3EnglishScore} / ${total}`;

    let message = "You finished the English adventure and learned something new!";
    if (currentP3EnglishScore === total) {
        message = "Perfect score! Fantastic P3 English work! 📚✨";
    } else if (currentP3EnglishScore >= 3) {
        message = "Great job! Your English skills are getting stronger! 🌟";
    } else {
        message = "Nice effort! Review the examples and try the quiz again. 💪";
    }
    document.getElementById("p3-english-finish-message").textContent = message;

    saveP3EnglishCompletion(currentP3EnglishTopic);
    updateP3EnglishProgress();
}

function restartP3EnglishLesson() {
    startP3EnglishQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP3EnglishCompletion() {
    try {
        return JSON.parse(localStorage.getItem("englishP3Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP3EnglishCompletion(topic) {
    const completed = getP3EnglishCompletion();
    completed[topic] = true;
    localStorage.setItem("englishP3Completed", JSON.stringify(completed));
}

function updateP3EnglishProgress() {
    const completed = getP3EnglishCompletion();
    const topics = Object.keys(p3EnglishLessons);
    const completedCount = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((completedCount / topics.length) * 100);

    document.getElementById("p3-english-progress-text").textContent = `${progress}%`;
    document.getElementById("p3-english-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p3-english-progress-message");
    if (progress === 0) {
        message.textContent = "Complete a lesson to earn your first P3 English star!";
    } else if (progress < 100) {
        message.textContent = `${completedCount} of ${topics.length} adventures complete. Keep going!`;
    } else {
        message.textContent = "Amazing! You completed every P3 English adventure! 🏆";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p3-english-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        const done = Boolean(completed[topic]);

        if (card) card.classList.toggle("completed", done);
        if (status) status.textContent = done ? "Completed ✓" : "Ready";
    });
}

function speakP3English(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.86;
    utterance.pitch = 1.02;
    window.speechSynthesis.speak(utterance);
}

function stopP3EnglishSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP3EnglishProgress);

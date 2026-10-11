/* =========================================
   P4 ENGLISH
   Four lessons + quizzes + saved progress
========================================= */

const p4EnglishLessons = {
    grammar: {
        label: "Adventure 1",
        title: "Grammar & Clauses",
        icon: "\u23f0",
        description: "Use accurate tenses, subject-verb agreement, pronouns and conjunctions to build clear clauses.",
        exampleIcon: "\ud83e\udde9",
        exampleTitle: "Build a complete idea",
        exampleText: "A clause contains a subject and a verb. We can join ideas with conjunctions: Although it was raining, the pupils continued their indoor activity.",
        facts: [
            { icon: "\ud83d\udc65", title: "Subject-verb agreement", text: "The subject and verb must agree. One dog runs, but two dogs run." },
            { icon: "\ud83d\udd70\ufe0f", title: "Accurate tenses", text: "Keep the time of an action clear. Yesterday she wrote; today she writes; now she is writing." },
            { icon: "\ud83d\udd17", title: "Conjunctions", text: "Words such as although, because, while and so connect ideas and show their relationship." },
            { icon: "\ud83d\udc64", title: "Pronouns", text: "Choose pronouns carefully so the reader knows exactly who or what they refer to." }
        ],
        questions: [
            { text: "Which sentence has correct subject-verb agreement?", visual: "\ud83c\udf4e\ud83e\uddfa", answers: ["The basket of apples is heavy.", "The basket of apples are heavy.", "The basket of apples be heavy."], correct: 0 },
            { text: "Choose the correct word: Yesterday, Mei Ling ___ a letter to her cousin.", visual: "\u2709\ufe0f", answers: ["writes", "wrote", "writing"], correct: 1 },
            { text: "Which sentence correctly joins two contrasting ideas?", visual: "\ud83c\udf27\ufe0f\u2602\ufe0f", answers: ["Although it was raining, we went for the walk.", "Because it was raining, but we went for the walk.", "It was raining although because we walked."], correct: 0 },
            { text: "Replace 'Farah and I' with the best pronoun: Farah and I finished the project.", visual: "\ud83d\udc67\ud83d\udc66", answers: ["They", "We", "She"], correct: 1 },
            { text: "Which sentence is written correctly?", visual: "\ud83c\udfc3", answers: ["The children is running quickly.", "The children are running quickly.", "The children am running quickly."], correct: 1 }
        ]
    },
    vocabulary: {
        label: "Adventure 2",
        title: "Vocabulary & Word Choice",
        icon: "\ud83e\udde0",
        description: "Use context, word parts, synonyms and precise word choices to understand richer vocabulary.",
        exampleIcon: "\ud83d\udd0d",
        exampleTitle: "Use the sentence as a clue",
        exampleText: "The ancient tree had stood in the village for hundreds of years. The words 'hundreds of years' help us understand that ancient means very old.",
        facts: [
            { icon: "\ud83d\udd0e", title: "Context clues", text: "Look at the words before and after an unfamiliar word to work out its likely meaning." },
            { icon: "\ud83e\uddf1", title: "Prefixes and suffixes", text: "Word parts change meaning. Un- can mean not, and -less can mean without." },
            { icon: "\ud83d\udd04", title: "Synonyms and antonyms", text: "Synonyms have similar meanings; antonyms have opposite meanings." },
            { icon: "\ud83c\udfaf", title: "Precise words", text: "Choose specific words. 'The puppy dashed' tells us more than 'The puppy went'." }
        ],
        questions: [
            { text: "In 'The ancient temple was built 500 years ago', what does ancient mean?", visual: "\ud83c\udfdb\ufe0f", answers: ["very old", "very noisy", "very small"], correct: 0 },
            { text: "What does the suffix '-less' mean in the word 'careless'?", visual: "\ud83e\udde9", answers: ["full of", "without", "again"], correct: 1 },
            { text: "Which word is the closest synonym for 'brave'?", visual: "\ud83e\uddb8", answers: ["timid", "courageous", "sleepy"], correct: 1 },
            { text: "Which word is an antonym of 'generous'?", visual: "\ud83c\udf81", answers: ["selfish", "kind", "helpful"], correct: 0 },
            { text: "Which is the most precise verb? 'The athlete ___ across the finish line.'", visual: "\ud83c\udfc1", answers: ["went", "moved", "sprinted"], correct: 2 }
        ]
    },
    writing: {
        label: "Adventure 3",
        title: "Writing & Editing",
        icon: "\u270d\ufe0f",
        description: "Organise ideas, use connectors, punctuate dialogue and edit sentences for clarity.",
        exampleIcon: "\ud83d\udcdd",
        exampleTitle: "Make ideas flow",
        exampleText: "First, we planned the experiment. Next, we gathered the materials. Finally, we recorded our results. Connectors help readers follow the order of ideas.",
        facts: [
            { icon: "\ud83e\uddf5", title: "Cohesion", text: "Use connectors such as first, however, therefore and finally to link ideas clearly." },
            { icon: "\ud83d\udcac", title: "Direct speech", text: "Use quotation marks around the exact words a person says and punctuate the sentence carefully." },
            { icon: "\ud83d\udccc", title: "Paragraph focus", text: "A paragraph should usually develop one main idea with relevant supporting details." },
            { icon: "\u2705", title: "Edit your work", text: "Check spelling, punctuation, grammar and whether every sentence makes sense." }
        ],
        questions: [
            { text: "Choose the best connector: We forgot our umbrellas; ___, we waited until the rain became lighter.", visual: "\ud83c\udf27\ufe0f", answers: ["therefore", "meanwhile", "for example"], correct: 0 },
            { text: "Which sentence punctuates direct speech correctly?", visual: "\ud83d\udcac", answers: ["Mina said, \"I found it!\"", "Mina said \"I found it!", "Mina said, I found it!"], correct: 0 },
            { text: "Which sentence is the best supporting detail for 'Our class reduced waste this week'?", visual: "\u267b\ufe0f", answers: ["Our classroom has twenty desks.", "We reused scrap paper and sorted bottles for recycling.", "My favourite colour is green."], correct: 1 },
            { text: "Choose the clearest sentence.", visual: "\u270f\ufe0f", answers: ["The tired boy slowly climbed the steep stairs.", "The boy he tired climbed stairs steep slowly.", "Tired the stairs boy climbed."], correct: 0 },
            { text: "Which edit fixes the sentence? 'on monday we visited the science centre.'", visual: "\ud83d\udd0d", answers: ["On Monday, we visited the Science Centre.", "on Monday we visited the science centre", "On monday We visited the science centre."], correct: 0 }
        ]
    },
    reading: {
        label: "Adventure 4",
        title: "Reading Comprehension",
        icon: "\ud83d\udd0e",
        description: "Find the main idea, support answers with evidence and make sensible inferences from a passage.",
        exampleIcon: "\ud83c\udf31",
        exampleTitle: "Read this passage carefully",
        exampleText: "On Saturday morning, Hana and her classmates met at the school garden. The soil was dry after a hot week. Hana suggested collecting rainwater from the storage tank instead of using tap water. After watering the plants, they noticed several ladybirds on the bean leaves. Their teacher explained that ladybirds feed on aphids, which can damage plants. The class decided to leave the ladybirds alone. By noon, the garden looked healthier and the students had learned that small choices can help both plants and the environment.",
        facts: [
            { icon: "\ud83c\udfaf", title: "Main idea", text: "Ask what the whole paragraph or passage is mainly about, not just one small detail." },
            { icon: "\ud83d\udccc", title: "Text evidence", text: "Use details from the passage to support your answer instead of guessing." },
            { icon: "\ud83e\udde0", title: "Inference", text: "Combine clues in the text with what you already know to work out an unstated idea." },
            { icon: "\ud83d\udd0e", title: "Meaning in context", text: "Use surrounding words and events to understand what a word or phrase means in the passage." }
        ],
        questions: [
            { text: "Why did Hana suggest using rainwater from the storage tank?", visual: "\ud83c\udf27\ufe0f\ud83e\udea3", answers: ["To avoid watering the plants", "To use available water wisely instead of tap water", "To make the soil dry"], correct: 1 },
            { text: "What do ladybirds feed on according to the passage?", visual: "\ud83d\udc1e", answers: ["aphids", "bean leaves", "rainwater"], correct: 0 },
            { text: "Why did the class leave the ladybirds alone?", visual: "\ud83c\udf3f\ud83d\udc1e", answers: ["They were afraid of insects.", "The ladybirds could help protect the plants from aphids.", "The teacher wanted to remove the bean plants."], correct: 1 },
            { text: "What does 'the garden looked healthier' suggest?", visual: "\ud83c\udf3b", answers: ["The plants looked better after being cared for.", "The garden became smaller.", "The pupils stopped working."], correct: 0 },
            { text: "What is the main idea of the passage?", visual: "\ud83c\udf0d", answers: ["Ladybirds are the only useful insects.", "Students cared for a garden and learned how thoughtful choices can help nature.", "Tap water should never be used."], correct: 1 }
        ]
    }
};

let currentP4EnglishTopic = null;
let currentP4EnglishQuestion = 0;
let currentP4EnglishScore = 0;
let p4EnglishAnswered = false;

function openP4EnglishLesson(topic) {
    currentP4EnglishTopic = topic;
    currentP4EnglishQuestion = 0;
    currentP4EnglishScore = 0;
    p4EnglishAnswered = false;

    const lesson = p4EnglishLessons[topic];
    if (!lesson) return;

    document.getElementById("p4-english-dashboard").hidden = true;
    document.getElementById("p4-english-lesson").hidden = false;
    document.getElementById("p4-english-learn-stage").hidden = false;
    document.getElementById("p4-english-quiz-stage").hidden = true;
    document.getElementById("p4-english-finish-stage").hidden = true;

    document.getElementById("p4-english-lesson-icon").textContent = lesson.icon;
    document.getElementById("p4-english-lesson-label").textContent = lesson.label;
    document.getElementById("p4-english-lesson-title").textContent = lesson.title;
    document.getElementById("p4-english-lesson-description").textContent = lesson.description;
    document.getElementById("p4-english-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p4-english-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p4-english-example-text").textContent = lesson.exampleText;

    const factGrid = document.getElementById("p4-english-fact-grid");
    factGrid.innerHTML = "";

    lesson.facts.forEach((fact) => {
        const button = document.createElement("button");
        button.className = "fact-card";
        button.type = "button";
        button.innerHTML = `
            <span class="fact-icon">${fact.icon}</span>
            <span class="fact-title">${fact.title}</span>
            <span class="fact-text">${fact.text}</span>
            <span class="fact-listen">\ud83d\udd0a Tap to hear</span>
        `;
        button.addEventListener("click", () => speakP4English(`${fact.title}. ${fact.text}`));
        factGrid.appendChild(button);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeP4EnglishLesson() {
    stopP4EnglishSpeech();
    document.getElementById("p4-english-lesson").hidden = true;
    document.getElementById("p4-english-dashboard").hidden = false;
    updateP4EnglishProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startP4EnglishQuiz() {
    currentP4EnglishQuestion = 0;
    currentP4EnglishScore = 0;
    p4EnglishAnswered = false;

    document.getElementById("p4-english-learn-stage").hidden = true;
    document.getElementById("p4-english-finish-stage").hidden = true;
    document.getElementById("p4-english-quiz-stage").hidden = false;
    showP4EnglishQuestion();
}

function showP4EnglishQuestion() {
    const lesson = p4EnglishLessons[currentP4EnglishTopic];
    const question = lesson.questions[currentP4EnglishQuestion];
    const total = lesson.questions.length;

    p4EnglishAnswered = false;
    document.getElementById("p4-english-question-number").textContent = currentP4EnglishQuestion + 1;
    document.getElementById("p4-english-question-total").textContent = total;
    document.getElementById("p4-english-question-text").textContent = question.text;
    document.getElementById("p4-english-question-visual").textContent = question.visual;
    document.getElementById("p4-english-live-score").textContent = currentP4EnglishScore;
    document.getElementById("p4-english-quiz-progress").style.width = `${((currentP4EnglishQuestion + 1) / total) * 100}%`;

    const feedback = document.getElementById("p4-english-feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    const answerGrid = document.getElementById("p4-english-answer-grid");
    answerGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;
        button.addEventListener("click", () => checkP4EnglishAnswer(index, button));
        answerGrid.appendChild(button);
    });
}

function checkP4EnglishAnswer(selectedIndex, selectedButton) {
    if (p4EnglishAnswered) return;
    p4EnglishAnswered = true;

    const lesson = p4EnglishLessons[currentP4EnglishTopic];
    const question = lesson.questions[currentP4EnglishQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];
    const feedback = document.getElementById("p4-english-feedback");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    if (selectedIndex === question.correct) {
        currentP4EnglishScore += 1;
        selectedButton.classList.add("correct");
        feedback.textContent = "\u2705 Correct! Excellent thinking!";
        feedback.classList.add("good");
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent = `\ud83d\udca1 Good try! The answer is ${question.answers[question.correct]}.`;
        feedback.classList.add("try-again");
    }

    document.getElementById("p4-english-live-score").textContent = currentP4EnglishScore;

    window.setTimeout(() => {
        currentP4EnglishQuestion += 1;
        if (currentP4EnglishQuestion < lesson.questions.length) {
            showP4EnglishQuestion();
        } else {
            finishP4EnglishLesson();
        }
    }, 1300);
}

function finishP4EnglishLesson() {
    const lesson = p4EnglishLessons[currentP4EnglishTopic];
    const total = lesson.questions.length;

    document.getElementById("p4-english-quiz-stage").hidden = true;
    document.getElementById("p4-english-finish-stage").hidden = false;
    document.getElementById("p4-english-final-score").textContent = `${currentP4EnglishScore} / ${total}`;

    let message = "You finished the English adventure and strengthened your skills!";
    if (currentP4EnglishScore === total) {
        message = "Perfect score! Outstanding P4 English work! \ud83d\udcda\u2728";
    } else if (currentP4EnglishScore >= 3) {
        message = "Great job! Your P4 English skills are getting stronger! \ud83c\udf1f";
    } else {
        message = "Good effort! Review the examples, then try the quiz again. \ud83d\udcaa";
    }
    document.getElementById("p4-english-finish-message").textContent = message;

    saveP4EnglishCompletion(currentP4EnglishTopic);
    updateP4EnglishProgress();
}

function restartP4EnglishLesson() {
    startP4EnglishQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getP4EnglishCompletion() {
    try {
        return JSON.parse(localStorage.getItem("englishP4Completed")) || {};
    } catch (error) {
        return {};
    }
}

function saveP4EnglishCompletion(topic) {
    const completed = getP4EnglishCompletion();
    completed[topic] = true;
    localStorage.setItem("englishP4Completed", JSON.stringify(completed));
}

function updateP4EnglishProgress() {
    const completed = getP4EnglishCompletion();
    const topics = Object.keys(p4EnglishLessons);
    const completedCount = topics.filter((topic) => completed[topic]).length;
    const progress = Math.round((completedCount / topics.length) * 100);

    document.getElementById("p4-english-progress-text").textContent = `${progress}%`;
    document.getElementById("p4-english-progress-fill").style.width = `${progress}%`;

    const message = document.getElementById("p4-english-progress-message");
    if (progress === 0) {
        message.textContent = "Complete a lesson to earn your first P4 English star!";
    } else if (progress < 100) {
        message.textContent = `${completedCount} of ${topics.length} adventures complete. Keep going!`;
    } else {
        message.textContent = "Amazing! You completed every P4 English adventure! \ud83c\udfc6";
    }

    topics.forEach((topic) => {
        const card = document.querySelector(`.p4-english-card[data-topic="${topic}"]`);
        const status = document.getElementById(`status-${topic}`);
        const done = Boolean(completed[topic]);

        if (card) card.classList.toggle("completed", done);
        if (status) status.textContent = done ? "Completed \u2713" : "Ready";
    });
}

function speakP4English(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
}

function stopP4EnglishSpeech() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}

document.addEventListener("DOMContentLoaded", updateP4EnglishProgress);

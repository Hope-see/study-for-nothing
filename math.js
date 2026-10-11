// ========================================
// MATH P1 SCRIPT
// Only used by math.html.
//
// Covers the Math P1 dashboard and its three
// working lessons: Numbers, Addition, Shapes.
// "Counting" has no lesson built yet, so its
// card is disabled in the HTML rather than
// wired to a function here.
// ========================================


// ========================================
// NUMBERS QUIZ VARIABLES
// ========================================

let currentQuestion = 0;
let score = 0;
let answered = false;

const questions = [
    { number: 3, object: "🍎", answer: 3 },
    { number: 5, object: "⭐", answer: 5 },
    { number: 2, object: "🐶", answer: 2 },
    { number: 4, object: "🦋", answer: 4 },
    { number: 5, object: "🍓", answer: 5 }
];


// ========================================
// OPEN / CLOSE NUMBERS LESSON
// ========================================

function openNumbersLesson() {

    document.getElementById("math-p1-page").style.display = "none";
    document.getElementById("numbers-lesson").style.display = "block";

    resetNumbersLesson();

    window.scrollTo(0, 0);
}


function closeNumbersLesson() {

    document.getElementById("numbers-lesson").style.display = "none";
    document.getElementById("math-p1-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// SAY NUMBER (uses the browser's speech system)
// ========================================

function sayNumber(number) {

    if ("speechSynthesis" in window) {

        const speech = new SpeechSynthesisUtterance(number.toString());
        speech.rate = 0.8;

        window.speechSynthesis.speak(speech);
    }
}


// ========================================
// NUMBERS QUIZ
// ========================================

function startNumbersQuiz() {

    document.getElementById("learn-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    document.getElementById("completion-screen").style.display = "none";

    currentQuestion = 0;
    score = 0;
    answered = false;

    showQuestion();
}


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        (currentQuestion + 1) + " / " + questions.length;

    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById("lesson-progress-fill").style.width = progress + "%";

    document.getElementById("quiz-question").textContent =
        "How many " + getObjectName(question.object) + " are there?";

    const objects = document.getElementById("counting-objects");
    objects.innerHTML = "";

    for (let i = 0; i < question.number; i++) {
        const object = document.createElement("span");
        object.textContent = question.object;
        objects.appendChild(object);
    }

    document.getElementById("quiz-feedback").textContent = "";

    answered = false;
}


function getObjectName(object) {

    const names = {
        "🍎": "apples",
        "⭐": "stars",
        "🐶": "dogs",
        "🦋": "butterflies",
        "🍓": "strawberries"
    };

    return names[object] || "objects";
}


function checkAnswer(answer) {

    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById("quiz-feedback");

    if (answer === correctAnswer) {
        score++;
        feedback.textContent = "🎉 Correct! Great job! +1 ⭐";
    } else {
        feedback.textContent = "💡 Almost! The answer is " + correctAnswer + ".";
    }

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion >= questions.length) {
            finishNumbersQuiz();
        } else {
            showQuestion();
        }

    }, 1200);
}


function finishNumbersQuiz() {

    updateMathProgress(25);

    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("completion-screen").style.display = "block";

    document.getElementById("final-score").textContent = score;
    document.getElementById("question-number").textContent =
        questions.length + " / " + questions.length;

    document.getElementById("lesson-progress-fill").style.width = "100%";
}


function resetNumbersLesson() {

    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("learn-screen").style.display = "block";
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("completion-screen").style.display = "none";

    document.getElementById("question-number").textContent = "1 / 5";
    document.getElementById("lesson-progress-fill").style.width = "0%";
}


// ========================================
// ADDITION QUIZ VARIABLES
// ========================================

let additionQuestion = 0;
let additionScore = 0;
let additionAnswered = false;

const additionQuestions = [
    { first: 1, second: 1, answer: 2 },
    { first: 2, second: 1, answer: 3 },
    { first: 2, second: 2, answer: 4 },
    { first: 3, second: 1, answer: 4 },
    { first: 2, second: 3, answer: 5 }
];


// ========================================
// OPEN / CLOSE ADDITION LESSON
// ========================================

function openAdditionLesson() {

    document.getElementById("math-p1-page").style.display = "none";
    document.getElementById("addition-lesson").style.display = "block";

    resetAdditionLesson();

    window.scrollTo(0, 0);
}


function closeAdditionLesson() {

    document.getElementById("addition-lesson").style.display = "none";
    document.getElementById("math-p1-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// ADDITION QUIZ
// ========================================

function startAdditionQuiz() {

    document.getElementById("addition-learn-screen").style.display = "none";
    document.getElementById("addition-quiz-screen").style.display = "block";
    document.getElementById("addition-completion").style.display = "none";

    additionQuestion = 0;
    additionScore = 0;
    additionAnswered = false;

    showAdditionQuestion();
}


function showAdditionQuestion() {

    const question = additionQuestions[additionQuestion];

    document.getElementById("addition-progress-text").textContent =
        (additionQuestion + 1) + " / " + additionQuestions.length;

    const progress = (additionQuestion / additionQuestions.length) * 100;
    document.getElementById("addition-progress").style.width = progress + "%";

    document.getElementById("addition-question").textContent =
        "What is " + question.first + " + " + question.second + "?";

    createAdditionVisual(question.first, question.second);

    document.getElementById("addition-feedback").textContent = "";

    additionAnswered = false;
}


function createAdditionVisual(first, second) {

    const container = document.getElementById("addition-visual");
    container.innerHTML = "";

    // First group
    const firstGroup = document.createElement("div");
    firstGroup.className = "group";

    for (let i = 0; i < first; i++) {
        const apple = document.createElement("span");
        apple.textContent = "🍎";
        firstGroup.appendChild(apple);
    }

    container.appendChild(firstGroup);

    // Plus sign
    const plus = document.createElement("div");
    plus.className = "plus";
    plus.textContent = "+";
    container.appendChild(plus);

    // Second group
    const secondGroup = document.createElement("div");
    secondGroup.className = "group";

    for (let i = 0; i < second; i++) {
        const apple = document.createElement("span");
        apple.textContent = "🍎";
        secondGroup.appendChild(apple);
    }

    container.appendChild(secondGroup);
}


function checkAdditionAnswer(answer) {

    if (additionAnswered) {
        return;
    }

    additionAnswered = true;

    const correctAnswer = additionQuestions[additionQuestion].answer;
    const feedback = document.getElementById("addition-feedback");

    if (answer === correctAnswer) {
        additionScore++;
        feedback.textContent = "🎉 Correct! Amazing! +1 ⭐";
    } else {
        feedback.textContent = "💡 Good try! The answer is " + correctAnswer + ".";
    }

    setTimeout(function() {

        additionQuestion++;

        if (additionQuestion >= additionQuestions.length) {
            finishAdditionQuiz();
        } else {
            showAdditionQuestion();
        }

    }, 1200);
}


function finishAdditionQuiz() {

    updateMathProgress(50);

    document.getElementById("addition-quiz-screen").style.display = "none";
    document.getElementById("addition-completion").style.display = "block";

    document.getElementById("addition-final-score").textContent = additionScore;
    document.getElementById("addition-progress-text").textContent = "Complete! 🎉";
    document.getElementById("addition-progress").style.width = "100%";
}


function resetAdditionLesson() {

    additionQuestion = 0;
    additionScore = 0;
    additionAnswered = false;

    document.getElementById("addition-learn-screen").style.display = "block";
    document.getElementById("addition-quiz-screen").style.display = "none";
    document.getElementById("addition-completion").style.display = "none";

    document.getElementById("addition-progress-text").textContent = "Learning";
    document.getElementById("addition-progress").style.width = "0%";
}


// ========================================
// SHAPES QUIZ VARIABLES
// ========================================

let shapeQuestion = 0;
let shapeScore = 0;
let shapeAnswered = false;

const shapeQuestions = [
    { question: "Which shape has 3 sides?", answer: "Triangle", icon: "🔺" },
    { question: "Which shape is round?", answer: "Circle", icon: "⚪" },
    { question: "Which shape has 4 equal sides?", answer: "Square", icon: "🟦" },
    { question: "Which shape is longer than it is tall?", answer: "Rectangle", icon: "▭" }
];


// ========================================
// OPEN / CLOSE SHAPES LESSON
// ========================================

function openShapesLesson() {

    document.getElementById("math-p1-page").style.display = "none";
    document.getElementById("shapes-lesson").style.display = "block";

    resetShapesLesson();

    window.scrollTo(0, 0);
}


function closeShapesLesson() {

    document.getElementById("shapes-lesson").style.display = "none";
    document.getElementById("math-p1-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// SAY SHAPE
// ========================================

function sayShape(shapeName) {

    if ("speechSynthesis" in window) {

        const speech = new SpeechSynthesisUtterance(shapeName);
        speech.rate = 0.8;

        window.speechSynthesis.speak(speech);
    }
}


// ========================================
// SHAPES QUIZ
// ========================================

function startShapesQuiz() {

    document.getElementById("shape-learn-screen").style.display = "none";
    document.getElementById("shapes-quiz-screen").style.display = "block";
    document.getElementById("shapes-completion").style.display = "none";

    shapeQuestion = 0;
    shapeScore = 0;
    shapeAnswered = false;

    showShapeQuestion();
}


function showShapeQuestion() {

    const question = shapeQuestions[shapeQuestion];

    document.getElementById("shapes-progress-text").textContent =
        (shapeQuestion + 1) + " / " + shapeQuestions.length;

    const progress = (shapeQuestion / shapeQuestions.length) * 100;
    document.getElementById("shapes-progress").style.width = progress + "%";

    document.getElementById("shape-question").textContent = question.question;
    document.getElementById("shape-question-icon").textContent = question.icon;

    document.getElementById("shape-feedback").textContent = "";

    shapeAnswered = false;
}


function checkShapeAnswer(answer) {

    if (shapeAnswered) {
        return;
    }

    shapeAnswered = true;

    const correctAnswer = shapeQuestions[shapeQuestion].answer;
    const feedback = document.getElementById("shape-feedback");

    if (answer === correctAnswer) {
        shapeScore++;
        feedback.textContent = "🎉 Correct! You're a shape superstar! +1 ⭐";
    } else {
        feedback.textContent = "💡 Good try! The answer is " + correctAnswer + ".";
    }

    setTimeout(function() {

        shapeQuestion++;

        if (shapeQuestion >= shapeQuestions.length) {
            finishShapesQuiz();
        } else {
            showShapeQuestion();
        }

    }, 1200);
}


function finishShapesQuiz() {

    updateMathProgress(75);

    document.getElementById("shapes-quiz-screen").style.display = "none";
    document.getElementById("shapes-completion").style.display = "block";

    document.getElementById("shapes-final-score").textContent = shapeScore;
    document.getElementById("shapes-progress-text").textContent = "Complete! 🎉";
    document.getElementById("shapes-progress").style.width = "100%";
}


function resetShapesLesson() {

    shapeQuestion = 0;
    shapeScore = 0;
    shapeAnswered = false;

    document.getElementById("shape-learn-screen").style.display = "block";
    document.getElementById("shapes-quiz-screen").style.display = "none";
    document.getElementById("shapes-completion").style.display = "none";

    document.getElementById("shapes-progress-text").textContent = "Learning";
    document.getElementById("shapes-progress").style.width = "0%";
}


// ========================================
// COUNTING QUIZ VARIABLES
// ========================================

let countingQuestion = 0;
let countingScore = 0;
let countingAnswered = false;

const countingQuestions = [
    { count: 6, emoji: "🐥", name: "chicks", options: [5, 6, 7, 8] },
    { count: 9, emoji: "⭐", name: "stars", options: [7, 8, 9, 10] },
    { count: 12, emoji: "🍎", name: "apples", options: [10, 11, 12, 13] },
    { count: 15, emoji: "🎈", name: "balloons", options: [13, 14, 15, 16] },
    { count: 18, emoji: "💖", name: "hearts", options: [16, 17, 18, 19] }
];


// ========================================
// OPEN / CLOSE COUNTING LESSON
// ========================================

function openCountingLesson() {

    document.getElementById("math-p1-page").style.display = "none";
    document.getElementById("counting-lesson").style.display = "block";

    resetCountingLesson();

    window.scrollTo(0, 0);
}


function closeCountingLesson() {

    document.getElementById("counting-lesson").style.display = "none";
    document.getElementById("math-p1-page").style.display = "block";

    window.scrollTo(0, 0);
}


// ========================================
// COUNTING SPEECH
// ========================================

function sayCount(number, itemName) {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(
            number + " " + itemName
        );

        speech.rate = 0.8;
        window.speechSynthesis.speak(speech);
    }
}


// ========================================
// COUNTING QUIZ
// ========================================

function startCountingQuiz() {

    document.getElementById("counting-learn-screen").style.display = "none";
    document.getElementById("counting-quiz-screen").style.display = "block";
    document.getElementById("counting-completion").style.display = "none";

    countingQuestion = 0;
    countingScore = 0;
    countingAnswered = false;

    showCountingQuestion();
}


function showCountingQuestion() {

    const question = countingQuestions[countingQuestion];

    document.getElementById("counting-progress-text").textContent =
        (countingQuestion + 1) + " / " + countingQuestions.length;

    const progress = (countingQuestion / countingQuestions.length) * 100;
    document.getElementById("counting-progress").style.width = progress + "%";

    document.getElementById("counting-question").textContent =
        "How many " + question.name + " are there?";

    const objects = document.getElementById("counting-question-objects");
    objects.innerHTML = "";

    for (let i = 0; i < question.count; i++) {
        const object = document.createElement("span");
        object.textContent = question.emoji;
        object.setAttribute("aria-hidden", "true");
        objects.appendChild(object);
    }

    const answers = document.getElementById("counting-answers");
    answers.innerHTML = "";

    question.options.forEach(function(option) {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() {
            checkCountingAnswer(option);
        };
        answers.appendChild(button);
    });

    document.getElementById("counting-feedback").textContent = "";
    countingAnswered = false;
}


function checkCountingAnswer(answer) {

    if (countingAnswered) {
        return;
    }

    countingAnswered = true;

    const correctAnswer = countingQuestions[countingQuestion].count;
    const feedback = document.getElementById("counting-feedback");

    if (answer === correctAnswer) {
        countingScore++;
        feedback.textContent = "🎉 Correct! Great counting! +1 ⭐";
    } else {
        feedback.textContent =
            "💡 Good try! Count again — there are " + correctAnswer + ".";
    }

    setTimeout(function() {

        countingQuestion++;

        if (countingQuestion >= countingQuestions.length) {
            finishCountingQuiz();
        } else {
            showCountingQuestion();
        }

    }, 1200);
}


function finishCountingQuiz() {

    updateMathProgress(100);

    document.getElementById("counting-quiz-screen").style.display = "none";
    document.getElementById("counting-completion").style.display = "block";

    document.getElementById("counting-final-score").textContent = countingScore;
    document.getElementById("counting-progress-text").textContent = "Complete! 🎉";
    document.getElementById("counting-progress").style.width = "100%";
}


function resetCountingLesson() {

    countingQuestion = 0;
    countingScore = 0;
    countingAnswered = false;

    document.getElementById("counting-learn-screen").style.display = "block";
    document.getElementById("counting-quiz-screen").style.display = "none";
    document.getElementById("counting-completion").style.display = "none";

    document.getElementById("counting-progress-text").textContent = "Learning";
    document.getElementById("counting-progress").style.width = "0%";
}


// ========================================
// MATH PROGRESS (saved in this browser
// via localStorage so it survives a refresh)
// ========================================

function updateMathProgress(progress) {

    const savedProgress = Number(localStorage.getItem("mathP1Progress")) || 0;
    const bestProgress = Math.max(savedProgress, progress);

    localStorage.setItem("mathP1Progress", bestProgress);

    const progressText = document.getElementById("math-progress-text");
    if (progressText) {
        progressText.textContent = bestProgress + "%";
    }

    const progressFill = document.getElementById("math-progress-fill");
    if (progressFill) {
        progressFill.style.width = bestProgress + "%";
    }
}


function loadMathProgress() {

    const savedProgress = localStorage.getItem("mathP1Progress");
    const progress = savedProgress ? Number(savedProgress) : 0;

    const progressText = document.getElementById("math-progress-text");
    const progressFill = document.getElementById("math-progress-fill");

    if (progressText) {
        progressText.textContent = progress + "%";
    }

    if (progressFill) {
        progressFill.style.width = progress + "%";
    }
}


// ========================================
// LOAD PROGRESS WHEN PAGE OPENS
// ========================================

document.addEventListener("DOMContentLoaded", function() {
    loadMathProgress();
});
const p5EnglishLessons = {
    grammar: {
        label: "Adventure 1", title: "Grammar & Sentence Control", icon: "🧩", description: "Use grammar choices accurately so longer sentences remain clear and logical.",
        exampleIcon: "🔧", exampleTitle: "Sentence check", exampleText: "When you edit a sentence, check tense, subject-verb agreement, pronoun reference and whether each clause fits the intended meaning.",
        facts: [
            { icon: "⏰", title: "Keep tenses consistent", text: "Use verb tenses consistently unless the time of the action changes." },
            { icon: "🤝", title: "Subject-verb agreement", text: "The verb must agree with its subject, even when extra words appear between them." },
            { icon: "👤", title: "Clear pronoun reference", text: "A pronoun should clearly refer to the correct noun so the reader is not confused." },
            { icon: "🔄", title: "Active and passive voice", text: "Active voice focuses on the doer; passive voice focuses on the receiver of the action." }
        ],
        questions: [
            { text: "Choose the correct sentence.", visual: "✅ Grammar", answers: ["Neither of the boys are ready.", "Neither of the boys is ready.", "Neither of the boys be ready."], correct: 1 },
            { text: "Which sentence keeps the tense consistent?", visual: "⏰", answers: ["Mina opened the box and finds a note.", "Mina opens the box and found a note.", "Mina opened the box and found a note."], correct: 2 },
            { text: "Which sentence is in passive voice?", visual: "🔄", answers: ["The principal presented the trophies.", "The trophies were presented by the principal.", "The principal is proud."], correct: 1 },
            { text: "Choose the clearest pronoun reference.", visual: "👤", answers: ["When Jia spoke to Mei, she was nervous.", "Jia was nervous when Jia spoke to Mei.", "When Jia spoke to Mei, it was she."], correct: 1 },
            { text: "Which word best completes the sentence: 'If it rains, we ___ indoors.'", visual: "🌧️", answers: ["stay", "stayed", "will stay"], correct: 2 }
        ]
    },
    vocabulary: {
        label: "Adventure 2", title: "Vocabulary & Editing", icon: "🧠", description: "Use context and word knowledge to choose precise language and correct errors.",
        exampleIcon: "🔍", exampleTitle: "Context clue", exampleText: "In 'The path was treacherous, so the hikers moved slowly and carefully,' the clue suggests treacherous means dangerous or difficult to travel on.",
        facts: [
            { icon: "🧩", title: "Context clues", text: "Nearby explanations, examples and contrasts can help you work out an unfamiliar word." },
            { icon: "🧱", title: "Prefixes and suffixes", text: "Word parts can change meaning or word class, such as re-, un-, -ful and -less." },
            { icon: "🎯", title: "Precise vocabulary", text: "A precise word gives the reader a clearer picture than a vague word such as nice, thing or went." },
            { icon: "✏️", title: "Edit carefully", text: "Editing includes checking spelling, punctuation, grammar and whether the word fits the sentence." }
        ],
        questions: [
            { text: "In 'The path was treacherous, so we walked slowly and carefully,' what does treacherous most likely mean?", visual: "🥾", answers: ["Safe and smooth", "Dangerous or difficult", "Very short"], correct: 1 },
            { text: "What does the prefix 're-' usually mean in 'rewrite'?", visual: "re + write", answers: ["Again", "Without", "Before"], correct: 0 },
            { text: "Which word is the most precise? 'The eagle ___ across the sky.'", visual: "🦅", answers: ["went", "moved", "soared"], correct: 2 },
            { text: "Which sentence is punctuated correctly?", visual: "✏️", answers: ["After lunch we visited, the library.", "After lunch, we visited the library.", "After, lunch we visited the library."], correct: 1 },
            { text: "Which word correctly completes the sentence? 'The instructions were clear and ___.'", visual: "📋", answers: ["helpful", "helpfully", "helpfulness"], correct: 0 }
        ]
    },
    writing: {
        label: "Adventure 3", title: "Writing & Cohesion", icon: "✍️", description: "Connect ideas across sentences and paragraphs to make writing easy to follow.",
        exampleIcon: "📝", exampleTitle: "Build a cohesive paragraph", exampleText: "Start with a clear focus, add supporting details in a logical order, and use connectors only when they show the relationship between ideas.",
        facts: [
            { icon: "🧭", title: "Clear paragraph focus", text: "A paragraph should develop one main idea. Supporting sentences explain, describe or give evidence for it." },
            { icon: "🔗", title: "Cohesive devices", text: "Connectors such as however, therefore, meanwhile and as a result show how ideas relate." },
            { icon: "💬", title: "Use speech purposefully", text: "Direct and indirect speech can reveal character thoughts or report what someone said." },
            { icon: "🎨", title: "Specific details", text: "Strong verbs and sensory details help readers imagine a scene without adding unnecessary words." }
        ],
        questions: [
            { text: "Which connector best shows a contrast?", visual: "A ↔ B", answers: ["However", "Therefore", "Finally"], correct: 0 },
            { text: "Which is the strongest topic sentence for a paragraph about saving electricity at school?", visual: "💡", answers: ["School is a place.", "Our class can reduce electricity use through a few simple habits.", "Yesterday was Tuesday."], correct: 1 },
            { text: "Which sentence uses direct speech correctly?", visual: "💬", answers: ["Kai said, “I will check the lights.”", "Kai said, “I will check the lights”.", "Kai said I will check, the lights."], correct: 0 },
            { text: "Choose the most vivid sentence.", visual: "🌧️", answers: ["The rain was bad.", "Rain hammered against the windows and flooded the path.", "There was weather outside."], correct: 1 },
            { text: "Which connector best shows a result? 'The team tested the idea twice. ___, they found the same result.'", visual: "➡️", answers: ["However", "As a result", "Before"], correct: 1 }
        ]
    },
    reading: {
        label: "Adventure 4", title: "Reading & Inference", icon: "🔎", description: "Read closely to identify ideas, infer meaning and support answers with evidence.",
        exampleIcon: "🌱", exampleTitle: "Read this passage", exampleText: "P5 Green noticed that lights and fans were sometimes left on in empty classrooms. Instead of simply putting up posters, the pupils observed when electricity was being wasted and interviewed classmates. They discovered that people often forgot to switch things off when rushing to recess. The class created reminder tags beside the doors and assigned an energy monitor each day. Two weeks later, fewer empty rooms had lights or fans running. The pupils were encouraged, but they decided to continue collecting data before claiming that their plan was a complete success.",
        facts: [
            { icon: "🎯", title: "Main idea", text: "The main idea is the central message supported by the important details in the whole text." },
            { icon: "🕵️", title: "Inference", text: "An inference combines clues from the text with what you already know. It should still be supported by evidence." },
            { icon: "📌", title: "Evidence", text: "Good comprehension answers point to specific details, actions or words from the passage." },
            { icon: "✍️", title: "Author's purpose", text: "Ask why the text was written: to inform, explain, persuade, entertain or achieve a combination of purposes." }
        ],
        questions: [
            { text: "Why did P5 Green interview classmates?", visual: "🎤", answers: ["To learn why electricity was being wasted", "To choose a class president", "To practise singing"], correct: 0 },
            { text: "What problem did the class discover?", visual: "💡", answers: ["The classrooms had no doors", "People often forgot to switch things off when rushing to recess", "The school had no electricity"], correct: 1 },
            { text: "What can you infer from the pupils continuing to collect data?", visual: "📊", answers: ["They wanted stronger evidence before deciding the plan worked", "They did not understand their own plan", "They wanted to remove all reminder tags"], correct: 0 },
            { text: "Which detail best shows that the plan had some positive effect?", visual: "✅", answers: ["They interviewed classmates", "Fewer empty rooms had lights or fans running", "They used reminder tags"], correct: 1 },
            { text: "What is the main idea of the passage?", visual: "🌍", answers: ["A class used observation, reminders and data to reduce wasted electricity", "Recess should be longer", "Fans should never be used in classrooms"], correct: 0 }
        ]
    }
};

let currentP5EnglishTopic=null,currentP5EnglishQuestion=0,currentP5EnglishScore=0,p5EnglishAnswered=false;
function openP5EnglishLesson(topic){const lesson=p5EnglishLessons[topic];if(!lesson)return;currentP5EnglishTopic=topic;currentP5EnglishQuestion=0;currentP5EnglishScore=0;p5EnglishAnswered=false;document.getElementById("p5-english-dashboard").hidden=true;document.getElementById("p5-english-lesson").hidden=false;document.getElementById("p5-english-learn-stage").hidden=false;document.getElementById("p5-english-quiz-stage").hidden=true;document.getElementById("p5-english-finish-stage").hidden=true;document.getElementById("p5-english-lesson-icon").textContent=lesson.icon;document.getElementById("p5-english-lesson-label").textContent=lesson.label;document.getElementById("p5-english-lesson-title").textContent=lesson.title;document.getElementById("p5-english-lesson-description").textContent=lesson.description;document.getElementById("p5-english-example-icon").textContent=lesson.exampleIcon;document.getElementById("p5-english-example-title").textContent=lesson.exampleTitle;document.getElementById("p5-english-example-text").textContent=lesson.exampleText;const g=document.getElementById("p5-english-fact-grid");g.innerHTML="";lesson.facts.forEach(f=>{const b=document.createElement("button");b.className="fact-card";b.type="button";b.innerHTML=`<span class="fact-icon">${f.icon}</span><span class="fact-title">${f.title}</span><span class="fact-text">${f.text}</span><span class="fact-listen">🔊 Tap to hear</span>`;b.addEventListener("click",()=>speakP5English(`${f.title}. ${f.text}`));g.appendChild(b)});window.scrollTo({top:0,behavior:"smooth"})}
function closeP5EnglishLesson(){stopP5EnglishSpeech();document.getElementById("p5-english-lesson").hidden=true;document.getElementById("p5-english-dashboard").hidden=false;updateP5EnglishProgress();window.scrollTo({top:0,behavior:"smooth"})}
function startP5EnglishQuiz(){currentP5EnglishQuestion=0;currentP5EnglishScore=0;p5EnglishAnswered=false;document.getElementById("p5-english-learn-stage").hidden=true;document.getElementById("p5-english-finish-stage").hidden=true;document.getElementById("p5-english-quiz-stage").hidden=false;showP5EnglishQuestion()}
function showP5EnglishQuestion(){const lesson=p5EnglishLessons[currentP5EnglishTopic],q=lesson.questions[currentP5EnglishQuestion],total=lesson.questions.length;p5EnglishAnswered=false;document.getElementById("p5-english-question-number").textContent=currentP5EnglishQuestion+1;document.getElementById("p5-english-question-total").textContent=total;document.getElementById("p5-english-question-text").textContent=q.text;document.getElementById("p5-english-question-visual").textContent=q.visual;document.getElementById("p5-english-live-score").textContent=currentP5EnglishScore;document.getElementById("p5-english-quiz-progress").style.width=`${((currentP5EnglishQuestion+1)/total)*100}%`;const f=document.getElementById("p5-english-feedback");f.textContent="";f.className="feedback";const g=document.getElementById("p5-english-answer-grid");g.innerHTML="";q.answers.forEach((a,i)=>{const b=document.createElement("button");b.className="answer-button";b.type="button";b.textContent=a;b.onclick=()=>checkP5EnglishAnswer(i,b);g.appendChild(b)})}
function checkP5EnglishAnswer(i,b){if(p5EnglishAnswered)return;p5EnglishAnswered=true;const lesson=p5EnglishLessons[currentP5EnglishTopic],q=lesson.questions[currentP5EnglishQuestion],buttons=[...document.querySelectorAll(".answer-button")],f=document.getElementById("p5-english-feedback");buttons.forEach(x=>x.disabled=true);buttons[q.correct].classList.add("correct");if(i===q.correct){currentP5EnglishScore++;b.classList.add("correct");f.textContent="✅ Correct! Excellent thinking!";f.classList.add("good")}else{b.classList.add("wrong");f.textContent=`💡 Good try! The answer is ${q.answers[q.correct]}.`;f.classList.add("try-again")}document.getElementById("p5-english-live-score").textContent=currentP5EnglishScore;setTimeout(()=>{currentP5EnglishQuestion++;currentP5EnglishQuestion<lesson.questions.length?showP5EnglishQuestion():finishP5EnglishLesson()},1300)}
function finishP5EnglishLesson(){const lesson=p5EnglishLessons[currentP5EnglishTopic],total=lesson.questions.length;document.getElementById("p5-english-quiz-stage").hidden=true;document.getElementById("p5-english-finish-stage").hidden=false;document.getElementById("p5-english-final-score").textContent=`${currentP5EnglishScore} / ${total}`;let m="You finished the English adventure and strengthened your skills!";if(currentP5EnglishScore===total)m="Perfect score! Outstanding P5 English work! 📚✨";else if(currentP5EnglishScore>=3)m="Great job! Your P5 English skills are getting stronger! 🌟";else m="Good effort! Review the examples, then try the quiz again. 💪";document.getElementById("p5-english-finish-message").textContent=m;saveP5EnglishCompletion(currentP5EnglishTopic);updateP5EnglishProgress()}
function restartP5EnglishLesson(){startP5EnglishQuiz();window.scrollTo({top:0,behavior:"smooth"})}
function getP5EnglishCompletion(){try{return JSON.parse(localStorage.getItem("englishP5Completed"))||{}}catch(e){return{}}}
function saveP5EnglishCompletion(t){const c=getP5EnglishCompletion();c[t]=true;localStorage.setItem("englishP5Completed",JSON.stringify(c))}
function updateP5EnglishProgress(){const c=getP5EnglishCompletion(),topics=Object.keys(p5EnglishLessons),done=topics.filter(t=>c[t]).length,p=Math.round(done/topics.length*100);document.getElementById("p5-english-progress-text").textContent=`${p}%`;document.getElementById("p5-english-progress-fill").style.width=`${p}%`;document.getElementById("p5-english-progress-message").textContent=p===100?"Amazing! You completed every P5 English adventure! 🏆":p>0?`${done} of ${topics.length} adventures complete. Keep going!`:"Complete a lesson to earn your first P5 English star!";topics.forEach(t=>{const card=document.querySelector(`.p5-english-card[data-topic="${t}"]`),s=document.getElementById(`status-${t}`);if(card)card.classList.toggle("completed",Boolean(c[t]));if(s)s.textContent=c[t]?"Completed ✓":"Ready"})}
function speakP5English(text){if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=.85;u.pitch=1;speechSynthesis.speak(u)}
function stopP5EnglishSpeech(){if("speechSynthesis" in window)speechSynthesis.cancel()}
document.addEventListener("DOMContentLoaded",updateP5EnglishProgress);

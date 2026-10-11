/* =========================================
   P3 SCIENCE
   Four lessons + quizzes + saved progress
========================================= */

const p3ScienceLessons = {
    diversity: {
        label: "Adventure 1", title: "Diversity & Classification", icon: "🌿",
        description: "Classify living and non-living things using observable characteristics.",
        exampleIcon: "🔎", exampleTitle: "Classification challenge",
        exampleText: "Choose five objects around you. Sort them into living and non-living groups, then explain the characteristics you used.",
        facts: [
            { icon: "🐶 🌳", title: "Living things", text: "Living things need air and water, grow, reproduce and respond to changes around them." },
            { icon: "🪨 🧸", title: "Non-living things", text: "Non-living things do not carry out all the life processes of living things." },
            { icon: "🐟 🐦 🐱", title: "Classifying animals", text: "Animals can be grouped using observable features such as body covering, number of legs or how they move." },
            { icon: "🌵 🌴 🌿", title: "Classifying plants", text: "Plants can be compared by features such as stem type, leaf shape and where they grow." }
        ],
        questions: [
            { text: "Which is a living thing?", visual: "🌱 🪨 🧸", answers: ["Seedling", "Rock", "Toy"], correct: 0 },
            { text: "Which characteristic is shown by all living things?", visual: "🌿🐾", answers: ["They grow", "They are green", "They can walk"], correct: 0 },
            { text: "Which is a useful way to classify animals?", visual: "🐦🐟🐱", answers: ["By observable features", "By favourite colour", "By their names only"], correct: 0 },
            { text: "Which is non-living?", visual: "🪨", answers: ["Rock", "Mushroom", "Tree"], correct: 0 },
            { text: "Why do scientists classify things?", visual: "🗂️", answers: ["To organise and compare them", "To make them bigger", "To change their colour"], correct: 0 }
        ]
    },
    materials: {
        label: "Adventure 2", title: "Materials & Uses", icon: "🧱",
        description: "Match the properties of materials to suitable uses.",
        exampleIcon: "☂️", exampleTitle: "Choose the best material",
        exampleText: "A raincoat should be waterproof and flexible. Which materials around you have those properties?",
        facts: [
            { icon: "🪵🔩", title: "Strength", text: "Strong materials resist breaking or bending when a force is applied." },
            { icon: "🧽💧", title: "Absorbency", text: "Absorbent materials take in water, while waterproof materials resist water passing through." },
            { icon: "🪟📦", title: "Transparency", text: "Transparent materials let light pass through clearly; opaque materials block light." },
            { icon: "🧤➰", title: "Flexibility", text: "Flexible materials can bend without breaking and may be useful for clothing or coverings." }
        ],
        questions: [
            { text: "Which property is most important for an umbrella?", visual: "☂️🌧️", answers: ["Waterproof", "Absorbent", "Brittle"], correct: 0 },
            { text: "Why is glass useful for a window?", visual: "🪟", answers: ["It can be transparent", "It is absorbent", "It is always soft"], correct: 0 },
            { text: "Which material is best for soaking up a spill?", visual: "💧", answers: ["Sponge", "Plastic sheet", "Metal ruler"], correct: 0 },
            { text: "A bicycle frame should be...", visual: "🚲", answers: ["Strong", "Very absorbent", "Easy to tear"], correct: 0 },
            { text: "Why do we choose materials by their properties?", visual: "🧰", answers: ["Different uses need different properties", "All materials are the same", "Only colour matters"], correct: 0 }
        ]
    },
    lifecycles: {
        label: "Adventure 3", title: "Life Cycles", icon: "🦋",
        description: "Compare repeated stages of growth and change in plants and animals.",
        exampleIcon: "🔄", exampleTitle: "Compare two cycles",
        exampleText: "Draw the life cycles of a butterfly and a chicken. Circle one similarity and one difference.",
        facts: [
            { icon: "🥚🐛🦋", title: "Butterfly", text: "A butterfly changes from egg to caterpillar, pupa and then adult butterfly." },
            { icon: "🥚🐣🐔", title: "Chicken", text: "A chicken develops from an egg to a chick and then an adult chicken." },
            { icon: "🌰🌱🌼", title: "Flowering plant", text: "A flowering plant can grow from a seed, become an adult plant, flower and produce new seeds." },
            { icon: "🔄", title: "Cycles repeat", text: "Adults reproduce and begin a new generation, so the pattern of stages can repeat." }
        ],
        questions: [
            { text: "Which stage comes after caterpillar in a butterfly life cycle?", visual: "🐛 ➜ ?", answers: ["Pupa", "Egg", "Seed"], correct: 0 },
            { text: "Which life cycle includes a chick?", visual: "🐣", answers: ["Chicken", "Butterfly", "Bean plant"], correct: 0 },
            { text: "What can an adult flowering plant produce?", visual: "🌼", answers: ["Seeds", "Metal", "Plastic"], correct: 0 },
            { text: "What do life cycles show?", visual: "🔄", answers: ["Stages of growth and change", "Only where an animal lives", "Only what it eats"], correct: 0 },
            { text: "Which statement is true?", visual: "🦋🐔", answers: ["Different animals can have different life-cycle stages", "All animals have exactly four stages", "Animals never change as they grow"], correct: 0 }
        ]
    },
    magnets: {
        label: "Adventure 4", title: "Magnets & Forces", icon: "🧲",
        description: "Investigate magnetic materials, poles, attraction and repulsion.",
        exampleIcon: "📎", exampleTitle: "Magnet hunt",
        exampleText: "Test a paper clip, plastic spoon, coin and wooden stick with a magnet. Record which objects are attracted.",
        facts: [
            { icon: "🧲📎", title: "Magnetic materials", text: "Magnets attract some materials such as iron and steel, but not every metal or object." },
            { icon: "N 🧲 S", title: "Magnetic poles", text: "Every magnet has two poles called north and south." },
            { icon: "N↔S", title: "Opposite poles attract", text: "A north pole and a south pole pull toward each other." },
            { icon: "N↔N", title: "Like poles repel", text: "Two north poles or two south poles push away from each other." }
        ],
        questions: [
            { text: "Which object is most likely attracted to a magnet?", visual: "🧲 📎", answers: ["Steel paper clip", "Plastic straw", "Wooden stick"], correct: 0 },
            { text: "What are the two poles of a magnet called?", visual: "🧲", answers: ["North and south", "Left and right", "Hot and cold"], correct: 0 },
            { text: "What happens when opposite poles are brought together?", visual: "N 🧲 S", answers: ["They attract", "They repel", "They disappear"], correct: 0 },
            { text: "What happens when two north poles face each other?", visual: "N 🧲 🧲 N", answers: ["They repel", "They attract", "They melt"], correct: 0 },
            { text: "Which statement is correct?", visual: "🧲", answers: ["Magnets do not attract every material", "Magnets attract every object", "Magnets only work in water"], correct: 0 }
        ]
    }
};

let currentP3ScienceTopic = null;
let currentP3ScienceQuestion = 0;
let currentP3ScienceScore = 0;
let p3ScienceAnswered = false;

function openP3ScienceLesson(topic) {
    const lesson = p3ScienceLessons[topic];
    if (!lesson) return;
    currentP3ScienceTopic = topic; currentP3ScienceQuestion = 0; currentP3ScienceScore = 0; p3ScienceAnswered = false;
    document.getElementById("p3-science-dashboard").hidden = true;
    document.getElementById("p3-science-lesson").hidden = false;
    document.getElementById("p3-science-learn-stage").hidden = false;
    document.getElementById("p3-science-quiz-stage").hidden = true;
    document.getElementById("p3-science-finish-stage").hidden = true;
    ["icon","label","title","description"].forEach(k => document.getElementById(`p3-science-lesson-${k}`).textContent = lesson[k]);
    document.getElementById("p3-science-example-icon").textContent = lesson.exampleIcon;
    document.getElementById("p3-science-example-title").textContent = lesson.exampleTitle;
    document.getElementById("p3-science-example-text").textContent = lesson.exampleText;
    const grid = document.getElementById("p3-science-fact-grid"); grid.innerHTML = "";
    lesson.facts.forEach(f => { const b=document.createElement("button"); b.className="fact-card"; b.type="button"; b.innerHTML=`<span class="fact-icon">${f.icon}</span><span class="fact-title">${f.title}</span><span class="fact-text">${f.text}</span><span class="fact-listen">🔊 Tap to hear</span>`; b.onclick=()=>speakP3Science(`${f.title}. ${f.text}`); grid.appendChild(b); });
    window.scrollTo({top:0,behavior:"smooth"});
}
function closeP3ScienceLesson(){ stopP3ScienceSpeech(); document.getElementById("p3-science-lesson").hidden=true; document.getElementById("p3-science-dashboard").hidden=false; updateP3ScienceProgress(); window.scrollTo({top:0,behavior:"smooth"}); }
function startP3ScienceQuiz(){ currentP3ScienceQuestion=0; currentP3ScienceScore=0; p3ScienceAnswered=false; document.getElementById("p3-science-learn-stage").hidden=true; document.getElementById("p3-science-finish-stage").hidden=true; document.getElementById("p3-science-quiz-stage").hidden=false; showP3ScienceQuestion(); }
function showP3ScienceQuestion(){ const l=p3ScienceLessons[currentP3ScienceTopic], q=l.questions[currentP3ScienceQuestion], total=l.questions.length; p3ScienceAnswered=false; document.getElementById("p3-science-question-number").textContent=currentP3ScienceQuestion+1; document.getElementById("p3-science-question-total").textContent=total; document.getElementById("p3-science-question-text").textContent=q.text; document.getElementById("p3-science-question-visual").textContent=q.visual; document.getElementById("p3-science-live-score").textContent=currentP3ScienceScore; document.getElementById("p3-science-quiz-progress").style.width=`${((currentP3ScienceQuestion+1)/total)*100}%`; const f=document.getElementById("p3-science-feedback"); f.textContent=""; f.className="feedback"; const g=document.getElementById("p3-science-answer-grid"); g.innerHTML=""; q.answers.forEach((a,i)=>{const b=document.createElement("button"); b.type="button"; b.className="answer-button"; b.textContent=a; b.onclick=()=>checkP3ScienceAnswer(i,b); g.appendChild(b);}); }
function checkP3ScienceAnswer(i,button){ if(p3ScienceAnswered)return; p3ScienceAnswered=true; const q=p3ScienceLessons[currentP3ScienceTopic].questions[currentP3ScienceQuestion]; const buttons=[...document.querySelectorAll(".answer-button")], f=document.getElementById("p3-science-feedback"); buttons.forEach(b=>b.disabled=true); buttons[q.correct].classList.add("correct"); if(i===q.correct){currentP3ScienceScore++; button.classList.add("correct"); f.textContent="✅ Correct! Excellent science thinking!"; f.classList.add("good");}else{button.classList.add("wrong"); f.textContent=`💡 Good try! The answer is ${q.answers[q.correct]}.`; f.classList.add("try-again");} document.getElementById("p3-science-live-score").textContent=currentP3ScienceScore; setTimeout(()=>{currentP3ScienceQuestion++; currentP3ScienceQuestion<p3ScienceLessons[currentP3ScienceTopic].questions.length?showP3ScienceQuestion():finishP3ScienceLesson();},1300); }
function finishP3ScienceLesson(){ const total=p3ScienceLessons[currentP3ScienceTopic].questions.length; document.getElementById("p3-science-quiz-stage").hidden=true; document.getElementById("p3-science-finish-stage").hidden=false; document.getElementById("p3-science-final-score").textContent=`${currentP3ScienceScore} / ${total}`; document.getElementById("p3-science-finish-message").textContent=currentP3ScienceScore===total?"Perfect score! You are a super P3 scientist! 🧪✨":currentP3ScienceScore>=3?"Great job! Your science reasoning is growing! 🌟":"Nice investigating! Review the facts and try again. 🔎"; saveP3ScienceCompletion(currentP3ScienceTopic); updateP3ScienceProgress(); }
function restartP3ScienceLesson(){ startP3ScienceQuiz(); window.scrollTo({top:0,behavior:"smooth"}); }
function getP3ScienceCompletion(){ try{return JSON.parse(localStorage.getItem("scienceP3Completed"))||{};}catch(e){return{};} }
function saveP3ScienceCompletion(topic){ const c=getP3ScienceCompletion(); c[topic]=true; localStorage.setItem("scienceP3Completed",JSON.stringify(c)); }
function updateP3ScienceProgress(){ const c=getP3ScienceCompletion(), topics=Object.keys(p3ScienceLessons), n=topics.filter(t=>c[t]).length, p=Math.round(n/topics.length*100); document.getElementById("p3-science-progress-text").textContent=`${p}%`; document.getElementById("p3-science-progress-fill").style.width=`${p}%`; const m=document.getElementById("p3-science-progress-message"); m.textContent=p===0?"Complete a lesson to earn your first P3 Science star!":p<100?`${n} of ${topics.length} adventures complete. Keep investigating!`:"Amazing! You completed every P3 Science adventure! 🏆"; topics.forEach(t=>{const card=document.querySelector(`.p3-science-card[data-topic="${t}"]`), status=document.getElementById(`status-${t}`), done=!!c[t]; if(card)card.classList.toggle("completed",done); if(status)status.textContent=done?"Completed ✓":"Ready";}); }
function speakP3Science(text){ if(!("speechSynthesis" in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.rate=.9; u.pitch=1.05; speechSynthesis.speak(u); }
function stopP3ScienceSpeech(){ if("speechSynthesis" in window)speechSynthesis.cancel(); }
document.addEventListener("DOMContentLoaded",updateP3ScienceProgress);

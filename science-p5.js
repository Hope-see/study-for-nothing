const p5ScienceLessons = {
    reproduction: {
        label: "Adventure 1", title: "Reproduction in Plants & Animals", icon: "🌼", description: "Explore how flowering plants and animals reproduce and continue their life cycles.",
        exampleIcon: "🌸", exampleTitle: "Flower detective", exampleText: "Look at a flower diagram. Identify the parts involved in reproduction and explain how pollen can move from one flower to another.",
        facts: [
            { icon: "🌸", title: "Pollination", text: "Pollination is the transfer of pollen from the anther to the stigma of a flower of the same species." },
            { icon: "🐝", title: "Pollinating agents", text: "Pollen can be transferred by animals such as insects or by wind." },
            { icon: "🌱", title: "Fertilisation and seeds", text: "After fertilisation, ovules can develop into seeds and the ovary can develop into a fruit." },
            { icon: "🥚🐣", title: "Animal reproduction", text: "Some animals lay eggs while others give birth to live young, but reproduction produces new individuals of the same kind." }
        ],
        questions: [
            { text: "What is pollination?", visual: "🌸 ➡️ 🌸", answers: ["Transfer of pollen from anther to stigma", "A seed growing into a plant", "A fruit falling from a tree"], correct: 0 },
            { text: "Which animal can help transfer pollen between flowers?", visual: "🌼 ? 🌼", answers: ["Bee", "Earthworm", "Fish"], correct: 0 },
            { text: "After fertilisation, which flower part can develop into a seed?", visual: "🌸 → 🌱", answers: ["Petal", "Ovule", "Sepal"], correct: 1 },
            { text: "Which statement is correct about animal reproduction?", visual: "🐣 🐶", answers: ["All animals lay eggs", "All animals give birth to live young", "Different animals reproduce in different ways"], correct: 2 },
            { text: "Why is reproduction important to a species?", visual: "🐾🌱", answers: ["It allows the species to continue", "It stops growth", "It removes all variation"], correct: 0 }
        ]
    },
    water: {
        label: "Adventure 2", title: "Water & the Water Cycle", icon: "🌧️", description: "Follow water as it changes state and moves through the environment.",
        exampleIcon: "🥤", exampleTitle: "Condensation clue", exampleText: "Place a cold drink on a table. Observe the outside of the cup. The droplets form when water vapour in the air loses heat and condenses.",
        facts: [
            { icon: "☀️💧", title: "Evaporation", text: "Evaporation happens when liquid water gains heat and changes into water vapour." },
            { icon: "☁️", title: "Condensation", text: "Condensation happens when water vapour loses heat and changes into tiny liquid water droplets." },
            { icon: "🌧️", title: "Precipitation", text: "Water can fall from clouds as rain when droplets become large and heavy enough." },
            { icon: "🌊", title: "Water cycle", text: "Water moves continuously through evaporation, condensation, precipitation and collection." }
        ],
        questions: [
            { text: "What change happens during evaporation?", visual: "💧 + ☀️", answers: ["Liquid to gas", "Gas to liquid", "Solid to liquid"], correct: 0 },
            { text: "Cloud droplets form mainly because water vapour...", visual: "☁️", answers: ["gains heat and boils", "loses heat and condenses", "turns directly into ice"], correct: 1 },
            { text: "Which process returns water from clouds to Earth's surface as rain?", visual: "☁️🌧️", answers: ["Evaporation", "Condensation", "Precipitation"], correct: 2 },
            { text: "Why do puddles become smaller on a warm day?", visual: "☀️💦", answers: ["Water evaporates", "Water freezes", "Water becomes heavier"], correct: 0 },
            { text: "Which sequence is part of the water cycle?", visual: "🔄", answers: ["Evaporation → condensation → precipitation", "Condensation → melting → magnetism", "Freezing → digestion → precipitation"], correct: 0 }
        ]
    },
    systems: {
        label: "Adventure 3", title: "Respiratory & Circulatory Systems", icon: "❤️", description: "Learn how breathing and blood circulation work together to transport gases and materials.",
        exampleIcon: "🏃", exampleTitle: "After exercise", exampleText: "After running, your breathing and heart rate increase because working muscles need more oxygen and produce more carbon dioxide.",
        facts: [
            { icon: "🫁", title: "Respiratory system", text: "The respiratory system brings oxygen into the body and removes carbon dioxide." },
            { icon: "❤️", title: "Heart", text: "The heart pumps blood around the body through blood vessels." },
            { icon: "🩸", title: "Blood transport", text: "Blood carries oxygen and digested food to body cells and carries carbon dioxide away from cells." },
            { icon: "🔗", title: "Systems work together", text: "The respiratory and circulatory systems work together so oxygen can reach cells throughout the body." }
        ],
        questions: [
            { text: "Which organ pumps blood around the body?", visual: "❤️", answers: ["Heart", "Lungs", "Stomach"], correct: 0 },
            { text: "Which gas is taken into the body during breathing?", visual: "🫁", answers: ["Carbon dioxide", "Oxygen", "Water vapour only"], correct: 1 },
            { text: "What is one job of the blood?", visual: "🩸", answers: ["Make bones shorter", "Carry oxygen to body cells", "Turn food into sunlight"], correct: 1 },
            { text: "Why does breathing rate increase during exercise?", visual: "🏃💨", answers: ["Muscles need more oxygen", "The body stops using energy", "Blood stops moving"], correct: 0 },
            { text: "How are the respiratory and circulatory systems connected?", visual: "🫁 ↔️ ❤️", answers: ["Blood transports gases exchanged by the lungs", "The lungs digest food", "The heart makes air"], correct: 0 }
        ]
    },
    electricity: {
        label: "Adventure 4", title: "Electricity & Circuits", icon: "⚡", description: "Explore complete circuits, circuit components, conductors and insulators.",
        exampleIcon: "🔋💡", exampleTitle: "Circuit challenge", exampleText: "Imagine a cell, wires and a bulb. The bulb lights only when there is a complete path for electric current through the circuit.",
        facts: [
            { icon: "🔋", title: "Electrical source", text: "A cell or battery provides electrical energy to a circuit." },
            { icon: "🔁", title: "Closed circuit", text: "A bulb lights when the circuit forms a complete closed path. A break creates an open circuit." },
            { icon: "🔌", title: "Conductors", text: "Conductors allow electric current to pass through easily. Many metals are good electrical conductors." },
            { icon: "🧤", title: "Insulators", text: "Insulators do not allow electric current to pass through easily. Plastic and rubber are common examples." }
        ],
        questions: [
            { text: "What must a simple circuit have for a bulb to light?", visual: "🔋—💡", answers: ["A complete closed path", "A gap in the wire", "Only a bulb with no source"], correct: 0 },
            { text: "Which component supplies electrical energy in a simple circuit?", visual: "? → ⚡", answers: ["Cell", "Switch only", "Plastic ruler"], correct: 0 },
            { text: "Which material is most likely an electrical conductor?", visual: "🔌", answers: ["Copper", "Rubber", "Dry plastic"], correct: 0 },
            { text: "What happens when a switch opens a circuit?", visual: "🔘", answers: ["The path is broken", "The battery becomes a magnet", "The bulb always becomes brighter"], correct: 0 },
            { text: "Why is plastic often used around electrical wires?", visual: "🧤⚡", answers: ["It is an insulator", "It creates electricity", "It is a strong magnet"], correct: 0 }
        ]
    }
};

let currentP5ScienceTopic=null,currentP5ScienceQuestion=0,currentP5ScienceScore=0,p5ScienceAnswered=false;
function openP5ScienceLesson(topic){const lesson=p5ScienceLessons[topic];if(!lesson)return;currentP5ScienceTopic=topic;currentP5ScienceQuestion=0;currentP5ScienceScore=0;p5ScienceAnswered=false;document.getElementById("p5-science-dashboard").hidden=true;document.getElementById("p5-science-lesson").hidden=false;document.getElementById("p5-science-learn-stage").hidden=false;document.getElementById("p5-science-quiz-stage").hidden=true;document.getElementById("p5-science-finish-stage").hidden=true;["icon","label","title","description"].forEach(k=>document.getElementById(`p5-science-lesson-${k}`).textContent=lesson[k]);document.getElementById("p5-science-example-icon").textContent=lesson.exampleIcon;document.getElementById("p5-science-example-title").textContent=lesson.exampleTitle;document.getElementById("p5-science-example-text").textContent=lesson.exampleText;const grid=document.getElementById("p5-science-fact-grid");grid.innerHTML="";lesson.facts.forEach(f=>{const b=document.createElement("button");b.className="fact-card";b.type="button";b.innerHTML=`<span class="fact-icon">${f.icon}</span><span class="fact-title">${f.title}</span><span class="fact-text">${f.text}</span><span class="fact-listen">🔊 Tap to hear</span>`;b.onclick=()=>speakP5Science(`${f.title}. ${f.text}`);grid.appendChild(b)});window.scrollTo({top:0,behavior:"smooth"})}
function closeP5ScienceLesson(){stopP5ScienceSpeech();document.getElementById("p5-science-lesson").hidden=true;document.getElementById("p5-science-dashboard").hidden=false;updateP5ScienceProgress();window.scrollTo({top:0,behavior:"smooth"})}
function startP5ScienceQuiz(){currentP5ScienceQuestion=0;currentP5ScienceScore=0;p5ScienceAnswered=false;document.getElementById("p5-science-learn-stage").hidden=true;document.getElementById("p5-science-finish-stage").hidden=true;document.getElementById("p5-science-quiz-stage").hidden=false;showP5ScienceQuestion()}
function showP5ScienceQuestion(){const lesson=p5ScienceLessons[currentP5ScienceTopic],q=lesson.questions[currentP5ScienceQuestion],total=lesson.questions.length;p5ScienceAnswered=false;document.getElementById("p5-science-question-number").textContent=currentP5ScienceQuestion+1;document.getElementById("p5-science-question-total").textContent=total;document.getElementById("p5-science-question-text").textContent=q.text;document.getElementById("p5-science-question-visual").textContent=q.visual;document.getElementById("p5-science-live-score").textContent=currentP5ScienceScore;document.getElementById("p5-science-quiz-progress").style.width=`${((currentP5ScienceQuestion+1)/total)*100}%`;const f=document.getElementById("p5-science-feedback");f.textContent="";f.className="feedback";const g=document.getElementById("p5-science-answer-grid");g.innerHTML="";q.answers.forEach((a,i)=>{const b=document.createElement("button");b.type="button";b.className="answer-button";b.textContent=a;b.onclick=()=>checkP5ScienceAnswer(i,b);g.appendChild(b)})}
function checkP5ScienceAnswer(i,b){if(p5ScienceAnswered)return;p5ScienceAnswered=true;const lesson=p5ScienceLessons[currentP5ScienceTopic],q=lesson.questions[currentP5ScienceQuestion],buttons=[...document.querySelectorAll(".answer-button")],f=document.getElementById("p5-science-feedback");buttons.forEach(x=>x.disabled=true);buttons[q.correct].classList.add("correct");if(i===q.correct){currentP5ScienceScore++;b.classList.add("correct");f.textContent="✅ Correct! Excellent scientific thinking!";f.classList.add("good")}else{b.classList.add("wrong");f.textContent=`💡 Good try! The answer is ${q.answers[q.correct]}.`;f.classList.add("try-again")}document.getElementById("p5-science-live-score").textContent=currentP5ScienceScore;setTimeout(()=>{currentP5ScienceQuestion++;currentP5ScienceQuestion<lesson.questions.length?showP5ScienceQuestion():finishP5ScienceLesson()},1300)}
function finishP5ScienceLesson(){const lesson=p5ScienceLessons[currentP5ScienceTopic],total=lesson.questions.length;document.getElementById("p5-science-quiz-stage").hidden=true;document.getElementById("p5-science-finish-stage").hidden=false;document.getElementById("p5-science-final-score").textContent=`${currentP5ScienceScore} / ${total}`;let m="You finished the investigation. Great effort!";if(currentP5ScienceScore===total)m="Perfect score! Outstanding P5 Science work! 🔬✨";else if(currentP5ScienceScore>=3)m="Great job! Your P5 Science understanding is growing! 🌟";else m="Good effort! Review the science cards and try again. 💪";document.getElementById("p5-science-finish-message").textContent=m;saveP5ScienceCompletion(currentP5ScienceTopic);updateP5ScienceProgress()}
function restartP5ScienceLesson(){startP5ScienceQuiz();window.scrollTo({top:0,behavior:"smooth"})}
function getP5ScienceCompletion(){try{return JSON.parse(localStorage.getItem("scienceP5Completed"))||{}}catch(e){return{}}}
function saveP5ScienceCompletion(t){const c=getP5ScienceCompletion();c[t]=true;localStorage.setItem("scienceP5Completed",JSON.stringify(c))}
function updateP5ScienceProgress(){const c=getP5ScienceCompletion(),topics=Object.keys(p5ScienceLessons),done=topics.filter(t=>c[t]).length,p=Math.round(done/topics.length*100);document.getElementById("p5-science-progress-text").textContent=`${p}%`;document.getElementById("p5-science-progress-fill").style.width=`${p}%`;document.getElementById("p5-science-progress-message").textContent=p===100?"Amazing! You completed every P5 Science adventure! 🏆":p>0?`${done} of ${topics.length} adventures complete. Keep investigating!`:"Complete a lesson to earn your first P5 Science star!";topics.forEach(t=>{const card=document.querySelector(`.p5-science-card[data-topic="${t}"]`),s=document.getElementById(`status-${t}`);if(card)card.classList.toggle("completed",Boolean(c[t]));if(s)s.textContent=c[t]?"Completed ✓":"Ready"})}
function speakP5Science(text){if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=.84;u.pitch=1;speechSynthesis.speak(u)}
function stopP5ScienceSpeech(){if("speechSynthesis" in window)speechSynthesis.cancel()}
document.addEventListener("DOMContentLoaded",updateP5ScienceProgress);

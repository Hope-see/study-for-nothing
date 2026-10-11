const p5MathLessons = {
    whole: {
        label: "Adventure 1",
        title: "Whole Numbers & Order of Operations",
        icon: "🔢",
        description: "Work with numbers up to 10 million and use brackets and operation order correctly.",
        facts: [
            { icon: "🏙️", title: "Numbers to 10 million", text: "Large numbers can have millions, hundred-thousands, ten-thousands, thousands, hundreds, tens and ones." },
            { icon: "🔟", title: "Multiply and divide by powers of 10", text: "Multiplying by 10, 100 or 1,000 shifts place values to the left; dividing shifts them to the right." },
            { icon: "🧠", title: "Order matters", text: "Do multiplication and division before addition and subtraction unless brackets tell you to do something first." },
            { icon: "( )", title: "Brackets first", text: "Calculate what is inside brackets before carrying out the operations outside the brackets." }
        ],
        example: { icon: "🧮", title: "Order example", text: "24 + 6 × 5 = 24 + 30 = 54, but (24 + 6) × 5 = 30 × 5 = 150." },
        questions: [
            { text: "What is the value of the digit 7 in 7,406,219?", visual: "7,406,219", answers: ["700,000", "7,000,000", "70,000"], correct: 1 },
            { text: "What is 3,600 ÷ 100?", visual: "3,600 ÷ 100", answers: ["36", "360", "3.6"], correct: 0 },
            { text: "What is 24 + 6 × 5?", visual: "24 + 6 × 5", answers: ["150", "54", "120"], correct: 1 },
            { text: "What is (24 + 6) × 5?", visual: "(24 + 6) × 5", answers: ["54", "150", "35"], correct: 1 },
            { text: "Which number is the greatest?", visual: "🔎", answers: ["6,980,450", "6,908,540", "6,890,540"], correct: 0 }
        ]
    },
    fractions: {
        label: "Adventure 2",
        title: "Fractions & Decimals",
        icon: "🍕",
        description: "Connect fractions with division and operate with mixed numbers and decimals.",
        facts: [
            { icon: "➗", title: "Fraction as division", text: "3 divided by 4 can be written as the fraction 3/4." },
            { icon: "🍰", title: "Mixed numbers", text: "Add or subtract mixed numbers by working with the whole-number and fractional parts carefully." },
            { icon: "✖️", title: "Multiply fractions", text: "To multiply fractions, multiply the numerators and multiply the denominators, then simplify when possible." },
            { icon: "🔟", title: "Decimal place value", text: "Multiplying or dividing decimals by 10, 100 or 1,000 changes the place value of every digit." }
        ],
        example: { icon: "🍕", title: "Fraction example", text: "2/3 × 3/5 = 6/15 = 2/5. Always simplify the final fraction when you can." },
        questions: [
            { text: "5 ÷ 8 can be written as which fraction?", visual: "5 ÷ 8", answers: ["8/5", "5/8", "3/8"], correct: 1 },
            { text: "What is 1 1/2 + 2 1/4?", visual: "1 1/2 + 2 1/4", answers: ["3 3/4", "3 1/4", "4 1/2"], correct: 0 },
            { text: "What is 2/3 × 3/5?", visual: "2/3 × 3/5", answers: ["5/8", "2/5", "6/8"], correct: 1 },
            { text: "What is 4.72 × 100?", visual: "4.72 × 100", answers: ["47.2", "472", "4,720"], correct: 1 },
            { text: "2.5 km is how many metres?", visual: "2.5 km = ? m", answers: ["250 m", "2,500 m", "25,000 m"], correct: 1 }
        ]
    },
    percentage: {
        label: "Adventure 3",
        title: "Percentage & Rate",
        icon: "💯",
        description: "Find percentages and unit rates, and solve practical problems involving them.",
        facts: [
            { icon: "💯", title: "Percent means out of 100", text: "25% means 25 out of every 100, which is also 1/4." },
            { icon: "🔄", title: "Fractions, decimals and percentages", text: "0.75 = 75% = 3/4. These are different ways to represent the same amount." },
            { icon: "🏷️", title: "Discount", text: "A discount reduces the original price. Find the discount amount first, then subtract it from the original price." },
            { icon: "🚴", title: "Rate", text: "A rate compares two quantities with different units, such as kilometres per hour or dollars per item." }
        ],
        example: { icon: "🏷️", title: "Discount example", text: "25% of $80 is $20, so an item with a 25% discount costs $60." },
        questions: [
            { text: "What is 25% of 200?", visual: "25% of 200", answers: ["25", "50", "75"], correct: 1 },
            { text: "0.75 is equal to which percentage?", visual: "0.75 = ?%", answers: ["7.5%", "75%", "750%"], correct: 1 },
            { text: "A $80 item has a 25% discount. What is the sale price?", visual: "$80 → 25% off", answers: ["$20", "$55", "$60"], correct: 2 },
            { text: "A car travels 180 km in 3 hours. What is its average rate?", visual: "180 km ÷ 3 h", answers: ["60 km/h", "90 km/h", "540 km/h"], correct: 0 },
            { text: "5 notebooks cost $15. What is the rate per notebook?", visual: "$15 ÷ 5", answers: ["$2", "$3", "$5"], correct: 1 }
        ]
    },
    geometry: {
        label: "Adventure 4",
        title: "Area, Volume & Angles",
        icon: "📐",
        description: "Use formulas and angle facts to solve measurement and geometry problems.",
        facts: [
            { icon: "🔺", title: "Area of a triangle", text: "Area of a triangle = 1/2 × base × height. The height must be perpendicular to the base." },
            { icon: "📦", title: "Volume", text: "Volume of a cuboid = length × width × height. Cubic centimetres are written as cm³." },
            { icon: "📏", title: "Angles on a line", text: "Angles on a straight line add up to 180 degrees, while angles at a point add up to 360 degrees." },
            { icon: "🔺", title: "Triangle angles", text: "The three interior angles of any triangle add up to 180 degrees." }
        ],
        example: { icon: "🔺", title: "Triangle example", text: "A triangle with base 8 cm and height 6 cm has area 1/2 × 8 × 6 = 24 cm²." },
        questions: [
            { text: "A triangle has base 8 cm and height 6 cm. What is its area?", visual: "🔺 b=8, h=6", answers: ["24 cm²", "48 cm²", "14 cm²"], correct: 0 },
            { text: "A cube has side length 4 cm. What is its volume?", visual: "📦 4 × 4 × 4", answers: ["16 cm³", "48 cm³", "64 cm³"], correct: 2 },
            { text: "Two angles form a straight line. One is 65°. What is the other?", visual: "65° + ? = 180°", answers: ["115°", "125°", "295°"], correct: 0 },
            { text: "A triangle has angles 55° and 65°. What is the third angle?", visual: "55° + 65° + ?", answers: ["50°", "60°", "70°"], correct: 1 },
            { text: "If one of two vertically opposite angles is 72°, what is the other?", visual: "✖️ 72°", answers: ["18°", "72°", "108°"], correct: 1 }
        ]
    }
};

let currentP5Topic = null;
let currentP5Question = 0;
let currentP5Score = 0;
let p5Answered = false;

function openP5Lesson(topic) {
    const lesson = p5MathLessons[topic];
    if (!lesson) return;
    currentP5Topic = topic; currentP5Question = 0; currentP5Score = 0; p5Answered = false;
    document.getElementById("p5-dashboard").hidden = true;
    document.getElementById("p5-lesson").hidden = false;
    document.getElementById("learn-stage").hidden = false;
    document.getElementById("quiz-stage").hidden = true;
    document.getElementById("finish-stage").hidden = true;
    document.getElementById("lesson-icon").textContent = lesson.icon;
    document.getElementById("lesson-label").textContent = lesson.label;
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-description").textContent = lesson.description;
    document.getElementById("example-icon").textContent = lesson.example.icon;
    document.getElementById("example-title").textContent = lesson.example.title;
    document.getElementById("example-text").textContent = lesson.example.text;
    const factGrid = document.getElementById("fact-grid"); factGrid.innerHTML = "";
    lesson.facts.forEach((fact) => { const button = document.createElement("button"); button.className = "fact-card"; button.type = "button"; button.innerHTML = `<span class="fact-icon">${fact.icon}</span><span class="fact-title">${fact.title}</span><span class="fact-text">${fact.text}</span><span class="fact-listen">🔊 Tap to hear</span>`; button.addEventListener("click", () => speakP5Math(`${fact.title}. ${fact.text}`)); factGrid.appendChild(button); });
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function closeP5Lesson(){ stopP5Speech(); document.getElementById("p5-lesson").hidden=true; document.getElementById("p5-dashboard").hidden=false; updateP5Progress(); window.scrollTo({top:0,behavior:"smooth"}); }
function startP5Quiz(){ currentP5Question=0; currentP5Score=0; p5Answered=false; document.getElementById("learn-stage").hidden=true; document.getElementById("finish-stage").hidden=true; document.getElementById("quiz-stage").hidden=false; showP5Question(); }
function showP5Question(){ const lesson=p5MathLessons[currentP5Topic]; const q=lesson.questions[currentP5Question]; const total=lesson.questions.length; p5Answered=false; document.getElementById("p5-question-number").textContent=currentP5Question+1; document.getElementById("p5-question-total").textContent=total; document.getElementById("p5-question-text").textContent=q.text; document.getElementById("p5-question-visual").textContent=q.visual; document.getElementById("p5-live-score").textContent=currentP5Score; document.getElementById("p5-quiz-progress").style.width=`${((currentP5Question+1)/total)*100}%`; const f=document.getElementById("p5-feedback"); f.textContent=""; f.className="feedback"; const grid=document.getElementById("p5-answer-grid"); grid.innerHTML=""; q.answers.forEach((a,i)=>{ const b=document.createElement("button"); b.className="answer-button"; b.type="button"; b.textContent=a; b.addEventListener("click",()=>checkP5Answer(i,b)); grid.appendChild(b); }); }
function checkP5Answer(i,b){ if(p5Answered)return; p5Answered=true; const lesson=p5MathLessons[currentP5Topic]; const q=lesson.questions[currentP5Question]; const buttons=[...document.querySelectorAll(".answer-button")]; const f=document.getElementById("p5-feedback"); buttons.forEach(x=>x.disabled=true); buttons[q.correct].classList.add("correct"); if(i===q.correct){ currentP5Score++; b.classList.add("correct"); f.textContent="✅ Correct! Excellent P5 maths thinking!"; f.classList.add("good"); } else { b.classList.add("wrong"); f.textContent=`💡 Good try! The answer is ${q.answers[q.correct]}.`; f.classList.add("try-again"); } document.getElementById("p5-live-score").textContent=currentP5Score; setTimeout(()=>{ currentP5Question++; currentP5Question<lesson.questions.length?showP5Question():finishP5Lesson(); },1300); }
function finishP5Lesson(){ const lesson=p5MathLessons[currentP5Topic]; const total=lesson.questions.length; document.getElementById("quiz-stage").hidden=true; document.getElementById("finish-stage").hidden=false; document.getElementById("p5-final-score").textContent=`${currentP5Score} / ${total}`; let msg="You finished the adventure. Great effort!"; if(currentP5Score===total)msg="Perfect score! You are a P5 Math superstar! 🌟"; else if(currentP5Score>=3)msg="Great job! Your P5 maths skills are getting stronger! 💪"; else msg="Nice try! Review the learning cards and try again. 🧠"; document.getElementById("p5-finish-message").textContent=msg; saveP5Completion(currentP5Topic); updateP5Progress(); }
function restartP5Lesson(){ startP5Quiz(); window.scrollTo({top:0,behavior:"smooth"}); }
function getP5Completion(){ try{return JSON.parse(localStorage.getItem("mathP5Completed"))||{};}catch(e){return{};} }
function saveP5Completion(topic){ const c=getP5Completion(); c[topic]=true; localStorage.setItem("mathP5Completed",JSON.stringify(c)); }
function updateP5Progress(){ const c=getP5Completion(); const topics=Object.keys(p5MathLessons); const done=topics.filter(t=>c[t]).length; const progress=Math.round(done/topics.length*100); document.getElementById("p5-progress-text").textContent=`${progress}%`; document.getElementById("p5-progress-fill").style.width=`${progress}%`; const msg=document.getElementById("p5-progress-message"); msg.textContent=progress===100?"Amazing! You completed every P5 Math adventure! 🏆":progress>0?`${done} of ${topics.length} adventures completed. Keep going!`:"Complete a lesson to earn your first P5 Math star!"; topics.forEach(t=>{ const card=document.querySelector(`.p5-card[data-topic="${t}"]`); const status=document.getElementById(`status-${t}`); if(card)card.classList.toggle("completed",Boolean(c[t])); if(status)status.textContent=c[t]?"Completed ✓":"Ready"; }); }
function speakP5Math(text){ if(!("speechSynthesis" in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.rate=0.82; u.pitch=1.02; speechSynthesis.speak(u); }
function stopP5Speech(){ if("speechSynthesis" in window)speechSynthesis.cancel(); }
document.addEventListener("DOMContentLoaded",updateP5Progress);

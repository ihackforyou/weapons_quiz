const quizData = [
    {
        question: "प्रश्न क्रमांक 01- SLR रायफल का पूरा नाम क्या है?",
        a: "7.62 Self loading rifle.",
        b: "7.62 mm Self Loading Rifle",
        c: "7.62 inch Self Loading Rifle",
        d: "7.62 mm Self Loading Rifle 1A1",
        correct: "d",
    },
    {
        question: "प्रश्न क्रमांक 02- 9 mm CMG का वजन कितना है?",
        a: "7 Ponds 04 Once",
        b: "6 Ponds 05 Once",
        c: "4 Ponds 06 Once",
        d: "6 Ponds 04 Once",
        correct: "d",
    },
    {
        question: "प्रश्न क्रमांक 03- LMG रायफल की साईटिंग रेडियस क्या है?",
        a: "29.32 इंच",
        b: "29.31 इंच",
        c: "29.30 इंच",
        d: "29.29 इंच",
        correct: "b",
    },
    {
        question: "प्रश्न क्रमांक 04- इंसास रायफल की भरी हुई मैगजीन का कितना वजन होता है?",
        a: "352 gm",
        b: "360 gm",
        c: "355 gm",
        d: "350 gm",
        correct: "c",
    },
    {
        question: "प्रश्न क्रमांक 05- AK-47 रायफल में कितने ग्रुव्ज होते है?",
        a: "5 LHS",
        b: "6 RHS",
        c: "6 LHS",
        d: "4 RHS",
        correct: "d",
    },
    {
        question: "प्रश्न क्रमांक 06- LMG रायफल का प्रिंसिपल बताये?",
        a: "Long Stroke Piston Operated Gum Operation",
        b: "Short Stroke Piston Operated Gas Operation",
        c: "Long Stroke Piston Operated Gas Operation",
        d: "Long Stroke Pistal Operated Gas Operation",
        correct: "c",
    },
    {
        question: "प्रश्न क्रमांक 07- सेक्शन सपोर्टिंग हथियार कौन सा है?",
        a: "9 mm CMG",
        b: "9 mm Pistol",
        c: ".38” Revolver",
        d: "LMG",
        correct: "c",
    },
    {
        question: "प्रश्न क्रमांक 08- स्टे एवं स्टे स्प्रिंग रोकता है?",
        a: "ट्रिपिंग लीवर हैड",
        b: "हैमर",
        c: "सेफ्टी सियर",
        d: "एक्सटेक्टर",
        correct: "d",
    },
    {
        question: "प्रश्न क्रमांक 09-ग्रेनेड में कौन सा एवं कितना विस्फोटक पदार्थ भरा होता है?",
        a: "50 ग्राम डायनामाईट",
        b: "75 ग्राम आरडीएक्स",
        c: "78 ग्राम टीएनटी",
        d: "70 पीईके",
        correct: "c",
    },
    {
        question: "प्रश्न क्रमांक 10- 9 mm पिस्टल का लॉकिंग सिस्टम क्या है?",
        a: "टिल्ट अप",
        b: "टिल्ट डाउन",
        c: "लग लॉकिंग",
        d: "रोटेटिंग बोल्ट",
        correct: "c",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>आपने ${quizData.length} में से ${score} सही उत्तर प्राप्त किये है</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
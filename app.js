// مصفوفة تحتوي على الأسئلة وصورها و القيم المرتبطة بكل صورة
const questions = [
    {
        question: "السؤال الاول كيف تحب أن تتعلم شيئًا جديدًا؟",
        images: [
            { src: "./asses/quistionnaire/q1/a1/صورة1.jpg", value: 1 },
            { src: "./asses/quistionnaire/q1/a2/صورة2.jpg", value: 2 },
            { src: "./asses/quistionnaire/q1/a3/صورة4.jpg", value: 3 },
            { src: "./asses/quistionnaire/q1/a4/صورة5.jpg", value: 4 }

        ]
    },
    {
        question: "السؤال الثاني كيف تحب أن تتعلم عن الحيوانات؟",
        images: [
            { src: "./asses/quistionnaire/q2/a1/صورة12.jpg", value: 1 },
            { src: "./asses/quistionnaire/q2/a2/صورة10.jpg", value: 2 },
            { src: "./asses/quistionnaire/q2/a3/", value: 3 },
            { src: "./asses/quistionnaire/q2/a4/صورة13.jpg", value: 4 }

          
        ]
    },
    {
        question: "السؤال الثالث كيف تحب أن تتعلم الأرقام ؟",
        images: [
            { src: "./asses/quistionnaire/q3/a1/صورة6.jpg", value: 1 },
            { src: "./asses/quistionnaire/q3/a2/صورة7.jpg", value: 2 },
            { src: "./asses/quistionnaire/q3/a3/صورة8.jpg", value: 3 },
            { src: "./asses/quistionnaire/q3/a4/صورة9.jpg", value: 4 }
        ]
    },
    {
        question: "السؤال الرابع كيف تحب ان تحفظ الأناشيد ؟",
        images: [
            { src: "./asses/quistionnaire/q4/a1/صورة1.jpg", value: 1 },
            { src: "./asses/quistionnaire/q4/a2/صورة2.jpg", value: 2 },
            { src: "./asses/quistionnaire/q4/a3/صورة3.jpg", value: 3 },
            { src: "./asses/quistionnaire/q4/a4/صورة4.jpg", value: 4 }
            
        ]
    }
];

let currentQuestionIndex = 0;

// دالة لتحديث السؤال والصور
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = question.question;

    const imgElements = document.querySelectorAll(".answer-image");
    imgElements.forEach((img, index) => {
        img.src = question.images[index].src;
        img.setAttribute("data-value", question.images[index].value);
    });
}

// دالة للتنقل بين الأسئلة
document.getElementById("yesBtn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("لقد انتهيت من الأسئلة");
    }
});

// دالة لإرسال الإجابة
document.getElementById("noBtn").addEventListener("click", () => {
    alert("تم إرسال الإجابات");
});

// تحميل السؤال الأول عند فتح الصفحة
loadQuestion();

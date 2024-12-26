const questions = [
    {
        question: "Ce este instrucțiunea if în C++ și care este scopul ei principal?",
        options: ["O instrucțiune care testează o condiție și execută un bloc de cod dacă aceasta este adevărată.", "O instrucțiune folosită pentru a repeta un set de instrucțiuni.", "O structură utilizată pentru a parcurge elemente dintr-un array.", "O metodă de a crea o funcție nouă."],
        answer: 0
    },
    {
        question: "Cum funcționează instrucțiunea if-else și în ce situații este utilizată?",
        options: ["Permite repetarea unei secvențe de cod până când o condiție devine falsă.", "Verifică o condiție; dacă este adevărată, execută codul specificat, altfel execută alt cod.", "Este utilizată pentru operații matematice complexe.", "Servește doar la verificarea condițiilor numerice."],
        answer: 1
    },
    {
        question: "Care este diferența între if-else și switch în C++?",
        options: ["switch poate evalua expresii logice, if-else nu.", "if-else permite verificarea mai multor condiții, switch doar a unui caz specific.", "if-else este mai rapid decât switch.", "Nu există nicio diferență între ele."],
        answer: 1
    },
    {
        question: "Cum se scrie o instrucțiune if care verifică mai multe condiții simultan?",
        options: ["Se scriu mai multe instrucțiuni if una după alta.", "Se utilizează un switch.", "Se folosesc operatorii logici && și ||.", "Se folosește doar operatorul =."],
        answer: 2
    },
    {
        question: "Scrieți sintaxa corectă pentru o instrucțiune if care verifică dacă un număr este pozitiv.",
        options: ["if(num >= 0)", "if(num == 0)", "if(num < 0)", "if(num > 0)"],
        answer: 3
    },
    {
        question: "Cum putem verifica dacă un număr este cuprins între 10 și 50 folosind if?",
        options: ["if(num > 10 || num < 50)", "if(num >= 10 && num <= 50)", "if(num >= 10 || num <= 50)", "if(num > 10 && num < 50)"],
        answer: 1
    },
    {
        question: "Ce se întâmplă dacă omitem blocul else după un if?",
        options: ["Programul generează o eroare.", "Se va executa întotdeauna un bloc gol.", "Nimic, codul funcționează normal.", "Instrucțiunea if nu funcționează."],
        answer: 2
    },
    {
        question: "Este posibil să avem un if fără paranteze {}? Ce se întâmplă în acest caz?",
        options: ["Da, dar doar prima linie după if va fi executată.", "Da, și toate liniile vor fi executate.", "Nu, este obligatoriu să folosim paranteze.", "Nu, va apărea o eroare la compilare."],
        answer: 0
    },
    {
        question: "Care este scopul instrucțiunii switch în C++?",
        options: ["Să repete o secvență de cod.", "Să evalueze o expresie și să aleagă un caz pe baza rezultatului.", "Să combine mai multe condiții logice.", "Să organizeze variabile în funcții."],
        answer: 1
    },
    {
        question: "Ce tipuri de date pot fi utilizate ca expresie în instrucțiunea switch?",
        options: ["int, char și enum.", "int, char și float.", "Doar int.", "Orice tip de date."],
        answer: 0
    },
    {
        question: "Este obligatoriu să includem un bloc default în switch? Ce se întâmplă dacă lipsește?",
        options: ["Da, altfel codul nu se compilează.", "Nu, dar dacă lipsește și niciun caz nu este potrivit, nu se va executa nimic.", "Da, pentru a preveni erori.", "Nu, dar dacă lipsește și niciun caz nu este potrivit, nu se va executa nimic."],
        answer: 3
    },

    {
        question: "Cum putem combina if și switch într-un program?",
        options: [
            "Utilizăm switch în interiorul unui if.",
            "Nu este posibil să le combinăm.",
            "Folosim ambele separat pentru cazuri diferite.",
            "Utilizăm if doar pentru verificarea numerelor mari."
        ],
        answer: 1
    },
    {
        question: "Scrieți un exemplu de switch care afișează ziua săptămânii pe baza unui număr. Ce caz este potrivit pentru numărul 3?",
        options: [
            "case 3: 'Marți'",
            "case 3: 'Miercuri'",
            "case 3: 'Joi'",
            "case 3: 'Luni'"
        ],
        answer: 2
    },
    {
        question: "Ce este instrucțiunea if în C++ și care este scopul ei principal?",
        options: [
            "O instrucțiune folosită pentru a repeta un set de instrucțiuni.",
            "O instrucțiune care testează o condiție și execută un bloc de cod dacă aceasta este adevărată.",
            "O structură utilizată pentru a parcurge elemente dintr-un array.",
            "O metodă de a crea o funcție nouă."
        ],
        answer: 2
    },
    {
        question: "Cum funcționează instrucțiunea if-else și în ce situații este utilizată?",
        options: [
            "Verifică o condiție; dacă este adevărată, execută codul specificat, altfel execută alt cod.",
            "Permite repetarea unei secvențe de cod până când o condiție devine falsă.",
            "Este utilizată pentru operații matematice complexe.",
            "Servește doar la verificarea condițiilor numerice."
        ],
        answer: 1
    },
    {
        question: "Care este diferența între if-else și switch în C++?",
        options: [
            "if-else permite verificarea mai multor condiții, switch doar a unui caz specific.",
            "switch poate evalua expresii logice, if-else nu.",
            "if-else este mai rapid decât switch.",
            "Nu există nicio diferență între ele."
        ],
        answer: 1
    },
    {
        question: "Este posibil să avem un if fără paranteze {}? Ce se întâmplă în acest caz?",
        options: [
            "Nu, este obligatoriu să folosim paranteze.",
            "Da, dar doar prima linie după if va fi executată.",
            "Da, și toate liniile vor fi executate.",
            "Nu, va apărea o eroare la compilare."
        ],
        answer: 2
    },
    {
        question: "Care este scopul instrucțiunii switch în C++?",
        options: [
            "Să repete o secvență de cod.",
            "Să evalueze o expresie și să aleagă un caz pe baza rezultatului.",
            "Să combine mai multe condiții logice.",
            "Să organizeze variabile în funcții."
        ],
        answer: 2
    },
    {
        question: "Ce rol joacă instrucțiunea break într-un switch?",
        options: [
            "Oprește execuția cazurilor următoare dacă un caz este adevărat.",
            "Inițializează următorul caz.",
            "Nu are niciun rol.",
            "Permite execuția tuturor cazurilor din switch."
        ],
        answer: 1
    }

];

// Shuffle and pick 7 questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const selectedQuestions = shuffle([...questions]).slice(0, 7);

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const options = document.getElementById("options").children;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = q.options[i];
        options[i].className = "";
        options[i].disabled = false;
    }
}

function checkAnswer(selected) {
    const options = document.getElementById("options").children;
    const correctAnswer = selectedQuestions[currentQuestion].answer;

    if (selected === correctAnswer) {
        options[selected].classList.add("correct");
        score++;
    } else {
        options[selected].classList.add("wrong");
        options[correctAnswer].classList.add("correct");
    }

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < selectedQuestions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz").innerHTML = `<div class='score'>Final Score: ${score}/${selectedQuestions.length}</div>`;
        }
        document.getElementById("score").textContent = `Score: ${score}`;
    }, 3000);
}

loadQuestion();
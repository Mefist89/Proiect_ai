const questions = [
  {
    question:
      "Ce este instrucțiunea FOR în C++ și care este scopul ei principal?",
    options: [
      "O instrucțiune pentru verificarea condițiilor logice.",
      "O instrucțiune utilizată pentru a repeta un set de instrucțiuni de un număr specificat de ori.",
      "Un tip de funcție pentru calcularea valorilor.",
      "O metodă pentru manipularea fișierelor.",
    ],
    answer: 1,
  },
  {
    question: "Care este structura de bază a unei instrucțiuni FOR în C++?",
    options: [
      "if (condiție) { // cod }",
      "for (inițializare; condiție; incrementare) { // cod }",
      "for (condiție) { // cod }",
      "while (condiție) { // cod }",
    ],
    answer: 1,
  },
  {
    question: "Cum funcționează instrucțiunea FOR?",
    options: [
      "Execută o singură dată un set de instrucțiuni.",
      "Verifică o condiție logică fără a repeta.",
      "Execută un set de instrucțiuni pentru fiecare valoare a unui interval specificat.",
      "Este utilizată pentru a organiza codul în funcții separate.",
    ],
    answer: 2,
  },
  {
    question:
      "Ce se întâmplă dacă condiția dintr-un FOR este întotdeauna adevărată?",
    options: [
      "Produce o eroare de compilare.",
      "Se oprește imediat.",
      "Execută doar o singură iterație.",
      "Se generează o buclă infinită.",
    ],
    answer: 3,
  },
  {
    question:
      "Care este rolul expresiei de incrementare din instrucțiunea FOR?",
    options: [
      "Inițializează variabila de control.",
      "Modifică variabila de control după fiecare iterație.",
      "Verifică condiția pentru fiecare iterație.",
      "Oprește execuția buclei.",
    ],
    answer: 1,
  },
  {
    question:
      "Cum poate fi folosit FOR pentru a calcula suma numerelor de la 1 la 10?",
    options: [
      "Prin crearea unei funcții recursive.",
      "Prin scrierea unui singur apel de funcție.",
      "Folosind o instrucțiune IF într-o buclă infinită.",
      "Prin iterarea variabilei de control și adăugarea ei la o sumă cumulativă.",
    ],
    answer: 3,
  },
  {
    question:
      "Ce se întâmplă dacă uităm să includem o expresie de incrementare în FOR?",
    options: [
      "Bucla poate deveni infinită.",
      "Bucla se va opri automat după prima iterație.",
      "Bucla nu se va executa deloc.",
      "Va produce o eroare la compilare.",
    ],
    answer: 0,
  },
  {
    question: "Cum afișăm toate valorile pare între 1 și 10 folosind FOR?",
    options: [
      "Se poate face doar cu WHILE, nu cu FOR.",
      "Iterăm doar valorile impare.",
      "Iterăm de la 1 la 10 și verificăm dacă numărul este par.",
      "Utilizăm o funcție specială pentru numere pare.",
    ],
    answer: 2,
  },
  {
    question: "Ce rol joacă variabila de control într-un FOR?",
    options: [
      "Verifică condiția finală.",
      "Stochează rezultatul buclei.",
      "Determină numărul de iterații.",
      "Declanșează ieșirea din buclă.",
    ],
    answer: 2,
  },
  {
    question: "Este posibil să avem un FOR fără o condiție explicită?",
    options: [
      "Nu, o condiție este obligatorie.",
      "Da, dar doar cu variabile globale.",
      "Da, dar trebuie să folosim instrucțiuni suplimentare pentru a ieși din buclă.",
      "Nu, va apărea o eroare la compilare.",
    ],
    answer: 2,
  },
  {
    question: "Cum poate fi utilizat FOR pentru a parcurge un array?",
    options: [
      "Folosind indexul elementelor array-ului în instrucțiunea FOR.",
      "Folosind o buclă WHILE și incrementând manual indexul.",
      "FOR nu poate parcurge un array.",
      "Prin combinarea cu instrucțiunea IF.",
    ],
    answer: 0,
  },
  {
    question:
      "Ce valoare va avea variabila de control după ieșirea din buclă dacă FOR parcurge de la 0 la 9?",
    options: [
      "9",
      "10",
      "Depinde de condiția buclei.",
      "Valoarea nu este definită.",
    ],
    answer: 1,
  },
  {
    question: "Cum evităm buclele infinite în FOR?",
    options: [
      "Prin utilizarea expresiilor corecte de inițializare, condiție și incrementare.",
      "Prin utilizarea unei funcții break.",
      "FOR nu poate crea bucle infinite.",
      "Oprind programul manual.",
    ],
    answer: 0,
  },
  {
    question: "Care este diferența principală între FOR și WHILE?",
    options: [
      "FOR are toate expresiile într-o singură linie, WHILE necesită mai multe linii.",
      "WHILE este mai rapid decât FOR.",
      "WHILE poate parcurge doar liste.",
      "FOR nu poate fi folosit pentru numere negative.",
    ],
    answer: 0,
  },
  {
    question:
      "Ce se întâmplă dacă omit inițializarea variabilei de control într-un FOR?",
    options: [
      "Programul se oprește.",
      "Variabila de control ia automat valoarea 0.",
      "Instrucțiunea FOR poate funcționa dacă variabila a fost inițializată anterior.",
      "Bucla nu se execută.",
    ],
    answer: 2,
  },
  {
    question: "Cum ieșim manual dintr-o buclă FOR?",
    options: [
      "Folosind instrucțiunea break.",
      "Folosind instrucțiunea continue.",
      "Schimbând expresia de incrementare.",
      "Prin modificarea variabilei de control în afara buclei.",
    ],
    answer: 0,
  },
  {
    question: "Ce rol joacă instrucțiunea continue într-un FOR?",
    options: [
      "Opresc complet bucla.",
      "Ignoră restul codului din iterația curentă și trece la următoarea.",
      "Finalizează execuția programului.",
      "Nu are niciun efect asupra buclei FOR.",
    ],
    answer: 1,
  },
  {
    question:
      "Cum putem face ca FOR să parcurgă doar numere impare între 1 și 10?",
    options: [
      "Modificând condiția pentru a verifica numerele impare.",
      "Folosind o buclă WHILE în interiorul FOR.",
      "Utilizând o expresie de incrementare care sare peste numere pare.",
      "Nu este posibil cu FOR.",
    ],
    answer: 2,
  },
  {
    question: "Ce se întâmplă dacă condiția din FOR este falsă de la început?",
    options: [
      "Bucla se execută o dată.",
      "Bucla nu se execută deloc.",
      "Bucla generează o eroare.",
      "Bucla se execută infinit.",
    ],
    answer: 1,
  },
  {
    question:
      "Este posibil să folosim mai multe variabile de control într-un singur FOR?",
    options: [
      "Nu, FOR permite doar o variabilă de control.",
      "Da, prin utilizarea unei liste.",
      "Da, dacă sunt separate prin virgulă.",
      "Doar dacă se folosește un vector.",
    ],
    answer: 2,
  },
];

// Shuffle and pick 7 questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const selectedQuestions = shuffle([...questions]).slice(0, 10);

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
      document.getElementById(
        "quiz"
      ).innerHTML = `<div class='score'>Final Score: ${score}/${selectedQuestions.length}</div>`;
    }
    document.getElementById("score").textContent = `Score: ${score}`;
  }, 3000);
}

loadQuestion();

function checkAnswers() {
  const correctAnswers = [
    "int i = 1; i <= 100; i++", // Inițializarea și condiția pentru for
    "i % 2 == 0", // Condiția pentru numerele pare
    "sum += i;", // Acțiunea pentru suma numerelor pare
    "i % 2 != 0", // Condiția pentru numerele impare
    "product *= i;", // Acțiunea pentru produsul numerelor impare
  ];

  const userAnswers = [
    document.getElementById("forLoop").value.trim(),
    document.getElementById("evenCondition").value.trim(),
    document.getElementById("evenAction").value.trim(),
    document.getElementById("oddCondition").value.trim(),
    document.getElementById("oddAction").value.trim(),
  ];

  let correct = true;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] !== correctAnswers[i]) {
      correct = false;
      break;
    }
  }

  const result = document.getElementById("result");
  if (correct) {
    result.textContent = "Toate răspunsurile sunt corecte! Bravo!";
    result.style.color = "green";
  } else {
    result.textContent = "Unele răspunsuri sunt greșite. Mai încearcă!";
    result.style.color = "red";
  }
}

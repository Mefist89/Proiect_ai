function verificaRaspunsurile() {
  // Răspunsuri corecte
  const raspunsuriCorecte = [5, 10, 10, 10, 4];
  // Obține răspunsurile utilizatorului
  const raspunsuriUtilizator = [
    parseInt(document.getElementById("q1").value),
    parseInt(document.getElementById("q2").value),
    parseInt(document.getElementById("q3").value),
    parseInt(document.getElementById("q4").value),
    parseInt(document.getElementById("q5").value),
  ];
  // Verificare
  let corecte = 0;
  for (let i = 0; i < raspunsuriCorecte.length; i++) {
    if (raspunsuriUtilizator[i] === raspunsuriCorecte[i]) {
      corecte++;
    }
  }
  // Feedback
  const feedback = document.getElementById("feedback");
  feedback.textContent = `Ai răspuns corect la ${corecte} din ${raspunsuriCorecte.length} întrebări.`;
  feedback.style.color = corecte === raspunsuriCorecte.length ? "green" : "red";
}

function checkAnswers() {
  const answers = ["0", "1", "10", "i", "sum"];
  const userAnswers = [
    document.getElementById("blank1").value.trim(),
    document.getElementById("blank2").value.trim(),
    document.getElementById("blank3").value.trim(),
    document.getElementById("blank4").value.trim(),
    document.getElementById("blank5").value.trim(),
  ];

  let correct = true;
  for (let i = 0; i < answers.length; i++) {
    if (userAnswers[i] !== answers[i]) {
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

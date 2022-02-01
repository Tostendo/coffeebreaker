import React, { useState } from "react";
import "./App.css";

function App() {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  const questions: string[] = [
    "Welche Frucht würdest du wählen, wenn es die einzige wäre, die du ab jetzt dein Leben lang essen kannst?",
    "Würdst du lieber in einer Wohnung ohne Toilette oder ohne Fenster wohnen?",
    "Welche Superkraft hättest du gerne?",
    "Kaufst du in Plastik verpackte Biogurke oder unverpackte, konventionelle Gurke?",
    "Welches Land würdest du gerne mal besuchen und warum?",
    "Was ist dein Lieblingsgewürz?",
    "Welches Tier wärst du gerne?",
    "Würdest du lieber den Meeresgrund oder das Weltall erkunden?",
    "Was ist das Seltsamste, das ein Gast je bei dir zu Hause getan hat?",
    "Welche Toilette ist dir besonders in Erinnerung?",
    "Wenn Tiere sprechen könnten, welches wäre das unhöflichste?",
    "Wie würdest du das Internet mit nur einem Satz zusammenfassen?",
    "In welcher Videospiele-Welt würdest du gerne leben?",
    "Was wäre der absolut schlimmste Name, den du deinem Kind geben könntest?",
    "Wenn du ab jetzt dein Leben lang nur ein Gericht essen könntest, was wäre das?",
    "Was war dein Lieblingsfilm in deiner Kindheit?",
    "Welches Buch, dass du gelesen hast, ist dir in Erinnerung geblieben und warum?",
    "Was macht ein Genie aus?",
    "Du kriegst heute 10.000€. Und musst es heute ausgeben. Was würdest du damit machen?",
  ];
  const [questionIndex, setQuestionIndex] = useState(
    getRandomInt(questions.length)
  );
  const [allRemainingQuestions, setAllRemainingQuestions] = useState(questions);

  const selectQuestion = () => {
    console.info(
      `length of remaining before select: ${allRemainingQuestions.length}`
    );
    const remaining = allRemainingQuestions.filter(
      (el, index) => index !== questionIndex
    );
    let tmp = getRandomInt(remaining.length);
    console.info(`new index: ${tmp}, length of remaining: ${remaining.length}`);
    setAllRemainingQuestions(remaining);
    setQuestionIndex(tmp);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ height: "100vh" }}>
        <p className="App-question">
          {allRemainingQuestions.length > 0
            ? allRemainingQuestions[questionIndex]
            : "Keine weiteren Fragen."}
        </p>
        <button className="App-button" onClick={selectQuestion}>
          Randomize
        </button>
      </header>
    </div>
  );
}

export default App;

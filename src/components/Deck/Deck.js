import { useState } from "react";

import Data from "../../Data/Data";
import "./style.css";
import SmallLogo from "../../assets/img/small-logo.png";

import FlashCard from "../FlashCard/FlashCard";
import Icon from "../Icon/Icon";

export default function Deck() {

  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  function flashCardAssemble() {
    if (questions.length === 0) {
      Data.sort(comparator);
      setQuestions([...Data]);
      return <></>;
    } else {
      return questions.map((question, index) => {
        const { front, back } = question;
        return <FlashCard
            key={front + index}
            index={index + 1}
            front={front + index}
            back={back}
            finished={(answer) => setAnswers(...answers, answer)}
          />;
      });
    }
  }

  function footerAssemble() {
    let result = <></>;

    if (answers.length === questions.length && questions.length > 0) {
      if (!answers.includes("error")) {
        result = (
          <div className="result">
            <span>
              <Icon icon="party" /> Parabéns!
            </span>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </div>
        );
      } else {
        result = (
          <div className="result">
            <span>
              <Icon icon="sad" /> Putz!
            </span>
            <p>Ainda faltam alguns... Mas não desanime!</p>
          </div>
        );
      }
    }

    return (
      <>
        {result}
        <p>
          {answers.length}/{questions.length} concluídos
        </p>
        {answers.map((answer) => <Icon icon={answer} />)}
      </>
    );
  }

  const flashcards = flashCardAssemble();
  const footer = footerAssemble();

  return (
    <div className="Deck">
      <header>
        <img src={SmallLogo} alt="ZapRecall" />
        <h1>Zap Recall</h1>
      </header>
      <main>{flashcards}</main>
      <footer>{footer}</footer>
    </div>
  );
}

function comparator() {
  return Math.random() - 0.5;
}

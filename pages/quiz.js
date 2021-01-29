/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativesForm';
import db from '../db.json';

// comentario adicionado no Linux

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>Carregando...</Widget.Header>

    <Widget.Content>
      <Loader>
        <div className="container">
          <div className="c1" />
          <div className="c2" />
          <div className="c3" />
          <div className="c4" />
        </div>
      </Loader>
    </Widget.Content>
  </Widget>
);

const Loader = styled.div`
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > div {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin: 10px;
    animation: bounce 1.5s 0.5s linear infinite;
  }
  .c1 {
    background-color: #00b0ff;
  }

  .c2 {
    background-color: #2bbbff;
    animation-delay: 0.1s;
  }

  .c3 {
    background-color: #41c6ff;
    animation-delay: 0.2s;
  }

  .c4 {
    background-color: #52d1ff;
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(1.4);
    }
  }
`;

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  nameButton,
  addResult,
  changeNameButton,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const [hasAlternativeSelected, setHasAlternativeSelected] = useState(!(selectedAlternative !== undefined));

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setHasAlternativeSelected(true);
            changeNameButton('carregando ...');
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                className={isQuestionSubmited ? 'cursor-not-allowed' : ''}
              >
                <input
                  disabled={isQuestionSubmited}
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => {
                    setSelectedAlternative(index);
                    setHasAlternativeSelected(false);
                  }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={hasAlternativeSelected}>
            {nameButton}
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ name, results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        <p>
          Parabéns por chegar até aqui
          <strong>{` ${name}!`}</strong>
        </p>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' perguntas!'}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result_${index}`}>
              {index + 1 <= 9 ? `#Pergunta 0${index + 1}:` : `#Pergunta ${index + 1}:`}
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
        <Link href="/">
          <span
            style={{
              color: '#fff',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Voltar para home
          </span>
        </Link>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

function Quiz() {
  const isBrowser = typeof window !== 'undefined';
  const queryString = isBrowser ? window.location.search : 'Erro ao tentar pegar a URL';
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('name');
  const [screenState, setScreenState] = useState(screenStates.QUIZ);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [nameButton, setNameButton] = useState('confirmar');

  function addResult(result) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setNameButton('confirmar');
  }, [currentQuestion]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            nameButton={nameButton}
            addResult={addResult}
            changeNameButton={setNameButton}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget name={name} results={results} />
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guilhermesantoss/bladequiz" />
    </QuizBackground>
  );
}

export default Quiz;

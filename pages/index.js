/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <input
                data-cy="name"
                type="text"
                placeholder="Diz aí o seu nome pra jogar :)"
                onChange={(e) => setName(e.target.value)}
                maxLength="20"
              />
              <button
                type="submit"
                disabled={name.length === 0}
                data-cy="submit"
              >
                {`Jogar ${name}`}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesse quizes incríveis que o pessoal da Imersão React fez:</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guilhermesantoss/bladequiz" />
    </QuizBackground>
  );
}

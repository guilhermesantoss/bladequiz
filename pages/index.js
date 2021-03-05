/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
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
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
              <Input
                data-cy="name"
                name="nomeDoUsuario"
                type="text"
                placeholder="Diz aí o seu nome pra jogar :)"
                onChange={(e) => setName(e.target.value)}
                value={name}
                maxLength="20"
              />
              <Button
                data-cy="submit"
                type="submit"
                disabled={name.length === 0}
              >
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkEterno, index) => {
                const [projectName, gitHubUser] = linkEterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <li key={index}>
                    <Widget.Topic href={linkEterno}>
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guilhermesantoss/bladequiz" />
    </QuizBackground>
  );
}

import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Head from 'next/head';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Quiz Rocket League</title>
        <meta name="title" content="Quiz Rocket League" />
        <meta name="description" content="Página criada durante a semana da Alura Imersão React v2 feita com Next.js" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bladequiz.vercel.app/" />
        <meta property="og:title" content="Quiz Rocket League" />
        <meta property="og:description" content="Página criada durante a semana da Alura Imersão React v2 feita com Next.js" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bladequiz.vercel.app/" />
        <meta property="twitter:title" content="Quiz Rocket League" />
        <meta property="twitter:description" content="Página criada durante a semana da Alura Imersão React v2 feita com Next.js" />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guilhermesantoss" />
      </QuizBackground>
    </>
);
}

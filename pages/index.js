import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import MetaData from '../src/components/MetaData';
import QuizContainer from '../src/components/QuizContainer';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MetaData />
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
            <Widget.Content>
              <Widget.Input />
            </Widget.Content>
            <Widget.Content>
              <Link href="/quiz">
                <Widget.Button>Jogar</Widget.Button>
              </Link>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>Dá uma olhada nesse quizes incríveis que o pessoal da Imersão React v2 / Next.js fez:</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/guilhermesantoss/bladequiz" />
      </QuizBackground>
    </>
  );
}

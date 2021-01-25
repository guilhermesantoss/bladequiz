import db from '../../../db.json';
import Head from 'next/head';

function MetaData() {
  return (
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
      <meta property="og:image" content={db.bg} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bladequiz.vercel.app/" />
      <meta property="twitter:title" content="Quiz Rocket League" />
      <meta property="twitter:description" content="Página criada durante a semana da Alura Imersão React v2 feita com Next.js" />
      <meta property="twitter:image" content={db.bg} />
    </Head>
  );
}

export default MetaData;
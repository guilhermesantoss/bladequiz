/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import db from '../../../db.json';

function MetaData() {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Quiz Rocket League</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default MetaData;

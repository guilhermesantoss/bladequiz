/* eslint-disable no-console */
import React from 'react';

export default function QuizDaGaleraPage(props) {
  console.log(props);
  return (
    <h1>Desafio da próxima aula com as animações</h1>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      dbExterno,
    },
  };
}

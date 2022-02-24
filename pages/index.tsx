// import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'

const Home: NextPage = ({ repositories, date }: any) => {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo: any) => (
            <li key={repo}>{ repo }</li>
          )
        )}
      </ul>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/crabominable/repos')

  const data = await response.json();
      
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4,
  }
}

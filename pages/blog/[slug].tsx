import { GetStaticPaths, GetStaticProps } from 'next';

export default function BlogPost({ date }: any) {
  return <h1>{ date }</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  /* const response = await fetch('https://api.github.com/users/crabominable/repos')
  const data = await response.json(); 
  const repositoryNames = data.map((item: any) => item.name) */

  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  }
}
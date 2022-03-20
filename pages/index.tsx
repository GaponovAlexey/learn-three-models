import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../Components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Three</title>
        <link rel='icon' href='#!' />
      </Head>
      <Main />
    </div>
  )
}

export default Home

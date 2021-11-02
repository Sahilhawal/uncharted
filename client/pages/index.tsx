import type { NextPage } from 'next'
import Head from 'next/head'
import 'antd/dist/antd.css'
import styles from '../styles/Home.module.scss'

import Landing from './landing/index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Landing/>
      </main>
    </div>
  )
}

export default Home
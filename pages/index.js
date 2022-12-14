import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import IPhone from '../components/IPhone'
import MacBook from '../components/MacBook'
import Slideshow from '../components/Slideshow '
import TwoCards from '../components/TwoCards'
import Watch from '../components/Watch'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apple 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <IPhone/>
      <TwoCards/>
      <Watch/>
      <MacBook/>
      <Slideshow/>
      <Footer/>
    </div>
  )
}

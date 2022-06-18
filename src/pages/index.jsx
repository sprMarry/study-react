import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { Footer } from 'src/components/Footer';
import { useCallback } from 'react';


export default function Home() {
  const handleClick = useCallback((e) => {
    const foo = 1;

    console.log(e.target.href);
    e.preventDefault();
    alert(foo)
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>ボタン</a>
      <Main page="index" />
      <Footer />
    </div>
  )
}

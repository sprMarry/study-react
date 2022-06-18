import Head from 'next/head';
import Link from 'next/link';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { Footer } from 'src/components/Footer';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const handleClick = useCallback((e) => {
    const foo = 1;

    console.log(e.target.href);
    e.preventDefault();
    alert(foo)
  }, []);

  useEffect(() => {
    console.log('マウント');
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('アンマウント');
      document.body.style.backgroundColor = '';
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href='/about'>
        <a onClick={handleClick}>ボタン</a>
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  )
}

import Head from 'next/head';
import React from 'react';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Matthew develops software</title>
      </Head>
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Matthew develops ☼ software</h1>
        </div>
      </main>
    </>
  );
}

import Head from 'next/head';
import React from 'react';
import Grid from '../components/Grid';

import { attributes } from '../content/index.md';
import styles from '../styles/index.module.css';

export default function Home() {
  const { title, posts } = attributes;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Matthew develops software</title>
      </Head>
      <header className="bg-white p-8 pb-4 w-screen fixed">
        <h1 className={styles.title}>{title}</h1>
      </header>
      <main className={styles.mainContainer}>
        <Grid data={posts} />
      </main>
    </>
  );
}

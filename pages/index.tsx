import Head from 'next/head';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { attributes } from '../content/index.md';
import Grid from '../components/Grid';

export default function Home() {
  const { title, posts } = attributes;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Matthew develops software</title>
      </Head>
      <header className="bg-white p-4 pl-8 pt-5 w-screen fixed z-50 flex row-span-2">
        <h1 className="font-semibold text-lg flex-shrink-0">{title}</h1>
        <div className="mt-2 ml-12 font-mono text-xs">
          <Marquee>
            Designer turned developer with 7+ years of experience designing art
            and technology products and 3 years developing software
            applications. Designer turned developer with 7+ years of experience
            designing art and technology products and 3 years developing
            software applications.
          </Marquee>
        </div>
      </header>
      <main className="p-6 overflow-hidden">
        <Grid data={posts} />
      </main>
    </>
  );
}

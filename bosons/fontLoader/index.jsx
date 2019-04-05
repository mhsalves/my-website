import React from 'react';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

function FontLoader() {
  return (
    <LazyLoad>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i" rel="stylesheet" />
      </Head>
    </LazyLoad>
  );
}

export default FontLoader;

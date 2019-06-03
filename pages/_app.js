import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import Header from "../components/Header";
import "../styles/app.scss"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Teko:700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}

export default MyApp;

import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from '../bosons/globalCSS';
import { base } from '../bosons/themes';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (ctx) {
      pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    }

    return { pageProps };
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <ThemeProvider theme={base}>
        <Container>
          <GlobalCSS />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;

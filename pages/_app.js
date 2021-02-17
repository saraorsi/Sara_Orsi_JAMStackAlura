import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import theme from '../src/theme'
import GlobalStyle from '../src/theme/GlobalStyle/'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FunFuns -- web studio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

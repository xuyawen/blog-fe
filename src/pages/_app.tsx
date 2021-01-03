import { AppProps } from 'next/app'
import React from 'react';
import Layout from '../layout';
import '../styles/app.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
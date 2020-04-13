import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>react-flight next.js</title>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.js" integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg=" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

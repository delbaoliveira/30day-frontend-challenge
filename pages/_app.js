import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>30 Day Front-End Challenge</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

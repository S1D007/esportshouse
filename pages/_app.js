import '../styles/globals.css'
// import { store } from '../store/store'
// import { Provider } from 'react-redux'
import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import Navbar from '../components/utils/Navbar'
import Mobnav from '../components/utils/Mobnav'
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  useEffect(() => {
    const signup = localStorage.getItem("signup")
    if (!signup) {
      route.push("/account/signup")
    }
  },[])
  return (
    // <Provider store={store}>
      <main>
      <Mobnav/>
      <NextNProgress/>
        <Head>
        <meta name="a.validate.02" content="tES2M1OGi7uuSro9DTID_AjFqX0h8bH-xUNb" />
      <meta name="monetag" content="d1baa147a249c246b0c984996f5695f7"></meta>
    <script data-cfasync="false" type="text/javascript" src="//buzzonclick.com/a/display.php?r=6521458"></script> 
     <script data-cfasync="false" src="//asacdn.com/script/ippg.js" data-adel="inpage" zid="6521470" rr="30" mads="2"></script> 
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3222143527106963"
     crossorigin="anonymous"></script>
    </Head>
        <Component {...pageProps} />
        <Navbar />
      </main>
    // </Provider>
  )
}

export default MyApp

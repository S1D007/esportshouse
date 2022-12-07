import '../styles/globals.css'
// import { store } from '../store/store'
// import { Provider } from 'react-redux'
import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import Navbar from '../components/utils/Navbar'
import Mobnav from '../components/utils/Mobnav'
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  const route = useRouter()
  // useEffect(() => {
  //   const signup = localStorage.getItem("signup")
  //   if (!signup) {
  //     route.push("/account/signup")
  //   }
  // },[])
  return (
    // <Provider store={store}>
      <main>
      <Mobnav/>
      <NextNProgress/>
        <Component {...pageProps} />
        {/* <Navbar /> */}
      </main>
    // </Provider>
  )
}

export default MyApp

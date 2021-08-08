import 'tailwindcss/tailwind.css'
import Nav from '../components/nav'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  
  return (
    <div id="mainContainer" className="min-h-screen m-0 bg-gray-900 font-roboto font-extralight">
      <Head>
        <title>Muratcan Şentürk</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400&display=swap" rel="stylesheet"></link>
        <script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-database.js"></script>
      </Head>
      <style jsx global>{`
      body, html {
        min-height: 100%;
      }
    `}</style>
      <Nav/>
      <div id="contentContainer" className="flex flex-row justify-center items-center w-full" style={{minHeight: 'calc(100vh - 5rem)'}}>
        <Component {...pageProps} />
      </div>
    </div>

  )
}

export default MyApp

import Header from '../components/Header/'
import '../styles/reset.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    </>
}

export default MyApp

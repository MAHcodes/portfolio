import Header from '../components/Header/'
import '../styles/reset.css'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
}

export default MyApp

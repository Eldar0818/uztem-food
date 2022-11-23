import '../styles/globals.css'
import Layout from '../components/Layout'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <PayPalScriptProvider
         options={{
          "client-id": "AT_wRSPUqU2bC4QcdWk-gq8QLF5JAnROmc62ONkkDcKMISwCwVZpYn0HbI_z_es9pqLWv04h0wUF4_iO",
          components: "buttons",
          currency: "SEK",
          "disable-funding": "credit,card,p24"
        }}
      >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PayPalScriptProvider>
    </Provider>
  ) 
}

export default MyApp

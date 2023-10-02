import type { AppProps } from 'next/app';
import { globalStyles } from '@/styles/global';

import { Container } from '@/styles/pages/app';
import { ShoppingCartContextProvider } from '@/context/shoppingCartContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <Container>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
    </ShoppingCartContextProvider>
  )
}

import type { AppProps } from 'next/app';
import { globalStyles } from '@/styles/global';

import { Container } from '@/styles/pages/app';
import { ShoppingCartContextProvider } from '@/context/shoppingCartContext';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ShoppingCartContextProvider>
  )
}

import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'

import LogoImg from '../assets/Logo.svg'
import { Container, Header, IconCartContainer } from '@/styles/pages/app'
import { ShoppingCartContextProvider } from '@/context/shoppingCartContext'
import { Handbag } from 'phosphor-react'
import { DialogCartShirts } from '@/components/dialogCartShirts'
import * as Dialog from '@radix-ui/react-dialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <Container>
        <Header>
          <Image src={LogoImg} alt='ignite-shop' />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconCartContainer>
                <Handbag size={24} />
              </IconCartContainer>
            </Dialog.Trigger>
            <DialogCartShirts />
          </Dialog.Root>
        
        </Header>
        
        <Component {...pageProps} />
      </Container>
    </ShoppingCartContextProvider>
  )
}

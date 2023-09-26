import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '@/styles/global'

import LogoImg from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt='ignite-shop' />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}

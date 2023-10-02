import { HomeContainer, IconCartContainer, InfoContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

import Head from "next/head";
import { Handbag } from "phosphor-react";
import { Header } from "@/components/Header";

interface HomeProps {
  products: {
    id: string;
    name: string;
    image: string;
    price_format: string;
    price: number;
  }[]
}

export default function Home({products}:HomeProps) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider ">
        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.image}  alt='' width={520} height={480} />
                <footer>
                  
                  <InfoContainer>
                    <strong>{product.name}</strong>
                    <span>{product.price_format}</span>
                  </InfoContainer>
                  
                  <IconCartContainer>
                    <Handbag size={32} />
                  </IconCartContainer>

                </footer>
              </Product>
            </Link>
          )
        })

        }
      </HomeContainer>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: (price.unit_amount! / 100),
      price_format: new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
      }).format((price.unit_amount! / 100))
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 Hours 
  }
}

import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import { useContext, useState } from "react";
import Stripe from "stripe";
import Head from "next/head";
import { Shirt, ShoppingCartContext } from "@/context/shoppingCartContext";
import { Header } from "@/components/Header";

export interface ProductProps {
    product: Shirt
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_Oi2DOJAmf9UNoP'} }
        ],
        fallback: "blocking"
    }
}

export default function Product ({product}:ProductProps) {
    const { addShirtFromShoppingCart } = useContext(ShoppingCartContext)

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    
    async function handleAddShirtFromShoppingCart() {
        const data: Shirt = {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            price_format: product.price_format,
            description: product.description,
            defaultPriceId: product.defaultPriceId
        }
        addShirtFromShoppingCart(data)
    }
    
    // async function handleBuyProduct() {
    //     try{
    //         setIsCreatingCheckoutSession(true)
    //         const response = await axios.post('/api/checkout', {
    //             priceId: product.defaultPriceId
    //         })

    //         const { checkoutUrl } = response.data

    //         window.location.href = checkoutUrl

    //     } catch (err) {
    //         setIsCreatingCheckoutSession(false)
    //         alert('Falha ao redirecionar o usuário para o checkout')
    //     }
    // }


    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <Header />

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.image} alt="shirt" width={520} height={420} />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price_format}</span>

                    <p>{product.description}</p>
                
                    <button onClick={handleAddShirtFromShoppingCart} disabled={isCreatingCheckoutSession}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}


export const getStaticProps:GetStaticProps<any, { id: string }> = async ({ params }) => {
    const ProductId = params.id;

    const product = await stripe.products.retrieve(ProductId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price


    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                image: product.images[0],
                price: (price.unit_amount! / 100),
                price_format: new Intl.NumberFormat('pt-BR', {
                  style: "currency",
                  currency: "BRL"
                }).format((price.unit_amount! / 100)),
                description: product.description,
                defaultPriceId: price.id
              }
        },
        revalidate: 60 * 60 * 1 // 1 Hour
    }
}
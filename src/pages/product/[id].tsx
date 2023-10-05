import { stripe } from "@/lib/stripe"
import { BtnAmountContainer, ImageContainer, ProductContainer, ProductDetails, BtnAmount } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import { useContext, useState } from "react";
import Stripe from "stripe";
import Head from "next/head";
import { Shirt, ShoppingCartContext } from "@/context/shoppingCartContext";
import { Header } from "@/components/Header";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
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
    const route = useRouter()
    
    const { addShirtToShoppingCart } = useContext(ShoppingCartContext)

    const [amount, setAmount] = useState(1)
    
    function handleAddOrRemoveShirt (type: 'more' | 'less') {
        if(type === 'more') {
            setAmount(amount + 1)
        } else {
            if (amount === 1) {
                return
            } else {
                setAmount(amount - 1)
            }
        }
    }

    async function handleAddShirtFromShoppingCart() {
        const data: Shirt = {
            id: product.id,
            name: product.name,
            image: product.image,
            amount: amount,
            price: product.price,
            price_format: product.price_format,
            description: product.description,
            defaultPriceId: product.defaultPriceId
        }
        addShirtToShoppingCart(data)
        handleClearAmountAndInfoBuy()
    }

    function handleClearAmountAndInfoBuy () {
        if(amount === 1) {
            toast.success(`${amount} ${product.name} foi adicionada no carrinho!`, {
                icon: true
            })
        } else {
            toast.success(`${amount} ${product.name} foram adicionadas no carrinho!`, {
                icon: true
            })
        }
        route.back()
    }

    return (
        <>
            <Head>
                <title>{`${product.name} | Ignite Shop`}</title>
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
                
                    <footer>

                        <BtnAmountContainer>
                            <BtnAmount onClick={() => handleAddOrRemoveShirt('less')}>-</BtnAmount>
                                <div>{amount}</div>
                            <BtnAmount onClick={() => handleAddOrRemoveShirt('more')}>+</BtnAmount>
                        </BtnAmountContainer> 
                     
                        <button onClick={handleAddShirtFromShoppingCart}>
                            Colocar na sacola
                        </button>
                    </footer>
                
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
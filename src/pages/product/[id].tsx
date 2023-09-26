import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import Stripe from "stripe";

interface ProductProps {
    product: {
        id: string,
        name: string,
        image: string,
        price: string,
        description: string,
        defaultPriceId: string
    }
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
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.image} alt="shirt" width={520} height={420} />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>
            
                <button type="submit">Compar Agora</button>
            </ProductDetails>
        </ProductContainer>
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
                price: new Intl.NumberFormat('pt-BR', {
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
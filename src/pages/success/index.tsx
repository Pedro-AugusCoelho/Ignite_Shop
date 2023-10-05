import { ContainerArrayImage, ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Head from "next/head";


interface product {
    id: string;
    quantity: number;
    name: string;
    image: string;
}
interface SuccessProps {
    customerName: string;
    product: product[]
}

export default function Success({ customerName, product }: SuccessProps) {

    function formatNamesWithQuantity(product: product[]) {
        const formattedNames = product.map((item, index) => {
            if (index === product.length - 1) {
            return `e ${item.quantity} ${item.name}`;
            } else if (index === product.length - 2) {
                return `${item.quantity} ${item.name}`;
            }
            return `${item.quantity} ${item.name},`;
            });
        return formattedNames.join(' ');
    }

    const formattedNamesWithQuantity = formatNamesWithQuantity(product);


    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex"/>
            </Head>

            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                
            <ContainerArrayImage>
                {product && product.map(item => {
                    return (
                        <ImageContainer key={item.id}>
                            <Image src={item.image} alt="" width={130} height={130} />
                        </ImageContainer>
                    )
                })
                }
            </ContainerArrayImage>

                <p>
                    <>Uhuul <strong>{customerName}</strong>, sua compra de </>
                    
                    <>{formattedNamesWithQuantity}</>
                    
                    <> já está a caminho da sua casa.</>
                </p>

                <Link href="/">
                        Voltar ao catálogo
                </Link>

            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details!.name;
    
    const products = session.line_items!.data.map((product) => {
        const item: any = product
        
        return {
            id: item.id,
            quantity: item.quantity,
            name: item.price!.product.name,
            image: item.price!.product.images[0]
        }
    })

    return {
        props: {
            customerName,
            product: products
        }
    }
}
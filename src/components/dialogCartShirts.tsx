import { Shirt, ShoppingCartContext } from '@/context/shoppingCartContext';
import { CloseButton, Overlay, Content, TitleCart, CardContainer, Card, ImageContainer, InfoProduct, InfoPriceContainer, BtnBuyProducts, Viewport, ScrollAreaRoot, Scrollbar, ScrollAreaThumb } from '@/styles/pages/dialogCartShirts';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import Image from "next/image";

export function DialogCartShirts () {
    const { shirts, removeShirtToShoppingCart, buyProductStripe } = useContext(ShoppingCartContext)

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const totalPrice = shirts.reduce((acc: number, product: Shirt) => acc + (product.price * product.amount), 0)
    const formatPrice = new Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(totalPrice)

    function handleRemoveShirtToShoppingCart (id:string) {
        removeShirtToShoppingCart(id)
    }

    async function handleBuyProductStripe() {
        try{
            setIsCreatingCheckoutSession(true)
            const url = await buyProductStripe()

            if (url) {
                window.location.href = url
            }
        } catch (err){
            setIsCreatingCheckoutSession(false)
            console.log(err)
        }
    }
    
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>            
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <TitleCart>Sacola de compras</TitleCart>

                <ScrollAreaRoot>
                    <Viewport>
                        <CardContainer>
                                {shirts.length > 0 && shirts.map(product => {
                                    return(
                                        <Card key={product.id}>
                                            <ImageContainer>
                                                <Image src={product.image} alt='' width={100} height={90} />
                                            </ImageContainer>

                                            <InfoProduct>
                                                <span>{product.name}</span>
                                                <span>{product.amount} {product.amount === 1 ? 'Peça' : 'Peças'}</span>
                                                <strong>{product.price_format}</strong>
                                                <button onClick={() => handleRemoveShirtToShoppingCart(product.id)}>
                                                    Remover
                                                </button>
                                            </InfoProduct>
                                        </Card>
                                    )
                                })
                                }
                        </CardContainer>
                    </Viewport>
                    <Scrollbar orientation="vertical">
                        <ScrollAreaThumb />
                    </Scrollbar>
                </ScrollAreaRoot>

                <footer>
                    <InfoPriceContainer>
                        <p>Quantidade</p>
                        <span>{shirts.length} {shirts.length === 1 ? 'Item' : 'Itens'}</span>
                        <strong>Valor Total</strong>
                        <span>{formatPrice}</span>
                    </InfoPriceContainer>

                    <BtnBuyProducts onClick={handleBuyProductStripe} disabled={isCreatingCheckoutSession}>
                        Finalizar Conta
                    </BtnBuyProducts>
                </footer>
            </Content>
        </Dialog.Portal>
    )
}
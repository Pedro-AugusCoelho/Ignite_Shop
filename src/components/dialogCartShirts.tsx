import { Shirt, ShoppingCartContext } from '@/context/shoppingCartContext';
import { CloseButton, Overlay, Content, TitleCart, CardContainer, Card, ImageContainer, InfoProduct, InfoPriceContainer, BtnBuyProducts, Viewport, ScrollAreaRoot, Scrollbar, ScrollAreaThumb } from '@/styles/pages/dialogCartShirts';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext } from 'react';
import Image from "next/image";

export function DialogCartShirts () {
    const { shirts } = useContext(ShoppingCartContext)

    const totalPrice = shirts.reduce((acc: number, product: Shirt) => acc + product.price, 0)
    const formatPrice = new Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(totalPrice)
    
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
                                                <strong>{product.price_format}</strong>
                                                <button>Remover</button>
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
                        <span>{shirts.length} Itens</span>
                        <strong>Valor Total</strong>
                        <span>{formatPrice}</span>
                    </InfoPriceContainer>

                    <BtnBuyProducts>
                        Finalizar Conta
                    </BtnBuyProducts>
                </footer>
            </Content>
        </Dialog.Portal>
    )
}
import { ShoppingCartContext } from '@/context/shoppingCartContext';
import { CloseButton, Overlay, Content, Title, CardContainer, Card } from '@/styles/pages/dialogCartShirts';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext } from 'react';

export function DialogCartShirts () {
    const { shirts } = useContext(ShoppingCartContext)
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>            
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <Title>Sacola de compras</Title>

                <CardContainer>
                    {shirts.length > 0 && shirts.map(item => {
                        return(
                            <Card key={item.id}>
                                <p>parado</p>
                            </Card>
                        )
                    })

                    }
                </CardContainer>
            </Content>
        </Dialog.Portal>
    )
}
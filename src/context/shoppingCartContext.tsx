import axios from 'axios';
import { ReactNode, createContext, useState } from 'react'
import { toast } from "react-toastify";


export interface Shirt {
    id: string,
    name: string,
    image: string,
    price_format: string,
    amount: number,
    price: number,
    description: string,
    defaultPriceId: string
}

interface shoppingCartContextType {
    shirts: Shirt[]
    addShirtToShoppingCart: (data: Shirt) => void;
    removeShirtToShoppingCart: (id: string) => void;
    buyProductStripe: () => Promise<string>;
}

interface shirtContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as shoppingCartContextType)

export function ShoppingCartContextProvider({children}: shirtContextProviderProps) {
  
    const [shirts, setShirts] = useState<Shirt[]>([])

    function addShirtToShoppingCart (data: Shirt) {
        const findShirt = shirts.find(item => item.id === data.id)

        if (findShirt) {
            const updateShirt = shirts.map(item => {
                if(item.id === data.id) {
                    return {...item, amount: item.amount + data.amount}
                }

                return item
            })

            setShirts(updateShirt)
        } else {
            setShirts((state) => [...state, data])
        }
    }

    function removeShirtToShoppingCart (id: string) {
        const copyShirts = shirts.filter(item => item.id !== id)
        setShirts(copyShirts)
    }

    async function buyProductStripe() {
        try{
            if (!shirts || shirts.length === 0) {
                return
            }

            const items = shirts.map(item => {
                return {
                    price: item.defaultPriceId,
                    quantity: item.amount,
                }
            })

            const response = await axios.post('/api/checkout', {
                arrayShirts: items
            })

            const { checkoutUrl } = response.data

            return checkoutUrl
        } catch (err) {
            toast.error('Falha ao redirecionar o usuário para o checkout')
        }
    }


    return (
    <ShoppingCartContext.Provider value={{ shirts, addShirtToShoppingCart, removeShirtToShoppingCart, buyProductStripe }}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
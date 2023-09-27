import { ReactNode, createContext, useState } from 'react'


export interface Shirt {
    id: string,
    name: string,
    image: string,
    price: string,
    description: string,
    defaultPriceId: string
}

interface shoppingCartContextType {
    shirts: Shirt[]
    addShirtFromShoppingCart: (data: Shirt) => void;
}

interface shirtContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as shoppingCartContextType)

export function ShoppingCartContextProvider({children}: shirtContextProviderProps) {
  
    const [shirts, setShirts] = useState<Shirt[]>([])

    function addShirtFromShoppingCart (data: Shirt) {
        setShirts((state) => [...state, data])
    }


    return (
    <ShoppingCartContext.Provider value={{ shirts, addShirtFromShoppingCart }}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
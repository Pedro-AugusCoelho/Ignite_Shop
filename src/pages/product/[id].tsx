import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product () {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>
            <ProductDetails>
                <h1>Camiseta 1</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat repellat quam modi aperiam, tempore, voluptate delectus earum perspiciatis facilis, a quas molestiae consequuntur maxime nemo ut saepe fugit deserunt officiis.</p>
            
                <button type="submit">Compar Agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}
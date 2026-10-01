import { useState } from 'react'
import ProductCard from './ProductCard'
import DiscountButton from './DiscountButton'

export default function Catalog ({ products }) {
    const [generalDiscount, setGeneralDiscount] = useState(0)
    return (
        <div>
            <h1> Catalog </h1>
            <DiscountButton
            generalDiscount={generalDiscount}
            setGeneralDiscount={setGeneralDiscount}
            />

            <hr />
            {products.map((product) => (
                <ProductCard
                key={product.id}
                product={product}
                generalDiscount={generalDiscount}
                
                />
            ))
            }
                
        </div>
    )
}
export default function ProductCard({ product, generalDiscount }) {
    
    const totalDiscount = product.discount + generalDiscount
    const finalPrice = product.price - (product.price * totalDiscount) / 100;
    return (
        <article>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>

      {totalDiscount >0 ? (
        <p>
            <s>
                {product.price} rub
            </s>{' '}
            <b>
                {finalPrice.toFixed(2)} reb
            </b>{' '}
            (Discount: {totalDiscount}%)     
        </p>

      ) : (
        <p>
            {product.price} rub
        </p>
      )
    }
    </article>
    );
  }

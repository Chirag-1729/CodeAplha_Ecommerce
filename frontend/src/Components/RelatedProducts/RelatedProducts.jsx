// import React from 'react'
// import './RelatedProducts.css'
// import data_product from '../Assets/data'
// import Item from '../items/item'

// const RelatedProducts = () => {
//   return (
//     <div className='relatedproducts'>
//         <h1>RelatedProducts</h1>
//         <hr/>
//         <div className="relatedproducts-item">
//         {data_product.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//         })}
//         </div>
//     </div>
//   )
// }

// export default RelatedProducts


import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../items/item';

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-backend-5tcn.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => {
        // You can filter for related items if needed
        const limited = data.slice(0, 4); // Example: first 4 as related
        setRelatedProducts(limited);
      })
      .catch((err) => console.error("Failed to fetch related products", err));
  }, []);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { addToDb } from "../../utilities/fakedb";
import { CartContext, ProductContext } from "../Layout/Main";
import Product from "../Products/Product";


const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);

    let newCart = [];

    const exist = products.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((exist) => exist.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
    toast.success("Product Added!", { autoClose: 500 });
    // alert('Product added to cart')
  };
  // console.log(products);
  return (
    <div>
        {/* <div>
            <Search />
        </div> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

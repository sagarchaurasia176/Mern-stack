import { useState } from "react";
import Cart from "./Cart";
const Data = [
  {
    name: "Acer Laptop",
    ProductImg:
      "https://m.media-amazon.com/images/I/617rprfdhRL._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹40000",
  },

  {
    name: "HpLaptop",
    ProductImg:
      "https://m.media-amazon.com/images/I/514KSP5IwIL._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹20000",
  },
  {
    name: "Msi Laptop",
    ProductImg:
      "https://m.media-amazon.com/images/I/51GGNToj7aL._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹100000",
  },
  {
    name: "Lenvo Laptop",
    ProductImg:
      "https://m.media-amazon.com/images/I/51lbCKFN1ML._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹40000",
  },

  {
    name: "Tecno Laptop",
    ProductImg:
      "https://m.media-amazon.com/images/I/714uDp4dabL._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹20000",
  },
  {
    name: "Acer Laptop 12gen ",
    ProductImg:
      "https://m.media-amazon.com/images/I/617rprfdhRL._AC_UY327_FMwebp_QL65_.jpg",
    productPrice: "₹40000",
  },
];

export default function HeroPage() {
  let [products, setProducts] = useState(0);

  const addHandler = () => {
    setProducts(products + 1);
    <Cart dtl={products}></Cart>;
  };

  return (
    <>
      <div class="card">
        {Data.map((productDlt) => (
          <>
            <image>
              <img src={productDlt.ProductImg} width={200}></img>
              <p>{productDlt.name}</p>
              <p>
                <b>{productDlt.productPrice}</b>
              </p>
              <button onClick={addHandler}>Add To cart</button>
            </image>
          </>
        ))}
      </div>
    </>
  );
}

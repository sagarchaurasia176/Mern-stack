import React from "react";

export default function Product() {
  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];
  const totalRevenue = itemsSold.reduce(
    (acc, product) => acc + product.price,
    0
  );
  return (
    <>
      <table border="1px">
        <thead>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>qty</th>
        </thead>
        <tbody>
          {/* map () diretcly start from curry brackets  */}
          {itemsSold.map((item , index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Toal Revenue</td>
            <td>${totalRevenue}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

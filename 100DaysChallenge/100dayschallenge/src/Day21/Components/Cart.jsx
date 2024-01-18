export default function Cart(props) {
  const { products } = props;
  return (
    <>
      <i class="fa-solid fa-cart-shopping">
        <sup>{products}</sup>
      </i>
    </>
  );
}

import ButtonDark from "./Dark"
import Cart from "./Cart"
export default function Navabar() {
    return (
        <>
            <div className="containerNavbar">
                <ButtonDark />
                <div className="text">Lapy-Shop</div>
                    <Cart/>
            </div >
        </>

    )
}


import Cart from "./Cart"
import ButtonDark from "./Dark"
export default function Navabar() {
    return (
        <>
            <div className="containerNavbar">
                <ButtonDark />

                <div className="text">Lapy-Shop
                </div>
                <Cart />
            </div >
        </>

    )
}


import { RiShoppingCartLine } from "react-icons/ri"
import { RiArrowDownSLine } from "react-icons/ri"
// import CartContent  from './components/CartContent'

const CartWidget = () =>{
        return (
            <div>
            <button><RiShoppingCartLine /></button> 
            <button><RiArrowDownSLine /></button>
            </div>
        );
    }

export default CartWidget;
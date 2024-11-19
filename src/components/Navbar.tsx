import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useCartSelector } from "../hooks/useCartSelector";

const Navbar: React.FC = () => {
const itemQty = useCartSelector((item)=> item.cart.items.reduce((value,item)=>value + item.quantity,0))

  return (
    <div className="flex justify-between items-center bg-slate-700 py-3 px-3">
      <p className="text-white text-lg">Shopping Cart</p>
      <input
        className="border border-slate-100 outline-none rounded-md px-3 py-2"
        placeholder="Search a product"
      />
      <Link to="/carts">
        <button className=" flex  items-center bg-green-500 rounded-md text-white py-3 px-2">
          <IoMdCart />
           ({itemQty})
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

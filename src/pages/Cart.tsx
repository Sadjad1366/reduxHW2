import { Link } from "react-router-dom";
import { useCartDispatch } from "../hooks/useCartDispatch";
import { useCartSelector } from "../hooks/useCartSelector";
import { addToCart, CartItem, removeFromCart } from "../redux/cartSlice";
import { ICard } from "../types/cardType";

const Cart: React.FC = () => {
  const productItem = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const totalPrice = productItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function addHandle(item: CartItem) {
    dispatch(addToCart(item));
  }
  function removeHandle(id: number) {
    dispatch(removeFromCart(id));
  }
  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {productItem.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="text-center px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </td>
                <td className="flex justify-center px-20 py-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        removeHandle(item.id);
                      }}
                      className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div className="ms-3">
                      <p>{item.quantity}</p>
                    </div>
                    <button
                      onClick={() => addHandle(item)}
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {productItem.length > 0 && (
            <div className="bg-gray-400 text-center py-3 rounded-lg">
              Total Price: {totalPrice}
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {!!totalPrice && (
            <button className="bg-slate-700 text-white rounded-lg px-4 py-3 m-2 shadow-xl">
              <Link to='/register'>Proceed to Check</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

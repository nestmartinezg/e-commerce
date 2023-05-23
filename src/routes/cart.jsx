import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, increaseCart } from '../redux/cartSlice';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalCart = () => {
    let total = 0;
    cart.cartProducts.forEach(cartItem => {
      total = total + cartItem.precio * cartItem.cantidad;
    });

    return total;
  };

  const deleteFromCart = cartItem => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = cartItem => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = cartItem => {
    dispatch(increaseCart(cartItem));
  };

  return (
    <div className="container mx-auto p-3 mt-5 px-40">
      {cart.cartProducts.length < 1 ? (
        <div className="flex justify-center">
          <NavLink to={'/'} className="bg-red-400 p-3 text-white">
            No hay productos, volver al home
          </NavLink>
        </div>
      ) : (
        <>
          <h1 className="font-semibold text-4xl mb-5">Tu Carrito</h1>

          <div className="flex justify-between border-b-2 pb-4">
            <span className="text-slate-400">Producto</span>
            <span className="text-slate-400">Cantidad</span>
            <span className="text-slate-400">Total</span>
          </div>

          {cart.cartProducts.map(cartItem => (
            <div className="grid grid-cols-3 mt-5 items-center">
              <div className="flex gap-5">
                <Card>
                  <img
                    src={cartItem.image}
                    alt=""
                    className="h-24 w-24 object-contain "
                  />
                </Card>

                <div className="flex flex-col gap-2">
                  <span className="text-lg">{cartItem.name}</span>
                  <span className="text-lg">${cartItem.precio}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash h-6 w-6 text-red-400 hover:cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={() => deleteFromCart(cartItem)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center gap-10 border border-black rounded-md bg-white h-10 mt-3  ">
                <button
                  className="text-3xl"
                  onClick={() => handleDecreaseCart(cartItem)}
                >
                  -
                </button>
                <span>{cartItem.cantidad}</span>
                <button
                  className="text-3xl"
                  onClick={() => handleIncreaseCart(cartItem)}
                >
                  +
                </button>
              </div>

              <span className="font-semibold text-xl text-end">
                ${cartItem.cantidad * cartItem.precio}
              </span>
            </div>
          ))}

          <div className="flex  border-t-2 mt-5 py-10 items-center justify-end gap-3">
            <div className="flex flex-col gap-3">
              <span className="text-xl">Subtotal ${totalCart()}</span>
              <button className="w-full p-3 rounded-lg bg-yellow-400 ">
                Check Out
              </button>

              <NavLink to={'/'}>
                <div className="flex gap-2 items-center text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continuar Comprando</span>
                </div>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

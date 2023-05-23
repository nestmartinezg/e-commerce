import Card from './Card';
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Producto = ({ producto, index }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, index) => {
    const precio = (index + 1) * 100;
    const productTemp = { ...product, cantidad: 1, precio };

    dispatch(addToCart(productTemp));
    window.alert('Producto agregado');
  };

  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            src={producto.image}
            alt=""
            className="h-40 w-40 object-contain"
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-md">{producto.name}</span>
          <span>{producto.type}</span>
          <span className="font-semibold">${(index + 1) * 100}</span>

          <button
            className="rounded-lg bg-white w-full p-1"
            onClick={() => addToCartHandler(producto, index)}
          >
            Agregar al carro
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Producto;

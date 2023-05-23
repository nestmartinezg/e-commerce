import { useState, useEffect } from 'react';

import Producto from '../components/Producto';

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then(response => response.json())
      .then(data => {
        const { amiibo } = data;
        setProductos(amiibo);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="text-center mt-3">Cargando ...</p>;
  } else {
    return (
      <div className="container mx-auto p-3 grid grid-cols-4 gap-4">
        {productos.slice(52, 64).map((producto, index) => (
          <Producto producto={producto} index={index} key={producto.name} />
        ))}
      </div>
    );
  }
};

export default ProductosPage;

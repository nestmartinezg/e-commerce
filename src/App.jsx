import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const cartState = useSelector(state => state.cart);
  console.log(cartState);

  return (
    <>
      <Navbar />
      <main className=" bg-white min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;

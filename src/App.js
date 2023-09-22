import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product_home from './pages/Product_home';
import Detail from './pages/Detail';
import Carts from './pages/Carts';
import Login from './pages/Login';
import CheckOut from './pages/CheckOut';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product_home />} />
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
      </Routes>
  );
}

export default App;
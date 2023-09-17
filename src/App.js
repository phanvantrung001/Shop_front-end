import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product_home from './pages/Product_home';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product_home />} />
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
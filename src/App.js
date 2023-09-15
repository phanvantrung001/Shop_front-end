import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product_home from './pages/Product_home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product_home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
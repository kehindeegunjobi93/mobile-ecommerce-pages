import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import ProductDetail from "pages/ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

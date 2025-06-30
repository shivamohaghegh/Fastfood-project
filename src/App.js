import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MainLayout from "./Components/MainLayout/MainLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/product" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

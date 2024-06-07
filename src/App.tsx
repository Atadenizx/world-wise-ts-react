import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

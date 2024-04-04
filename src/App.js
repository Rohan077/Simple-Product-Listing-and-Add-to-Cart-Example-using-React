// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Registration from "./components/login/Registration";
import ProductDetails from "./components/product-details/ProductDetails";
import { useSelector } from 'react-redux';
import { isUserLoggedIn} from "./redux/reducers/loginSlice";

function App() {

const isLoggedIn=useSelector(isUserLoggedIn)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact index element={isLoggedIn?<Home/>:<Login/>} />
          <Route
            exact
            path="login"
            element={isLoggedIn?<Navigate replace to={"/home"} />:<Login />}
          />
          <Route
            exact
            path="registration"
            element={isLoggedIn ? <Navigate replace to={"/home"} /> : <Registration />}
          />
          <Route
            exact
            path="home"
            element={isLoggedIn ? <Home /> : <Navigate replace to={"/login"} />}
          />
          <Route
            exact
            path="cart"
            element={isLoggedIn ? <Cart /> : <Navigate replace to={"/login"} />}
          />
          <Route
            exact
            path="product/:productId"
            element={isLoggedIn ? <ProductDetails /> : <Navigate replace to={"/login"} />}
          />
          <Route exact path="*" element={<h1>Error Page!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
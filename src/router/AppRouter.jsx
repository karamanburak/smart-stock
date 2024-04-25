import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Brands from './../pages/Brands';
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import StartPage from "../pages/StartPage";
import Imprint from "../pages/Imprint";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="imprint" element={<Imprint />} />
        
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>

            {/* <Route path="" element={<Home/>}/> */}
            <Route index element={<Home/>}/>

            {/* Absolute Path */}
            <Route path="/stock/brands" element={<Brands/>} />

            {/* Relative Path */}
            <Route path="firms" element={<Firms/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="sales" element={<Sales/>}/>
            <Route path="purchases" element={<Purchases/>}/>

          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

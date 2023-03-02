import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "pages/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

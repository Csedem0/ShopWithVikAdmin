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
import AllUser from "pages/allUser/AllUser";
import Analytics from "pages/analytics/Analytics";
import Activities from "pages/activities/Activities";
import Sales from "pages/sales/Sales";
import Revenue from "pages/revenue/Revenue";
import Analysis from "pages/analysis/Analysis";
import Message from "pages/message/Message";
import SalesMetric from "pages/salesMetric/SalesMetric";
import RevenueMetric from "pages/revenueMetric/RevenueMetric";
import Login from "pages/login/Login";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/leads" element={<AllUser />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/mail" element={<Message />} />
          <Route path="/salesmetric" element={<SalesMetric />} />
          <Route path="/revenuemetric" element={<RevenueMetric />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

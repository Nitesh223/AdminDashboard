import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx"
import SideBar from "./Components/SideBar.jsx"
import Category from "./Screens/Category.jsx"
import SubCategory from "./Screens/SubCategory.jsx"
import Product from "./Screens/Product.jsx"
import Dashboard from "./Screens/Dashboard.jsx";
import Orders from "./Screens/Orders.jsx";
import Customers from "./Screens/Customers.jsx";
import Report from "./Screens/Report.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className="flex absolute w-[100%] md:w-[85%] h-[calc(100%-64px)] bg-neutral-100 left-[15%] top-[64px]">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route path="/product" element={<Product />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/report" element={<Report/>} />
          </Routes>
        </div>
        <SideBar />
      </Router>

    </>
  )
}

export default App

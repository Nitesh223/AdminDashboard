import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx"
import SideBar from "./Components/SideBar.jsx"
import Category from "./Pages/Category.jsx"
import SubCategory from "./Pages/SubCategory.jsx"
import Product from "./Pages/Product.jsx"
import Dashboard from "./Pages/Dashboard.jsx";
import Orders from "./Pages/Orders.jsx";
import Customers from "./Pages/Customers.jsx";
import Report from "./Pages/Report.jsx";
import CategoryTable from "./Pages/CategoryTable.jsx";
import ProductTable from "./Pages/ProductTable.jsx";

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
            <Route path="/categorytable" element={<CategoryTable/>} />
            <Route path="/producttable" element= {<ProductTable/>} />
          </Routes>
        </div>
        <SideBar />
      </Router>

    </>
  )
}

export default App

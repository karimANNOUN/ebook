import { Navigate, Route,Routes } from "react-router-dom"
import { HomePage ,PageNotFound,ProductList ,PageDetails ,Login ,Register,CartPage,OrderPage,DashbordPage } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"





export const AllRoutes = () => {
  
  return (
    <div className="dark:bg-slate-800 min-h-fit " >
         <Routes>
        <Route path="/" element={<HomePage   />} />
        <Route path="products" element={<ProductList   />} />
        <Route path="products/:id" element={<PageDetails/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes>} />
        <Route path="order" element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>} />
        <Route path="dashbord" element={<ProtectedRoutes><DashbordPage/></ProtectedRoutes>} />
        <Route path="*" element={<PageNotFound/>} />

    </Routes>
    </div>
  )
}


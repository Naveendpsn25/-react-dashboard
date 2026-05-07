import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import Dashboard from "./pages/Dashboard"
import Practice from "./components/Practicepie/Practice"
import UsersPage from "./pages/UsersPage"
import Products from "./pages/ProductsPage"

export default function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="practice" element={<Practice/>}/>

        <Route path="/" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UsersPage/>}/>
            <Route path="products" element={<Products/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}
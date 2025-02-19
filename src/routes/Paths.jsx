import { BrowserRouter, Route, Routes } from "react-router";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/adminPages/Dashboard";
import Users from "../pages/adminPages/Users";
import Clients from "../pages/adminPages/Clients";
import Recipes from "../pages/adminPages/Recipes";
import Workouts from "../pages/adminPages/Workouts";
import Categories from "../pages/adminPages/Categories";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/clients" element={<Clients />} />
                    <Route path="/admin/recipes" element={<Recipes />} />
                    <Route path="/admin/workouts" element={<Workouts />} />
                    <Route path="/admin/categories" element={<Categories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;
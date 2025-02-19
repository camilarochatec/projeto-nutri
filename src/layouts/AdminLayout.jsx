import { Outlet } from "react-router";
import MenuDashboard from "../components/MenuDashboard";

const AdminLayout = () => {
    return (
        <div className="h-screen flex">
            <MenuDashboard />
            <div className="overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}
 
export default AdminLayout;
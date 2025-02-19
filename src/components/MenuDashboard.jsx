import { NavLink } from "react-router";

const MenuDashboard = () => {
    return (
        <div className="w-[250px] h-screen bg-slate-200 p-4">
            <h1 className="mb-6">Logo</h1>
            <nav className="*:text-slate-500 *:block *:font-semibold hover:*:bg-slate-300 *:duration-200">
                <NavLink 
                    end
                    to={"/admin"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    end
                    to={"/admin/users"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Usuários
                </NavLink>
                <NavLink 
                    end
                    to={"/admin/clients"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Clientes
                </NavLink>
                <NavLink 
                    end
                    to={"/admin/recipes"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Receitas
                </NavLink>
                <NavLink 
                    end
                    to={"/admin/categories"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Categorias
                </NavLink>
                <NavLink 
                    end
                    to={"/admin/workouts"} 
                    className={"[&.active]:bg-slate-400 [&.active]:text-white leading-[40px] px-4 rounded mb-2"}
                >
                    Treinos
                </NavLink>
            </nav>
        </div>
    );
}
 
export default MenuDashboard;
import {
  MdDashboard,
  MdOutlineCheckCircle,
  MdOutlineNotes,
  MdOutlineAccountBalanceWallet,
  MdHealthAndSafety,
  MdLogout,
} from "react-icons/md";

import { NavLink } from "react-router-dom";
import { MdPerson } from "react-icons/md";

import logo from "../../assets/Logo.png";

function Sidebar() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const firstLetter =
    user.fullname
      ? user.fullname.charAt(0).toUpperCase()
      : "U";

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard size={22} />,
    },
    {
      name: "To-Do",
      path: "/todo",
      icon: <MdOutlineCheckCircle size={22} />,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: <MdOutlineNotes size={22} />,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: <MdOutlineAccountBalanceWallet size={22} />,
    },
    {
      name: "Health",
      path: "/health",
      icon: <MdHealthAndSafety size={22} />,
    },
    {
    name: "Profile",
    path: "/profile",
    icon: <MdPerson size={22} />,
  },

  ];
    return (

    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-slate-200">

        <div className="flex items-center gap-3">

          <div className="w-24 h-16 flex items-center justify-center">

 <img
  src={logo}
  alt="LifeTrack Logo"
  className="object-contain"
  style={{
    width: "65px",
    height: "75px",
    transform: "scale(1.5)"
  }}
/>

</div>

          <div>

            <h1 className="text-2xl font-bold text-slate-800">
              LifeTrack
            </h1>

            <p className="text-sm text-slate-500">
              Productivity Hub
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-5 space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >

            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </nav>

      {/* Bottom */}

      <div className="p-5 border-t border-slate-200">

        <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

            {firstLetter}

          </div>

          <div>

            <h3 className="font-semibold">
              {user.fullname || "User"}
            </h3>

            <p className="text-sm text-slate-500">
              {user.email}
            </p>

          </div>

        </div>

        <NavLink
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }}
          className="flex items-center gap-3 text-red-500 hover:text-red-600 font-medium"
        >

          <MdLogout size={22} />

          Logout

        </NavLink>

      </div>

    </aside>

  );
}

export default Sidebar;
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

function Navbar() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const firstLetter =
    user.fullname
      ? user.fullname.charAt(0).toUpperCase()
      : "U";
        return (

    <header className="h-20 bg-white border-b border-slate-200 flex items-center px-10">


      {/* Left */}

     

      {/* Right */}

       <div className="flex items-center justify-end w-full gap-6">

        

        {/* Profile */}

        <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">

            {firstLetter}

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              {user.fullname || "User"}
            </h3>

            <p className="text-sm text-slate-500">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;
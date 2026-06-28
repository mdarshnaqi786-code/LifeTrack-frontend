import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const firstLetter = user.fullname
    ? user.fullname.charAt(0).toUpperCase()
    : "U";

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-end px-10">
      <button
        onClick={() => navigate("/profile")}
        className="w-12 h-12 rounded-full bg-blue-600 text-white
                   flex items-center justify-center
                   font-bold text-lg
                   hover:bg-blue-700
                   transition-all duration-300
                   shadow-md"
        title="My Profile"
      >
        {firstLetter}
      </button>
    </header>
  );
}

export default Navbar;

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Navbar />

        <main className="p-10">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar CurActive={1} />
      <div className="xl:p-8 2xl:p-12 w-full ml-[22%]">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;

import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import AllTasks from "../components/Tasks/AllTasks";

function AllTasksPage() {
  return (
    <div className="flex">
      <Sidebar CurActive={2} />
      <div className="xl:p-8 2xl:p-12 w-full ml-[22%]">
        <Header />

        <AllTasks />
      </div>
    </div>
  );
}

export default AllTasksPage;

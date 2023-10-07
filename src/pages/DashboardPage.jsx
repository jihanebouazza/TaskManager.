import CategoriesCard from "../components/Dashboard/CategoriesCard";
import LineChart from "../components/Dashboard/LineChart";
import OverviewChart from "../components/Dashboard/OverviewChart";
import UserCard from "../components/Dashboard/UserCard";

function DashboardPage() {
  return (
    <>
      <div className="pt-8 w-full flex ">
        <UserCard />
        <CategoriesCard />
      </div>
      <div className="pt-8 w-full flex">
        <OverviewChart />
        <LineChart />
      </div>
    </>
  );
}

export default DashboardPage;

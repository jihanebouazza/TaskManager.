import CategoriesCard from "./CategoriesCard";
import UserCard from "./UserCard";
import OverviewChart from "./OverviewChart";
import LineChart from "./LineChart";

function Dashboard() {
  return (
    <>
      <div className="xl:pt-8 2xl:pt-12 w-full flex">
        <UserCard />
        <CategoriesCard />
      </div>
      <div className="xl:pt-8 2xl:pt-12 w-full flex">
        <OverviewChart />
        <LineChart/>
      </div>
    </>
  );
}

export default Dashboard;

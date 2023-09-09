import { LuSearch } from "react-icons/lu";
import { useTasks } from "../../contexts/TaskContext";

function Searchbar() {
  const { searchQuery, setSearchQuery } = useTasks();

  return (
    <div className="pt-8 relative z-0">
      <input
        value={searchQuery}
        type="text"
        placeholder="Search..."
        className="relative ease-in duration-300 w-full p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute z-10 top-[42px] right-4">
        <LuSearch size={20} color="#030438" />
      </div>
    </div>
  );
}

export default Searchbar;

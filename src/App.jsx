import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AllTasksPage from "./pages/AllTasksPage";
import { TaskProvider } from "./contexts/TaskContext";
import { CategoryProvider } from "./contexts/CategoryContext";

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="tasks" element={<AllTasksPage />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;

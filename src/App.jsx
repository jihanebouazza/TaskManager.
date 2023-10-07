import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AllTasksPage from "./pages/AllTasksPage";
import { TaskProvider } from "./contexts/TaskContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppLayout from "./components/ui/AppLayout";

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="tasks" element={<AllTasksPage />} />
              </Route>
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;

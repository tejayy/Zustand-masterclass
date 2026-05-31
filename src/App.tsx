import CounterPage from "./pages/CounterPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuthStore } from "./stores/authStore";

const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <DashboardPage /> : <LoginPage />}
          />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

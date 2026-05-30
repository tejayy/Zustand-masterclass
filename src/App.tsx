import CounterPage from "./pages/CounterPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

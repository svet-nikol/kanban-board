import "./App.css";
import { AppRoutes } from "./lib/approutes.js";
import { Routes, Route } from "react-router-dom";
import HomePageBoard from "./pages/HomePageBoard.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import RegisterPage from "./pages/register-page/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import CardPage from "./pages/CardPage.jsx";
import ExitPage from "./pages/ExitPage.jsx";
import NewCardPage from "./pages/NewCardPage.jsx";
import { TasksProvider } from "./contexts/tasks.jsx";

function App() {
  return (
    <Routes>
      <Route
        element={
          <TasksProvider>
            <PrivateRoute />
          </TasksProvider>
        }
      >
        <Route path={AppRoutes.HOME} element={<HomePageBoard />}>
          <Route path={`${AppRoutes.CARD}/:cardId`} element={<CardPage />} />
          <Route path={AppRoutes.NEW_CARD} element={<NewCardPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";

export default function PrivateRoute({ isLoggedIn }) {
    return isLoggedIn ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />
}
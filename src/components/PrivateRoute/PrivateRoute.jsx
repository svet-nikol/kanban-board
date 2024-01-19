import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";

export default function PrivateRoute({ isLoggedIn }) {
    console.log(`значение isLoggedIn ${isLoggedIn}`);
    return isLoggedIn ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />
}
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";
import { useUser } from "../../hooks/useUser";

export default function PrivateRoute() {
    const {isLoggedInUser} = useUser();
    return isLoggedInUser ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />
}
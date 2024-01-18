import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes";

export default function PrivateRoute({ user }) {
    console.log(`значение user ${user}`);
    return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />
}
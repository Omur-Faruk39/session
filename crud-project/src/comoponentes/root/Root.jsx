import { Outlet } from "react-router";
import NavBar from "../navBar/NavBar";

function Root() {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default Root;
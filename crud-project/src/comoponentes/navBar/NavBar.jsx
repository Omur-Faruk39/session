import { NavLink } from "react-router";

function NavBar() {

    return(
        <ul>
          <li>
            <NavLink className='m-6' to={''}>home</NavLink>
            <NavLink to={'/add'}>add</NavLink>
          </li>
        </ul>
    );
}

export default NavBar;
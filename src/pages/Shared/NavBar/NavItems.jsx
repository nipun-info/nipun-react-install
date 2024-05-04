import { NavLink } from "react-router-dom";

export const navItems = <>
    <li> <NavLink to="/"> Home </NavLink> </li>
    <li> <NavLink to="/about"> About </NavLink> </li>
    <li> <NavLink to="/services"> Services </NavLink> </li>
    <li> <NavLink to="/blog"> Blog </NavLink> </li>
    <li> <NavLink to="/contact"> Contact </NavLink> </li>
</>


{/* 
<li><a>Item 1</a></li>
    <li>
        <a>Parent</a>
        <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </li>
<li><a>Item 3</a></li> 
*/}

// bg-color = #FF3811
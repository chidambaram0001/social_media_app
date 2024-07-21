import { Link, NavLink } from "react-router-dom";
const Nav = ()=>{
    const li = [];
    
    return (<ul>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/addpost'> Add Post</NavLink></li>
        <li><NavLink to='/about'> About Us</NavLink> </li>
    </ul>)
}

export default Nav;
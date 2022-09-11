import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom' ;
import { NavDropdown } from "react-bootstrap";
const Header=()=>{
    return(
        <div>
       <Navbar bg="secondary" variant="dark">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mr-auto nav_bar_wrapper">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/addproduct">Add Product</NavLink>
          <NavLink to="/updateproduct">Update Product</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/ragister">Ragister</NavLink>
            <NavLink to="/logout"
                className="listItem"
                activeClassName="activeItem"/>
                <NavDropdown title="">
                {/* <NavDropdown.Item > Logout</NavDropdown.Item> */}
                <NavDropdown.Item>logout</NavDropdown.Item>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
          </Nav>
        
      </Navbar>
      <br />
        </div>
    )
}
export default Header;
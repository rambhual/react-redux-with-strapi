import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";
import { logoutUser } from "../../store/actions/user";
import { useHistory, Link } from "react-router-dom";

const HeaderComponent = (props) => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">React Redux</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/app/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/app/products">
                Product
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Welcome {userInfo.username}</NavbarText>
          <NavLink
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(logoutUser());
              history.push("/login");
            }}
          >
            Logout
          </NavLink>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;

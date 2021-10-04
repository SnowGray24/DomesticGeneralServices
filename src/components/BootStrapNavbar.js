import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../css/navbar.css';
import '../css/button.css';
import '../css/layout.css';
import logo from '../img/logo.PNG';

const BootStrapNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbarLandingPage layoutConfigNavbar" light expand="md">
        <NavbarBrand href="/">
            <img height='46.09' src={logo} alt="logo do site" />

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="itemsNavbarToRight" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="buttonNavbarNormal">
              <NavLink href="/"><span>Home</span></NavLink>
            </NavItem>

            <NavItem className="buttonNavbarNormal">
              <NavLink href="/sobre/">Sobre</NavLink>
            </NavItem>

            <NavItem className="buttonNavbarOutiline">
              <NavLink href="/sobre/"><span>Entrar</span></NavLink>
            </NavItem>

            <NavItem className="buttonNavbar">
              <NavLink href="/CadastroContratante"><span>Contratante de Serviços</span></NavLink>
            </NavItem>

            <NavItem className="buttonNavbar">
              <NavLink href="/CadastroPrestador"><span>Prestador de Serviços </span> </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BootStrapNavbar;

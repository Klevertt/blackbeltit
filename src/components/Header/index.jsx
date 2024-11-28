import React from 'react';
import { HeaderContainer, Nav, NavItem } from './styled';

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#criacao">Criação</NavItem>
        <NavItem href="#analise">Análise de Resultados</NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

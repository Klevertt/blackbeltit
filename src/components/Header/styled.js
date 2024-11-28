import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
};

export const HeaderContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: right;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-right: 8%;
  margin-left: 1%;
`;

export const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.3em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9em;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: red;
    position: absolute;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

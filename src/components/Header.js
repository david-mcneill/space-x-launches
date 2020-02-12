import React from "react";
import styled from 'styled-components';
import logo from '../SpaceX-Logo.svg';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HeaderLogo>
          <img src={logo} alt="" />
        </HeaderLogo>

        <HeaderTitle>Launch Tracker</HeaderTitle>
      </HeaderContainer>
    </header>
  )
}

export default Header;


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 0 40px;
  background-color: #272B33;
  border-bottom: 4px solid #e3e3e3;
`

export const HeaderLogo = styled.div`
  width: 25%;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`

export const HeaderTitle = styled.h1`
  font-family: 'Inter Bold', Helvetica, sans-serif;
  font-size: 28px;
  color: #e3e3e3;
`
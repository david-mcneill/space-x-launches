import React from "react";
import styled from 'styled-components';
import colors from '../styles/colors';
import logo from '../SpaceX-Logo.svg';

const Header = () => {
  return (
    <HeaderOuter>
      <HeaderContainer>
        <HeaderLogo>
          <img src={logo} alt="" />
        </HeaderLogo>

        <HeaderTitle>Launch Tracker</HeaderTitle>
      </HeaderContainer>
    </HeaderOuter>
  )
}

export default Header;

export const HeaderOuter = styled.header`
  width: 100%;
  height: 85px;
  background-color: ${colors.dark};
  border-bottom: 4px solid #e3e3e3;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
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
import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: #fff;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Sliceline{" "}
        <span role="img" aria-label="pizza" aria-labelledby="emoji">
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  );
}

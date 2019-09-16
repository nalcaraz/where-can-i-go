import React, { Fragment, useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ffccbc;
`;

function Layout({ children }) {
  return (
    <StyledSection className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </StyledSection>
  );
}

export default Layout;

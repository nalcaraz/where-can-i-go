import React, { Fragment, useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
background: rgb(255,39,102);
background: linear-gradient(59deg, rgba(255,39,102,0.7259278711484594) 0%, rgba(255,63,118,0.5382528011204482) 60%, rgba(253,187,45,0.7539390756302521) 100%);
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

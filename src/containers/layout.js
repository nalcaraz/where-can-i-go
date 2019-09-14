import React, { Fragment, useState } from "react";

function Layout({ children }) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  );
}

export default Layout;

import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-main-blue">
      <Header />
      <div className="flex sm:mx-2 md:mx-20">
          <div className="w-full">
            <main className="flex flex-col p-8 md:p-8 w-full">
              {children}
            </main>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

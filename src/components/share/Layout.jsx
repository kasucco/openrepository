import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <LayoutTop>
      <Header />
      <Layouts>{children}</Layouts>
    </LayoutTop>
  );
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;

const LayoutTop = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Layouts = styled.div`
  box-sizing: border-box;
  padding: 30px;
  border: 2px solid #000;
  border-radius: 10px;
`;

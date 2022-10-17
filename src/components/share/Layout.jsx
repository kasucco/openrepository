import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Layouts>{children}</Layouts>
    </>
  );
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;

const Layouts = styled.div`
  box-sizing: border-box;
  padding: 30px 0;
  border: 2px solid #000;
  border-radius: 10px;
`;

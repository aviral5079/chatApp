import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div data-testid="text">
      <h1>{text || "Assistant"}</h1>
    </div>
  );
};

// Header.propTypes = {
//   text: PropTypes.string,
// };

export default Header;

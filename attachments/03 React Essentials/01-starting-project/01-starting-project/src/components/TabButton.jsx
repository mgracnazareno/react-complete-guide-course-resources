import React from "react";

const TabButton = ({ children, onSelect }) => {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;

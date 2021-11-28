import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  background: oldlace;
  color: black;
  padding: 8px;
  &:hover {
    background: lightpink;
    color: oldlace;
  }
`;

const PreviousJokes = ({ item }) => {
  return (
    <StyledList>
      <li key={item.id}>{item.joke}</li>
    </StyledList>
  );
};

export default PreviousJokes;

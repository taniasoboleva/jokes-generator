import React from "react";
import styled from "styled-components";
import spinner from "../assets/ellipsis-spinner.svg";

const SpinnerImage = styled.img`
  width: 60px;
  background: lavender;
`;

const Spinner = () => {
  return <SpinnerImage alt="loading" src={spinner} />;
};

export default Spinner;

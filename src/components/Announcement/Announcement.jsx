import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Super deal! Free shipping on order over $50</Container>;
};

export default Announcement;

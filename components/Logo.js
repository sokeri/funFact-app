import React from "react";
import styled from "styled-components";

export const Logo = (props) => (
  <Container>
    <Image source={props.logo} resizeMode="contain"></Image>
    <Text>{props.title}</Text>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  height: 60px;
  padding: 12px 16px 12px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  align-items: center;
  margin: 0 8px;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-left: 15px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;

import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = (props) => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #3c4560;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 4px;
`;

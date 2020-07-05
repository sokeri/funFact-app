import React from "react";
import styled from "styled-components";

export const Idea = (props) => (
  <Container style={{ elevate: 12 }}>
    <Cover>
      <Image source={props.image}></Image>
      <Avatar source={props.avatar} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Cover>
  </Container>
);

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border-width: 2px;
  border-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  width: 260px;
  text-align: center;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-top: 12px;
  width: 280px;
  text-align: center;
`;

import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Details>Taught by {props.details}</Details>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 335px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: 4px;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 600;
  width: 180px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  top: 20px;
  left: 20px;
  border-radius: 20px;
  position: absolute;
`;

const Caption = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #3c4560;
`;

const Details = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #b8bece;
  margin-top: 4px;
`;

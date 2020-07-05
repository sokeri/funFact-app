import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { render } from "react-dom";

const screenWidth = Dimensions.get("window").width;

function getCourseWidth(screenWidth) {
  var cardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    cardWidth = (screenWidth - 60) / 2;
  }
  if (screenWidth >= 1024) {
    cardWidth = (screenWidth - 80) / 3;
  }
  return cardWidth;
}

class Course extends React.Component {
  state = {
    cardWidth: getCourseWidth(screenWidth),
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.adaptLayout);
  }

  adaptLayout = (dimensions) => {
    this.setState({
      cardWidth: getCourseWidth(dimensions.window.width),
    });
  };

  render() {
    return (
      <Container
        style={{
          elevation: 12,
          width: this.state.cardWidth,
        }}
      >
        <Cover>
          <Image source={this.props.image} />
          <Logo source={this.props.logo} resizeMode="contain" />
          <Subtitle>{this.props.subtitle.toUpperCase()}</Subtitle>
          <Title>{this.props.title}</Title>
        </Cover>
        <Content>
          <Avatar source={this.props.avatar} />
          <Caption>{this.props.caption}</Caption>
          <Details>Taught by {this.props.details}</Details>
        </Content>
      </Container>
    );
  }
}

export default Course;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 335px;
  border-radius: 14px;
  margin: 10px;
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
  width: 170px;
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
  padding-right: 30px;
`;

const Details = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #b8bece;
  margin-top: 4px;
`;

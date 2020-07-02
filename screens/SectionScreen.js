import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  componenentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image}></Image>
          <Wrapper>
            <Logo source={section.logo}></Logo>
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 60,
            right: 20,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={46} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const CloseView = styled.View`
  background-color: white;
  border-radius: 40px;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 50%;
  position: absolute;
  top: 80px;
  left: 20px;
`;

const Caption = styled.Text`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: white;
  font-size: 17px;
  width: 50%;
`;

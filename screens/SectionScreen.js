import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <Cover>
          <Image source={section.image}></Image>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
          <Logo source={section.logo}></Logo>
        </Cover>
        <CloseView>
          <Ionicons
            name="ios-close"
            size={44}
            color="black"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </CloseView>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  position: absolute;
  width: 100%;
  height: 375px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 50%;
  position: absolute;
  top: 70px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 50%;
`;

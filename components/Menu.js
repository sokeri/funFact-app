import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Valeria</Title>
          <Subtitle>Designer</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            positon: "absolute",
            top: -20,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {menuitems.map((menuitem, index) => (
            <MenuItem
              key={index}
              icon={menuitem.icon}
              title={menuitem.title}
              subtitle={menuitem.subtitle}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default Menu;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background-color: #f0f3f5;
  padding: 50px;
  margin-top: -50px;
`;

const menuitems = [
  {
    icon: "ios-cog",
    title: "Account",
    subtitle: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    subtitle: "payment",
  },
  {
    icon: "ios-book",
    title: "Learn React",
    subtitle: "building this app",
  },
  {
    icon: "ios-log-out",
    title: "Logout",
    subtitle: "see you soon!",
  },
];

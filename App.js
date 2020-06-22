import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Valeria </Name>
            <NotificationIcon
              style={{
                position: "absolute",
                right: 20,
                top: 5,
              }}
            ></NotificationIcon>
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
              flexDirection: "row",
            }}
            showsHorizontalScrollIndicator={false}
          >
            <Logo
              logo={require("./assets/logo-framerx.png")}
              title="Framer-X"
            ></Logo>
            <Logo
              logo={require("./assets/logo-figma.png")}
              title="Figma"
            ></Logo>
            <Logo
              logo={require("./assets/logo-invision.png")}
              title="Invision"
            ></Logo>
          </ScrollView>
          <Subtitle>Continue learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 50 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 out of 12 sections"
            />
            <Card
              title="Styled Components 2"
              image={require("./assets/background2.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 out of 12 sections"
            />
            <Card
              title="Styled Components 3"
              image={require("./assets/background2.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 out of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Container = styled.View`
  flex: 1;
  background: #ffffff;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Valeria </Name>
            <Ionicons
              name="ios-notifications"
              size={32}
              color="#4775f2"
              style={{ position: "absolute", right: 20, top: 5 }}
            ></Ionicons>
          </TitleBar>
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
  margin-top: 50px;
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

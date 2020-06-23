import React from "react";
import { ScrollView, SafeAreaView, View, StatusBar } from "react-native";
import styled, { withTheme } from "styled-components";
import Card from "./components/Card";
import Course from "./components/Course";

import { NotificationIcon } from "./components/Icons";
import { Logo } from "./components/Logo";
import { Idea } from "./components/Idea";

export default function App() {
  return (
    <SafeAreaView backgroundColor="rgba(255,255,255,0)">
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Container>
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
              {logos.map((logo, index) => (
                <Logo key={index} logo={logo.image} title={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 50 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle>Popular this week</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 50 }}
              showsHorizontalScrollIndicator={false}
            >
              {ideas.map((idea, index) => (
                <Idea
                  key={index}
                  image={idea.image}
                  avatar={idea.avatar}
                  title={idea.title}
                  description={idea.description}
                />
              ))}
            </ScrollView>
            <Subtitle>Courses</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 50 }}
              showsHorizontalScrollIndicator={false}
            >
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  logo={course.logo}
                  subtitle={course.subtitle}
                  title={course.title}
                  avatar={course.avatar}
                  caption={course.caption}
                  details={course.details}
                />
              ))}
            </ScrollView>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Container = styled.View`
  background-color: #f0f3f5;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 12px;
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("./assets/logo-invision.png"),
    text: "Invision",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift",
  },
];

const cards = [
  {
    title: "Styled Components",
    image: require("./assets/background2.jpg"),
    logo: require("./assets/logo-react.png"),
    caption: "React Native",
    subtitle: "5 out of 12 sections",
  },
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
];

const ideas = [
  {
    title: "Top 3 tricks",
    image: require("./assets/background1.jpg"),
    avatar: require("./assets/avatar-default.jpg"),
    description: "Your kickstart for learning.",
  },
  {
    title: "Tips and tricks",
    image: require("./assets/background6.jpg"),
    avatar: require("./assets/avatar-default.jpg"),
    description: "Get familiar with the hidden shortcuts.",
  },
];

const courses = [
  {
    image: require("./assets/background3.jpg"),
    logo: require("./assets/logo-studio.png"),
    subtitle: "1 of 4 sections",
    title: "Prototype with InVision",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Learn to design and code a React site",
    details: "Valeria",
  },
  {
    image: require("./assets/background9.jpg"),
    logo: require("./assets/logo-figma.png"),
    subtitle: "1 of 4 sections",
    title: "Prototype with Figma",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Built a Figma mobile app from scratch - in two days",
    details: "Mark",
  },
];

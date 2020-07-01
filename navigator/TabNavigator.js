import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
});

const CourseStack = createStackNavigator({
  Courses: SectionScreen,
});

const ProjectsStack = createStackNavigator({
  Projects: SectionScreen,
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CourseStack,
  ProjectsStack,
});

export default TabNavigator;

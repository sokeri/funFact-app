import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, Linking } from "react-native";
import { WebView } from "react-native-webview";
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
        <Content>
          <WebView
            ref="webview"
            source={{ html: htmlContent + htmlStyles }}
            scalesPageToFit={true}
            scrollEnable={false}
            onNavigationStateChange={(event) => {
              console.log(event);

              if (event.url != "about:blank") {
                this.refs.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          ></WebView>
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const htmlContent = `
<h2> This is a title </h2>
<p> This <strong>is</strong> <a href="http://google.com">a link </a></p>
<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png">
`;

const htmlStyles = `
<style>
* { 
  font-family: -apple-system, Roboto; 
  margin: 0;
  margin: 0;
}

img {
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}


</style>
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Content = styled.View`
  height: 100%;
  padding: 20px;
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

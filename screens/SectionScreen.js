import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, Linking, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import Markdown from "react-native-showdown";

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
      <ScrollView>
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
            {/*          <WebView
            ref="webview"
            source={{ html: section.content + htmlStyles }}
            scalesPageToFit={false}
            scrollEnable={false}
            onNavigationStateChange={(event) => {
              console.log(event);

              if (event.url != "about:blank") {
                this.refs.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          /> */}
            <Markdown
              body={section.content}
              pureCSS={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={false}
            ></Markdown>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

const htmlStyles = `
<style>
* { 
  margin: 0px;
  padding: 0px;
}

body {
  margin: 0px;
  background-color: rgba(255,255,255,0);
  color: black;
  font-family: -apple-system, Roboto; 
  font-size: 1em; 
  line-height: 1.4em;
  font-weight: normal; 
}

h2 {
  font-size: 2em;
}

p {
  margin-top: 20px;
}

a {
  color: #4775f2;
  font-weight: 600;
  text-decoration: none;
}

strong {
  font-weight: 700;
}

img {
  width: 100%;
  margin-top: 20px;
    border-radius: 10px;
}

pre {
  padding: 20px;
  background: #212C4F;
  overflow: hidden;
  word-wrap: break-word;
  border-radius: 10px;
    margin-top: 20px;
}

code {
  color: white;
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
  height: 1000px;
  padding: 16px;
  background-color: white;
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

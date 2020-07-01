import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Text>This is a new screen with headerShown: false</Text>
        <Button
          title="close"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

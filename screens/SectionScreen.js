import React from "react";
import styled from "styled-components";

class SectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Hello</Text>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

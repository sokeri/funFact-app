import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    position: state.position,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePosition: (position) =>
      dispatch({
        type: "UPDATE_POSITION",
        position: position,
      }),
  };
}

class Bio extends React.Component {
  state = {
    position: "",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "eeaafbe81657073cd70ac6e3de1bd6",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.props.updatePosition(response[0].position);
      });
  }

  render() {
    return <Bio />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio);

const Bio = styled.Text`
  color: red;
  font-size: 30px;
`;

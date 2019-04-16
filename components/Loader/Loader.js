import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import styles from "./Loader.style";

class Loader extends Component {
  render() {
    const { visible } = this.props;

    return (
      !!visible && (
        <ActivityIndicator
          animating
          style={styles.loader}
          size="large"
          color="#FFFFFF"
        />
      )
    );
  }
}

Loader.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default Loader;

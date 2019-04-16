import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

const LeftButtonsInitializer = color => {
  const LeftButtons = props => {
    const { navigation } = props;
    const { state } = navigation.dangerouslyGetParent();
    if (state.index > 0) {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" color={color} size={24} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <MaterialIcons name="menu" color={color} size={24} />
      </TouchableOpacity>
    );
  };

  LeftButtons.propTypes = PropTypes.shape({
    navigation: PropTypes.object.isRequired
  }).isRequired;

  return withNavigation(LeftButtons);
};

export default LeftButtonsInitializer;

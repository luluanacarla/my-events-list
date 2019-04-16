import { StyleSheet } from "react-native";

const blackOverlay = "rgba(0, 0, 0, 0.5)";

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    backgroundColor: blackOverlay,
    bottom: 0,
    justifyContent: "center",
    left: 0,
    padding: 8,
    position: "absolute",
    right: 0,
    top: 0
  }
});

export default styles;

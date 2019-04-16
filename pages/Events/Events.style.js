import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  content: {
    width: "100%",
    borderRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#888",
    shadowOpacity: 1.0,
    marginBottom: 15,
    padding: 15
  }
});

import { StyleSheet } from "react-native";
import variables from "../../assets/styles/variables";

export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "dubai-regular",
  },
  container2: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1.0,
    marginBottom: 10,
    padding: 15,
  },
  rowStyle: {
    flexDirection: "row",
  },
  dateBox: {
    width: 70,
    backgroundColor: variables.colors.babyPurple,
    padding: 10,
    alignItems: "center",
    borderRadius: 5
  },
  dateTime: {
    marginTop: 10
  },
  subtitle: {
    fontSize: 17,
    color: "#808080",
    marginLeft: 5
  }
});

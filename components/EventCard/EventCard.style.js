import { StyleSheet } from "react-native";
import variables from "../../assets/styles/variables";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1.0,
    marginBottom: 10,
    padding: 15,
    flexDirection: "row",
    borderLeftWidth: 8,
    borderLeftColor: variables.colors.lightPurple,
  },
  rowStyle: {
    marginTop: 10,
    flexDirection: "row"
  },
  logoDiv: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 180
  },
  date: {
    color: variables.colors.lightGray,
    marginBottom: 30,
    marginTop: 30,
    fontSize: 15
  },
  pretitle: {
    color: variables.colors.lightGray,
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 30,
  },
  title: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
  },
  subtitle: {
    color: variables.colors.gray,
    fontWeight: "normal",
    fontSize: 17,
    marginLeft: 5
  },
  costText: {
    color: variables.colors.lightGray,
    fontSize: 14,
    lineHeight: 50,
  },
  unitText: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 5,
    paddingBottom: 2
  },
  costColor: {
    color: "#ED174B"
  },
  dateTimeText: {
    color: "#646464",
    marginLeft: 15
  }
});

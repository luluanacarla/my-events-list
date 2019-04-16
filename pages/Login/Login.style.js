import { StyleSheet } from "react-native";

export default StyleSheet.create({
  firstInputView: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    justifyContent: "center"
  },
  secondInputView: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  inputComponent: {
    borderWidth: 1,
    borderColor: "#2E1A46",
    borderStyle: "solid",
    height: 45,
    marginBottom: 10,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16
  },
  loginText: {
    color: "white",
    fontSize: 16,
    lineHeight: 27
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#733DBE",
    height: 45,
    marginBottom: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 25,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowStyle: {
    flexDirection: "row",
  },
  label: {
    fontSize: 15,
    marginBottom: 5
  }
});

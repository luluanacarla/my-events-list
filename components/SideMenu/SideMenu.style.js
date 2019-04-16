import variables from "../../assets/styles/variables";

export default {
  container: {
    flex: 1
  },
  header: {
    view: {
      height: 72,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    icon: {
      color: variables.colors.purple
    },
    text: {
      color: variables.colors.purple,
      fontSize: 24,
      fontFamily: "dubai-bold",
      fontWeight: "normal",
      marginLeft: 14
    }
  },
  drawer: {
    activeTintColor: variables.colors.magenta,
    inactiveTintColor: variables.colors.purple,
    activeBackgroundColor: variables.colors.lightGray,
    itemStyle: {
      borderTopWidth: 1,
      borderTopColor: "#f5f5f5"
    },
    labelStyle: {
      fontFamily: "dubai-regular",
      fontWeight: "normal",
      fontSize: 16,
      marginTop: 15,
      marginLeft: 0,
      marginRight: 15,
      marginBottom: 15
    },
    activeLabelStyle: {
      fontFamily: "dubai-bold",
      fontWeight: "normal"
    },
    iconContainerStyle: {
      margin: 0,
      opacity: 1
    }
  }
};

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation";
import HeaderParams from "../components/Header/HeaderParams";
import LightHeader from "../components/Header/LightHeader.style";
import DrawerIcon from "../components/SideMenu/DrawerIcon";
import Events from "../pages/Events/Events";
import EventDetail from "../pages/EventDetail";
import Logout from "../pages/Logout/Logout";

export default {
  EventStack: {
    screen: createStackNavigator({
      Events: {
        screen: Events,
        navigationOptions: () => ({
          title: "Eventos",
          ...HeaderParams(LightHeader)
        })
      },
      EventDetail: {
        screen: EventDetail
      }
    }),
    navigationOptions: () => ({
      title: "Eventos",
      drawerIcon: ({ tintColor }) =>
        DrawerIcon(tintColor, MaterialCommunityIcons, "tag")
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: () => ({
      title: "Logout",
      drawerIcon: ({ tintColor }) =>
        DrawerIcon(tintColor, MaterialIcons, "exit-to-app")
    })
  }
};

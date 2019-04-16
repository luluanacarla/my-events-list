import React from 'react';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import { StyleSheet } from "react-native";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Login from "./pages/Login/Login";
import cacheAssetsAsync from "./helpers/cacheAssetsAsync";
import assets from "./assets/index";
import NavigationService from "./components/Navigation/NavigationService";
import routes from "./routes/index";
import SideMenu from "./components/SideMenu/SideMenu";
import { AuthProvider } from "./components/Auth/AuthProvider";
import moment from "moment";
import 'moment/min/locales'

moment.locale('pt-br');


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      assetsLoaded: false
    };

    this.loadAssetsAsync = async () => {
      try {
        await cacheAssetsAsync(assets);
      } finally {
        this.setState({ assetsLoaded: true });
      }
    };
  }

  componentDidMount() {
    this.loadAssetsAsync();
  }

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      const Root = createStackNavigator({
        Login: {
          screen: Login,
          navigationOptions: {
            header: null,
            headerMode: "none"
          }
        },
        Drawer: {
          screen: createDrawerNavigator(routes, {
            contentComponent: SideMenu
          }),
          navigationOptions: {
            title: "Events",
            header: null,
            headerMode: "none"
          }
        }
      });

      const Apps = createAppContainer(Root)

      return (
        <AuthProvider>
            <Apps
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
        </AuthProvider>
      );
    }
    return <LoadingScreen />;
  }
}

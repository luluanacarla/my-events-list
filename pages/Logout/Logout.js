import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { withAuth } from "../../components/Auth/AuthProvider";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

class Logout extends Component {
  async componentDidMount() {
    const { auth } = this.props;
    const { navigation } = this.props;

    await auth.logout();
    navigation.replace("Login");
  }

  render() {
    return <LoadingScreen />;
  }
}

export default withAuth(withNavigation(Logout));

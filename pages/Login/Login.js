import React from "react";
import PropTypes from "prop-types";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

import {
  withAuth,
  AuthProps
} from "../../components/Auth/AuthProvider";
import API from "../../components/API/API";
import styles from "./Login.style";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Icon from "react-native-vector-icons/FontAwesome";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      isAuth: true
    };

    this.submit = () => {
      const { navigation } = this.props;
      const { replace } = navigation;
      const { email, password } = this.state;
      let data = {
        email,
        password
      };;

      const goToEvents = () => replace("Drawer");

      this.setState({ isLoading: true });

      this.API.post("/login", data)
        .then(response => {
          const accessToken = response.data.token;
          const { auth } = this.props;

          auth
            .login(accessToken)
            .then(() => {
              this.setState({ isLoading: false });
              goToEvents();
            })
            .catch(() => {
              this.setState({ isLoading: false });
              goToEvents();
            });
        })
        .catch(err => {
          this.setState({ isLoading: false });
          this.loginErrorAlert(err);
        });
    };

    this.loginErrorAlert = err =>
      Alert.alert(
        "Login failed",
        err.message,
        [{ text: "OK", onPress: () => { } }],
        {
          cancelable: false
        }
      );
  }

  async componentDidMount() {
    this.API = await API.instantiate();
    const { auth, navigation } = this.props;
    const isAuth = await auth.isAuthAsync();
    this.setState({ isAuth });
    if (isAuth) {
      const goToEvents = () => navigation.replace("Drawer");
      goToEvents();
    }
  }

  render() {
    const { email, password, isLoading, isAuth } = this.state;

    if (isAuth) {
      return <LoadingScreen />;
    }
    return (
      <View activeOpacity={0.4}
        onPress={this._buttonPressAction}
        style={styles.container}>
        <View style={styles.rowStyle}>
          <Text style={styles.loginTitle}>
            Faça seu Login
          </Text>
          <Icon
            style={styles.timelineCircle}
            name="key"
            size={30}
            color="#eabd1f"
          />
        </View>

        <View style={styles.firstInputView}>
          <Text style={styles.label}>
            Email ou usuário
            </Text>
          <TextInput
            autoCapitalize="none"
            textContentType="nickname"
            style={styles.inputComponent}
            underlineColorAndroid="transparent"
            keyboardType="default"
            value={email}
            autoCorrect={false}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <Text style={styles.label}>
            Senha
            </Text>
          <TextInput
            secureTextEntry
            textContentType="password"
            style={styles.inputComponent}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.submit}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  auth: AuthProps.isRequired
};

export default withAuth(Login);

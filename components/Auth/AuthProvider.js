import React, { Component } from "react";
import PropTypes from "prop-types";
import { SecureStore } from "expo";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.login = async (accessToken) => {
      await SecureStore.setItemAsync("token", accessToken);
      this.setState({ isAuth: true });
    };

    this.logout = () => {
      Promise.all([
        SecureStore.deleteItemAsync("token"),
      ]).then(() => {
        this.setState({ isAuth: false });
      });
    };

    this.getAccessToken = async () => {
      const accessToken = await SecureStore.getItemAsync("token");
      return accessToken;
    };

    this.isAuthAsync = async () => !!(await this.getAccessToken());

    this.state = {
      isAuth: !!this.getAccessToken()
    };
  }

  render() {
    const { isAuth } = this.state;
    const { children } = this.props;
    return (
      <AuthContext.Provider
        value={{
          isAuth,
          isAuthAsync: this.isAuthAsync,
          login: this.login,
          logout: this.logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

AuthProvider.defaultProps = {
  children: null
};

const AuthConsumer = AuthContext.Consumer;

const withAuth = ChildComponent => {
  const AuthComponent = props => (
    <AuthContext.Consumer>
      {value => <ChildComponent {...props} auth={value} />}
    </AuthContext.Consumer>
  );
  return AuthComponent;
};

const AuthProps = PropTypes.shape({
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isAuthAsync: PropTypes.func.isRequired
});

export { AuthProvider, AuthConsumer, withAuth, AuthProps };
export default AuthProvider;

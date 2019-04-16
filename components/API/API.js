import axios from "axios";
import { Alert } from "react-native";
import { AuthProvider } from "../Auth/AuthProvider";
import NavigationService from "../Navigation/NavigationService";

const API = {
  instantiate: async () => {
    const auth = new AuthProvider();
    const token = await auth.getAccessToken();

    const errorResponseHandler = async error => {
      const shouldRedirectToLoginScreen =
        error.response &&
        (typeof error.config.errorHandle === "undefined" ||
          error.config.errorHandle === true);

      if (shouldRedirectToLoginScreen) {
        switch (error.response.status) {
          case 401:
            Alert.alert(
              "Access Denied",
              "Please, confirm your credentials.",
              [
                {
                  text: "OK",
                  onPress: () => {
                    NavigationService.navigate("Logout", {});
                  }
                }
              ],
              {
                cancelable: false
              }
            );
            break;
          default:
        }
      }

      return Promise.reject(error);
    };

    const axiosConf = {
      baseURL: "https://frontend-test.agendaedu.com/api/"
    };

    if (token) {
      axiosConf.headers = {
        token: token
      };
    }

    const axiosInstance = axios.create(axiosConf);

    axiosInstance.interceptors.response.use(
      response => response,
      errorResponseHandler
    );

    return axiosInstance;
  }
};

export default API;

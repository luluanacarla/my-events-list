import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./EventDetail.style";
import Loader from "../../components/Loader";
import moment from "moment";

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {

    this.setState({
      isLoading: false
    });

  }

  render() {
    const {
      isLoading,
    } = this.state;

    const {
      navigation: {
        state: {
          params: { ev }
        }
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Image style={{ width: "100%", height: 200, borderRadius: 5, marginRight: 10 }} source={{ uri: ev.image }} />
        <View style={styles.container2}>
          <View style={styles.rowStyle}>
            <View style={styles.dateBox}>
              <Text style={{ fontSize: 25, color: "#733DBE" }}>
                {moment(ev.startAt).format("DD")}
              </Text>
              <Text style={{ fontSize: 15, color: "#733DBE" }}>
                {moment(ev.startAt).format("MMM")}
              </Text>
            </View>
            <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 10 }}>
              {ev.title}
            </Text>
          </View>
          <View style={[styles.rowStyle, styles.dateTime]}>
            <Icon
              style={styles.timelineCircle}
              name="clock-o"
              size={22}
              color="#808080"
            /><Text style={styles.subtitle}>{moment(ev.startAt).format("HH:mm")}</Text>
          </View>
          <Text style={{ marginTop: 20, lineHeight: 35, fontSize: 20, color: "#666666" }}>
            {ev.description}
          </Text>
        </View>
        <Loader visible={isLoading} />
      </View>
    );
  }
}

EventDetail.navigationOptions = {
  title: "Detalhes do Evento",
  headerBackTitle: null,
  headerTintColor: "white",
  headerBackStyle: {
    color: "white"
  },
  headerTitleStyle: {
    color: "white"
  },
  headerStyle: {
    backgroundColor: "#ED174B",
    shadowColor: "transparent",
    elevation: 0,
    shadowOpacity: 0
  }
};

export default EventDetail;

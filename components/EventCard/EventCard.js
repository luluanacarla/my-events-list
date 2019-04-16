import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./EventCard.style";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";

class EventCard extends Component {
  constructor(props) {
    super(props);

    const {
      navigate
    } = this.props;

    this.onPress = (ev) => {
      console.log(ev);
      navigate("EventDetail", { ev });
    };
  }

  render() {
    const {
      eventByDate
    } = this.props;

    return (
      <View>
        <View>
          <Text style={styles.date}>{eventByDate.date}</Text>

          <View>
            {eventByDate.events.map((ev) => (
              <TouchableWithoutFeedback onPress={() => this.onPress(ev)} key={ev.id}>
                <View style={styles.container}>
                  <View >
                    <Image style={{ width: 80, height: 140, borderRadius: 5, marginRight: 10 }} source={{ uri: ev.image }} />
                  </View>
                  <View >
                    <Text style={styles.pretitle}>EVENTOS</Text>
                    <Text style={styles.title}>{ev.title}</Text>
                    <View style={styles.rowStyle}>
                      <Icon
                        style={styles.timelineCircle}
                        name="clock-o"
                        size={20}
                        color="#808080"
                      /><Text style={styles.subtitle}>{moment(ev.startAt).format("HH:mm")}</Text>
                    </View>
                    <View>
                      <Text style={{ flex: 1, flexWrap: 'wrap', lineHeight: 50 }}> {moment(ev.sendAt).format("llll")}</Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

EventCard.propTypes = {
  eventByDate: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default EventCard;

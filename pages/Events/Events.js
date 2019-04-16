import React, { Component } from "react";
import { FlatList, View } from "react-native";
import styles from "./Events.style";
import API from "../../components/API/API";
import Loader from "../../components/Loader";
import { withAuth } from "../../components/Auth/AuthProvider";
import EventCard from "../../components/EventCard/EventCard";
import moment from "moment";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isLoading: true
    };

    this.onPressOverview = async offer => {
      const { id: routeId } = offer;
      const {
        navigation: { navigate }
      } = this.props;
      navigate("RouteOverview", { routeId });
    };
  }

  async componentDidMount() {
    this.API = await API.instantiate();

    const res = await this.API.get(`/events?limit=50;page=1`);
    const events = res.data.data
    events.sort((a, b) => {
      return new Date(a.sendAt) < new Date(b.sendAt);
    });
    const eventsBySendAt = events
      .map(item => new Date(item.sendAt).setHours(0, 0, 0, 0));
    const eventsBySendAtFiltered = eventsBySendAt.filter((v, i) => eventsBySendAt.indexOf(v) === i)

    const eventsArray = [];
    eventsBySendAtFiltered.map(date => {
      eventsArray.push({
        date: moment(date).format("LL"),
        events: events.filter(event => new Date(event.sendAt).setHours(0, 0, 0, 0) === date)
      });
    })

    this.setState({
      events: eventsArray,
      isLoading: false
    });
  }

  render() {
    const { events, isLoading } = this.state;
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          data={events}
          keyExtractor={event => String(event.date)}
          renderItem={({ item: event }) => (
            <EventCard
              eventByDate={event}
              navigate={navigate}
            />
          )}
        />
        <Loader visible={isLoading} />
      </View>
    );
  }
}

export default withAuth(Events);

import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { DrawerItems, SafeAreaView, withNavigation } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./SideMenu.style";

const SideMenu = props => (
  <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
    <View style={styles.header.view}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      >
        <MaterialIcons
          name="close"
          color={styles.header.icon.color}
          size={24}
        />
      </TouchableOpacity>
      <Text style={styles.header.text}>Menu</Text>
    </View>
    <ScrollView>
      <DrawerItems {...styles.drawer} {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default withNavigation(SideMenu);

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class DrawerTwoComponent extends React.Component {
  goTo() {
    console.warn('in goto');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'red' }}>
        <Text>DrawerTwoComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
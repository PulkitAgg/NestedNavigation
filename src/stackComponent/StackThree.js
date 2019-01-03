import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class StackThreeComponent extends React.Component {
  goTo() {
    console.warn('in goto');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>StackThreeComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
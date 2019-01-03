import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class StackTwoComponent extends React.Component {
  goTo() {
    console.warn('in goto');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor:'green'}}>
        <Text>StackTwoComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
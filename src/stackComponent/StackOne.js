import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class StackOneComponent extends React.Component {
  goTo() {
    console.warn('in goto');
    this.props.navigation.navigate('Drawer');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>StackOneComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
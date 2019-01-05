import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class StackOneComponent extends React.Component {
  goTo() {
    console.warn('in goto');
    this.props.navigation.navigate('StackTwo');
  }

  goToLogin() {
    this.props.navigation.navigate('MainStack');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>StackOneComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToLogin()} >
        <Text> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
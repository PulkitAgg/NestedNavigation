import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class DrawerOneComponent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',

  };


  goTo() {
    console.warn('in goto');
    this.props.navigation.navigate('StackTwo');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'green' }}>
        <Text>DrawerOneComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
        <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
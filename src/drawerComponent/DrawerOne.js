import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { DrawerActions } from 'react-navigation-drawer';

export default class DrawerOneComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerLeft: (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          title="Info"
          color="#aaa"
        />
      ),
    };
  };


  goTo() {
    console.warn('in goto');
    this.props.navigation.navigate('DrawerTwo');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'green' }}>
        <Text>DrawerOneComponent</Text>
        <TouchableOpacity onPress={() => this.goTo()} >
          <Text> Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import ImagePath from "../../utils/ImagePath";
// import Constants from "../../utils/Constants";
// import styles from "./Style";
export default class SideMenu extends Component {
    optionSelected(screenName, title) {
        // if (screenName == Constants.HEADER.HOME) {
        //     this.props.navigation.closeDrawer();
        // } else if (screenName == "NumberEntry") {
        //     this.props.navigation.navigate(screenName, { name: Constants.HEADER.ACCESS_PASS });
        // } else {
        //     this.props.navigation.navigate(screenName);
        // }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('./assests/images/home.png')} resizeMode={"contain"} />
                {/* {[1,2,3,4].map((object, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => this.optionSelected(object, object)}
                            key={index}>
                            <Image source={require('./assests/images/home.png')} resizeMode={"contain"} />
                            <Text>{object}</Text>
                        </TouchableOpacity>
                    );
                }, this)} */}
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DrawerTwo')}
                >
                    <Text>DrawerTwo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DrawerThree')}
                >
                    <Text>DrawerThree</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import StackOneComponent from './src/stackComponent/StackOne';
import StackTwoComponent from './src/stackComponent/StackTwo';
import StackThreeComponent from './src/stackComponent/StackThree';
import DrawerOneComponent from './src/drawerComponent/DrawerOne';
import DrawerTwoComponent from './src/drawerComponent/DrawerTwo';
import DrawerThreeComponent from './src/drawerComponent/DrawerThree';

const DrawerOneStackNavigator = createStackNavigator({
  DrawerOne: {
    screen: DrawerOneComponent
  },
  StackTwo: {
    screen: StackTwoComponent
  },
  StackThree: {
    screen: StackThreeComponent
  }
},{
  headerMode: 'none',
});


const DrawerNavigator = createDrawerNavigator({
  DrawerOne1: {
    screen: DrawerOneStackNavigator
  },
  DrawerTwo: {
    screen: DrawerTwoComponent
  },
  DrawerThree: {
    screen: DrawerThreeComponent
  }
});



const MainStackNavigator = createStackNavigator({
  StackOne: {
    screen: StackOneComponent
  },
  Drawer: {
    screen: DrawerNavigator
  }
});



export default createAppContainer(MainStackNavigator);

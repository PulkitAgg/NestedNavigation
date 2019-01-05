import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import StackOneComponent from './src/stackComponent/StackOne';
import StackTwoComponent from './src/stackComponent/StackTwo';
import StackThreeComponent from './src/stackComponent/StackThree';
import DrawerOneComponent from './src/drawerComponent/DrawerOne';
import DrawerTwoComponent from './src/drawerComponent/DrawerTwo';
import DrawerThreeComponent from './src/drawerComponent/DrawerThree';
import SideMenu from "./src/SideMenu";

const AuthenticationStack = createStackNavigator({
  StackOne: {
    screen: StackOneComponent
  },
  StackTwo: {
    screen: StackTwoComponent
  },
  StackThree: {
    screen: StackThreeComponent
  }
})

const MainStack = createStackNavigator({
  DrawerOne1: {
    screen: DrawerOneComponent
  },
  DrawerTwo: {
    screen: DrawerTwoComponent
  },
  DrawerThree: {
    screen: DrawerThreeComponent
  }
})



const SwitchNavigator = createSwitchNavigator({
  AuthenticationStack: AuthenticationStack,
  MainStack: MainStack
})


const AppRouter = createDrawerNavigator({
  SwitchNavigator: SwitchNavigator
},{
  drawerType : 'slide',
  contentComponent: SideMenu,
  drawerLockMode: "locked-closed"
})


export default createAppContainer(AppRouter);

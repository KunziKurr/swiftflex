import React from 'react';
import { ScrollView, SafeAreaView, Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Svg, { Circle, Ellipse,G, TSpan,  TextPath, Path, Ploygon, Polyline, Line, Rect, Use, Symbol, Defs, LinerGradient, RadialGradient, Stop, ClipPath, Pattern, Mask} from 'react-native-svg';
import { Container, Header, Content, List, ListItem } from 'native-base';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import InitialScreen from './src/components/initial_screen';
import CustomerSignUp from './src/components/customer_signup';
import CustomerLogin from './src/components/customer_login';
import OtpPassword from './src/components/otp_password';
import CustomerApp from './src/components/customer_app';
import CustomerMap from './src/components/customer_map';
import DrawerContainer from './src/components/Drawer_component';
import Navigator from './src/components/Navigator';
import BottomFooter from './src/components/BottomNav';
import Wallet from './src/components/myWallet';
import Settings from './src/components/settings';
import TransferHistory from './src/components/transferHistory';
import FinanceIndicator from './src/components/financeIndicator';
import Services from './src/components/services';
import Account from './src/components/account';
import StoreLocator from './src/components/storeLocator';
import FeedbackRating from './src/components/FeedbackRating';
import ContactUs from './src/components/contactUs';
import AboutUs from './src/components/aboutUs';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.mapper}>
        <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />
        <CustomerApp navigation={this.props.navigation} />
        <CustomerMap />
      </View>
    );
  }
}
class SideMenu extends React.Component {
  render(){
    return(
      <Navigator navigation={this.props.navigation} />
    )
  }
}

const navOptionHandler = (navigation) => ({
  headerShown:false
});

const WalletStack = createStackNavigator({

  Wallet:{
    screen:Wallet,
    navigationOptions:navOptionHandler
  },
  Settings:{
    screen:Settings,
    navigationOptions:navOptionHandler
  },
  TransferHistory:{
    screen:TransferHistory,
    navigationOptions:navOptionHandler
  },
})

const SettingsStack = createStackNavigator({
  Settings:{
    screen:Settings,
    navigationOptions:navOptionHandler
  },
})



const MainStack = createStackNavigator({
  Home: {
    screen:CustomerApp,
    navigationOptions: navOptionHandler
  },
  InitialScreen: {
    screen:InitialScreen,
    navigationOptions: navOptionHandler
  },
  CustomerSignUp: {
    screen:CustomerSignUp,
    navigationOptions: navOptionHandler
  },
  CustomerLogin: {
    screen:CustomerLogin,
    navigationOptions: navOptionHandler
  },
  OtpPassword: {
    screen:OtpPassword,
    navigationOptions: navOptionHandler
  },
  Settings: {
    screen:Settings,
    navigationOptions: navOptionHandler
  },
  Wallet: {
    screen:Wallet,
    navigationOptions: navOptionHandler
  },
  TransferHistory:{
    screen:TransferHistory,
    navigationOptions:navOptionHandler
  },
  FinanceIndicator:{
    screen:FinanceIndicator,
    navigationOptions:navOptionHandler
  },
  Services:{
    screen:Services,
    navigationOptions:navOptionHandler
  },
  Account:{
    screen:Account,
    navigationOptions:navOptionHandler
  },
  StoreLocator:{
    screen:StoreLocator,
    navigationOptions:navOptionHandler
  },
  FeedbackRating:{
    screen:FeedbackRating,
    navigationOptions:navOptionHandler
  },
  ContactUs:{
    screen:ContactUs,
    navigationOptions:navOptionHandler
  },
  AboutUs:{
    screen:AboutUs,
    navigationOptions:navOptionHandler
  },
},
{
  initialRouteName:'InitialScreen'
}
)
const appDrawer = createDrawerNavigator(
{
  drawer: MainStack
},
  {
    contentComponent:SideMenu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }
 )


export default createAppContainer(appDrawer);

const styles = StyleSheet.create({
  drawerMark:{
    backgroundColor: '#000',
    flex:1
  },
  stretch: {},
  mapper: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
  appName: {
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },

});

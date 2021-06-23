import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  DrawerLayoutAndroid,
  ScrollView,
  KeyboardAvoidingView,
  AppRegistry,
} from 'react-native';


class DrawerContainer extends Component {
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#0A5EA8', color:'#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
      );
    return (

        <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}>
    
    </DrawerLayoutAndroid>

    );
  }
}

export default DrawerContainer;

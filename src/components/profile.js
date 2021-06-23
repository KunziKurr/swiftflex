import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Cirle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Ploygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinerGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Profile extends Component {
  render() {
    return (

      <View style={styles.mapper}>
          <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />
            <Text>Profile</Text>
      </View>
       
    );
  }
  }

const styles = StyleSheet.create({
  
  mapper: {
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
  mainContainer: {
    backgroundColor: '#0A5EA8',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

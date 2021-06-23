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
import CustomerMap from './customer_map';

import { createStackNavigator } from 'react-navigation-stack';

import { DrawerActions } from 'react-navigation';



export default class BottomFooter extends Component {
  render() {
    return (

      (
        <View style={styles.bottom_footer}>
        <Text>
        Footer
        </Text>
      </View>
   )
    );
  }
}

const styles = StyleSheet.create({
  menuBtn: {
},
  mapper: {
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
});

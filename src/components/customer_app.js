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
  Circle,
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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class CustomerApp extends Component {
  render() {
    return (

      <View style={styles.mapper}>
          <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />
            <View style={styles.SvgCurve}>
            <Svg width="400" height="700" viewBox="0 10 350 850">
              <G transform="translate(0 , 5)">
                <Path
                d="m -84.310252,-49.163857 c 128.653668,-0.07171 312.407422,1.668075 511.396782,1.850931 0.80673,130.660648 6.83349,-131.431154 3.05608,149.933876 C 333.3485,442.27337 17.221045,-118.07184 -68.773282,202.7469 -88.967843,278.08668 -84.310252,-49.163857 -84.310252,-49.163857 Z"
                fill="#077ADEE6" />
              </G>
            </Svg>
            <Svg width="500" height="790" viewBox="0 100 350 850" style={{top:-700, left:-50}}>

              <G transform="translate(10 , 50)">
                <Path
                d="m -84.310252,-49.163857 c 128.653668,-0.07171 312.407422,1.668075 511.396782,1.850931 0.80673,130.660648 6.83349,-131.431154 3.05608,149.933876 C 333.3485,442.27337 17.221045,-118.07184 -68.773282,202.7469 -88.967843,278.08668 -84.310252,-49.163857 -84.310252,-49.163857 Z"
                fill="#0A5EA8" />
              </G>
            </Svg>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            style={styles.menuBtn}>
              <Svg width="20" height="20" viewBox="0 0 20 20">
                <Path
                  d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
            </View>
            <Text style={{position: 'absolute', top: '1%',color: '#fff', zIndex: 33, left: '25%', fontSize: 20}}>Home</Text>
            <Text style={styles.screenName}>SwiftFlex</Text>
              <Text style={styles.fnDesc}>Fast & Secure </Text>
              <View
                style={{position: 'absolute', top: '15%', left:'5%', backgroundColor: "#0A5EA8", color: "#fff", height:'6%', width: '45%', alignItems: 'center',
                  justifyContent: 'center', display: 'flex', shadowColor: '#000', shadowOpacity: 4, shadowOffset: 2, zIndex: 12}}>
                  <Text style={{color: '#fff', fontSize: 15, }}>A/C Balance $ 10000</Text>
              </View>
                {/*Body Content Goes here*/}
                <View style={styles.BodyPane}>

                      <CustomerMap />



                </View>
      </View>


    );
  }
  }

const styles = StyleSheet.create({
  BodyPane:{
    width: "100%",
    top: -5,
    color: '#fff',
    height: "100%",
    zIndex: 10
  },
  SvgCurve:{
    height: '10%',
    zIndex: 20
  },

  fnDesc:{
    color: '#aaa',
    position: 'absolute',
    right: 50,
    top: 65,
    fontSize: 15,
    fontWeight: '500',
    textTransform:'capitalize',
    zIndex: 33
  },
screenName:{
  color: '#fff',
  position: 'absolute',
  right: 45,
  top: 30,
  fontSize: 23,
  fontWeight: '500',
  textTransform:'uppercase',
  zIndex: 33

},
  mapper: {
  },
  menuBtn: {
    top: 10,
    left: 20,
    lineHeight: 1,
    width: 20,
    zIndex: 1,
    position: 'absolute'
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

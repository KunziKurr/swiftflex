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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class InitialScreen extends Component {
  render() {
    return (

      <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />
            <View styles={styles.pane1}>
              <View style={styles.Svg2}>
                <Svg width="400" height="680" viewBox="0 10 200 260">
                  <G transform="translate(100 ,80)">
                    <Path
                      d="M137.1,-47.9C144.3,-22.5,93.6,18.3,47.8,47.2C2,76,-39,93,-80.2,72.1C-121.5,51.2,-163,-7.6,-149.6,-41.5C-136.3,-75.3,-68.2,-84.1,-1.6,-83.6C65,-83.1,130,-73.2,137.1,-47.9Z"
                      fill="#077ADEE6"
                    />
                  </G>
                </Svg>
              </View>
              <View style={styles.Svg1}>
                <Svg width="400" height="450" viewBox="10 0 180 270">
                  <G transform="translate(100, 120)">
                    <Path
                      d="M137.1,-47.9C144.3,-22.5,93.6,18.3,47.8,47.2C2,76,-39,93,-80.2,72.1C-121.5,51.2,-163,-7.6,-149.6,-41.5C-136.3,-75.3,-68.2,-84.1,-1.6,-83.6C65,-83.1,130,-73.2,137.1,-47.9Z"
                      fill="#fff"
                    />
                  </G>
                </Svg>
                <Image
                  style={styles.Runner}
                  source={require('../images/Runner.png')}
                />
            </View>

          </View>
          <View style={styles.secondPane}>
            <Text style={styles.heading}>Swift Flex</Text>
            <Text style={styles.prompter}>
              Your No. 1 Mobile Money Transfer App
            </Text>

            {/* GET STARTED BUTTON */}
            <TouchableOpacity
              style={styles.getStartedBtn}
              onPress={() => this.props.navigation.navigate('CustomerSignUp')}>
              <Text style={styles.getStartedBtnTxt}>Lets Get Started</Text>
            </TouchableOpacity>
            {/* END OF GET STARTED BUTTON */}

            {/* BUSINESS ACCOUNT PROMPTER */}
            <View style={styles.BusinessPrompter}>
              <Text style={styles.windowPick}>Own a Business ? Open a </Text>
              <TouchableOpacity style={styles.openAccountBtn}>
                <Text style={styles.windowPicker}>Business Account.</Text>
              </TouchableOpacity>
            </View>
            {/* END OF BUSINESS ACCOUNT PROMPTER */}

            {/* PRIVACY ADVISOR */}

            <View style={styles.privacyPrompterContainer}>
              <TouchableOpacity style={styles.privacyPrompterbtn}>
                <Text style={styles.privacyPrompter}>Terms Of Service | </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.privacyPrompterbtn}>
                <Text style={styles.privacyPrompter}>Terms Of Service</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  privacyPrompterContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  privacyPrompterbtn: {},
  privacyPrompter: {
    color: '#fff',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BusinessPrompter: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 140,
  },
  openAccountBtn: {},
  windowPick: {
    fontSize: 15,
    color: '#fff',
  },
  windowPicker: {
    color: '#fff',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  getStartedBtnTxt: {
    color: '#2980b6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  getStartedBtn: {
    backgroundColor: '#fff',
    height: "10%",
    width: 300,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginTop: 20,
    position: 'absolute',
    top: "25%",
  },
  prompter: {
    color: '#aaa',
    textTransform: 'uppercase',
    textAlign: 'center',
    top:'3%',
    fontSize: 20,
    fontStyle: 'normal',
  },
  heading: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'Trajan Pro',
    fontWeight: '900',
    marginTop: -50,
  },
  pane1:{
    display: 'flex',
    width: wp('100%'),
    height: hp('40%'),
  },
  secondPane: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: wp('100%'),
    height: hp('62%'),
    top: '-7%'
  },
  Runner: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 70,
  },

  Svg1: {
    display: 'flex',
    width: wp('100%'),
    height: hp('38%'),
    top: "-31%"
  },
  Svg2: {
    top: "7%",
    display: 'flex',
    width: wp('100%'),
    height: hp('28%'),
  },
  blobMarger1: {},
  blobMarger2: {
    position: 'absolute',
  },
  stretch: {
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
    backgroundColor: '#0A5EA8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    backgroundColor: '#000',
  },
  mapper: {
    backgroundColor: '#0A5EA8',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(225,225,225, 0)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    borderBottomColor: '#BFE5FE',
    borderBottomWidth: 0.5,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    height: 150,
    width: 170,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  appName: {
    color: '#fff',
    alignItems: 'flex-start',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 60,
    marginTop: 4,
  },
  quora: {
    color: '#fff',
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    marginTop: 12,
  },
});

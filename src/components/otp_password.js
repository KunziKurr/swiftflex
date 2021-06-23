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
  SafeAreaView,
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

export default class OtpPassword extends Component {
  render() {
    return  (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
      <View style={styles.mapper}>
        <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />

          <View style={styles.Svg2}>
          <Svg width="400" height="650" viewBox="0 20 250 350">
            <G transform="translate(100 ,80)">
              <Path
                d="M137.1,-47.9C144.3,-22.5,93.6,18.3,47.8,47.2C2,76,-39,93,-80.2,72.1C-121.5,51.2,-163,-7.6,-149.6,-41.5C-136.3,-75.3,-68.2,-84.1,-1.6,-83.6C65,-83.1,130,-73.2,137.1,-47.9Z"
                fill="#077ADEE6"
              />
            </G>
            <Text style={styles.screenIndicatorTxt}>Almost Set ...</Text>
            <Text style={styles.screenIndicatorName}>OTP Password !</Text>

          </Svg>
        </View>

        <View>

             <View style={styles.inputContainer}>


            <TextInput
              style={styles.input}
              returnKeyType="go"
              keyboardType="number-pad"
              placeholder="OTP code ..."
              returnKeyType="done"
              placeholderTextColor="#fff"
            />

            {/* GET STARTED BUTTON */}
            <TouchableOpacity
              style={styles.getStartedBtn}
              onPress={() => this.props.navigation.navigate('Home')}
              >
              <Text style={styles.getStartedBtnTxt}>Let's Go</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.passwordPrompter}>
                Resend Code
              </Text>
            </TouchableOpacity>
            {/* END OF GET STARTED BUTTON */}

     </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mapper: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
    passwordPrompter:{
        color: '#fff',
        fontSize: 15,
        fontStyle: 'normal',
        textDecorationLine: 'underline',
        top:15
    },
  membershipPrompter: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    top:200
  },
  getStartedBtnTxt: {
    color: '#2980b6',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  getStartedBtn: {
    backgroundColor: '#fff',
    height: 50,
    width: 300,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginTop:10
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: wp('100%'),
    height: hp('40%'),
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    borderBottomColor: '#BFE5FE',
    borderBottomWidth: 0.5,
    textAlign: 'left',
    color: '#fff',
  },
  screenIndicatorName: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    top: '150%',
    left: '-20%',
    textTransform: 'capitalize',
    justifyContent: 'center',
    textAlign: 'center',
  },
  screenIndicatorTxt:{
    color:'#fff',
    fontSize:15,
    top:"120%",
    left: '-35%',
    textTransform: 'capitalize',
    justifyContent: 'center',
    textAlign: 'center'
  },

  Svg2: {
    display: 'flex',
    width: wp('100%'),
    height: hp('38%'),
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

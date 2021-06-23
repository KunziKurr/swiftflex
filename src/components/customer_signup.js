import React, {Component} from 'react';
import {
  View,
  Image,
  DrawerLayoutAndroid,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
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

export default class CustomerSignUp extends Component {
  render() {
    return  (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
      <View style={styles.mapper}>
        <StatusBar backgroundColor="#0A5EA8" barStyle="light-content" />
      <View style={styles.responsiveBox}>
        <View style={styles.mainContainer}>

            <View style={styles.Svg2}>
            <Svg width="400" height="650" viewBox="0 20 250 350">
              <G transform="translate(100 ,80)">
                <Path
                  d="M137.1,-47.9C144.3,-22.5,93.6,18.3,47.8,47.2C2,76,-39,93,-80.2,72.1C-121.5,51.2,-163,-7.6,-149.6,-41.5C-136.3,-75.3,-68.2,-84.1,-1.6,-83.6C65,-83.1,130,-73.2,137.1,-47.9Z"
                  fill="#077ADEE6"
                />
              </G>
              <Text style={styles.screenIndicatorTxt}>Lets Get Started</Text>
              <Text style={styles.screenIndicatorName}>Sign Up Here!</Text>

            </Svg>

          </View>

          <View>

               <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onSubmitEditing={() => this.emailInput.focus()}
                autocorrect={false}
                autoCompleteType="name"
                keyboardType="default"
                returnKeyType="next"
                placeholder="Fulllname..."
                placeholderTextColor="#fff"

              />
              {/* <Svg width="70" height="70" viewBox="0 0 200 350">
                <G transform="translate(100 ,100)">
                  <Path
                    d="M137.1,-47.9C144.3,-22.5,93.6,18.3,47.8,47.2C2,76,-39,93,-80.2,72.1C-121.5,51.2,-163,-7.6,-149.6,-41.5C-136.3,-75.3,-68.2,-84.1,-1.6,-83.6C65,-83.1,130,-73.2,137.1,-47.9Z"
                    fill="#077ADEE6"
                  />
                </G>
              </Svg> */}

              <TextInput
                style={styles.input}
                autoCapitalize="none"
                ref={input => (this.emailInput = input)}
                onSubmitEditing={() => this.numberInput.focus()}
                autocorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email Address..."
                placeholderTextColor="#fff"
              />

              <TextInput
                style={styles.input}
                autoCapitalize="none"
                ref={input => (this.numberInput = input)}
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCompleteType="tel"
                autocorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
                placeholder="Phone number..."
                placeholderTextColor="#fff"
              />

              <TextInput
                style={styles.input}
                returnKeyType="next"
                ref={input => (this.passwordInput = input)}
                onSubmitEditing={() => this.ConfirmpasswordInput.focus()}
                autoCompleteType="password"
                keyboardType="default"
                placeholder="Password ..."
                returnKeyType="next"
                placeholderTextColor="#fff"
                secureTextEntry
              />

              <TextInput
                style={styles.input}
                returnKeyType="go"
                ref={input => (this.ConfirmpasswordInput = input)}
                keyboardType="default"
                placeholder="Confirm Password ..."
                returnKeyType="done"
                placeholderTextColor="#fff"
                secureTextEntry
              />
              {/* GET STARTED BUTTON */}
              <TouchableOpacity
                style={styles.getStartedBtn}
                onPress={() => this.props.navigation.navigate('CustomerLogin')}>
                <Text style={styles.getStartedBtnTxt}>Sign Up</Text>
              </TouchableOpacity>
              {/* END OF GET STARTED BUTTON */}

              <TouchableOpacity>
                <Text style={styles.membershipPrompter}>
                  I am Already A Member .
                </Text>
              </TouchableOpacity>
       </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  membershipPrompter: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    top: 30,
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
    height: hp('62%'),
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
    fontSize:13,
    top:"120%",
    left: '-30%',
    textTransform: 'capitalize',
    justifyContent: 'center',
    textAlign: 'center'
  },

  Svg2: {
    display: 'flex',
    width: wp('100%'),
    height: hp('38%'),
  
  },

  mapper: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
});

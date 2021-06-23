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
  SafeAreaView,
  KeyboardAvoidingView,
  AppRegistry,
  TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
import { Container, Header, Content, List, ListItem } from 'native-base';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import InitialScreen from './initial_screen';
import CustomerSignUp from './customer_signup';
import CustomerLogin from './customer_login';
import OtpPassword from './otp_password';
import CustomerApp from './customer_app';
import CustomerMap from './customer_map';
import DrawerContainer from './Drawer_component';

class Navigator extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.drawerMark}>


              <View style={styles.SvgCurve2}>
              <Svg width="300" height="700" viewBox="0 10 250 800">
                <G transform="translate(10 ,50)">
                  <Path
                  d="m -84.310252,-49.163857 c 128.653668,-0.07171 312.407422,1.668075 511.396782,1.850931 0.80673,130.660648 6.83349,-131.431154 3.05608,149.933876 C 333.3485,442.27337 17.221045,-118.07184 -68.773282,202.7469 -88.967843,278.08668 -84.310252,-49.163857 -84.310252,-49.163857 Z"
                  fill="#0A5EA8" />
                </G>
              </Svg>
              <View style={styles.infoCart} >
                    <Svg height="100" width="100" style={styles.AvatarCircle}>
                      <Circle cx="45" cy="45" r="45" fill="#077ADEE6" />

                  </Svg>
                  <Image
                    style={styles.avatar}
                    source={require('../images/user.png')}
                  />

                <Text style={styles.account}>
                    Swift Flex Account
                    </Text>

                    <Text style={styles.username}>
                    John Doe
                    </Text>

                      <Text style={styles.email}>
                    johndoe@example.com
                    </Text>
                    <Text style={styles.verify}>
                      **~VERIFIED~**
                  </Text>
              </View>
              </View>

              <View style={styles.SvgCurve}>
              <Svg width="300" height="700" viewBox="0 10 250 800">
                <G transform="translate(12 , 50)">
                  <Path
                  d="m -84.310252,-49.163857 c 128.653668,-0.07171 312.407422,1.668075 511.396782,1.850931 0.80673,130.660648 6.83349,-131.431154 3.05608,149.933876 C 333.3485,442.27337 17.221045,-118.07184 -68.773282,202.7469 -88.967843,278.08668 -84.310252,-49.163857 -84.310252,-49.163857 Z"
                  fill="#077ADEE6" />
                </G>
              </Svg>
              </View>
          <View style={styles.menuItems}>


                            <Container style={{width: '100%', backgroundColor:'allowTransparency', paddingTop: 0, display: 'flex', justifyContent: 'center',}}>

                        <Content>
                          <List style={{backgroundColor:'allowTransparency'}}>
                            <ListItem style={{width: '100%', backgroundColor:'allowTransparency'}}>
                              <TouchableOpacity
                              onPress={() => this.props.navigation.navigate('Home')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>


                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M100 25l66.797 50v100h-41.797v-58.203h-50v58.203h-41.797v-100z" fill="#0A5EA8" />
                                </Svg>

                              <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20,justifyContent: 'flex-start',}}>
                               Home</Text>
                              </TouchableOpacity>
                            </ListItem>
                            <ListItem style={{width: '100%',}}>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Wallet')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>




                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M95.703 8.203l79.297 41.797v16.797h-158.203v-16.797zM133.203 83.203h25v58.594h-25v-58.594zM16.797 183.203v-25h158.203v25h-158.203zM83.203 83.203h25v58.594h-25v-58.594zM33.203 83.203h25v58.594h-25v-58.594z" fill="#0A5EA8" />
                                </Svg>



                              <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20,justifyContent: 'flex-start',}}>
                               My Wallet</Text>
                              </TouchableOpacity>
                            </ListItem>

                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('TransferHistory')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>


                              <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M147.266 52.734l19.531-19.531v58.594h-58.594l26.953-26.953q-14.844-14.844-35.156-14.844-20.703 0-35.352 14.648t-14.648 35.352 14.648 35.352 35.352 14.648q14.453 0 28.32-9.766t18.945-23.438h17.188q-5.469 21.875-23.438 35.938t-41.016 14.063q-27.344 0-46.875-19.531t-19.531-47.266 19.531-47.266 46.875-19.531q11.719 0 25.586 5.664t21.68 13.867z" fill="#0A5EA8" />
                              </Svg>



                              <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                  Transfer History</Text>

                              </TouchableOpacity>
                            </ListItem>

                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Settings')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>


                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                  <Path d="M100 129.297q12.109 0 20.703-8.594t8.594-20.703-8.594-20.703-20.703-8.594-20.703 8.594-8.594 20.703 8.594 20.703 20.703 8.594zM162.109 108.203l17.578 13.672q2.734 1.953 0.781 5.469l-16.797 28.906q-1.563 2.734-5.078 1.563l-20.703-8.203q-8.203 5.859-14.063 8.203l-3.125 21.875q-0.781 3.516-3.906 3.516h-33.594q-3.125 0-3.906-3.516l-3.125-21.875q-7.422-3.125-14.063-8.203l-20.703 8.203q-3.516 1.172-5.078-1.563l-16.797-28.906q-1.953-3.516 0.781-5.469l17.578-13.672q-0.391-2.734-0.391-8.203t0.391-8.203l-17.578-13.672q-2.734-1.953-0.781-5.469l16.797-28.906q1.563-2.734 5.078-1.563l20.703 8.203q8.203-5.859 14.063-8.203l3.125-21.875q0.781-3.516 3.906-3.516h33.594q3.125 0 3.906 3.516l3.125 21.875q7.422 3.125 14.063 8.203l20.703-8.203q3.516-1.172 5.078 1.563l16.797 28.906q1.953 3.516-0.781 5.469l-17.578 13.672q0.391 2.734 0.391 8.203t-0.391 8.203z" fill="#0A5EA8" />
                                </Svg>



                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                  Settings</Text>
                              </TouchableOpacity>
                            </ListItem>

                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('FinanceIndicator')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>

                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M191.797 66.797q0 6.641-5.078 11.523t-11.719 4.883h-0.391q-2.734 0-3.906-0.391l-29.688 29.688q0.781 2.344 0.781 4.297 0 6.641-5.078 11.523t-11.719 4.883-11.719-4.883-5.078-11.523q0-1.953 0.781-4.297l-21.484-21.484q-2.344 0.781-4.297 0.781t-4.297-0.781l-37.891 37.891q0.781 2.344 0.781 4.297 0 6.641-5.078 11.719t-11.719 5.078-11.719-5.078-5.078-11.719 5.078-11.523 11.719-4.883q3.125 0 4.297 0.391l37.891-37.891q-0.391-1.172-0.391-4.297 0-6.641 4.883-11.719t11.523-5.078 11.719 5.078 5.078 11.719q0 3.125-0.391 4.297l21.094 21.094q1.172-0.391 4.297-0.391t4.297 0.391l29.688-29.297q-0.781-2.344-0.781-4.297 0-6.641 5.078-11.719t11.719-5.078 11.719 5.078 5.078 11.719z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                  Finance Indicator</Text>
                              </TouchableOpacity>
                            </ListItem>

                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Services')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>

                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                  <Path d="M158.203 83.203h16.797v33.594h-16.797v-33.594zM125 150v-100h16.797v100h-16.797zM25 116.797v-33.594h16.797v33.594h-16.797zM91.797 183.203v-166.406h16.406v166.406h-16.406zM58.203 150v-100h16.797v100h-16.797z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                Services</Text>
                              </TouchableOpacity>
                            </ListItem>

                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Account')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>


                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M75 108.203q8.594 0 19.922 2.344-19.922 10.938-19.922 28.906v18.75h-58.203v-20.703q0-8.984 10.742-16.016t23.633-10.156 23.828-3.125zM137.5 116.797q14.453 0 30.078 6.25t15.625 16.406v18.75h-91.406v-18.75q0-10.156 15.625-16.406t30.078-6.25zM75 91.797q-10.156 0-17.578-7.422t-7.422-17.578 7.422-17.578 17.578-7.422 17.578 7.422 7.422 17.578-7.422 17.578-17.578 7.422zM137.5 100q-8.594 0-14.648-6.055t-6.055-14.648 6.055-14.844 14.648-6.25 14.648 6.25 6.055 14.844-6.055 14.648-14.648 6.055z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                My Account</Text>
                              </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('StoreLocator')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>

                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                  <Path d="M41.797 166.797h116.406v16.406h-116.406v-16.406zM83.203 66.797q0 7.031 4.883 11.719t11.914 4.688 11.914-4.688 4.883-11.719q0-6.641-5.078-11.719t-11.719-5.078-11.719 5.078-5.078 11.719zM150 66.797q0 16.797-12.5 39.648t-25 37.305l-12.5 14.453q-5.469-5.859-13.867-16.016t-22.266-34.375-13.867-41.016q0-20.703 14.648-35.352t35.352-14.648 35.352 14.648 14.648 35.352z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                              Store Locator</Text>
                              </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('FeedbackRating')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>
          <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M100 143.75l-51.563 31.25 13.672-58.594-45.313-39.453 59.766-5.078 23.438-55.078 23.438 55.078 59.766 5.078-45.313 39.453 13.672 58.594z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                              Feedback & Rating</Text>
                              </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                              <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ContactUs')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>

                                <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                <Path d="M196.875 1.228c2.344 1.674 3.46 4.353 3.013 7.143l-28.571 171.429c-0.335 2.121-1.674 3.906-3.571 5.022-1.004 0.558-2.232 0.893-3.46 0.893-0.893 0-1.786-0.223-2.679-0.558l-50.558-20.647-27.009 32.924c-1.339 1.674-3.348 2.567-5.469 2.567-0.781 0-1.674-0.112-2.455-0.446-2.79-1.004-4.688-3.683-4.688-6.696v-38.951l96.429-118.192-119.308 103.237-44.085-18.080c-2.567-1.004-4.241-3.348-4.464-6.138-0.112-2.679 1.228-5.246 3.571-6.585l185.714-107.143c1.116-0.67 2.344-1.004 3.571-1.004 1.451 0 2.902 0.446 4.018 1.228z" fill="#0A5EA8" />
                                </Svg>


                                <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                              Contact Us</Text>
                              </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                              <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('AboutUs')}
                                 style={{backgroundColor:'', zIndex: 1, width:'100%', display: 'flex', flexDirection: 'row', }}>

                                  <Svg width="20" height="20" viewBox="0 0 200 200" style={{height: 20, width:20,display: 'flex', flexDirection: 'row', left: 15}}>
                                  <Path d="M100 4c-53.030 0-96.010 42.98-96.010 96 0 53.030 42.98 96.010 96.010 96.010 53.010 0 96-42.98 96-96.010 0-53.020-42.99-96-96-96zM108.96 38.66c9.36 0 12.11 5.43 12.11 11.64 0 7.75-6.2 14.92-16.79 14.92-8.86 0-13.080-4.45-12.82-11.82 0-6.21 5.19-14.74 17.5-14.74zM84.98 157.5c-6.4 0-11.070-3.89-6.6-20.94l7.33-30.25c1.27-4.84 1.48-6.78 0-6.78-1.91 0-10.22 3.34-15.12 6.64l-3.19-5.23c15.55-12.99 33.43-20.61 41.080-20.61 6.4 0 7.46 7.56 4.27 19.2l-8.4 31.8c-1.49 5.62-0.85 7.56 0.64 7.56 1.92 0 8.2-2.32 14.38-7.19l3.62 4.86c-15.13 15.12-31.62 20.94-38.010 20.94z" fill="#0A5EA8"/>
                                  </Svg>


                                    <Text style={{fontSize: 17, display: 'flex', flexDirection: 'row', textAlign: 'center', left: 20, justifyContent: 'flex-start',}}>
                                  About Us</Text>
                              </TouchableOpacity>
                            </ListItem>

                          </List>
                        </Content>
                      </Container>



          </View>
          </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Navigator;
const styles = StyleSheet.create({

  menuItems:{
    color: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    width: '100%',
    zIndex: 10000,
    flex:1,
    top:170,
    position: 'absolute'

  },
  account:{
    color: '#fff',
    fontSize: 15,
    textTransform:'uppercase',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    left: "2%",
    top:'-25%',
    width: wp('100%'),

  },
  username:{
    color: '#fff',
    left: 112,
    top: "-22%"

  },
  email:{
    color: '#eee',
    left: 112,
    top: "-21%"
  },
  verify:{
    fontSize: 10,
    color: '#aaa',
    left: 112,
    top: "-20%"
  },
  avatar:{
    width: 65,
    height: 65,
    marginTop: 2,
    left: 10
  },
  AvatarCircle:{
    top: 92
  },
  infoCart:{
    top: -780,
  },
  SvgCurve:{
    marginTop: -910,
    color: '#fff',
  },
  SvgCurve2:{
    marginTop: 0,
    color: '#fff',
    zIndex: 2000
  },

  drawerMark:{

  },


});

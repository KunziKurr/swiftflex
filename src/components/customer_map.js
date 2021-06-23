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

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class CustomerMap extends Component {
  render() {
    return (
<MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}>
        <Marker
          coordinate={{latitude: 37.7825259, longitude: -122.4351431}}
          title={'Swift Flex'}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    top: 5,
    height: '100%',
  },
  Appname: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: 20.5,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  AppContainer: {
    backgroundColor: '#fff',
  },
  header_container: {
    height: 75,
    backgroundColor: '#0A5EA8',
  },
  mapper: {
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
});

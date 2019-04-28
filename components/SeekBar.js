import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

var Slider = require('react-native-slider');

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);



export default class SeekBar extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const elapsed = minutesAndSeconds(this.props.currentPosition);
    const remaining = minutesAndSeconds(this.props.trackLength - this.props.currentPosition);

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>
            {elapsed[0] + ":" + elapsed[1]}
          </Text>
          <View style={{flex: 1}} />
          <Text style={[styles.text, {width: 40}]}>
            {this.props.trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
          </Text>
        </View>
        
      </View>

    );
  }



}




const styles = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }
});

import React, { PropTypes, Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Slider } from 'react-native-elements';

const SlideController = (props) => {
  const {
    title,
    minimumValue,
    maximumValue,
    step,
    orientation,
    onSlidingStart,
    onSlidingComplete,
    value,
    onValueChange
  } = props

  return(
    <View>
      <View style={styles.viewInfo}>
        <Text>Current Speed:{title}</Text>
      </View>
      <View style={styles.viewControl}>
        <Slider
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          orientation={orientation}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSlidingComplete}
          value={value}
          onValueChange={onValueChange}
          style={styles.styleControl}
          minimumTrackTintColor={'#b3b3b3'}
          // orientation='horizontal'
          thumbTintColor='black'
          animateTransitions={true}
          thumbStyle= {styles.thumbStyle}
          trackStyle={{width: 200}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewInfo: {
    flex: 1,
    justifyContent: 'center', //Doc
    alignItems: 'center', // Ngang
  },
  viewControl: {
    flex: 9,
    justifyContent: 'center', //Doc
    alignItems: 'center', // Ngang
    backgroundColor: 'blue',
  },
  styleControl: {
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'black',
  },
  thumbStyle: {
    height: 35,
    width: 35,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'white'
  }
});

export default SlideController

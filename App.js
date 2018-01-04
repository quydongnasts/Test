import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import globalStyles from './styles';
import Orientation from 'react-native-orientation';
import { Slider, Icon  } from 'react-native-elements';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      speed: 3,
      toStringSpeed: '0',
      direction: 2,
      toStringDirection: '0'
    }
  }

  componentDidMount() {
    // Lock screen Landscape
    Orientation.lockToLandscape();
  };


  // event onSlidingComplete for speed control
  _isSpeedStart = () => {

  };

  // event onSlidingComplete for speed control
  _setCurrentSpeed = () =>{
    switch(this.state.speed){
      case 0:
        this.setState({toStringSpeed: 'up to 3'});
        break;
      case 1:
        this.setState({toStringSpeed: 'up to 2'});
        break;
      case 2:
        this.setState({toStringSpeed: 'up to 1'});
        break;
      case 3:
        this.setState({toStringSpeed: '0'})
        break;
      case 4:
        this.setState({toStringSpeed: 'down to 1'})
        break;
      case 5:
        this.setState({toStringSpeed: 'down to 2'})
        break;
      case 6:
        this.setState({toStringSpeed: 'down to 3'})
        break;
    };
  };


  // event onSlidingComplete for direction control
  _isDirectionStart = () => {

  };

  // event onSlidingComplete for direction control
  _setCurrentDirection = () =>{
    switch(this.state.direction){
      case 0:
        this.setState({toStringDirection: 'left 2'});
        break;
      case 1:
        this.setState({toStringDirection: 'left 1'});
        break;
      case 2:
        this.setState({toStringDirection: '0'});
        break;
      case 3:
        this.setState({toStringDirection: 'right 1'})
        break;
      case 4:
        this.setState({toStringDirection: 'right 2'})
        break;
    };
  };

  render() {
    return (
      <View style={globalStyles.container}>

        <View style={globalStyles.row1}>

          <View style={globalStyles.row1col1}>
            <View style={globalStyles.signalIcon}>
              <Text> 1/1 </Text>
            </View>
            <View style={globalStyles.signalButton}>
              <Text> 1/2 </Text>
            </View>
          </View>

          <View style={globalStyles.row1col2}>
            <Text> row1col2 </Text>
          </View>

        </View>

        <View style={globalStyles.row2}>

          <View style={globalStyles.row2col1}>
            <View style={globalStyles.viewInfo}>
              <Text>Current Speed: {this.state.toStringSpeed}</Text>
            </View>
            <View style={globalStyles.viewControl}>
              <Slider
                minimumValue={0}
                maximumValue={6}
                step={1}
                style={globalStyles.styleControl}
                minimumTrackTintColor='#b3b3b3'
                // orientation='horizontal'
                orientation= 'vertical'
                thumbTintColor='black'
                animateTransitions={true}
                thumbStyle= {globalStyles.thumbStyle}
                trackStyle={{width: 200}}
                onSlidingStart={this._isSpeedStart}
                onSlidingComplete={this._setCurrentSpeed}
                value={this.state.speed}
                onValueChange={(speed) => this.setState({speed})}
              />
            </View>
          </View>

          <View style={globalStyles.row2col2}>
            <View style={[globalStyles.viewInfo, {backgroundColor: 'yellow'}]}>
              <Text>Turn Left / Turn Right: {this.state.toStringDirection}</Text>
            </View>
            <View style={[globalStyles.viewControl, {backgroundColor: 'gray'}]}>
              <Slider
                minimumValue={0}
                maximumValue={4}
                step={1}
                style={globalStyles.styleControl}
                minimumTrackTintColor='#b3b3b3'
                // orientation='horizontal'
                // orientation= 'vertical'
                thumbTintColor='black'
                animateTransitions={true}
                thumbStyle= {globalStyles.thumbStyle}
                trackStyle={{width: 200}}
                onSlidingStart={this._isDirectionStart}
                onSlidingComplete={this._setCurrentDirection}
                value={this.state.direction}
                onValueChange={(direction) => this.setState({direction})}
              />
            </View>
          </View>

        </View>

      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';

import globalStyles from './styles';
import Orientation from 'react-native-orientation';
import { Slider, Icon  } from 'react-native-elements';
import { MKSwitch } from 'react-native-material-kit';

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
        this.setState({toStringSpeed: 'up 3'});
        break;
      case 1:
        this.setState({toStringSpeed: 'up 2'});
        break;
      case 2:
        this.setState({toStringSpeed: 'up 1'});
        break;
      case 3:
        this.setState({toStringSpeed: '0'})
        break;
      case 4:
        this.setState({toStringSpeed: 'down 1'})
        break;
      case 5:
        this.setState({toStringSpeed: 'down 2'})
        break;
      case 6:
        this.setState({toStringSpeed: 'down 3'})
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
            <View style={globalStyles.signalView}>
              <Icon
                  name='power-off'
                  type='font-awesome'
                  color='#ffffff'
                  onPress={() => alert('signal')}
              />
            </View>
            <View style={globalStyles.signalView}>
              <MKSwitch style={{}}
                  trackSize={15}
                  trackLength={35}
                  onColor="green"
                  thumbOnColor='green'
                  rippleColor="rgba(255,152,0,.2)"
                  onPress={() => console.log('orange switch pressed')}
                  onCheckedChange={(e) => console.log('orange switch checked', e)}
              />
            </View>
          </View>

          <View style={globalStyles.row1col2}>
            <View style={globalStyles.infromationView}>
              <View style={globalStyles.informationDetail}>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff', fontSize: 18, fontFamily: 'digital'}}>SPEED</Text>
                </View>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff',fontSize: 20, fontFamily: 'digital'}}>{this.state.toStringSpeed}</Text>
                </View>
              </View>
              <View style={globalStyles.informationDetail}>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff', fontSize: 17, fontFamily: 'digital'}}>DIRECTION</Text>
                </View>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff', fontSize: 20, fontFamily: 'digital'}}>{this.state.toStringDirection}</Text>
                </View>
              </View>
            </View>
            <View style={globalStyles.entertaiment}>
              <View style={globalStyles.entertaimentView}>
                <Icon
                  name='video-camera'
                  type='font-awesome'
                  color='#ffffff'
                  onPress={() => alert('signal')}
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => console.log('orange switch pressed')}
                    onCheckedChange={(e) => console.log('orange switch checked', e)}
                />
              </View>
            </View>
            <View style={globalStyles.entertaiment}>
              <View style={globalStyles.entertaimentView}>
                <Icon
                  name='lightbulb'
                  type='foundation'
                  color='#ffffff'
                  onPress={() => alert('signal')}
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => console.log('orange switch pressed')}
                    onCheckedChange={(e) => console.log('orange switch checked', e)}
                />
              </View>
            </View>
            <View style={globalStyles.entertaiment}>
              <View style={globalStyles.entertaimentView}>
                <Icon
                  name='volume-down'
                  type='font-awesome'
                  color='#ffffff'
                  onPress={() => alert('signal')}
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => console.log('orange switch pressed')}
                    onCheckedChange={(e) => console.log('orange switch checked', e)}
                />
              </View>
            </View>

          </View>

        </View>

        <View style={globalStyles.row2}>

          <View style={globalStyles.row2col1}>
            <View style={globalStyles.viewInfo}>

            </View>

            <View style={globalStyles.viewControl}>
              <View style={globalStyles.viewControlAbsolute} />
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
            <View style={globalStyles.viewInfo}>

            </View>
            <View style={globalStyles.viewControl}>
              <View style={globalStyles.viewControlAbsolute} />
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

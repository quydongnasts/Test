import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Vibration,
  TouchableHighlight
} from 'react-native';

import globalStyles from './styles';
import Orientation from 'react-native-orientation';
import { Slider, Icon  } from 'react-native-elements';
import { MKSwitch } from 'react-native-material-kit';

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      signal: false,
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
        this.setState({toStringSpeed: '30'});
        break;
      case 1:
        this.setState({toStringSpeed: '20'});
        break;
      case 2:
        this.setState({toStringSpeed: '10'});
        break;
      case 3:
        this.setState({toStringSpeed: '0'})
        break;
      case 4:
        this.setState({toStringSpeed: '10'})
        break;
      case 5:
        this.setState({toStringSpeed: '20'})
        break;
      case 6:
        this.setState({toStringSpeed: '30'})
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
        this.setState({toStringDirection: '20'});
        break;
      case 1:
        this.setState({toStringDirection: '10'});
        break;
      case 2:
        this.setState({toStringDirection: '0'});
        break;
      case 3:
        this.setState({toStringDirection: '10'})
        break;
      case 4:
        this.setState({toStringDirection: '20'})
        break;
    };

  };

  // check connect with a car
  // _checkConnectCar = (isCheck) =>{
  //   if( isCheck.checked ){
  //     this.setState({signal: true})
  //   }else {
  //     this.setState({signal: false})
  //   }
  // };

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
              />
            </View>
            <View style={globalStyles.signalView}>
              <MKSwitch style={{}}
                  trackSize={15}
                  trackLength={35}
                  onColor="green"
                  thumbOnColor='green'
                  rippleColor="rgba(255,152,0,.2)"
                  onPress={() => {Vibration.vibrate(200)}}
              />
            </View>
          </View>

          <View style={globalStyles.row1col2}>
            <View style={globalStyles.infromationView}>
              <View style={globalStyles.informationDetail}>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff', fontSize: 15, fontFamily: 'digital'}}>SPEED</Text>
                </View>
                <View style={globalStyles.title}>
                  { this.state.speed === 3 ? null :
                  <View style={globalStyles.titleAbsolute}>
                    {this.state.speed  < 3 ?
                      <Icon
                        name='arrow-up'
                        type='font-awesome'
                        color='red'
                        size={15}
                      /> :
                      <Icon
                        name='arrow-down'
                        type='font-awesome'
                        color='red'
                        size={15}
                      />
                    }
                  </View>
                  }
                  <Text style= {{color: '#ffffff',fontSize: 20, fontFamily: 'digital'}}>{this.state.toStringSpeed}</Text>
                </View>
              </View>
              <View style={globalStyles.informationDetail}>
                <View style={globalStyles.title}>
                  <Text style= {{color: '#ffffff', fontSize: 15, fontFamily: 'digital'}}>DIRECTION</Text>
                </View>
                <View style={globalStyles.title}>
                { this.state.direction === 2 ? null :
                <View style={globalStyles.titleAbsolute}>
                  {this.state.direction  < 2 ?
                    <Icon
                      name='arrow-left'
                      type='font-awesome'
                      color='red'
                      size={15}
                    /> :
                    <Icon
                      name='arrow-right'
                      type='font-awesome'
                      color='red'
                      size={15}
                    />
                  }
                </View>
                }
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
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => {Vibration.vibrate(200)}}
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
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => {Vibration.vibrate(200)}}
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
                />
              </View>
              <View style={globalStyles.entertaimentView}>
                <MKSwitch style={{}}
                    trackSize={15}
                    trackLength={35}
                    onColor="green"
                    thumbOnColor='green'
                    rippleColor="rgba(255,152,0,.2)"
                    onPress={() => {Vibration.vibrate(200)}}
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
                <View style={globalStyles.viewButtonTop}>
                  <Icon
                    name='sort-up'
                    type='font-awesome'
                    color='#ffffff'
                    size={220}
                    iconStyle={{height: 100}}
                    onPress={() => {Vibration.vibrate(200)}}
                    underlayColor='transparent'
                  />
                </View>
              <View style={{flex: 0.5}} />
                <View style={globalStyles.viewButtonBottom}>
                  <Icon
                    name='sort-down'
                    type='font-awesome'
                    color='#ffffff'
                    size={220}
                    iconStyle={{paddingBottom: 380}}
                    onPress={()=>{alert("down")}}
                    underlayColor='transparent'
                  />
                </View>
            </View>
          </View>

          <View style={globalStyles.row2col2}>
            <View style={globalStyles.viewInfo}>
              <View style={globalStyles.energyInfo}>
                <Text style={{fontSize: 18, fontFamily: 'digital', color: 'white'}}>100 %</Text>
              </View>
              <View style={globalStyles.energyInfo}>
                <Icon
                    name='car'
                    type='font-awesome'
                    color='#ffffff'
                    size={20}
                />
              </View>
            </View>
            <View style={globalStyles.viewControlRight}>
              <View style={globalStyles.viewControlAbsolute} />
                <View style={globalStyles.viewButtonLeft}>
                  <Icon
                    name='caret-left'
                    type='font-awesome'
                    color='#ffffff'
                    size={220}
                    onPress={()=>{alert("left")}}
                    underlayColor='transparent'
                    containerStyle={{height:140}}
                  />
                </View>
                <View style={{flex: 0.5}} />
                <View style={globalStyles.viewButtonRight}>
                <Icon
                  name='caret-right'
                  type='font-awesome'
                  color='#ffffff'
                  size={220}
                  onPress={()=>{alert("right")}}
                  underlayColor='transparent'
                  containerStyle={{height:140}}
                />
              </View>
            </View>
          </View>

        </View>

      </View>
    );
  }
}

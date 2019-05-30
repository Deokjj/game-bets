import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

class AbelText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded : false
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'abel-regular': require('../assets/fonts/Abel-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true })
  }
  
  render() {
    if(this.state.fontLoaded){
      return <Text {...this.props} style={[this.props.style, { fontFamily: 'abel-regular' }]} />;
    }
    else{
      return <Text/>;
    }
  }
}

class RobotoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded : false
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true })
  }
  
  render() {
    if(this.state.fontLoaded){
      return <Text {...this.props} style={[this.props.style, { fontFamily: 'roboto-regular' }]} />;
    }
    else{
      return <Text/>;
    }
  }
}

class RobotoTextBold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded : false
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });
    
    this.setState({ fontLoaded: true })
  }
  
  render() {
    if(this.state.fontLoaded){
      return <Text {...this.props} style={[this.props.style, { fontFamily: 'roboto-bold' }]} />;
    }
    else{
      return <Text/>;
    }
  }
}

export { AbelText, RobotoText, RobotoTextBold };
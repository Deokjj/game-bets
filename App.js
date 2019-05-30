import React from 'react';
import {styles} from "./Styles";
import { Text, View } from 'react-native';
import { AbelText, RobotoText, RobotoTextBold } from './components/StyledText';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }
  
  async componentDidMount() {
    /* 
    Assumming that fetching data happens with an API request
    instead of importing static Json,
    so I fetched games data at componentDidMount instead of in the global scope
    */
    // fetch value of key 'games' of the object parsed from json file.
    const { games } = require('./assets/api.json');
    if(games){
      
    }
      
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AbelText style={styles.headerTextStyle}>GAME BETS</AbelText>
        </View>
        <View style={styles.content}>
        </View>
      </View>
    );
  }
}
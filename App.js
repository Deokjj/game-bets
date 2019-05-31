import React from 'react';
import { styles } from "./Styles";
import { View, FlatList, Button, ActivityIndicator } from 'react-native';
import { AbelText } from './components/StyledText';
import ContentCard from './components/ContentCard';

 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    
    this.getNewGames = this.getNewGames.bind(this);
  }
  
  gamesArr = [];
  
  async getNewGames() {
    const games = await this.gamesArr[parseInt(Math.random() * this.gamesArr.length)]['games'];
    if(games.length > 0){
      this.setState({
        games: games,
      });
    }
  }
  
  async componentDidMount() {
    /* 
    Assumming that fetching data happens with an API request
    instead of importing static Json,
    so I fetched games data at componentDidMount instead of in the global scope
    */
    // fetch value of key 'games' of the object parsed from json file.
    this.gamesArr = await [
      require('./assets/api.json'), 
      require('./assets/api1.json'),
      require('./assets/api2.json')
    ];
    
    this.getNewGames();
  }
  
  render() {
    const {test, games} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AbelText style={styles.headerTextStyle}>GAME BETS</AbelText>
        </View>
        <View style={styles.content}>
          { games.length > 0 ?
          <FlatList data={games} style={styles.content}
          renderItem={({item,index}) =>
            <ContentCard game={item} stylesheet={styles} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          /> :
          <ActivityIndicator size="large" color="#0000ff" />
          }
        </View>
        <View style={styles.buttonView}>
          <Button
          title="get new Games"
          onPress={this.getNewGames}
          color='#33335c'
          />
        </View>
      </View>
    );
  }
}
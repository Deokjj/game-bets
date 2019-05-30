import React from 'react';
import { View, Image } from 'react-native';
import { AbelText, RobotoText, RobotoTextBold } from './StyledText';
import moment from 'moment';
import staticImg from '../assets/images/staticImg';

export default class ContentCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  addOperator() {
    
  }
  
  setUpperCase() {
    
  }
  
  getRatingsJSX(n, style) {
    if(n > 0){
      const stars = [];
      for (let i = 0; i < n; i++){
        stars.push(
          <Image style={style} key={i}
            source={staticImg['stars']['solid']}/>
        );
      }
      for (let i = n; i < 5; i++){
        stars.push(
          <Image style={style} key={i}
            source={staticImg['stars']['regular']}/>
        );
      }
      
      return <View style={{flexDirection:'row'}} >{stars}</View>
    }
    else{
      return <View />
    }
  }
  
  render() {
    const { game, stylesheet, index } = this.props;
    const prettyTimeStamp = moment(game.start_time).format("dddd MMM D - h:mm A");
    
    return(
      <View 
      style={index === 0 ? [stylesheet.contentCard, stylesheet.contentCardTop] : stylesheet.contentCard}>
      
        <RobotoText style={stylesheet.timeStamp}>{prettyTimeStamp}</RobotoText>
        
        <View style={[stylesheet.contentCardData, stylesheet.contentCardDataHeader]}>
          <View style={stylesheet.teamDisplay} name='buffer'/>
          <AbelText style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            SPREAD
          </AbelText>
          <AbelText style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            MONEYLINE
          </AbelText>
          <AbelText style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            OVER/UNDER
          </AbelText>
        </View>
        
        <View style={[stylesheet.contentCardData, stylesheet.contentCardDataWrapper]}>
          <View style={stylesheet.teamDisplay}>
            <View style={stylesheet.teamView}>
              <Image style={stylesheet.teamImage}
              source={staticImg['teams'][game.team_away]}/>
              <RobotoTextBold>{game.team_away}</RobotoTextBold>
            </View>
            <View style={stylesheet.teamView}>
              <Image style={stylesheet.teamImage}
              source={staticImg['teams'][game.team_home]}/>
              <RobotoTextBold>{game.team_home}</RobotoTextBold>
            </View>
            <View style={stylesheet.ratingView} name="buffer"/>
          </View>
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper]} name="spread">
            <RobotoTextBold style={stylesheet.teamDataText}>{game.spread.away}</RobotoTextBold>
            <RobotoTextBold style={stylesheet.teamDataText}>{game.spread.home}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
                {this.getRatingsJSX(game.spread.rating, stylesheet.ratingImage)}
            </View>
          </View>
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper]} name="moneyline">
            <RobotoTextBold style={stylesheet.teamDataText}>{game.moneyline.away}</RobotoTextBold>
            <RobotoTextBold style={stylesheet.teamDataText}>{game.moneyline.home}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
              {this.getRatingsJSX(game.moneyline.rating, stylesheet.ratingImage)}
            </View>
          </View>
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper]} name="over-under">
            <RobotoTextBold style={stylesheet.teamDataText}>{game.over_under.line}</RobotoTextBold>
            <RobotoTextBold style={stylesheet.teamDataText}>{game.over_under.line}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
              {this.getRatingsJSX(game.over_under.rating, stylesheet.ratingImage)}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

import React from 'react';
import { View, Image } from 'react-native';
import { RobotoText, RobotoTextBold } from './StyledText';
import moment from 'moment';
import staticImg from '../assets/images/staticImg';

export default class ContentCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  addOperator(number,toFixed) {
    number = parseFloat(number);
    if(toFixed>0)
      number = number.toFixed(toFixed);
    
    if(number > 0){
      return "+" + number;
    }
    else{
      return number;
    }
  }
  
  Ratings = (props) => {
    const {n, wrapperStyle, imgStyle} = props;
    
    if(n > 0){
      const stars = [];
      for (let i = 0; i < n; i++){
        stars.push(
          <Image style={imgStyle} key={i}
            source={staticImg['stars']['solid']}/>
        );
      }
      for (let i = n; i < 5; i++){
        stars.push(
          <Image style={imgStyle} key={i}
            source={staticImg['stars']['regular']}/>
        );
      }
      
      return <View style={wrapperStyle} >{stars}</View>
    }
    else{
      return <View />
    }
  }
  
  render() {
    const { game, stylesheet, index } = this.props;
    const prettyTimeStamp = moment(game.start_time).format("dddd MMM D - h:mm A");
    const teamDataTextWithRating = [stylesheet.teamDataText,stylesheet.teamDataTextWithRating];
    const teamDataText = stylesheet.teamDataText;
    const getDataTextStyle = (rating, pick, position) => {
      const result = [];
      result.push(stylesheet.teamDataText);
      if(rating > 0){
        result.push(stylesheet.teamDataTextWithRating);
        if(pick && position && pick === position){
          result.push(stylesheet.greenHighlighter);
        }
      }
      return result;
    }
    
    return(
      <View 
      style={index === 0 ? [stylesheet.contentCard, stylesheet.contentCardTop] : stylesheet.contentCard}>
        <RobotoText style={stylesheet.timeStamp}>{prettyTimeStamp}</RobotoText>
        
        <View style={[stylesheet.contentCardData, stylesheet.contentCardDataHeader]}>
          <View style={stylesheet.teamDisplay} name='buffer'/>
          <RobotoTextBold style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            SPREAD
          </RobotoTextBold>
          <RobotoTextBold style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            MONEYLINE
          </RobotoTextBold>
          <RobotoTextBold style={[stylesheet.teamData,stylesheet.contentDataHeaderText]}>
            OVER/UNDER
          </RobotoTextBold>
        </View>
        
        <View style={[stylesheet.contentCardData, stylesheet.contentCardDataWrapper]}>  
          <View style={stylesheet.teamDisplay}>
            <View style={stylesheet.teamView}>
              <Image style={stylesheet.teamImage}
              source={staticImg['teams'][game.team_away]}/>
              <RobotoTextBold style={stylesheet.teamText}>{game.team_away.toUpperCase()}</RobotoTextBold>
            </View>
            <View style={stylesheet.teamView}>
              <Image style={stylesheet.teamImage}
              source={staticImg['teams'][game.team_home]}/>
              <RobotoTextBold style={stylesheet.teamText}>{game.team_home.toUpperCase()}</RobotoTextBold>
            </View>
            <View style={stylesheet.ratingView} name="buffer"/>
          </View>
          
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper]} name="spread">
            <RobotoTextBold style={getDataTextStyle(game.spread.rating,game.spread.pick,'a')}>{this.addOperator(game.spread.away,1)}</RobotoTextBold>
            <RobotoTextBold style={getDataTextStyle(game.spread.rating,game.spread.pick,'h')}>{this.addOperator(game.spread.home,1)}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
              <this.Ratings n={game.spread.rating} 
              wrapperStyle={stylesheet.ratingWrapper} imgStyle={stylesheet.ratingImage}/>
            </View>
          </View>
          
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper, stylesheet.teamDataWrapperMiddle]} name="moneyline">
            <RobotoTextBold style={getDataTextStyle(game.moneyline.rating,game.moneyline.pick,'a')}>{this.addOperator(game.moneyline.away)}</RobotoTextBold>
            <RobotoTextBold style={getDataTextStyle(game.moneyline.rating,game.moneyline.pick,'h')}>{this.addOperator(game.moneyline.home)}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
              <this.Ratings n={game.moneyline.rating} 
              wrapperStyle={stylesheet.ratingWrapper} imgStyle={stylesheet.ratingImage}/>
            </View>
          </View>
          
          <View style={[stylesheet.teamData, stylesheet.teamDataWrapper]} name="over-under">
            <RobotoTextBold style={getDataTextStyle(game.over_under.rating,game.over_under.pick,'o')}>{"o " +game.over_under.line}</RobotoTextBold>
            <RobotoTextBold style={getDataTextStyle(game.over_under.rating,game.over_under.pick,'u')}>{"u " +game.over_under.line}</RobotoTextBold>
            <View style={stylesheet.ratingView}>
              <this.Ratings n={game.over_under.rating} 
              wrapperStyle={stylesheet.ratingWrapper} imgStyle={stylesheet.ratingImage}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

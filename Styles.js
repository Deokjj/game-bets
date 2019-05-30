import { StyleSheet } from 'react-native';
import Colors from "./assets/constants/Colors";
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexBasis: 80,
    alignItems: 'center',
    justifyContent: 'center',
    ...ifIphoneX({
      paddingTop: 30,
      flexBasis: 110
    })
  },
  content: {
    flex: 1
  },
  headerTextStyle: {
    fontSize: 32,
    color: Colors.text,
    letterSpacing: 2
  },
  contentCard: {
    backgroundColor: 'white',
    padding:16,
    borderWidth: 2,
    borderColor: Colors.dividerColor,
    borderTopWidth: 0
  },
  contentCardTop:{
    borderTopWidth: 2,
    borderTopColor: Colors.dividerColor,
  },
  timeStamp:{
    fontSize: 20,
    color: Colors.text
  },
  contentCardData: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentCardDataHeader: {
    marginTop:8,
    marginBottom:8,
  },
  contentDataHeaderText:{
    color: Colors.SecondaryText,
    textAlign: 'center',
  },
  contentCardDataWrapper: {
    backgroundColor: Colors.lighterPrimary,
    padding: 8
  },
  teamDisplay: {
    flexBasis: 50,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 6
  },
  teamView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamImage: {
    width: 36,
    height: 36
  },
  ratingView: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingImage: {
    width: 14,
    height: 14
  },
  teamData: {
    flex: 1,
  },
  teamDataWrapper: {
    backgroundColor: Colors.primary,
    padding: 6
  },
  teamDataText: {
    backgroundColor: Colors.darkerPrimary,
    marginBottom: 4,
    paddingTop: 18,
    paddingBottom: 18,

    textAlign: 'center'
  }
});
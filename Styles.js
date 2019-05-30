import { StyleSheet } from 'react-native';
import Colors from "./assets/constants/Colors";
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
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
  }
});
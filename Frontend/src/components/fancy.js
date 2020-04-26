import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
class Fancy extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Fancy</Text>
      </View>
    );
  }
}
//  styling in react native is not by pixels but by intensity unites
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flex: 2,
    backgroundColor:"black"
  },
  buttonSingup: {
    flex:1
  }
});

export default Fancy
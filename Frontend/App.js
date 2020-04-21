/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Todo extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      todos: [1, 2, 3],
      newTodo: ""
    }
  }
  handleChange(e) {
    const { value } = e.target
    this.setState({newTodo: value})
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo:""})
  }
  render() {
    return ( 
      <View> 
        <TextInput value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableHighlight>
        {this.state.todos.map(todo => <Text>t{todo}</Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Todo;

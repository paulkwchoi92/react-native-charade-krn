import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [1, 2, 3],
      newTodo: '',
    };

  }
  handleChange(text) {
    this.setState({newTodo: text});
  }
  handleRemove(e) {
    const newArr = this.state.todos.filter(field => field !== e.target)
    this.setState({todos: newArr})
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableOpacity>
        {this.state.todos.map(todo => (
          <Text>t{todo}</Text>
        ))}
      </View>
    );
  }
}

export default Todo;

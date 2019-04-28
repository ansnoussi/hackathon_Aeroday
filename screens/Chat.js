import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';

type Props = {
  name?: string,
};

class Chat extends Component {

  constructor(props){
    super(props);
    console.log("got to chat");
    this.state = {
      messages: [],
    };
  
  }


  static navigationOptions = ({ navigation }) => ({
    title: '',
  });
  
  // 1.
componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
}

// 2.
componentWillUnmount() {
  Fire.shared.off();
}

get user() {
console.log(Fire.shared.uid);
  // Return our name and our UID for GiftedChat to parse
  return {
    name: this.props.navigation.state.params.name,
    _id: Fire.shared.uid,
  };
}

  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      );
  }
}

const styles = StyleSheet.create({});

export default Chat;

import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import HealpCentreHeader from './HealpCentreHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ChatBox (props) {
  const [messages, setMessages] = useState ([]);

  useEffect (() => {
    setMessages ([
      {
        _id: 1,
        text: 'Hello developer k',
        createdAt: new Date (),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback ((messages = []) => {
    setMessages (previousMessages =>
      GiftedChat.append (previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <HealpCentreHeader 
      setToggleScreenHelpCentre={props.setToggleScreenHelpCentre}
      />
      <Text>njnjnjn</Text>
      {/* <GiftedChat
        messages={messages}
        onSend={messages => onSend (messages)}
        user={{
          _id: 1,
        }}
      /> */}
    </SafeAreaView>
  );
}

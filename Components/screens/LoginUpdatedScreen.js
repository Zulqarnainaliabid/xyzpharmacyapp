import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header';
import InputTextField from './InputField';
export default function LoginUpdatedScreren(props) {
  return (
    <View style={{flex: 1}}>
      <Header name={props.HeaderName} ScreenName={false} 
       EditButton={true}
      />
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 12,
          backgroundColor: '#FFFFFF',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <InputTextField item={props.UserData} />
        </ScrollView>
      </View>
    </View>
  );
}

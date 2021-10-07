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
  
  console.log('data user - ', props.UserData);
  // const inputArray = [
  //   {label: 'name', name: props.UserData.userName, seleted: true,seletedUpdateButton:true},
  //   {label: 'Email', name: props.UserData.userEmail, seleted: true,seletedUpdateButton:true},
  //   {resendButton: 'RESEND CONFIRMATION EMAIL', seleted: false,seletedUpdateButton:true},
  //   {label: 'Mobole Number', name: '', seleted: true,seletedUpdateButton:true},
  //   {label: 'Birth of Date', name: '', seleted: true,seletedUpdateButton:true},
  //   {label: 'Gender', name: '', seleted: true,seletedUpdateButton:true},
  //   {
  //     label: 'Location on map (req to Optimise store)',
  //     name: props.UserData.userLocation,
  //     seleted: true
  //     ,seletedUpdateButton:true
  //   },
  //   {
  //     label: 'Complete Adress #house(for delivery)',
  //     name: props.UserData.UserAdress,
  //     seleted: true,seletedUpdateButton:false
  //   },
  // ];
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

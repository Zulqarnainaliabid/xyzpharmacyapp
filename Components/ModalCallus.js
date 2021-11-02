import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, View, TextInput, Text} from 'react-native';
import Dialog from 'react-native-dialog';
import {useNavigation} from '@react-navigation/native';
export default function ModalCallUs (props) {
  const navigation = useNavigation ();
  return (
    <View>
      <Dialog.Container visible={props.ToggleModal}>
        <Dialog.Title>Member only feature!</Dialog.Title>
        <View style={{paddingHorizontal: 12}}>
          <Text style={{color: '#1A1A1A', fontSize: 16, fontWeight: '700'}}>
            Hi! The support over the call is only available to
            GrocerClub members.
            But don't worry, you can always chat with us if you are not a member
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 12,
            }}
          >
            <Dialog.Button
              label="CHAT NOW"
              style={{color: '#E18C68', fontSize: 15}}
              onPress={() => {
                props.setToggleModal (false);
                navigation.navigate ('LiveChateScreen');
              }}
            />
            <Dialog.Button
              label="BECOME A MEMBER"
              style={{color: '#E18C68', fontSize: 15}}
              onPress={() => {
                props.setToggleModal (false);
                navigation.navigate ('MemberShipScreen', {
                  name: 'GrocerClub Membership mmmm',
                });
              }}
            />
          </View>
        </View>
      </Dialog.Container>
    </View>
  );
}

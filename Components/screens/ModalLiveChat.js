import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, View, TextInput} from 'react-native';
import Dialog from 'react-native-dialog';

export default function ModalLiveChat (props) {
  const [visible, setVisible] = useState (true);
  //   useEffect(() => {
  //     if (props.data) {
  //       setVisible(true);
  //     }
  //     props.setShowGender(false);
  //   }, [props.data]);
  //   const showDialog = () => {
  //     setVisible(true);
  //   };
  //   const handleGender = gender => {
  //     setVisible(false);
  //     props.handleGernder(gender);
  //   };

  return (
    <View>
      <Dialog.Container visible={props.ShowModal}>
        <View>
          <TextInput
            autoFocus
            placeholder="Search our articles"
            style={{fontSize: 17}}
            style={{borderBottomWidth: 2, padding: 0, borderColor: '#D86224'}}
            // onChangeText={onChangeText}
            // value={text}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 12,
            }}
          >
            <Dialog.Button
              label="Cancle"
              style={{color: '#D86224'}}
              onPress={() => props.setShowModa (false)}
            />
            <Dialog.Button
              label="Ok"
              style={{color: '#D86224'}}
              onPress={() => props.setShowModa (false)}
            />
          </View>
        </View>
      </Dialog.Container>
    </View>
  );
}

import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Dialog from 'react-native-dialog';

export default function Alert(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.data) {
      setVisible(true);
    }
    props.setShowGender(false);
  }, [props.data]);
  const showDialog = () => {
    setVisible(true);
  };
  const handleGender = gender => {
    setVisible(false);
    props.handleGernder(gender);
  };

  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Dialog.Title style={{textAlign: 'center'}}>Choose Gender</Dialog.Title>
        <View>
          <Dialog.Button label="Male" onPress={() => handleGender('Male')} />
          <Dialog.Button
            label="Female"
            onPress={() => handleGender('Female')}
          />
          <Dialog.Button label="Other" onPress={() => handleGender('Other')} />
        </View>
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: 0,
  },
});

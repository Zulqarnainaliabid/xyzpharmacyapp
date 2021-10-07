import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PhoneNumber = (props) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View>
        <PhoneInput
        keyboardType='numeric'
          // containerStyle={{ backgroundColor: 'none'}}
          containerStyle={{
            borderBottomWidth: 1,
            borderColor: '#CCA18A',
            backgroundColor: 'transparent',
          }}
          textContainerStyle={{backgroundColor: 'transparent'}}
          codeTextStyle={{color: '#000000', backgroundColor: 'transparent'}}
          flagButtonStyle={{color: '#000000'}}
          ref={phoneInput}
          defaultValue={value}
          defaultCode="PK"
          layout="first"
          disableArrowIcon={true}
          onChangeText={text => {
            setValue(text);
            props.funPhone(text)
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);

          }}
          autoFocus
        />
      </View>
    </>
  );
};

export default PhoneNumber;

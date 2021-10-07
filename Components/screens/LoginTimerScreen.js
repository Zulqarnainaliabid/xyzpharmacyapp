import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import Loading from './LoadingScreen';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDown from 'react-native-countdown-component';
import LoginScreen from './LoginScreen';
const image = require('../Images/BackImage.jpg');
const image2 = require('../Images/CheckMark.gif');
export default function LoginTimerScreen(props) {
  const [value, setValue] = useState('');
  const [HandleGotoLoginScreen, setHandleGotoLoginScreen] = useState(false);
  const [ToggleButtons, setToggleButtons] = useState(false);
  const [ToggleSuccesScreen, setToggleSuccesScreen] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props1, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  const CELL_COUNT = 6;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ToggleSuccesScreen) {
        setHandleGotoLoginScreen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [ToggleSuccesScreen]);

  useEffect(() => {
    let length = value.toString().length;
    if (length === 6) {
      setToggleSuccesScreen(true);
    } 
  }, [value]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      props.Fun(false);
      return true;
    });
  }, []);
  if (HandleGotoLoginScreen) {
    return <LoginScreen  />;
  } else {
    if (ToggleSuccesScreen) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{height: '100%', width: '100%'}}>
            <ImageBackground source={image} style={styles.BackImage}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000000',
                }}>
                <View
                  style={{
                    width: 347,
                    borderWidth: 1,
                    backgroundColor: '#000000',
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: 530,
                      backgroundColor: '#8DA399',
                      borderWidth: 1,
                    }}
                    backgroundColor="#8DA399"
                    source={image2}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{height: '100%', width: '100%'}}>
            <View
              style={{
                flex: 1,
                // borderWidth: 1,
                paddingHorizontal: 12,
                paddingVertical: 33,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontSize: 21,
                  color: '#000000',
                  marginBottom: 12,
                }}>
                Enter the sent code
              </Text>
              <Text
                style={{
                  color: '#EB885D',
                  textAlign: 'center',
                  fontSize: 21,
                  fontWeight: '700',
                  marginBottom: 12,
                }}>
                03313571616
              </Text>
              <CountDown
                until={15}
                size={14}
                onFinish={() => setToggleButtons(true)}
                digitStyle={{backgroundColor: 'transparent'}}
                digitTxtStyle={{color: '#000000', fontSize: 17}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
              <SafeAreaView style={styles.root}>
                <CodeField
                  ref={ref}
                  {...props1}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="numeric"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </SafeAreaView>
              <Pressable
                onPress={() => {
                  setToggleProfileScreen(!ToggleProfileScreen);
                }}></Pressable>
              <View
                style={{
                  flex: 1,
                  //   borderWidth: 1,
                  justifyContent: 'center',
                  width: '100%',
                }}>
                {ToggleButtons && (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        props.Fun(false);
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginBottom: 25,
                          backgroundColor: '#FF783E',
                          paddingVertical: 12,
                          borderRadius: 3,
                          color: 'white',
                          fontSize: 17,
                        }}>
                        RESEND SMS
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.Fun(false);
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginBottom: 17,
                          elevation: 1,
                          paddingVertical: 12,
                          backgroundColor: '#FF783E',
                          borderRadius: 3,
                          color: 'white',
                          fontSize: 17,
                        }}>
                        CALL AGAIN
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#000000',
                    // borderWidth: 1,
                    fontSize: 18,
                  }}>
                  Didn't recieved sms?
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#A1A1A1',
                    // borderWidth: 1,
                    fontSize: 16,
                    marginTop: 12,
                  }}>
                  Please verify your mobile number by sending 'MNP' in an SMS to
                  99095 and then re-try SMS erification
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

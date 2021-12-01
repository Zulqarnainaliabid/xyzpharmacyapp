import React, {useState, useEffect,useContext} from 'react';
import {Context} from '../Context/Context';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import LoginTimerScreren from './LoginTimerScreen';
import PhoneNumber from '../PhoneNumber';
import LoginUpdatedScreren from './LoginUpdatedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileBackImage = require ('../Images/ProfileBackImage.jpg');
const image2 = require ('../Images/Fruti.jpg');

const ProfileScreen = ({route, navigation}) => {
  const contextData = useContext (Context);
  const [ToggleProfileScreen, setToggleProfileScreen] = useState (true);
  const [ToggleDisableButton, setToggleDisableButton] = useState (false);
  const [ToggleLoginScreen, setToggleLoginScreen] = useState (false);
  const [UserUpdatedData, setUserUpdatedData] = useState(null)
  const [ToggleUserUpdatedScreen, setToggleUserUpdatedScreen] = useState(false)
   useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('Login');
        if (value !== null) {
           let data = JSON.parse(value)
            setUserUpdatedData(data)
        }
      } catch (e) {
        console.log('read error', e);
      }
      try {
        const value = await AsyncStorage.getItem('UpdateScreen');
        if (value !== null) {
          let data = JSON.parse(value)
          setToggleUserUpdatedScreen(data)
        }
      } catch (e) {
        console.log('read error', e);
      }
    };
    getData();
  }, []);

  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  function HandlePhoneNumber (text) {
    let length = text.toString ().length;
    if (length === 10) {
      setToggleDisableButton (true);
    } else {
      setToggleDisableButton (false);
    }
  }

  if (ToggleUserUpdatedScreen) {
    return (
      <LoginUpdatedScreren UserData={UserUpdatedData} HeaderName={HeaderName} />
    );
  } else {
    if (ToggleLoginScreen) {
      return (
        <LoginTimerScreren
          data={setToggleLoginScreen}
          Fun={setToggleLoginScreen}
        />
      );
    } else {
      if (ToggleProfileScreen) {
        return (
          <View style={{flex: 1}}>
            <ImageBackground
              imageStyle={{
                resizeMode: 'stretch', // works only here!
              }}
              source={ProfileBackImage}
              // blurRadius={2}
              style={{
                flex: 1,
                justifyContent: 'center',
                width: null, // applied to Image
                height: null,
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontSize: 17,
                  }}
                >
                  Hi, we need your phone number
                </Text>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  to verify your identity
                </Text>
                <Pressable
                  onPress={() => {
                    setToggleProfileScreen (!ToggleProfileScreen);
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      backgroundColor: '#FF783E',
                      display: 'flex',
                      width: 130,
                      paddingVertical: 12,
                      paddingHorizontal: 10,
                      marginVertical: 22,
                      borderRadius: 3,
                      fontSize: 14,
                      fontWeight: '700',
                    }}
                  >
                    Login/Sign Up
                  </Text>
                </Pressable>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate ('HomPage');
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      marginBottom: 17,
                      fontWeight: '700',
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>

                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  *Existing users will log in right after verifying the SMS
                </Text>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Confirmation code
                </Text>
              </View>
            </ImageBackground>

          </View>
        );
      } else {
        return (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
            <View style={{height: '100%', width: '100%'}}>
              <ImageBackground
                source={image2}
                style={{
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    // borderWidth: 1,
                    padding: 12,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 21,
                      color: '#000000',
                    }}
                  >
                    Enter your mobile number
                  </Text>
                  <Pressable
                    onPress={() => {
                      setToggleProfileScreen (!ToggleProfileScreen);
                    }}
                  />
                  <PhoneNumber funPhone={HandlePhoneNumber} />
                  <View
                    style={{
                      flex: 1,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    {ToggleDisableButton
                      ? <View>
                          <TouchableOpacity
                            onPress={() => {
                              setToggleLoginScreen (true);
                            }}
                          >
                            <Text
                              style={{
                                textAlign: 'center',
                                marginBottom: 25,
                                backgroundColor: '#FF783E',
                                paddingVertical: 12,
                                borderRadius: 3,
                                color: 'white',
                                fontSize: 17,
                              }}
                            >
                              USE SMS
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setToggleLoginScreen (true);
                            }}
                          >
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
                              }}
                            >
                              USE CALL
                            </Text>
                          </TouchableOpacity>
                        </View>
                      : <View opacity={0.6} pointerEvents="none">
                          <TouchableOpacity
                            onPress={() => {
                              setToggleLoginScreen (true);
                            }}
                          >
                            <Text
                              style={{
                                textAlign: 'center',
                                marginBottom: 25,
                                backgroundColor: '#FF783E',
                                paddingVertical: 12,
                                borderRadius: 3,
                                color: 'white',
                                fontSize: 17,
                              }}
                            >
                              USE SMS
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setToggleLoginScreen (true);
                            }}
                          >
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
                              }}
                            >
                              USE CALL
                            </Text>
                          </TouchableOpacity>
                        </View>}

                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#777777',
                        // borderWidth: 1,
                        fontSize: 14,
                        marginTop: 22,
                      }}
                    >
                      We will verifay your mobile number using sms or call
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        );
      }
    }
  }
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default ProfileScreen;

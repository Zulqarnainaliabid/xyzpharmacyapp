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
} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
import LoginTimerScreren from './LoginTimerScreen';
import PhoneNumber from '../PhoneNumber';
import LoginUpdatedScreren from './LoginUpdatedScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = require('../Images/BackImage.jpg');
const image2 = require('../Images/Fruti.jpg');

const ProfileScreen = ({route, navigation}) => {
  const [ToggleProfileScreen, setToggleProfileScreen] = useState(true);
  const [ToggleDisableButton, setToggleDisableButton] = useState(false);
  const [ToggleLoginScreen, setToggleLoginScreen] = useState(false);
  const [ToggleUpdatedLoginScreen, setToggleUpdatedLoginScreen] =
    useState(false);
    const [UserUpdatedData, setUserUpdatedData] = useState(null)
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('Login');
        if (value !== null) {
          console.log('Login . .', value);
           let data = JSON.parse(value)
          console.log("M data = ",data.toggleScreen);
          if (data.toggleScreen) {
            console.log("iiii")
           
            setUserUpdatedData(data)
            setToggleUpdatedLoginScreen(true);
            console.log("++",data)
          
          }
        }
      } catch (e) {
        console.log('read error', e);
      }
    };
    getData();
  }, []);
console.log("o",ToggleUpdatedLoginScreen)
  function HandlePhoneNumber(text) {
    let length = text.toString().length;
    if (length === 10) {
      setToggleDisableButton(true);
    } else {
      setToggleDisableButton(false);
    }
  }

  if (ToggleUpdatedLoginScreen) {
    return (
      <LoginUpdatedScreren
      UserData = {UserUpdatedData}
      HeaderName={HeaderName}
      />
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
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: '100%', width: '100%'}}>
              <ImageBackground
                source={image}
                blurRadius={4}
                style={styles.image}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                    Hi, we need your phone number
                  </Text>
                  <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                    to verify your identity
                  </Text>
                  <Pressable
                    onPress={() => {
                      setToggleProfileScreen(!ToggleProfileScreen);
                    }}>
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
                      }}>
                      Login/Sign Up
                    </Text>
                  </Pressable>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HomPage');
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginBottom: 17,
                        fontWeight: '700',
                        color: '#FF783E',
                      }}>
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
          </View>
        );
      } else {
        return (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: '100%', width: '100%'}}>
              <ImageBackground source={image2} style={styles.image}>
                <View
                  style={{
                    flex: 1,
                    // borderWidth: 1,
                    padding: 12,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 21,
                      color: '#000000',
                    }}>
                    Enter your mobile number
                  </Text>
                  <Pressable
                    onPress={() => {
                      setToggleProfileScreen(!ToggleProfileScreen);
                    }}></Pressable>
                  <PhoneNumber funPhone={HandlePhoneNumber} />
                  <View
                    style={{
                      flex: 1,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      width: '100%',
                    }}>
                    {ToggleDisableButton ? (
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            setToggleLoginScreen(true);
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
                            USE SMS
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setToggleLoginScreen(true);
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
                            USE CALL
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View opacity={0.6} pointerEvents="none">
                        <TouchableOpacity
                          onPress={() => {
                            setToggleLoginScreen(true);
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
                            USE SMS
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setToggleLoginScreen(true);
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
                            USE CALL
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#777777',
                        // borderWidth: 1,
                        fontSize: 14,
                        marginTop: 22,
                      }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // flex: 1,sr
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    // borderWidth: 1,
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

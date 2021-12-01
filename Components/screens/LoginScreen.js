import React, {useState,useContext} from 'react';
import {Context} from '../Context/Context';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ErroIcon = (
  <FontAwesome5
    style={{fontSize: 19, color: '#EF6012'}}
    name={'exclamation-circle'}
  />
);
const PlainTriangle = require ('../Images/plain-triangle.png');
import AsyncStorage from '@react-native-async-storage/async-storage';
const img = require ('../Images/loin.jpg');
const img2 = require ('../Images/Fb.png');
const img3 = require ('../Images/Gm.png');
import {useNavigation} from '@react-navigation/native';
export default function LoginScreen (props) {
  const contextData = useContext (Context);
  const [UserNameTextHolder, setUserNameTextHolder] = useState ('');
  const [UserEmailTextHolder, setUserEmailTextHolder] = useState ('');
  const [UserAdressTextHolder, setUserAdressTextHolder] = useState ('');
  const [UserLocation, setUserLocation] = useState ('');

  const [ValidationflagUserNameText, setValidationflagUserNameText] = useState (
    false
  );
  const [
    ValidationflagUserEmailText,
    setValidationflagUserEmailText,
  ] = useState (false);
  const [
    ValidationflagUserAdressText,
    setValidationflagUserAdressText,
  ] = useState (false);
  const [ValidationflagUserLocation, setValidationflagUserLocation] = useState (
    false
  );
  const navigation = useNavigation ();
  function UserInformationData () {
    let flag = true;
    let flagUserNameText = true;
    let flagUserEmailText = true;
    let flagUserAdressText = true;
    let flagUserLocation = true;
    if (UserNameTextHolder === '') {
      flag = false;
      flagUserNameText = false;
    }
    if (UserEmailTextHolder === '') {
      flag = false;
      flagUserEmailText = false;
    }
    if (UserAdressTextHolder === '') {
      flag = false;
      flagUserAdressText = false;
    }
    if (UserLocation === '') {
      flag = false;
      flagUserLocation = false;
    }


    if (!flagUserNameText) {
      setValidationflagUserNameText (true);
    } else {
      setValidationflagUserNameText (false);
    }
    if (!flagUserEmailText) {
      setValidationflagUserEmailText (true);
    } else {
      setValidationflagUserEmailText (false);
    }
    if (!flagUserAdressText) {
      setValidationflagUserAdressText (true);
    } else {
      setValidationflagUserAdressText (false);
    }
    if (!UserLocation) {
      setValidationflagUserLocation (true);
    } else {
      setValidationflagUserLocation (false);
    }
    if (flag) {
      storeData()
      navigation.navigate ('HomPage');
    }
  }


  const storeData = async () => {
    let ProFileData = {
      userName: UserNameTextHolder,
      userEmail: UserEmailTextHolder,
      UserAdress: UserAdressTextHolder,
      userLocation: UserLocation,
    };
    try {
      await AsyncStorage.setItem('Login', JSON.stringify(ProFileData));
    } catch (e) {
      console.log('error', e);
    }
    try {
      await AsyncStorage.setItem('UpdateScreen', JSON.stringify(true));
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        backgroundColor: '#FFFFFF',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
          }}
        >
          <View style={{height: 150, width: 250}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={img}
            />
          </View>
        </View>
        <View>
          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            autoFocus={true}
            placeholder="Name"
            onChangeText={username => {
              setUserNameTextHolder (username);
              setValidationflagUserNameText (false);
            }}
            value={UserNameTextHolder}
          />
          {ValidationflagUserNameText &&
            <View
              style={[
                styles.outerWraperErrorMessage,
                styles.outerWraperErrorMessageName,
                styles.outerWraperErrorMessageNameProfileScreen,
              ]}
            >
              <Text style={{textAlign: 'right', marginRight: 10}}>
                {ErroIcon}
              </Text>
              <View
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'flex-end',
                  marginRight: 12,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={PlainTriangle}
                  tintColor="#FF0131"
                />
              </View>
              <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
            </View>}

          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            placeholder="Email"
            onChangeText={username =>{ setUserEmailTextHolder (username)
              setValidationflagUserEmailText(false)}}
            value={UserEmailTextHolder}
          />
          <View style={{}}>
            {ValidationflagUserEmailText &&
              <View style={[styles.outerWraperErrorMessageProfileScreen]}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={PlainTriangle}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
              </View>}
          </View>

          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            placeholder="Delivery Adress"
            onChangeText={username =>{ setUserAdressTextHolder (username)
              setValidationflagUserAdressText(false)}}
            value={UserAdressTextHolder}
          />
          <View>
            {ValidationflagUserAdressText &&
              <View
              style={[styles.outerWraperErrorMessageProfileScreen]}
              >
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={PlainTriangle}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
              </View>}
          </View>
          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            placeholder="Location"
            onChangeText={username =>{ setUserLocation (username)
              setValidationflagUserLocation(false)}}
            value={UserLocation}
          />
          <View>
            {ValidationflagUserLocation &&
              <View
              style={[styles.outerWraperErrorMessageProfileScreen]}
              >
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={PlainTriangle}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
              </View>}
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 25,
            color: '#D49579',
            fontSize: 18,
          }}
        >
          OR
        </Text>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              backgroundColor: '#3B5999',
              borderRadius: 3,
              marginTop: 12,
            }}
          >
            <View style={{height: 30, width: 30}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                tintColor="white"
                source={img2}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 14,
                // borderWidth:1,
                width: '80%',
              }}
            >
              Connect with facebook
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              backgroundColor: '#C1392B',
              borderRadius: 3,
              marginTop: 12,
            }}
          >
            <View style={{height: 30, width: 30}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  color: '#FFFFFF',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                tintColor="white"
                source={img3}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 14,
                // borderWidth:1,
                width: '80%',
              }}
            >
              Connect with Gmail
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            UserInformationData ();
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 14,
              // borderWidth:1,
              backgroundColor: '#FE793F',
              padding: 10,
              borderRadius: 3,
              marginTop: 60,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

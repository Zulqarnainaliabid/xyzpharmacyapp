import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ISSINGIN} from '../redux/actions'
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const img = require('../Images/loin.jpg');
const img2 = require('../Images/Fb.png');
const img3 = require('../Images/Gm.png');
import {useNavigation} from '@react-navigation/native';
export default function LoginScreen(props) {
  const [UserNameTextHolder, setUserNameTextHolder] = useState('');
  const [UserEmailTextHolder, setUserEmailTextHolder] = useState('');
  const [UserAdressTextHolder, setUserAdressTextHolder] = useState('');
  const [UserLocation, setUserLocation] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = async value => {
    let ProFileData = {
      userName: UserNameTextHolder,
      userEmail: UserEmailTextHolder,
      UserAdress: UserAdressTextHolder,
      userLocation: UserLocation,
      toggleScreen: value,
    };
    try {
      await AsyncStorage.setItem('Login', JSON.stringify(ProFileData));
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        padding: 12,
        backgroundColor: '#FFFFFF',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
          }}>
          <View style={{height: 150, width: 250}}>
            <Image style={{width: '100%', height: '100%'}} source={img} />
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
            onChangeText={username => setUserNameTextHolder(username)}
            value={UserNameTextHolder}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            autoFocus={true}
            placeholder="Email"
            onChangeText={username => setUserEmailTextHolder(username)}
            value={UserEmailTextHolder}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            autoFocus={true}
            placeholder="Delivery Adress"
            onChangeText={username => setUserAdressTextHolder(username)}
            value={UserAdressTextHolder}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              color: '#999999',
              borderColor: '#D49579',
              marginTop: 25,
              padding: 0,
            }}
            autoFocus={true}
            placeholder="Location"
            onChangeText={username => setUserLocation(username)}
            value={UserLocation}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 25,
            color: '#D49579',
            fontSize: 18,
          }}>
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
            }}>
            <View style={{height: 30, width: 30}}>
              <Image
                style={{width: '100%', height: '100%', color: '#FFFFFF'}}
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
              }}>
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
            }}>
            <View style={{height: 30, width: 30}}>
              <Image
                style={{width: '100%', height: '100%', color: '#FFFFFF'}}
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
              }}>
              Connect with Gmail
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            storeData('true');
            dispatch(ISSINGIN(true));
            navigation.navigate('HomPage');
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 14,
              // borderWidth:1,
              backgroundColor: '#FE793F',
              padding: 10,
              borderRadius: 3,
              marginTop: 88,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

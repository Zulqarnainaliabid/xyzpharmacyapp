import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
const image = require('../Images/BackImage.jpg');
const ProfileScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent:"center"}}>
      <View style={{height:"100%", width:"100%"}}>
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
            <TouchableOpacity>
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
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // flex: 1,sr
    justifyContent: 'center',
    width: "100%",
    height:"100%",
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

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../Header';
import {WishListHeart} from '../Icons';
import {useDispatch, useSelector} from 'react-redux';
const img = require('../Images/FreePik.jpg');
const WishListScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const UpdateArrayWishListScreen = useSelector(state => state.UpdateArrayWishListScreen);
  console.log("WishList Array.  new n n",UpdateArrayWishListScreen)
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{flex: 1, alignItems: 'center'}}>{WishListHeart}</View>
            <Text
              style={{
                color: '#FF783E',
                fontSize: 15,
                marginVertical: 7,
                textAlign: 'center',
              }}>
              You haven't added any items to your Wish List yet.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WishListScreen;

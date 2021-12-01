import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '../Header';
const img = require ('../Images/FreePik.jpg');
const ShareAndEarnScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');
  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} ScreenName={false} EditButton={false} />

      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          padding: 16,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{color: '#000000', fontSize: 19}}>
            Want more Grocery for less
          </Text>
          <Text style={{color: '#9B9B9B', marginVertical: 12}}>
            When someone signs up for GrocerApp and use your invite code before
            first order , they'll get Rs 50 in their wallet. once their order
            delivered you'll get Rs 75 in your wallet.{' '}
          </Text>
          <Text style={{color: '#5AA2BC', marginBottom: 18, fontSize: 17}}>
            Enter invite code{' '}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
            }}
          >
            <View style={{width: 250}}>
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
          <Text style={{color: '#777777', marginVertical: 12, fontSize: 17}}>
            {' '}
            Your invite code{' '}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 12,
              borderColor: '#E7E7E7',
            }}
          >
            <Text style={{fontSize: 19}}> Sign in to get code</Text>
            <Text style={{fontSize: 19, color: '#7BA3B2'}}> Copy</Text>
          </View>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              backgroundColor: '#FF783E',
              display: 'flex',
              paddingVertical: 12,
              paddingHorizontal: 17,
              marginVertical: 22,
              borderRadius: 3,
              fontSize: 17,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            SIGN IN TO INVITE FRIENDS
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ShareAndEarnScreen;

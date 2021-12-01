import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const Happy = require ('../Images/happy.png');
const Confused = require ('../Images/confused.png');
const Anger = require ('../Images/Anger.png');
export default function HealpCentreFooter (props) {
  return (
    <View
      style={{
        backgroundColor: '#EFF3F6',
        paddingVertical: 25,
        borderRadius: 12,
      }}
    >
      <Text
        style={{
          color: '#7F8082',
          textAlign: 'center',
          marginBottom: 12,
          fontSize: 15,
        }}
      >
        Did this answer your question?
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <View style={{width: 45, height: 45}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
            }}
            source={Anger}
          />
        </View>
        <View style={{width: 45, height: 45, marginHorizontal: 20}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
            }}
            source={Confused}
          />
        </View>
        <View style={{width: 45, height: 45}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
            }}
            source={Happy}
          />
        </View>
      </View>
    </View>
  );
}

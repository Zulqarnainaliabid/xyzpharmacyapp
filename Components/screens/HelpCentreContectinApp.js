import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import HealpCentreFooter from './HealpCentreFooter';
import HealpCentreHeader from './HealpCentreHeader';
export default function HelpCentreContectinApp (props) {
  return (
    <View style={{flex: 1, backgroundColor: '#F4F5F7'}}>
      <HealpCentreHeader 
      setToggleScreenHelpCentre={props.setToggleScreenHelpCentre}
      />
      <View
        style={{
          paddingHorizontal: 25,
          backgroundColor: 'white',
          paddingVertical: 22,
        }}
      >
        <Text style={{fontSize: 22}}>Contecting</Text>
        <Text style={{fontSize: 22}}>Grocerapp.</Text>
        <Text style={{color: '#888B94', marginTop: 10}}>
          How do i get in touch with a
        </Text>
        <Text style={{color: '#888B94'}}>representative?</Text>
        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 12}}
        >
          <Text
            style={{
              backgroundColor: '#F7600F',
              textAlignVertical: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 30,
            }}
          >
            W
          </Text>
          <View style={{marginLeft: 8}}>
            <Text style={{color: '#ACAEB5'}}>Written by wafa Allay</Text>
            <Text style={{color: '#ACAEB5'}}>updated over a week ago </Text>
          </View>
        </View>
        <Text style={{marginVertical: 12, fontSize: 16, color: '#94969C'}}>
          You can reach out of us
        </Text>
        <View style={{marginVertical: 12, marginLeft: 20, fontSize: 16}}>
          <Text style={{color: '#5D5D66'}}>
            1. Via the chat feature on our app
          </Text>
          <Text style={{color: '#5D5D66'}}>
            2. By Email us at zaka35716@gmail.com
          </Text>
        </View>
        <Text style={{fontSize: 18, color: '#5C5C65', marginBottom: 30}}>
          Our representative are avalaible on 7am to 9pm 7 days a week.
        </Text>
        <View style={{marginBottom: 12}}>
          <HealpCentreFooter />
        </View>
      </View>
    </View>
  );
}

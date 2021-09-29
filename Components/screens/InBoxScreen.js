import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const img = require('../Images/UnileverBrand.webp');
const InBoxScreen = ({route, navigation}) => {
  const tabsArray = [1, 2, 3, 4];
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function TabScreen1() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              flex: 1,
            }}>
            {tabsArray.map((item, index) => {
              return (
                <View key={index} style={{width: '100%', flex: 1}}>
                  <Text>as1</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  function TabScreen2() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          {tabsArray.map((item, index) => {
            return (
              <View key={index} style={{width: '100%'}}>
                <Text>as 2</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  function TabScreen3() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          {tabsArray.map((item, index) => {
            return (
              <View key={index} style={{width: '100%'}}>
                <Text>as 3</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
      <View style={{flex: 1}}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 13, width: 70, fontWeight: '600'},
            tabBarItemStyle: {width: 120},
            tabBarBounces: true,
            tabBarScrollEnabled: true,
            tabBarContentContainerStyle: {screollY: 'true'},
            tabBarActiveTintColor: '#F18029',
            tabBarInactiveTintColor: '#1C2223',
            tabBarIndicatorStyle: {backgroundColor: '#F18029'},
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderBottomColor: '#C4C4C4',
            },
          }}>
          <Tab.Screen name="Home" component={TabScreen1} />
          <Tab.Screen name="Settings" component={TabScreen2} />
          <Tab.Screen name="Home2" component={TabScreen3} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default InBoxScreen;

import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ItemsProduct from '../ItemsProducts';
const tabsArray = [1,2,3,4];
function TabScreen1() {
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
            <View key={index}>
              <ItemsProduct />
            </View>
          );
        })}
      </View>
    </ScrollView>
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
          <View key={index}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}


const Tab = createMaterialTopTabNavigator();

export default function VegeTablesAndFruitsScreen({route, navigation}) {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function HandleGoBackToHomeSecreen() {
    navigation.navigate('HomPage');
  }
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <Header
        name={HeaderName}
        fun={HandleGoBackToHomeSecreen}
        ScreenName={false}
      />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 13 },
            tabBarItemStyle: { width:180 },
            tabBarBounces: true,
            tabBarScrollEnabled: true,
            tabBarContentContainerStyle: {screollY: 'true'},
            tabBarActiveTintColor: '#F18029',
            tabBarInactiveTintColor: '#1C2223',
            tabBarIndicatorStyle: {backgroundColor: '#F18029'},

            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 1,
              borderBottomColor: '#C4C4C4',
            },
          }}>
          <Tab.Screen name="Vegetables" component={TabScreen1} />
          <Tab.Screen name="Fruits" component={TabScreen2} />
        </Tab.Navigator>
    </View>
  );
}

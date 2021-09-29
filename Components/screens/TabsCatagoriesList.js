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
            <View key={index} style={{width:"100%"}}>
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}

function TabScreen4() {
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}

function TabScreen5() {
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}

function TabScreen6() {
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}

function TabScreen7() {
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
          <View key={index} style={{width:"100%"}}>
            <ItemsProduct />
          </View>
        );
      })}
    </View>
  </ScrollView>
  );
}

function TabScreen8() {
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

function TabScreen9() {
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

function TabScreen10() {
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

export default function CatagoriesListScreen({route, navigation}) {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
      />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 13,width:70,fontWeight:"600"},
            tabBarItemStyle: { width: 73 },
            tabBarBounces: true,
            tabBarScrollEnabled: true,
            tabBarContentContainerStyle: {screollY: 'true'},
            tabBarActiveTintColor: '#F18029',
            tabBarInactiveTintColor: '#1C2223',
            tabBarIndicatorStyle: {backgroundColor: '#F18029'},

            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              // borderBottomWidth: 1,
              borderBottomColor: '#C4C4C4',
            },
          }}>
          <Tab.Screen name="Home" component={TabScreen1} />
          <Tab.Screen name="Settings" component={TabScreen2} />
          <Tab.Screen name="Home2" component={TabScreen3} />
          <Tab.Screen name="Settings2" component={TabScreen4} />
          <Tab.Screen name="Home3" component={TabScreen5} />
          <Tab.Screen name="Settings3" component={TabScreen6} />
          <Tab.Screen name="Home4" component={TabScreen7} />
          <Tab.Screen name="Settings4" component={TabScreen8} />
          <Tab.Screen name="Home5" component={TabScreen9} />
          <Tab.Screen name="Settings5" component={TabScreen10} />
        </Tab.Navigator>
    </View>
  );
}

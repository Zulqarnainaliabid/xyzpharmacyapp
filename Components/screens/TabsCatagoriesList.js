import * as React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ItemsProduct from '../ItemsProducts';
import {TempDataCategoriesTag} from '../TempData'
function TabScreen1() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
       {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
       {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
      {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
       {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
       {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
      {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
         {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
       {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
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
        {TempDataCategoriesTag && TempDataCategoriesTag.map((item,index)=>{
              return <ItemsProduct key={index}
              Data={item}
              />
            })}
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function CatagoriesListScreen({route, navigation}) {
  let {name} = route.params;

  let {otherData} = route.params;
  let TitleName = otherData.titleName
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  return (
    <View style={{backgroundColor: 'white',flex:1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
        EditButton={false}
      />
        <Tab.Navigator
         initialRouteName={TitleName}
          screenOptions={{
            tabBarLabelStyle: {fontSize: 13,width:130,fontWeight:"600"},
            tabBarItemStyle: { width: 130 },
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
          <Tab.Screen name={"Cold Drink"} component={TabScreen1} />
          <Tab.Screen name={"Biscuits & Cookies"} component={TabScreen2} />
          <Tab.Screen name={"Chips & Nimko"} component={TabScreen3} />
          <Tab.Screen name={"Settings2"} component={TabScreen4} />
          <Tab.Screen name={"Chocolates"} component={TabScreen5} />
          <Tab.Screen name="Settings3" component={TabScreen6} />
          <Tab.Screen name="Home4" component={TabScreen7} />
          <Tab.Screen name="Settings4" component={TabScreen8} />
          <Tab.Screen name="Home5" component={TabScreen9} />
          <Tab.Screen name="Settings5" component={TabScreen10} />
        </Tab.Navigator>
    </View>
  );
}

import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import HomPage from './Components/HomePage';
import Products from './Components/Product';
import {useDispatch, useSelector} from 'react-redux';
import CatagoriesListSecreen from './Components/screens/CatagoriesListSecreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {INCREMENT, TOGGLEDRAWERBUTTON} from './Components/Redux/actions/indux';
import SwiperComponent from './Components/Swiper';
import DetailsScreen from './Components/screens/DetailsScreen';
import BrandListScreen from './Components/screens/BrandListScreen';
import CatagoriesListScreen from './Components/screens/TabsCatagoriesList';
import VegeTablesAndFruitsScreen from './Components/screens/TabsVegetablesAndFruitsScreen';
import MemberShipScreen from './Components/screens/MemberShipScren';
import PlansScreen from './Components/screens/PlansScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './Components/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Feed({navigation}) {
  const ToggleDrawer = useSelector(state => state.ToggleDrawer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (ToggleDrawer) {
      navigation.openDrawer();
    }
    dispatch(TOGGLEDRAWERBUTTON(false));
  }, [ToggleDrawer]);
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomPage"
          component={HomPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CatagoriesListSecreen"
          component={CatagoriesListSecreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailsSecreenSecreen"
          component={DetailsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BrandListScreen"
          component={BrandListScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TabsCatagoriesList"
          component={CatagoriesListScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="VegetablesAndFruitScreen"
          component={VegeTablesAndFruitsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MemberShipScreen"
          component={MemberShipScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PlansScreen"
          component={PlansScreen}
        />
      </Stack.Navigator>
    </>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Feed"
        options={{headerShown: false}}
        component={Feed}
      />
      <Drawer.Screen
        name="Article"
        options={{headerShown: false}}
        component={Article}
      />
    </Drawer.Navigator>

    // <Drawer.Navigator>
    //   <Drawer.Screen
    //     name="Feed"
    //     options={{headerShown: false}}
    //     component={Feed}
    //   />
    //   <Drawer.Screen
    //     name="Article"
    //     options={{headerShown: false}}
    //     component={Article}
    //   />
    // </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

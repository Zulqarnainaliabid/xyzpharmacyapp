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
import DrawerCategoriesScreen from './Components/screens/DrawerCategoriesScreen';
import CartScreen from './Components/screens/CartScreen';
import {DrawerContent} from './Components/DrawerContent';
import ProfileScreen from './Components/screens/Profile';
import OrderScreen from './Components/screens/OrderScreen';
import ShareAndEarnScreen from './Components/screens/ShareAndErnScreen';
import PromoAlertScreen from './Components/screens/PromoAlertScreen';
import DrawerBrandScreen from './Components/screens/DrawerBrandScren';
import InBoxScreen from './Components/screens/InBoxScreen';
import DrawerFaqsScreen from './Components/screens/DrawerFaqsScreen'
import WishListScreen from './Components/screens/WhishListScreen'
import SearchScreen from './Components/screens/SearchScren'
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
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerCategoriesScren"
          component={DrawerCategoriesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CartScreen"
          component={CartScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderScreen"
          component={OrderScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ShareAndEarnScreen"
          component={ShareAndEarnScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PromoAlertScreen"
          component={PromoAlertScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerBrandScreen"
          component={DrawerBrandScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="InBoxScreen"
          component={InBoxScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DrawerFaqsScreen"
          component={DrawerFaqsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WhishListScreen"
          component={WishListScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchScreen"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </>
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
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

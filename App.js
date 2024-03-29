import React, {useEffect} from 'react';
import HomPage from './Components/HomePage';
import CatagoriesListSecreen from './Components/screens/CatagoriesListSecreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './Components/screens/DetailsScreen';
import BrandListScreen from './Components/screens/BrandListScreen';
import CatagoriesListScreen from './Components/screens/TabsCatagoriesList';
import VegeTablesAndFruitsScreen
  from './Components/screens/TabsVegetablesAndFruitsScreen';
import MemberShipScreen from './Components/screens/MemberShipScren';
import PlansScreen from './Components/screens/PlansScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCategoriesScreen
  from './Components/screens/DrawerCategoriesScreen';
import CartScreen from './Components/screens/CartScreen';
import {DrawerContent} from './Components/DrawerContent';
import ProfileScreen from './Components/screens/Profile';
import OrderScreen from './Components/screens/OrderScreen';
import ShareAndEarnScreen from './Components/screens/ShareAndErnScreen';
import PromoAlertScreen from './Components/screens/PromoAlertScreen';
import DrawerBrandScreen from './Components/screens/DrawerBrandScren';
import InBoxScreen from './Components/screens/InBoxScreen';
import DrawerFaqsScreen from './Components/screens/DrawerFaqsScreen';
import WishListScreen from './Components/screens/WhishListScreen';
import SearchScreen from './Components/screens/SearchScren';
import OrderDetailsScreen from './Components/screens/OrderDetailsScreen'
import {createStackNavigator} from '@react-navigation/stack';
import Wallet from './Components/screens/WalletScreen';
import CardsDetailsScreen from './Components/screens/CardsDetailsScreen';
import LiveChateScreen from './Components/screens/LiveChate';
const Stack = createStackNavigator ();
const Drawer = createDrawerNavigator ();
function Root () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
        name="WalletScreen"
        component={Wallet}
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
      <Stack.Screen
        options={{headerShown: false}}
        name="CardsDetailsScreen"
        component={CardsDetailsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LiveChateScreen"
        component={LiveChateScreen}
      />
      <Stack.Screen
      options={{headerShown: false}}
      name="OrderDetailsScreen"
      component={OrderDetailsScreen}
    />
    </Stack.Navigator>
  );
}

export default function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="Root"
        screenOptions={{headerShown: false}}
      >
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 
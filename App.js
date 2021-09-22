import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import HomPage from './Components/HomPage';
import Products from './Components/Product';
import CatagoriesListSecreen from './Components/screens/CatagoriesListSecreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './Components/StackNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {INCREMENT} from './Components/Redux/actions/indux';
import SwiperComponent from './Components/Swiper';
import DetailsScreen from './Components/screens/DetailsScreen';
import BrandListScreen from './Components/screens/BrandListScreen';
import CatagoriesListScreen from './Components/screens/TabsCatagoriesList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

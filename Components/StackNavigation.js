import * as React from 'react';
import { View, Text } from 'react-native';
import CatagoriesListSecreen from './screens/CatagoriesListSecreen'
import HomPage from './HomPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ headerShown: false}} name="HomPage" component={HomPage} />
         {/* <Stack.Screen options={{ headerShown: false}} name="CatagoriesListSecreen" component={CatagoriesListSecreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
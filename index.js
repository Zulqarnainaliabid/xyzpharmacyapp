/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Components/redux/store';

const PharmacyApp = () => {
  useEffect (() => {
    SplashScreen.hide ();
  }, []);
  return (
        <App />
  );
};
AppRegistry.registerComponent (appName, () => PharmacyApp);

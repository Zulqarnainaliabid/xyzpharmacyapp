import React,{useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './MainScreen';
import {getData} from './Services'
export default function HomPage () {
  useEffect( async () => {
  let data = await getData()
  // console.log("dta",data.data)
  }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainScreen
       />
    </SafeAreaView>
  );
}
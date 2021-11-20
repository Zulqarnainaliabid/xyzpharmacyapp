import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DeleteIconPic = require ('./Images/delete.png');
const PlusIconPic = require ('./Images/plus.png');
const MinusIconPic = require ('./Images/minusPic.png');
export default function AddToCart (props) {
  
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (false);
  let temparray = [];
  useEffect (
    () => {
      if (props.Data.Quantity >= 2) {
        settogglePlusMinusButton (true);
      } else {
        settogglePlusMinusButton (false);
      }
    },
    [props.Data.Quantity]
  )
  useEffect(() => {
    // AsyncStorage.clear();
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('CartData');
      if (value !== null) {
         let data = JSON.parse(value)
         console.log("local Data",data)
         temparray=data
      }
    } catch (e) {
      console.log('read error', e);
    }
  };

  const storeCartData = async value => {
    try {
      await AsyncStorage.setItem ('CartData', JSON.stringify (value));
    } catch (e) {
      console.log ('error', e);
    }
    getData()
  };


  if (props.Data.Id===41) {
    return (
      <View>
        <View style={styles.OuterWraperProductBoxDeleteButton}>
          <View style={{height: 20, width: 20}}>
            {togglePlusMinusButton
              ? <TouchableHighlight underlayColor="none">
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={MinusIconPic}
                    tintColor="#00C41A"
                  />
                </TouchableHighlight>
              : <TouchableHighlight underlayColor="none">
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={DeleteIconPic}
                    tintColor="#00C41A"
                  />
                </TouchableHighlight>}
          </View>
          <Text style={{color: '#000000'}}>
            {props.Data.Id}
          </Text>
          <View style={{height: 20, width: 20}}>
            <TouchableHighlight underlayColor="none">
              <Image
                style={{width: '100%', height: '100%'}}
                source={PlusIconPic}
                tintColor="#00C41A"
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  } else {                                                                                                                                                                                   
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            // if (array.indexOf(value) === -1) array.push(value);
            let temp = temparray
            console.log ('before', temp);
            if (temp.includes(props.Data) === false)
            {temp.push(props.Data);
             storeCartData(temp)
            }
             console.log ('after', temp);
          }}
        >
          <Text style={styles.OuterWraperSubmitButtonProductBox}>
            Add to Cart 
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

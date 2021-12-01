import React, {useState, useEffect,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from './Context/Context';
const DeleteIconPic = require ('./Images/delete.png');
const PlusIconPic = require ('./Images/plus.png');
const MinusIconPic = require ('./Images/minusPic.png');
import {
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';
export default function AddToCart (props) {
  const contextData = useContext (Context);
  const [Quantity, setQuantity] = useState ([]);
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (true);
  props.item.Quantity = getQuantity (props.item.Id);

  async function handlePlus (item) {
    var itemsInCart = await AsyncStorage.getItem ('cart');
    item.Quantity = 1;
    if (itemsInCart === undefined || itemsInCart === null) {
      itemsInCart = [];
      itemsInCart.push (item);
    } else {
      itemsInCart = JSON.parse (itemsInCart);
      let flag = false;
      for (var i = 0; i < itemsInCart.length; i++) {
        if (itemsInCart[i].Id === item.Id) {
          itemsInCart[i].Quantity = itemsInCart[i].Quantity + 1;
          flag = true;
          break;
        }
      }
      if (!flag) {
        itemsInCart.push (item);
      }
    }
    await AsyncStorage.setItem ('cart', JSON.stringify (itemsInCart));
    let data = await getQuantity (props.item.Id);
    if (data === 0) {
      setQuantity (null);
    } else {
      setQuantity (data);
    }
    contextData.HandaleUpdateCartItem()
  }

  async function handleDeleteCartItem (item) {
    var itemsInCart = await AsyncStorage.getItem ('cart');
    itemsInCart = JSON.parse (itemsInCart);
    for (var i = 0; i < itemsInCart.length; i++) {
      if (itemsInCart[i].Id === item.Id) {
        {
          itemsInCart.splice (i, 1);
          getQuantity (item.Id);
          break;
        }
      }
    }
    await AsyncStorage.setItem ('cart', JSON.stringify (itemsInCart));
    let data = await getQuantity (props.item.Id);
    if (data === 0) {
      setQuantity (null);
    } else {
      setQuantity (data);
    }
    contextData.HandaleUpdateCartItem()
  }

  async function handleMinus (item) {
    var itemsInCart = await AsyncStorage.getItem ('cart');
    if (itemsInCart === undefined || itemsInCart === null) {
      itemsInCart = [];
      itemsInCart.push (item);
    } else {
      itemsInCart = JSON.parse (itemsInCart);
      let flag = false;
      for (var i = 0; i < itemsInCart.length; i++) {
        if (itemsInCart[i].Id === item.Id) {
          itemsInCart[i].Quantity = itemsInCart[i].Quantity - 1;
          flag = true;
          break;
        }
      }
      if (!flag) {
        itemsInCart.pop (item);
      }
    }
    await AsyncStorage.setItem ('cart', JSON.stringify (itemsInCart));
    let data = await getQuantity (props.item.Id);
    setQuantity (data);
    contextData.HandaleUpdateCartItem()
  }

  async function getQuantity (Id) {
    var itemsInCart = await AsyncStorage.getItem ('cart');
    
    if (itemsInCart === undefined || itemsInCart === null) {
      return 0;
    } else {
      itemsInCart = JSON.parse (itemsInCart);
      contextData.HandaleCartLength(itemsInCart.length)
      for (var i = 0; i < itemsInCart.length; i++) {
        if (itemsInCart[i].Id === Id) {
          itemsInCart[i].Quantity = itemsInCart[i].Quantity;
          return itemsInCart[i].Quantity;
        }
      }
    }
    return 0;
  }

  useEffect (async () => {
    // AsyncStorage.clear()
    let data = await getQuantity (props.item.Id);
    setQuantity (data);
    if (data >= 2) {
      settogglePlusMinusButton (true);
    } else {
      settogglePlusMinusButton (false);
    } 
  });

  if (Quantity) {
    return (
      <View>
        <View style={styles.OuterWraperProductBoxDeleteButton}>
          <View style={{height: 20, width: 20}}>
            {togglePlusMinusButton
              ? <TouchableOpacity
                  underlayColor="none"
                  onPress={() => {
                    handleMinus (props.item);
                  }}
                >
                  <View style={{width: 20, height: 20}}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        resizeMode: 'contain',
                      }}
                      source={MinusIconPic}
                      tintColor="#00C41A"
                    />
                  </View>
                </TouchableOpacity>
              : <TouchableOpacity
                  underlayColor="none"
                  onPress={() => {
                    handleDeleteCartItem (props.item);
                  }}
                >
                  <View style={{height: 20, width: 20}}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        resizeMode: 'contain',
                      }}
                      source={DeleteIconPic}
                      // tintColor="#00C41A"
                    />
                  </View>
                </TouchableOpacity>}
          </View>
          <Text style={{color: '#000000'}}>
            {Quantity}
          </Text>
          <TouchableOpacity
            underlayColor="none"
            onPress={() => {
              handlePlus (props.item);
            }}
          >
            <View style={{height: 20, width: 20}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={PlusIconPic}
                tintColor="#00C41A"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            handlePlus (props.item);
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

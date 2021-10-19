import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { addBookmark, removeBookmark, AddQuantity} from './redux/actions';
const DeleteIconPic = require ('./Images/delete.png');
const PlusIconPic = require ('./Images/plus.png');
const MinusIconPic = require ('./Images/minusPic.png');
const ArrowLeftIcon = (
  <FontAwesome5
    style={{fontSize: 17, color: '#C2C2C2'}}
    name={'chevron-right'}
    solid
  />
);

export default function ItemsProduct (props) {
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (false);
  const navigation = useNavigation ();
  const dispatch = useDispatch ();
  const {bookmarks} = useSelector (state => state.booksReducer);
  const {Get_quantity} = useSelector (state => state.quantityReducer);
  const removeFromBookmarkList = book => dispatch (removeBookmark (book));
  const addToBookmarkList = book => dispatch (addBookmark (book));
  const GetQuantitys = book => dispatch (AddQuantity (book));

  console.log ('quantity = ', Get_quantity);
  
  const handleAddBookmark = book => {
    addToBookmarkList (book);
  };
  
  const handleRemoveBookmark = book => {
    removeFromBookmarkList (book);
  };

  const handleQuantitys = book => {
    // storeQuantity(book)
    GetQuantitys (book);
  };

  // const storeQuantity = async ItemArray => {
  //   // AsyncStorage.clear();
  //   try {
  //     await AsyncStorage.setItem (
  //       JSON.stringify ('Quantity'),
  //       JSON.stringify (ItemArray)
  //     );
  //   } catch (e) {
  //     console.log ('error', e);
  //   }
  // };

  // const getQuantityData = async() => {
  //   // AsyncStorage.clear();
  //   try {
  //     const value = await AsyncStorage.getItem (JSON.stringify ("Quantity"));
  //     if (value !== null) {
  //       let data = JSON.parse (value);
  //       GetQuantitys(data)
  //     }
  //   } catch (e) {
  //     console.log ('read error', e);
  //   }
  // };

  useEffect (() => {
    // getQuantityData()
      if (props.Data.Quantity >= 2) {
        settogglePlusMinusButton (true);
      } else {
        settogglePlusMinusButton (false);
      }
    },
    [props.Data.Quantity]
  );

  const storeData = async ItemArray => {
    try {
      await AsyncStorage.setItem (
        JSON.stringify ('CartData'),
        JSON.stringify (ItemArray)
      );
    } catch (e) {
      console.log ('error', e);
    }
    props.getData ();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.InnerContainerItemProduct}>
        <TouchableOpacity
          onPress={() => {
            navigation.push ('DetailsSecreenSecreen', {
              name: 'lllllllllllllllluuuuuuuuuuuuuuu',
              otherData: props.Data,
            });
          }}
        >
          <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{
                width: '100%',
                height: 120,
                borderColor: '#F4CA16',
              }}
              source={props.Data.img}
            />
            <View
              style={{display: 'flex', flexDirection: 'row', marginLeft: 5}}
            >
              <Text
                style={{
                  color: '#E80201',
                  fontSize: 20,
                  fontWeight: '700',
                }}
              >
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#757575',
                  textDecorationLine: 'line-through',
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                Rs {props.Data.lessPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{marginLeft: 6, width: 165}}>
          <TouchableOpacity
            onPress={() => {
              navigation.push ('DetailsSecreenSecreen', {
                otherData: props.Data,
              });
            }}
          >
            <View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: '#030303',
                  fontSize: 19,
                }}
              >
                {props.Data.titleName}
              </Text>
              <Text
                style={{
                  color: '#878787',
                  fontSize: 17,
                }}
              >
                {props.Data.productWaight}
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.InnerContainerItemProductDiscRate}>
                {props.Data.dic} %OFF
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 18}}>
            {props.Data.selected
              ? <View style={[styles.OuterWraperProductBoxDeleteButton]}>
                  <View style={{height: 20, width: 20}}>
                    {togglePlusMinusButton
                      ? <TouchableOpacity
                          onPress={() => {
                            let temp = props.CartData;
                            let Quantity =
                              temp[props.outerIndex].data[props.index].Quantity;
                            Quantity = Quantity - 1;
                            temp[props.outerIndex].data[
                              props.index
                            ].Quantity = Quantity;
                            storeData (temp);
                          }}
                        >
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={MinusIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>
                      : <TouchableOpacity
                          onPress={() => {
                            let temp = props.CartData;
                            temp[props.outerIndex].data[
                              props.index
                            ].selected = false;
                            storeData (temp);
                            handleRemoveBookmark (props.Data.Id);
                          }}
                        >
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={DeleteIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>}
                  </View>
                  <Text style={{color: '#000000'}}>
                    {
                      props.CartData[props.outerIndex].data[props.index]
                        .Quantity
                    }
                  </Text>
                  <View style={{height: 20, width: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        let temp = props.CartData;
                        let Quantity =
                          temp[props.outerIndex].data[props.index].Quantity;
                        Quantity = Quantity + 1;
                        temp[props.outerIndex].data[
                          props.index
                        ].Quantity = Quantity;
                        storeData (temp);
                      }}
                    >
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={PlusIconPic}
                        tintColor="#00C41A"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              : <TouchableOpacity
                  style={styles.OuterWraperSubmitButtonProductBox}
                  onPress={() => {
                    let temp = props.CartData;
                    temp[props.outerIndex].data[props.index].selected = true;
                    storeData (temp);
                   
                    if (!Get_quantity.find (item => item.id === props.Data.Id)) {
                      let tempQuantity = Get_quantity;
                      let id = temp[props.outerIndex].data[props.index].Id;
                      tempQuantity.push ({id: id, quantity: 1});
                    
                      handleQuantitys (tempQuantity);
                    }
                    if (!bookmarks.find (id => id === props.Data.Id)) {
                      handleAddBookmark (
                        temp[props.outerIndex].data[props.index]
                      );
                    }
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    }}
                  >
                    Add to Cart
                  </Text>
                </TouchableOpacity>}
          </View>
        </View>
        <Text style={styles.InnerContainerItemProductOuterWraperArroeIcon}>
          {ArrowLeftIcon}
        </Text>
      </View>
    </SafeAreaView>
  );
}

import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import { addBookmark, removeBookmark} from './redux/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
const DeleteIconPic = require ('./Images/delete.png');
const PlusIconPic = require ('./Images/plus.png');
const MinusIconPic = require ('./Images/minusPic.png');
export default function ProductsBox (props) {
  const [Data, setData] = useState (null);
  const [Name, setName] = useState (null);
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (false);
  const navigation = useNavigation ();
  const dispatch = useDispatch ();
  const {bookmarks} = useSelector (state => state.booksReducer);

  const addToBookmarkList = book => dispatch (addBookmark (book));

  const handleAddBookmark = book => {
    addToBookmarkList (book);
  };
  const removeFromBookmarkList = book => dispatch (removeBookmark (book));
  const handleRemoveBookmark = book => {
    removeFromBookmarkList (book);
  };

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

  useEffect (
    () => {
      if (props.Data.Quantity >= 2) {
        settogglePlusMinusButton (true);
      } else {
        settogglePlusMinusButton (false);
      }
    },
    [props.Data.Quantity]
  );

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Text> hbhbhbh</Text>
        <View style={styles.OuterContainerProductBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setData ();
              setName (props.Data.titleName);
              navigation.push ('DetailsSecreenSecreen', {
                name: Name,
                otherData: props.Data,
              });
            }}
          >
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={styles.ImageHolderOuterContainerProductBox}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={props.Data.img}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.TextHolderProductBox}>
            <Text numberOfLines={1} style={{fontSize: 15, color: '#9b9b9b'}}>
              {props.Data.titleName}
            </Text>
            <Text>{props.Data.productWaight} Kg</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'red',
                  fontWeight: '700',
                  marginTop: 9,
                  marginRight: 5,
                }}
              >
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 13,
                  textDecorationLine: 'line-through',
                }}
              >
                Rs {props.Data.lessPrice}
              </Text>
            </View>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                fontWeight: '700',
                fontSize: 11,
                width: 60,
                textAlign: 'center',
                borderRadius: 10,
                paddingVertical: 3,
                paddingHorizontal: 4,
                marginTop: 4,
              }}
            >
              {props.Data.dic} % OFF
            </Text>
          </View>
          <View>
            {props.Data.selected
              ? <View style={styles.OuterWraperProductBoxDeleteButton}>
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
                  onPress={() => {
                    let temp = props.CartData;
                    temp[props.outerIndex].data[props.index].selected = true;
                    storeData (temp);
                    if (bookmarks.find (id => id === props.Data.Id)) {
                    } else {
                      handleAddBookmark(temp[props.outerIndex].data[props.index])
                    }
                  }}
                >
                  <Text style={styles.OuterWraperSubmitButtonProductBox}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

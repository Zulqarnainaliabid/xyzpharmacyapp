import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const DeleteIconPic = require ('../Images//delete.png');
const PlusIconPic = require ('../Images/plus.png');
const MinusIconPic = require ('../Images/minusPic.png');

export default function CartItems (props) {
  const [togglePlusMinusButton, settogglePlusMinusButton] = useState (false);
  
  console.log("items,",props.CartData)

 

  // function handleAddButton (id) {
  //   console.log ('uiuiuiu', id);
  //   let temp = CartData;
  //   temp.map ((item, index) => {
  //     console.log ('items, o o o o o o o  o', item);
  //     item.data.map ((item, index) => {
  //       console.log ('itm id', item);
  //     });
  //   });
  // }

  // console.log ('list ', props.CartData);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.InnerContainerItemProduct}>
        <TouchableOpacity>
          <View style={styles.InnerContainerItemProductImageHolder}>
            <Image
              style={{
                width: '100%',
                height: 120,
                borderColor: '#F4CA16',
              }}
              source={props.CartData.img}
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
                Rs {props.CartData.actualPrice}
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
                Rs {props.CartData.lessPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{marginLeft: 6, width: 165}}>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: '#030303',
                  fontSize: 19,
                }}
              >
                {props.CartData.titleName}
              </Text>
              <Text
                style={{
                  color: '#878787',
                  fontSize: 17,
                }}
              >
                {props.CartData.productWaight}
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.InnerContainerItemProductDiscRate}>
                {props.CartData.dic} %OFF
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 18}}>
            {props.CartData.selected
              ? <View style={[styles.OuterWraperProductBoxDeleteButton]}>
                  <View style={{height: 20, width: 20}}>
                    {togglePlusMinusButton
                      ? <TouchableOpacity
                        // onPress={() => {
                        //   let temp = props.CartData;
                        //   let Quantity =
                        //     temp[props.outerIndex].data[props.index].Quantity;
                        //   Quantity = Quantity - 1;
                        //   temp[props.outerIndex].data[
                        //     props.index
                        //   ].Quantity = Quantity;
                        //   storeData (temp);
                        // }}
                        >
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={MinusIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>
                      : <TouchableOpacity
                        // onPress={() => {
                        //   let temp = props.CartData;
                        //   temp[props.outerIndex].data[
                        //     props.index
                        //   ].selected = false;
                        //   storeData (temp);
                        //   handleRemoveBookmark(CartData.Id);
                        // }}
                        >
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={DeleteIconPic}
                            tintColor="#00C41A"
                          />
                        </TouchableOpacity>}
                  </View>
                  <Text style={{color: '#000000'}}>
                    {props.CartData.Quantity}
                  </Text>
                  <View style={{height: 20, width: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        
                       console.log("helo",props.item)

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
                  // onPress={() => {
                  //   let temp = props.CartData;
                  //   temp[props.outerIndex].data[props.index].selected = true;
                  //   storeData (temp);
                  //   if (!bookmarks.find((id) => id === CartData.Id)) {
                  //     handleAddBookmark (CartData);
                  //   }
                  // }}
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
      </View>
    </SafeAreaView>
  );
}

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';
import {useToast} from 'react-native-toast-notifications';
import ItemsProduct from '../ItemsProducts';
import Swiper from 'react-native-swiper';
import ProductsBox from '../ProductBox';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TempDataCategoriesTag, TempDataFeatureProduct} from '../TempData';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CrossIcon = (
  <FontAwesome5 style={{fontSize: 30, color: '#F08243'}} name={'times'} />
);
const HeartFilld = (
  <FontAwesome5 style={{fontSize: 20, color: '#F08243'}} name={'heart'} solid />
);
const HeartUnFilld = (
  <FontAwesome5 style={{fontSize: 20, color: '#F08243'}} name={'heart'} />
);
const PlusIcon = (
  <FontAwesome5 style={{fontSize: 20, color: '#F08243'}} name={'plus'} />
);
const DetailsScreen = ({route, navigation}) => {
  const [Index, setIndex] = useState(null);
  const [FavouriteListItemArray, setFavouriteListItemArray] = useState(null);
  const [Click, setClick] = useState(false);
  const [ShowMessageBox, setShowMessageBox] = useState(false);
  const [ToggleModalCreateListScreen, setToggleModalCreateListScreen] =
    useState(false);
  const [HandleFavouriteListText, setHandleFavouriteListText] = useState('');
  const [ToggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessageBox(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ShowMessageBox]);
  function HnadleOpenBottomModal() {
    refRBSheet.current.open();
  }

  // const storeData = async (listName, value) => {
  //   let data = JSON.stringify(value);
  //   try {
  //     await AsyncStorage.setItem(listName, data);
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('WishListArray');
  //       if (value !== null) {
  //         let data = JSON.parse(value);
  //         setFavouriteListItemArray(data);
  //       } else {
  //         setFavouriteListItemArray(['somthing You Want..']);
  //       }
  //     } catch (e) {
  //       console.log('read error', e);
  //     }
  //   };
  //   getData();
  // }, [ToggleModal]);

  let {otherData} = route.params;
  let name = otherData.titleName;
  let actualPrice = otherData.actualPrice;
  let priceLess = otherData.lessPrice;
  let dicount = otherData.dic;
  let waight = otherData.productWaight;
  let HeaderName = JSON.stringify(name);
  
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function HandleGotoDetailsSecreen(name) {
    navigation.push('DetailsSecreenSecreen', {
      name: name,
    });
  }
  let DataArray = [];
  let temp = [];
  // const HandleSetData = async listName => {
  //   if (DataArray.length === 0) {
  //     DataArray.push({name: listName, value: temp});
  //   } else {
  //     DataArray.map((item, index) => {
  //       if (DataArray[index] === listName) {
  //         DataArray.value.push(otherData);
  //       } else {
  //         temp.push(otherData);
  //         DataArray.push({name: listName, value: temp});
  //       }
  //     });
  //   }
  //   try {
  //     await AsyncStorage.setItem('WishList', JSON.stringify(DataArray));
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // };
  const refRBSheet = useRef();
  if (ToggleModalCreateListScreen) {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 22,
          width: '100%',
          height: '100%',
        }}>
        <Text
          style={{textAlign: 'right'}}
          onPress={() => setToggleModalCreateListScreen(false)}>
          {CrossIcon}
        </Text>

        <Text
          style={{
            //   borderWidth: 1,
            textAlign: 'center',
            fontSize: 21,
            fontWeight: '700',
            marginTop: 33,
          }}>
          Create a new list
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            marginVertical: 44,
            fontSize: 22,
            padding: 12,
            borderColor: '#E7E7E7',
            color: '#A0A0A0',
          }}
          onChangeText={text => setHandleFavouriteListText(text)}
          // value={number}
          placeholder="List Name"
          keyboardType="text"
        />
        <Text
          style={{
            backgroundColor: '#FF783E',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: 12,
            borderRadius: 3,
            fontSize: 21,
          }}
          onPress={() => {
            FavouriteListItemArray.push(HandleFavouriteListText);
            setToggleModalCreateListScreen(false);
            storeData('WishListArray', FavouriteListItemArray);
          }}>
          Create
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header name={HeaderName} EditButton={false} ScreenName={true} />
        <View style={styles.OutercontainerDetailScreen}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{marginTop: 12, fontSize: 18}}>{HeaderName}</Text>
            <View>
              <Swiper
                dot={
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderWidth: 1,
                      borderColor: '#ACACAC',
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      marginLeft: 3,
                      marginRight: 3,
                      marginTop: 3,
                      marginBottom: 3,
                    }}
                  />
                }
                activeDotColor="#F17B42"
                autoplay={true}
                showsButtons={false}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: 212,
                  backgroundColor: 'white',
                }}>
                <View style={styles.OuterWraperImageHolderDetailScreen}>
                  <Image
                    style={{width: '100%', height: 200}}
                    source={otherData.img}
                  />
                </View>
              </Swiper>
            </View>
            <View style={styles.OuterWraperDetailTextHolderDetailsScreen}>
              <Text
                style={{
                  marginRight: 4,
                  color: '#E4003B',
                  fontSize: 20,
                  fontWeight: '700',
                  marginTop: 3,
                  // borderWidth:1,
                  width: 70,
                }}>
                Rs {actualPrice}
              </Text>
              <Text
                style={{
                  marginRight: 3,
                  marginTop: 11,
                  fontSize: 11,
                  color: '#A3A3A3',
                  textDecorationLine: 'line-through',
                  marginLeft: -36,
                  // borderWidth:1,
                  width: 60,
                }}>
                Rs {priceLess}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginRight: 15,
                  marginTop: 3,
                  backgroundColor: '#E7013A',
                  borderRadius: 11,
                  color: 'white',
                  fontWeight: '700',
                  paddingHorizontal: 7,
                  height: 23,
                  paddingVertical: 2,
                  marginTop: 4,
                  marginLeft: -22,
                  // borderWidth:1,
                }}>
                {dicount}% OFF
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                {Click ? (
                  <Text
                    style={{marginLeft: 17, marginTop: 5}}
                    onPress={() => {
                      setClick(!Click);
                      setShowMessageBox(true);
                      setToggleModal(!ToggleModal);
                    }}>
                    {HeartFilld}
                  </Text>
                ) : (
                  <Pressable
                    onPress={() => {
                      setClick(!Click);
                      HnadleOpenBottomModal();
                      setShowMessageBox(true);
                      setToggleModal(!ToggleModal);
                    }}>
                    <Text style={{marginLeft: 17, marginTop: 5}}>
                      {HeartUnFilld}
                    </Text>
                  </Pressable>
                )}
                <Text
                  style={{
                    marginLeft: 5,
                    marginTop: 5,
                    fontSize: 15,
                    color: '#484848',
                    // borderWidth:1,
                    // width:111,
                    marginRight: 2,
                  }}>
                  {waight}
                </Text>
              </View>
            </View>
            <View style={{marginLeft: 16, marginTop: 12}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}>
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>100% Halal</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}>
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>PFA Approved</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}>
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>Standard Quality</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}>
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>
                  Our products are blast frozen from thawed state for quick
                  defrosting
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}>
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>
                  Approx. 20 Pieces
                </Text>
              </View>
            </View>
            <Text style={{lineHeight: 20, fontSize: 15}}>
              The Chicken Karahi cut provides you convenience for dinner
              shortcuts. It is a tasty dish prepared with strong flavors of
              onion, tomatoes, ginger, garlic, yogurt and chicken. Its
              mouthwatering masala tastes absolutely delicious with hot naan and
              tandoori roti.
            </Text>
            <Text style={{marginTop: 12, fontWeight: '700', fontSize: 18}}>
              More Vegetables
            </Text>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {TempDataFeatureProduct.map((item, index) => {
                  return (
                    <View key={index} style={{marginHorizontal: 5}}>
                      <ProductsBox
                        key={index}
                        funHandlegotoDetails={HandleGotoDetailsSecreen}
                        Data={item}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={styles.OuterContainerCatagoriesList}>
              {TempDataCategoriesTag &&
                TempDataCategoriesTag.map((item, index) => {
                  return <ItemsProduct key={index} Data={item} />;
                })}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            display: ShowMessageBox ? 'flex' : 'none',
            alignItems: 'center',
          }}>
          {Click ? (
            <Text
              style={{
                // borderWidth: 1,
                position: 'absolute',
                elevation: 1,
                bottom: 0,
                padding: 12,
                backgroundColor: '#DCDCDC',
                fontSize: 16,
                borderRadius: 14,
              }}>
              Item added favurite list
            </Text>
          ) : (
            <Text
              style={{
                // borderWidth: 1,
                position: 'absolute',
                elevation: 1,
                bottom: 0,
                padding: 12,
                backgroundColor: '#DCDCDC',
                fontSize: 16,
                borderRadius: 14,
              }}>
              Item removed from the favurite list
            </Text>
          )}
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          dragFromTopOnly={true}
          customStyles={{
            container: {
              minHeight: '50%',
              paddingHorizontal: 12,
              backgroundColor: '#F5F5F5',
            },
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#1E1E1E',
            },
          }}>
          <Text style={{textAlign: 'center', color: '#848484', fontSize: 16}}>
            Added to the favourite list
          </Text>
          <Text style={{marginTop: 12, color: '#181818', fontSize: 16}}>
            Add to another favourite list
          </Text>
          <View style={{minHeight: '10%', maxHeight: 200}}>
            <ScrollView>
              <View style={{paddingHorizontal: 12}}>
                {FavouriteListItemArray &&
                  FavouriteListItemArray.map((item, index) => {
                    return (
                      <Pressable
                        key={index}
                        onPress={() => {
                          HandleSetData(item);
                          setIndex(index);
                          // dispatch(UPDATEARRAYWISHLISTSCREEN(item));
                        }}>
                        <Text
                          key={index}
                          style={{
                            marginVertical: 12,
                            fontSize: 17,
                            color: '#7B7B7B',
                            borderWidth: 1,
                            textAlign: 'center',
                            padding: 6,
                            borderRadius: 3,
                            borderColor: '#FF783E',
                          }}>
                          {item}
                        </Text>
                      </Pressable>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#D5D5D5',
              padding: 12,
            }}>
            <Text>{PlusIcon}</Text>
            <Text
              style={{marginLeft: 12, fontSize: 14}}
              onPress={() => setToggleModalCreateListScreen(true)}>
              Create a new list
            </Text>
          </View>
        </RBSheet>
      </View>
    );
  }
};
export default DetailsScreen;

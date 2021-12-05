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
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';
import Spinner from 'react-native-loading-spinner-overlay';

import {useToast} from 'react-native-toast-notifications';
import ItemsProduct from '../ItemsProducts';
import Swiper from 'react-native-swiper';
import ProductsBox from '../ProductBox';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TempDataCategoriesTag, TempDataFeatureProduct} from '../TempData';
import Loading from './LoadingScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ErroIcon = (
  <FontAwesome5
    style={{fontSize: 19, color: '#EF6012'}}
    name={'exclamation-circle'}
  />
);
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
const PlainTriangle = require ('../Images/plain-triangle.png');
const DetailsScreen = ({route, navigation}) => {
  const [Click, setClick] = useState (false);
  const [ShowMessageBox, setShowMessageBox] = useState (false);
  const [spinner, setspinner] = useState (true);
  const [
    ToggleModalCreateListScreen,
    setToggleModalCreateListScreen,
  ] = useState (false);
  const [ToggleModal, setToggleModal] = useState (false);
  const [TextWishlist, setTextWishlist] = useState (null);
  const [ValidationWishListText, setValidationWishListText] = useState (false);
  const [FavouriteListNamesArray, setFavouriteListNamesArray] = useState (null);

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setShowMessageBox (false);
      }, 1000);
      return () => clearTimeout (timer);
    },
    [ShowMessageBox]
  );
  function HnadleOpenBottomModal () {
    refRBSheet.current.open ();
  }

  let {otherData} = route.params;
  let name = otherData.titleName;
  let actualPrice = otherData.actualPrice;
  let priceLess = otherData.lessPrice;
  let dicount = otherData.dic;
  let waight = otherData.productWaight;
  let HeaderName = JSON.stringify (name);
  console.log("other Data",otherData)
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  function HandleGotoDetailsSecreen (name) {
    navigation.push ('DetailsSecreenSecreen', {
      name: name,
    });
  }
  const refRBSheet = useRef ();

  useEffect (() => {
    setInterval (() => {
      setspinner (false);
    }, 2000);
  }, []);

  useEffect (() => {
    getWishListData ();
  }, []);

  useEffect (async () => {
    let flag = false;
    let previousList = await AsyncStorage.getItem ('WishlistNames');
    if (previousList !== null || previousList !== undefined) {
      previousList = JSON.parse (previousList);
      for (let i = 0; i < previousList.length; i++) {
        for (let j = 0; j < previousList[i].Array.length; j++) {
          if (previousList[i].Array[j].Id === otherData.Id) {
            setClick (true);
            flag = true;
            break;
          } else {
            setClick (false);
          }
        }
        if (flag) {
          break;
        }
      }
    }
    let previousDefaulednamedList = await AsyncStorage.getItem (
      'WishlistDaultArray'
    );
    if (
      previousDefaulednamedList !== null ||
      previousDefaulednamedList !== undefined
    ) {
      previousDefaulednamedList = JSON.parse (previousDefaulednamedList);
      for (let i = 0; i < previousDefaulednamedList.length; i++) {
        if (previousDefaulednamedList[i].Id === otherData.Id) {
          setClick (true);
          break;
        } else {
          setClick (false);
        }
      }
    }
  }, []);

  async function getWishListData () {
    let flag = false;
    let previousList = await AsyncStorage.getItem ('WishlistNames');
    if (previousList !== null || previousList !== undefined) {
      previousList = JSON.parse (previousList);
      setFavouriteListNamesArray (previousList);
    }
    let previousDefaulednamedList = await AsyncStorage.getItem (
      'WishlistDaultArray'
    );
    if (
      previousDefaulednamedList !== null ||
      previousDefaulednamedList !== undefined
    ) {
      previousDefaulednamedList = JSON.parse (previousDefaulednamedList);
    }
  }

  async function HandleAddNamedWishlistData (item) {
    let previousDefaultList = await AsyncStorage.getItem ('WishlistDaultArray');
    if (previousDefaultList !== null || previousDefaultList !== undefined) {
      previousDefaultList = JSON.parse (previousDefaultList);
     for (let index = 0; index < previousDefaultList.length; index++) {
             console.log("item",previousDefaultList[index]);
             if(previousDefaultList[index].ID===otherData.ID){
              previousDefaultList.splice(index,1)
             }
     }

    }

    await AsyncStorage.setItem (
      'WishlistDaultArray',
      JSON.stringify (previousDefaultList)
    );

    var index = item.Array.findIndex (x => x.Id == otherData.Id);
    index === -1
      ? item.Array.push (otherData)
      : console.log ('object already exists');
    let previousList = await AsyncStorage.getItem ('WishlistNames');
    if (previousList !== null || previousList !== undefined) {
      previousList = JSON.parse (previousList);
      previousList.map ((itemdata, index) => {
        itemdata.Array.map ((item, index) => {
          itemdata.Array.splice (index, 1);
        });
        if (itemdata.name === item.name) {
          previousList[index].Array = item.Array;
        }
      });
      await AsyncStorage.setItem (
        'WishlistNames',
        JSON.stringify (previousList)
      );
      getWishListData ();
    }
  }
  // AsyncStorage.clear()

  function HandleTextWishlist (text) {
    if (text) {
      setTextWishlist (text);
    } else {
      setTextWishlist (null);
    }
    setValidationWishListText (false);
  }
  async function handlecreateList () {
    if (TextWishlist !== null) {
      let Listname = [];
      let previousList = await AsyncStorage.getItem ('WishlistNames');
      if (previousList === null || previousList === undefined) {
        Listname.push ({name: TextWishlist, Array: []});
      } else {
        Listname = JSON.parse (previousList);
        Listname.push ({name: TextWishlist, Array: []});
      }
      await AsyncStorage.setItem ('WishlistNames', JSON.stringify (Listname));
      setToggleModalCreateListScreen (false);
      setTextWishlist (null);
    } else {
      setValidationWishListText (true);
    }
  }

  async function HandleWishlistDefaultArray () {
    let WishListDefaultArray = [];
    let previousList = await AsyncStorage.getItem ('WishlistDaultArray');
    if (previousList === null || previousList === undefined) {
      WishListDefaultArray.push (otherData);
    } else {
      WishListDefaultArray = JSON.parse (previousList);

      var index = WishListDefaultArray.findIndex (x => x.Id == otherData.Id);
      index === -1
        ? WishListDefaultArray.push (otherData)
        : console.log ('object already exists');
    }
    await AsyncStorage.setItem (
      'WishlistDaultArray',
      JSON.stringify (WishListDefaultArray)
    );
  }

  async function HandleRemoveWishlistitem () {
    let previousList = await AsyncStorage.getItem ('WishlistDaultArray');
    if (previousList !== null || previousList !== undefined) {
      previousList = JSON.parse (previousList);
      previousList.map ((item, index) => {
        if (item.Id === otherData.Id) {
          previousList.splice (index, 1);
        }
      });
    }
    await AsyncStorage.setItem (
      'WishlistDaultArray',
      JSON.stringify (previousList)
    );
    let previousListNamedArray = await AsyncStorage.getItem ('WishlistNames');
    if (
      previousListNamedArray !== null ||
      previousListNamedArray !== undefined
    ) {
      previousListNamedArray = JSON.parse (previousListNamedArray);
      previousListNamedArray.map ((itemdata, index) => {
        itemdata.Array.map ((item, index) => {
          if (item.Id === otherData.Id) {
            itemdata.Array.splice (index, 1);
          }
        });
      });
      await AsyncStorage.setItem (
        'WishlistNames',
        JSON.stringify (previousListNamedArray)
      );
      getWishListData ();
    }
  }

  if (ToggleModalCreateListScreen) {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 22,
          width: '100%',
          height: '100%',
        }}
      >
        <Text
          style={{textAlign: 'right'}}
          onPress={() => setToggleModalCreateListScreen (false)}
        >
          {CrossIcon}
        </Text>
        <Text
          style={{
            //   borderWidth: 1,
            textAlign: 'center',
            fontSize: 21,
            fontWeight: '700',
            marginTop: 33,
          }}
        >
          Create a new list
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            marginVertical: 20,
            fontSize: 17,
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderColor: '#E7E7E7',
            color: '#A0A0A0',
          }}
          onChangeText={text => HandleTextWishlist (text)}
          placeholder="List Name"
        />
        <View style={{position: 'absolute', top: 155, left: 190, zIndex: 1}}>
          {ValidationWishListText &&
            <View>
              <Text style={{textAlign: 'right', marginRight: 10}}>
                {ErroIcon}
              </Text>
              <View
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'flex-end',
                  marginRight: 12,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={PlainTriangle}
                  tintColor="#FF0131"
                />
              </View>
              <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
            </View>}
        </View>
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
            handlecreateList ();
          }}
        >
          Create
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header name={name} EditButton={false} ScreenName={true} />
        <View style={styles.OutercontainerDetailScreen}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{marginTop: 12, fontSize: 18}}>{name}</Text>
            {spinner
              ? <ActivityIndicator size="large" color="#00ff00" />
              : <View>
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
                    }}
                  >
                    <View
                      style={{
                        width: 260,
                        padding: 12,
                        marginLeft: 45,
                        padding: 12,
                        height: 200,
                        // borderWidth:1
                      }}
                    >
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          flex: 1,
                          resizeMode: 'contain',
                        }}
                        source={otherData.img}
                      />
                    </View>
                  </Swiper>
                </View>}
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
                }}
              >
                Rs
                {actualPrice}
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
                }}
              >
                Rs
                {priceLess}
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
                }}
              >
                {dicount}
                % OFF
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                {Click
                  ? <Text
                      style={{marginLeft: 17, marginTop: 5}}
                      onPress={() => {
                        setClick (false);
                        setShowMessageBox (true);
                        setToggleModal (!ToggleModal);
                        getWishListData ();
                        HandleRemoveWishlistitem ();
                      }}
                    >
                      {HeartFilld}
                    </Text>
                  : <Pressable
                      onPress={() => {
                        setClick (true);
                        HnadleOpenBottomModal ();
                        setShowMessageBox (true);
                        setToggleModal (!ToggleModal);
                        getWishListData ();
                        HandleWishlistDefaultArray ();
                      }}
                    >
                      <Text style={{marginLeft: 17, marginTop: 5}}>
                        {HeartUnFilld}
                      </Text>
                    </Pressable>}
                <Text
                  style={{
                    marginLeft: 5,
                    marginTop: 5,
                    fontSize: 15,
                    color: '#484848',
                    // borderWidth:1,
                    // width:111,
                    marginRight: 2,
                  }}
                >
                  
                  {otherData.productWaight} Kg
                </Text>
              </View>
            </View>
            <View
          style={{
            display: ShowMessageBox ? 'flex' : 'none',
            alignItems: 'center',
          }}
        >
          {Click
            ? <Text
                style={{
                  // borderWidth: 1,
                  position: 'absolute',
                  
                  zIndex:9999,
                  elevation: 1,
                  bottom: 0,
                  padding: 12,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  fontSize: 16,
                  borderRadius: 14,
                  
                }}
              >
                Item added favurite list
              </Text>
            : <Text
                style={{
                  // borderWidth: 1,
                  position: 'absolute',
                  zIndex:9999,
                  elevation: 1,
                  bottom: 0,
                  padding: 12,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  fontSize: 16,
                  borderRadius: 14,
                }}
              >
                Item removed from the favurite list
              </Text>}
        </View>
            <View style={{marginLeft: 16, marginTop: 12}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}
                >
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>100% Halal</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}
                >
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>PFA Approved</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}
                >
                  {'\u2B24'}
                </Text>
                <Text style={{fontSize: 16, width: 297}}>Standard Quality</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}
                >
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
                }}
              >
                <Text
                  style={{fontSize: 10, textAlign: 'center', marginRight: 7}}
                >
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
            {spinner
              ? <ActivityIndicator size="large" color="#00ff00" />
              : <View style={{display: 'flex', alignItems: 'center'}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {TempDataFeatureProduct.map ((item, index) => {
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
                </View>}
            {spinner
              ? <ActivityIndicator size="large" color="#00ff00" />
              : <View style={styles.OuterContainerCatagoriesList}>
                  {TempDataCategoriesTag &&
                    TempDataCategoriesTag.map ((item, index) => {
                      return <ItemsProduct key={index} Data={item} />;
                    })}
                </View>}
          </ScrollView>
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
          }}
        >
          <Text style={{textAlign: 'center', color: '#848484', fontSize: 16}}>
            Added to the favourite list
          </Text>
          <Text style={{marginTop: 12, color: '#181818', fontSize: 16}}>
            Add to another favourite list
          </Text>
          <View style={{minHeight: '10%', maxHeight: 200}}>
            <ScrollView>
              <View style={{paddingHorizontal: 12}}>
                {FavouriteListNamesArray &&
                  FavouriteListNamesArray.map ((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          HandleAddNamedWishlistData (item);
                        }}
                      >
                        <Text
                          key={index}
                          style={{
                            marginVertical: 4,
                            fontSize: 15,
                            color: '#7B7B7B',
                            textAlign: 'left',
                            borderRadius: 3,
                          }}
                        >
                          {item.name} ({item.Array.length})
                        </Text>
                      </TouchableOpacity>
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
            }}
          >
            <Text>{PlusIcon}</Text>
            <Text
              style={{marginLeft: 12, fontSize: 14}}
              onPress={() => setToggleModalCreateListScreen (true)}
            >
              Create a new list
            </Text>
          </View>
        </RBSheet>
      </View>
    );
  }
};
export default DetailsScreen;

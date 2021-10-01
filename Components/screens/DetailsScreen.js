import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView, Image, Alert, TextInput} from 'react-native';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import ProductsBox from '../ProductBox';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TempDataCategoriesTag, TempDataFeatureProduct} from '../TempData';
import {UPDATEARRAYWISHLISTSCREEN} from '../Redux/actions/indux';
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
const FavouriteListItemArray = [];
const DetailsScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [Click, setClick] = useState(false);
  const [ShowMessageBox, setShowMessageBox] = useState(false);
  const [ToggleModalCreateListScreen, setToggleModalCreateListScreen] =
    useState(false);
  const [HandleFavouriteListText, setHandleFavouriteListText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessageBox(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ShowMessageBox]);

  let {otherData} = route.params;
  let name = otherData.titleName;
  let actualPrice = otherData.actualPrice;
  let priceLess = otherData.lessPrice;
  let dicount = otherData.dic;
  let waight = otherData.productWaight;
  let HeaderName = JSON.stringify(name);
  let MainImg = JSON.stringify(otherData.img);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  function HandleGotoDetailsSecreen(name) {
    navigation.push('DetailsSecreenSecreen', {
      name: name,
    });
  }
  const refRBSheet = useRef();
  let WishListArray = [];
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
            console.log('text array.', FavouriteListItemArray);
          }}>
          Create
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header name={HeaderName} ScreenName={true} />
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
                    source={MainImg}
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
                    }}>
                    {HeartFilld}
                  </Text>
                ) : (
                  <Text
                    style={{marginLeft: 17, marginTop: 5}}
                    onPress={() => {
                      setClick(!Click);
                      refRBSheet.current.open();
                      setShowMessageBox(true);
                    }}>
                    {HeartUnFilld}
                  </Text>
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
          <View style={{minHeight: '10%', maxHeight: 150}}>
            <ScrollView>
              <View style={{paddingHorizontal: 12}}>
                {FavouriteListItemArray &&
                  FavouriteListItemArray.map((item, index) => {
                    return (
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
                        }}
                        onPress={() => {
                          let temp = false
                          if(WishListArray.length===0){
                            WishListArray.push(item);
                          }

                          if (WishListArray.length !== 0) {
                            for (let i = 0; i < WishListArray.length; i++) {
                              if (WishListArray[i] === item) {
                                temp=true
                              }
                            }
                            if(temp===false){
                              WishListArray.push(item);
                            }
                            console.log("yes")
                          }

                          console.log('89', item);
                          console.log('uiuiui', WishListArray);
                          dispatch(UPDATEARRAYWISHLISTSCREEN(WishListArray));
                        }}>
                        {item}
                      </Text>
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

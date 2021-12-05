import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  BackHandler,
  Share,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import { Context } from '../Context/Context'
import {Context} from './Context/Context';
import {TempDataCategoriesTag} from './TempData';
import styles from './Style';
const img = require ('./Images/shopping-cart.png');
const Menu = require ('./Images/menu.png');
const Ioupe = require ('./Images/search.png');
const LeftArrow = require ('./Images/left-arrow.png');
const Sharing = require ('./Images/sharing.png');
const EditIcon = require ('./Images/edit.png');
function Header (props) {
  const contextData = useContext (Context);
  const [TextTopSearch, setTextTopSearch] = useState ('');
  const navigation = useNavigation ();
  const [ToggleCartValue, setToggleCartValue] = useState (false);
  const onShare = async () => {
    try {
      const result = await Share.share ({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert (error.message);
    }
  };

  useEffect (
    () => {
      if (contextData.CartLength === 0) {
        setToggleCartValue (false);
      } else {
        setToggleCartValue (true);
      }
    },
    [contextData.UpdateCartItem]
  );

  useEffect (
    () => {
      setTextTopSearch (contextData.TopSearchElement);
    },
    [contextData.TopSearchElement]
  );

  if (props.name === undefined) {
    return (
      <SafeAreaView>
        <View style={styles.OutercontainerHeader}>
          {ToggleCartValue &&
            <Text
              style={{
                position: 'absolute',
                elevation: 1,
                textAlign: 'center',
                textAlignVertical: 'center',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#18AE43',
                height: '58%',
                width: '8%',
                borderRadius: 15,
                color: 'white',
                left: 331,
                bottom: 22,
                top: 7,
                fontSize: 11,
              }}
            >
              {contextData.CartLength}
            </Text>}
          <View
            style={{
              marginRight: 19,
              marginTop: 10,
              marginLeft: 5,
              elevation: 1,
            }}
          >
            <TouchableOpacity
              underlayColor="none"
              onPress={() => {
                navigation.openDrawer ();
              }}
            >
              <View style={{width: 23, height: 25}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={Menu}
                  tintColor="#F6783B"
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            underlayColor="none"
            onPress={() => {
              navigation.navigate ('SearchScreen', {
                name: '',
              });
            }}
          >
            <View style={styles.HeaderOuterWraperInputinput}>
              <View style={{marginHorizontal: 9, marginTop: 11, padding: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate ('SearchScreen', {
                      name: '',
                    });
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
                      source={Ioupe}
                      tintColor="#727272"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                onChangeText={userValue => setTextTopSearch (userValue)}
                value={TextTopSearch}
                placeholder="What are you looking for"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor="none"
            style={styles.button}
            onPress={() => {
              navigation.navigate ('CartScreen', {
                name: 'My Cart',
              });
            }}
          >
            <View style={{marginTop: 12}}>
              <View style={{width: 25, height: 25}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={img}
                  tintColor="#F6783B"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.OutercontainerHeader}>
          {ToggleCartValue &&
            <Text
              style={{
                position: 'absolute',
                elevation: 1,
                textAlign: 'center',
                textAlignVertical: 'center',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#18AE43',
                height: '58%',
                width: '8%',
                borderRadius: 15,
                color: 'white',
                left: 331,
                bottom: 22,
                top: 7,
                fontSize: 11,
              }}
            >
              {contextData.CartLength}
            </Text>}
          <View
            style={{display: 'flex', flexDirection: 'row', paddingVertical: 3}}
          >
            <View
              style={{
                marginRight: 10,
                marginTop: 11,
                marginLeft: 7,
                marginRight: 10,
                // borderWidth:1
              }}
            >
              <TouchableOpacity
                underlayColor="none"
                onPress={() => {
                  navigation.goBack ();
                  contextData.HandaleArraySearchInputValue (null);
                }}
              >
                <View style={{width: 25, height: 25, zIndex: 1}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={LeftArrow}
                    tintColor="#F6783B"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 290,
                // borderWidth:1
              }}
            >
              {props.Searchbarinputfield
                ? <SafeAreaView>
                    <View
                      style={styles.HeaderOuterWraperInputinputSearchScreen}
                    >
                      <View
                        style={{marginHorizontal: 6, marginTop: 7, padding: 1}}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate ('SearchScreen', {
                              name: '',
                            });
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
                              source={Ioupe}
                              tintColor="#727272"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                      <TextInput
                        selectTextOnFocus={true}
                        autoFocus
                        onChangeText={userValue => {
                          setTextTopSearch (userValue);
                          contextData.HandaleArraySearchInputValue (userValue);
                        }}
                        value={TextTopSearch}
                        placeholder="What are you looking for?"
                      />
                    </View>
                  </SafeAreaView>
                : <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      width: 190,
                    }}
                    numberOfLines={1}
                  >
                    {props.name}
                  </Text>}
              <View style={{display: 'flex', flexDirection: 'row'}}>
                {props.ScreenName &&
                  <TouchableOpacity
                    onPress={() => {
                      onShare ();
                      console.log ('i');
                    }}
                  >
                    <View style={{marginTop: 14, marginRight: 13}}>
                      <View style={{width: 25, height: 25}}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            flex: 1,
                            resizeMode: 'contain',
                          }}
                          source={Sharing}
                          tintColor="#F6783B"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>}
                {props.ScreenName &&
                  <View style={{marginTop: 14, marginRight: 13}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate ('SearchScreen', {
                          name: '',
                        });
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
                          source={Ioupe}
                          tintColor="#F6783B"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>}
                {props.EditButton &&
                  <TouchableOpacity
                    underlayColor="none"
                    style={styles.button}
                    onPress={() => dispatch (TOGGLEEDITBUTTON (true))}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 14,
                        marginRight: 10,
                      }}
                    >
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          flex: 1,
                          resizeMode: 'contain',
                        }}
                        source={EditIcon}
                        tintColor="#F6783B"
                      />
                    </View>

                  </TouchableOpacity>}
                {props.ScreenName
                  ? <View>
                      <TouchableOpacity
                        underlayColor="none"
                        style={styles.button}
                        onPress={() => {
                          navigation.navigate ('CartScreen', {
                            name: 'My Cart',
                          });
                        }}
                      >
                        <View style={{marginTop: 12}}>
                          <View style={{width: 25, height: 25}}>
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                                flex: 1,
                                resizeMode: 'contain',
                              }}
                              source={img}
                              tintColor="#F6783B"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  : <View>
                      <TouchableOpacity
                        underlayColor="none"
                        style={styles.button}
                        onPress={() => {
                          navigation.navigate ('CartScreen', {
                            name: 'My Cart',
                          });
                        }}
                      >
                        <View style={{marginTop: 12}}>
                          <View style={{width: 25, height: 25}}>
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                                flex: 1,
                                resizeMode: 'contain',
                              }}
                              source={img}
                              tintColor="#F6783B"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;

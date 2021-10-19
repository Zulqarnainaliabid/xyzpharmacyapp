import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  TOGGLEDRAWERBUTTON,
  UPDATESEARCHARRAY,
  UPDATEARRAYLENGTH,
  UPDATETOPSEARCHNAME,
  TOGGLEEDITBUTTON,
} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TempDataCategoriesTag} from './TempData';

const img = require('./Images/shopping-cart.png');
const Menu = require('./Images/menu.png');
const Ioupe = require('./Images/search.png');
const LeftArrow = require('./Images/left-arrow.png');
const Sharing = require('./Images/sharing.png');
function Header(props) {
  const [TextTopSearch, setTextTopSearch] = useState('');
  const { UpdateTopSearchName } = useSelector(state => state.booksReducer);
  const {bookmarks} = useSelector (state => state.booksReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    setTextTopSearch(UpdateTopSearchName);
  }, [UpdateTopSearchName]);
  function HandleSearchItem(text) {
    setTextTopSearch(text);
    let arr = TempDataCategoriesTag.filter(value => {
      if (text == '') {
      } else if (value.titleName.toLowerCase().includes(text.toLowerCase())) {
        return value;
      } else {
        dispatch(UPDATESEARCHARRAY([]));
        dispatch(UPDATETOPSEARCHNAME(''));
      }
    });
    dispatch(UPDATESEARCHARRAY(arr));
    if (arr.length === 0) {
      dispatch(UPDATEARRAYLENGTH(false));
      dispatch(UPDATETOPSEARCHNAME(''));
    } else {
      dispatch(UPDATEARRAYLENGTH(true));
    }
  }
  if (props.name === undefined) {
    return (
      <>
        <View style={styles.OutercontainerHeader}>
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
            }}>
             {bookmarks.length} 
          </Text>
          <View style={{marginRight: 19, marginTop: 10, marginLeft: 5}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(TOGGLEDRAWERBUTTON(true));
              }}>
              <View style={{width: 23, height: 25}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={Menu}
                  tintColor="#F6783B"
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchScreen', {
                name: '',
              });
            }}>
            <View style={styles.HeaderOuterWraperInputinput}>
              <View style={{marginHorizontal: 9, marginTop: 11, padding: 1}}>
                <View style={{width: 20, height: 20}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={Ioupe}
                    tintColor="#727272"
                  />
                </View>
              </View>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                // onChangeText={onChangeText}
                // value={text}
                placeholder="What are you looking for?"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('CartScreen', {
                name: 'My Cart',
              });
            }}>
            <View style={{marginTop: 12}}>
              <View style={{width: 25, height: 25}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={img}
                  tintColor="#F6783B"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    return (
      <View style={styles.OutercontainerHeader}>
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
          }}>
          {bookmarks.length}
        </Text>
        <View
          style={{display: 'flex', flexDirection: 'row', paddingVertical: 3}}>
          <View
            style={{
              marginRight: 10,
              marginTop: 11,
              marginLeft: 7,
              marginRight: 10,
              // borderWidth:1
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                dispatch(UPDATETOPSEARCHNAME(''));
                dispatch(UPDATEARRAYLENGTH(false));
                dispatch(UPDATESEARCHARRAY([]));
              }}>
              <View style={{width: 25, height: 25}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={LeftArrow}
                  tintColor="#F6783B"
                />
              </View>
              {/* <Text>{ArrowLeftIcon}</Text> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 278,
              // borderWidth:1
            }}>
            {props.Searchbarinputfield ? (
              <>
                <View style={styles.HeaderOuterWraperInputinputSearchScreen}>
                  <View style={{marginHorizontal: 6, marginTop: 7, padding: 1}}>
                    <View style={{width: 20, height: 20}}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={Ioupe}
                        tintColor="#727272"
                      />
                    </View>
                  </View>
                  <TextInput
                    onChangeText={text => {
                      HandleSearchItem(text);
                    }}
                    value={TextTopSearch}
                    autoFocus
                    placeholder="What are you looking for?"
                  />
                </View>
              </>
            ) : (
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  width: 190,
                  borderWidth: 1,
                }}
                numberOfLines={1}>
                {props.name}
              </Text>
            )}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {props.ScreenName && (
                <View style={{marginTop: 14, marginRight: 13}}>
                  <View style={{width: 25, height: 25}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={Sharing}
                      tintColor="#F6783B"
                    />
                  </View>
                </View>
              )}
              {props.ScreenName && (
                <View style={{marginTop: 14, marginRight: 13}}>
                  <View style={{width: 20, height: 20}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={Ioupe}
                      tintColor="#F6783B"
                    />
                  </View>
                </View>
              )}
              {props.EditButton && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch(TOGGLEEDITBUTTON(true))}>
                  <Text style={{marginTop: 10, color: '#FE7740'}}>EDIT</Text>
                </TouchableOpacity>
              )}
              {props.ScreenName ? (
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('CartScreen');
                    }}>
                    <View style={{marginTop: 12}}>
                      <View style={{width: 25, height: 25}}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={img}
                          tintColor="#F6783B"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('CartScreen');
                    }}>
                    <View style={{marginTop: 12}}>
                      <View style={{width: 25, height: 25}}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={img}
                          tintColor="#F6783B"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;

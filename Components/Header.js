import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  TOGGLEDRAWERBUTTON,
  UPDATESEARCHARRAY,
  UPDATEARRAYLENGTH,
  UPDATETOPSEARCHNAME,
} from './Redux/actions/indux';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {JSONDATALIST1} from './TempData';
const SearchIcon = (
  <FontAwesome5
    style={{fontSize: 20, color: '#777777'}}
    name={'search'}
    solid
  />
);
const ShoppingIcon = (
  <FontAwesome5
    style={{fontSize: 25, color: '#FF7440'}}
    name={'shopping-cart'}
    solid
  />
);
const HeaderIcon = (
  <FontAwesome5 style={{fontSize: 20, color: '#FF7440'}} name={'bars'} solid />
);

const ShareIcon = (
  <FontAwesome5
    style={{fontSize: 25, color: '#FF7440'}}
    name={'share-alt'}
    solid
  />
);

const ArrowLeftIcon = (
  <FontAwesome5
    style={{fontSize: 20, color: '#FF7440'}}
    name={'arrow-left'}
    solid
  />
);
function Header(props) {
  const [TextTopSearch, setTextTopSearch] = useState('');
  const UpdateTopSearchName = useSelector(state => state.UpdateTopSearchName);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    setTextTopSearch(UpdateTopSearchName);
  }, [UpdateTopSearchName]);
  function HandleSearchItem(text) {
    setTextTopSearch(text);
    let arr = JSONDATALIST1.filter(value => {
      if (text == '') {
      } else if (value.first_name.toLowerCase().includes(text.toLowerCase())) {
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
          <View style={{marginRight: 10, marginTop: 10, marginLeft: 1}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(TOGGLEDRAWERBUTTON(true));
              }}>
              {HeaderIcon}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchScreen', {
                name: '',
              });
            }}>
            <View style={styles.HeaderOuterWraperInputinput}>
              <View style={{marginHorizontal: 9, marginTop: 8, padding: 1}}>
                {SearchIcon}
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
          <View style={{marginLeft: 10, marginTop: 10}}>{ShoppingIcon}</View>
        </View>
      </>
    );
  } else {
    return (
      <View style={styles.OutercontainerHeader}>
        <View
          style={{display: 'flex', flexDirection: 'row', paddingVertical: 3}}>
          <View
            style={{
              marginRight: 10,
              marginTop: 9,
              marginLeft: 17,
              marginRight: 17,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                dispatch(UPDATETOPSEARCHNAME(''));
              }}>
              <Text>{ArrowLeftIcon}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 288,
            }}>
            {props.Searchbarinputfield ? (
              <>
                <View style={styles.HeaderOuterWraperInputinputSearchScreen}>
                  <View style={{marginHorizontal: 6, marginTop: 7, padding: 1}}>
                    {SearchIcon}
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
                style={{marginTop: 10, fontSize: 20, width: 233}}
                numberOfLines={1}>
                {props.name}
              </Text>
            )}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {props.ScreenName && (
                <View style={{marginTop: 14, marginRight: 13}}>
                  {ShareIcon}
                </View>
              )}
              {props.ScreenName && (
                <View style={{marginTop: 14, marginRight: 13}}>
                  {SearchIcon}
                </View>
              )}

              {props.ScreenName ? (
                <View style={{marginTop: 14}}>{ShoppingIcon}</View>
              ) : (
                <View style={{marginTop: 5, marginLeft: 5}}>
                  {ShoppingIcon}
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

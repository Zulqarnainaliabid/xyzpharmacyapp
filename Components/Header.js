import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TOGGLEDRAWERBUTTON} from './Redux/actions/indux';
import {useDispatch, useSelector} from 'react-redux';

const SearchIcon = (
  <FontAwesome5
    style={{fontSize: 25, color: '#777777'}}
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
  <FontAwesome5 style={{fontSize: 25, color: '#FF7440'}} name={'bars'} solid />
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
  const dispatch = useDispatch();
  if (props.name === undefined) {
    return (
      <>
        <View style={styles.OutercontainerHeader}>
          <View style={{marginRight: 10, marginTop: 14, marginLeft: 7}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(TOGGLEDRAWERBUTTON(true));
              }}>
              {HeaderIcon}
            </TouchableOpacity>
          </View>
          <View style={styles.HeaderOuterWraperInputinput}>
            <View style={{marginHorizontal: 6, marginTop: 1, padding: 10}}>
              {SearchIcon}
            </View>
            <TextInput
              // onChangeText={onChangeText}
              // value={text}
              placeholder="What are you looking for?"
            />
          </View>
          <View style={{marginLeft: 10, marginTop: 14}}>{ShoppingIcon}</View>
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
              marginTop: 14,
              marginLeft: 17,
              marginRight: 17,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.fun();
              }}>
              <Text>{ArrowLeftIcon}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              // borderWidth: 1,
              width: 288,
            }}>
            <Text
              style={{marginTop: 10, fontSize: 20, width: 233}}
              numberOfLines={1}>
              {props.name}
            </Text>
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
                <View style={{marginTop: 14, marginLeft: 25}}>
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

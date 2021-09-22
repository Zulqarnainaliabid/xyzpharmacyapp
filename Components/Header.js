import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchIcon = (
  <FontAwesome5
    style={{fontSize: 21, color: '#777777'}}
    name={'search'}
    solid
  />
);
const ShoppingIcon = (
  <FontAwesome5
    style={{fontSize: 21, color: '#FF7440'}}
    name={'shopping-cart'}
    solid
  />
);
const HeaderIcon = (
  <FontAwesome5 style={{fontSize: 21, color: '#FF7440'}} name={'bars'} solid />
);

const ShareIcon = (
  <FontAwesome5
    style={{fontSize: 21, color: '#FF7440'}}
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
  if (props.name === undefined) {
    return (
      <>
        <View style={styles.OutercontainerHeader}>
          <View style={{marginRight: 10, marginTop: 14, marginLeft: 7}}>
            {HeaderIcon}
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
        <View style={{marginRight: 10, marginTop: 14, marginLeft: 7}}>
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
            alignItems: 'flex-end',
          }}>
          <Text style={{marginTop: 10, fontSize: 20, width: 212}}>
            {props.name}
          </Text>
          {props.ScreenName && (
            <View style={{marginTop: 14, marginRight: 10}}>{ShareIcon}</View>
          )}
          {props.ScreenName && (
            <View style={{marginTop: 14, marginRight: 10}}>{SearchIcon}</View>
          )}
          {props.ScreenName ? (
            <View style={{marginTop: 14}}>{ShoppingIcon}</View>
          ) : (
            <View style={{marginTop: 14, marginLeft: 67}}>{ShoppingIcon}</View>
          )}
        </View>
      </View>
    );
  }
}

export default Header;

import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../Header';
import {UPDATETOPSEARCHNAME, UPDATEARRAYLENGTH} from '../Redux/actions/indux';
import {useDispatch, useSelector} from 'react-redux';
import ItemsProduct from '../ItemsProducts';
export function TopSearchBox(props) {
  const dispatch = useDispatch();
  return (
    <Text
      onPress={() => {
        dispatch(UPDATETOPSEARCHNAME(props.item.name));
        dispatch(UPDATEARRAYLENGTH(true));
      }}
      style={{
        borderWidth: 1,
        borderColor: '#CF7F5E',
        color: '#CF7F5E',
        paddingVertical: 9,
        paddingHorizontal: 12,
        marginVertical: 12,
        marginHorizontal: 5,
        borderRadius: 19,
      }}>
      {props.item.name}
    </Text>
  );
}
const SearchScreen = ({route, navigation}) => {
  let {name} = route.params;
  let HeaderName = JSON.stringify(name);
  HeaderName = HeaderName.replace('"', '').replace('"', '');
  const UpdateSearchArray = useSelector(state => state.UpdateSearchArray);
  const UpdateArrayLength = useSelector(state => state.UpdateArrayLength);

  console.log('pp', UpdateArrayLength, 'jj', UpdateSearchArray);
  const ItemAray = [
    {name: 'Grapes'},
    {name: 'Mango'},
    {name: 'Banana'},
    {name: 'Tomato'},
    {name: 'Onion'},
    {name: 'Bread'},
    {name: 'Apple'},
    {name: 'Potato'},
    {name: 'Milk'},
    {name: 'Nestle'},
  ];

  const ListAray = [
    {name: 'Grapes'},
    {name: 'Mango'},
    {name: 'Banana'},
    {name: 'Tomato'},
    {name: 'Onion'},
    {name: 'Bread'},
    {name: 'Apple'},
    {name: 'Potato'},
    {name: 'Milk'},
    {name: 'Nestle'},
  ];

  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} ScreenName={false} Searchbarinputfield={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FAFAFA',
          padding: 12,
        }}>
        {UpdateArrayLength ? (
          <View style={{flex: 1}}>
            <View style={{height: 53}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 15,
                  }}>
                  {ListAray.map((item, index) => {
                    return (
                      <View key={index}>
                        <Text
                          style={{
                            borderWidth: 1,
                            borderColor: '#C88164',
                            color: '#C88164',
                            padding: 12,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            marginHorizontal: 5,
                            borderRadius: 16,
                            textAlignVertical: 'center',
                          }}>
                          All (666)
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {UpdateSearchArray &&
                UpdateSearchArray.map((item, index) => {
                  return (
                    <View key={index}>
                      <ItemsProduct />
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {UpdateSearchArray &&
                UpdateSearchArray.map((val, key) => {
                  return (
                    <View key={key}>
                      <Text>{val.first_name}</Text>
                    </View>
                  );
                })}
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000000',
                  fontSize: 21,
                  fontWeight: '700',
                  marginVertical: 21,
                }}>
                Top Searches
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                {ItemAray.map((item, index) => {
                  return <TopSearchBox key={index} item={item} />;
                })}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

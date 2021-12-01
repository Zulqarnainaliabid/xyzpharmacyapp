import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Header from '../Header';
import {Context} from '../Context/Context';
import ItemsProduct from '../ItemsProducts';
export function TopSearchBox (props) {
  const contextData = useContext (Context);
  return (
    <TouchableOpacity
      onPress={() => {
        contextData.HandaleTopSearchElement (props.item.name);
        contextData.HandaleArraySearchInputValue (props.item.name);
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: '#CF7F5E',
          color: '#CF7F5E',
          paddingVertical: 9,
          paddingHorizontal: 12,
          marginVertical: 12,
          marginHorizontal: 5,
          borderRadius: 19,
        }}
      >
        {props.item.name}
      </Text>
    </TouchableOpacity>
  );
}
const NoProductFound = require ('../Images/NoProductFound.png');
const SearchScreen = ({route, navigation}) => {
  const [UpdateArrayLength, setUpdateArrayLength] = useState (false);
  const [DataAfterSearched, setDataAfterSearched] = useState (false);
  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');
  const contextData = useContext (Context);

  const ItemAray = [
    {name: 'Grapes', id: '1'},
    {name: 'Mango', id: '2'},
    {name: 'Banana', id: '3'},
    {name: 'Tomato', id: '4'},
    {name: 'Onion', id: '5'},
    {name: 'Bread', id: '6'},
    {name: 'Apple', id: '7'},
    {name: 'Potato', id: '8'},
    {name: 'Milk', id: '9'},
    {name: 'Nestle', id: '10'},
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
  useEffect (
    () => {
      if (contextData.SearchingInputValue) {
        setUpdateArrayLength (true);
        let tempData = null;
        tempData = contextData.ServerData.map ((item, index) => {
          return item.data.filter (val => {
            if (contextData.SearchingInputValue == '') {
              return '';
            } else if (
              val.titleName
                .toLowerCase ()
                .includes (contextData.SearchingInputValue.toLowerCase ())
            ) {
              return val;
            }
          });
        });
        let flag = false;
        if (tempData !== null) {
          for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].length === 0) {
              flag = true;
            } else {
              flag = false;
              break;
            }
          }
          setDataAfterSearched (flag);
        }
      } else {
        setUpdateArrayLength (false);
      }
      if(contextData.SearchingInputValue===null){
        setUpdateArrayLength (false);
      }
    },
    [contextData.SearchingInputValue]
  );
  return (
    <View style={{flex: 1}}>
      <Header
        name={HeaderName}
        ScreenName={false}
        EditButton={false}
        Searchbarinputfield={true}
        
      />
      {UpdateArrayLength
        ? <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
            >
              {DataAfterSearched
                ? <View style={{marginTop: 50}}>
                    <View style={{width: 200, height: 201}}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          flex: 1,
                          resizeMode: 'contain',
                        }}
                        source={NoProductFound}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: 12,
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: '#7A7A7A',
                          textAlign: 'center',
                          fontSize: 15,
                        }}
                      >
                        No product found maching
                      </Text>
                      <Text
                        style={{
                          color: '#7A7A7A',
                          textAlign: 'center',
                          fontSize: 15,
                        }}
                      >
                        the searched criteria
                      </Text>
                      <TouchableOpacity
                      onPress={()=>{
                        setUpdateArrayLength(false)
                      }
                      }
                        >
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 13,
                            backgroundColor: '#FF783E',
                            padding: 10,
                            width: 100,
                            textAlign: 'center',
                            marginTop: 12,
                            borderRadius: 3,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                          }}
                        >
                          Clear All
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                : <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {ListAray.map ((item, index) => {
                        return (
                          <View key={index}>
                            <Text
                              style={{
                                borderWidth: 1,
                                borderColor: '#C88164',
                                color: '#C88164',
                                paddingHorizontal: 8,
                                paddingVertical: 5,
                                marginHorizontal: 5,
                                borderRadius: 16,
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                fontSize: 13,
                              }}
                            >
                              All (666)
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </ScrollView>}
            </View>
            <ScrollView>
              <View
                style={{
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                {contextData.ServerData &&
                  contextData.ServerData.map ((item, index) => {
                    return item.data
                      .filter (val => {
                        if (contextData.SearchingInputValue == '') {
                          return '';
                        } else if (
                          val.titleName
                            .toLowerCase ()
                            .includes (
                              contextData.SearchingInputValue.toLowerCase ()
                            )
                        ) {
                          // console.log ('jjj',val);
                          return val;
                        } else if (
                          !val.titleName
                            .toLowerCase ()
                            .includes (
                              contextData.SearchingInputValue.toLowerCase ()
                            )
                        ) {
                          // console.log ('Product data',val);
                        }
                      })
                      .map ((item, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Text>
                              <ItemsProduct Data={item} />
                            </Text>
                          </View>
                        );
                      });
                  })}
              </View>
            </ScrollView>
          </View>
        : <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000000',
                  fontSize: 21,
                  fontWeight: '700',
                  marginVertical: 21,
                }}
              >
                Top Searches
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {ItemAray.map ((item, index) => {
                  return <TopSearchBox key={index} item={item} />;
                })}
              </View>
            </View>
          </ScrollView>}
    </View>
  );
};
export default SearchScreen;

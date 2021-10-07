import React,{useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require('./Images/Palak.webp');
export default function ProductsBox(props) {
  const [Data, setData] = useState(null)
  const [Name, setName] = useState(null)
  const navigation = useNavigation();

  return (
    <>
      <View style={{display: 'flex', alignItems: 'center',backgroundColor:"#FFFFFF"}}>
        <View style={styles.OuterContainerProductBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setData()
              setName(props.Data.titleName)
              navigation.push('DetailsSecreenSecreen', {
                name:Name,
                otherData:props.Data,
              });
            }}>
            <View style={{flex:1,alignItems:"center"}}>
              <View style={styles.ImageHolderOuterContainerProductBox}>
                <Image
                  style={{width: '100%', height: "100%"}}
                  source={props.Data.img}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.TextHolderProductBox}>
            <Text numberOfLines={1} style={{fontSize: 15, color: '#9b9b9b'}}>
              {props.Data.titleName}
            </Text>
            <Text>{props.Data.productWaight} Kg</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'red',
                  fontWeight: '700',
                  marginTop: 9,
                  marginRight: 5,
                }}>
                Rs {props.Data.actualPrice}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 13,
                  textDecorationLine: 'line-through',
                }}>
                Rs {props.Data.lessPrice}
              </Text>
            </View>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                fontWeight: '700',
                fontSize: 11,
                width: 60,
                textAlign: 'center',
                borderRadius: 10,
                paddingVertical: 3,
                paddingHorizontal: 4,
                marginTop: 4,
              }}>
              {props.Data.dic} % OFF
            </Text>
          </View>
          <View>
            <Text style={styles.OuterWraperSubmitButtonProductBox}>
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

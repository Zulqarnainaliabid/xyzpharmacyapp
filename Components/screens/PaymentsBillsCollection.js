import React,{useEffect,useState,useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {Context} from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const img = require ('../Images/LogoClub.png');
const RightAarrow = require ('../Images/right-arrow.png');
export default function PaymentsBillsCollection () {
  const contextData = useContext (Context);
  const [SubTotal, setSubTotal] = useState(null)
  useEffect ( async () => {
    try {
      var itemsInCart = await AsyncStorage.getItem ('cart');
      if (itemsInCart !== null) {
        let Cartdata = JSON.parse (itemsInCart);
        if(Cartdata.length!==0){
          Cartdata.map((item,index)=>{
            let subtotalprice=item.Quantity*item.actualPrice
            setSubTotal(subtotalprice)
            contextData.HandaleSubTotal(subtotalprice)
          })
        }
      }
    } catch (e) {
      console.log ('read error', e);
    }
  }, []);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          marginTop: 12,
          padding: 16,
          borderBottomWidth: 1,
          borderColor: '#969696',
        }}
      >
        <Text style={{color: '#8E8E8E', fontSize: 15}}>Sub Total</Text>
        <Text style={{color: '#8E8E8E', fontSize: 15}}> Rs {SubTotal}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: 16,
          borderBottomWidth: 1,
          borderColor: '#969696',
        }}
      >
        <Text style={{color: '#8E8E8E', fontSize: 15}}>Promo Code</Text>
        <Text style={{color: '#8E8E8E', fontSize: 15}}> Rs 898989</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: 16,
        }}
      >
        <Text style={{color: '#8E8E8E', fontSize: 15}}>Delivery Charges</Text>
        <Text style={{color: '#64A867', fontSize: 15}}> Free</Text>
      </View>
      <View style={{backgroundColor: '#FFE0CC', padding: 17}}>
        <Text style={{fontSize: 15}}>Unlimated Free Deliveries</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderWidth: 2,
            borderColor: '#D9D7D6',
            marginTop: 10,
            padding: 17,
            borderRadius: 5,
          }}
        >
          <View
            style={{width: 60, height: 60, marginHorizontal: 12, marginTop: 12}}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={img}
            />
          </View>
          <View>
            <Text style={{fontSize: 19}}>GrocerClub Membership</Text>
            <Text style={{marginVertical: 13, color: '#7E7E7E'}}>3 Months</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}
              >
                <Text style={{fontSize: 15, marginRight: 12}}>299 PKR</Text>
                <Text style={{color: '#7E7E7E', fontSize: 15}}>499 PKR</Text>
              </View>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={RightAarrow}
                  tintColor="#FF783E"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: 16,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#969696',
        }}
      >
        <Text style={{fontSize: 15}}>Total Amount</Text>
        <Text style={{fontSize: 15}}> Rs 898989</Text>
      </View>
    </View>
  );
}

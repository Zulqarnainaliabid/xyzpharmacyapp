import React from 'react';
import {View , Image, Text} from 'react-native';
const img1 = require('../Images/DeliverImage1.jpg');
const img2 = require('../Images/DeliverImage2.jpg');
const img3 = require('../Images/DeliverImage3.jpg');
export function DeliveryChargesBox(props) {
  return (
    <View style={styles.OutercontainerDeliveryChargesBox}>
      <View
        style={{
          width: 100,
          marginVertical: 5,
          backgroundColor: '#FFFFFF',
        //   borderWidth:1,
          padding:4
        }}>
        <Image style={{width: '100%', height: 90}} source={props.img} />
      </View>
      <View style={{display:"flex" ,marginLeft:12,marginTop:25,width:220,}}>
      <Text style={{color:"#FF7032",fontSize:17,marginBottom:5,fontWeight:"400"}}>{props.textHeading}</Text>
      <Text style={{fontSize:15,color:"#393939"}}>{props.textSubHeding}</Text>
      </View>
    </View>
  );
}
export default function DeliveryCharges() {
  return (
    <View style={styles.OutercontainerDeliveryCharges}>
      <DeliveryChargesBox img={img1} textHeading={"No Delivery Charge"} textSubHeding={"On order above 299"} />
      <DeliveryChargesBox img={img2}  textHeading={"Exclusive Promo Codes"} textSubHeding={"Save big with lots of member-exclusive promos every month"}  />
      <DeliveryChargesBox img={img3} textHeading={"Customer Support Over Call"} textSubHeding={"Talk directly to our customer support team. Why get help over the chat like non-members"}  />
    </View>
  );
}

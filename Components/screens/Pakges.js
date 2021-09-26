import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
export default function Pakges(props) {
  return (
    <View style={styles.OutercontainerPkges}>
      <TouchableOpacity style={styles.button} onPress={()=>{
        let data={
          ActualAmount:props.ActualAmount,
          AmountLess:props.AmountLess
        }
        props.HandleGotoPlansScreenScreen(data)
      }}>
        <Text
          style={{
            borderBottomWidth: 1,
            borderColor: '#DEDEDE',
            backgroundColor: '#FCFCFC',
            textAlign: 'center',
            padding: 5,
            fontSize: 18,
            color: '#FF783D',
            paddingVertical: 7,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
          }}>
          3 Months
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: '#979797',
            textDecorationLine: 'line-through',
            marginTop: 20,
          }}>
          {props.AmountLess} PKR
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#000000',
            fontWeight: '600',
            marginTop: -2,
            marginBottom: 28,
          }}>
          {props.ActualAmount} PKR
        </Text>
        <View style={{borderTopWidth: 1, borderColor: '#DEDEDE'}}>
          <Text
            style={{
              backgroundColor: '#FF793E',
              textAlign: 'center',
              padding: 5,
              fontSize: 15,
              color: '#FAFAFA',
              margin: 8,
              borderRadius: 2,
              paddingVertical: 4,
            }}>
            SELECT
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

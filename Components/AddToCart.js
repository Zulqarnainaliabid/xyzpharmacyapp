import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
export default function AddToCart (props) {
  return (
    <TouchableOpacity onPress={()=>{

    }}>
      <Text style={styles.OuterWraperSubmitButtonProductBox}>
        Add to Cart 
      </Text>
    </TouchableOpacity>
  );
}

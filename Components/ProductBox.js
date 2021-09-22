import React from 'react';
import {Text, View, Image , TouchableOpacity} from 'react-native';
const img = require('./Images/Checken.webp');
export default function ProductsBox(props) {
  return (
    <>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <View style={styles.OuterContainerProductBox}>
          <TouchableOpacity style={styles.button} onPress={()=>{props.funHandlegotoDetails("Vimto")}}>
            <View style={styles.ImageHolderOuterContainerProductBox}>
              <Image style={{width: '100%', height: 150}} source={img} />
            </View>
          </TouchableOpacity>

          <View style={styles.TextHolderProductBox}>
            <Text>Vimto</Text>
            <Text>1500ltr</Text>
            <Text>Rs 100</Text>
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

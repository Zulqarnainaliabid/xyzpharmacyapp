import React from 'react';
import {Text, View, Image , TouchableOpacity} from 'react-native';
const img = require('./Images/Palak.webp');
export default function ProductsBox(props) {
  return (
    <>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <View style={styles.OuterContainerProductBox}>
          <TouchableOpacity style={styles.button} onPress={()=>{props.funHandlegotoDetails("Vimto")}}>
            <View style={styles.ImageHolderOuterContainerProductBox}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>

          <View style={styles.TextHolderProductBox}>
            <Text style={{fontSize:15,color:"#9b9b9b"}}>Spinach</Text>
            <Text>1 kg</Text>
            <View style={{display:"flex",flexDirection:"row"}}>
            <Text style={{fontSize:17,color:"red",fontWeight:"700",marginTop:9,marginRight:5}}>Rs 30</Text>
            <Text style={{fontSize:12,marginTop:13,textDecorationLine: 'line-through'}}>Rs 40</Text>
            </View>
            <Text style={{backgroundColor:"red",color:"white",fontWeight:"700",fontSize:11,width:55,textAlign:"center",borderRadius:10,paddingVertical:3,paddingHorizontal:4,marginTop:4}}>25% OFF</Text>
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

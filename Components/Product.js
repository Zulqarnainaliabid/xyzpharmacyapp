import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';
import ProductsBox from './ProductBox';
export default function Products(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.InnercontainerdProduct}>
        <View style={styles.HeadingsInnercontainerdProduct}>
          <Text style={styles.ProductNameButtonInnercontainerdProduct}>
            {props.name}
          </Text>
          <TouchableHighlight
           underlayColor="none"
            onPress={() => {
              navigation.navigate('CatagoriesListSecreen', {
                name: props.name,
                WishListData:false
              });
            }}>
            <Text style={styles.ViewAllButtonInnercontainerdProduct}>
              View all
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {props.TempDataArray &&
                props.TempDataArray.map((item, index) => {
                  return (
                    <View key={index} style={{marginHorizontal: 4}}>
                      <ProductsBox
                        Data  = {item}
                        index = {index}
                        list  = {props.TempDataArray}
                        name  = {props.name}
                        outerIndex={props.outerIndex}
                      />
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

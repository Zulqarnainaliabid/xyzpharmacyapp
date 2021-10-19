import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CatagoriesListSecreen', {
                name: props.name,
              });
            }}>
            <Text style={styles.ViewAllButtonInnercontainerdProduct}>
              View all
            </Text>
          </TouchableOpacity>
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
                        getData={props.getData}
                        CartData={props.CartData}
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

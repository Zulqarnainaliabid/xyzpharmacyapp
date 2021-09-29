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
        <View style={{display: 'flex', alignItems: 'center'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={{marginLeft: 3, marginRight: 3}}>
              <ProductsBox />
            </View>
            <View style={{marginLeft: 3, marginRight: 3}}>
              <ProductsBox  />
            </View>
            <View style={{marginLeft: 3, marginRight: 3}}>
              <ProductsBox />
            </View>
            <View style={{marginLeft: 3, marginRight: 3}}>
              <ProductsBox  />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

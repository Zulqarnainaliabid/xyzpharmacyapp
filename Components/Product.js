import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Style';
import ProductsBox from './ProductBox';
import {UPDATEHEADERNAME} from './Redux/actions/indux'
import { useDispatch, useSelector } from "react-redux";
export default function Products(props) {
  
  return (
    <>
      <View style={styles.InnercontainerdProduct}>
        <View style={styles.HeadingsInnercontainerdProduct}>
          <Text style={styles.ProductNameButtonInnercontainerdProduct}>
            {props.name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.fun(props.name);
            }}>
            <Text style={styles.ViewAllButtonInnercontainerdProduct}>
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <ScrollView horizontal={true}>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <ProductsBox funHandlegotoDetails={props.funHandlegotoDetails} />
            </View>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <ProductsBox funHandlegotoDetails={props.funHandlegotoDetails} />
            </View>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <ProductsBox funHandlegotoDetails={props.funHandlegotoDetails} />
            </View>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <ProductsBox funHandlegotoDetails={props.funHandlegotoDetails} />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

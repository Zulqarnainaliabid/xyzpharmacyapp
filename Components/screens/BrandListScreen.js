import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {TempDataCategoriesTag} from '../TempData';
import Header from '../Header';
import ItemsProduct from '../ItemsProducts';
const BrandListScreen = ({route, navigation}) => {
  let {otherData} = route.params;
  let Img = JSON.stringify (otherData.img);
  let HeaderName = JSON.stringify (otherData.titleName);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');
  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} EditButton={false} ScreenName={false} />
      <View style={{display: 'flex', alignItems: 'center', padding: 10}}>
        <View style={styles.BrandListScreenImageHolder}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              resizeMode: 'contain',
              borderColor: '#F4CA16',
            }}
            source={Img}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.BrandListTagsTextHolder}>All</Text>
          <Text style={styles.BrandListTagsTextHolder}>Shampoo (39)</Text>
          <Text style={styles.BrandListTagsTextHolder}>Soaps (18)</Text>
          <Text style={styles.BrandListTagsTextHolder}>Tea (20)</Text>
          <Text style={styles.BrandListTagsTextHolder}>
            Kiktchen Cleaning (20)
          </Text>
          <Text style={styles.BrandListTagsTextHolder}>Loundry (20)</Text>
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {TempDataCategoriesTag &&
            TempDataCategoriesTag.map ((item, index) => {
              return <ItemsProduct key={index} Data={item} />;
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default BrandListScreen;

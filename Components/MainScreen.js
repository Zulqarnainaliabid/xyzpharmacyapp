import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MyCarousel from './Slider';
import styles from './Style';
import Products from './Product';
import TopBrand from './TopBrand';
import YoungPeopleBuySection from './YoungPeopleBuySection';
import CatagoriesTag from './CatagoriesTags';
import ItemsProduct from './ItemsProducts';
import OrderStatus from './OrderStatus';
import Header from './Header';
import {
  TempDataTopSlleer,
  TempDataFeatureProduct,
  TempDataFruitsAndVegatbles,
  TempDataDaalain,
  TempDataFruitsAndVegatblesOuter,
  TempDataCategoriesTag,
} from './TempData';
import 'react-native-gesture-handler';
const img = require ('./Images/FreeClub.webp');
export default function HomPage({navigation}) {
  const contextData = useContext (Context);
  const [ToggleHeader, setToggleHeader] = useState (false);
  const [AllData, setAlltData] = useState (
    [
    {data: TempDataCategoriesTag},
    {data: TempDataFeatureProduct},
    {data: TempDataTopSlleer},
    {data: TempDataFruitsAndVegatbles},
    {data: TempDataDaalain},
  ])

  useEffect(() => {
    contextData.HandaleCompletedServerData(AllData)
  }, []);

  function HandleGotoMemberShipScreen () {
    navigation.navigate ('MemberShipScreen', {
      name: 'GrocerClub Membership mmmm',
    });
  }
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        ToggleHeader={ToggleHeader}
        EditButton={false}
        ScreenName={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Outercontainer}>
          {contextData.orderCompleted && <OrderStatus />}
          <MyCarousel />

          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Featured products'}
              TempDataArray={AllData[1].data}
              AllData={AllData}
              outerIndex={1}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}
          >
            <View>
              <View style={{width: 335, height: 115}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={img}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Top Sellers'}
              TempDataArray={AllData[2].data}
              AllData={AllData}
              outerIndex={2}
            />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <TopBrand />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Fruits & Vegetables'}
              TempDataArray={AllData[3].data}
              AllData={AllData}
              outerIndex={3}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}
          >
            <View>
              <View style={{width: 335, height: 115}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={img}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.OutercontainerdProduct}>
            <YoungPeopleBuySection />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Daalain, Rice & Flour'}
              TempDataArray={AllData[4].data}
              AllData={AllData}
              outerIndex={4}
            />
          </View>
          {TempDataFruitsAndVegatblesOuter &&
            TempDataFruitsAndVegatblesOuter.map ((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -10,
                    marginVertical: 5,
                  }}
                >
                  <CatagoriesTag Data={item} />
                </View>
              );
            })}
          <View style={styles.TextHolderMoreLove}>
            <Text
              style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}
            >
              More To Love
            </Text>
          </View>
          <View style={styles.OuterContainerItemProduct}>
            {AllData[0].data &&
              AllData[0].data.map ((item, index) => {
                return (
                  <ItemsProduct
                    key={index}
                    Data={item}
                    index={index}
                    list={AllData}
                    name={'Categories'}
                    AllData={AllData}
                    outerIndex={0}
                    TempDataArray={AllData[0].data}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

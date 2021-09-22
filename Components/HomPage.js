import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import MyCarousel from './Slider';
import styles from './Style';
import Products from './Product';
import TopBrand from './TopBrand';
import YoungPeopleBuySection from './YoungPeopleBuySection';
import CatagoriesTag from './CatagoriesTags';
import ItemsProduct from './ItemsProducts';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {UPDATEHEADERNAME} from './Redux/actions/indux';
const img = require('./Images/FreeClub.webp');
export default function HomPage({navigation}) {
  const [ToggleColor, setToggleColor] = useState('#FFFFFF');
  const [ToggleHeader, setToggleHeader] = useState(false);
  const HeaderName = useSelector(state => state.UpdateHeaderName);
  const CatagoriesTagArray = [1, 1, 1, 1, 1];
  const dispatch = useDispatch();
  const UpdateHeaderName = useSelector(state => state.UpdateHeaderName);

  useEffect(() => {
    if (UpdateHeaderName.item) {
      HandleGotoDetailsSecreen(UpdateHeaderName.name);
    }
    dispatch(UPDATEHEADERNAME(false, ''));
  }, [UpdateHeaderName.item]);

  function HandleGotProductListSecreen(name) {
    navigation.navigate('CatagoriesListSecreen', {
      name: name,
    });
  }

  function HandleGotoDetailsSecreen(name) {
    navigation.push('DetailsSecreenSecreen', {
      name: name,
    });
  }

  function HandleGotoBrandListSecreen(name) {
    navigation.navigate('BrandListScreen', {
      name: name,
    });
  }

  function HandleGotoTabsCatagoriesListSecreen(name) {
    navigation.navigate('TabsCatagoriesList', {
      name: name,
    });
  }

  return (
    <>
      <Header ToggleHeader={ToggleHeader} ScreenName={true} />
      <ScrollView>
        <View style={styles.Outercontainer}>
          <MyCarousel />
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Featured products'}
              fun={HandleGotProductListSecreen}
              funHandlegotoDetails={HandleGotoDetailsSecreen}
            />
          </View>
          <View style={{width: 344, marginVertical: 5}}>
            <Image style={{width: '100%', height: 150}} source={img} />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Top Sellers'}
              funHandlegotoDetails={HandleGotoDetailsSecreen}
              fun={HandleGotProductListSecreen}
            />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <TopBrand HandleGotoBrandListSecreen={HandleGotoBrandListSecreen} />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              funHandlegotoDetails={HandleGotoDetailsSecreen}
              name={'Fruits & Vegetables'}
              fun={HandleGotProductListSecreen}
            />
          </View>
          <View style={{width: 344, marginVertical: 5}}>
            <Image style={{width: '100%', height: 150}} source={img} />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <YoungPeopleBuySection
              HandleGotoTabsCatagoriesListSecreen={
                HandleGotoTabsCatagoriesListSecreen
              }
            />
          </View>
          <View style={styles.OutercontainerdProduct}>
            <Products
              funHandlegotoDetails={HandleGotoDetailsSecreen}
              name={'Daalain, Rice & Flour'}
              fun={HandleGotProductListSecreen}
            />
          </View>
          {CatagoriesTagArray &&
            CatagoriesTagArray.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -5,
                    marginVertical: 5,
                    backgroundColor: ToggleColor,
                  }}>
                  <CatagoriesTag color={setToggleColor} />
                </View>
              );
            })}
          <View style={styles.TextHolderMoreLove}>
            <Text
              style={{textAlign: 'center', fontSize: 17, fontWeight: '500'}}>
              More To Love
            </Text>
          </View>
          <View style={styles.OuterContainerItemProduct}>
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
            <ItemsProduct />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

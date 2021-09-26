import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import MyCarousel from './Slider';
import styles from './Style';
import Products from './Product';
import TopBrand from './TopBrand';
import YoungPeopleBuySection from './YoungPeopleBuySection';
import CatagoriesTag from './CatagoriesTags';
import ItemsProduct from './ItemsProducts';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import AnimationBall from './BallAnimation';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {UPDATEHEADERNAME} from './Redux/actions/indux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const img = require('./Images/FreeClub.webp');
export default function HomPage({navigation}) {
  const [ToggleColor, setToggleColor] = useState('#FFFFFF');
  const [ToggleHeader, setToggleHeader] = useState(false);
  const [CatagorisTagArray, setCatagorisTagArray] = useState([
    {select: false},
    {select: false},
    {select: false},
  ]);

  const HeaderName = useSelector(state => state.UpdateHeaderName);
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

  function HandleGotoTabsVegetablesAndFruitsSecreen(name) {
    navigation.navigate('VegetablesAndFruitScreen', {
      name: name,
    });
  }

  function HandleGotoMemberShipScreen() {
    navigation.navigate('MemberShipScreen', {
      name: 'GrocerClub Membership mmmm',
    });
  }

  return (
    <>
      <Header ToggleHeader={ToggleHeader} ScreenName={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Outercontainer}>
          <MyCarousel />
          <View style={styles.OutercontainerdProduct}>
            <Products
              name={'Featured products'}
              fun={HandleGotProductListSecreen}
              funHandlegotoDetails={HandleGotoDetailsSecreen}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}>
            <View style={{width: 347, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.button}
            onPress={HandleGotoMemberShipScreen}>
            <View style={{width: 347, marginVertical: 5}}>
              <Image style={{width: '100%', height: 130}} source={img} />
            </View>
          </TouchableOpacity>

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
          {CatagorisTagArray &&
            CatagorisTagArray.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: -5,
                    marginVertical: 5,
                  }}>
                  <CatagoriesTag
                    HandleGotoTabsVegetablesAndFruitsSecreen={
                      HandleGotoTabsVegetablesAndFruitsSecreen
                    }
                  />
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

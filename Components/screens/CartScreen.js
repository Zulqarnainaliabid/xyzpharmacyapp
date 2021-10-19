import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header';
import CatagoriesTag from '../CatagoriesTags';
import CartItems from './CartItems';
import {useDispatch, useSelector} from 'react-redux';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import ItemsProduct from '../ItemsProducts';
const CartScreen = ({route, navigation}) => {
  const {bookmarks} = useSelector (state => state.booksReducer);
  console.log ('bookjnjnjnjnjnjnjnjnjnjn', bookmarks);
  const [ArrayDataCatagories, setArrayDataCatagories] = useState (bookmarks);

  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');


  useEffect(() => {
   

  }, [])

  

  console.log ('i', ArrayDataCatagories);

  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} EditButton={false} ScreenName={false} />
      <View style={{flex: 1, borderWidth: 1, paddingHorizontal: 19}}>
        <ProgressSteps
          borderWidth={3}
          borderStyle={{borderWidth: 13, width: 12}}
          activeStepIconBorderColor="#44A903"
          labelFontSize={12}
          topOffset={15}
          progressBarColor="#777777"
          disabledStepIconColor="#777777"
          labelColor="#777777"
          activeLabelColor="#6CA24B"
          disabledStepNumColor="#767676"
          completedLabelColor="#44A703"
        >
          <ProgressStep removeBtnRow={true} label="1.Your Bill">
            <View style={{alignItems: 'center'}}>
              {ArrayDataCatagories &&
                ArrayDataCatagories.map ((item, index) => {
                  return (
                    <CartItems key={index} index={index} 
                    item={item}
                    CartData={item} />
                  );
                })}
            </View>
          </ProgressStep>
          <ProgressStep label="2.Place Holder">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="3.Completed">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      <View style={{backgroundColor: '#F8F8F8', padding: 22}}>
        <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
          Your cart is empty
        </Text>
        <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
          let's fill it by adding some item
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              backgroundColor: '#FF783E',
              display: 'flex',
              paddingVertical: 10,
              paddingHorizontal: 17,
              marginVertical: 20,
              borderRadius: 3,
              fontSize: 17,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            Start Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

import React, {useState, useEffect,useContext} from 'react';
import { Context } from '../Context/Context'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header';
import CartItems from './CartItems';
import CheckOutButton from './CheckOutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import EasyPaisaScreen from './EasyPaisaScreen'
import CheckOutSection from './CheckOutSection';
import PaymentsBillsCollection from './PaymentsBillsCollection';
import DebitCardScreen from './DebitCardScreen'
import CashonDeliveryScren from './CashonDeliveryScren'
const CartScreen = ({route, navigation}) => {
  const contextData = useContext(Context);
  const [step, setStep] = useState (0);
  const [CartData, setCartData] = useState ([]);
  const [CheckCartValue, setCheckCartValue] = useState (false);
  const [PaymentScreen, setPaymentScreen] = useState("PaymentScreen")
  const [PaymentMethod, setPaymentMethod] = useState("Cash on Delivery")
  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  useEffect ( async () => {
    try {
      var itemsInCart = await AsyncStorage.getItem ('cart');
      setCheckCartValue (false);
      if (itemsInCart !== null) {
        let Cartdata = JSON.parse (itemsInCart);
        setCartData (Cartdata);
        if(Cartdata.length===0){
          setCheckCartValue (false);
        }else{
          setCheckCartValue (true);
        }
      }
    } catch (e) {
      console.log ('read error', e);
    }
  }, [contextData.UpdateCartItem]);

  function HandleCheckPaymentMethod(PaymentMethod){
    setPaymentMethod(PaymentMethod)
  }

  function onNextStep (number) {
    if(number===2){
      {
        contextData.HandaleOrderCompleted(true)
        if(PaymentMethod==="Easy Paisa"){
          setPaymentScreen("Easy Paisa")
        }else if(PaymentMethod==="Debit Card"){
          setPaymentScreen("Debit Card")
        }else if(PaymentMethod==="Cash on Delivery"){
          setPaymentScreen("Cash on Delivery")
        }
      }
     
    }else{
      setStep (number);
    }
  }
  if(PaymentScreen==="PaymentScreen"){
  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} EditButton={false} ScreenName={false} />
      <View style={{flex: 1}}>
        <ProgressSteps
          activeStep={step}
          borderWidth={2}
          marginBottom={0}
          activeStepIconBorderColor="#44A903"
          labelFontSize={12}
          topOffset={10}
          progressBarColor="#777777"
          disabledStepIconColor="#777777"
          labelColor="#777777"
          activeLabelColor="#6CA24B"
          disabledStepNumColor="#767676"
          completedLabelColor="#44A703"
        >
          <ProgressStep removeBtnRow={true} label="1.Your Bill">
            <Text style={{borderBottomWidth: 1, borderColor: '#B3B4B4'}} />
            <View style={{width: '100%'}}>
              {CartData &&
                CartData.map ((item, index) => {
                  return (
                    <CartItems
                      key={index}
                      index={index}
                      item={item}
                      CartData={item}
                    />
                  );
                })}
            </View>  
             {CheckCartValue && <PaymentsBillsCollection />}
          </ProgressStep>
          <ProgressStep removeBtnRow={true} label="2.Place Holder">
            <CheckOutSection HandleCheckPaymentMethod={HandleCheckPaymentMethod} />
          </ProgressStep>
          <ProgressStep label="3.Completed">
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      {CheckCartValue
        ? <CheckOutButton onNextStep={onNextStep} />
        : <View style={{backgroundColor: '#F8F8F8', padding: 22}}>
            <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
              Your cart is empty
            </Text>
            <Text style={{textAlign: 'center', color: '#646464', fontSize: 16}}>
              let's fill it by adding some item
            </Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("HomPage")
            }}>
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
          </View>}
    </View>
  );
  }else if(PaymentScreen==="Easy Paisa"){
    return(
      <EasyPaisaScreen setPaymentScreen={setPaymentScreen} />
    )
  }else if(PaymentScreen==="Debit Card"){
    return(
      <DebitCardScreen/>
    )
  }else if(PaymentScreen==="Cash on Delivery"){
    return(
      <CashonDeliveryScren/>
    )
  }
};

export default CartScreen;

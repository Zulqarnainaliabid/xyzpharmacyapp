import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from '../Header';
import StepIndicator from 'react-native-step-indicator';
import OrderCancleModal from '../OrderCancleModal';
export default function OrderDetailsScreen({route}) {
  const [OrderCancle, setOrderCancle] = useState (false);
  const [currentPosition, setcurrentPosition] = useState (0);
  const [visible, setvisible] = useState (false);
  const labels = [
    'Order Placed',
    'Confirmed',
    'In Progress',
    'Dispatched',
    'Delivered',
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 50,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 25,
    stepStrokeCurrentColor: '#18AE43',
    stepStrokeWidth: 13,
    stepStrokeFinishedColor: '#18AE43s',
    stepStrokeUnFinishedColor: '#C5C5C5',
    separatorFinishedColor: '#C5C5C5',
    separatorUnFinishedColor: '#C5C5C5',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 1,
    currentStepIndicatorLabelFontSize: 1,
    stepIndicatorLabelCurrentColor: '#18AE43',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#000000',
    labelSize: 15,
    currentStepLabelColor: '#000000',
    labelAlign: 'center',
  };
  let {name} = route.params;
  let HeaderName = JSON.stringify (name);
  HeaderName = HeaderName.replace ('"', '').replace ('"', '');

  function onPageChange (position) {
    setcurrentPosition (position);
  }
  return (
    <View style={{flex: 1}}>
      <Header name={HeaderName} EditButton={false} ScreenName={false} />
      <View
        style={{
          padding: 15,
          backgroundColor: 'white',
          marginTop: 12,
        }}
      >
       {OrderCancle ? <></>: <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
            borderBottomWidth: 1,
            paddingBottom: 12,
            borderColor: '#E9E9E9',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              Order #{' '}
            </Text>
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              231212
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setvisible (true);
            }}
          >
            <Text
              style={{
                backgroundColor: '#FF783E',
                color: 'white',
                paddingVertical: 8,
                paddingHorizontal: 18,
                fontSize: 14,
                borderRadius: 5,
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
              Cancle
            </Text>
          </TouchableOpacity>
        </View>}

        {OrderCancle
          ? <View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    height: 15,
                    borderRadius: 12,
                    width: 15,
                    backgroundColor: '#FF3B2F',
                    borderColor: '#FF3B2F',
                  }}
                />
                <Text style={{flex: 1, paddingLeft: 15}}>Declined</Text>
              </View>

            </View>
          : <View style={{height: 300}}>
              <StepIndicator
                direction={'vertical'}
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
              />
            </View>}
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: 'white',
          marginTop: 12,
          paddingBottom: 60,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{}}>Order Date :</Text>
          <Text style={{fontWeight: '700'}}>2021-02-08</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text style={{}}>Total Price :</Text>
          <Text style={{fontWeight: '700'}}>2021-02-08</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text style={{}}>Payment Mode :</Text>
          <Text style={{fontWeight: '700'}}>2021-02-08</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text style={{}}>Delivery Time Slot :</Text>
          <Text style={{fontWeight: '700'}}>2021-02-08</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text style={{}}>Delivery Date :</Text>
          <Text style={{fontWeight: '700'}}>2021-02-08</Text>
        </View>
      </View>
      <OrderCancleModal
        visible={visible}
        setvisible={setvisible}
        setOrderCancle={setOrderCancle}
      />
    </View>
  );
}

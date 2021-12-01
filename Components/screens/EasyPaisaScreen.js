import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';
const AwworLeft = require ('../Images/Arrow_left.png');
const EasyPaisaMobileAccount = require ('../Images/easyPaisaMobile.png');
export default function EasyPaisaScreen (props) {
  const navigation = useNavigation ();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          borderBottomWidth: 3,
          padding: 20,
          borderColor: '#00B459',
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.setPaymentScreen ('PaymentScreen');
          }}
        >
          <View style={{alignSelf: 'center'}}>
            <View style={{width: 25, height: 25}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={AwworLeft}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: '#747474',
            fontWeight: '700',
            textAlignVertical: 'center',
          }}
        >
          EasyPaisa Wallet
        </Text>
        <View style={{}}>
          <CountDown
            style={{
              color: '#747474',
              margin: 0,
              padding: 0,
              width: 30,
              marginRight: 12,
            }}
            until={100}
            size={10}
            // onFinish={() => alert()}
            digitStyle={{backgroundColor: 'transparent'}}
            digitTxtStyle={{color: '#747474', fontSize: 18}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View>
      </View>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            width: 360,
            height: '100%',
            flex: 1,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        >
          <Image
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={EasyPaisaMobileAccount}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 13, backgroundColor: '#FFFFFF'}}>

        <Text
          style={{
            color: '#A4ADB3',
            borderBottomWidth: 2,
            paddingVertical: 12,
            borderColor: '#E4EAEE',
          }}
        >
          You can pay by entering Mobile acount Details
        </Text>
        <View style={{marginTop: 12}}>
          <Text style={{marginTop: 12, fontSize: 15, color: '#90989F'}}>
            Mobile Number
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#E0E4E7',
              borderRadius: 7,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 16,
              marginTop: 12,
            }}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="03X-XXXXXXXXX"
            keyboardType="numeric"
          />
        </View>

        <View style={{marginTop: 12}}>
          <Text style={{marginTop: 12, fontSize: 15, color: '#90989F'}}>
            Email ID
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#E0E4E7',
              borderRadius: 7,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 16,
              marginTop: 12,
            }}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="XXXXXXXXX@gmail.com"
            keyboardType="numeric"
          />
        </View>
        <Text
          style={{
            borderRadius: 7,
            paddingHorizontal: 16,
            paddingVertical: 12,
            fontSize: 16,
            marginTop: 29,
            backgroundColor: '#00BD5F',
            color: '#DEFFF9',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          Pay Now
        </Text>
      </View>
      <View style={{marginTop: 90}}>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 15,
            paddingVertical: 17,
          }}
        >
          <Text style={{color: '#7C8893', fontSize: 17}}>Ouder Summary</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{marginTop: 8}}>
              <Text style={{fontSize: 16, color: '#798892'}}>Order Id</Text>
              <Text numberOfLines={1} style={{marginTop: 5, width: 100}}>
                787878787pppppppppppppppppppppppppppppp
              </Text>
            </View>
            <View style={{marginTop: 8}}>
              <Text style={{fontSize: 16, color: '#798892'}}>Store Name</Text>
              <Text numberOfLines={1} style={{marginTop: 5, width: 100}}>
                787878787kkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjjjjjjjjjjj
              </Text>
            </View>
            <View style={{marginTop: 8}}>
              <Text style={{fontSize: 16, color: '#798892'}}>Total</Text>
              <Text numberOfLines={1} style={{marginTop: 5, width: 100}}>
                787878787ppppppppppppppppppppppppppp
              </Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

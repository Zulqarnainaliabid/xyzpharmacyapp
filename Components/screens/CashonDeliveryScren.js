import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Share, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const InviteFriend = require ('../Images/InviteFriend.png');
const ErroIcon = (
  <FontAwesome5
    style={{fontSize: 17, color: '#F08E64'}}
    // <i class="fal fa-home-alt"></i>
    name={'home'}
  />
);
const clock = (
  <FontAwesome5 style={{fontSize: 17, color: '#F08E64'}} name={'clock'} />
);
const home = (
  <FontAwesome5 style={{fontSize: 17, color: '#F08E64'}} name={'home'} />
);
const note = (
  <FontAwesome5 style={{fontSize: 17, color: '#F08E64'}} name={'money-bill'} />
);
export default function CashonDeliveryScren () {
  const navigation = useNavigation ();
  const onShare = async () => {
    try {
      const result = await Share.share ({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert (error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>

      <View
        style={{
          paddingHorizontal: 55,
          backgroundColor: 'white',
          paddingTop: 55,
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            display: 'flex',
            marginBottom: -4,
            color: '#707070',
            fontSize: 13,
          }}
        >
          You've  saved
        </Text>

        <View
          style={[
            styles.box,
            {
              transform: [{rotate: '-3deg'}],
            },
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#78DE61',
              justifyContent: 'center',
              borderRadius: 8,
              width: 220,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,
              elevation: 8,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlignVertical: 'bottom',
                fontWeight: '700',
                fontSize: 15,
              }}
            >
              Rx.
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 'bold',
                marginRight: 12,
              }}
            >
              99
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'right',

            display: 'flex',
            marginTop: -4,
            color: '#707070',
            fontSize: 13,
          }}
        >
          In this order
        </Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D7D7D7',
            padding: 8,
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{fontWeight: '700', fontSize: 15, textAlign: 'center'}}>
            Thanks for Your order
          </Text>

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // borderWidth: 1,
                marginTop: 12,
              }}
            >
              <Text style={{textAlign: 'right', marginRight: 10}}>
                {clock}
              </Text>
              <Text style={{color: '#F08E64'}}>EST. delivery time & date</Text>
            </View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              Thanks for Your order
            </Text>
          </View>

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                // borderWidth: 1,
                marginTop: 12,
              }}
            >
              <Text style={{textAlign: 'right', marginRight: 8}}>
                {ErroIcon}
              </Text>
              <Text style={{color: '#F08E64'}}>Delivery Adress</Text>
            </View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              Thanks for Your order
            </Text>
          </View>

          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                // borderWidth: 1,
                marginTop: 12,
              }}
            >
              <Text style={{textAlign: 'right', marginRight: 8}}>
                {note}
              </Text>
              <Text style={{color: '#F08E64'}}>Total Cost</Text>
            </View>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              Thanks for Your order
            </Text>
          </View>

          <Text
            style={{
              fontWeight: '700',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            Rs 48
          </Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D7D7D7',
            padding: 8,
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 5,
          }}
        >
          <View style={{width: 130, height: 100}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={InviteFriend}
              resizeMode="contain"
            />
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#7E7E7E',
              }}
            >
              Invite Friend and you will get
            </Text>
            <Text style={{color: '#FF783E', marginLeft: 5}}>Rs.75</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              onShare ();
            }}
          >
            <Text
              style={{
                color: '#FF783E',
                backgroundColor: 'white',
                paddingHorizontal: 12,
                borderWidth: 1,
                borderColor: '#FF783E',
                width: 300,
                paddingVertical: 13,
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
                borderRadius: 3,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              INVITE FRIENDS
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate ('HomPage');
          }}
        >
          <Text
            style={{
              color: 'white',
              backgroundColor: '#FF783E',
              paddingHorizontal: 12,
              borderWidth: 1,
              borderColor: '#FF783E',
              width: 320,
              paddingVertical: 13,
              textAlign: 'center',
              fontSize: 14,
              marginTop: 10,
              borderRadius: 3,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          >
            DONE
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

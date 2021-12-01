import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import HelpCentreContectinApp from './HelpCentreContectinApp';
import HelpCentreDeliverySlots from './HealpCentreDeliverySlotes';
import ModalLiveChat from './ModalLiveChat';
import HelpCentreWhereDelivery from './HelpCentreWhereDelivery';
import ChatBox from './ChatBoxScreen';
const img = require ('../Images/BackImageLiveChate.jpg');
const right_Arrow = require ('../Images/right_Arrow.png');
const imgMan = require ('../Images/Man.jpg');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
<i class="fas fa-smile" />;
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const SmileIcon = (
  <FontAwesome5 style={{fontSize: 25, color: '#FFE22F'}} name={'smile'} solid />
);
const StartIcon = (
  <FontAwesome5
    style={{fontSize: 26, color: '#FFFFFF'}}
    name={'caret-right'}
    solid
  />
);
export function User () {
  return (
    <View
      style={{
        borderWidth: 2,
        height: 60,
        width: 60,
        borderRadius: 40,
        borderColor: 'white',
      }}
    >
      <Image
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          resizeMode: 'contain',
          borderRadius: 40,
        }}
        source={imgMan}
      />
    </View>
  );
}
export default function LiveChateScreen (props) {
  const [ToggleScreenHelpCentre, setToggleScreenHelpCentre] = useState (false);
  const [Screen, setScreen] = useState (null);
  const [ShowModal, setShowModal] = useState (false);
  const navigation = useNavigation ();
  if (ToggleScreenHelpCentre) {
    if (Screen === 1) {
      return (
        <HelpCentreContectinApp
          setToggleScreenHelpCentre={setToggleScreenHelpCentre}
        />
      );
    } else if (Screen === 2) {
      return (
        <HelpCentreWhereDelivery
          setToggleScreenHelpCentre={setToggleScreenHelpCentre}
        />
      );
    } else if (Screen === 3) {
      return (
        <HelpCentreDeliverySlots
          setToggleScreenHelpCentre={setToggleScreenHelpCentre}
        />
      );
    } else if (Screen === 4) {
      return <ChatBox setToggleScreenHelpCentre={setToggleScreenHelpCentre} />;
    }
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={img}
          resizeMode="cover"
          style={{width: '100%', height: '60%'}}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 22,
              borderWidth: 1,
              height: 690,
              position: 'absolute',
              width: '100%',
            }}
          >
            <ParallaxScrollView
              backgroundScrollSpeed={61}
              backgroundColor="transparent"
              contentBackgroundColor="transparent"
              parallaxHeaderHeight={180}
              renderForeground={() => (
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    borderColor: 'white',
                    paddingHorizontal: 21,
                    marginTop: 44,
                  }}
                >
                  <View
                    style={{
                      marginBottom: 12,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{color: 'white', fontSize: 24}}>Logo</Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate ('HomPage');
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',

                          fontSize: 19,
                        }}
                      >
                        X
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text style={{color: 'white', fontSize: 24}}>
                      Hello Zaka
                    </Text>
                    <Text>
                      {SmileIcon}
                    </Text>
                  </Text>
                  <Text style={{color: 'white', marginTop: 2, fontSize: 17}}>
                    Hey! how can we Help you?
                  </Text>
                </View>
              )}
            >
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    backgroundColor: 'white',
                    padding: 22,
                    borderRadius: 10,
                    borderTopWidth: 2,
                    borderTopColor: '#FFB48A',
                    borderLeftColor: '#D8CFC8',
                    borderRightColor: '#D8CFC8',
                    borderBottomColor: '#E9E9E9',
                  }}
                >
                  <Text style={{fontSize: 20}}>
                    Start a conversation
                  </Text>
                  <Text style={{color: '#888888', fontSize: 18}}>
                    Tipically replies in a few minutes
                  </Text>
                  <View
                    style={{
                      marginVertical: 15,
                      // borderWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}
                  >
                    <View style={{marginRight: -12}}>
                      <User />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setToggleScreenHelpCentre (true);
                      setScreen (4);
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: '#F7600F',
                        paddingVertical: 6,
                        paddingHorizontal: 26,
                        borderRadius: 25,
                        width: 200,
                      }}
                    >
                      <Text>
                        {StartIcon}
                      </Text>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontSize: 16,
                          marginLeft: 6,
                          fontWeight: '700',
                          textAlignVertical: 'center',
                        }}
                      >
                        New Conversation
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    backgroundColor: 'white',
                    padding: 22,
                    borderRadius: 10,
                    borderTopWidth: 2,
                    borderTopColor: '#FFB48A',
                    borderLeftColor: '#D8CFC8',
                    borderRightColor: '#D8CFC8',
                    borderBottomColor: '#E9E9E9',
                    marginVertical: 20,
                  }}
                >
                  <Text style={{fontSize: 20}}>
                    Find your answer now
                  </Text>
                  <TouchableOpacity onPress={() => setShowModal (true)}>
                    <View
                      style={{
                        borderWidth: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderColor: '#DEDEDE',
                        marginTop: 12,
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderBottomLeftRadius: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          textAlignVertical: 'center',
                          color: '#737374',
                          marginHorizontal: 20,
                        }}
                      >
                        Search our articles
                      </Text>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          padding: 13,
                          backgroundColor: '#F7600F',
                          borderBottomRightRadius: 6,
                          borderTopRightRadius: 6,
                        }}
                      >
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 40,
                            flex: 1,
                            resizeMode: 'contain',
                          }}
                          source={right_Arrow}
                          tintColor="white"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <ModalLiveChat
                  setShowModa={setShowModal}
                  ShowModal={ShowModal}
                />
                <TouchableOpacity
                  onPress={() => {
                    setToggleScreenHelpCentre (true);
                    setScreen (1);
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      backgroundColor: 'white',
                      padding: 22,
                      borderRadius: 10,
                      borderTopWidth: 2,
                      borderTopColor: '#FFB48A',
                      borderLeftColor: '#D8CFC8',
                      borderRightColor: '#D8CFC8',
                      borderBottomColor: '#E9E9E9',
                    }}
                  >
                    <Text style={{fontSize: 20, color: '#E0743A'}}>
                      Contacting Grocerapp
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#6B6B6D',
                        // borderWidth: 1,
                        marginTop: 4,
                        width: 350,
                      }}
                    >
                      How do i get in touch width a representative?{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setToggleScreenHelpCentre (true);
                    setScreen (2);
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      backgroundColor: 'white',
                      padding: 22,
                      borderRadius: 10,
                      borderTopWidth: 2,
                      borderTopColor: '#FFB48A',
                      borderLeftColor: '#D8CFC8',
                      borderRightColor: '#D8CFC8',
                      borderBottomColor: '#E9E9E9',
                      marginVertical: 20,
                    }}
                  >
                    <Text style={{fontSize: 20, color: '#E0743A'}}>
                      Where is my order/Deleyed delivery
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#6B6B6D',
                        // borderWidth: 1,
                        marginTop: 4,
                        width: 350,
                      }}
                    >
                      How to find your order deliver time and status?
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setToggleScreenHelpCentre (true);
                    setScreen (3);
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      backgroundColor: 'white',
                      padding: 22,
                      borderRadius: 10,
                      borderTopWidth: 2,
                      borderTopColor: '#FFB48A',
                      borderLeftColor: '#D8CFC8',
                      borderRightColor: '#D8CFC8',
                      borderBottomColor: '#E9E9E9',
                      marginBottom: 20,
                    }}
                  >
                    <Text style={{fontSize: 20, color: '#E0743A'}}>
                      Deliery slotes
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#6B6B6D',
                        // borderWidth: 1,
                        marginTop: 4,
                        width: 350,
                      }}
                    >
                      What are the avalible delivery slotes?
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ParallaxScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SelectDayModal from './DayModal';
import SelectTimeModal from './TimeModal';
const Pencil = require ('../Images/right-arrow.png');
const note = require ('../Images/note.png');
const Calender = require ('../Images/calendar.png');
const Clock = require ('../Images/Clock.png');
const Menue = require ('../Images/list.png');
const book = require ('../Images/book.png');
const easyPsisa = require ('../Images/easy.png');
const credit_card = require ('../Images/credit-card.png');
const plus = require ('../Images/plusCheckOutSection.png');
export default function CheckOutSection (props) {
  const [isModalVisible, setModalVisible] = useState (false);
  const [InconPaymentMethod, setInconPaymentMethod] = useState (note);
  const [TextPaymentMethod, setTextPaymentMethod] = useState (
    'Cash On Delivery'
  );
  const [visible, setvisible] = useState (false);
  const [visibleTimeModal, setvisibleTimeModal] = useState (false);
  const refRBSheet = useRef ();
  const toggleModal = () => {
    setModalVisible (!isModalVisible);
  };
  return (
    <View style={{marginTop: 12}}>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderColor: '#9C9D9E',
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // borderWidth:1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{width: 15, height: 15, marginRight: 12}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={note}
              />
            </View>
            <Text>
              Your Delivery Adress
            </Text>
          </View>
          <View style={{width: 15, height: 15}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={Pencil}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#838383',
            fontSize: 16,
            marginTop: 6,
            marginLeft: 30,
          }}
        >
          Your Delivery Adress jbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderTopWidth: 1,
          borderColor: '#9C9D9E',
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setvisible (true);
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{width: 15, height: 15, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={Calender}
                />
              </View>
              <Text>
                Delivery Day
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderColor: '#B6B6B6',
              }}
            >
              <Text style={{marginRight: 40, color: '#E98C65'}}>
                11.12.12.12
              </Text>
              <View style={{width: 15, height: 15}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={Menue}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <SelectDayModal visible={visible} setvisible={setvisible} />
        <TouchableOpacity
          onPress={() => {
            setvisibleTimeModal (true);
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{width: 15, height: 15, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={Clock}
                />
              </View>
              <Text>
                Delivery Window
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderColor: '#B6B6B6',
              }}
            >
              <Text style={{marginRight: 40, color: '#E98C65'}}>
                11.12.12.12
              </Text>
              <View style={{width: 15, height: 15}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={Menue}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <SelectTimeModal
          visibleTimeModal={visibleTimeModal}
          setvisibleTimeModal={setvisibleTimeModal}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderTopWidth: 1,
            marginTop: 20,
            paddingTop: 10,
            borderColor: '#A5A5A5',
            // borderWidth:1
            alignItems: 'center',
          }}
        >
          <View style={{width: 15, height: 15}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                resizeMode: 'contain',
              }}
              source={book}
            />
          </View>
          <Text style={{marginLeft: 12}}>
            Instructions
          </Text>
        </View>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderColor: '#F57C46',
            padding: 0,
            fontSize: 16,
            marginTop: 12,
            marginHorizontal: 12,
          }}
          placeholder="Note For Delivery Team"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 20,
          borderTopWidth: 1,
          borderColor: '#9C9D9E',
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            color: '#EB7847',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 12,
          }}
        >
          Select Payment Methos
        </Text>
        <TouchableOpacity onPress={() => refRBSheet.current.open ()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{width: 25, height: 25, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={InconPaymentMethod}
                />
              </View>
              <Text style={{textAlignVertical: 'center'}}>
                {TextPaymentMethod}
              </Text>
            </View>
            <View style={{width: 15, height: 15, alignItems: 'center'}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={Pencil}
                tintColor="#EB7847"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: '#F5F5F5',
            paddingHorizontal: 12,
            paddingTop: 0,
            marginTop: 0,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },

          draggableIcon: {
            backgroundColor: '#F5F5F5',
          },
        }}
      >
        <View style={{backgroundColor: '#FFFFFF', padding: 20}}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close ();
              setInconPaymentMethod (note);
              setTextPaymentMethod ('Cash on Delivery');
              props.HandleCheckPaymentMethod ('Cash on Delivery');
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 12,
                borderColor: '#ECECEC',
              }}
            >
              <View style={{width: 25, height: 25, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={note}
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: '600',
                  fontSize: 15,
                }}
              >
                Cash on Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close ();
              setInconPaymentMethod (easyPsisa);
              setTextPaymentMethod ('Easy Paisa');
              props.HandleCheckPaymentMethod ('Easy Paisa');
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 12,
                borderColor: '#ECECEC',
                marginTop: 12,
              }}
            >
              <View style={{width: 25, height: 25, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={easyPsisa}
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: '600',
                  fontSize: 15,
                }}
              >
                Easy Paisa
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close ();
              setInconPaymentMethod (credit_card);
              setTextPaymentMethod ('Credit or Debit Card');
              props.HandleCheckPaymentMethod ('Debit Card');
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 12,
                borderColor: '#ECECEC',
                marginTop: 12,
              }}
            >
              <View style={{width: 25, height: 25, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={credit_card}
                  tintColor="#84959F"
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: '600',
                  fontSize: 15,
                }}
              >
                Credit or Debit Card
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close ();
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingBottom: 12,
                borderColor: '#ECECEC',
                marginTop: 12,
              }}
            >
              <View style={{width: 25, height: 25, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={plus}
                  tintColor="#84959F"
                />
              </View>
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: '600',
                  fontSize: 15,
                }}
              >
                Add New Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}

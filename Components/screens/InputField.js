import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';
import {TOGGLEEDITBUTTON} from '../Redux/actions/indux';
import DatePicker from '../DatePicker';
import Alert from '../AwsomeAlert';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
export default function InputTextField(props) {
  const dispatch = useDispatch();
  const ToggleEditButton = useSelector(state => state.ToggleEditButton);
  const [Gender, setGender] = useState('');
  const [ShowDate, setShowDate] = useState(false);
  const [ShowGender, setShowGender] = useState(false);
  const [ToggleCounter, setToggleCounter] = useState(false);
  const [Date, setDate] = useState('');
  console.log('data y ', props.item);
  function handleDate(date) {
    setDate(date);
  }
  function handleGernder(date) {
    setGender(date);
  }
  return (
    <View style={{borderWidth: 1, flex: 1}}>
      {ToggleEditButton ? (
        <View>
          <FloatingLabelInput
            label={'Name'}
            value={props.item.userName}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: 78,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />
          <FloatingLabelInput
            label={'Email'}
            value={props.item.userEmail}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: 78,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />
          <FloatingLabelInput
            label={'Mobile Number'}
            value={""}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: 78,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />
          <View
            style={{
              //   borderWidth: 1,
              display: 'flex',
              alignItems: 'flex-end',
            }}>
            {ToggleCounter ? (
              <CountDown
                until={15}
                size={14}
                onFinish={() => setToggleCounter(false)}
                digitStyle={{backgroundColor: 'transparent'}}
                digitTxtStyle={{color: '#000000', fontSize: 17}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setToggleCounter(true)}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: '#FE7740',
                    width: 224,
                  }}>
                  RESEND CONFIMATION EMAIL
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowDate(true);
            }}
            style={{borderWidth: 1}}>
            <View pointerEvents="none">
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Date of Birth'}
                value={Date}
                // onChangeText={value => setData()}
                inputStyles={{
                  borderBottomWidth: 2,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 17,
                  textDecorationLine: 'none',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  height: 78,
                }}
                labelStyles={{
                  fontSize: 17,
                  color: '#C2C2C2',
                }}
                customLabelStyles={{
                  colorFocused: '#C2C2C2',
                  fontSizeFocused: 15,
                  fontSize: 15,
                  margin: 0,
                  padding: 0,
                }}
              />
            </View>
          </TouchableOpacity>

          <DatePicker
            data={ShowDate}
            setShowDate={setShowDate}
            handleDate={handleDate}
          />
          <TouchableOpacity
            onPress={() => {
              setShowGender(true);
            }}
            style={{borderWidth: 1}}>
            <View pointerEvents="none">
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Gender'}
                value={Gender}
                // onChangeText={value => setData()}
                inputStyles={{
                  borderBottomWidth: 2,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 17,
                  textDecorationLine: 'none',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  height: 78,
                }}
                labelStyles={{
                  fontSize: 17,
                  color: '#C2C2C2',
                }}
                customLabelStyles={{
                  colorFocused: '#C2C2C2',
                  fontSizeFocused: 15,
                  fontSize: 15,
                  margin: 0,
                  padding: 0,
                }}
              />
            </View>
          </TouchableOpacity>
          <Alert
            handleGernder={handleGernder}
            data={ShowGender}
            setShowGender={setShowGender}
          />
          <FloatingLabelInput
            showSoftInputOnFocus={false}
            editable={false}
            selectTextOnFocus={false}
            label={'Location On Map(req. to Optimise store)'}
            value={props.item.userLocation}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: 78,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />
          <FloatingLabelInput
            showSoftInputOnFocus={false}
            editable={false}
            selectTextOnFocus={false}
            label={'Complete Adress House #(for delivery)'}
            value={props.item.UserAdress}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: 78,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />

          <TouchableOpacity
            style={{display: props.item.seletedUpdateButton ? 'none' : 'flex'}}
            onPress={() => dispatch(TOGGLEEDITBUTTON(false))}>
            <Text
              style={{
                backgroundColor: '#FE7740',
                textAlign: 'center',
                padding: 12,
                color: 'white',
                borderRadius: 3,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View pointerEvents="none">
          <FloatingLabelInput
            label={props.item.label}
            value={props.item.name}
            // onChangeText={value => setData()}
            inputStyles={{
              borderBottomWidth: props.item.seleted ? 2 : 0,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 17,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              height: props.item.seleted ? 78 : 0,
            }}
            labelStyles={{
              fontSize: 17,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 15,
              fontSize: 15,
              margin: 0,
              padding: 0,
            }}
          />
          <View
            style={{
              //   borderWidth: 1,
              display: props.item.seleted ? 'none' : 'flex',
              alignItems: 'flex-end',
            }}>
            {ToggleCounter ? (
              <CountDown
                until={15}
                size={14}
                onFinish={() => setToggleCounter(false)}
                digitStyle={{backgroundColor: 'transparent'}}
                digitTxtStyle={{color: '#000000', fontSize: 17}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setToggleCounter(true)}>
                <Text
                  style={{
                    padding: 12,
                    color: 'white',
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: '#FE7740',
                    width: 224,
                  }}>
                  {props.item.resendButton}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

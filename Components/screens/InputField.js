import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';
import {TOGGLEEDITBUTTON} from '../Redux/actions/indux';
import DatePicker from '../DatePicker';
export default function InputTextField(props) {
  const dispatch = useDispatch();
  const ToggleEditButton = useSelector(state => state.ToggleEditButton);
  const [ShowDate, setShowDate] = useState(false);
  const [ToggleCounter, setToggleCounter] = useState(false);
  const [Date, setDate] = useState("")
  console.log('data y ', props.item);
  console.log('data ii ', props.item.label);
 function handleDate(date){
  setDate(date)
  }
  return (
    <View style={{borderWidth: 1, flex: 1}}>
      {ToggleEditButton ? (
        <View>
          <FloatingLabelInput
            label={'io'}
            value={props.item.name}
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
            label={'io'}
            value={props.item.name}
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
            label={'io'}
            value={props.item.name}
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
              console.log('show ');
            }}
            style={{borderWidth: 1}}>
               <View pointerEvents="none">
            <FloatingLabelInput
              showSoftInputOnFocus={false}
              editable={false}
              selectTextOnFocus={false}
              label={'Date of Birth'}
              value={props.item.name}
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
          <DatePicker data={ShowDate} 
          setShowDate={setShowDate}
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

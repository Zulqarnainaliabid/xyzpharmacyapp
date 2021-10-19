import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import CountDown from 'react-native-countdown-component';
import {useDispatch, useSelector} from 'react-redux';
import {TOGGLEEDITBUTTON} from '../redux/actions';
import DatePicker from '../DatePicker';
import Alert from '../AwsomeAlert';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ErroIcon = (
  <FontAwesome5
    style={{fontSize: 19, color: '#EF6012'}}
    name={'exclamation-circle'}
  />
);
// fa-exclamation-circle
const img = require('../Images/plain-triangle.png');
export default function InputTextField(props) {
  const dispatch = useDispatch();
  const [Gender, setGender] = useState('');
  const [ShowDate, setShowDate] = useState(false);
  const [ShowGender, setShowGender] = useState(false);
  const [ToggleCounter, setToggleCounter] = useState(false);
  const [Date, setDate] = useState('');
  const [UserName, setUserName] = useState(props.item.userName);
  const [Adress, setAdress] = useState(props.item.UserAdress);
  const [UserEmail, setUserEmail] = useState(props.item.userEmail);
  const [UserMapLocation, setUserMapLocation] = useState(
    props.item.userLocation,
  );
  const [UserMobileNumber, setUserMobileNumber] = useState('');
  const [LabelColorUserName, setLabelColorUserName] = useState('#C2C2C2');
  const [BorderWidthUserName, setBorderWidthUserName] = useState(1);
  const [LabelColorUserAdress, setLabelColorUserAdress] = useState('#C2C2C2');
  const [BorderWidthUserAdress, setBorderWidthUserAdress] = useState(1);
  const [LabelColorUserLocation, setLabelColorUserLocation] =
    useState('#C2C2C2');
  const [BorderWidthUserLocation, setBorderWidthUserLocation] = useState(1);
  const [LabelColorUserGender, setLabelColorUserGender] = useState('#C2C2C2');
  const [BorderWidthUserGender, setBorderWidthUserGender] = useState(1);
  const [LabelColorUserDate, setLabelColorUserDate] = useState('#C2C2C2');
  const [BorderWidthUserDate, setBorderWidthUserDate] = useState(1);
  const [LabelColorUserMobileNumber, setLabelColorUserMobileNumber] =
    useState('#C2C2C2');
  const [BorderWidthUserMobileNumber, setBorderWidthUserMobileNumber] =
    useState(1);
  const [LabelColorUserEmail, setLabelColorUserEmail] = useState('#C2C2C2');
  const [BorderWidthUserEmail, setBorderWidthUserEmail] = useState(1);

  const [ValidationCheckUserName, setValidationCheckUserName] = useState(false);
  const [ValidationCheckUserEmil, setValidationCheckUserEmail] =
    useState(false);
  const [ValidationCheckUserMobileNumber, setValidationCheckUserMobileNumber] =
    useState(false);
  const [ValidationCheckUserDate, setValidationCheckUserDate] = useState(false);
  const [ValidationCheckUserGender, setValidationCheckUserGender] =
    useState(false);
  const [ValidationCheckUserMapLocation, setValidationCheckUserMapLocation] =
    useState(false);
  const [ValidationCheckUserHouseAdress, setValidationCheckUserHouseAdress] =
    useState(false);
  const { ToggleEditButton } = useSelector(state => state.booksReducer);
  function handleDate(date) {
    setDate(date);
    setValidationCheckUserDate(false);
  }
  function handleGernder(date) {
    setGender(date);
    setValidationCheckUserGender(false);
  }

  function handleProcced() {
    if (UserName === '') {
      setValidationCheckUserName(true);
    }
    if (UserEmail === '') {
      setValidationCheckUserEmail(true);
    }
    if (UserMobileNumber === '') {
      setValidationCheckUserMobileNumber(true);
    }
    if (Date === '') {
      setValidationCheckUserDate(true);
    }
    if (Gender === '') {
      setValidationCheckUserGender(true);
    }
    if (UserMapLocation === '') {
      setValidationCheckUserMapLocation(true);
    }
    if (Adress === '') {
      setValidationCheckUserHouseAdress(true);
    }
    if (
      Adress === '' ||
      UserMapLocation === '' ||
      Gender === '' ||
      Date === '' ||
      UserMobileNumber === '' ||
      UserEmail === '' ||
      UserName === ''
    ) {
    } else {
      dispatch(TOGGLEEDITBUTTON(false));
    }
  }
  return (
    <View style={{flex: 1}}>
      {ToggleEditButton ? (
        <View style={{marginTop: -6}}>
          <View style={{position: 'relative'}}>
            <FloatingLabelInput
              label={'Name'}
              value={UserName}
              onFocus={() => {
                setLabelColorUserName('#FF783E');
                setBorderWidthUserName(2);
              }}
              onBlur={() => {
                setLabelColorUserName('#C2C2C2');
                setBorderWidthUserName(1);
              }}
              selectionColor={'#FF783E'}
              onChangeText={value => {
                setUserName(value);
                setValidationCheckUserName(false);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserName,
                color: '#000000',
                borderColor: '#D49579',
                paddingTop: 22,
                paddingBottom: 3,
                fontSize: 15,
                textDecorationLine: 'none',
                fontWeight: '100',
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                // marginTop:22
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserName,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserName,
                fontSizeFocused: 13,
              }}
            />
            {ValidationCheckUserName && (
              <View
                style={[
                  styles.outerWraperErrorMessage,
                  styles.outerWraperErrorMessageName,
                ]}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Image
                    style={{width: '100%', height: 10}}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Enter name to proceed</Text>
              </View>
            )}
          </View>

          <View style={{position: 'relative'}}>
            <FloatingLabelInput
              label={'Email'}
              value={UserEmail}
              onFocus={() => {
                setLabelColorUserEmail('#FF783E');
                setBorderWidthUserEmail(2);
              }}
              onBlur={() => {
                setLabelColorUserEmail('#C2C2C2');
                setBorderWidthUserEmail(1);
              }}
              onChangeText={value => {
                setUserEmail(value);
                setValidationCheckUserEmail(false);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserEmail,
                color: '#000000',
                borderColor: '#D49579',
                paddingBottom: 3,
                fontSize: 15,
                textDecorationLine: 'none',
                fontWeight: '100',
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                marginTop: 22,
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserEmail,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserEmail,
                fontSizeFocused: 13,
              }}
            />
            {ValidationCheckUserEmil && (
              <View style={styles.outerWraperErrorMessage}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Image
                    style={{width: '100%', height: 10}}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Enter name to proceed</Text>
              </View>
            )}
          </View>
          <View style={{position: 'relative'}}>
            <FloatingLabelInput
              label={'Mobile Number'}
              value={UserMobileNumber}
              keyboardType="numeric"
              onFocus={() => {
                setLabelColorUserMobileNumber('#FF783E');
                setBorderWidthUserMobileNumber(2);
              }}
              onBlur={() => {
                setLabelColorUserMobileNumber('#C2C2C2');
                setBorderWidthUserMobileNumber(1);
              }}
              onChangeText={value => {
                setUserMobileNumber(value.replace(/[^0-9]/g, ''));
                setValidationCheckUserMobileNumber(false);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserMobileNumber,
                color: '#000000',
                borderColor: '#D49579',
                paddingBottom: 3,
                fontSize: 15,
                textDecorationLine: 'none',
                fontWeight: '100',
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                marginTop: 22,
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserMobileNumber,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserMobileNumber,
                fontSizeFocused: 13,
              }}
            />
            {ValidationCheckUserMobileNumber && (
              <View style={styles.outerWraperErrorMessage}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Image
                    style={{width: '100%', height: 10}}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Enter name to proceed</Text>
              </View>
            )}
          </View>
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
                    paddingHorizontal: 5,
                    paddingVertical: 8,
                    color: 'white',
                    borderRadius: 3,
                    textAlign: 'center',
                    fontSize: 11,
                    backgroundColor: '#FE7740',
                    width: 165,
                    marginTop: 8,
                  }}>
                  RESEND CONFIMATION EMAIL
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowDate(true);
            }}>
            <View pointerEvents="none" style={{position: 'relative'}}>
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Date of Birth'}
                value={Date}
                onFocus={() => {
                  setLabelColorUserDate('#FF783E');
                  setBorderWidthUserDate(2);
                }}
                onBlur={() => {
                  setLabelColorUserDate('#C2C2C2');
                  setBorderWidthUserDate(1);
                }}
                onChangeText={value => setData()}
                inputStyles={{
                  borderBottomWidth: BorderWidthUserDate,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 15,
                  textDecorationLine: 'none',
                  fontWeight: '100',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  // borderWidth:1,
                  marginTop: 22,
                }}
                labelStyles={{
                  fontSize: 15,
                  color: LabelColorUserDate,
                }}
                customLabelStyles={{
                  colorFocused: LabelColorUserDate,
                  fontSizeFocused: 13,
                }}
              />
              {ValidationCheckUserDate && (
                <View style={styles.outerWraperErrorMessage}>
                  <Text style={{textAlign: 'right', marginRight: 10}}>
                    {ErroIcon}
                  </Text>
                  <View
                    style={{
                      width: 15,
                      height: 10,
                      alignSelf: 'flex-end',
                      marginRight: 12,
                    }}>
                    <Image
                      style={{width: '100%', height: 10}}
                      source={img}
                      tintColor="#FF0131"
                    />
                  </View>
                  <Text style={[styles.ErrorMessage]}>
                    Enter name to proceed
                  </Text>
                </View>
              )}
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
            }}>
            <View pointerEvents="none" style={{position: 'relative'}}>
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Gender'}
                value={Gender}
                // onChangeText={value => setData()}
                onFocus={() => {
                  setLabelColorUserGender('#FF783E');
                  setBorderWidthUserGender(2);
                }}
                onBlur={() => {
                  setLabelColorUserGender('#C2C2C2');
                  setBorderWidthUserGender(1);
                }}
                inputStyles={{
                  borderBottomWidth: BorderWidthUserGender,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 15,
                  textDecorationLine: 'none',
                  fontWeight: '100',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  // borderWidth:1,
                  marginTop: 22,
                }}
                labelStyles={{
                  fontSize: 15,
                  color: LabelColorUserGender,
                }}
                customLabelStyles={{
                  colorFocused: LabelColorUserGender,
                  fontSizeFocused: 13,
                }}
              />
              {ValidationCheckUserGender && (
                <View style={styles.outerWraperErrorMessage}>
                  <Text style={{textAlign: 'right', marginRight: 10}}>
                    {ErroIcon}
                  </Text>
                  <View
                    style={{
                      width: 15,
                      height: 10,
                      alignSelf: 'flex-end',
                      marginRight: 12,
                    }}>
                    <Image
                      style={{width: '100%', height: 10}}
                      source={img}
                      tintColor="#FF0131"
                    />
                  </View>
                  <Text style={[styles.ErrorMessage]}>
                    Enter name to proceed
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <Alert
            handleGernder={handleGernder}
            data={ShowGender}
            setShowGender={setShowGender}
          />
          <View style={{position: 'relative'}}>
            <FloatingLabelInput
              showSoftInputOnFocus={false}
              editable={false}
              selectTextOnFocus={false}
              label={'Location On Map(req. to Optimise store)'}
              value={UserMapLocation}
              onChangeText={value => {
                setUserMapLocation(value);
                setValidationCheckUserMapLocation(false);
              }}
              onFocus={() => {
                setLabelColorUserLocation('#FF783E');
                setBorderWidthUserLocation(2);
              }}
              onBlur={() => {
                setLabelColorUserLocation('#C2C2C2');
                setBorderWidthUserLocation(1);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserLocation,
                color: '#000000',
                borderColor: '#D49579',
                paddingBottom: 3,
                fontSize: 15,
                textDecorationLine: 'none',
                fontWeight: '100',
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                marginTop: 22,
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserLocation,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserLocation,
                fontSizeFocused: 13,
              }}
            />
            {ValidationCheckUserMapLocation && (
              <View style={styles.outerWraperErrorMessage}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Image
                    style={{width: '100%', height: 10}}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Enter name to proceed</Text>
              </View>
            )}
          </View>
          <View style={{position: 'relative'}}>
            <FloatingLabelInput
              label={'Complete Adress House #(for delivery)'}
              value={Adress}
              onChangeText={value => {
                setAdress(value);
                setValidationCheckUserHouseAdress(false);
              }}
              onFocus={() => {
                setLabelColorUserAdress('#FF783E');
                setBorderWidthUserAdress(2);
              }}
              onBlur={() => {
                setLabelColorUserAdress('#C2C2C2');
                setBorderWidthUserAdress(1);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserAdress,
                color: '#000000',
                borderColor: '#D49579',
                paddingBottom: 3,
                fontSize: 15,
                textDecorationLine: 'none',
                fontWeight: '100',
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                marginTop: 22,
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserAdress,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserAdress,
                fontSizeFocused: 13,
              }}
            />
            {ValidationCheckUserHouseAdress && (
              <View style={styles.outerWraperErrorMessage}>
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Image
                    style={{width: '100%', height: 10}}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Enter name to proceed</Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={{display: props.item.seletedUpdateButton ? 'none' : 'flex'}}
            onPress={handleProcced}>
            <Text
              style={{
                backgroundColor: '#FE7740',
                textAlign: 'center',
                padding: 12,
                color: 'white',
                borderRadius: 3,
                shadowColor: '#000',
                marginTop: 45,
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
        <View style={{marginTop: -6}} pointerEvents="none">
          <FloatingLabelInput
            label={'Name'}
            value={UserName}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 15,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              // height: 78,
              marginTop: 22,
            }}
            labelStyles={{
              fontSize: 15,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 13,
            }}
          />
          <FloatingLabelInput
            label={'Email'}
            value={UserEmail}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 15,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              // height: 78,
              marginTop: 22,
            }}
            labelStyles={{
              fontSize: 15,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 13,
            }}
          />
          <FloatingLabelInput
            label={'Mobile Number'}
            value={UserMobileNumber}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 15,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              // height: 78,
              marginTop: 22,
            }}
            labelStyles={{
              fontSize: 15,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 13,
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
                    paddingHorizontal: 5,
                    paddingVertical: 8,
                    color: 'white',
                    borderRadius: 3,
                    textAlign: 'center',
                    fontSize: 11,
                    backgroundColor: '#FE7740',
                    width: 165,
                    marginTop: 8,
                  }}>
                  RESEND CONFIMATION EMAIL
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowDate(true);
            }}>
            <View pointerEvents="none">
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Date of Birth'}
                value={Date}
                inputStyles={{
                  borderBottomWidth: 2,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 15,
                  textDecorationLine: 'none',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  // height: 78,
                  marginTop: 22,
                }}
                labelStyles={{
                  fontSize: 15,
                  color: '#C2C2C2',
                }}
                customLabelStyles={{
                  colorFocused: '#C2C2C2',
                  fontSizeFocused: 13,
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
            }}>
            <View pointerEvents="none">
              <FloatingLabelInput
                showSoftInputOnFocus={false}
                editable={false}
                selectTextOnFocus={false}
                label={'Gender'}
                value={Gender}
                inputStyles={{
                  borderBottomWidth: 2,
                  color: '#000000',
                  borderColor: '#D49579',
                  paddingBottom: 3,
                  fontSize: 15,
                  textDecorationLine: 'none',
                }}
                containerStyles={{
                  backgroundColor: '#fff',
                  // height: 78,
                  marginTop: 22,
                }}
                labelStyles={{
                  fontSize: 15,
                  color: '#C2C2C2',
                }}
                customLabelStyles={{
                  colorFocused: '#C2C2C2',
                  fontSizeFocused: 13,
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
            value={UserMapLocation}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 15,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              // height: 78,
              marginTop: 22,
            }}
            labelStyles={{
              fontSize: 15,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 13,
            }}
          />
          <FloatingLabelInput
            label={'Complete Adress House #(for delivery)'}
            value={Adress}
            inputStyles={{
              borderBottomWidth: 2,
              color: '#000000',
              borderColor: '#D49579',
              paddingBottom: 3,
              fontSize: 15,
              textDecorationLine: 'none',
            }}
            containerStyles={{
              backgroundColor: '#fff',
              // height: 78,
              marginTop: 22,
            }}
            labelStyles={{
              fontSize: 15,
              color: '#C2C2C2',
            }}
            customLabelStyles={{
              colorFocused: '#C2C2C2',
              fontSizeFocused: 13,
            }}
          />
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
  outerWraperErrorMessageName: {
    top: 33,
  },
  outerWraperErrorMessage: {
    position: 'absolute',
    top: 43,
    elevation: 5,
    zIndex: 5,
    right: 0,
  },
  ErrorMessage: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderTopWidth: 3,
    borderColor: '#F50632',
  },
});

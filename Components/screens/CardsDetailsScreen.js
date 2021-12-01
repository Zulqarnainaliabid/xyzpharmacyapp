import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../Header';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ErroIcon = (
  <FontAwesome5
    style={{fontSize: 19, color: '#EF6012'}}
    name={'exclamation-circle'}
  />
);

const img = require ('../Images/plain-triangle.png');
const VisaPic = require ('../Images/Visa.png');
export default function CardsDetailsScreen({route, navigation}) {
  const [LabelColorUserName, setLabelColorUserName] = useState ('#C2C2C2');
  const [BorderWidthUserName, setBorderWidthUserName] = useState (1);
  const [LabelColorUserCardNumber, setLabelColorUserCardNumber] = useState (
    '#C2C2C2'
  );
  const [BorderWidthUserCardNumber, setBorderWidthUserCardNumber] = useState (
    1
  );
  const [UserName, setUserName] = useState ('');
  const [
    ValidationCheckCardHolderName,
    setValidationCheckCardHolderName,
  ] = useState (false);
  const [UserCardNumber, setUserCardNumber] = useState ('');
  const [
    ValidationCheckUserCardNumber,
    setValidationCheckUserCardNumber,
  ] = useState (false);
  const [ValidationExpiryDate, setValidationExpiryDate] = useState (false);
  const [LabelColorExpiryDate, setLabelColorExpiryDate] = useState ('#A0A0A0');
  const [BorderWidthExpiryDate, setBorderWidthExpiryDate] = useState (1);
  const [ExpiryDate, setExpiryDate] = useState ('');
  const [ValidationUserCW, setValidationUserCW] = useState (false);
  const [LabelColorUserCW, setLabelColorUserCW] = useState ('#A0A0A0');
  const [BorderWidthUserCW, setBorderWidthUserCW] = useState (1);
  const [UserCW, setUserCW] = useState ('');
  const [IsFocusCardHolderName, setIsFocusCardHolderName] = useState (false);
  const [IsFocusCardNumber, setIsFocusCardNumber] = useState (false);
  const [IsFocusDate, setIsFocusDate] = useState (false);
  const [IsFocusCW, setIsFocusCW] = useState (false);

  function handleProcced () {
    if (UserName === '') {
      setValidationCheckCardHolderName (true);
    }
    if (UserCardNumber === '') {
      setValidationCheckUserCardNumber (true);
    }
    if (ExpiryDate === '') {
      setValidationExpiryDate (true);
    }
    if (UserCW === '') {
      setValidationUserCW (true);
    }
    // if (
    //   Adress === '' ||
    //   UserMapLocation === '' ||
    //   Gender === '' ||
    //   Date === ''
    // ) {
    // } else {
    //   dispatch(TOGGLEEDITBUTTON(false));
    // }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', borderWidth: 1}}>
      <Header name={'Add Card'} EditButton={false} ScreenName={false} />
      <View
        style={{
          padding: 15,
        }}
      >
        <View style={{position: 'relative', marginTop: 12}}>
          <FloatingLabelInput
            label={'Card Holder Name'}
            value={UserName}
            isFocused={IsFocusCardHolderName}
            onFocus={() => {
              setLabelColorUserName ('#FF783E');
              setBorderWidthUserName (2);
              setIsFocusCardHolderName (true);
            }}
            onBlur={() => {
              setLabelColorUserName ('#C2C2C2');
              setBorderWidthUserName (1);
              setIsFocusCardHolderName (false);
            }}
            onChangeText={value => {
              setUserName (value);
              setValidationCheckCardHolderName (false);
            }}
            inputStyles={{
              borderBottomWidth: BorderWidthUserName,
              color: '#000000',
              borderColor: '#D49579',
              paddingTop: 20,
              paddingBottom: 0,
              fontSize: 17,
              textDecorationLine: 'none',
              fontWeight: '100',
              marginBottom: 12,
              marginLeft: 5,
              paddingHorizontal: 0,
            }}
            containerStyles={{
              backgroundColor: '#fff',
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
          {ValidationCheckCardHolderName &&
            <View
              style={[
                styles.outerWraperErrorMessage,
                styles.outerWraperErrorMessageName,
              ]}
            >
              <Text style={{textAlign: 'right', marginRight: 10}}>
                {ErroIcon}
              </Text>
              <View
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'flex-end',
                  marginRight: 12,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={img}
                  tintColor="#FF0131"
                />
              </View>
              <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
            </View>
            }
        </View>
        <View style={{position: 'relative', marginTop: 12}}>
          <FloatingLabelInput
            label={'Enter Card Number'}
            value={UserCardNumber}
            isFocused={IsFocusCardNumber}
            onFocus={() => {
              setLabelColorUserCardNumber ('#FF783E');
              setBorderWidthUserCardNumber (2);
              setIsFocusCardNumber (true);
            }}
            onBlur={() => {
              setLabelColorUserCardNumber ('#C2C2C2');
              setBorderWidthUserCardNumber (1);
              setIsFocusCardNumber (false);
            }}
            selectionColor={'#FF783E'}
            onChangeText={value => {
              setUserCardNumber (value);
              setValidationCheckUserCardNumber (false);
            }}
            inputStyles={{
              borderBottomWidth: BorderWidthUserCardNumber,
              color: '#000000',
              borderColor: '#D49579',
              fontSize: 17,
              paddingTop: 20,
              paddingBottom: 0,
              textDecorationLine: 'none',
              fontWeight: '100',
              marginBottom: 12,
              marginLeft: 5,
              //   borderWidth:1,
              paddingHorizontal: 0,
            }}
            containerStyles={{
              backgroundColor: '#fff',
              //   borderWidth:1,
              //   marginTop:6
            }}
            labelStyles={{
              fontSize: 15,
              color: LabelColorUserCardNumber,
            }}
            customLabelStyles={{
              colorFocused: LabelColorUserCardNumber,
              fontSizeFocused: 13,
              paddingBottom: 0,
            }}
          />
          {ValidationCheckUserCardNumber &&
            <View
              style={[
                styles.outerWraperErrorMessage,
                styles.outerWraperErrorMessageName,
              ]}
            >
              <Text style={{textAlign: 'right', marginRight: 10}}>
                {ErroIcon}
              </Text>
              <View
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'flex-end',
                  marginRight: 12,
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={img}
                  tintColor="#FF0131"
                />
              </View>
              <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
            </View>}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 12,
          }}
        >
          <View style={{position: 'relative', width: '50%'}}>
            <FloatingLabelInput
              label={'Expiry Date(MM/YY)'}
              value={ExpiryDate}
              isFocused={IsFocusDate}
              onFocus={() => {
                setLabelColorExpiryDate ('#FF783E');
                setBorderWidthExpiryDate (2);
                setIsFocusDate (true);
              }}
              onBlur={() => {
                setLabelColorExpiryDate ('#C2C2C2');
                setBorderWidthExpiryDate (1);
                setIsFocusDate (false);
              }}
              selectionColor={'#FF783E'}
              onChangeText={value => {
                setExpiryDate (value);
                setValidationExpiryDate (false);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthExpiryDate,
                color: '#000000',
                borderColor: '#D49579',
                paddingTop: 20,
                paddingBottom: 0,
                fontSize: 17,
                textDecorationLine: 'none',
                fontWeight: '100',
                marginBottom: 12,
                marginLeft: 5,
                paddingHorizontal: 0,
              }}
              containerStyles={{
                backgroundColor: '#fff',
                // borderWidth:1,
                // marginTop:22
              }}
              labelStyles={{
                fontSize: 20,
                color: LabelColorExpiryDate,
              }}
              customLabelStyles={{
                colorFocused: LabelColorExpiryDate,
                fontSizeFocused: 13,
                fontSize: 20,
              }}
            />
            {ValidationExpiryDate &&
              <View
                style={[
                  styles.outerWraperErrorMessage,
                  styles.outerWraperErrorMessageName,
                ]}
              >
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
              </View>}
          </View>
          <View style={{position: 'relative', marginLeft: 45, width: '37%'}}>
            <FloatingLabelInput
              label={'CW'}
              value={UserCW}
              isFocused={IsFocusCW}
              onFocus={() => {
                setLabelColorUserCW ('#FF783E');
                setBorderWidthUserCW (2);
                setIsFocusCW (true);
              }}
              onBlur={() => {
                setLabelColorUserCW ('#C2C2C2');
                setBorderWidthUserCW (1);
                setIsFocusCW (false);
              }}
              selectionColor={'#FF783E'}
              onChangeText={value => {
                setUserCW (value);
                setValidationUserCW (false);
              }}
              inputStyles={{
                borderBottomWidth: BorderWidthUserCW,
                color: '#000000',
                borderColor: '#D49579',
                paddingTop: 20,
                paddingBottom: 0,
                fontSize: 17,
                textDecorationLine: 'none',
                fontWeight: '100',
                marginBottom: 12,
                marginLeft: 5,
                paddingHorizontal: 0,
              }}
              containerStyles={{
                backgroundColor: '#fff',
              }}
              labelStyles={{
                fontSize: 15,
                color: LabelColorUserCW,
              }}
              customLabelStyles={{
                colorFocused: LabelColorUserCW,
                fontSizeFocused: 13,
              }}
            />
            {ValidationUserCW &&
              <View
                style={[
                  styles.outerWraperErrorMessage,
                  styles.outerWraperErrorMessageName,
                ]}
              >
                <Text style={{textAlign: 'right', marginRight: 10}}>
                  {ErroIcon}
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                    source={img}
                    tintColor="#FF0131"
                  />
                </View>
                <Text style={[styles.ErrorMessage]}>Field cannot be empty</Text>
              </View>}
          </View>
        </View>
        <TouchableOpacity onPress={handleProcced}>
          <Text style={styles.AddcardButton}>Add Card</Text>
        </TouchableOpacity>
        <Text style={styles.outerwraperTextHolder}>
          To verify your card a small amount will be charged to. After
          verification the amount will be automatically refunded
        </Text>
        <Text style={{color: '#969696', fontSize: 18}}>We accept</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 12,
          }}
        >
          <View
            style={{
              padding: 4,
              backgroundColor: '#F1F3F2',
              marginHorizontal: 3,
            }}
          >
            <View
              style={{
                width: 60,
                height: 20,
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={VisaPic}
                //   tintColor="#FF0131"
              />
            </View>
          </View>
          <View
            style={{
              padding: 4,
              backgroundColor: '#F1F3F2',
              marginHorizontal: 3,
            }}
          >
            <View
              style={{
                width: 60,
                height: 20,
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={VisaPic}
                //   tintColor="#FF0131"
              />
            </View>
          </View>
          <View
            style={{
              padding: 4,
              backgroundColor: '#F1F3F2',
              marginHorizontal: 3,
            }}
          >
            <View
              style={{
                width: 60,
                height: 20,
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  resizeMode: 'contain',
                }}
                source={VisaPic}
                //   tintColor="#FF0131"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

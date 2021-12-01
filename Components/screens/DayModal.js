import React, {useState} from 'react';
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogButton,
} from 'react-native-popup-dialog';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
const DeliveryDayIcon = require ('../Images/DeliveryDayicon.png');
export default function SelectDayModal (props) {
  const [checked, setChecked] = useState ('second');
  return (
    <Dialog
      width={270}
      height={500}
      overlayOpacity={0.6}
      rounded={false}
      visible={props.visible}
      dialogAnimation={
        new SlideAnimation ({
          slideFrom: 'top',
        })
      }
    >
      <DialogContent>
        <View style={{marginTop: 30}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <View style={{width: 70, height: 30, marginRight: 12}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                  source={DeliveryDayIcon}
                />
              </View>
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: '700',
                  color: '#F85E0D',
                  marginStart: 10,
                  marginTop: -10,
                }}
              >
                05
              </Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'column', marginTop: 12}}
            >
              <Text style={{fontSize: 17, fontWeight: '700'}}>
                Select Delivery Day
              </Text>
              <View>
                <Text style={{fontSize: 13}}>SELECT FROM THE </Text>
                <Text style={{fontSize: 13}}>OPTION BELOW</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTopWidth: 1,
              marginTop: 7,
              paddingVertical: 10,
              borderColor: '#848484',
            }}
          >
            <TouchableOpacity onPress={() => setChecked ('first')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color="#00A652"
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                />
                <Text style={{color: '#8C8C8C', fontSize: 18}}>
                  09:00-11:00 AM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginTop: 7,
              paddingVertical: 10,
              borderColor: '#848484',
            }}
          >
            <TouchableOpacity onPress={() => setChecked ('second')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color="#00A652"
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                />
                <Text style={{color: '#8C8C8C', fontSize: 18}}>
                  09:00-11:00 AM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginTop: 7,
              paddingVertical: 10,
              borderColor: '#848484',
            }}
          >
            <TouchableOpacity onPress={() => setChecked ('threed')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color="#00A652"
                  value="threed"
                  status={checked === 'threed' ? 'checked' : 'unchecked'}
                />
                <Text style={{color: '#8C8C8C', fontSize: 18}}>
                  09:00-11:00 AM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginTop: 7,
              paddingVertical: 10,
              borderColor: '#848484',
            }}
          >
            <TouchableOpacity onPress={() => setChecked ('fourth')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color="#00A652"
                  value="fourth"
                  status={checked === 'fourth' ? 'checked' : 'unchecked'}
                />
                <Text style={{color: '#8C8C8C', fontSize: 18}}>
                  09:00-11:00 AM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginTop: 7,
              paddingVertical: 10,
              borderColor: '#848484',
            }}
          >
            <TouchableOpacity onPress={() => setChecked ('fivth')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RadioButton
                  color="#00A652"
                  value="fivth"
                  status={checked === 'fivth' ? 'checked' : 'unchecked'}
                />
                <Text style={{color: '#8C8C8C', fontSize: 18}}>
                  09:00-11:00 AM
                </Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{alignItems: 'flex-end', marginTop: 12}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  props.setvisible (false);
                }}
              >
                <Text style={{color: '#8E8E8E'}}>CANCLE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.setvisible (false);
                }}
              >
                <Text
                  style={{
                    marginLeft: 30,
                    backgroundColor: '#FF783E',
                    fontSize: 16,
                    color: '#FFFFFF',
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                  }}
                >
                  DONE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}

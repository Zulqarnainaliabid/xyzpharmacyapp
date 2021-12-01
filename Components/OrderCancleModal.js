import React, {useState,useContext} from 'react';
import { Context } from '../Components/Context/Context'
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogButton,
} from 'react-native-popup-dialog';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
export default function OrderCancleModal (props) {
  const contextData = useContext(Context);
  const [checked, setChecked] = useState ('second');
  return (
    <View>
      <Dialog
        width={335}
        height={300}
        overlayOpacity={0.4}
        rounded={true}
        visible={props.visible}
        dialogAnimation={
          new SlideAnimation ({
            slideFrom: 'top',
          })
        }
      >
        <DialogContent>
          <View style={{marginTop: 25}}>
            <View
              style={{
                paddingVertical: 5,
                borderColor: '#9C9C9C',
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
                    Placed order by mistake
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                paddingVertical: 5,
                borderColor: '#9C9C9C',
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
                    Missed some item so i will place another order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                paddingVertical: 5,
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
                    Forget to applay promo so i will place another order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                paddingVertical: 5,
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
                    Other
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.setvisible (false);
                    props.setOrderCancle(true)
                    contextData.HandaleOrderCompleted(false)
                  }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderColor: '#D7D7D7',
                      backgroundColor: '#FF783E',
                      fontSize: 13,
                      color: '#E5875E',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 3,
                      backgroundColor: 'white',
                    }}
                  >
                    SUBMIT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.setvisible (false);
                  }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderColor: '#D7D7D7',
                      backgroundColor: '#FF783E',
                      fontSize: 13,
                      color: '#E5875E',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 3,
                      backgroundColor: 'white',
                    }}
                  >
                    CANCLE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
}

import React, {useState,useEffect} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

export default function DatePicker(props){
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let date =  moment(currentDate).format("DD/MM/YYYY")
    console.log("ii data" ,date)
    props.handleDate(date)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  useEffect(() => {
      if(props.data){
        showDatepicker()
      }
      props.setShowDate(false)
  }, [props.data])

  const showDatepicker = () => {
    showMode('date');
  };

//   const showTimepicker = () => {
//     showMode('time');
//   };

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
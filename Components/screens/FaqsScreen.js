import React from 'react';
import {View} from 'react-native';
import FaqsBox from './FaqsBox';
export default function FaqsScreen() {
  const FaqArray = [
    {
      Question: 'How many orders can I place in a month?',
      Ans: 'Because we value our customers so much, we are giving you unlimited orders throughout the month without any delivery charges.',
    },
    {
      Question:
        'Can I use the same membership accounts for different locations?',
      Ans: 'Place your orders at your convince and without the worry of a specific address. Just make sure you update the location prior to placing the order.',
    },
    {
      Question: 'How do I resubscribe once the membership expires?',
      Ans: 'Dont worry, as always, we have you covered. Your current plan will automatically resubscribe at the end of the plan duration. If you wish to cancel your membership, you can do that within 15 days of activation/renewal.',
    },
    {
      Question: 'I changed my mind, how do I cancel?',
      Ans: 'Cancellations are super easy, simply hit the cancel button on membership detail page within 15 days of the plan purchase for a full refund. Please note, you will be charged for all deliveries as per our regular policy on the orders placed using the plan.',
    },
    {
      Question: 'How do I pay for membership?',
      Ans: 'Once you purchase a plan, we will put the membership amount as negative credit in your app wallet. You can pay for it along with your next order! Simple, right?',
    },
  ];
  return (
    <View style={{paddingBottom:20}}>
      {FaqArray.map((item, index) => {
        return <FaqsBox 
        key={index}
        data={item}
        />;
      })}
    </View>
  );
}

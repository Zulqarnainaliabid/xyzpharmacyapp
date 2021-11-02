import React from 'react'
import axios from 'axios'
export const getData = async () => {  
    let AllData = 'https://borqr50171.execute-api.us-east-1.amazonaws.com/default/xyzpharmacygetall?fbclid=IwAR0hBRWKW9nM4MWHG2ylRw8TN9WjfLsqOplwvMzkYDcZFeeweCACyEeY5ws';
   return  await axios.get(AllData)  
    //   .then(res => {
    //     // console.log("data", res.data) 
    
    //   })  
      .catch(err => {  
        console.log(err)  
      });  
    }
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   Text,
//   Button,
//   PermissionsAndroid
// } from 'react-native';
// import SmsAndroid from 'react-native-get-sms-android';

// const App: () => JSX.Element = () => {
//   const [result, setResult] = useState<number | null>(null);
  // var filter = {
  //   box: '', // Empty string to fetch all messages

  //   // Other filters can be removed or left empty
  //   // minDate: 0,
  //   // maxDate: 0,
  //   // bodyRegex: '',
  //   // read: 0,
  //   // _id: 0,
  //   // thread_id: 0,
  //   address: 'JM-TMBANK',
  //   // body: '',
  //   // indexFrom: 0,
  //   // maxCount: 0,
  // };
//   useEffect(() => {
//     getMessage()
//   }, [])

//   const getMessage = async () => {
    // try {
    //   const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     SmsAndroid.list(
    //       JSON.stringify(filter),
    //       (fail: any) => {
    //         console.log('Failed with this error: ' + fail);
    //       },
    //       (count: any, smsList: any) => {
    //         // console.log('Count: ', count);
    //         // console.log('List: ', smsList);
    //         var arr = JSON.parse(smsList);
    //         const creditedMessages = arr.filter((sms:any) =>
    //           sms.body.toLowerCase().includes("credited with")
    //         );
    //         console.log('creditedMessages: ' + creditedMessages[0].body);

    //         const debitedMessages = arr.filter((sms:any) =>
    //           sms.body.toLowerCase().includes("debited with")
    //         );
    //         console.log('debitedMessages: ' + debitedMessages[0].body);
    //       },
    //     );
    //   } else {
    //     // Permission denied, handle accordingly
    //     console.log('READ_SMS permission denied');
    //   }
    // } catch (error) {
    //   console.error('Error requesting READ_SMS permission:', error);
    // }
//   }


//   return (
//     <SafeAreaView>
//       <StatusBar barStyle={'dark-content'} />
//       <Text style={{ marginLeft: 20, marginTop: 20 }}>
//         3+7={result ?? '??'}
//       </Text>
//     </SafeAreaView>
//   );
// };
// export default App;
import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorScreen from './src/router/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
      <StackNavigatorScreen/>
    </NavigationContainer>
  )
}

export default App
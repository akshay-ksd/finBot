import { useEffect, useLayoutEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const useGetAllMessage =()=>{
    const [messages,setMessages] = useState<any>(false);

    useLayoutEffect(()=>{
        getMessage()
    },[])

    const getMessage =async()=> {
        var filter = {
            box: '', // Empty string to fetch all messages
        };
    
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            await  SmsAndroid.list(
                JSON.stringify(filter),
                (fail: any) => {
                  console.log('Failed with this error: ' + fail);
                },
                (count: any, smsList: any) => {
                  // console.log('Count: ', count);
                  // console.log('List: ', smsList);
                  var msg = JSON.parse(smsList);

                  const creditedMessages = msg.filter((sms:any) =>
                    sms.body.toLowerCase().includes("credited with")
                  );
      
                  const debitedMessages = msg.filter((sms:any) =>
                    sms.body.toLowerCase().includes("debited with")
                  );

                  const data = {
                    msg,
                    creditedMessages,
                    debitedMessages
                  }

                  setMessages(data)

                },
              );
            } else {
              // Permission denied, handle accordingly
              console.log('READ_SMS permission denied');
            }
          } catch (error) {
            console.error('Error requesting READ_SMS permission:', error);
          }
    }

    return messages
};

export default useGetAllMessage
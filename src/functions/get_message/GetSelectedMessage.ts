import {getData} from '../mmkv/MMKV';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const useGetSelectedMEssage = () => {
  const [selectedData, setSelectedData] = useState<any>([]);

  useEffect(() => {
    getSelectedMessage();
  }, []);

  const getSelectedMessage = async () => {
    const selectedMessage: any = getData('address');
    const data: any = JSON.parse(selectedMessage);
    const addresses = data.map((item: any) => item.address);
    const uniqueAddressesSet = new Set(addresses);
    const uniqueAddressesArray = Array.from(uniqueAddressesSet);

    var filter = {
      box: '', // Empty string to fetch all messages
    };

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await SmsAndroid.list(
          JSON.stringify(filter),
          (fail: any) => {
            console.log('Failed with this error: ' + fail);
          },
          (count: any, smsList: any) => {
            var msg = JSON.parse(smsList);

            const filteredMessage = msg.filter((item: any) =>
              uniqueAddressesArray.includes(item.address),
            );

            const creditKeywords = [
              'credit',
              'credited',
              'payment',
              'credited with',
            ];
            const debitKeywords = [
              'debit',
              'debited',
              'withdrawal',
              'debited from',
            ];

            const transactionSms = filteredMessage.filter((message: any) => {
              const lowercaseBody = message.body.toLowerCase();

              // Check if the body contains any credit-related keywords
              const containsCredit = creditKeywords.some(keyword =>
                lowercaseBody.includes(keyword),
              );

              // Check if the body contains any debit-related keywords
              const containsDebit = debitKeywords.some(keyword =>
                lowercaseBody.includes(keyword),
              );

              // Return true if the body contains credit or debit keywords
              return containsCredit || containsDebit;
            });

            const extractedData = transactionSms.map((message: any) => {
              const {body, date, type} = message;
              const amountMatch = findAmount(body);
              const amount = amountMatch ? amountMatch : null;
              const isCredit = body.includes('credited');

              return {
                amount: amount,
                time: new Date(date).toLocaleString(),
                type: isCredit ? 'credited' : 'debited',
              };
            });
            setSelectedData(extractedData);
          },
        );
      } else {
        // Permission denied, handle accordingly
        console.log('READ_SMS permission denied');
      }
    } catch (error) {
      console.error('Error requesting READ_SMS permission:', error);
    }
  };

  function findAmount(text: string): number | null {
    const debitedRegex = /debited with Rs\.([\d.]+)/;
    const creditedRegex = /credited with Rs\.([\d.]+)/;

    const debitedMatch = text.match(debitedRegex);
    const creditedMatch = text.match(creditedRegex);

    if (debitedMatch) {
      const debitedAmount = parseFloat(debitedMatch[1]);
      return debitedAmount;
    } else if (creditedMatch) {
      const creditedAmount = parseFloat(creditedMatch[1]);
      return creditedAmount;
    } else {
      return null; // Return null if no amount is found
    }
  }

  return selectedData;
};

export default useGetSelectedMEssage;

import {View, Text, FlatList, ListRenderItem} from 'react-native';
import React, {useMemo} from 'react';
import styles from './Style';
import SingleRender from '../../molecules/single_render/SingleRender';
import useGetSelectedMessage from '../../../../functions/get_message/GetSelectedMessage';
import Strip from '../../molecules/strip/Strip';

interface Transaction {
  bank: string | null;
  amount: number | null;
  time: string;
  type: 'credited' | 'debited';
}

const TransactionList: React.FC = () => {
  const selectedData: Transaction[] = useGetSelectedMessage();
  const creditData = selectedData.filter(item => item.type === 'credited');
  const debitData = selectedData.filter(item => item.type === 'debited');

  const calculateTotalAmount = (data: Transaction[]): number => {
    return data.reduce((total, item) => total + (item.amount || 0), 0);
  };

  const creditTotal = useMemo(
    () => calculateTotalAmount(creditData),
    [creditData],
  );
  const debitTotal = useMemo(
    () => calculateTotalAmount(debitData),
    [debitData],
  );

  const mergedData = [
    {type: 'header', title: 'Credit Data', value: creditTotal},
    ...creditData,
    {type: 'header', title: 'Debit Data', value: debitTotal},
    ...debitData,
  ];

  const renderItem: ListRenderItem<
    Transaction | {type: string; title: string; value: number}
  > = ({item, index}) => {
    if (item.type === 'header') {
      return <Strip title={item.title} value={item.value} />;
    } else {
      return <SingleRender item={item} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mergedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TransactionList;

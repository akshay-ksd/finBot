import {View, Text, FlatList, ListRenderItem, Dimensions} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import styles from './Style';
import SingleRender from '../../molecules/single_render/SingleRender';
import useGetSelectedMessage from '../../../../functions/get_message/GetSelectedMessage';
import Strip from '../../molecules/strip/Strip';
import Recycler from '../../../../component/recycler/Recycler';
interface Transaction {
  bank: string | null;
  amount: number | null;
  time: string;
  type: 'credited' | 'debited';
}

const {height, width} = Dimensions.get('window');

const TransactionList: React.FC = () => {
  const selectedData: Transaction[] = useGetSelectedMessage();
  const creditData = selectedData.filter(item => item.type === 'credited');
  const debitData = selectedData.filter(item => item.type === 'debited');

  const listRef = useRef();

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
  useEffect(() => {
    if (creditData.length) {
      const mergedData = [
        {type: 'header', title: 'Debit Data', value: debitTotal},
        ...debitData,
        {type: 'header', title: 'Credit Data', value: creditTotal},
        ...creditData,
      ];
      listRef.current.loadDataFromApi(mergedData);
    }
  }, [creditData]);

  const renderItem = (type, item) => {
    if (item.item.type === 'header') {
      return <Strip title={item.item.title} value={item.item.value} />;
    } else {
      return <SingleRender item={item?.item} />;
    }
  };

  return (
    <View style={styles.container}>
      <Recycler
        horizontal={false}
        ref={listRef}
        rowRenderer={renderItem}
        height={height / 5}
        width={width}
        renderFooter={() => <View style={{height: 50}}></View>}
      />
    </View>
  );
};

export default TransactionList;

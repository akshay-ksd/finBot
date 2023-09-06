import {View, Text, FlatList, ListRenderItem, Dimensions} from 'react-native';
import React, {forwardRef, useEffect, useImperativeHandle, useMemo, useRef} from 'react';
import styles from './Style';
import SingleRender from '../../molecules/single_render/SingleRender';
import useGetSelectedMessage from '../../../../functions/get_message/GetSelectedMessage';
import Strip from '../../molecules/strip/Strip';
import Recycler from '../../../../component/recycler/Recycler';
import InputModel from '../inputModel/InputModel';
import {getAllInvoices} from '../../../../database/relemInstense';
interface Transaction {
  bank: string | null;
  amount: number | null;
  time: string;
  type: 'credited' | 'debited';
}
interface Schema {
  invoiceDate: Date,
  refNumber: string,
  entryType:string,
  text: string,
  description:string,
  symbol: string,
  amount: number,
}
const {height, width} = Dimensions.get('window');

const TransactionList: React.FC<any> = (props,ref) => {
  // const selectedData: Transaction[] = useGetSelectedMessage();
  // const creditData = selectedData.filter(item => item.type === 'credited');
  // const debitData = selectedData.filter(item => item.type === 'debited');

  const listRef = useRef<any>();

  const calculateTotalAmount = (data: Schema[]): number => {
    return data.reduce((total, item) => total + (item.amount || 0), 0);
  };
 

  useImperativeHandle(ref,()=>({
    loadData:(data:Schema[])=>{
      if(data.length){
        let creditTotal = 0;
        let debitTotal = 0;
         const income:Schema[] = data.filter((x)=>x.entryType == "Income");
         if(income.length){
            creditTotal = calculateTotalAmount(income)
         }
         const expense:Schema[] = data.filter((x)=>x.entryType == "Expense");
         if(expense.length){
          debitTotal = calculateTotalAmount(expense)
         } 
         
         const mergedData = [
          {type: 'header', title: 'Expense', value: debitTotal},
          ...expense,
          {type: 'header', title: 'Income', value: creditTotal},
          ...income,
        ];
        listRef.current.loadDataFromApi(mergedData);
      }else{
        listRef.current.loadDataFromApi([]);
      }
     
    },
    loadNewData: (data: Schema)=>{
      listRef.current.loadNewData(data);
    }
  }))


  const renderItem = (type: any, item: any,index: number, extendedState:object) => {
    if (item.item.type === 'header') {
      if(item?.item?.value > 0){
        return <Strip title={item.item.title} value={item.item.value} index={index}/>;
      }
    } else {
      return <SingleRender item={item?.item} index={index}/>;
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
      {/* <InputModel /> */}
    </View>
  );
};

export default forwardRef(TransactionList);

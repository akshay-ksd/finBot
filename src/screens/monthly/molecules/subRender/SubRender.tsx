import {View, Text} from 'react-native';
import React, {FC, useLayoutEffect, useState} from 'react';
import styles from './style';
interface Schema {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}
const ItemRender = () => {
    return (
      <View style={styles.itemContainer}>
        <Text>name</Text>
        <Text>300</Text>
      </View>
    );
  };
const SubRender: FC<any> = ({data}) => {
  const [income, setIncome] = useState<Schema[]>([]);
  const [expense, setExpense] = useState<Schema[]>([]);

  useLayoutEffect(() => {
    const inc: Schema[] = [];
    const exp: Schema[] = [];

    data.forEach((element: Schema) => {
      if (element.entryType == 'Income') {
        inc.push(element);
      } else {
        exp.push(element);
      }
    });

    setIncome(inc);
    setExpense(exp);
  }, []);

  return (
    <View style={styles.content}>
      <View style={styles.itemParent}>
        {/* {income.map((item: Schema) => (
          <ItemRender key={item?.refNumber} />
        ))} */}
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
      </View>

      <View style={styles.itemParent}>
        {/* {expense.map((item: Schema) => (
          <ItemRender key={item?.refNumber} />
        ))} */}
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
        <ItemRender key={"item?.refNumber"} />
      </View>
    </View>
  );
};

export default SubRender;

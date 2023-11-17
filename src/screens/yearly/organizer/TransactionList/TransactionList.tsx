import {View, Text, Dimensions,FlatList} from 'react-native';
import React, {FC, forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
// import styles from './style';
import SingleRender from '../../molecules/singleRender/SingleRender';
import Recycler from '../../../../component/recycler/Recycler';
import styles from './Style';

const {height,width} = Dimensions.get("window");

const TransactionList: FC<any> = (props, ref) => {
  const listRef = useRef();

  useImperativeHandle(ref, () => ({
    loadData: (data: any) => {
      listRef.current.loadDataFromApi(data)
    },
  }));

  const renderItem =(type:any,item:any,index:number)=>{
    return(
      <SingleRender data={item?.item}/>
    )
  }

  return (
    <View style={styles.container}>
      <Recycler
        horizontal={false}
        ref={listRef}
        rowRenderer={renderItem}
        height={height / 3}
        width={width}
        renderFooter={() => <View style={{height: 50}}></View>}
      />
    </View>
  );
};

export default forwardRef(TransactionList);

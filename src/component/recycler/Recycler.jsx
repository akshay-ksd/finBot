import { Dimensions, Text, View } from "react-native";
import React, { Component } from "react";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";

class Recycler extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 != r2;
      }),
      dataList: [],
    };

    //ref
    this.layoutProvider = new LayoutProvider(
      (i) => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        (dim.width = this.props.width),
          (dim.height = this.props.height);
      }
    );
  }

  loadDataFromApi = (data) => {
    if (data.length !== 0) {

      this.state.dataList.splice(0, this.state.dataList.length);
      for (let i in data) {

        this.state.dataList.push({
          type: "NORMAL",
          item: data[i],
        });
        if (i == data.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              r1 != r2;
            }).cloneWithRows(this.state.dataList),
          });

        }
      }
    }else{
      this.state.dataList.splice(0, this.state.dataList.length);
      this.setState({dataList:this.state.dataList});
    }
  };

  render() {
    const { dataList, list } = this.state;
    return (
      <View style={{height:"100%"}}>
        {dataList.length !== 0 && (
          <RecyclerListView
            dataProvider={list}
            rowRenderer={this.props.rowRenderer}
             renderFooter={this.props.renderFooter}
            layoutProvider={this.layoutProvider}
            forceNonDeterministicRendering={true}
            isHorizontal={this.props.horizontal}
          />
        )}
      </View>
    );
  }
}

export default Recycler;
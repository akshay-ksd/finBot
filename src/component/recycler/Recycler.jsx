import React, {Component} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {font} from '../../constants/theme/font';
class Recycler extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      dataList: [],
      load: false,
    };

    // ref
    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        (dim.width = this.props.width), (dim.height = this.props.height);
      },
    );

    // Create a new Animated.Value to control the opacity and left translation
    this.fadeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    // Start the fade-in animation when the component mounts
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease, // Use a suitable easing function
      useNativeDriver: false, // Set this to true if possible for performance
    }).start();
  }

  loadDataFromApi = data => {
    if (data.length !== 0) {
      this.state.dataList.splice(0, this.state.dataList.length);
      for (let i in data) {
        this.state.dataList.push({
          type: 'NORMAL',
          item: data[i],
        });
        if (i == data.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              return r1 !== r2;
            }).cloneWithRows(this.state.dataList),
            load: true,
          });
        }
      }
    } else {
      this.state.dataList.splice(0, this.state.dataList.length);
      this.setState({dataList: this.state.dataList, load: true});
    }
  };

  loadNewData = data => {
    const isHeaderCreated = this.state.dataList.find((x)=>x?.item?.title == data?.entryType)
    if (isHeaderCreated) {
      const index = this.state.dataList.findIndex(
        item => item.item?.title == data?.entryType,
      );
      if (index !== -1) {
        // Insert the new item after "Income"
        this.state.dataList.splice(index + 1, 0, {item: data, type: 'NORMAL'});
        const total = this.state.dataList.reduce((acc, item) => {
          if (item.item.entryType === data?.entryType) {
            // If it's an income item, add its amount to the accumulator
            acc += item.item.amount;
          }
          return acc;
        }, 0);
        this.state.dataList[index].item.value = total;
        this.setState({dataList: this.state.dataList});
        this.setState({
          list: new DataProvider((r1, r2) => {
            return r1 !== r2;
          }).cloneWithRows(this.state.dataList),
          load: true,
        });
      }
    }else{
      const mergedData = [
        {type: 'header', title: data.entryType, value: data.amount},
        data
      ];
      for (let i in mergedData) {
        this.state.dataList.push({
          type: 'NORMAL',
          item: mergedData[i],
        });
        if (i == mergedData.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              return r1 !== r2;
            }).cloneWithRows(this.state.dataList),
            load: true,
          });
        }
      }
    }
  };

  render() {
    const {dataList, list, load} = this.state;

    return (
      <View style={{height: '100%'}}>
        {load && (
          <>
            {dataList.length !== 0 ? (
              <RecyclerListView
                dataProvider={list}
                rowRenderer={this.props.rowRenderer}
                renderFooter={this.props.renderFooter}
                layoutProvider={this.layoutProvider}
                forceNonDeterministicRendering={true}
                isHorizontal={this.props.horizontal}
                extendedState={{state: dataList}}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* Apply the fade-in animation to the "No Data Found" text */}
                <Animated.View
                  style={{
                    opacity: this.fadeAnim, // Use opacity property for fade animation
                    transform: [
                      {
                        translateX: this.fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-100, 0], // Translate from left to right
                        }),
                      },
                    ],
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: font.nova,
                      color: 'grey',
                    }}>
                    No Data Found
                  </Text>
                </Animated.View>
              </View>
            )}
          </>
        )}
      </View>
    );
  }
}

export default Recycler;

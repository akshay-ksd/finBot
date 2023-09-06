import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect, useCallback, useRef, FC} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../../constants/theme/color';
import ModeSelection from '../../molecules/modeSelection/ModeSelection';
import { saveInvoiceToRealm } from '../../../../database/relemInstense';
import { generateRandomId } from '../../../../functions/uid';
interface Schema {
  invoiceDate: Date;
  refNumber: string;
  entryType: string;
  text: string;
  description: string;
  symbol: string;
  amount: number;
}

interface sc {
  addNewData:(data:Schema)=>void
}
const InputModel:FC<sc> = (props) => {
  const [model, setModel] = useState(false);
  const [textEmpty,setTextEmpty] = useState(false);
  const [amountEmpty,setAmountEmpty] = useState(false);

  const modelAnimation = new Animated.Value(0);
  const mode = useRef(1);

  const text = useRef<string>("");
  const amount = useRef<number>(0);
  const description = useRef<string>("");

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const AnimatedPress = Animated.createAnimatedComponent(Pressable);

  const openModel = () => {
    setModel(true);
    mode.current = 1
  };

  useEffect(() => {
    if (model) {
      // Animate the modelBox when it opens
      Animated.timing(modelAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Reset the animation value when the model closes
      modelAnimation.setValue(0);
    }
  }, [model]);

  const modelBoxStyle = {
    opacity: modelAnimation,
    transform: [
      {
        translateY: modelAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  const closeModel = () => {
    Animated.timing(modelAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Keyboard.dismiss();
      setModel(false);
    }, 300);
  };
  const modeChange = useCallback((m: number) =>{
    mode.current = m;
  },[])

  const onaChange =(type:string,value:string|number)=>{
    if(type == "t"){
      text.current = value;
    }

    if(type == "a"){
      amount.current = value;
    }

    if(type == "d"){
      description.current = value;
    }
  }

  const addData =()=>{
    if(text.current.length == 0 || amount.current == null){
      setTextEmpty(true)
      inputRef1.current.focus()
      return
    }

    setTextEmpty(false)
    if(amount.current == 0 || amount.current == null){
      setAmountEmpty(true)
      inputRef2.current.focus()
      return
    }
    setAmountEmpty(false)
    closeModel()

    const newInvoice = {
      invoiceDate: global.date,
      refNumber: generateRandomId(6),
      entryType: mode.current == 0? "Income":"Expense",
      text: text.current,
      description:description.current,
      symbol: "",
      amount: parseFloat(amount.current),
    }
    saveInvoiceToRealm(newInvoice);
    setTimeout(() => {
      props.addNewData(newInvoice)
    }, 800);
    text.current = "";
    description.current = "";
    amount.current = 0;
  }

  return (
    <View style={styles.container}>
      {model && (
        <View style={styles.parrentBox}>
          <Pressable style={styles.topComp} onPress={closeModel} />
          <Animated.View style={[styles.modelBox, modelBoxStyle]}>
            <ModeSelection modeChange={modeChange}/>

            <View style={styles.input}>
              <TextInput
                placeholder="Enter Text"
                style={[styles.textInput, {width: '40%',maxHeight:100,borderColor:textEmpty?"red":color.secondary}]}
                onChangeText={(t)=>onaChange("t",t)}
                multiline
                maxLength={500}
                ref={inputRef1}
                autoFocus
              />
              <TextInput
                placeholder="Enter Amount"
                style={[styles.textInput,{width:"30%",borderColor:amountEmpty?"red":color.secondary}]}
                keyboardType={'number-pad'}
                onChangeText={(t)=>onaChange("a",t)}
                maxLength={10}
                ref={inputRef2}
              />
              <TouchableOpacity style={styles?.doneButton} onPress={addData}>
                <Icon size={30} color={color.white} name={'checkmark'} />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Enter Description"
              style={[
                styles.textInput,
                {
                  width: '50%',
                  borderBottomWidth: 0,
                  alignSelf: 'flex-start',
                  marginLeft: '5%',
                },
              ]}
              onChangeText={(t)=>onaChange("d",t)}
            />
          </Animated.View>
        </View>
      )}
      {!model && (
        <View>
          <TouchableOpacity style={styles.addButton} onPress={openModel}>
            <Icon size={30} color={color.white} name={'add'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default InputModel;

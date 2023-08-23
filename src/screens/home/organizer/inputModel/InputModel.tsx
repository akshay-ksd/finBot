import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../../constants/theme/color';
import ModeSelection from '../../molecules/modeSelection/ModeSelection';


const InputModel = () => {
  const [model, setModel] = useState(false);
  const modelAnimation = new Animated.Value(0);
  const mode = useRef(0)

  const AnimatedPress = Animated.createAnimatedComponent(Pressable);

  const openModel = () => {
    setModel(true);
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
                style={[styles.textInput, {width: '40%'}]}
              />
              <TextInput
                placeholder="Enter Amount"
                style={styles.textInput}
                keyboardType={'number-pad'}
              />
              <TouchableOpacity style={styles?.doneButton} onPress={closeModel}>
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

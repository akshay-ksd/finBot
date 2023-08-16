import { View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { color } from '../../../../constants/theme/color'

const SingleRender = (props: any) => {
    const { item } = props
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(20)).current;
    const selectIcon = useRef(new Animated.Value(0)).current;



    useEffect(() => {
        startAnimation();
    }, []);

    useEffect(()=>{
        if(item?.item?.isSelected){
            Animated.parallel([
                Animated.timing(selectIcon, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        }else{
            Animated.parallel([
                Animated.timing(selectIcon, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        }
    },[item?.item?.isSelected])

    const startAnimation = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    };
    return (
        <View style={[styles.container]}>
            <Animated.View style={[styles.box, {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
            }]}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <Icons name={"chatbox-ellipses-outline"} size={20} color={color.primary} />
                    </View>
                    <View style={{width:"30%"}}>
                       <Text style={styles?.address}>{item?.item?.address}</Text> 
                    </View>
                    

                </View>
                <TouchableOpacity style={styles.message} onPress={() => props.selectMessage(props.index)}>
                    <Text style={styles?.body}>{item?.item?.body}</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.selectIcon,{opacity: selectIcon}]}>
                        <Icons name={"checkmark-circle-outline"} size={20} color={color.secondary} />
                </Animated.View>
            </Animated.View>
        </View>
    )
}

export default SingleRender
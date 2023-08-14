import { StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";
import { font } from "../../../../constants/theme/font";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0,
    },
    nextButton:{
        width:"30%",
        height:"60%",
        backgroundColor:color.primary,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    },
    nextText:{
        fontFamily:font.nova,
        fontSize:18,
        color:color.white
    }
});

export default styles;
import { StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";
import { font } from "../../../../constants/theme/font";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"7%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0
    },
    box:{
        width:"60%",
        height:"80%",
        backgroundColor:color.secondary,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    nextButton:{
        fontSize:16,
        color:color.white,
        fontFamily:font.nova
    }
});

export default styles;
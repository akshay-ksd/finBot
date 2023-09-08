import { StyleSheet } from "react-native";
import { font } from "../../../../constants/theme/font";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"5%",
        paddingHorizontal:"5%",
        marginVertical:"2%"
    },
    box:{
        width:"100%",
        height:"55%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        fontSize:14,
        fontFamily:font.nova,
        color:color.greyText
    }
});

export default styles
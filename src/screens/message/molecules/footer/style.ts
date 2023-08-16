import { StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";
import { font } from "../../../../constants/theme/font";
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"15%",
        elevation:5,
        backgroundColor:color.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:"5%",
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:"#d3d3d3"
    },
    title:{
        fontSize:16,
        fontFamily: font.nova,
        // lineHeight:27,
        color:color.greyText,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:10,
        marginTop:"2%",
        fontFamily: font.nova,
        color:color.grey,
        lineHeight:15,
        // fontWeight:"800"
    }
});

export default styles
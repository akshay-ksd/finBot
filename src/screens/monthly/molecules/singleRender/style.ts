import { StyleSheet } from "react-native";
import { font } from "../../../../constants/theme/font";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        // height:200,
    },
    box:{
        width:"100%",
        // height:"100%",
        backgroundColor:color.white
    },
    header:{
        width:"100%",
        height:70,
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:color.white
    },
    dateText:{
        fontSize:16,
        fontWeight:"800",
        fontFamily:font.nova,
        color:color.primary
    },
    transactionType:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    subView:{
        width:"50%",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:14,
        fontFamily:font.nova,
        color:color.greyText
    }
});

export default styles
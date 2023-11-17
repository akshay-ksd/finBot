import { Dimensions, StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";
import { font } from "../../../../constants/theme/font";
const {height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:"2%",
        width:"100%",
        zIndex:100,
    },
    addButton:{
        width:60,
        height:60,
        borderRadius:60,
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        marginRight:"5%"
    },
    modelBox:{
        width:"100%",
        height:"30%",
        backgroundColor:color.lightGray,
        borderRadius:5,
        // borderWidth:0.5,
        borderColor:color.primary,
        elevation:10,
        alignItems:"center"
    },
    headers:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:"2%"
    },
    button:{
        width:"35%",
        height: 40,
        backgroundColor:color.white,
        // borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        // borderWidth:0.5,
        // elevation:1
    },
    label:{
        fontSize:16,
        fontFamily:font.nova,
        fontWeight:"700"
    },
    input:{
        width:"100%",
        height:100,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
      textInput:{
        fontSize:18,
        fontFamily:font.nova,
        color:color.greyText,
        borderBottomWidth:1,
        borderColor:color.secondary,
        height:50
    },
    doneButton:{
        width:48,
        height:48,
        borderRadius:60,
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"center",
        elevation:5
    },
    parrentBox:{
        height:height,
        width:"100%",
        justifyContent:"flex-end",
    },
    topComp:{
        height:"70%",
        width:"100%",
        backgroundColor:'rgba(58,58,58,0.1)'
    }
});

export default styles
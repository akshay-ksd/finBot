import { Dimensions, StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";
import { font } from "../../../../constants/theme/font";

const {width,height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        padding:"2%"
    },
    box:{
        width:"95%",
        paddingHorizontal:"3%",
        backgroundColor:color.backgroundColor,
        borderRadius:10,
        elevation:0.5
    },
    header:{
        width:"100%",
        paddingVertical:"4%",
        flexDirection:"row",
        alignItems:"center",
    },
    address:{
        fontSize:14,
        fontFamily:font.nova,
        marginLeft:"2%",
        color:color.grey
    },
    icon:{
        width:30,
    },
    message:{
        paddingHorizontal:"5%",
        paddingBottom:"5%"
    },
    body:{
        fontSize:16,
        color:color.greyText,
        fontFamily:font.nova,
        lineHeight:20,
        left:"6%"
    },
    selectIcon:{
       position:"absolute",
       left:"2%",
       right:0,
       top:"50%",
       width:"10%"
    }
});

export default styles
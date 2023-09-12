import { StyleSheet } from "react-native";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    content:{
        width:"100%",
        flexDirection:"row",
    },
    itemParent:{
        width:"50%",
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    itemContainer:{
        width:"98%",
        flexDirection:"row",
        alignItems:"center",
        height:50,
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        backgroundColor:color.lightGray,
        margin:2,
        borderRadius:2
    },
});

export default styles
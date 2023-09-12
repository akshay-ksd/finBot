import { StyleSheet } from "react-native";
import { font } from "../../../../constants/theme/font";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:"93%",
        backgroundColor:color.white,
        borderRadius:10
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
        justifyContent:"space-evenly",
        marginBottom:10
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
    content:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:"2%",
    },
    itemParent:{
        width:"50%",
        height:50,
    }
});

export default styles
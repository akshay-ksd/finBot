import { StyleSheet } from "react-native";
import { color } from "../../constants/theme/color";

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width:"100%",
        backgroundColor: color.lightGray
    },
    nextButton:{
        width:"100%",
        height:"7%",
        position:"absolute",
        bottom:0
    }
});

export default styles;
import { StyleSheet } from "react-native";
import { font } from "../../../../constants/theme/font";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        paddingRight: "5%"
    },
    details: {
        width: "60%",
        height: "90%",
        justifyContent: "space-evenly",
        paddingLeft: "5%",
    },
    title: {
        fontSize: 14,
        fontFamily: font.nova,
        color: color.greyText,
        fontWeight: "700",
        textAlign: "left"
    }

});

export default styles
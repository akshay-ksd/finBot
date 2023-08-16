import { StyleSheet } from "react-native";
import { font } from "../../../../constants/theme/font";
import { color } from "../../../../constants/theme/color";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 30
    },
    box: {
        width: "95%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 5
    },
    title: {
        fontSize: 16,
        fontFamily: font.nova,
        color: color.greyText
    }
});

export default styles
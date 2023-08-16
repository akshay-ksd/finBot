import { StyleSheet } from "react-native";
import { color } from "../../../constants/theme/color";
import { font } from "../../../constants/theme/font";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: "94%",
        height: "80%",
        backgroundColor: color.white,
        borderRadius: 5,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        padding: 8
    },
    dateBox: {
        width: 28,
        height: 28,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: color.grey
    },
    dateText: {
        fontSize: 16,
        color: color.primary,
        fontFamily: font.nova,
        fontWeight: "800"
    },
    dateDetails: {
        flexDirection: "row",
        alignItems: "center"
    },
    details: {
        marginLeft: "10%"
    },
    title: {
        fontSize: 14,
        fontFamily: font.nova,
        color: color.secondary,
        fontWeight: "800"
    },
    subTitl: {
        fontFamily: font.nova,
        fontSize: 10,
        color: color.greyText
    }
});

export default styles
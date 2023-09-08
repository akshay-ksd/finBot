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
        padding: 8,
        paddingHorizontal:"3%"
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
        marginLeft: "10%",
        width:"43%"
    },
    title: {
        fontSize: 16,
        fontFamily: font.nova,
        color: color.secondary,
        fontWeight: "800"
    }
});

export default styles
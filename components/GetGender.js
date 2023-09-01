import { StyleSheet, Text, View, Dimensions } from "react-native";
import CustomButton from "./CustomButton";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    return (
        <View style={styles.buttons}>
            <CustomButton title={"Male"} WIDTH={WIDTH} />
            <CustomButton title={"Female"} WIDTH={WIDTH} />
            <CustomButton title={"Either"} WIDTH={WIDTH} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: WIDTH / 8,

        width: WIDTH / 1.05,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});

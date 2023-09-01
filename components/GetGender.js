import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function GetGender({ Status, setStatus }) {
    const [Male, setMale] = useState("#FFFFFF");
    const [MaleText, setMaleText] = useState("#000000");
    const [Female, setFemale] = useState("#FFFFFF");
    const [FemaleText, setFemaleText] = useState("#000000");
    const [Either, setEither] = useState("#FFFFFF");
    const [EitherText, setEitherText] = useState("#000000");

    function checkGender(gender) {
        if (gender === "male") {
            setMale("#4BAE4F");
            setMaleText("#FFFFFF");
            setStatus("Male");
            setFemale("#FFFFFF");
            setFemaleText("#000000");
            setEither("#FFFFFF");
            setEitherText("#000000");
        } else if (gender === "female") {
            setFemale("#4BAE4F");
            setFemaleText("#FFFFFF");
            setStatus("Female");
            setMale("#FFFFFF");
            setMaleText("#000000");
            setEither("#FFFFFF");
            setEitherText("#000000");
        } else if (gender === "either") {
            setEither("#4BAE4F");
            setEitherText("#FFFFFF");
            setStatus("Either");
            ``;
            setFemale("#FFFFFF");
            setFemaleText("#000000");
            setMale("#FFFFFF");
            setMaleText("#000000");
        }
    }

    return (
        <View style={styles.buttons}>
            <TouchableOpacity style={[styles.check, { backgroundColor: Male }]} onPress={() => checkGender("male")}>
                <Text style={{ fontSize: WIDTH / 25, color: MaleText }}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.check, { backgroundColor: Female }]} onPress={() => checkGender("female")}>
                <Text style={{ fontSize: WIDTH / 25, color: FemaleText }}>Female</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.check, { backgroundColor: Either }]} onPress={() => checkGender("either")}>
                <Text style={{ fontSize: WIDTH / 25, color: EitherText }}>Either</Text>
            </TouchableOpacity>
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

    check: {
        width: WIDTH / 4,
        height: WIDTH / 8,

        shadowColor: "rgba(0, 0, 0, 0.35)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 20,
        padding: 16,
        borderRadius: WIDTH / 30,

        alignItems: "center",
        justifyContent: "center",
    },
});

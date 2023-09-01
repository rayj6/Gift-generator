import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import GetGender from "./components/GetGender";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.bodyContainer}>
                <Text style={styles.title}>PLEASE PROVIDE</Text>
                <Text style={styles.title}>RECIPENT INFORMATION</Text>

                <View style={{ marginTop: WIDTH / 8, alignItems: "center" }}>
                    <GetGender />
                    <View style={{ marginTop: WIDTH / 10 }} />
                    <TextInput style={styles.textInput} placeholderTextColor={"#525252"} placeholder="Enter age" />
                    <TextInput style={styles.textInput} placeholderTextColor={"#525252"} placeholder="Enter personality" />
                    <TextInput style={styles.textInput} placeholderTextColor={"#525252"} placeholder="Enter number you would spend" />
                </View>

                <TouchableOpacity style={styles.submit}>
                    <Text style={{ fontSize: WIDTH / 20, fontWeight: "800", color: "white" }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    bodyContainer: {
        width: WIDTH,
        height: HEIGHT,

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: WIDTH / 18,
        fontWeight: "700",
    },
    textInput: {
        marginTop: WIDTH / 15,
        padding: WIDTH / 50,

        width: WIDTH / 1.6,
        height: WIDTH / 10,

        borderWidth: 1,
        borderColor: "#525252",
        borderRadius: WIDTH / 40,
    },

    submit: {
        marginTop: WIDTH / 5,
        width: WIDTH / 1.2,
        height: WIDTH / 8,

        backgroundColor: "#4BAE4F",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: WIDTH / 30,
    },
});

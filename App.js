import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GetGender from "./components/GetGender";
import { askGPT3 } from "./components/AskAndAnswer";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [personality, setPersonality] = useState("");
    const [expense, setExpense] = useState("");

    function Ask() {
        if (gender !== "" && age !== "" && personality !== "" && expense !== "") {
            console.log("Submited");

            const question = `which gift should I give to my friend is ${gender} in the age of ${age}, with the price is ${expense}, my friend personality is ${personality}.`;
            askGPT3(question)
                .then((answer) => {
                    if (answer) {
                        console.log("Answer:", answer);
                    } else {
                        console.log("Unable to get an answer.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            alert("Please check your information!");
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
                keyboardShouldPersistTaps="handled" // Prevents dismissing keyboard on tap
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>PLEASE PROVIDE</Text>
                    <Text style={styles.title}>RECIPENT INFORMATION</Text>

                    <View style={{ marginTop: WIDTH / 8, alignItems: "center" }}>
                        <GetGender Status={gender} setStatus={setGender} />

                        <View style={{ marginTop: WIDTH / 10 }} />

                        <TextInput
                            style={styles.textInput}
                            value={age}
                            onChangeText={(text) => setAge(text)}
                            placeholderTextColor={"#525252"}
                            placeholder="Enter age"
                        />
                        <TextInput
                            style={styles.textInput}
                            value={personality}
                            onChangeText={(text) => setPersonality(text)}
                            placeholderTextColor={"#525252"}
                            placeholder="Enter personality"
                        />
                        <TextInput
                            style={styles.textInput}
                            value={expense}
                            onChangeText={(text) => setExpense(text)}
                            placeholderTextColor={"#525252"}
                            placeholder="Enter number you would spend"
                        />
                    </View>

                    <TouchableOpacity style={styles.submit} onPress={() => Ask()}>
                        <Text style={{ fontSize: WIDTH / 20, fontWeight: "800", color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
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

import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, WIDTH }) {
    return (
        <TouchableOpacity
            style={{
                width: WIDTH / 4,
                height: WIDTH / 8,

                backgroundColor: "#FFFFFF",
                shadowColor: "rgba(0, 0, 0, 0.35)",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
                shadowRadius: 20,
                padding: 16,
                borderRadius: WIDTH / 30,

                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: WIDTH / 25 }}>{title}</Text>
        </TouchableOpacity>
    );
}

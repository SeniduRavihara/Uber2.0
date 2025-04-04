import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // Optional: Set background color
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    countText: {
        color: "white",
        fontSize: 20,
        marginHorizontal: 10,
    },
});

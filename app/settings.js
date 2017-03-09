/**
 * Created by binhlt on 08/03/2017.
 */

import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class Settings extends Component {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => console.log("xxx")}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Scene transition</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.title}>Tip percentages</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey"
    },
    title: {
        color: "black",
        fontSize: 16,
        padding: 20,
        paddingLeft: 30
    }
});

module.exports = Settings;
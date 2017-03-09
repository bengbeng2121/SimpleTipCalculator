/**
 * Created by binhlt on 06/03/2017.
 */

import React, {Component} from "react";
import {View, Text, Picker, AsyncStorage, StyleSheet} from "react-native";

export default class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sceneTransition: "FloatFromRight"
        };
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Scene Transitions</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.sceneTransition}
                        onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
                        <Picker.Item label="FloatFromRight" value="FloatFromRight"/>
                        <Picker.Item label="FloatFromLeft" value="FloatFromLeft"/>
                        <Picker.Item label="FloatFromBottom" value="FloatFromBottom"/>
                        <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid"/>
                        <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft"/>
                        <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump"/>
                        <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight"/>
                    </Picker>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Tip percentages</Text>
                </View>
            </View>
        );
    }

    setSelectSceneTransition(scene) {
        try {
            this.setSceneTransition(scene);
        } catch (error) {
            console.log("Oop!! Something went wrong !!!" + error);
        }
    }

    async setSceneTransition(scene) {
        try {
            await AsyncStorage.setItem('SCENE_SELECTED', scene);
            this.setState({sceneTransition: scene});
        } catch (error) {
            console.log("Hmm, something went wrong when set data..." + error);
        }
    }

    async getSceneTransition() {
        try {
            let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
            this.setState({sceneTransition: sceneTransitionValue});
        } catch (error) {
            console.log("Hmm, something went wrong when get data..." + error);
        }
    }

    componentDidMount() {
        this.getSceneTransition();
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
    },
    title: {
        color: "black",
        fontSize: 16,
        padding: 20,
        paddingLeft: 30,
    },
    picker: {
        marginLeft: 30,
        marginTop: -30,
        color: "lightgrey",
    },
    content: {
        color: "lightgrey",
        fontSize: 12,
        paddingTop: 5,
        paddingLeft: 30,
        paddingBottom: 20,
        width: 100,
        height: 40,
    }
});

module.exports = Setting;
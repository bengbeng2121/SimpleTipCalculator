/**
 * Created by binhlt on 06/03/2017.
 */

import React, {Component} from "react";
import {
    View,
    Text,
    Picker,
    AsyncStorage,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from "react-native";

export default class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sceneTransition: "FloatFromRight",
            modalVisible: false
        };
    }

    render() {
        return (
            <View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Scene Transitions</Text>
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
                <TouchableOpacity onPress={() => {this.setState({modalVisible: true})}}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>Tip percentages</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this.setState({modalVisible: false})}}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalInnerContainer}>
                            <Text>day la popup</Text>
                        </View>
                    </View>
                </Modal>
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
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
    },
    itemTitle: {
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalInnerContainer: {
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
        backgroundColor: '#fff',
    }
});

module.exports = Setting;
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, TextInput} from "react-native";
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class TipCal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            segmentSelectedIndex: 0,
            billAmount: 0,
            tipAmount: 0,
            result: 0
        };
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Tip Calculator</Text>
                </View>

                <View>
                    <Text>Bill amount</Text>
                    <TextInput
                        onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}/>
                </View>

                <View>
                    <Text>Tip amount: 0</Text>
                </View>

                <View>
                    <SegmentedControlTab
                        values={this.tipValues()}
                        onTabPress={index => this.handleSegmentChange(index)}
                    />
                </View>

                <View>
                    <Text>Bill amount: {this.state.billAmount}</Text>
                    <Text>Tip amount: {this.state.tipAmount}</Text>
                    <Text>Percent: {this.tipValues()[this.state.segmentSelectedIndex]}</Text>
                </View>

                <View>
                    <Text>Result: {this.state.result}</Text>
                </View>
            </View>
        );
    }

    tipValues() {
        return ["10%", "15%", "50%"];
    }

    handleSegmentChange(index) {
        this.setState({segmentSelectedIndex: index}, this.calculateTip);
    }

    handleBillAmountChange(billAmount) {
        this.setState({billAmount: billAmount}, this.calculateTip);
    }

    calculateTip() {
        let percent = parseFloat(this.tipValues()[this.state.segmentSelectedIndex]) / 100;
        let billAmount = parseFloat(this.state.billAmount);
        this.setState({
            tipAmount: billAmount * percent,
            result: billAmount + billAmount * percent
        });
    }
}

module.exports = TipCal;
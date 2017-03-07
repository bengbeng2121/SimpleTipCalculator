import React, {Component} from "react";
import {StyleSheet, Text, View, TextInput, Button} from "react-native";
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
            <View style={{padding: 10}}>
                <View>
                    <Text style={styles.title}>Tip Calculator</Text>
                </View>

                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.label}>Bill amount: </Text>
                    </View>
                    <TextInput
                        onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
                        keyboardType='numeric'
                        maxLength={10}
                        placeholder="0"
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1}}/>
                </View>

                <View style={{paddingBottom: 10}}>
                    <Text style={styles.label}>Tip amount: {this.state.tipAmount}</Text>
                </View>

                <View>
                    <SegmentedControlTab
                        values={this.tipValues()}
                        onTabPress={index => this.handleSegmentChange(index)}
                    />
                </View>

                <View>
                    <View style={styles.result}>
                        <Text>Bill amount: </Text>
                        <Text>{this.state.billAmount}</Text>
                    </View>
                    <View style={styles.result}>
                        <Text>Tip amount: </Text>
                        <Text>{this.state.tipAmount}</Text>
                    </View>
                    <View style={styles.result}>
                        <Text>Percent: </Text>
                        <Text>{this.tipValues()[this.state.segmentSelectedIndex]}</Text>
                    </View>
                </View>

                <View style={[styles.result, {paddingTop: 10}]}>
                    <Text style={{fontWeight: 'bold'}}>Result: </Text>
                    <Text style={{fontWeight: 'bold'}}>{this.state.result}</Text>
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
        this.setState({billAmount: billAmount || 0}, this.calculateTip);
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

const styles = StyleSheet.create({
    title: {
        color: 'cornflowerblue',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10
    },
    label: {
        fontSize: 16
    },
    result: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

module.exports = TipCal;
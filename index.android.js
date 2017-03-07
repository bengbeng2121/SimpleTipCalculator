/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Calculator from './app/calculator';
import Setting from './app/setting';
import PowerRanger from './app/powerranger';

export default class SimpleTipCalculator extends Component {
    render() {
        return (
            /***********************************
            <Navigator
                initialRoute={{id: 'CalculatorPage', title: 'Tip Calculator Page'}}
                renderScene={(route, navigator)=> {
                    switch (route.id) {
                        case 'CalculatorPage':
                            return <Calculator navigator={navigator}/>;
                        case 'SettingPage':
                            return <Setting navigator={navigator}/>;
                    }
                }}
            />
            ***********************************/
            <PowerRanger/>
        );
    }
}

AppRegistry.registerComponent('SimpleTipCalculator', () => SimpleTipCalculator);

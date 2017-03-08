/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import PowerRanger from './app/powerranger';

export default class SimpleTipCalculator extends Component {
    render() {
        return (
            <PowerRanger/>
        );
    }
}

AppRegistry.registerComponent('SimpleTipCalculator', () => SimpleTipCalculator);

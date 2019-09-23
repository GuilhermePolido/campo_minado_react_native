import React, {Component} from 'react';
import {View, Text} from 'react-native';
import params from './src/params.js';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Teste {params.getRowsAmount()} {params.getColumnsAmount()}
                </Text>
            </View>
        );
    }
}

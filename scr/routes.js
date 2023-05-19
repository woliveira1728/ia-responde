import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

import ScreenA from './screens/screenia1';
import UselessTextInput from './screens/screenia2';

export default function routes (){
    return (
        <Navigator>
            <Screen 
                name='screenia1'
                component={ ScreenA }
            />
            <Screen 
                name='screenia2'
                component={ UselessTextInput }
            />
        </Navigator>
    )
}

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { routes } from './routes'

export function Routes(){
    return (
        <NavigationContainer>
            <routes />
        </NavigationContainer>
    )
}
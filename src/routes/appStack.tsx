//Importacoes do react
import React from 'react';

//Importacoes do navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importacoes das telas
import Landing from '../pages/Landing';
import Giveclass from '../pages/Give-classes';
import tabsEstudar from './appTabs';

const { Navigator, Screen}  = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="giveclass" component={Giveclass} />
                <Screen name="tabsEstudar" component={tabsEstudar} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
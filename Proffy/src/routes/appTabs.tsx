//Importacoes essensciais do react
import React  from 'react';

//Imports do Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Imports das paginas
import ProfsList from '../pages/ProfsList/';
import Favorite from '../pages/FavoriteProfs/';

//Import dos icones
import {Ionicons} from '@expo/vector-icons';


const {Navigator, Screen} = createBottomTabNavigator();
function tabsEstudar(){
    return(
        <Navigator
            tabBarOptions={{
                    style:{
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle:{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',


                     },
                        iconStyle: {
                        flex:0,
                        width: 20,
                        height:20,

                    },
                        labelStyle:{
                        fontFamily: 'Archivo_700Bold',
                        fontSize: 13,
                        marginLeft: 16,   
                    },
                        inactiveBackgroundColor: '#fafafc',
                        activeBackgroundColor: 'ebebf5',
                        inactiveTintColor: '#c1bccc',
                        activeTintColor: '#8257e5',


                }}
            >
            <Screen 
            name="ProfsList" 
            component={ProfsList} 
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({ color, size}) => {
                    return(
                    <Ionicons name="ios-easel" size={size} color={color} />
                )
            }
            }}
            /> 

            <Screen 
            name="ProfsFavorite" 
            component={Favorite} 
            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size}) => {
                    return(
                    <Ionicons name="ios-heart" size={size} color={color} />
                )
            }
            }}
            />
        </Navigator>   
    );
}

export default tabsEstudar;
//Importacoes essenciais do React Native
import React from 'react';

//Importacoes de elementos e tags
import {View, Text, ImageBackground, TextInput} from 'react-native';

//Importacoes de folhas de estilos e recursos
import estilos from './styles';
import backgroundDarAulas from '../../assets/images/give-classes-background.png';

//Importacoes do navigation
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClass(){
    const {goBack} = useNavigation();

    function voltartela(){
        goBack();
    }

    return (
        <View style={estilos.container}>
            <ImageBackground 
            source={backgroundDarAulas} 
            style={estilos.fundo}
            resizeMode="contain"
            >
            <Text style={estilos.titulo}>
                Quer ser um Proffy?
            </Text>
            <Text style={estilos.descricao}>
                Para comecar, voce precisa se cadastrar como professor na nossa plataforma web.
            </Text>
            </ImageBackground>

            <RectButton onPress={voltartela} style={estilos.serProf}>
                <Text style={estilos.serProfTexto}>
                    Tudo Bem
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClass;
//Imports Nativos para o funcionamento do React Native
import React from 'react';
import { View, Image, Text, TouchableOpacity  } from 'react-native';

//Imports de estilizacao
import estilos from './styles';

//Imports de Componentes e imagens
import landingimg from '../../assets/images/landing.png';
import iconeEstudar from '../../assets/images/icons/study.png';
import iconeDarAula from '../../assets/images/icons/give-classes.png';
import iconeCoracao from '../../assets/images/icons/heart.png';

//Importacoes de navegacoes
import {useNavigation, NavigationHelpersContext} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';


function Landing() {
    const navigation = useNavigation();

    function navegarparapaginadaraulas(){
        navigation.navigate('giveclass');
    }

    function navegarParaTabs(){
        navigation.navigate('tabsEstudar');
    }
    return(
        <View style={estilos.container}>
            <Image source={landingimg} style={estilos.banner}/>
            <Text style={estilos.title}>
                Seja bem-vindo, {'\n'}
                <Text style={estilos.tituloEscuro}>O que deseja fazer?</Text>
            </Text>
        
            <View style={estilos.containerBotoes}>
                <RectButton 
                onPress={navegarParaTabs} 
                style={[estilos.botao, estilos.botaoPrimario]}
                >
                    <Image source={iconeEstudar}/>
                    <Text style={estilos.textobotao}>Estudar</Text>
                </RectButton>

                <RectButton 
                onPress={navegarparapaginadaraulas} 
                style={[estilos.botao, estilos.botaoSecondario]}
                >
                    <Image source={iconeDarAula}/>
                    <Text style={estilos.textobotao}>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={estilos.totalConexoes}>
                Total de 285 conexoes ja realizadas! {''}
                <Image source={iconeCoracao} />
            </Text>
        </View>
    );
}
export default Landing;
//Imports de componentes, folhas e estrutura do react
import React from 'react';
import {View, Text, Image,} from 'react-native';
import estilos from './styles';
import { RectButton } from 'react-native-gesture-handler';


import FavoritarBotaoIcone from '../../assets/images/icons/heart-outline.png';
import DesfavoritarBotaoIcone from '../../assets/images/icons/unfavorite.png';
import WhatsappBotaoIcone from '../../assets/images/icons/whatsapp.png';
//Imports de imagens e dados.

function TeacherItem (){
    return(
        <View style={estilos.container}>
            <View style={estilos.profile}>
                <Image 
                source={{uri:'https://www.github.com/andersonarorjdev.png'}} 
                style={estilos.avatar}
                />
                <View style={estilos.InfoPerfil}>
                    <Text style={estilos.NomeProfessor}>
                        Nome do professor
                    </Text>
                    <Text style={estilos.Materia}>
                        Materia 
                    </Text>
                </View>   
            </View>
            <Text style={estilos.biografia}>
            O Professor tem uma missão muito importante: 
            a de ensinar. Cabe a este profissional a capacitação 
            de aprendizado de crianças, jovens e adultos. {'\n'}{'\n'}
            Além de passar o conhecimento da matéria, o professor 
            tem como tarefa avaliar os alunos por meio das correções
             de provas ou exercícios, e criar novos conteúdos. 
            </Text>
            <View style={estilos.Rodape}>
                <Text style={estilos.PrecoTitulo}>
                    Preco/hora{'   '} 
                    <Text style={estilos.PrecoValor}>R$ 50,00</Text>
                </Text>

                <View style={estilos.RodapePreco}>
                    <RectButton style={[estilos.BotaoFavorito, estilos.favoritado]}>
                        {/* <Image source={FavoritarBotaoIcone} /> */}
                        <Image source={DesfavoritarBotaoIcone} />
                    </RectButton>

                    <RectButton style={estilos.BotaoContato}>
                        <Image source={WhatsappBotaoIcone} />
                        <Text style={estilos.BotaoContatotexto}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
export default TeacherItem;
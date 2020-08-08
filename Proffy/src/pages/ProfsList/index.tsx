//Importacoes essenciais
import React, { useState } from 'react';

//importacoes de elementos
import {View, Text, TextInput} from 'react-native';
//importacoes de folhas de estilos
import estilos from './style';
import Pageheader from '../../Components/Pageheader';
import TeacherItem from '../../Components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';


function profList(){
    const [Filtrovisivel, Definefiltrovisivel] = useState(false);

    function escondefiltro(){
        Definefiltrovisivel(!Filtrovisivel);
    }

    return(
       <View style={estilos.container}>
        <Pageheader 
        title="Proffys Disponiveis"
        headerRight={(
            <BorderlessButton onPress={escondefiltro}>
                <Feather name="filter" size={25} color="#FFF" />
            </BorderlessButton>
        )}
        >
        {Filtrovisivel && (
            <View style={estilos.FormPesquisa}>
                <Text style={estilos.titulo}>Materia</Text>
                <TextInput 
                    style={estilos.campo}
                    placeholder="Qual a materia"
                    placeholderTextColor="#c1bccc"
                />
            
                <View style={estilos.CampoGrupo}>
                    <View style={estilos.campoBlock}>
                        <Text style={estilos.titulo}>Dia da Semana</Text>
                        <TextInput 
                            style={estilos.campo}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        /> 
                    </View>
                    <View style={estilos.campoBlock}>
                        <Text style={estilos.titulo}>Horario</Text>
                        <TextInput 
                            style={estilos.campo}
                            placeholder="Qual horario?"
                            placeholderTextColor="#c1bccc"                        
                            /> 
                    </View>
                </View>
                <RectButton style={estilos.botaofiltrar}>
                    <Text style={estilos.botaofiltrartexto}>Filtrar</Text>
                </RectButton>
            </View>
        )}
        </Pageheader>

        <ScrollView 
        style={estilos.ListaProfs} 
        contentContainerStyle={{
           paddingHorizontal: 16,
           paddingBottom: 16, 
        }}
        >
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </ScrollView>
       </View>
    );
}
export default profList;
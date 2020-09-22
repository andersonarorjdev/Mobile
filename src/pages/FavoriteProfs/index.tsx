//Importacoes essencias do React-native
import React from 'react';

//Importacoes de elementos e folhas de esilos
import estilos from './styles';
import {View, Text} from 'react-native';
import Pageheader from '../../Components/Pageheader';
import TeacherItem from '../../Components/TeacherItem';
import {ScrollView} from 'react-native-gesture-handler';

function FavoriteProf(){
    return(
        <View style={estilos.container}>
        <Pageheader 
        title="Meus Proffys favoritos"/>
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
    )
}
export default FavoriteProf;
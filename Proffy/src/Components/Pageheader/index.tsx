import React, {ReactNode} from 'react';
import {View, Image, Text} from 'react-native';
import estilos from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';

import IconBack from '../../assets/images/icons/back.png';
import IconLogo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title: string;
    headerRight: ReactNode;
}

const Pageheader: React.FC<PageHeaderProps> = ({title, headerRight, children}) => {
    const {navigate} = useNavigation();
    function voltarPaginaAnterior(){
        navigate('Landing');
    }
        return(
            <View style={estilos.container}>
                <View style={estilos.topBar}>
                    <BorderlessButton onPress={voltarPaginaAnterior}>
                        <Image source={IconBack} resizeMode="contain" />
                    </BorderlessButton>
                    <Image source={IconLogo} resizeMode="contain"/>
                </View>
                <View style={estilos.headeright}>
                    <Text style={estilos.texto}>{title}</Text>
                    {headerRight}
                </View>
                {children}
            </View>
        )
}

export default Pageheader;

import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({

    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,

    },

    banner: {
        width: '100%',
        resizeMode: 'contain', 
    }, 

    title: {
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
        marginTop: 80,
        fontFamily: 'Poppins_400Regular'
    },

    tituloEscuro:{
        fontFamily: 'Poppins_600SemiBold',
    },

    containerBotoes:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    botao:{
        height:150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    textobotao: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        fontSize: 20,
    },

    botaoPrimario: {
    backgroundColor: '#9871f5'
    },

    botaoSecondario: {
        backgroundColor: '#04d361',
    },

    totalConexoes: {
        fontFamily :'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40 
    },
})

export default estilos;
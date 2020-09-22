import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,

    },

    fundo: {
        flex: 1,
        justifyContent: 'center',
        
    },

    titulo:{
        fontFamily:'Archivo_700Bold',
        color: 'white',
        fontSize: 32,
        lineHeight: 37,
        maxHeight: 180,
    },

    descricao:{
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    serProf:{
        marginVertical:40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    serProfTexto:{
        color: 'white',
        fontSize: 16,
        fontFamily:'Archivo_700Bold',
    }
})

export default estilos;
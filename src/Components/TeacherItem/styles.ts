import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
       width: 64,
       height: 64,
       borderRadius: 32,
       backgroundColor: '#eee', 
    },

    InfoPerfil: {
        marginLeft: 16,
    },

    NomeProfessor:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    Materia: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6186',
        fontSize: 12,
        marginTop: 4,
    },

    biografia:{
        marginHorizontal:24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 27,
        color: '#6a6180',


    },

    Rodape:{
         backgroundColor: '#fafafc',
         padding: 24,
         alignItems: 'center', 
         marginTop: 24,
    },

    PrecoTitulo:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    PrecoValor: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    RodapePreco:{
        flexDirection: 'row',
        marginTop: 16,
    },

    BotaoFavorito:{
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8,

    },

    BotaoContato:{
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8,
    },

    BotaoContatotexto:{
        color: 'white',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    },

    favoritado:{
        backgroundColor: '#e33d3d',
    },



})
export default estilos;
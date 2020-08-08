//Sempre transformar o arquivo TS em uma stylesheet
import{StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f7',
     
    },

    ListaProfs:{
        marginTop: -35, 
    },

    FormPesquisa:{
        marginBottom: 8,
    },

    campo:{
        backgroundColor:'white',
        height: 54,
        borderRadius:8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    CampoGrupo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    campoBlock:{
        width: '48%'
    },

    titulo:{
        color:'#d4c2ff',
        fontFamily: 'Poppins_400Regular',    
    },
    
    botaofiltrar:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaofiltrartexto:{

    },

});

export default estilos;

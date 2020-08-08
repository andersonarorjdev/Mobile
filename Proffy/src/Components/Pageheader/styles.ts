import{StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor: '#8257e5', 
    },
    topBar:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    texto:{
        fontFamily:'Archivo_700Bold',
        color:'white',
        fontSize:24,
        lineHeight:32,
        maxWidth: 160,
        marginVertical: 40,
    },
    headeright:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default estilos;
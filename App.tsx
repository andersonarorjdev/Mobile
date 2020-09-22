//Importando Funcionalidades nativas do React-Native
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';

//Importacao de componentes e de estruturas
import { StyleSheet, Text, View } from 'react-native';


//Importacao de estilos
import Landing from './src/pages/Landing';
import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

//Importacoes das rotas
import AppStack from './src/routes/appStack';


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded){
    return <AppLoading />
  }
  else{
    return (
      <>
        <StatusBar style="light" />
       <AppStack/>
      </>
      );
    }
  }
  

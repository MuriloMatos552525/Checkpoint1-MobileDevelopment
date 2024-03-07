import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

// Importando as imagens dos posters
import Image1 from './assets/Image1.png';
import Image2 from './assets/Image2.png';
import Image3 from './assets/Image3.png';
import Image4 from './assets/Image4.png';
import Image5 from './assets/Image5.png';
import Image6 from './assets/Image6.png';
import Image7 from './assets/Image7.png';
import Image8 from './assets/Image8.png';

// Importando estilos do aplicativo
import { appStyles } from './styles/appStyles';

// Componente principal do aplicativo
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const scaleValue = new Animated.Value(1);

  const handlePosterPress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 0.9, duration: 100, useNativeDriver: false }),
      Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: false }),
    ]).start();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView
      style={[
        appStyles.container,
        isDarkMode ? null : appStyles.lightContainer,
      ]}
    >
      {/* Configurando a StatusBar */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#1a1a1a' : '#f5f5f5'}
      />

      {/* Cabeçalho do aplicativo */}
      <View style={appStyles.header}>
        <Text style={appStyles.headerText}>Filmes em Destaque</Text>
        {/* Adicionando um botão de alternância para modos claro e escuro */}
        <TouchableOpacity
          style={appStyles.switchButton}
          onPress={toggleDarkMode}
        >
          <Text style={appStyles.switchText}>
            {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Utilizando ScrollView para permitir a rolagem da tela */}
      <ScrollView contentContainerStyle={appStyles.scrollContainer}>
        {/* Adicionando os posters de filmes */}
        {movies.map((movie, index) => (
          <TouchableOpacity
            key={index}
            style={appStyles.posterContainer}
            onPress={handlePosterPress}
            activeOpacity={0.7}
          >
            <Animated.Image
              source={movie.poster}
              style={[
                appStyles.poster,
                { transform: [{ scale: scaleValue }] },
              ]}
            />
            <View style={appStyles.movieInfoContainer}>
              <Text style={appStyles.movieTitle}>{movie.title}</Text>
              <Text style={appStyles.movieDescription}>{movie.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Rodapé do aplicativo */}
      <View style={appStyles.footer}>
        <Text style={appStyles.footerText}>
          CP1 - Mobile Development - 2TDSPM {'\n\n'}
          Desenvolvido por: {'\n'}
          Giovanna Alvarez - RM98892 {'\n'}
          Murilo Matos - RM552525
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Dados dos filmes
const movies = [
  {
    title: 'Past Lives',
    description: 'Nora and Hae Sung..',
    poster: Image1,
  },
  {
    title: 'All of us strangers',
    description: 'One night in his near..',
    poster: Image2,
  },
  {
    title: 'Interstellar',
    description: 'In Earth´s future..',
    poster: Image3,
  },
  {
    title: 'Coraline',
    description: 'While exploring her..',
    poster: Image4,
  },
  {
    title: 'Little Women',
    description: 'In the years after..',
    poster: Image5,
  },
  {
    title: 'Player N1',
    description: 'In 2045 the planet is..',
    poster: Image6,
  },
  {
    title: 'Whisper of the Heart',
    description: 'Based on the manga with..',
    poster: Image7,
  },
  {
    title: 'Jumanji',
    description: 'When four students play..',
    poster: Image8,
  },
];

export default App;

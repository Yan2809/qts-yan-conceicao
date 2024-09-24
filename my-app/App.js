import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [showImage, setShowImage] = useState(false);

  const handlePress = () => {
    setShowImage(true);  
  };

  return (
    <View>
      <TextInput placeholder="Digite seu nome" onChangeText={text => setName(text)}  
      />
      <Button title="Nome" onPress={handlePress} />
      {showImage && (
        <>
          <Text>Nome enviado: {name}</Text>
          <Image
            source={{ uri: 'https://cdn.discordapp.com/attachments/702375957641822250/1286449841685270609/images.png?ex=66edf347&is=66eca1c7&hm=83a152b6b8fb725050f3dac6ec6d769231b00e0409e47617176818cf814e5b5b&' }}  
            style={{ width: 150, height: 150 }}
          />
        </>
      )}
    </View>
  );
};

export default App;

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

export const OnboardingScreen = ({}): JSX.Element => {
  
  const onPressStart = () => {
    // TODO
  }

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Header />
      <TouchableOpacity style={{margin: 50, backgroundColor: 'green', alignItems: 'center', padding: 20, borderRadius: 12}} onPress={onPressStart} >
        <Text style={{color: 'white', fontSize: 20}}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

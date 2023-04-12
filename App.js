import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { RegistrationScreen } from './Screens/RegistrationScreen.js';
import { LoginScreen } from './Screens/LoginScreen.js';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [keyboardShown, setKeyboardShown] = useState(false);

  // const prepare = async() => {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync({
  //         "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  //         "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  //       });
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setIsReady(true);
  //     }
  //   }

  // useEffect(() => {
  //   prepare();
  // }, []);



  Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
  Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });
  
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  // if (!isReady) {
  //   return null;
  // }

  return (
    
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={(hideKeyboard)}>
        <ImageBackground source={require("./assets/images/bg2x.jpg")} style={styles.bgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
          
            <RegistrationScreen keyboardShown={keyboardShown} />
        
            <StatusBar style="auto" />

          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

});

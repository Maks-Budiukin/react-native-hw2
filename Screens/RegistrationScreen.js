import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import * as Font from 'expo-font';
// import robotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
// import lobster from '../assets/fonts/Roboto/Lobster-Regular.ttf';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

// SplashScreen.preventAutoHideAsync();

export const RegistrationScreen = ({ keyboardShown }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false)

  const loadFonts = async () => {
    return await Font.loadAsync({
      "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
      "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
      'Lobster-Regular': require("../assets/fonts/Roboto/Lobster-Regular.ttf"),
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
  //   'Lobster-Regular': require('../assets/fonts/Roboto/Lobster-Regular.ttf'),
  // });

 
  // useEffect(() => {
  //   async function prepare() {
  //     await Font.loadAsync({
  //       Lobster: {
  //         uri: lobster,
  //         display: Font.FontDisplay.SWAP,
  //       }
  //     })
  //     setIsReady(true);
  //     // await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare()
  // }, [])

  // if (!isReady) {
  //   return;
  // }
  // } else {
  //   SplashScreen.hideAsync();
  // }
  //Roboto-Bold.ttf

  // const prepare = async() => {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync("Roboto", robotoBold);
  //       // await Font.loadAsync({
  //       //   "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  //       //   "Roboto-Bold": robotoBold.font,
  //       // });
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       // await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setIsReady(true);
  //     }
  // }
  
//    const loadFonts = async () => {
//     await Font.loadAsync({
//         'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
//         'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
//     })
// }
  
  // if (!isReady) {
  //       return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={() => console.warn}/>;
  //     }

  const onRegSubmit = () => {
    Keyboard.dismiss();
    console.log(login, email, password);
    setLogin("");
    setEmail("");
    setPassword("");
  }

  const handleLogin = (text) => {
    setLogin(text);
  }

  const handleEmail = (text) => {
    setEmail(text);
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

 

  // const onLayoutRootView = useCallback(async () => {
  //   if (isReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isReady]);

  // if (!isReady) {
  //   return null;
  // }

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  // const onLayoutRootView = useCallback(async () => {
  //   if (isReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isReady]);

  // if (!isReady) {
  //   return null;
  // }
  
    return(
              <View style = {{ ...styles.authContainer, paddingBottom: keyboardShown ? 45 : 32, marginBottom: keyboardShown ? -150 : 0}} >
              <View style={styles.avatarThumb}></View>
              <Text style={styles.authTitle}>Регистрация</Text>
              
              <TextInput style={styles.authInput} placeholder={'Логин'} onChangeText={handleLogin} value={login} />
        <TextInput style={styles.authInput} placeholder={'Адрес электронной почты'} onChangeText={handleEmail} value={email} />
        <TextInput style={styles.authInput} placeholder={'Пароль'} secureTextEntry={true} onChangeText={handlePassword} value={password} />
              
              <TouchableOpacity style={styles.submitButton} onPress={onRegSubmit}>
                  <Text style={styles.submitButtonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.authLink}>Уже есть аккаунт? Войти</Text>
            
              </View >
             )
}


const styles = StyleSheet.create({

  authContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,  
  },

  avatarThumb: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 8,
    marginTop: -60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  authTitle: {
    fontFamily:"Lobster-Regular",
    textAlign: 'center',
    marginVertical: 16,
    letterSpacing: 0.01,
    fontSize: 36,
  },

  authInput: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },

  submitButton: {
    height: 50,
    backgroundColor: "#FF6C00",
    color: "#fff",
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    fontSize: 16,
    color: "#fff",
  },

  authLink: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 10,
    textAlign: 'center',
  },

});

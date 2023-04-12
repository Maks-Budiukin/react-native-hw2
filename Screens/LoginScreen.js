import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export const LoginScreen = ({ keyboardShown }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onRegSubmit = () => {
        Keyboard.dismiss()
        console.log(email, password)
        setEmail(null);
        setPassword(null);
    }
    
    const handleEmail = (text) => {
        setEmail(text);
    }

    const handlePassword = (text) => {
        setPassword(text)
    }

    return(
              <View style = {{ ...styles.authContainer, paddingBottom: keyboardShown ? 45 : 32, marginBottom: keyboardShown ? -150 : 0}}>
              <Text style={styles.authTitle}>Войти</Text>
              
                <TextInput style={styles.authInput} placeholder={'Адрес электронной почты'} onChangeText={handleEmail} value={email} />
                <TextInput style={styles.authInput} placeholder={'Пароль'} secureTextEntry={true} onChangeText={handlePassword} value={password} />
              
              <TouchableOpacity style={styles.submitButton} onPress={onRegSubmit}>
                  <Text style={styles.submitButtonText}>Войти</Text>
              </TouchableOpacity>
              <Text style={styles.authLink}>Нет аккаунта? Зарегистрироваться</Text>
            
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

  authTitle: {
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
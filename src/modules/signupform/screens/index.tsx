import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import SafeAreaView from '../../../components/SafeAreaView';
import Header from '../../../components/Header';
import {ScreenComponent} from '../../../navigation/interfaces';

const SignUpFormScreen = ({
  navigation,
  route,
}: ScreenComponent<'SignUpFormScreen'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]); // Initial empty array of users
  const isEmailValid = (text: string) => {
    return (
      text.includes('@') &&
      text.includes('.') &&
      text.indexOf('@') < text.lastIndexOf('.')
    );
  };

  const isPasswordValid = (text: string) => {
    return (
      text.length >= 8 &&
      /[0-9]/.test(text) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(text)
    );
  };

  const handleSignup = async () => {
    // Client-side validation
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      setErrorMessage(
        'Invalid email or password. Password must be at least 8 characters, include one number, and one special character.',
      );
      return;
    }

    try {
      // Simulate server-side validation
      const response = await fetch(
        `https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users?email=${email}`,
      );
      const data = await response.json();
      setData(data);
      // Check for validation errors in the response
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }

      // Check if the email already exists
      if (data.length > 0) {
        setErrorMessage('Email already exists. Please use a different email.');
        return;
      }

      // If all validations pass, you can proceed with signup
      // In a real app, you would likely send a request to your server to create a new user

      // Reset error message
      setErrorMessage('');

      // Display success message or navigate to the next screen
      Alert.alert('Signup Successful', 'Welcome to our app!');
    } catch (error) {
      console.error('Error:', error);

      // Set an appropriate error message for unexpected errors
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <SafeAreaView />
      <Header
        title="Sign Up Form"
        goBack
        navigation={navigation}
        route={route}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text>{data}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'cadetblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default SignUpFormScreen;

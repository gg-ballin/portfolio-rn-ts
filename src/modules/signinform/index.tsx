import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

/*
Build a user Signup form in React with the following features. 

~~~1. An email and a password input~~~
~~~2. Email must have an “@” and the domain side must include a “.”~~~
3. Password must include
    1.  at least one special character
    2. one number and be at least 8 characters
4. Validation and error handling
    1. Client-side validations
    2. Server side errors
5. Basic aesthetics with pure CSS
*/

const SignInForm = () => {
  const [email, setEmail] = useState('as@asd.com');
  const [password, setPassword] = useState('');
  const [credentialsValid, setCredentialsValid] = useState(null);

  const validateCredentials = ({email, password}) => {
    // setCredentialsValid(null);
    // if (!email || !password || !password.length < 8) {
    //   setCredentialsValid(false);
    //   console.error(credentialsValid);
    //   return;
    // }
    const emailValidationValue = validateEmail(email);
    const passwordValidationValue = checkSpecialCharacters(password);
    if (emailValidationValue && passwordValidationValue) {
      setCredentialsValid(true);
      console.log('todo valiudo!!!!');
    } else {
      setCredentialsValid(false);
    }
  };
  const checkSpecialCharacters = password => {
    const specialChars = '/.,<>?;":[]{}|~@!#$%^&*()-_+=`';
    console.log('passowrd: ', password);
    for (let char of password) {
      if (specialChars.includes(char)) {
        if (specialChars.includes(typeof Number)) {
          return true;
        }
      }
    }
    return false;
  };

  const validateEmail = email => {
    const hasAt = email.includes('@');
    const emailParse = email.split('@');
    if (hasAt && emailParse[1].includes('.')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          value={email}
          style={[
            styles.input,
            {borderColor: !!credentialsValid ? 'green' : 'red'},
          ]}
          placeholder={'Enter your email'}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          value={password}
          style={[
            styles.input,
            {borderColor: !!credentialsValid ? 'green' : 'red'},
          ]}
          placeholder={'Enter your password'}
          minLength={8}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.submit}
          onPress={() => validateCredentials({email, password})}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  content: {
    width: '50%',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  submit: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default SignInForm;

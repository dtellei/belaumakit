import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Pressable, Modal, Alert, StyleSheet, StatusBar } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignInVendor = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [forgetPassword, setForgetPassword] = useState('');

  const { loginVendor } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.title}>
        <Text style={styles.titletext}>Vendor Login</Text>

      </View>
      <View style={styles.centerContainer}>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email Address"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal is closure.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Forget your password? Les change it rq. Enter your email
                address:
              </Text>
              <FormInput
                labelValue={forgetPassword}
                onChangeText={(userForget) => setForgetPassword(userForget)}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={[styles.forget]}>Forgot password?</Text>
        </Pressable>

        <FormButton
          buttonTitle="Log In"
          onPress={() => loginVendor(email, password)}
        />
      
      <View style={styles.forgotButton}>
        <TouchableOpacity style={styles.forgotButton}>
          <Text
            style={styles.navButtonText}
            onPress={() => navigation.navigate('SignIn')}>
            Logging in as a Customer? Log In Here.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotButton}>
          <Text
            style={styles.navButtonText}
            onPress={() => navigation.navigate('SignUp')}>
            Don't have an account? Sign Up Here.
          </Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  );

}

export default SignInVendor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  changeLogin: {
    marginLeft: 175,
    marginTop: 100,
    width: '50%',
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: '#E8DEBD',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '15%',
    // marginTop: '10%'
  },
  titletext: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 36,
    marginBottom: '10%',
    // color: '#051d5f',
    color: '#FFB400',
    fontWeight: '500',
  },
  centerContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Roboto_400Regular',
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    // color: '#2E64EF'
    color: '#E88832',
  },
  forget: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E88832',
    marginBottom: 20,
    marginLeft: '50%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196f3',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Header from '../../components/Header/CustomHeader';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.textTitle}>Login</Text>
                <View style={styles.inputContainer}>
                    <CustomInput placeHolder="Your email or phone" label="Email" type="email-address" />
                    <CustomInput marginBottom={10} placeHolder="Password" label="Senha" password={true} />
                </View>
                <View style={styles.buttonForgotPassword}>
                    <CustomButton fontSize={14} fontColor="#5D5FEF" title="Forgot Password?" />
                </View>
                <View style={styles.buttonLogin}>
                    <CustomButton fontSize={16} fontColor="#FFF" title="LOGIN" backGroundColor='#A5A6F6' />
                </View>
                <View style={styles.buttonSignUp}>
                    <Text>Don't have an account?</Text>
                    <CustomButton fontColor="#5D5FEF" title="Sign Up" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 180,
        padding: 20,
        width: '100%',
    },
    textTitle: {
        fontSize: 38,
        fontWeight: "500",
    },
    inputContainer: {
        marginTop: 50,
    },
    buttonForgotPassword: {
        alignItems: 'center',
    },
    buttonLogin: {
        marginTop: 26,
        width: "80%",
        alignSelf: 'center',
    },
    buttonSignUp: {
        marginTop: 30,
        width: "80%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default App;
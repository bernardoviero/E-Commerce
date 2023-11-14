import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Header from '../../components/Header/CustomHeader';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { colors } from '../../styles/theme/colors'
import { useRouter } from "expo-router";

const App = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleButtonLoginPress = () => {
		setEmailError(email === '');
		setPasswordError(password === '');
		if (email === 'bernardo' && password === '1234') {
			router.push('HomeScreen');
		}
	};

	const handleEmailChange = (text: string) => {
		setEmail(text);
		setEmailError(false);
	};

	const handlePasswordChange = (text: string) => {
		setPassword(text);
		setPasswordError(false);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<View style={styles.container}>
				<Text style={styles.textTitle}>Login</Text>
				<View style={styles.inputContainer}>
					<CustomInput placeHolder="Your email or phone" label="E-mail" type="email-address" onChangeText={handleEmailChange} required error={emailError} />
					<CustomInput marginBottom={10} placeHolder="Password" label="Senha" password={true} onChangeText={handlePasswordChange} required error={passwordError} />
				</View>
				<View style={styles.buttonForgotPassword}>
					<CustomButton fontSize={14} fontColor={colors.primaryColor} title="Forgot Password?" />
				</View>
				<View style={styles.buttonLogin}>
					<CustomButton fontSize={16} fontColor={colors.backgroundScreen} title="LOGIN" backGroundColor={colors.secondaryColor} onPress={handleButtonLoginPress} />
				</View>
				<View style={styles.buttonSignUp}>
					<Text>Don't have an account?</Text>
					<CustomButton fontColor={colors.primaryColor} title="Sign Up" />
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		top: 160,
		padding: 20,
		width: '100%',
	},
	textTitle: {
		fontSize: 38,
		fontFamily: 'IBMPlexSans-SemiBold',
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
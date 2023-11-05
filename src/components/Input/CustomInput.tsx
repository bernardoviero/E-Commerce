import {useState} from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, Text, View } from 'react-native';
import { colors } from '../../styles/theme/colors'

interface CustomInputProps {
    label: string;
    placeHolder: string;
    type?: KeyboardTypeOptions;
    length?: number;
    password?: boolean;
    marginBottom?: number;
    onChangeText: (text: string) => void; 
    required?: boolean;
    error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ marginBottom = 30, label, type, length = 255, password = false, placeHolder, onChangeText, required, error }) => {
    const [text, setText] = useState('');
    const styles = StyleSheet.create({
      inputContainer: {
        marginBottom: marginBottom,
      },
      input: {
        borderRadius: 12,
        padding: 15,
        height: 60,
        borderWidth: 1,
        borderColor: error ? 'red' : colors.backgroundInput,
        color: colors.greyText,
      },
      text: {
        fontSize: 16,
        color: error ? 'red' : colors.backgroundInput,
        marginTop: 10,
        marginLeft: 10,
        fontFamily: 'IBMPlexSans-SemiBold',
      },
      errorText: {
        color: 'red',
        marginTop: 5,
        marginLeft: 10,
      }
    });

    const handleTextChange = (text: string) => {
      setText(text);
      onChangeText(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                cursorColor={colors.defautText}
                keyboardType={type}
                maxLength={length}
                secureTextEntry={password}
                placeholder={placeHolder}
                placeholderTextColor={colors.placeholderInput}
                value={text}
                onChangeText={handleTextChange}
                />
            {required && error && <Text style={styles.errorText}>This field is required</Text>}
        </View>
    );
};

export default CustomInput;
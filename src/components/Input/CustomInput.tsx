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
    onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ marginBottom = 30, label, type, length = 255, password = false, placeHolder }) => {
  const [inputValue, setInputValue] = useState('');

  const styles = StyleSheet.create({
        input: {
            borderRadius: 12,
            padding: 15,
            height: 60,
            marginBottom: marginBottom,
            borderWidth: 1,
            borderColor: colors.backgroundInput,
            color: colors.greyText,
        },
        text: {
            fontSize: 16,
            color: colors.backgroundInput,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: 'IBMPlexSans-SemiBold',
        }
    });

    const onChangeText = (text: string) => {
      setInputValue(text);
    };

    return (
        <View>
            <Text style={styles.text}>
                {label}
            </Text>
            <TextInput
                onChangeText={onChangeText}
                style={styles.input}
                cursorColor={colors.defautText}
                keyboardType={type}
                maxLength={length}
                secureTextEntry={password}
                placeholder={placeHolder}
                placeholderTextColor={colors.placeholderInput}
            />
        </View>
    );
};

export default CustomInput;
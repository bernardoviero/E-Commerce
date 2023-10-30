import * as React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, Text, View } from 'react-native';
import { PortalContext } from 'react-native-paper/lib/typescript/components/Portal/PortalHost';

interface CustomInputProps {
    label: string;
    placeHolder: string;
    type?: KeyboardTypeOptions;
    length?: number;
    password?: boolean;
    marginBottom?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({ marginBottom = 30, label, type, length = 255, password = false, placeHolder }) => {
    const styles = StyleSheet.create({
        input: {
            borderRadius: 12,
            padding: 15,
            height: 60,
            marginBottom: marginBottom,
            borderWidth: 1,
            borderColor: '#E9E9E9',
            color: '#545454',
        },
        text: {
            fontSize: 16,
            color: '#E9E9E9',
            fontWeight: '500',
            marginBottom: 10,
            marginLeft: 10,
        }
    });

    return (
        <View>
            <Text style={styles.text}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                cursorColor="#000"
                keyboardType={type}
                maxLength={length}
                secureTextEntry={password}
                placeholder={placeHolder}
                placeholderTextColor="#bdbebd"
            />
        </View>
    );
};

export default CustomInput;
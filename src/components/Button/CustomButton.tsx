import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../styles/theme/colors'

interface CustomButtonProps {
    title: string;
    backGroundColor?: string;
    fontSize?: number;
    fontColor?: string;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ fontColor = colors.defautText, title, backGroundColor = colors.backgroundScreen, fontSize = 14, onPress }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: backGroundColor,
            borderRadius: 60,
            padding: 5,
        },
        label: {
            color: fontColor,
            fontSize: fontSize,
            fontFamily: 'IBMPlexSans-Regular',
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Button
                labelStyle={styles.label}
            >
                {title}
            </Button>
        </TouchableOpacity>
    );
};

export default CustomButton;
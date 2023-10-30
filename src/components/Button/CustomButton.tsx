import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomButtonProps {
    title: string;
    backGroundColor?: string;
    icon?: string;
    fontSize?: number;
    fontColor?: string;
    iconColor?: string;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ fontColor = "#000", title, backGroundColor = '#FFF', icon, iconColor = "#000", fontSize = 14, onPress }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: backGroundColor,
            borderRadius: 60,
            padding: 5,
        },
        label: {
            color: fontColor,
            fontSize: fontSize,
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Button
                {...icon && {
                    icon: () => <Icon name={icon} size={30} color={iconColor} />
                }}
                labelStyle={styles.label}
            >
                {title}
            </Button>
        </TouchableOpacity>
    );
};

export default CustomButton;
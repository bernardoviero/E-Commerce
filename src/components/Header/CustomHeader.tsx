import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ellipse}>
                <Image source={require('../../../assets/Header/ellipse1.png')} />
            </View>
            <View style={styles.ellipse}>
                <Image source={require('../../../assets/Header/ellipse2.png')} />
            </View>
            <View style={[styles.ellipse, { right: 0 }]}>
                <Image source={require('../../../assets/Header/ellipse3.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: "4%",
        width: '100%',
    },
    ellipse: {
        position: 'absolute',
        top: 0,
    },
});

export default CustomHeader;
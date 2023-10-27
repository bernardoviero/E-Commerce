import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextBase, View } from 'react-native';

const App = () => (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../assets/Welcome/background.png')} style={styles.image}>
            <View style={styles.containerTitle}>
                <Text style={[styles.title, { color: '#FFF' }]}>
                    Welcome to{' '}
                    <Text style={[styles.title, { color: '#5D5FEF' }]}>
                        Estore
                    </Text>
                </Text>
                <Text style={styles.subTitle}>
                    Your favourite gadgets delivered fast at your door.
                </Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    containerTitle: {
        top: - 200,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 60,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '300',
        color: '#FFF',
        width: 340,
    }
});

export default App;
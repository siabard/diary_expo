import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import * as Font from '../constants/Font';
import { FontAwesome5 } from '@expo/vector-icons';
import React from "react";
import * as Colors from "../constants/Colors";
import Constants from 'expo-constants';

const ScreenTitle = ({ icon, title, onPressIcon }) => {
    const onPress = (typeof onPressIcon == 'function') ? onPressIcon : () => { return; };
    const Container = SafeAreaView;
    const Left = View;
    const Right = View;
    const Center = View;

    return (
        <Container style={styles.container}>
            <Left style={styles.left}>
                <FontAwesome5 onPress={() => onPress()} name={icon} size={Font.BASE * 22} color={Colors.FOREGROUND} />
            </Left>
            <Center style={styles.center}>
                <Text style={styles.text}>{title}</Text>
            </Center>
            <Right style={styles.right}></Right>

        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.SUCCESS,
    },
    left: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: Font.BASE * 22,
        fontWeight: 'bold',
        color: Colors.FOREGROUND,
    }
});

export default ScreenTitle;
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

import * as Colors from '../constants/Colors';
import * as Font from '../constants/Font';

const LoadingScreen = () => {
    const Container = SafeAreaView;
    const Logo = View;
    const Body = View;

    return (
        <Container style={styles.container}>
            <Body style={styles.body}>
                <Logo>
                    <Text style={{ textAlign: 'center' }}>
                        <FontAwesome5 name="get-pocket" size={Font.BASE * 130} color={Colors.SUCCESS} />
                    </Text>
                    <Text style={styles.loadingText}>Loading Screen...</Text>
                </Logo>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
    },
    body: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    topPadding: {
        flex: 0.1
    },
    bottomPadding: {
        flex: 0.1
    },
    loadingText: {
        fontSize: Font.MEDIUM,
        color: Colors.SUCCESS,
        textAlign: 'center',
    }
});

export default LoadingScreen;
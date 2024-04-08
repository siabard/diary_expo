import { Animated, SafeAreaView, StyleSheet, View } from "react-native";
import FooterTab from "./FooterTab";
import Screens from "./Screens";
import { useRef } from "react";
import LoadingScreen from "./LoadingScreen";

const AppScreen = ({ screenStates, methods }) => {
    const Container = SafeAreaView;
    const Footer = View;

    const fadeAnimation = useRef(new Animated.Value(1)).current;
    const fadeIn = () => {
        return new Promise((resolve) => {
            Animated.timing(fadeAnimation, { toValue: 1, duration: 500, useNativeDriver: true }).start(() => resolve());
        });
    };

    const fadeOut = () => {
        return new Promise((resolve) => {
            Animated.timing(fadeAnimation, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => resolve());
        });
            
    };

    const animatedGoTo = (screen) => {
        fadeOut().then(() => {
            methods.goto(screen, () => fadeIn());
        });
    };

    const animatedMethods = {
        ...methods,
        goto: animatedGoTo,
    }

    return (
        <Container style={styles.container}>
            <LoadingScreen />
            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnimation }]}>
                <Screens screenStates={screenStates} methods={animatedMethods}></Screens>
            </Animated.View>
            <Footer style={styles.footer}>
                <FooterTab screenStates={screenStates} methods={animatedMethods}></FooterTab>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ddd',
    },
    screen: {
        flex: 0.9,
        backgroundColor: 'skyblue',
    },
    footer: {
        flex: 0.1,
        backgroundColor: 'green',
    },
    fadingContainer: {
        flex: 0.9,
    }
});

export default AppScreen;
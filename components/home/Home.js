import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Colors from '../../constants/Colors';
import ScreenTitle from '../../components/ScreenTitle';
import Calendar from './Calendar';
import Diaries from '../Diaries';

const Home = ({ screenStates, methods, style }) => {

    const Container = SafeAreaView;
    const Body = View;

    return (
        <Container style={{...styles.container, ...style}}>
            <View style={styles.header}>
                <ScreenTitle icon="get-pocket" label={`POCKET DIARY`} />
            </View>
            <Body style={styles.body}>
                <View style={styles.calendarContainer}>
                    <Calendar />
                </View>
                <View style={styles.recentDiariesContainer}>
                    <Diaries
                        screenStates={screenStates} methods={methods} />
                </View>

            </Body>
        </Container>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT,
        flexDirection: 'column',
    },
    header: {
        flex: 0.15,
    },
    body: {
        flex: 0.85,
        padding: 20,
        backgroundColor: Colors.DEFAULT,

    },
    calendarContainer: {
        flex: 0.45,
    },
    recentDiariesContainer:{
        flex: 0.55,
    }
})
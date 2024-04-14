import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors';
import DiaryItems from './DiaryItems';

const Diaries = ({ screenStates, methods }) => {
    const { diaries } = screenStates;

    console.log('Diaries.js::', JSON.stringify(screenStates));

    const Container = View;
    const Header = View;
    const Body = View;

    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
                <Text style={styles.headerText}>Recent Diaries</Text>
            </Header>
            <Body style={styles.body}>
                <FlatList
                    data={diaries}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <DiaryItems diary={item} methods={methods} />
                        );
                    }} />
            </Body>
        </Container>
    );
}

export default Diaries;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    header: {
        flex: 0.2,
        justifyContent: 'center',
        borderBottomWidth: 0.25,
    },
    headerText: {
        fontSize: Font.LARGE,
        color: Colors.TEXT,

    },
    body: {
        flex: 0.8,
    },
});
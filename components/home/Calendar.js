import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Colors from '../../constants/Colors';
import * as Font from '../../constants/Font';
import { getDate } from '../../utils/Utilities';

const Calendar = () => {

    const dateObj = getDate();

    const Container = View;
    const Body = View;
    const Header = View;

  return (
    <Container style={styles.container} >
        <Header style={styles.header}>
            <Text style={styles.headerText}>{`${dateObj.month}, ${dateObj.year}`}</Text>
        </Header>
        <Body style={styles.body}>
            <Text style={styles.bodyText}>
                {dateObj.day}
            </Text>
        </Body>
    </Container>
  )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 5,
        borderWidth: 0.25,
    },
    header: {
        flex: 0.3,
        backgroundColor: Colors.SUCCESS,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    headerText: {
        fontSize: Font.BASE * 26,
        color: Colors.FOREGROUND,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 0.7,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    bodyText: {
        fontSize: Font.BASE * 60,
        fontWeight: 'bold',
        color: Colors.TEXT,
        textAlign: 'center',
    }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import {FontAwesome5} from '@expo/vector-icons';
import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors';
import { getDate, truncateText } from '../utils/Utilities';

const DiaryItems = ({diary, methods}) => {

    const dateObj = getDate(new Date(diary.date));
    const Container = View;
    const Left = View;
    const Middle = View;
    const Right = View;

  return (
    <TouchableOpacity onPress={() => {
        methods.setDiary({...diary, edit: true}); 
        methods.goto('diary');
        }}>
        <Container style={styles.container}>
            <Left style={styles.left}>
                <FontAwesome5 name='calendar-alt' size={Font.LARGE} color={Colors.SUCCESS} />
            </Left>
            <Middle style={styles.middle}><Text>{truncateText(diary.content, 20)}</Text></Middle>
            <Right style={styles.right}><Text style={styles.rightText}>{`${dateObj.month} ${dateObj.day}`}</Text></Right>
        </Container>
    </TouchableOpacity>
  )
}

export default DiaryItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderWidth: 0.25,
        borderRadius: 5,
        rowGap: 5,
        paddingVertical: 15,
    },
    left: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middle: {
        flex: 0.65,
    },
    right: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    rightText: {
        fontSize: Font.BASE * 11,
        color: Colors.SUCCESS
    }
})
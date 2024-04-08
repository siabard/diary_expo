import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useState, useEffect } from "react";

import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { extractStringDate } from "../utils/Utilities";

const DatePicker = ({ style, value, onChangeDate }) => {
    const [show, setShow] = useState(false);

    let { fontSize, fontWeight, color } = style || {};
    fontSize = fontSize || Font.SMALL;
    fontWeight = fontWeight || 'normal';
    color = color || Colors.TEXT;

    const open = () => { setShow(true) };
    const close = () => { setShow(false) };


    return (
        <View>
            <TouchableOpacity onPress={open}>
                <View style={style}>
                    <Text style={{ fontSize, fontWeight, color }}>{value}</Text>
                </View>
            </TouchableOpacity>
            {show && (
                <DateTimePicker testID="datePicker" value={new Date(value)} mode={'date'} is24Hour={true} display="default" onChange={(event, selectedDate) => {
                    close();

                    if (selectedDate == undefined) return;

                    const date = extractStringDate(selectedDate);
                    onChangeDate(date);
                }} />
            )}
        </View>
    );

};


const styles = StyleSheet.create({});

export default DatePicker;
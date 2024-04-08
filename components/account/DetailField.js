import { StyleSheet, View, Text } from "react-native";
import * as Colors from '../../constants/Colors';
import * as Font from '../../constants/Font';

import React from "react";
const DetailField = ({label, value}) => {
    const Container = View;
    const Label = View;
    const Value = View;

    return (
        <Container style={styles.container}>
            <Label style={styles.label}><Text style={styles.labelText}>{label}</Text></Label>
            <Value style={styles.value}><Text style={styles.valueText}>{value}</Text></Value>
        </Container>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    label: {
        flex: 0.4,
        padding: 10,
        borderWidth: 0.25,
        borderColor: Colors.DEFAULT,
    },
    value: {
        flex: 0.6,
        padding: 10,
        borderWidth: 0.25,
        borderColor: Colors.DEFAULT,
    },
    labelText: {
        fontSize: Font.SMALL,
        fontWeight: 'bold',
    },
    valueText: {
        fontSize: Font.SMALL,
    }
});

export default DetailField;
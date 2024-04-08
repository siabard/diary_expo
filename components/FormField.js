import { StyleSheet } from "react-native";
import { View, Text } from 'react-native';

import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors'

const FormField = ({ label, inputComponent, style }) => {
    let { fontSize, fontWeight, color, padding, } = style || {};

    fontSize = fontSize || Font.SMALL;
    fontWeight = fontWeight || 'normal';
    color = color || Colors.TEXT;
    padding = padding || 10;

    const LabelContainer = View;
    const InputContainer = View;

    return (
        <View style={styles.container}>
            <LabelContainer style={[{ padding }, styles.label]}>
                <Text style={{ fontSize, fontWeight, color }}>{label}</Text>
            </LabelContainer>
            <InputContainer style={styles.input}>
                {inputComponent}
            </InputContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        flex: 0.4,
    },
    input: {
        flex: 0.6,
    }
});

export default FormField; 1
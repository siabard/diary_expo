import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';

import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors';

const RadioButton = (props) => {
    let { selected, title, style, ringProperties, onPress } = props;

    title = title || 'Radio Button';
    style = style || {};
    ringProperties = ringProperties || {};

    let { fontSize, fontWieght, color, padding } = style;
    fontSize = fontSize || Font.SMALL;
    fontWieght = fontWieght || 'normal';
    color = color || Colors.TEXT;
    padding = padding || 5;

    let { size, color: ringColor, borderWidth } = ringProperties;
    size = size || 24;
    ringColor = ringColor || Colors.PRIMARY;
    borderWidth = borderWidth || 2;

    const Container = View;
    const Ring = View;
    const Shade = View;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container style={[styles.container, { padding }]}>
                <Ring style={[styles.ring, { height: size, width: size, borderRadius: size / 2, borderWidth, borderColor: ringColor, marginRight: padding, }]}>
                    {
                        (selected) ? <Shade style={{ height: size / 2, width: size / 2, borderRadius: (size / 2) / 2, backgroundColor: ringColor }}></Shade> : <View></View>
                    }
                </Ring>
                <Text sytle={{ fontSize, fontWieght, color }}>{title}</Text>
            </Container>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    ring: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default RadioButton;
import { View, Text, StyleSheet } from "react-native";
import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";


const Button = ({ icon, title, style, onPress }) => {
    let { padding, fontSize, fontWeight, color, backgroundColor } = style || {};

    padding = padding || 10;
    fontSize = fontSize || Font.SMALL;
    fontWeight = fontWeight || 'normal';
    color = color || Colors.TEXT;
    backgroundColor = backgroundColor || Colors.DEFAULT;


    const setContent = ({ icon, title, padding, fontSize, fontWeight, color }) => {
        if (icon && title) {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: padding }}>
                        <FontAwesome5 name={icon} size={fontSize} color={color} />
                    </View>
                    <Text style={{ fontSize, fontWeight, color }}>{title}</Text>
                </View>
            );
        }

        if (icon) {
            return (<View style={{ marginRight: padding }}>
                <FontAwesome5 name={icon} size={fontSize} color={color} />
            </View>);
        }

        if (title) {
            return (<Text style={{ fontSize, color, fontWeight }}>{title}</Text>);
        }

        return null;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor, padding }, style]}>{setContent({ icon, title, padding, fontSize, fontWeight, color })}</View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Button;
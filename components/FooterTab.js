import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Font from '../constants/Font';
import * as Colors from '../constants/Colors';


const FooterTab = ({ screenStates, methods }) => {
    const {goto} = methods;
    const {currentScreen} = screenStates;
    const screens = [
        { screen: 'home', icon: 'home' },
        { screen: 'create', icon: 'pen' },
        { screen: 'browse', icon: 'search' },
        { screen: 'account', icon: 'user' },
    ];

    return (
        <FlatList style={styles.container} horizontal={true} data={screens} keyExtractor={(item, index) => {
            return item.screen + index;
        }} renderItem={({ item, index }) => {
            return (
                <TouchableOpacity key={`touchable_menu_${index}`}
                    onPress={() => goto(item.screen)}
                    style={(item.screen == currentScreen) ? [styles.section, {
                        backgroundColor: Colors.WHITE,

                    }] : styles.section}>
                    <FontAwesome5 name={item.icon} size={Font.LARGE} color={(item.screen == currentScreen) ? Colors.SUCCESS : Colors.WHITE} />
                </TouchableOpacity>
            );
        }}></FlatList>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.25,
        borderTopColor: '#ddd',
        backgroundColor: Colors.SUCCESS,
    },
    section: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 4,
        borderTopRightRadius: 0.25,
        borderBottomRightRadius: 0.25,
    }
});

export default FooterTab;
import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import ScreenTitle from "./ScreenTitle";
import * as Colors from '../constants/Colors';
import Account from "./account/Account";
import Create from "./create/Create";
import Diary from "./diary/Diary";
import Home from "./home/Home";
const Container = SafeAreaView;
const Browse = View;


const Screens = ({ screenStates, methods, style }) => {
    const { currentScreen } = screenStates;

    return (
        <Container style={{...styles.container, ...style}}>
            <Home screenStates={screenStates} methods={methods} style={(currentScreen == 'home') ? styles.show : styles.hide}>
            </Home>
            <Create screenStates={screenStates} methods={methods} style={(currentScreen == 'create') ? styles.show : styles.hide}>
            </Create>
            <Diary screenStates={screenStates} methods={methods} style={(currentScreen == 'diary') ? styles.show : styles.hide}>
            </Diary>
            <Browse style={(currentScreen == 'browse') ? styles.show : styles.hide}>
                <ScreenTitle title={'Browse'} />
            </Browse>
            <Account screenStates={screenStates} methods={methods} style={(currentScreen == 'account') ? styles.show : styles.hide}></Account>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    show: { flex: 1 },
    hide: { flex: 0, height: 0, opacity: 0 },
});

export default Screens;
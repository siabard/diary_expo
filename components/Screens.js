import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import ScreenTitle from "./ScreenTitle";
import * as Colors from '../constants/Colors';
import Account from "./account/Account";

const Container = SafeAreaView;
const Home = View;
const Create = View;
const Browse = View;


const Screens = ({ screenStates, methods }) => {
    const { currentScreen, user } = screenStates;

    return (
        <Container style={styles.container}>
            <Home style={[styles.screen, {backgroundColor: Colors.PRIMARY},  (currentScreen == 'home') ? styles.show : styles.hide]}>
                <ScreenTitle title={'Home'} />
                <Text>{JSON.stringify(user)}</Text>
            </Home>
            <Create style={[styles.screen, {backgroundColor: Colors.SUCCESS}, (currentScreen == 'create') ? styles.show : styles.hide]}>
                <ScreenTitle title={'Create'} />
            </Create>
            <Browse style={[styles.screen, {backgroundColor: Colors.WARNING}, (currentScreen == 'browse') ? styles.show : styles.hide]}>
                <ScreenTitle title={'Browse'} />
            </Browse>
            <Account screenStates={screenStates} methods={methods} style={ (currentScreen == 'account') ? styles.show : styles.hide}></Account>
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
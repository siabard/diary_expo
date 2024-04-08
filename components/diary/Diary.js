import { StyleSheet, Text, View } from "react-native";

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import ScreenTitle from "../ScreenTitle";


const Diary = ({style, screenStates}) => {
    const {diary} = screenStates;

    const Container = View;
    const Body = View;

    return (
        <Container style={[style, styles.container]}>
            <View style={styles.header}>
                <ScreenTitle label={`Diary`} icon="arrow-left" />
            </View>
            <Body style={styles.body}>
                <Text style={{textAlign: 'center'}}>{JSON.stringify(diary)}</Text>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT,
        flexDirection: 'column',
    },
    header: {
        flex: 0.15,
    },
    body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
    }
});

export default Diary;
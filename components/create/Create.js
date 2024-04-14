import { StatusBar, StyleSheet, Text, View } from "react-native";

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import ScreenTitle from "../ScreenTitle";
import CreateForm from "./CreateForm";

const Create = ({ style, methods, screenStates }) => {
    const Container = View;
    const Body = View;
    return (
        <Container style={{...styles.container, ...style}}>
            <StatusBar />
            <View style={styles.header}>
                <ScreenTitle icon={`pen`} title={`WRITE DIARY`} />
            </View>
            <Body style={styles.body}>
                <CreateForm screenStates={screenStates} methods={methods}/>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT,
        flexDirection: 'column'
    },
    header: {
        flex: 0.15,
        backgroundColor: 'green',
    },
    body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: Colors.DEFAULT,

    }
});

export default Create;
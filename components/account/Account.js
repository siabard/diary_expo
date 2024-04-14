import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import * as Colors from '../../constants/Colors';
import { StatusBar } from "expo-status-bar";
import ScreenTitle from "../ScreenTitle";
import { useState } from "react";
import AccountDetails from "./AccountDetails";
import AccountForm from "./AccountForm";

const Account = ({ style, screenStates, methods }) => {
    const [edit, setEdit] = useState(false);
    const Container = SafeAreaView;
    const Body = View;

    return (
        <Container style={{...styles.container, ...style}}>
            <StatusBar>
            </StatusBar>
            <View style={styles.header}>
                <ScreenTitle title="ACCOUNT" icon={'user'} onPressIcon={() => console.log('icon pressed')} />
            </View>
            <Body style={styles.body}>
                {edit ? (<AccountForm edit={edit} methods={methods} setEdit={setEdit} screenStates={screenStates} >
                </AccountForm>) : (<AccountDetails setEdit={setEdit} screenStates={screenStates} ><Text>Account Details</Text></AccountDetails>)}
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT,
        flexDirection: 'column',
    }, header: {
        flex: 0.15,

    }, body: {
        flex: 0.85,
        flexDirection: 'column',
        padding: 20,
    }
});

export default Account;
import { StyleSheet, Text, View } from "react-native";

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import ScreenTitle from "../ScreenTitle";
import DiaryDetail from "./DiaryDetail";
import DiaryForm from "./DiaryForm";


const Diary = ({ style, screenStates, methods }) => {
    const { diary } = screenStates;

    const Container = View;
    const Body = View;

    return (
        <Container style={{...styles.container, ...style}}>
            <View style={styles.header}>
                <ScreenTitle label={`DIARY`} icon="arrow-left" onPressIcon={() => methods.goBack()} />
            </View>
            <Body style={styles.body}>
                {
                    (diary.edit) ? (
                        <DiaryForm screenStates={screenStates} methods={methods} />
                    ) : (
                        <DiaryDetail screenStates={screenStates} methods={methods} />
                    )
                }

            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
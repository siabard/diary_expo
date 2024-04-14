import { StyleSheet, Text, TextInput, View } from "react-native";

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';

import Button from "../account/Button";
import { toastMessage } from "../../utils/Utilities";
import { useState } from 'react';

const DiaryForm = ({ screenStates, methods }) => {
    const { diary } = screenStates;
    const [content, setContent] = useState(diary.content);

    const Container = View;
    const Body = View;
    const Footer = View;

    const update = (diary, content) => {
        const updateDiary = {...diary, content};
        const callback = (rowsAffected) => {
            methods.setDiary(prev => {
                toastMessage(`Successfully updated diary: ${rowsAffected}`);
                return {...prev, ...updateDiary, edit: false};
            });
        };
        methods.updateDiary(updateDiary, callback);
    };

    return (
        <Container style={styles.container}>
            <Body style={styles.body}>
                <Text style={styles.label}>Date: ${diary.date}</Text>
                <Text style={styles.label}>Dear Diary,</Text>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={8} placeholder={`Start editing your diary.`} value={content} onChangeText={(value) => setContent(value)} />
            </Body>
            <Footer style={styles.footer}>
                <Button
                    title={`Update`}
                    icon={`save`}
                    style={{ ...styles.button, backgroundColor: Colors.SUCCESS }}
                    onPress={() => {
                        update(diary, content);
                    }} />
                <Button title={`Cancel`} icon={`minus`} style={{ ...styles.button, backgroundColor: Colors.DANGER }} onPress={() => {
                    methods.editDiary(false);
                }} />
            </Footer>
        </Container>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        flexDirection: 'column',
        padding: 15,
        borderWidth: 0.25,
    },
    body: {
        flexDirection: 'column',

    },
    label: {
        fontSize: Font.SMALL,
        marginVertical: 10,
    },
    textArea: {
        borderWidth: 0.25,
        padding: 10,
        fontSize: Font.SMALL,
        textAlignVertical: 'top',
        height: 240,
    },
    footer: {
        flexDirection: 'row-reverse',
        columnGap: 10,
    },
    button: {
        fontSize: Font.SMALL,
        borderRadius: 5,
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
});

export default DiaryForm;
import { StyleSheet, View, Text, TextInput } from "react-native";

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import Button from "../account/Button";
import FormField from "../FormField";
import DatePicker from "../DatePicker";
import React, { useState } from 'react';
import { extractStringDate, toastMessage } from "../../utils/Utilities";

const CreateForm = ({ screenStates, methods }) => {
    const { user } = screenStates;
    const { insertDiary, goto , setDiary } = methods;

    const Form = View;
    const TextAreaContainer = View;
    const TextArea = TextInput;
    const Footer = View;

    const [date, setDate] = useState(extractStringDate())
    const [text, setText] = useState(``)
    const userId = user.id;

    const insert = async (userId, date, content, ) => {
        const diary = { userId, date, content };
        await insertDiary(diary, (resultSet) => {
            setText(``);
            setDate(extractStringDate());
            setDiary({id: resultSet.insertId ,userId, date, content})
            toastMessage(`Successfully saved diary ${resultSet}`);
            goto(`diary`);
        });
    };

    return (
        <Form style={styles.container}>
            <FormField label={`Date`} inputComponent={(
                <DatePicker style={styles.datePicker} value={date} onChangeDate={(value) => {
                    setDate(value);
                }} />
            )} />
            <TextAreaContainer style={styles.textAreaContainer}>
                <Text style={styles.remark}>Dear Diary,</Text>
                <TextArea style={styles.textArea} multiline={true} numberOfLines={8} placeholder={`Start writing a diary.`}
                    onChangeText={(value) => setText(value)}
                    value={text} />
                <Text style={styles.remark}>Love, {`\n`}{user.firstName}</Text>
            </TextAreaContainer>
            <Footer style={styles.footer}>
                <Button title={'Save'} icon={'save'} onPress={async () => { 
                    console.log('save');
                    await insert(userId, date, text);
                 }}
                    style={{ backgroundColor: Colors.SUCCESS, color: Colors.FOREGROUND, borderRadius: 5, fontWeight: 'bold' }} />
                <Button title={'Clear'} icon={'eraser'} onPress={() => { setText(``) }}
                    style={{ backgroundColor: Colors.DANGER, color: Colors.FOREGROUND, borderRadius: 5, fontWeight: 'bold' }} />
            </Footer>
        </Form>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'column',
        borderWidth: 0.25,

    },
    datePicker: {
        borderWidth: 0.25,
        borderRadius: 5,
        fontSize: Font.SMALL,
        padding: 10,
    },
    textAreaContainer: {},
    remark: {
        marginLeft: 10,
        fontSize: Font.SMALL,
        color: Colors.TEXT,
    },
    textArea: {
        borderWidth: 0.25,
        padding: 10,
        fontSize: Font.SMALL,
        textAlignVertical: 'top',
        borderRadius: 5,
        marginVertical: 10,
    },
    footer: {
        flexDirection: 'row-reverse',
        columnGap: 10,
        marginTop: 25,
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});
export default CreateForm; 1
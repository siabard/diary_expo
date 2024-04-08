import { StyleSheet, View, Text, TextInput } from "react-native";

import Button from "./Button";
import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import FormField from "../FormField";
import RadioButton from "../RadioButton";

import { useState } from 'react';
import DatePicker from "../DatePicker";
import { toastMessage } from "../../utils/Utilities";
const AccountForm = ({ edit, methods, setEdit, style, screenStates }) => {
    const { user } = screenStates;
    const { updateUser } = methods;
    const [firstName, setFirstName] = useState(user && user.firstName);
    const [lastName, setLastName] = useState(user && user.lastName);
    const [gender, setGender] = useState(user && user.gender);
    const [birthDate, setBirthdate] = useState(user && user.birthDate);
    const [email, setEmail] = useState(user && user.email);

    const Form = View;
    const Footer = View;

    const update = (user) => {
        updateUser(user, (rowsAffected) => {
            toastMessage(`Successfully updated ${rowsAffected} rows`);
            setEdit(false);
        });
    };

    return (
        <Form style={styles.container}>
            <Text style={styles.heading}>Please enter your details</Text>
            <FormField label={`First Name`} style={{ fontWeight: 'bold' }} inputComponent={(
                <TextInput style={styles.textbox} onChangeText={(value) => setFirstName(value)} value={firstName || ''} />
            )} >

            </FormField>
            <FormField label={`Last Name`} style={{ fontWeight: 'bold' }} inputComponent={(
                <TextInput style={styles.textbox} onChangeText={(value) => setLastName(value)} value={lastName || ''} />
            )} >

            </FormField>
            <FormField label={`Gender`} style={{ fontWeight: 'bold' }} inputComponent={(
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton selected={gender == 'Male'} onPress={() => setGender('Male')}
                        ringProperties={{ color: Colors.SUCCESS }}
                        style={{ fontSize: Font.LARGE }}
                        title={'Male'} />
                    <RadioButton selected={gender != 'Male'} onPress={() => setGender('Female')}
                        ringProperties={{ color: Colors.SUCCESS }}
                        style={{ fontSize: Font.LARGE }}
                        title={'Female'} />
                </View>
            )} >

            </FormField>
            <FormField label={`Birthdate`} style={{ fontWeight: 'bold' }} inputComponent={(
                <DatePicker style={styles.textbox} value={birthDate} onChangeDate={(value) => setBirthdate(value)} />
            )} ></FormField>
            <FormField label={`Email`} style={{ fontWeight: 'bold' }} inputComponent={(
                <TextInput style={styles.textbox} onChangeText={(value) => setEmail(email)} value={email || ''} />
            )} ></FormField>
            <Footer style={styles.footer}>
                <Button title={'Update'} icon={'save'} onPress={() => { update({ ...user, firstName, lastName, email, birthDate }) }}
                    style={{ backgroundColor: Colors.SUCCESS, color: Colors.FOREGROUND, borderRadius: 5, fontWeight: 'bold' }} />
                <Button title={'Cancel'} icon={'minus'} onPress={() => { setEdit(false) }}
                    style={{ backgroundColor: Colors.DANGER, color: Colors.FOREGROUND, borderRadius: 5, fontWeight: 'bold' }} />
            </Footer>
        </Form>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.25,
        flexDirection: 'column',
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 5,
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: Font.LARGE,
        marginBottom: 15,
    },
    textbox: {
        borderWidth: 0.25,
        borderRadius: 5,
        fontSize: Font.SMALL,
        padding: 10,
    },
    footer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 25,
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});

export default AccountForm;
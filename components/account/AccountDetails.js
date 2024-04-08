import { StyleSheet, View, Text } from "react-native";
import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';
import DetailField from "./DetailField";
import { truncateText } from "../../utils/Utilities";
import ProfilePicture from "./ProfilePicture";
import Button from "./Button";

const AccountDetails = ({ screenStates, setEdit }) => {
    const { user } = screenStates;
    const { firstName, lastName, gender, birthDate, email } = user;

    if (!(firstName && lastName && gender && birthDate && email)) return null;
    const data = [
        { label: 'First name:', value: truncateText(firstName, 16) },
        { label: 'Last name:', value: truncateText(lastName, 16) },
        { label: 'Gender:', value: gender },
        { label: 'Birth date:', value: birthDate },
        { label: 'Email:', value: truncateText(email, 16) }
    ]

    const Container = View;

    return (
        <Container style={styles.container}>
            <View style={styles.editButton}>
                <Button title={'Edit'} icon={'pen'} onPress={() => { setEdit(true) }}
                    style={{ backgroundColor: Colors.SUCCESS, color: Colors.FOREGROUND, borderRadius: 5, fontWeight: 'bold' }} />
            </View>
            <View style={styles.profilePicture}>
                <ProfilePicture gender={gender} />
            </View>
            {
                data.map(item => {
                    return (
                        <DetailField key={item.label} label={item.label} value={item.value} />
                    )
                })
            }
        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 0.25,
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 5,
    },
    label: {
        fontSize: Font.MEDIUM,
        fontWeight: 'bold',
        color: Colors.DARK,
        marginRight: 10,
    },
    value: {
        fontSize: Font.MEDIUM,
        fontWeight: 'normal',
        color: Colors.BLACK,
        marginLeft: 10,
    },
    profilePicture: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    editButton: {
        position: 'absolute',
        top: 14,
        right: 14,
        zIndex: 2,
    }
});

export default AccountDetails;
import { StyleSheet, View } from "react-native";
import { Foundation } from '@expo/vector-icons';

import * as Font from '../../constants/Font';
import * as Colors from '../../constants/Colors';

const ProfilePicture = ({ gender }) => {

    const Container = View;

    return (
        <Container style={styles.container}>
            <Foundation name={gender === "Male" ? "torso" : "torso-female"} size={Font.BASE * 100} color={Colors.WHITE} />

        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.25,
        backgroundColor: Colors.DEFAULT,
        alignItems: 'center',
        paddingHorizontal: 35,
        justifyContent: 'center',
        borderRadius: 5,

    }
});

export default ProfilePicture;
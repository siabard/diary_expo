import { ToastAndroid } from "react-native";

const truncateText = (text, limit) => {
    text = text.trim();
    if (text.length > limit) {
        return `${text.substring(0, limit)}...`;
    } else {
        return text;
    }
};

const toastMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        200
    );
};

export {
    truncateText,
    toastMessage,
}
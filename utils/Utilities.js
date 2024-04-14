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

const extractStringDate =  (date = new Date()) => {
    date = new Date(date);
    const [year, month, day] = [date.getFullYear(), ((date.getMonth() + 1) + '').padStart(2, '0'), (date.getDate() + '').padStart(2, '0')];
    return `${year}-${month}-${day}`
};

const getDate = (date = new Date()) => {
    const months = [
        `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`
    ];
    return {
        month: months[date.getMonth()],
        year: date.getFullYear(),
        day: (date.getDate() + ``).padStart(2, '0')
    }
};


export {
    extractStringDate,
    truncateText,
    toastMessage,
    getDate,
}
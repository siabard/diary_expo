import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import * as Font from "../../constants/Font";
import * as Colors from "../../constants/Colors";
import Button from "../account/Button";
import { toastMessage } from "../../utils/Utilities";

const DiaryDetail = ({ methods, screenStates }) => {
  const { user, diary } = screenStates;
  const { content } = diary;

  const Container = View;

  const deleteDiary = () => {
    methods.deleteDiary(diary.id, (rowsAffected) => {
      toastMessage(`Successfully deleted ${rowsAffected}`);
      methods.goBack();
    });
  };
  return (
    <Container style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={`Edit`}
          icon={`pen`}
          style={{ ...styles.button, backgroundColor: Colors.SUCCESS }}
          onPress={() => {
            methods.editDiary(true);
          }}
        />
        <Button
          title={`Delete`}
          icon={`trash`}
          style={{ ...styles.button, backgroundColor: Colors.DANGER }}
          onPress={() => {
            deleteDiary();
          }}
        />
      </View>
      <View style={styles.diaryContainer}>
        <Text style={styles.label}>Date: {diary.date}</Text>
        <Text style={styles.label}>Dear Diary,</Text>
        <View style={{ height: 240, marginBottom: 10 }}>
          <WebView
            source={{
              html: `
                        <html>
                        <head>
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <style>
                            p {
                                font-size: 19px;
                                text-indent: 25px;
                                text-align: justify;
                            }
                            </style>
                        </head>
                        <body>
                            <p>${content}</p>
                        </body>
                        </html>
                    `,
            }}
          />
        </View>
        <Text>Love, {`\n${user.firstName}`}</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    columnGap: 10,
  },
  diaryContainer: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 0.25,
  },
  button: {
    fontSize: Font.SMALL,
    color: Colors.FOREGROUND,
    borderRadius: 5,
    fontWeight: "bold",
  },
  title: {
    fontSize: Font.MEDIUM,
  },
  label: {
    fontSize: Font.SMALL,
    marginBottom: 10,
  },
});

export default DiaryDetail;

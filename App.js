import { useState, useEffect } from 'react';
import AppScreen from './components/AppScreen';
import DiaryDataBase from './model/DiaryDatabase';

const db = new DiaryDataBase('diary');

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('home');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [user, setUser] = useState({});

  const screenStates = { currentScreen: currentScreen, previousScreen: previousScreen, user: user };

  const gotoScreen = (screenName, callback = () => { }) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screenName);
    callback();
  };


  const updateUser = async (user, callback) => {
    try {
      const { rowsAffected } = await db.updateUser(user, callback);
      setUser((prevUser) => {
        return {
          ...prevUser, ...user
        }
      })
      callback(rowsAffected);
    } catch (error) {
      console.log(error.message);
    }
  }


  const methods = { goto: gotoScreen, updateUser: updateUser }
  useEffect(() => {
    const init = async () => {
      try {
        await db.initialize();
        const user = await db.fetchUser(1);

        setUser(user);
      } catch (error) {
        console.log(error.message);
      }
    }
    init();
  }, []);

  return (
    <AppScreen screenStates={screenStates} methods={methods} ></AppScreen>
  );
}
import { useState, useEffect } from 'react';
import AppScreen from './components/AppScreen';
import DiaryDataBase from './model/DiaryDatabase';

const db = new DiaryDataBase('diary');

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('home');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [user, setUser] = useState({});
  const [diaries, setDiaries] = useState([]);
  const [diary, setDiary] = useState({});

  const screenStates = { currentScreen: currentScreen, previousScreen: previousScreen, user: user, diaries: diaries, diary: {} };

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

  const insertDiary = async (diary, callback) => {
    try {
      const { rowsAffected } = await db.insertDiary(diary, callback);
      setDiaries((prevs) => {
        return [
          ...prevs,  diary
        ].sort((a, b) => {
          return (Date.parse(b.date) - Date.parse(a.date));
        
        });        
      })
      callback(rowsAffected);
    } catch (error) {
      console.log(error.message);
    }
  };


  const methods = { goto: gotoScreen, updateUser: updateUser, insertDiary: insertDiary, setDiary: setDiary };
  
  useEffect(() => {
    const init = async () => {
      try {
        await db.initialize();
        const user = await db.fetchUser(1);
        const diaries = await db.fetchDiaries(user.id);
        setUser(user);
        setDiaries(diaries);
        setDiary(diaries[0]);
      } catch (error) {
        console.log('error found');
        console.log(error);
        console.log(error.message);
      }
    }
    
    init();
  }, []);

  return (
    <AppScreen screenStates={screenStates} methods={methods} ></AppScreen>
  );
}
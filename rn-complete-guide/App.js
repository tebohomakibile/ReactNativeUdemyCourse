import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalEnteredHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals,enteredGoal])
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.goalAddView}>
        <TextInput placeholder = "Course goal" style={styles.goalTextBox} onChangeText={goalEnteredHandler} value={enteredGoal} />
        <Button title = "ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style={styles.goalCards}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50
  },
  goalAddView: {
    flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'
  },
  goalTextBox: {
    width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 0
  },
  goalCards: {
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    padding: 10
  }

});

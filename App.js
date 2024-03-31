
import Constants from 'expo-constants';

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

import { generatePuzzle, adjacentIsEmpty, swapBoxes, isWinner } from './utils.js';

export default function App() {
  const [puzzle2D, setPuzzle2D] = useState(generatePuzzle());

  function move_cb(l, c) {

  }

  function newPuzzle() {
 
  }

  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.game}>

        <View style={styles.statistic}>
         
        </View>

        <View>
          
        </View>
        <Puzzle />

      </View>
      <ToolBar>
       
      </ToolBar>
    </View>
  );
}

function Header() {

}
function Puzzle({ ct2D, usrOnPress_cb }) {
  function onPress_cb(l, c) {
    
  }

  return (
    <View style={styles.puzzle}>

    </View>
  );
}
function line({ children }) {
 
}
function box({ value, usrOnPress_cb }) {
 
}
function ToolBar({ children }) {
 
}
function Button({ texte, usrOnPress_cb }) {
  
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: 'lavenderblush',
    paddingTop: Constants.statusBarHeight,
  },
  entête: {
    alignItems: "center",
    backgroundColor: "coral",
  },
  game: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: "beige",
  },
  statistic: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  puzzle: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'honeydew',
  },
  line: {
    flex: 0,
    flexDirection: "row",
    //justifyContent: "space-around",
    //alignSelf: "stretch",
  },
  box: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'coral',
  },
  label: {
    fontSize: 30,
    paddingTop: 2,
    paddingBottom: 2
  },
  value: {
    fontSize: 25,
    paddingTop: 2,
    paddingBottom: 2
  }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Puzzle({ puzzle2D, usrOnPress_cb }) {
  return (
    <View style={styles.puzzle}>
      {puzzle2D.map((line, l) => (
        <Line key={l}>
          {line.map((value, c) => (
            <Box
              key={c}
              value={value}
              usrOnPress_cb={() => usrOnPress_cb(l, c)}
            />
          ))}
        </Line>
      ))}
    </View>
  );
}

function Line({ children }) {
  return <View style={styles.line}>{children}</View>;
}

function Box({ value, usrOnPress_cb }) {
  return (
    <TouchableOpacity style={styles.box} onPress={usrOnPress_cb}>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  puzzle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flexDirection: 'row',
  },
  box: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'darkslategray',
    backgroundColor: 'lightgray',
    margin: 2, // Ajouté pour espacer légèrement les cases
  },
  value: {
    fontSize: 20,
  },
});

export default Puzzle;

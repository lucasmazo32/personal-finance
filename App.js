import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import Landing from './containers/Landing';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Landing} />
    </NativeRouter>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

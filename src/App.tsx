import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" hidden />
    <View style={{ backgroundColor:'#f17000', flex: 1 }} />
  </>

);

export default App;
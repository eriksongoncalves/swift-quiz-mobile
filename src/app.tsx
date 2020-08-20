import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from "react-native";

console.disableYellowBox = true;

import Routes from './routes';

const App: React.FC = () => (
	<>
	<StatusBar barStyle="light-content" />
	<Routes />
	</>
);

export default App;

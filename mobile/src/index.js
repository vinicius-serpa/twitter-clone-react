import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings(["Unrecognized WebSocket", "Can't perform"]);

const App = () => <Routes />;

export default App;
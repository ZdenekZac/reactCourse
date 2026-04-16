import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Header from './ui/Header';
import Heading from './ui/Heading';

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h3">Test of Heading</Heading>
      <Header />
    </>
  );
}

export default App;

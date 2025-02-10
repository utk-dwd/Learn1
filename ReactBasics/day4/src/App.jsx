import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useScreenSize from './components/useScreenSize'

function App() {
  const screenSize = useScreenSize();

  return (
    <div>
      <h1>Screen Size is: </h1>
      <p>Width: {screenSize.width}</p>
      <p>Height: {screenSize.height}</p>
    </div>
  );
};
export default App;

import React, { useEffect, useState } from 'react';
import Appbar from './components/Appbar/Appbar';
import Todo from './pages/Todo';
import './App.css'
import WifiIndicator from './components/WifiIndicator/WifiIndicator';

function App() {

  const [offline, setoffline] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("offline", () => setoffline(true));
    window.addEventListener("online", () => setoffline(false));
  }, [])

  return (
    <>
      <Appbar />
      <div className="is-flex is-justify-content-center py-6 px-2">
        <div className="container">
          <Todo />
        </div>
      </div>
      {
        offline && <div className="wifi-indicator bottom left">
          <WifiIndicator />
        </div>
      }
    </>
  );
}

export default App;

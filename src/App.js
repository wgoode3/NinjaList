import React, { useState } from 'react';
import NinjaForm from './Components/NinjaForm';
import NinjaList from './Components/NinjaList';

function App() {
  const [ state, setState ] = useState({
    ninjas: []
  }); 

  const ninjaAdded = ninja => {
    console.log("ninja was created in the form", ninja);
    setState({ninjas: [...state.ninjas, ninja]});
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Ninja Things, the App</h1>
      </div>
      <NinjaForm addNinja={ninjaAdded} msg="this is a prop" />
      <hr />
      <NinjaList ninjas={state.ninjas} />
    </div>
  );
}

export default App;

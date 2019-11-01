import React, { useState } from 'react';
import './App.css';
import Admin from './admin/Admin';
import Principal from './principal/Principal';


function App() {

  const [layout, setLayout] = useState(0);
  var pagina = <Principal setLayout={setLayout} />
  if(layout == 0){
    pagina = <Principal setLayout={setLayout} />
  }else if(layout == 1){
    pagina = <Admin setLayout={setLayout} />
  }
  
  return (
    <div className="App">
      {pagina}
    </div>
  );
}

export default App;

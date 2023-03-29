import React from 'react';
import {LdButton, LdIcon} from "@emdgroup-liquid/liquid/dist/react";

function App() {
  return (
      <div className="ld-theme-bubblegum">
        <LdButton>
          Click me!
          <LdIcon name="bulb"/>
        </LdButton>
      </div>
  );
}

export default App;

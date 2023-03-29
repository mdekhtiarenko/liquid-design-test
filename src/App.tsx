import React from 'react';
import {ModalContextProvider} from "./contexts/ModalContextProps";
import {InitialPage} from "./pages/InitialPage";

function App() {
  return (
      <div className="ld-theme-bubblegum">
        <ModalContextProvider>

          <InitialPage/>

        </ModalContextProvider>
      </div>
  );
}

export default App;
